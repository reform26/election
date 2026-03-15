/**
 * cheers.js - 개혁신당 2026 후보자 응원 시스템
 *
 * ■ 응원 규칙
 *   - 후보자별 하루 1번 응원 가능
 *   - 자정 이후 다시 응원 가능
 *   - 재시도 시 "내일 다시 응원하러 와주세요 🧡" 안내
 *
 * ■ 스팸 방지 2중 체계
 *   1단계: 쿠키 (자정까지 / 후보자별)
 *   2단계: IP 해시 Firebase 저장 (쿠키 삭제 우회 차단)
 *
 * ■ index.html 적용 방법
 *   [1] </body> 바로 위에:
 *       <script type="module" src="cheers.js"></script>
 *
 *   [2] openProfileModal() 함수 안,
 *       modal-photo-area innerHTML 세팅 바로 다음 줄에:
 *       window.renderModalCheerBtn(c.name);
 *
 *   [3] 순위 위젯 원하는 위치에:
 *       <div id="cheers-ranking-root" class="max-w-7xl mx-auto px-4 md:px-10 mt-4 mb-4"></div>
 *
 *   [4] Firebase 콘솔 → Realtime Database → 규칙 탭:
 *       {
 *         "rules": {
 *           "cheers": { ".read": true, ".write": true },
 *           "spam":   { ".read": false, ".write": true }
 *         }
 *       }
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
    getDatabase, ref, runTransaction, onValue, get, set
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDPUhbOe5aYX1xKQ4HJ6Wmnb8KKpdJOwSg",
    authDomain: "reform2026-c4c49.firebaseapp.com",
    databaseURL: "https://reform2026-c4c49-default-rtdb.firebaseio.com",
    projectId: "reform2026-c4c49",
    storageBucket: "reform2026-c4c49.firebasestorage.app",
    messagingSenderId: "724644164289",
    appId: "1:724644164289:web:7329a353d35af19e1f5a40",
    measurementId: "G-32Z7Z8HGRV"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 유틸
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 오늘 날짜 키 (YYYY-MM-DD, 한국 시간 기준)
function getTodayKey() {
    return new Date().toLocaleDateString('ko-KR', {
        timeZone: 'Asia/Seoul',
        year: 'numeric', month: '2-digit', day: '2-digit'
    }).replace(/\. /g, '-').replace('.', '');
}

// 오늘 자정까지 남은 ms (한국 시간 기준)
function getMsUntilMidnight() {
    const now  = new Date();
    const kst  = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
    const next = new Date(kst);
    next.setHours(24, 0, 0, 0);
    return next - kst;
}

// 이번 주 키 (월요일 기준)
function getWeekKey() {
    const now = new Date();
    const day = now.getDay();
    const mon = new Date(now);
    mon.setDate(now.getDate() - day + (day === 0 ? -6 : 1));
    return `${mon.getFullYear()}W${String(mon.getMonth()+1).padStart(2,'0')}${String(mon.getDate()).padStart(2,'0')}`;
}

// IP → SHA-256 해시 (개인정보 저장 안 함)
async function getClientHash() {
    try {
        const r = await fetch('https://api.ipify.org?format=json', {
            signal: AbortSignal.timeout(3000)
        });
        const { ip } = await r.json();
        const buf = await crypto.subtle.digest(
            'SHA-256', new TextEncoder().encode(ip + 'restep2026salt')
        );
        return Array.from(new Uint8Array(buf))
            .slice(0, 8).map(b => b.toString(16).padStart(2,'0')).join('');
    } catch {
        let fp = localStorage.getItem('__rfp');
        if (!fp) {
            fp = Math.random().toString(36).slice(2) + Date.now().toString(36);
            localStorage.setItem('__rfp', fp);
        }
        const buf = await crypto.subtle.digest(
            'SHA-256', new TextEncoder().encode(fp + 'restep2026salt')
        );
        return Array.from(new Uint8Array(buf))
            .slice(0, 8).map(b => b.toString(16).padStart(2,'0')).join('');
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 스팸 방지 2중 체계
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// [1단계] 쿠키 - 자정까지 유효 (후보자별)
const COOKIE_PREFIX = 'cheer_';

function hasCheeredCookie(name) {
    const key   = COOKIE_PREFIX + encodeURIComponent(name);
    const match = document.cookie.split(';').find(c => c.trim().startsWith(key + '='));
    if (!match) return false;
    // 저장된 날짜 키가 오늘과 같으면 이미 응원
    return match.trim().split('=')[1] === getTodayKey();
}

function setCheeredCookie(name) {
    const key     = COOKIE_PREFIX + encodeURIComponent(name);
    const maxAge  = Math.floor(getMsUntilMidnight() / 1000);
    document.cookie = `${key}=${getTodayKey()}; max-age=${maxAge}; path=/; SameSite=Lax`;
}

// [2단계] IP 해시 Firebase - 오늘 날짜 키로 저장
async function hasCheeredByHash(name, hash) {
    try {
        const snap = await get(
            ref(db, `spam/${hash}/${encodeURIComponent(name)}`)
        );
        return snap.exists() && snap.val() === getTodayKey();
    } catch { return false; }
}

async function setHashRecord(name, hash) {
    try {
        await set(
            ref(db, `spam/${hash}/${encodeURIComponent(name)}`),
            getTodayKey()
        );
    } catch {}
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 응원 핵심 로직
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

async function addCheer(name) {
    // 1단계: 쿠키 체크 (빠름)
    if (hasCheeredCookie(name)) return { success: false, reason: 'cooldown' };

    // 2단계: IP 해시 체크 (비동기)
    const hash = await getClientHash();
    if (await hasCheeredByHash(name, hash)) {
        setCheeredCookie(name); // 쿠키 동기화
        return { success: false, reason: 'cooldown' };
    }

    // Firebase 원자적 업데이트
    const weekKey = getWeekKey();
    const candRef = ref(db, `cheers/${encodeURIComponent(name)}`);

    try {
        let result = null;
        await runTransaction(candRef, (cur) => {
            if (!cur) cur = { total: 0, weekly: 0, weekKey };
            if (cur.weekKey !== weekKey) { cur.weekly = 0; cur.weekKey = weekKey; }
            cur.total  = (cur.total  || 0) + 1;
            cur.weekly = (cur.weekly || 0) + 1;
            result = { ...cur };
            return cur;
        });

        setCheeredCookie(name);
        await setHashRecord(name, hash);

        return { success: true, data: result };
    } catch(e) {
        console.error('[응원] 저장 실패:', e);
        return { success: false, reason: 'error' };
    }
}

async function fetchAllCheers() {
    try {
        const snap = await get(ref(db, 'cheers'));
        return snap.val() || {};
    } catch { return {}; }
}

function subscribeRankings(callback) {
    const weekKey = getWeekKey();
    onValue(ref(db, 'cheers'), (snap) => {
        const raw  = snap.val() || {};
        const list = Object.entries(raw).map(([k, v]) => ({
            name:   decodeURIComponent(k),
            total:  v.total  || 0,
            weekly: v.weekKey === weekKey ? (v.weekly || 0) : 0
        }));
        callback({
            weekly:     [...list].filter(x => x.weekly > 0).sort((a,b) => b.weekly - a.weekly).slice(0, 20),
            cumulative: [...list].filter(x => x.total  > 0).sort((a,b) => b.total  - a.total ).slice(0, 20)
        });
    });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 토스트
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function showToast(msg, isWarn = false) {
    document.getElementById('__cheer_toast')?.remove();
    const t = document.createElement('div');
    t.id    = '__cheer_toast';
    t.style.cssText = `
        position:fixed; bottom:80px; left:50%;
        transform:translateX(-50%);
        z-index:9999;
        transition:opacity .4s, transform .4s;
        white-space:nowrap; pointer-events:none;
    `;
    t.className = `px-5 py-3 rounded-2xl font-black text-sm shadow-xl border
        ${isWarn
            ? 'bg-white dark:bg-slate-800 text-gray-500 dark:text-slate-300 border-gray-100 dark:border-slate-700'
            : 'bg-orange-500 text-white border-orange-400'}`;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => {
        t.style.opacity   = '0';
        t.style.transform = 'translateX(-50%) translateY(8px)';
    }, 2400);
    setTimeout(() => t.remove(), 2900);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 모달 응원 버튼 (사진 영역 좌하단 오버레이)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

window.renderModalCheerBtn = async function(name) {
    const photoArea = document.getElementById('modal-photo-area');
    if (!photoArea) return;

    document.getElementById('__modal_cheer_wrap')?.remove();

    // 현재 응원 수 가져오기
    let total = 0;
    try {
        const snap = await get(ref(db, `cheers/${encodeURIComponent(name)}`));
        total = snap.val()?.total || 0;
    } catch {}

    const already = hasCheeredCookie(name);

    // photo-area가 position:relative 여야 오버레이 정상 작동
    photoArea.style.position = 'relative';

    const wrap = document.createElement('div');
    wrap.id = '__modal_cheer_wrap';
    wrap.style.cssText = `
        position:absolute; bottom:12px; left:0; right:0;
        display:flex; justify-content:space-between; align-items:flex-end;
        padding:0 12px; z-index:20; pointer-events:none;
    `;
    wrap.innerHTML = `
        <!-- 좌하단: 응원하기 버튼 -->
        <button id="__modal_cheer_btn"
            onclick="window.__handleModalCheer('${name}')"
            style="
                pointer-events:auto;
                display:flex; align-items:center; gap:5px;
                padding:7px 14px; border-radius:99px;
                font-family:'Pretendard','Noto Sans KR',sans-serif;
                font-weight:900; font-size:0.78rem;
                backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px);
                border:1.5px solid ${already ? 'rgba(255,102,0,0.5)' : 'rgba(255,255,255,0.7)'};
                background:${already ? 'rgba(255,102,0,0.88)' : 'rgba(255,255,255,0.88)'};
                color:${already ? '#fff' : '#FF6600'};
                box-shadow:0 4px 14px rgba(0,0,0,0.18);
                transition:all 0.2s; letter-spacing:-0.02em; cursor:pointer;
            "
        >
            <span id="__cheer_heart" style="font-size:1rem;line-height:1;">${already ? '🧡' : '🤍'}</span>
            <span id="__cheer_label">${already ? '오늘 응원함' : '응원하기'}</span>
        </button>

        <!-- 우하단: 누적 카운터 배지 -->
        ${total > 0 ? `
        <div id="__cheer_counter_badge" style="
            pointer-events:none;
            display:flex; align-items:center; gap:4px;
            padding:6px 12px; border-radius:99px;
            font-family:'Pretendard','Noto Sans KR',sans-serif;
            font-weight:900; font-size:0.75rem;
            backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px);
            background:rgba(15,23,42,0.65);
            color:white;
            box-shadow:0 4px 14px rgba(0,0,0,0.18);
            letter-spacing:-0.02em;
        ">
            <span style="font-size:0.9rem;line-height:1;">🧡</span>
            <span id="__cheer_total_count">${total.toLocaleString()}</span>
            <span style="font-weight:700;opacity:0.85;">명이 응원중</span>
        </div>` : `<div id="__cheer_counter_badge"></div>`}
    `;
    photoArea.appendChild(wrap);
};

window.__handleModalCheer = async function(name) {
    const btn = document.getElementById('__modal_cheer_btn');
    if (!btn) return;

    // 이미 응원한 경우 → "내일 다시" 토스트만 띄우고 끝
    if (hasCheeredCookie(name)) {
        showToast('내일 다시 응원하러 와주세요 🧡', true);
        return;
    }

    btn.disabled = true;

    // 낙관적 UI 즉시 반영
    const heartEl = document.getElementById('__cheer_heart');
    const labelEl = document.getElementById('__cheer_label');
    const countEl = document.getElementById('__cheer_count');

    heartEl && (heartEl.textContent = '🧡');
    labelEl && (labelEl.textContent = '응원중...');
    btn.style.background  = 'rgba(255,102,0,0.88)';
    btn.style.color       = '#fff';
    btn.style.borderColor = 'rgba(255,102,0,0.5)';

    const res = await addCheer(name);

    if (res.success) {
        // 성공
        labelEl && (labelEl.textContent = '오늘 응원함');
        // 우하단 카운터 배지 업데이트
        const badgeEl = document.getElementById('__cheer_counter_badge');
        const totalCount = res.data.total;
        if (badgeEl) {
            badgeEl.style.cssText = `
                pointer-events:none;
                display:flex; align-items:center; gap:4px;
                padding:6px 12px; border-radius:99px;
                font-family:'Pretendard','Noto Sans KR',sans-serif;
                font-weight:900; font-size:0.78rem;
                backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px);
                background:rgba(15,23,42,0.65);
                color:white;
                box-shadow:0 4px 14px rgba(0,0,0,0.18);
                letter-spacing:-0.02em;
            `;
            badgeEl.innerHTML = `
                <span style="font-size:0.9rem;line-height:1;">🧡</span>
                <span id="__cheer_total_count">${totalCount.toLocaleString()}</span>
                <span style="font-weight:700;opacity:0.85;">명이 응원중</span>
            `;
        }
        showToast(`🧡 ${name} 후보를 응원했습니다!`);

    } else if (res.reason === 'cooldown') {
        // IP 해시로 걸린 경우도 동일 처리
        heartEl && (heartEl.textContent = '🧡');
        labelEl && (labelEl.textContent = '오늘 응원함');
        showToast('내일 다시 응원하러 와주세요 🧡', true);

    } else {
        // 오류 → 버튼 원상복구
        heartEl && (heartEl.textContent = '🤍');
        labelEl && (labelEl.textContent = '응원하기');
        btn.style.background  = 'rgba(255,255,255,0.88)';
        btn.style.color       = '#FF6600';
        btn.style.borderColor = 'rgba(255,255,255,0.7)';
        btn.disabled = false;
        showToast('잠시 후 다시 시도해주세요', true);
    }
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 순위 위젯 (2줄 가로 슬라이더)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 슬라이더 자동 스크롤 인스턴스 관리
const _sliderTimers = {};

function renderRankingWidget(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <div class="bg-white dark:bg-slate-800 rounded-[1.5rem] border border-orange-100
            dark:border-slate-700 shadow-lg overflow-hidden">

            <!-- 헤더 -->
            <div class="px-5 pt-4 pb-3 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <div class="w-1.5 h-5 bg-orange-500 rounded-full"></div>
                    <h3 class="font-black text-gray-800 dark:text-white text-base tracking-tight">응원 순위</h3>
                </div>
                <span class="text-[10px] text-gray-400 font-medium flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse"></span>
                    실시간
                </span>
            </div>

            <!-- 누적 순위 줄 -->
            <div class="border-t border-orange-50 dark:border-slate-700">
                <div class="flex items-center gap-2 px-5 py-2">
                    <span class="text-[11px] font-black text-orange-500 shrink-0 w-[52px]">👑 누적</span>
                    <div id="__slider_cumulative"
                        class="flex gap-2 overflow-x-auto cursor-grab select-none"
                        style="scrollbar-width:none; -ms-overflow-style:none; padding:4px 0;">
                        <div class="flex items-center justify-center w-full py-2 opacity-30">
                            <div class="w-5 h-5 border-2 border-orange-300 border-t-orange-500 rounded-full animate-spin-custom"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 주간 순위 줄 -->
            <div class="border-t border-orange-50 dark:border-slate-700">
                <div class="flex items-center gap-2 px-5 py-2">
                    <span class="text-[11px] font-black text-orange-500 shrink-0 w-[52px]">🔥 주간</span>
                    <div id="__slider_weekly"
                        class="flex gap-2 overflow-x-auto cursor-grab select-none"
                        style="scrollbar-width:none; -ms-overflow-style:none; padding:4px 0;">
                        <div class="flex items-center justify-center w-full py-2 opacity-30">
                            <div class="w-5 h-5 border-2 border-orange-300 border-t-orange-500 rounded-full animate-spin-custom"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 푸터 -->
            <div class="px-5 py-2.5 bg-gray-50 dark:bg-slate-900/50 text-center border-t border-gray-100 dark:border-slate-700">
                <p class="text-[10px] text-gray-400 font-medium">
                    🧡 후보자별 하루 1회 · 매주 월요일 주간 초기화 · 클릭하면 프로필 열림
                </p>
            </div>
        </div>
    `;

    // 슬라이더 숨김 스크롤바 CSS
    const style = document.getElementById('__cheer_slider_style');
    if (!style) {
        const s = document.createElement('style');
        s.id = '__cheer_slider_style';
        s.textContent = `
            #__slider_cumulative::-webkit-scrollbar,
            #__slider_weekly::-webkit-scrollbar { display: none; }
        `;
        document.head.appendChild(s);
    }

    subscribeRankings(({ weekly, cumulative }) => {
        window.__rankData = { weekly, cumulative };
        renderSlider('__slider_cumulative', cumulative, 'total');
        renderSlider('__slider_weekly',     weekly,     'weekly');
    });
}

// 다크모드 여부 감지 (Tailwind class 방식)
function isDark() {
    return document.documentElement.classList.contains('dark');
}

// 카드 1개 HTML (가로 레이아웃)
function _sliderCardHTML(item, rank, countKey) {
    const medals  = ['🥇','🥈','🥉'];
    const isMedal = rank <= 3;
    const count   = item[countKey] || 0;
    const cand    = typeof candidates !== 'undefined'
        ? candidates.find(c => c.name === item.name) : null;
    const dark    = isDark();

    // 직책에 따라 지역 표시 다르게
    let regionShort = '';
    if (cand) {
        const cat = cand.category || '';
        if (cat === '기초단체장' || cat === '기초의원' || cat === '광역의원') {
            // 광역의원은 district 필드 우선 ("서대문 1" → "서대문", "수성 3" → "수성")
            // district가 숫자만이거나 빈값이면 region 폴백
            if (cat === '광역의원' && cand.district && !/^\d+$/.test(cand.district.trim())) {
                regionShort = cand.district.trim().split(' ')[0]
                    .replace(/시$|군$|구$/, '');
            } else {
            const parts = (cand.region || '').trim().split(' ');
            if (parts.length >= 2) {
                regionShort = parts[1].replace(/시$|군$|구$/, '');
            } else {
                const cleaned = (cand.office || '')
                    .replace(/\s*(후보|의회|의원|청장|시장|군수)\s*/g, '')
                    .replace(/시$|군$|구$/, '')
                    .trim();
                regionShort = (cleaned && cleaned !== '기초' && cleaned !== '광역')
                    ? cleaned
                    : parts[0].replace('특별시','').replace('광역시','').replace('특별자치시','')
                        .replace('특별자치도','').replace('도','').trim();
            }
            }
        } else {
            regionShort = (cand.region || '')
                .replace('특별시','').replace('광역시','').replace('특별자치시','')
                .replace('특별자치도','').replace('도','').replace('특별','')
                .trim().split(' ')[0];
        }
    }

    const ringStyle = rank === 1 ? 'border:2.5px solid #FBBF24;'
                    : rank === 2 ? 'border:2.5px solid #CBD5E1;'
                    : rank === 3 ? 'border:2.5px solid #D97706;'
                    : `border:1.5px solid ${dark ? 'rgba(255,186,130,0.25)' : '#fed7aa'};`;

    // 다크/라이트 색상 세트
    const bgNormal = rank === 1
        ? (dark ? 'linear-gradient(135deg,rgba(120,53,15,0.35),rgba(154,52,18,0.25))' : 'linear-gradient(135deg,#fff7ed,#ffedd5)')
        : 'transparent';
    const bgHover  = rank === 1
        ? (dark ? 'linear-gradient(135deg,rgba(154,52,18,0.4),rgba(194,65,12,0.35))' : 'linear-gradient(135deg,#ffedd5,#fed7aa)')
        : (dark ? 'rgba(120,53,15,0.2)' : 'rgba(255,237,213,0.5)');

    const borderColor = rank <= 3
        ? (dark ? 'rgba(255,102,0,0.25)' : 'rgba(255,102,0,0.15)')
        : (dark ? 'rgba(255,186,130,0.15)' : 'rgba(255,186,130,0.2)');

    const nameColor    = dark ? '#f1f5f9' : '#1e293b';
    const regionColor  = dark ? '#64748b' : '#94a3b8';
    const rankColor    = dark ? '#64748b' : '#9ca3af';
    const photoBg      = dark ? '#1e293b' : '#fff7ed';
    const heartBg      = dark ? 'rgba(255,102,0,0.15)' : 'rgba(255,102,0,0.1)';

    return `
        <div onclick="openProfileModal && openProfileModal('${item.name}')"
            onmouseenter="this.style.background='${bgHover}'"
            onmouseleave="this.style.background='${bgNormal}'"
            style="
                flex-shrink:0;
                display:flex; align-items:center; gap:8px;
                padding:6px 12px 6px 8px;
                border-radius:99px;
                background:${bgNormal};
                border:1px solid ${borderColor};
                cursor:pointer; transition:background 0.15s;
                white-space:nowrap;
            ">

            <!-- 순위 -->
            <div style="
                font-size:${isMedal ? '0.85rem' : '0.6rem'};
                font-weight:900;
                color:${isMedal ? 'inherit' : rankColor};
                width:${isMedal ? '18px' : '14px'};
                text-align:center;
                flex-shrink:0;
            ">${isMedal ? medals[rank-1] : rank}</div>

            <!-- 원형 사진 -->
            <div style="
                width:32px; height:32px; border-radius:50%;
                overflow:hidden; flex-shrink:0;
                background:${photoBg};
                ${ringStyle}
                box-shadow:0 1px 4px rgba(0,0,0,${dark ? '0.3' : '0.1'});
            ">
                ${cand?.photo
                    ? `<img src="${cand.photo}" style="width:100%;height:100%;object-fit:cover;object-position:center top;" loading="lazy" alt="${item.name}">`
                    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:0.75rem;color:#fb923c;">${item.name[0]}</div>`}
            </div>

            <!-- 이름 -->
            <div style="font-size:0.72rem;font-weight:900;color:${nameColor};flex-shrink:0;">${item.name}</div>

            <!-- 지역 -->
            <div style="font-size:0.62rem;font-weight:600;color:${regionColor};flex-shrink:0;">${regionShort}</div>

            <!-- 하트 + 개수 -->
            <div style="
                display:flex;align-items:center;gap:2px;
                background:${heartBg};
                padding:2px 7px;border-radius:99px;
                flex-shrink:0;
            ">
                <span style="font-size:0.6rem;line-height:1;">🧡</span>
                <span style="font-size:0.65rem;font-weight:900;color:#FF6600;">${count.toLocaleString()}</span>
            </div>
        </div>
    `;
}

function renderSlider(sliderId, list, countKey) {
    const el = document.getElementById(sliderId);
    if (!el) return;

    // 기존 자동 스크롤 정지
    if (_sliderTimers[sliderId]) {
        clearInterval(_sliderTimers[sliderId]);
        delete _sliderTimers[sliderId];
    }

    if (!list?.length) {
        el.innerHTML = `<div style="padding:8px 4px;font-size:0.7rem;color:#cbd5e1;font-weight:700;white-space:nowrap;">
            아직 응원 데이터가 없어요 🤍</div>`;
        return;
    }

    // TOP 15만, 무한루프를 위해 카드 3벌 복제
    const top15 = list.slice(0, 20);
    const cardHTML = top15.map((item, i) => _sliderCardHTML(item, i + 1, countKey)).join('');
    el.innerHTML = cardHTML + cardHTML + cardHTML;  // 3벌 복제
    // 2번째 벌 시작 위치로 초기 스크롤 (앞뒤로 여유)
    requestAnimationFrame(() => {
        const oneSetWidth = el.scrollWidth / 3;
        el.scrollLeft = oneSetWidth;
    });

    // ── 드래그/스와이프 ──
    let isDown = false, startX = 0, scrollLeft = 0, hasDragged = false;

    const onDown = (e) => {
        isDown    = true;
        hasDragged = false;
        startX    = (e.pageX ?? e.touches?.[0]?.pageX) - el.offsetLeft;
        scrollLeft = el.scrollLeft;
        el.style.cursor = 'grabbing';
        stopAutoScroll(sliderId);
    };
    const onUp = () => {
        isDown = false;
        el.style.cursor = 'grab';
        if (!hasDragged) return;
        // 드래그로 범위 벗어난 경우 중간 벌로 보정
        const oneSet = el.scrollWidth / 3;
        if (el.scrollLeft < oneSet * 0.5) el.scrollLeft += oneSet;
        if (el.scrollLeft > oneSet * 2.5) el.scrollLeft -= oneSet;
        setTimeout(() => startAutoScroll(sliderId, el), 2000);
    };
    const onMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x    = (e.pageX ?? e.touches?.[0]?.pageX) - el.offsetLeft;
        const walk = (x - startX) * 1.2;
        if (Math.abs(walk) > 3) hasDragged = true;
        el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener('mousedown',  onDown);
    el.addEventListener('mouseup',    onUp);
    el.addEventListener('mouseleave', onUp);
    el.addEventListener('mousemove',  onMove);
    el.addEventListener('touchstart', onDown, { passive: true });
    el.addEventListener('touchend',   onUp);
    el.addEventListener('touchmove',  onMove, { passive: false });

    // 호버 시 자동 스크롤 정지
    el.addEventListener('mouseenter', () => stopAutoScroll(sliderId));
    el.addEventListener('mouseleave', () => {
        if (!isDown) startAutoScroll(sliderId, el);
    });

    // 자동 스크롤 시작
    startAutoScroll(sliderId, el);
}

function startAutoScroll(id, el) {
    if (_sliderTimers[id]) return;
    _sliderTimers[id] = setInterval(() => {
        if (!el || !el.isConnected) { clearInterval(_sliderTimers[id]); return; }
        el.scrollLeft += 1;
        // 무한루프: 3벌 중 마지막 벌 진입 시 → 중간 벌로 순간이동 (눈에 안 보임)
        const oneSet = el.scrollWidth / 3;
        if (el.scrollLeft >= oneSet * 2) {
            el.scrollLeft -= oneSet;
        }
    }, 20);
}

function stopAutoScroll(id) {
    if (_sliderTimers[id]) {
        clearInterval(_sliderTimers[id]);
        delete _sliderTimers[id];
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 진입점
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function initCheers() {
    renderRankingWidget('cheers-ranking-root');

    // 다크모드 토글 시 슬라이더 색상 즉시 재렌더
    const observer = new MutationObserver(() => {
        if (window.__rankData) {
            renderSlider('__slider_cumulative', window.__rankData.cumulative, 'total');
            renderSlider('__slider_weekly',     window.__rankData.weekly,     'weekly');
        }
    });
    observer.observe(document.documentElement, { attributeFilter: ['class'] });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCheers);
} else {
    initCheers();
}
