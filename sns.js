// ============================================================
//  sns.js  –  후보자 SNS 섹션
//  1줄: 유튜브 최신 영상 카드 (자동)
//  2줄: 인스타 릴스 & 유튜브 숏츠 (수동 등록)
//  ※ CSS 주입 및 HTML 구조 생성 모두 이 파일에서 담당
// ============================================================


// ════════════════════════════════════════════════════════════
//  💅 CSS 동적 주입
// ════════════════════════════════════════════════════════════
(function injectSNSStyles() {
    const style = document.createElement('style');
    style.id = 'sns-feed-styles';
    style.textContent = `
        /* ── SNS 피드 섹션 ── */
        #sns-feed-section {
            max-width: 80rem;
            margin: 0 auto;
            padding: 0 1rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
        @media (min-width: 768px) {
            #sns-feed-section { padding: 0 2.5rem; }
        }

        .sns-feed-scroll-wrap {
            overflow-x: auto;
            padding-bottom: 8px;
            -ms-overflow-style: none;
            scrollbar-width: none;
            user-select: none;
        }
        @media (hover: hover) {
            .sns-feed-scroll-wrap { cursor: grab; }
            .sns-feed-scroll-wrap.dragging { cursor: grabbing; }
        }
        .sns-feed-scroll-wrap::-webkit-scrollbar { display: none; }

        /* Shorts/Reels 배지 숨김 */
        .sns-feed-type-badge { display: none; }

        .sns-feed-track {
            display: flex;
            gap: 14px;
            padding: 4px 2px;
            width: max-content;
        }

        .sns-feed-card {
            position: relative;
            width: 200px;
            flex-shrink: 0;
            background: white;
            border-radius: 1rem;
            border: 1px solid #f3f4f6;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.06);
            transition: transform 0.2s, box-shadow 0.2s;
            cursor: pointer;
        }
        .dark .sns-feed-card {
            background: #1e293b;
            border-color: #334155;
        }
        @media (min-width: 640px) {
            .sns-feed-card:hover {
                transform: translateY(-4px);
                box-shadow: 0 8px 24px rgba(0,0,0,0.12);
            }
        }
        .sns-feed-card.type-yt { border-top: 3px solid #FF0000; }
        .sns-feed-card.type-ig { border-top: 3px solid #E4405F; }

        .sns-feed-thumb {
            width: 100%;
            height: 120px;
            object-fit: cover;
            display: block;
            background: #f1f5f9;
        }
        .dark .sns-feed-thumb { background: #0f172a; }

        .sns-feed-thumb-placeholder {
            width: 100%;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #f8fafc, #f1f5f9);
            color: #cbd5e1;
            font-size: 2rem;
        }
        .dark .sns-feed-thumb-placeholder {
            background: linear-gradient(135deg, #1e293b, #0f172a);
        }

        .sns-feed-info { padding: 10px 12px 12px; }

        .sns-feed-candidate {
            font-size: 0.65rem;
            font-weight: 900;
            color: #FF6600;
            margin-bottom: 3px;
            display: flex;
            align-items: center;
            gap: 4px;
        }
        .sns-feed-title {
            font-size: 0.7rem;
            font-weight: 700;
            color: #1e293b;
            line-height: 1.35;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            min-height: 1.9em;
        }
        .dark .sns-feed-title { color: #e2e8f0; }

        .sns-feed-type-badge {
            position: absolute;
            top: 8px;
            right: 8px;
            padding: 2px 7px;
            border-radius: 6px;
            font-size: 0.55rem;
            font-weight: 900;
            color: white;
            letter-spacing: 0.03em;
        }
        .sns-feed-type-badge.yt { background: #FF0000; }
        .sns-feed-type-badge.ig { background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }

        .sns-feed-empty {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2.5rem 1rem;
            color: #cbd5e1;
            gap: 10px;
            font-size: 0.8rem;
            font-weight: 700;
        }
        .dark .sns-feed-empty { color: #475569; }

        .sns-feed-loading {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            gap: 8px;
            color: #94a3b8;
            font-size: 0.8rem;
            font-weight: 700;
        }
        @keyframes snsPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
        }
        .sns-pulse { animation: snsPulse 1.2s ease-in-out infinite; }

        .sns-feed-date {
            font-size: 0.6rem;
            font-weight: 600;
            color: #94a3b8;
            margin-top: 4px;
        }
        .dark .sns-feed-date { color: #64748b; }

        /* 채널 링크카드 */
        .sns-channel-card {
            width: 130px;
            flex-shrink: 0;
            background: white;
            border-radius: 1rem;
            border: 1px solid #f3f4f6;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            transition: transform 0.2s, box-shadow 0.2s;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 14px 10px 12px;
            gap: 8px;
            text-align: center;
        }
        .dark .sns-channel-card { background: #1e293b; border-color: #334155; }
        @media (min-width: 640px) {
            .sns-channel-card:hover {
                transform: translateY(-4px);
                box-shadow: 0 8px 20px rgba(0,0,0,0.10);
            }
        }
        .sns-channel-card.type-yt { border-top: 3px solid #FF0000; }
        .sns-channel-card.type-ig { border-top: 3px solid #E4405F; }
        .sns-channel-card.type-fb { border-top: 3px solid #1877F2; }

        .sns-channel-avatar {
            width: 48px; height: 48px;
            border-radius: 50%;
            object-fit: cover;
            background: #f1f5f9;
            display: block;
        }
        .dark .sns-channel-avatar { background: #0f172a; }

        .sns-channel-avatar-placeholder {
            width: 48px; height: 48px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
            flex-shrink: 0;
        }
        .type-yt .sns-channel-avatar-placeholder { background: #fff0f0; }
        .type-ig .sns-channel-avatar-placeholder { background: #fff0f4; }
        .type-fb .sns-channel-avatar-placeholder { background: #f0f4ff; }

        .sns-channel-name {
            font-size: 0.7rem;
            font-weight: 900;
            color: #1e293b;
            line-height: 1.3;
            word-break: keep-all;
        }
        .dark .sns-channel-name { color: #e2e8f0; }

        .sns-channel-sub { font-size: 0.6rem; font-weight: 600; color: #94a3b8; }

        .sns-channel-badge {
            display: inline-flex;
            align-items: center;
            gap: 3px;
            padding: 2px 7px;
            border-radius: 99px;
            font-size: 0.55rem;
            font-weight: 900;
            color: white;
        }
        .type-yt .sns-channel-badge { background: #FF0000; }
        .type-ig .sns-channel-badge { background: linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888); }
        .type-fb .sns-channel-badge { background: #1877F2; }

        /* ── 2줄 임베드 카드 ── */
        .sns-embed-card {
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(0,0,0,0.10);
            background: #000;
        }
        .sns-embed-card.type-yt  { border-top: 3px solid #FF0000; }
        .sns-embed-card.type-ig  { border-top: 3px solid #E4405F; }

        .sns-embed-label {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            background: #fff;
            min-height: 30px;
        }
        .dark .sns-embed-label { background: #1e293b; }

        .sns-embed-badge {
            font-size: 0.55rem;
            font-weight: 900;
            color: #fff;
            padding: 2px 6px;
            border-radius: 4px;
            flex-shrink: 0;
        }
        .sns-embed-badge.yt { background: #FF0000; }
        .sns-embed-badge.ig { background: linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888); }

        .sns-embed-candidate {
            font-size: 0.65rem;
            font-weight: 900;
            color: #FF6600;
            flex: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .sns-embed-link {
            font-size: 0.7rem;
            color: #94a3b8;
            text-decoration: none;
            flex-shrink: 0;
        }
        .sns-embed-link:hover { color: #FF6600; }

        /* 커스텀 스크롤바 */
        .sns-custom-scrollbar-wrap {
            padding: 0 2px 8px;
            margin-bottom: 6px;
        }
        .sns-custom-scrollbar-track {
            height: 4px;
            background: #f1f5f9;
            border-radius: 99px;
            position: relative;
            cursor: pointer;
        }
        .dark .sns-custom-scrollbar-track { background: #1e293b; }
        .sns-custom-scrollbar-thumb {
            position: absolute;
            top: 0;
            height: 4px;
            border-radius: 99px;
            background: #FF6600;
            cursor: grab;
            transition: background 0.15s;
            min-width: 30px;
        }
        .sns-custom-scrollbar-thumb:hover,
        .sns-custom-scrollbar-thumb.dragging { background: #e55a00; cursor: grabbing; }

        /* iframe 드래그 오버레이 */
        .sns-embed-card {
            position: relative;
        }
        .sns-embed-drag-overlay {
            position: absolute;
            inset: 30px 0 0 0; /* 라벨 아래부터 덮음 */
            z-index: 10;
            cursor: grab;
        }
        .sns-embed-drag-overlay.dragging { cursor: grabbing; }
    `;
    document.head.appendChild(style);
})();


