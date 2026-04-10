// ============================================================
//  canyt.js – 후보자 소개 유튜브 섹션
//
//  ▸ 이강민 / 정상필 / 서준호 : api.restep.cc/videos (API)
//
//  필터: 영상 제목에 can.js candidates 이름이 포함된 것만 표시
//        제목에 후원·기부 키워드 포함 시 제외
//        최신순 30개 표시
//  스타일: sns.js 와 동일한 카드 UI 재사용 (추가 CSS 불필요)
//
//  사용법:
//    1) HTML에 <div id="cand-yt-section"></div> 추가 (sns-feed-section 아래 권장)
//    2) can.js, sns.js 이후에 이 파일을 <script>로 로드
// ============================================================

// ════════════════════════════════════════════════════════════
//  ⚙️ 설정 – 변경 시 여기만 수정
// ════════════════════════════════════════════════════════════

const CAND_YT_API_URL = 'https://api.restep.cc/videos';

// API에서 가져올 후보자 이름 목록
const CAND_YT_NAMES = ['이강민', '정상필', '서준호'];

// 제목에 포함 시 제외할 키워드
const CAND_YT_BLOCKED = ['후원', '기부'];

// 카드 하단에 표시할 이름 매핑
const CAND_YT_NAME_MAP = {
    '이강민': '이강민生정치',
    '정상필': '오뉴월',
    '서준호': '철근소'
};

// ════════════════════════════════════════════════════════════
//  🏗️ HTML 구조 생성
// ════════════════════════════════════════════════════════════
function buildCandYTSection() {
    const section = document.getElementById('cand-yt-section');
    if (!section) return;

    const YT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor"/></svg>`;

    section.innerHTML = `
        <div id="cand-yt-inner" style="max-width:80rem;margin:0 auto;">
            <div class="flex items-center gap-2 mb-3 px-1 flex-wrap">
                <div class="bg-red-100 dark:bg-red-900/20 p-2 rounded-xl">
                    ${YT_SVG}
                </div>
                <div>
                    <span class="font-black text-gray-800 dark:text-slate-100 text-base md:text-lg">후보자 소개 유튜브</span>
                    <span class="new-badge ml-1">자동</span>
                    <p class="text-[10px] text-gray-400 dark:text-slate-500 font-semibold mt-0.5">후보자 이름이 포함된 영상만 표시 · 최신순</p>
                </div>
                <div class="ml-auto flex items-center gap-2">
                    <span id="cand-yt-count" class="text-xs font-bold text-gray-400 dark:text-slate-500"></span>
                </div>
            </div>
            <div class="sns-feed-scroll-wrap">
                <div class="sns-feed-track" id="cand-yt-track">
                    <div class="sns-feed-loading">
                        <span class="sns-pulse">⏳</span>
                        <span class="sns-pulse">영상 불러오는 중...</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ════════════════════════════════════════════════════════════
//  📡 API에서 3명 영상 한 번에 가져오기
// ════════════════════════════════════════════════════════════
async function loadCandYT() {
    const track = document.getElementById('cand-yt-track');
    if (!track) return;

    // can.js hidden 후보 제외한 이름 목록
    const hiddenNames = new Set(
        (window.candidates || []).filter(c => c.hidden === true).map(c => c.name)
    );

    try {
        const res = await fetch(CAND_YT_API_URL);
        if (!res.ok) throw new Error('API 호출 실패');
        const data = await res.json();

        // 후보별 제목 필터 키워드 (없으면 candidate_name으로 필터)
        const CAND_YT_TITLE_FILTER = {
            '정상필': '오뉴월',
            '서준호': '철근소'
            // 이강민은 candidate_name 기준 그대로
        };

        // can.js 전체 후보 이름 목록 (hidden 제외)
        const allCandNames = (window.candidates || [])
            .filter(c => c.hidden !== true)
            .map(c => c.name)
            .filter(Boolean);

        // 이강민 채널: candidate_name === '이강민' 안에서 can.js 이름 포함된 것만
        const leekangminVideos = data
            .filter(item => item.candidate_name === '이강민')
            .filter(item => !CAND_YT_BLOCKED.some(kw => (item.title || '').includes(kw)))
            .filter(item => allCandNames.some(name => (item.title || '').includes(name)))
            .map(item => ({
                candidate:   '이강민',
                url:         `https://www.youtube.com/watch?v=${item.video_id}`,
                title:       item.title,
                thumb:       item.thumbnail_url,
                publishedAt: item.published_at
            }));

        // 정상필: candidate_name === '정상필' 안에서 '오뉴월' 포함된 것만
        // 서준호: candidate_name === '서준호' 안에서 '철근소' 포함된 것만
        const otherVideos = data
            .filter(item => Object.keys(CAND_YT_TITLE_FILTER).includes(item.candidate_name))
            .filter(item => !CAND_YT_BLOCKED.some(kw => (item.title || '').includes(kw)))
            .filter(item => {
                const keyword = CAND_YT_TITLE_FILTER[item.candidate_name];
                return (item.title || '').includes(keyword);
            })
            .map(item => ({
                candidate:   item.candidate_name,
                url:         `https://www.youtube.com/watch?v=${item.video_id}`,
                title:       item.title,
                thumb:       item.thumbnail_url,
                publishedAt: item.published_at
            }));

        let videos = [...leekangminVideos, ...otherVideos];

        // 최신순 정렬 후 30개 제한
        videos.sort((a, b) => {
            const da = a.publishedAt ? new Date(a.publishedAt) : 0;
            const db = b.publishedAt ? new Date(b.publishedAt) : 0;
            return db - da;
        });
        videos = videos.slice(0, 30);

        renderCandYT(videos);

    } catch (err) {
        console.error('[canyt] 로드 실패:', err.message);
        track.innerHTML = `
            <div class="sns-feed-empty" style="width:100%;min-width:320px;">
                <span style="font-size:2rem">⚠️</span>
                <span>영상을 불러오지 못했습니다.</span>
            </div>`;
    }

    // sns.js의 initDragScroll 재사용
    const scrollWrap = track.parentElement;
    if (scrollWrap && typeof initDragScroll === 'function') {
        initDragScroll(scrollWrap);
    }
}

