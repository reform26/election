// youth.js - 청년후보들 미리보기 슬라이더

(function () {

    /* ── candidates 로드 대기 ── */
    function init() {
        if (typeof candidates === 'undefined' || !Array.isArray(candidates)) {
            setTimeout(init, 200);
            return;
        }
        buildSlider();
    }

    function buildSlider() {

        /* ── 1. 2030 후보 필터링 (사진 있는 것만, hidden/preliminary 제외) ── */
        const youthCands = candidates.filter(c =>
            c.visibility !== 'hidden' &&
            c.visibility !== 'preliminary' &&
            c.photo && c.photo.trim() !== '' &&
            c.age != null && c.age >= 10 && c.age <= 39
        );

        if (youthCands.length === 0) return;

        /* 매 접속마다 랜덤 셔플 */
        const shuffled = [...youthCands].sort(() => Math.random() - 0.5);

        /* ── 2. 삽입 위치 확인 ── */
        const container = document.getElementById('youth-root');
        if (!container) return;

        /* ── 3. 스타일 주입 ── */
        const style = document.createElement('style');
        style.textContent = `
            /* ── 섹션 래퍼 ── */
            #youth-section {
                background: white;
                border: 0.5px solid rgba(255,102,0,0.18);
                border-radius: 16px;
                padding: 16px 16px 20px;
                overflow: hidden;
            }
            .dark #youth-section {
                background: #1e293b;
                border-color: rgba(255,102,0,0.2);
            }

            /* ── 헤더 ── */
            .youth-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 14px;
            }
            .youth-title-wrap {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .youth-title-bar {
                width: 4px; height: 20px;
                background: #FF6600;
                border-radius: 2px;
                flex-shrink: 0;
            }
            .youth-title {
                font-size: 1.05rem;
                font-weight: 900;
                color: #1a202c;
                letter-spacing: -0.04em;
            }
            .dark .youth-title { color: #f1f5f9; }
            @media (min-width: 640px) { .youth-title { font-size: 1.2rem; } }
            .youth-sub {
                font-size: 10px;
                color: #94a3b8;
                font-weight: 700;
            }

            /* ── 뷰포트 ── */
            .youth-viewport {
                position: relative;
                overflow: hidden;
                padding: 4px 2px 8px;
                -webkit-mask-image: linear-gradient(
                    to right,
                    transparent 0px,
                    black 20px,
                    black calc(100% - 20px),
                    transparent 100%
                );
                mask-image: linear-gradient(
                    to right,
                    transparent 0px,
                    black 20px,
                    black calc(100% - 20px),
                    transparent 100%
                );
            }

            /* ── 트랙 (CSS 무한 스크롤) ── */
            .youth-track {
                display: flex;
                gap: 12px;
                width: max-content;
                animation: youthSlideLeft var(--youth-dur, 32s) linear infinite;
            }
            .youth-track.paused {
                animation-play-state: paused;
            }
            @keyframes youthSlideLeft {
                0%   { transform: translateX(0); }
                100% { transform: translateX(var(--youth-shift, -50%)); }
            }

            /* ── 카드 ── */
            .youth-card {
                flex-shrink: 0;
                width: 172px;
                border-radius: 16px;
                overflow: hidden;
                background: white;
                box-shadow: 0 4px 18px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
                border: 1px solid rgba(0,0,0,0.06);
                cursor: pointer;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                position: relative;
                user-select: none;
                -webkit-tap-highlight-color: transparent;
            }
            .dark .youth-card {
                background: #0f172a;
                border-color: rgba(255,255,255,0.06);
                box-shadow: 0 4px 18px rgba(0,0,0,0.35);
            }
            @media (min-width: 640px) { .youth-card { width: 188px; } }
            .youth-card:hover {
                transform: translateY(-6px) scale(1.015);
                box-shadow: 0 16px 42px rgba(255,102,0,0.17), 0 4px 12px rgba(0,0,0,0.08);
            }
            .youth-card:active {
                transform: translateY(-2px) scale(1.006);
            }

            /* ── 사진 영역 ── */
            .youth-card-photo-wrap {
                position: relative;
                width: 100%;
                height: 205px;
                overflow: hidden;
                background: #f1f5f9;
            }
            .dark .youth-card-photo-wrap { background: #1e293b; }
            @media (min-width: 640px) { .youth-card-photo-wrap { height: 220px; } }

            .youth-card-photo {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center top;
                display: block;
                transition: transform 0.4s ease;
                pointer-events: none;
            }
            .youth-card:hover .youth-card-photo { transform: scale(1.05); }

            /* ── 지역 태그 (좌상단) ── */
            .youth-region-tag {
                position: absolute;
                top: 9px; left: 9px;
                background: rgba(255,102,0,0.92);
                color: white;
                font-size: 8px;
                font-weight: 900;
                padding: 3px 8px;
                border-radius: 6px;
                backdrop-filter: blur(4px);
                letter-spacing: 0.02em;
                z-index: 2;
            }

            /* ── 나이 태그 (우상단) ── */
            .youth-age-tag {
                position: absolute;
                top: 9px; right: 9px;
                background: rgba(18,28,46,0.78);
                color: #FB923C;
                font-size: 8px;
                font-weight: 900;
                padding: 3px 7px;
                border-radius: 6px;
                backdrop-filter: blur(4px);
                border: 1px solid rgba(255,102,0,0.28);
                z-index: 2;
            }

            /* ── 이름/직책 오버레이 ── */
            .youth-card-overlay {
                position: absolute;
                bottom: 0; left: 0; right: 0;
                background: linear-gradient(
                    to top,
                    rgba(6,8,14,0.88) 0%,
                    rgba(6,8,14,0.44) 55%,
                    transparent 100%
                );
                padding: 36px 12px 12px;
                z-index: 2;
            }
            .youth-status-badge {
                display: inline-flex;
                align-items: center;
                gap: 3px;
                font-size: 7.5px;
                font-weight: 900;
                padding: 2px 6px;
                border-radius: 5px;
                margin-bottom: 5px;
            }
            .youth-status-badge.confirmed { background: #FF6600; color: white; }
            .youth-status-badge.prelim    { background: white; color: #0a1a3d; }
            .youth-status-badge.decl      {
                background: rgba(255,255,255,0.14);
                color: white;
                border: 1px solid rgba(255,255,255,0.28);
            }
            .youth-card-name {
                font-size: 1.2rem;
                font-weight: 900;
                color: white;
                letter-spacing: -0.05em;
                line-height: 1.1;
                margin-bottom: 3px;
            }
            .youth-card-office {
                font-size: 9px;
                font-weight: 700;
                color: rgba(255,255,255,0.74);
            }

            /* ── 하단 약력 ── */
            .youth-card-bio {
                padding: 10px 12px 12px;
                border-top: 1px solid rgba(0,0,0,0.05);
            }
            .dark .youth-card-bio { border-top-color: rgba(255,255,255,0.06); }
            .youth-bio-item {
                display: flex;
                align-items: flex-start;
                gap: 6px;
                font-size: 9px;
                font-weight: 600;
                color: #4a5568;
                line-height: 1.5;
                margin-bottom: 3px;
            }
            .youth-bio-item:last-child { margin-bottom: 0; }
            .dark .youth-bio-item { color: #94a3b8; }
            .youth-bio-dot {
                width: 3.5px; height: 3.5px;
                border-radius: 50%;
                background: #FF6600;
                flex-shrink: 0;
                margin-top: 5px;
            }
        `;
        document.head.appendChild(style);

        /* ── 4. 지역 짧은 이름 ── */
        const shortMetroMap = {
            '서울특별시': '서울', '부산광역시': '부산', '대구광역시': '대구',
            '인천광역시': '인천', '전남광주통합특별시': '광주', '대전광역시': '대전',
            '울산광역시': '울산', '세종특별자치시': '세종', '경기도': '경기',
            '강원특별자치도': '강원', '충청북도': '충북', '충청남도': '충남',
            '전북특별자치도': '전북', '경상북도': '경북', '경상남도': '경남',
            '제주특별자치도': '제주'
        };

        function regionLabel(c) {
            const metro = c.metropolitan || '';
            const short = shortMetroMap[metro] || metro;
            // 광역단체장 · 광역의원 → 시/도 짧은 이름만 (서울, 대구, 제주 등)
            if (c.category === '광역단체장' || c.category === '광역의원') return short || c.region;
            const parts = (c.region || '').split(' ');
            const city = parts[parts.length - 1] || '';
            if (short && city && short !== city) return `${short} ${city}`;
            return city || short;
        }

        function statusInfo(c) {
            if (['공천확정', '후보'].includes(c.status)) return { cls: 'confirmed', text: '✓ 공천확정' };
            if (c.status === '예비후보' || c.showPreliminaryBadge) return { cls: 'prelim', text: '예비후보' };
            if (c.decl && c.decl !== '#') return { cls: 'decl', text: '출마선언' };
            return { cls: 'decl', text: '출마예정' };
        }

        function officeLabel(c) {
            if (typeof getCleanOffice === 'function') return getCleanOffice(c);
            return c.office || '';
        }

        /* ── 5. 카드 HTML 생성 ── */
        function cardHTML(c) {
            const st   = statusInfo(c);
            const reg  = regionLabel(c);
            const off  = officeLabel(c);
            const bio  = (c.bio || []).slice(0, 2)
                .map(l => l.replace(/<[^>]*>/g, ''))
                .filter(Boolean);

            return `
                <div class="youth-card" data-name="${c.name}">
                    <div class="youth-card-photo-wrap">
                        <img class="youth-card-photo"
                             src="${c.photo}"
                             alt="개혁신당 ${c.name} 후보 프로필"
                             loading="lazy"
                             onerror="this.parentElement.style.background='#e2e8f0'">
                        <div class="youth-region-tag">${reg}</div>
                        <div class="youth-age-tag">${c.age}세</div>
                        <div class="youth-card-overlay">
                            <div class="youth-status-badge ${st.cls}">${st.text}</div>
                            <div class="youth-card-name">${c.name}</div>
                            <div class="youth-card-office">${off}</div>
                        </div>
                    </div>
                    <div class="youth-card-bio">
                        ${bio.map(l =>
                            `<div class="youth-bio-item">
                                <span class="youth-bio-dot"></span>
                                <span>${l}</span>
                            </div>`
                        ).join('')}
                        ${bio.length === 0
                            ? `<div class="youth-bio-item">
                                   <span class="youth-bio-dot"></span>
                                   <span>${c.region}</span>
                               </div>`
                            : ''}
                    </div>
                </div>
            `;
        }

        /* ── 6. DOM 주입 ── */
        const originalCards = shuffled.map(cardHTML).join('');

        container.innerHTML = `
            <section id="youth-section">
                <div class="youth-header">
                    <div class="youth-title-wrap">
                        <div class="youth-title-bar"></div>
                        <span class="youth-title">청년후보들 미리보기</span>
                    </div>
                    <span class="youth-sub">접속할 때마다 랜덤 순서</span>
                </div>
                <div class="youth-viewport" id="youth-viewport">
                    <div class="youth-track" id="youth-track">
                        ${originalCards}
                        ${originalCards}
                    </div>
                </div>
            </section>
        `;

        /* ── 7. 무한 스크롤 설정 ── */
        const track    = document.getElementById('youth-track');
        const viewport = document.getElementById('youth-viewport');

        // 카드 한 장 너비 + gap (CSS와 맞춤)
        const CARD_W = (window.innerWidth >= 640 ? 188 : 172) + 12;
        const totalShift = shuffled.length * CARD_W;

        track.style.setProperty('--youth-shift', `-${totalShift}px`);
        // 카드 수에 따라 속도 조절 (카드당 약 2.6초)
        track.style.setProperty('--youth-dur', `${Math.max(shuffled.length * 2.6, 18)}s`);

        /* ── 8. 일시정지: 마우스 / 터치 ── */
        function pause()  { track.classList.add('paused'); }
        function resume() { track.classList.remove('paused'); }

        viewport.addEventListener('mouseenter',  pause);
        viewport.addEventListener('mouseleave',  resume);
        viewport.addEventListener('touchstart',  pause,  { passive: true });
        viewport.addEventListener('touchend',    resume);
        viewport.addEventListener('touchcancel', resume);

        /* ── 9. 카드 클릭 → 프로필 모달 ── */
        track.addEventListener('click', function (e) {
            const card = e.target.closest('.youth-card');
            if (!card) return;
            const name = card.getAttribute('data-name');
            if (!name) return;
            if (typeof openProfileModal === 'function') {
                openProfileModal(name);
            }
        });
    }

    /* 실행 */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