// ════════════════════════════════════════════════════════════
//  🏗️ HTML 구조 동적 생성
// ════════════════════════════════════════════════════════════
function buildSNSSection() {
    const section = document.getElementById('sns-feed-section');
    if (!section) return;

    section.innerHTML = `
        <!-- 1줄: 유튜브 최신 영상 (자동) -->
        <div class="flex items-center gap-2 mb-3 px-1 flex-wrap">
            <div class="bg-red-100 dark:bg-red-900/20 p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor"/></svg>
            </div>
            <div>
                <span class="font-black text-gray-800 dark:text-slate-100 text-base md:text-lg">후보자 유튜브</span>
                <span class="new-badge ml-1">자동</span>
                <p class="text-[10px] text-gray-400 dark:text-slate-500 font-semibold mt-0.5">후보 업로드 시 자동 반영 · 최신순</p>
            </div>
            <div class="ml-auto flex items-center gap-2">
                <span id="sns-row1-count" class="text-xs font-bold text-gray-400 dark:text-slate-500"></span>
            </div>
        </div>
        <div class="sns-feed-scroll-wrap mb-6">
            <div class="sns-feed-track" id="sns-row1-track">
                <div class="sns-feed-loading">
                    <span class="sns-pulse">⏳</span>
                    <span class="sns-pulse">유튜브 영상 불러오는 중...</span>
                </div>
            </div>
        </div>

        <!-- 구분선 -->
        <div class="flex items-center gap-3 my-5 px-1">
            <div class="flex-1 h-px bg-orange-100 dark:bg-slate-700"></div>
            <span class="text-[10px] font-black text-orange-300 dark:text-slate-600 tracking-widest">REELS &amp; SHORTS</span>
            <div class="flex-1 h-px bg-orange-100 dark:bg-slate-700"></div>
        </div>

        <!-- 2줄: 릴스 & 숏츠 (수동) -->
        <div class="flex items-center gap-2 mb-3 px-1 flex-wrap">
            <div class="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" style="color:#FF6600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/></svg>
            </div>
            <div>
                <span class="font-black text-gray-800 dark:text-slate-100 text-base md:text-lg">릴스 &amp; 숏츠</span>
                <p class="text-[10px] text-gray-400 dark:text-slate-500 font-semibold mt-0.5">인스타그램 릴스 · 유튜브 숏츠</p>
            </div>
            <div class="ml-auto flex items-center gap-2">
                <span id="sns-row2-count" class="text-xs font-bold text-gray-400 dark:text-slate-500"></span>
            </div>
        </div>
        <div class="sns-custom-scrollbar-wrap">
            <div class="sns-custom-scrollbar-track" id="sns-row2-scrollbar-track">
                <div class="sns-custom-scrollbar-thumb" id="sns-row2-scrollbar-thumb"></div>
            </div>
        </div>
        <div class="sns-feed-scroll-wrap" id="sns-row2-scroll-wrap">
            <div class="sns-feed-track" id="sns-row2-track">
                <div class="sns-feed-loading">
                    <span class="sns-pulse">⏳</span>
                    <span class="sns-pulse">릴스 · 숏츠 불러오는 중...</span>
                </div>
            </div>
        </div>
    `;
}