// ════════════════════════════════════════════════════════════
//  🎨 카드 렌더링 (sns.js 와 동일한 클래스 재사용)
// ════════════════════════════════════════════════════════════
function renderCandYT(items) {
    const track   = document.getElementById('cand-yt-track');
    const countEl = document.getElementById('cand-yt-count');
    if (!track) return;

    if (countEl) countEl.textContent = `총 ${items.length}개`;

    if (items.length === 0) {
        track.innerHTML = `
            <div class="sns-feed-empty" style="width:100%;min-width:320px;">
                <span style="font-size:2rem">📭</span>
                <span>후보자 이름이 포함된 영상이 없습니다</span>
            </div>`;
        return;
    }

    const YT_ICON = `<svg viewBox="0 0 24 24" fill="#FF0000" width="10" height="10"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>`;

    track.innerHTML = items.map(v => {
        const d       = v.publishedAt ? new Date(v.publishedAt) : null;
        const dateStr = d
            ? `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`
            : '';
        const safeTitle = (v.title || '').replace(/"/g, '&quot;');

        return `
            <div class="sns-feed-card type-yt"
                 onclick="window.open('${v.url}','_blank')"
                 title="${safeTitle}">
                <img class="sns-feed-thumb"
                     src="${v.thumb}"
                     alt=""
                     loading="lazy"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div class="sns-feed-thumb-placeholder" style="display:none">▶</div>
                <div class="sns-feed-info">
                    <div class="sns-feed-candidate">${YT_ICON} ${CAND_YT_NAME_MAP[v.candidate] || v.candidate}</div>
                    <div class="sns-feed-title">${v.title || '유튜브 영상'}</div>
                    ${dateStr ? `<div class="sns-feed-date">${dateStr}</div>` : ''}
                </div>
            </div>`;
    }).join('');
}

// ════════════════════════════════════════════════════════════
//  초기화
// ════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    buildCandYTSection();
    loadCandYT();
});
