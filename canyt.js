// ============================================================
//  canyt.js – 후보자 소개 유튜브 섹션 (무한 자동 스크롤 적용)
//
//  ▸ API: YouTube Data API v3
//  ▸ 기능: 지정된 유튜브 핸들에서 최신 영상 수집 및 무한 자동 스크롤
//  ▸ 의존성: window.candidates (can.js), initDragScroll (sns.js)
// ============================================================

(() => {
    'use strict';

    // ════════════════════════════════════════════════════════════
    //  ⚙️ 설정 – 변경 시 여기만 수정
    // ════════════════════════════════════════════════════════════
    const CONFIG = {
        YOUTUBE_API_KEY: 'AIzaSyBKRkxkrf3lPRoYw9nHihymbUcLKjO4C4M', // 발급받은 유튜브 API 키
        
        MAX_ITEMS_PER_CHANNEL: 10, // 각 채널별로 가져올 최신 영상 개수
        
        // ✨ 자동 스크롤 설정
        AUTO_SCROLL: true,       // true: 자동 스크롤 켜기 / false: 끄기
        AUTO_SCROLL_SPEED: 0.5,  // 스크롤 속도 (숫자가 클수록 빠름)

        // 연동할 유튜브 채널 목록 (URL의 @핸들명 입력) 및 필터링 규칙
        CHANNELS: [
            { handle: '@김철근TV', displayName: '철근소', filterKeyword: '철근소' },
            { handle: '@reformpartytv', displayName: '오뉴월', filterKeyword: '오뉴월' },
            { handle: '@이강민生정치', displayName: '이강민生정치', filterType: 'candidates' }
        ]
    };

    // ════════════════════════════════════════════════════════════
    //  🛠️ 유틸리티
    // ════════════════════════════════════════════════════════════
    // XSS 방지용 HTML 이스케이프 함수
    const escapeHTML = (str) => {
        if (!str) return '';
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag])
        );
    };

    // ════════════════════════════════════════════════════════════
    //  🏗️ HTML 구조 생성
    // ════════════════════════════════════════════════════════════
    function buildSection() {
        const section = document.getElementById('cand-yt-section');
        if (!section) return false;

        const YT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor"/></svg>`;

        section.innerHTML = `
            <div id="cand-yt-inner" style="max-width:80rem;margin:0 auto;">
                <div class="flex items-center gap-2 mb-3 px-1 flex-wrap">
                    <div class="bg-red-100 dark:bg-red-900/20 p-2 rounded-xl">
                        ${YT_SVG}
                    </div>
                    <div>
                        <span class="font-black text-gray-800 dark:text-slate-100 text-base md:text-lg">후보자 소개 영상</span>
                    </div>
                    <div class="ml-auto flex items-center gap-2">
                        <span id="cand-yt-count" class="text-xs font-bold text-gray-400 dark:text-slate-500"></span>
                    </div>
                </div>
                <div class="sns-feed-scroll-wrap" style="overflow-x: auto; scrollbar-width: none; -ms-overflow-style: none;">
                    <div class="sns-feed-track" id="cand-yt-track">
                        <div class="sns-feed-loading">
                            <span class="sns-pulse">⏳</span>
                            <span class="sns-pulse">채널에서 영상 불러오는 중...</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // CSS로 스크롤바 숨김 처리 (웹킷 브라우저용)
        const style = document.createElement('style');
        style.textContent = `
            #cand-yt-inner .sns-feed-scroll-wrap::-webkit-scrollbar { display: none; }
        `;
        document.head.appendChild(style);

        return true;
    }

    // ════════════════════════════════════════════════════════════
    //  📡 데이터 로드
    // ════════════════════════════════════════════════════════════
    async function loadData() {
        const track = document.getElementById('cand-yt-track');
        if (!track) return;

        try {
            if (!CONFIG.YOUTUBE_API_KEY) throw new Error('API 키가 설정되지 않았습니다.');

            const activeCandNames = (window.candidates || [])
                .filter(c => c.hidden !== true)
                .map(c => c.name)
                .filter(Boolean);

            const channelPromises = CONFIG.CHANNELS.map(async (ch) => {
                try {
                    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${encodeURIComponent(ch.handle)}&key=${CONFIG.YOUTUBE_API_KEY}`;
                    const channelRes = await fetch(channelUrl);
                    if (!channelRes.ok) throw new Error('채널 정보 요청 실패');
                    
                    const channelData = await channelRes.json();
                    if (!channelData.items || channelData.items.length === 0) return [];

                    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
                    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=50&key=${CONFIG.YOUTUBE_API_KEY}`;
                    const playlistRes = await fetch(playlistUrl);
                    if (!playlistRes.ok) throw new Error('재생목록 요청 실패');
                    
                    const playlistData = await playlistRes.json();
                    if (!playlistData.items) return [];

                    let filteredItems = playlistData.items.filter(item => {
                        const title = item.snippet.title || '';
                        if (ch.filterKeyword) return title.includes(ch.filterKeyword);
                        if (ch.filterType === 'candidates') {
                            if (activeCandNames.length === 0) return false;
                            return activeCandNames.some(name => title.includes(name));
                        }
                        return true;
                    });

                    filteredItems = filteredItems.slice(0, CONFIG.MAX_ITEMS_PER_CHANNEL);

                    return filteredItems.map(item => {
                        const snippet = item.snippet;
                        return {
                            candidate:   ch.displayName,
                            url:         `https://www.youtube.com/watch?v=${snippet.resourceId.videoId}`,
                            title:       snippet.title,
                            thumb:       snippet.thumbnails?.medium?.url || snippet.thumbnails?.default?.url,
                            publishedAt: snippet.publishedAt
                        };
                    });

                } catch (err) {
                    console.error(`[canyt] ${ch.handle} 데이터 로드 실패:`, err);
                    return [];
                }
            });

            const results = await Promise.all(channelPromises);
            let allVideos = results.flat();

            allVideos.sort((a, b) => {
                const da = a.publishedAt ? new Date(a.publishedAt) : 0;
                const db = b.publishedAt ? new Date(b.publishedAt) : 0;
                return db - da;
            });

            renderCards(allVideos);

        } catch (err) {
            track.innerHTML = `
                <div class="sns-feed-empty" style="width:100%;min-width:320px;">
                    <span style="font-size:2rem">⚠️</span>
                    <span>유튜브 서버와 통신하지 못했습니다.</span>
                </div>`;
        }

        const scrollWrap = track.parentElement;
        if (scrollWrap && typeof window.initDragScroll === 'function') {
            window.initDragScroll(scrollWrap);
        }
    }

    // ════════════════════════════════════════════════════════════
    //  🎨 카드 렌더링 및 🔄 무한 스크롤 로직
    // ════════════════════════════════════════════════════════════
    function renderCards(items) {
        const track   = document.getElementById('cand-yt-track');
        const countEl = document.getElementById('cand-yt-count');
        const scrollWrap = track.parentElement;
        if (!track) return;

        if (countEl) countEl.textContent = `총 ${items.length}개`;

        if (items.length === 0) {
            track.innerHTML = `
                <div class="sns-feed-empty" style="width:100%;min-width:320px;">
                    <span style="font-size:2rem">📭</span>
                    <span>채널에 등록된 최신 영상이 없습니다.</span>
                </div>`;
            return;
        }

        const YT_ICON = `<svg viewBox="0 0 24 24" fill="#FF0000" width="10" height="10"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>`;

        // HTML 템플릿 생성
        const cardsHTML = items.map(v => {
            const d = v.publishedAt ? new Date(v.publishedAt) : null;
            const dateStr = d ? `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}` : '';
            const safeTitle = escapeHTML(v.title || '유튜브 영상');
            const displayName = escapeHTML(v.candidate); 

            return `
                <div class="sns-feed-card type-yt"
                     onclick="window.open('${escapeHTML(v.url)}','_blank')"
                     title="${safeTitle}">
                    <img class="sns-feed-thumb"
                         src="${escapeHTML(v.thumb)}"
                         alt=""
                         loading="lazy"
                         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                    <div class="sns-feed-thumb-placeholder" style="display:none">▶</div>
                    <div class="sns-feed-info">
                        <div class="sns-feed-candidate">${YT_ICON} ${displayName}</div>
                        <div class="sns-feed-title">${safeTitle}</div>
                        ${dateStr ? `<div class="sns-feed-date">${dateStr}</div>` : ''}
                    </div>
                </div>`;
        }).join('');

        // 무한 스크롤(Auto Scroll)을 사용할 경우, 아이템을 2배수로 이어 붙여서 자연스럽게 루핑시킵니다.
        track.innerHTML = CONFIG.AUTO_SCROLL ? cardsHTML + cardsHTML : cardsHTML;

        // 아이템이 렌더링된 후 자동 스크롤 시작
        if (CONFIG.AUTO_SCROLL) {
            initAutoScroll(scrollWrap, track);
        }
    }

    function initAutoScroll(scrollWrap, track) {
        let isHovered = false;
        let scrollPos = 0;

        // 마우스 호버 또는 터치 중일 때 자동 스크롤 일시 정지
        scrollWrap.addEventListener('mouseenter', () => isHovered = true);
        scrollWrap.addEventListener('mouseleave', () => isHovered = false);
        scrollWrap.addEventListener('touchstart', () => isHovered = true, { passive: true });
        scrollWrap.addEventListener('touchend', () => isHovered = false);

        function step() {
            if (!isHovered) {
                // 부드럽게 픽셀 이동
                scrollPos += CONFIG.AUTO_SCROLL_SPEED;
                
                // 스크롤이 전체 너비의 절반(1배수)을 넘어가면 다시 0으로 순간이동 시켜서 무한 루프 생성
                const maxScroll = track.scrollWidth / 2;
                if (scrollPos >= maxScroll) {
                    scrollPos -= maxScroll; 
                }
                scrollWrap.scrollLeft = scrollPos;
            } else {
                // 유저가 직접 마우스/손가락으로 스크롤(드래그)하고 있을 때는 현재 위치 동기화
                scrollPos = scrollWrap.scrollLeft;
            }
            requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    // ════════════════════════════════════════════════════════════
    //  🚀 실행
    // ════════════════════════════════════════════════════════════
    const init = () => {
        if (buildSection()) {
            loadData();
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();