// ════════════════════════════════════════════════════════════
//  🔑 YouTube Data API v3 키  ← 발급받은 키를 여기에 입력
// ════════════════════════════════════════════════════════════
const YOUTUBE_API_KEY = 'AIzaSyBKRkxkrf3lPRoYw9nHihymbUcLKjO4C4M';


// ════════════════════════════════════════════════════════════
//  📱 2줄: 릴스 & 숏츠 수동 등록
//  새 게시물 올라올 때마다 맨 앞에 추가하세요
//
//  유튜브 숏츠: { type: 'yt', candidate: '이름', url: 'https://youtube.com/shorts/XXXXX' }
//  인스타 릴스: { type: 'ig', candidate: '이름', url: 'https://www.instagram.com/reel/XXXXX/' }
//             썸네일 직접 지정: { ..., thumb: 'https://이미지URL' }  ← 선택사항
// ════════════════════════════════════════════════════════════
const reelsAndShorts = [
    // ── 유튜브 숏츠 ──
    { type: 'yt', candidate: '이강민',  url: 'https://www.youtube.com/shorts/DJthwf74rMU' },
    { type: 'yt', candidate: '이강민',  url: 'https://www.youtube.com/shorts/eMUQzVoDBQ0' },
    { type: 'yt', candidate: '이강민',  url: 'https://www.youtube.com/shorts/TMjoXXeov_M' },
    { type: 'yt', candidate: '정이한',  url: 'https://www.youtube.com/shorts/2wpptyxZXC0' },
    { type: 'yt', candidate: '개혁신당', url: 'https://www.youtube.com/shorts/5ed2toY7H_g' },
    { type: 'yt', candidate: '개혁신당', url: 'https://www.youtube.com/shorts/DblJGqG6erM' },
    { type: 'yt', candidate: '개혁신당', url: 'https://www.youtube.com/shorts/zsg7igj9lFY' },
    // ── 인스타 릴스 ──
    { type: 'ig', candidate: '이성실',  url: 'https://www.instagram.com/reel/DVIxMZskfK5/' },
    { type: 'ig', candidate: '박진우',  url: 'https://www.instagram.com/reel/DUxZ7kUEwxv/' },
    { type: 'ig', candidate: '최태영',  url: 'https://www.instagram.com/reel/DVFXPloE_Vg/' },
    { type: 'ig', candidate: '고재윤',  url: 'https://www.instagram.com/reel/DUaehbcAUci/' },
];


// ════════════════════════════════════════════════════════════
//  ⚙️  설정
// ════════════════════════════════════════════════════════════
const YT_VIDEOS_PER_CHANNEL = 50;  // 1줄: 후보 1명당 최신 영상 수 (API 최대값)
const MAX_ROW1_CARDS         = 30;  // 1줄: 최대 카드 수
const MAX_ROW2_CARDS         = 20;  // 2줄: 최대 카드 수


// ────────────────────────────────────────────────────────────
//  내부 상태
// ────────────────────────────────────────────────────────────
let row1Data          = [];
let row2Data          = [];
let currentRow1Filter = 'all';
let currentRow2Filter = 'all';


// ════════════════════════════════════════════════════════════
//  공통 유틸
// ════════════════════════════════════════════════════════════
function extractChannelInfo(url) {
    const directMatch = url.match(/youtube\.com\/channel\/(UC[\w-]+)/);
    if (directMatch) return { type: 'id', value: directMatch[1] };
    const handleMatch = url.match(/youtube\.com\/@([\w%-]+)/);
    if (handleMatch) return { type: 'handle', value: decodeURIComponent(handleMatch[1]) };
    return null;
}

async function resolveChannelId(handle) {
    try {
        const res = await fetch(
            `https://www.googleapis.com/youtube/v3/channels` +
            `?part=id&forHandle=${encodeURIComponent(handle)}&key=${YOUTUBE_API_KEY}`
        );
        if (!res.ok) throw new Error();
        const d = await res.json();
        return d.items?.[0]?.id || null;
    } catch { return null; }
}

function getYoutubeCandidates() {
    if (typeof candidates === 'undefined') return [];
    return candidates
        .filter(c => c.sns?.yt && c.sns.yt !== '#')
        .map(c => ({ name: c.name, ytUrl: c.sns.yt }));
}


// ════════════════════════════════════════════════════════════
//  1줄: 유튜브 최신 영상 자동 수집
// ════════════════════════════════════════════════════════════
async function loadRow1() {
    const track = document.getElementById('sns-row1-track');
    if (!track) return;

    if (YOUTUBE_API_KEY === 'YOUR_API_KEY_HERE') {
        track.innerHTML = `
            <div class="sns-feed-empty" style="width:100%;min-width:320px;">
                <span style="font-size:2rem">🔑</span>
                <span>sns.js에 YouTube API 키를 입력해주세요</span>
            </div>`;
        return;
    }

    track.innerHTML = `
        <div class="sns-feed-loading">
            <span class="sns-pulse">⏳</span>
            <span class="sns-pulse">유튜브 최신 영상 불러오는 중...</span>
        </div>`;

    const allVideos = [];
    const ytCandidates = getYoutubeCandidates();

    await Promise.all(ytCandidates.map(async ({ name, ytUrl }) => {
        const parsed = extractChannelInfo(ytUrl);
        if (!parsed) return;

        const channelId = parsed.type === 'id'
            ? parsed.value
            : await resolveChannelId(parsed.value);
        if (!channelId) return;

        try {
            const uploadPlaylistId = 'UU' + channelId.slice(2);
            const res = await fetch(
                `https://www.googleapis.com/youtube/v3/playlistItems` +
                `?part=snippet&playlistId=${uploadPlaylistId}` +
                `&maxResults=${YT_VIDEOS_PER_CHANNEL}&key=${YOUTUBE_API_KEY}`
            );
            if (!res.ok) throw new Error();
            const d = await res.json();

            (d.items || []).forEach(item => {
                const sn = item.snippet;
                const videoId = sn.resourceId?.videoId || '';
                allVideos.push({
                    candidate:   name,
                    url:         `https://www.youtube.com/watch?v=${videoId}`,
                    title:       sn.title || '',
                    thumb:       sn.thumbnails?.high?.url || sn.thumbnails?.medium?.url || '',
                    publishedAt: sn.publishedAt || '',
                });
            });
        } catch {}
    }));

    // 최신순 정렬
    allVideos.sort((a, b) =>
        new Date(b.publishedAt) - new Date(a.publishedAt)
    );

    row1Data = allVideos.slice(0, MAX_ROW1_CARDS);
    renderRow1(row1Data);
    initDragScroll(document.getElementById('sns-row1-track')?.parentElement);
}

function filterRow1(filter, btn) {
    currentRow1Filter = filter;
    document.querySelectorAll('#row1-filter-tabs .sns-filter-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    const filtered = currentRow1Filter === 'all'
        ? row1Data
        : row1Data.filter(v => v.candidate === currentRow1Filter);
    renderRow1(filtered, true);
}

function renderRow1(items, isFiltered = false) {
    const track   = document.getElementById('sns-row1-track');
    const countEl = document.getElementById('sns-row1-count');
    if (!track) return;

    if (countEl) countEl.textContent = `총 ${items.length}개`;

    if (items.length === 0) {
        track.innerHTML = `
            <div class="sns-feed-empty" style="width:100%;min-width:320px;">
                <span style="font-size:2rem">📭</span>
                <span>영상이 없습니다</span>
            </div>`;
        return;
    }

    const YT_ICON = `<svg viewBox="0 0 24 24" fill="#FF0000" width="10" height="10"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>`;

    track.innerHTML = items.map(v => {
        const d = new Date(v.publishedAt);
        const dateStr = v.publishedAt
            ? `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`
            : '';
        const thumbHtml = v.thumb
            ? `<img class="sns-feed-thumb" src="${v.thumb}" alt="" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
            : '';
        const placeholderHtml = `<div class="sns-feed-thumb-placeholder" style="${v.thumb ? 'display:none' : ''}">▶</div>`;

        return `
            <div class="sns-feed-card type-yt" onclick="window.open('${v.url}','_blank')" title="${v.title}">
                ${thumbHtml}
                ${placeholderHtml}
                <span class="sns-feed-type-badge yt">YouTube</span>
                <div class="sns-feed-info">
                    <div class="sns-feed-candidate">${YT_ICON} ${v.candidate}</div>
                    <div class="sns-feed-title">${v.title || '유튜브 영상'}</div>
                    ${dateStr ? `<div class="sns-feed-date">${dateStr}</div>` : ''}
                </div>
            </div>`;
    }).join('');
}


// ════════════════════════════════════════════════════════════
//  2줄: 릴스 & 숏츠 수동 등록
// ════════════════════════════════════════════════════════════
async function loadRow2() {
    const track = document.getElementById('sns-row2-track');
    if (!track) return;

    if (reelsAndShorts.length === 0) {
        track.innerHTML = `
            <div class="sns-feed-empty" style="width:100%;min-width:320px;">
                <span style="font-size:2rem">📭</span>
                <span>sns.js의 reelsAndShorts 배열에 URL을 추가해주세요</span>
            </div>`;
        return;
    }

    track.innerHTML = `
        <div class="sns-feed-loading">
            <span class="sns-pulse">⏳</span>
            <span class="sns-pulse">릴스 · 숏츠 불러오는 중...</span>
        </div>`;

    // 릴스(ig) 먼저, 유튜브 숏츠(yt) 나중 정렬
    const items = [...reelsAndShorts.slice(0, MAX_ROW2_CARDS)].sort((a, b) => {
        if (a.type === b.type) return 0;
        return a.type === 'ig' ? -1 : 1;
    });

    row2Data = items;
    renderRow2(row2Data);
    const row2Wrap  = document.getElementById('sns-row2-scroll-wrap');
    const row2Thumb = document.getElementById('sns-row2-scrollbar-thumb');
    const row2Track = document.getElementById('sns-row2-scrollbar-track');
    initDragScroll(row2Wrap);
    initCustomScrollbar(row2Wrap, row2Thumb, row2Track);
}

function filterRow2(filter, btn) {
    currentRow2Filter = filter;
    document.querySelectorAll('#row2-filter-tabs .sns-filter-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    const filtered = currentRow2Filter === 'all'
        ? row2Data
        : row2Data.filter(i => i.type === currentRow2Filter);
    renderRow2(filtered);
}

function getIgEmbedUrl(url) {
    const m = url.match(/instagram\.com\/(?:reel|p)\/([\w-]+)/);
    return m ? `https://www.instagram.com/p/${m[1]}/embed/` : null;
}

function getYtThumb(url) {
    const m = url.match(/shorts\/([\w-]+)/);
    return m ? `https://i.ytimg.com/vi/${m[1]}/hqdefault.jpg` : '';
}

function renderRow2(items) {
    const track   = document.getElementById('sns-row2-track');
    const countEl = document.getElementById('sns-row2-count');
    if (!track) return;

    if (countEl) countEl.textContent = `총 ${items.length}개`;

    if (items.length === 0) {
        track.innerHTML = `
            <div class="sns-feed-empty" style="width:100%;min-width:320px;">
                <span style="font-size:2rem">📭</span>
                <span>등록된 게시물이 없습니다</span>
            </div>`;
        return;
    }

    const YT_ICON = `<svg viewBox="0 0 24 24" fill="#FF0000" width="10" height="10"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>`;

    track.innerHTML = items.map(item => {
        const isYt      = item.type === 'yt';
        const typeClass = isYt ? 'yt' : 'ig';
        const typeLabel = isYt ? 'Shorts' : 'Reels';

        if (isYt) {
            // 유튜브 숏츠: 썸네일 카드 (클릭 시 유튜브로 이동)
            const thumb = getYtThumb(item.url);
            return `
                <div class="sns-feed-card type-yt" onclick="window.open('${item.url}','_blank')">
                    ${thumb ? `<img class="sns-feed-thumb" src="${thumb}" alt="" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">` : ''}
                    <div class="sns-feed-thumb-placeholder" style="${thumb ? 'display:none' : ''}">▶</div>
                    <div class="sns-feed-info">
                        <div class="sns-feed-candidate">${YT_ICON} ${item.candidate}</div>
                        <div class="sns-feed-title">${typeLabel}</div>
                    </div>
                </div>`;
        }

        // 인스타 릴스: iframe embed
        const embedUrl = getIgEmbedUrl(item.url);
        if (!embedUrl) return '';

        return `
            <div class="sns-embed-card type-ig">
                <div class="sns-embed-label">
                    <span class="sns-embed-badge ig">${typeLabel}</span>
                    <span class="sns-embed-candidate">${item.candidate}</span>
                    <a href="${item.url}" target="_blank" class="sns-embed-link">↗</a>
                </div>
                <div class="sns-embed-drag-overlay"></div>
                <iframe
                    src="${embedUrl}"
                    style="width:min(328px,85vw);height:480px;border:0;"
                    frameborder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowfullscreen
                    loading="lazy"
                ></iframe>
            </div>`;
    }).join('');
}


// ════════════════════════════════════════════════════════════
//  🖱️ 드래그 스크롤 (마우스로 좌우 이동)
// ════════════════════════════════════════════════════════════
function initCustomScrollbar(scrollWrap, thumbEl, trackEl) {
    if (!scrollWrap || !thumbEl || !trackEl) return;

    function updateThumb() {
        const { scrollLeft, scrollWidth, clientWidth } = scrollWrap;
        if (scrollWidth <= clientWidth) {
            thumbEl.style.display = 'none';
            return;
        }
        thumbEl.style.display = 'block';
        const ratio      = clientWidth / scrollWidth;
        const thumbW     = Math.max(30, trackEl.clientWidth * ratio);
        const maxScroll  = scrollWidth - clientWidth;
        const maxThumbX  = trackEl.clientWidth - thumbW;
        const thumbX     = (scrollLeft / maxScroll) * maxThumbX;
        thumbEl.style.width = thumbW + 'px';
        thumbEl.style.left  = thumbX + 'px';
    }

    // 스크롤 → 썸 위치 업데이트
    scrollWrap.addEventListener('scroll', updateThumb, { passive: true });
    window.addEventListener('resize', updateThumb);
    updateThumb();

    // 썸 드래그 → 스크롤 이동
    let isDragging = false, startX = 0, startScrollLeft = 0;

    thumbEl.addEventListener('mousedown', e => {
        isDragging      = true;
        startX          = e.clientX;
        startScrollLeft = scrollWrap.scrollLeft;
        thumbEl.classList.add('dragging');
        e.preventDefault();
        e.stopPropagation();
    });
    document.addEventListener('mousemove', e => {
        if (!isDragging) return;
        const { scrollWidth, clientWidth } = scrollWrap;
        const maxScroll  = scrollWidth - clientWidth;
        const maxThumbX  = trackEl.clientWidth - thumbEl.clientWidth;
        const dx         = e.clientX - startX;
        const scrollDx   = (dx / maxThumbX) * maxScroll;
        scrollWrap.scrollLeft = Math.max(0, Math.min(maxScroll, startScrollLeft + scrollDx));
    });
    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        thumbEl.classList.remove('dragging');
    });

    // 트랙 클릭 → 해당 위치로 점프
    trackEl.addEventListener('click', e => {
        if (e.target === thumbEl) return;
        const rect  = trackEl.getBoundingClientRect();
        const ratio = (e.clientX - rect.left) / trackEl.clientWidth;
        const { scrollWidth, clientWidth } = scrollWrap;
        scrollWrap.scrollLeft = ratio * (scrollWidth - clientWidth);
    });

    // 터치로 스크롤바 썸 드래그 (모바일)
    thumbEl.addEventListener('touchstart', e => {
        isDragging      = true;
        startX          = e.touches[0].clientX;
        startScrollLeft = scrollWrap.scrollLeft;
        thumbEl.classList.add('dragging');
    }, { passive: true });
    document.addEventListener('touchmove', e => {
        if (!isDragging) return;
        const { scrollWidth, clientWidth } = scrollWrap;
        const maxScroll = scrollWidth - clientWidth;
        const maxThumbX = trackEl.clientWidth - thumbEl.clientWidth;
        const dx        = e.touches[0].clientX - startX;
        scrollWrap.scrollLeft = Math.max(0, Math.min(maxScroll, startScrollLeft + (dx / maxThumbX) * maxScroll));
    }, { passive: true });
    document.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        thumbEl.classList.remove('dragging');
    });
}

function initDragScroll(el) {
    if (!el) return;
    let isDown = false, startX = 0, scrollLeft = 0, hasDragged = false;

    const overlays = () => el.querySelectorAll('.sns-embed-drag-overlay');
    const setOverlayPointer = (active) => {
        overlays().forEach(o => {
            o.style.pointerEvents = active ? 'auto' : 'none';
            o.classList.toggle('dragging', active);
        });
    };

    // ── 마우스 이벤트 ──
    el.addEventListener('mousedown', e => {
        isDown = true; hasDragged = false;
        el.classList.add('dragging');
        setOverlayPointer(true);
        startX     = e.pageX - el.offsetLeft;
        scrollLeft = el.scrollLeft;
        e.preventDefault();
    });
    el.addEventListener('mouseleave', () => { isDown = false; el.classList.remove('dragging'); setOverlayPointer(false); });
    el.addEventListener('mouseup',    () => { isDown = false; el.classList.remove('dragging'); setTimeout(() => setOverlayPointer(false), 50); });
    el.addEventListener('mousemove', e => {
        if (!isDown) return;
        const walk = (e.pageX - el.offsetLeft - startX) * 1.2;
        if (Math.abs(walk) > 5) hasDragged = true;
        el.scrollLeft = scrollLeft - walk;
    });
    el.addEventListener('click', e => { if (hasDragged) e.stopPropagation(); }, true);

    // ── 터치 이벤트 (모바일) ──
    let touchStartX = 0, touchScrollLeft = 0, touchMoved = false;
    el.addEventListener('touchstart', e => {
        touchStartX    = e.touches[0].pageX;
        touchScrollLeft = el.scrollLeft;
        touchMoved     = false;
    }, { passive: true });
    el.addEventListener('touchmove', e => {
        const dx = touchStartX - e.touches[0].pageX;
        if (Math.abs(dx) > 5) touchMoved = true;
        el.scrollLeft = touchScrollLeft + dx;
    }, { passive: true });
    el.addEventListener('touchend', e => {
        if (touchMoved) e.stopPropagation();
    }, true);
}


// ════════════════════════════════════════════════════════════
//  초기화
// ════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    buildSNSSection(); // HTML 구조 먼저 생성

    loadRow1(); // 1줄: 유튜브 자동
    loadRow2(); // 2줄: 릴스·숏츠 수동

    // 드래그 스크롤 적용
    initDragScroll(document.querySelector('#sns-row1-track')?.parentElement);
    initDragScroll(document.querySelector('#sns-row2-track')?.parentElement);
});
