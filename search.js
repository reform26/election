// search.js - 동네 검색 v15 (검색창 placeholder 변경 및 자동완성/다중선거구 지원 유지)

(function () {

    // ── 1. 초성 추출 함수 ─────────
    const CHOSUNG_LIST = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
    
    function getChosung(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            const code = str.charCodeAt(i) - 44032;
            if (code > -1 && code < 11172) {
                result += CHOSUNG_LIST[Math.floor(code / 588)];
            } else {
                result += str.charAt(i);
            }
        }
        return result;
    }

    // ── 2. '제' 자 정규화 및 핵심 동 매칭 로직 ────────
    function normalizeDong(str) {
        if (!str) return '';
        return str.replace(/제(\d)/g, '$1').replace(/\s+/g, '').trim();
    }
    
    function dongMatch(a, b, onlyExact = false) {
        let na = normalizeDong(a).replace(/동$/, ''); 
        let nb = normalizeDong(b);                    
        
        const isOnlyChosung = /^[ㄱ-ㅎ]+$/.test(nb);
        
        if (isOnlyChosung) {
            if (onlyExact) return false; 
            nb = nb.replace(/ㄷ$/, ''); 
            const naChosung = getChosung(na);
            if (naChosung === nb) return true;
            
            const baseNaChosung = getChosung(na.replace(/[0-9]+$/, ''));
            if (baseNaChosung === nb) return true;
            
            return false;
        } else {
            nb = nb.replace(/동$/, ''); 
        }

        if (na === nb) return true;
        if (onlyExact) return false;

        const baseNa = na.replace(/[0-9]+$/, ''); 
        if (baseNa === nb) return true;

        return false;
    }

    // ── 3. 지역 데이터 파싱 함수 ────
    function getDistrictList() {
        const list = [];
        const mapping = [
            { data: window.SEOUL_INITIAL_DISTRICTS, metro: "서울특별시", short: "서울" },
            { data: window.GYEONGGI_INITIAL_DISTRICTS, metro: "경기도", short: "경기" },
            { data: window.DAEGU_INITIAL_DISTRICTS, metro: "대구광역시", short: "대구" }
        ];
        
        for (const map of mapping) {
            if (!map.data) continue;
            for (const [key, val] of Object.entries(map.data)) {
                list.push({
                    districtName: key,
                    city: key.split(' ')[0], 
                    metro: map.metro,
                    short: map.short,
                    dongs: val.dongs || []
                });
            }
        }
        return list;
    }

    function isCitySearch(q) { return /[시구군]$/.test(q); }

    // ── 4. 광역의원 선거구 판단 ──────────────────────────────
    function isProvCouncilInCity(c, cityName, cityDongs) {
        if (c.category !== "광역의원" || c.constituency === "비례") return false;

        const cityBase = cityName.replace(/[구시군]$/, '');
        let hasCityInfo = false;
        let isMatch = false;

        if (c.constituencyFull) {
            hasCityInfo = true;
            if (c.constituencyFull.includes(cityName)) isMatch = true;
        }

        if (c.district) {
            hasCityInfo = true;
            const districtCity = c.district.split(/\s+/)[0];
            if (districtCity === cityBase) {
                isMatch = true;
            } else {
                isMatch = false; 
            }
        }

        if (hasCityInfo) return isMatch;

        if (c.subRegion && cityDongs.length > 0) {
            const parts = c.subRegion.split(/[,，、]\s*/);
            return parts.some(sd =>
                cityDongs.some(dong => dongMatch(sd.trim(), dong, true))
            );
        }
        return false;
    }

    function isProvCouncilMatchDong(c, q, districtDongs, cityName, isExactMode) {
        if (c.category !== "광역의원" || c.constituency === "비례") return false;
        if (!c.subRegion) return false;

        const cityBase = cityName.replace(/[구시군]$/, '');
        let cityMatched = false;
        let hasCityInfo = false;

        if (c.constituencyFull) {
            hasCityInfo = true;
            if (c.constituencyFull.includes(cityName)) cityMatched = true;
        }
        if (c.district) {
            hasCityInfo = true;
            const districtCity = c.district.split(/\s+/)[0];
            if (districtCity === cityBase) cityMatched = true;
            else cityMatched = false;
        }

        if (hasCityInfo && !cityMatched) return false;

        const parts = c.subRegion.split(/[,，、]\s*/);
        const directHit = parts.some(sd => dongMatch(sd.trim(), q, isExactMode));
        const districtHit = districtDongs.some(dong => parts.some(sd => dongMatch(sd.trim(), dong, true)));

        return directHit || districtHit;
    }

    // ── 5. 시/구/군 검색 (중복 이름 대응) ───────────────────────
    function searchByCity(q, forcedMetro = null) {
        const distList = getDistrictList();
        const matchedCities = [];
        
        for (const item of distList) {
            if (item.city === q && (!forcedMetro || item.metro === forcedMetro)) {
                let existing = matchedCities.find(c => c.metro === item.metro && c.city === item.city);
                if (!existing) {
                    matchedCities.push({ metro: item.metro, short: item.short, city: item.city, dongs: [...item.dongs] });
                } else {
                    existing.dongs.push(...item.dongs);
                }
            }
        }

        if (matchedCities.length === 0) return { found: false };

        if (matchedCities.length > 1) {
            return { found: true, type: 'multi-city', query: q, results: matchedCities };
        }

        const cityInfo = matchedCities[0];
        const metropolitan = cityInfo.metro;
        const cityFull = `${cityInfo.short} ${q}`;
        const cityDongs = cityInfo.dongs;

        const matched = candidates.filter(c => {
            switch (c.category) {
                case "광역단체장":
                    return c.region === metropolitan;
                case "기초단체장":
                    return c.region === cityFull;
                case "광역의원":
                    if (c.metropolitan !== metropolitan) return false;
                    if (c.constituency === "비례") return true; 
                    return isProvCouncilInCity(c, q, cityDongs);
                case "기초의원":
                    return c.region === cityFull;
                case "광역비례":
                    return c.metropolitan === metropolitan || c.region === metropolitan;
                case "기초비례":
                    return c.region === cityFull;
                default:
                    return false;
            }
        });

        return { found: true, query: q, type: 'city', metropolitan, cityName: q, candidates: matched };
    }

    // ── 6. 행정동 검색 (스마트 매칭 적용 및 행정동 추적) ─────────────
    function searchByDongName(q) {
        const distList = getDistrictList();
        
        let isExactMode = false;
        for (const item of distList) {
            if (item.dongs.some(dong => dongMatch(dong, q, true))) {
                isExactMode = true; 
                break;
            }
        }

        const matchedDistricts = [];

        for (const item of distList) {
            const mDongs = item.dongs.filter(dong => dongMatch(dong, q, isExactMode));
            
            if (mDongs.length > 0) {
                let existing = matchedDistricts.find(d => d.districtName === item.districtName && d.metropolitan === item.metro);
                if (!existing) {
                    matchedDistricts.push({
                        districtName: item.districtName,
                        city: item.city,
                        metropolitan: item.metro,
                        short: item.short,
                        dongs: item.dongs,
                        matchedDongs: mDongs 
                    });
                } else {
                    existing.matchedDongs = [...new Set([...existing.matchedDongs, ...mDongs])];
                }
            }
        }
        
        if (!matchedDistricts.length) return { found: false };

        const results = matchedDistricts.map(({ districtName, city, metropolitan, short, dongs, matchedDongs }) => {
            const cityFull = `${short} ${city}`;
            const districtLetter = districtName.match(/([가-힣]+)선거구$/)?.[1];

            const 광역단체장 = candidates.filter(c => c.category === "광역단체장" && c.region === metropolitan);
            const 기초단체장 = candidates.filter(c => c.category === "기초단체장" && c.region === cityFull);
            const 광역지역구의원 = candidates.filter(c =>
                c.category === "광역의원" && c.metropolitan === metropolitan &&
                c.constituency !== "비례" && isProvCouncilMatchDong(c, q, dongs, city, isExactMode)
            );
            const 광역비례의원 = candidates.filter(c =>
                c.category === "광역의원" && c.metropolitan === metropolitan && c.constituency === "비례"
            );
            const 광역의원 = [...광역지역구의원, ...광역비례의원];

            const 기초의원 = candidates.filter(c => {
                if (c.category !== "기초의원" || c.region !== cityFull) return false;
                const parts = (c.subRegion || '').split(/[,，、]\s*/);
                const dongHit = parts.some(sd => dongMatch(sd.trim(), q, isExactMode)) ||
                                dongs.some(dong => parts.some(sd => dongMatch(sd.trim(), dong, true)));
                return dongHit || c.district === districtLetter;
            });

            return { districtName, city, metropolitan, short, dongs, matchedDongs, 광역단체장, 기초단체장, 광역의원, 광역지역구의원, 광역비례의원, 기초의원 };
        });

        return { found: true, query: q, type: 'dong', results };
    }

    // ── 7. 자동완성(Autocomplete) 로직 ──────────────────────
    let AUTOCOMPLETE_DICT = [];
    
    function initAutocomplete() {
        const distList = getDistrictList();
        const seen = new Set();
        
        distList.forEach(item => {
            const cityFull = item.short + " " + item.city;
            const cityKey = item.metro + "|" + item.city;
            
            // 시/구 추가
            if (!seen.has(cityKey)) {
                seen.add(cityKey);
                AUTOCOMPLETE_DICT.push({
                    type: 'city',
                    searchVal: item.city,
                    displayText: item.city,
                    searchable: [
                        item.city, 
                        cityFull,
                        item.metro + " " + item.city,
                        getChosung(item.city),
                        getChosung(cityFull)
                    ],
                    desc: `${item.short}`
                });
            }
            
            // 동 추가
            item.dongs.forEach(dong => {
                const dongKey = item.metro + "|" + item.city + "|" + dong;
                if (!seen.has(dongKey)) {
                    seen.add(dongKey);
                    
                    const normDong = normalizeDong(dong); 
                    const baseDong = normDong.replace(/[0-9]+$/, ''); 
                    const baseDongWithDong = baseDong + (baseDong.endsWith('동') ? '' : '동'); 
                    
                    AUTOCOMPLETE_DICT.push({
                        type: 'dong',
                        searchVal: dong,
                        displayText: dong,
                        searchable: [
                            dong, 
                            normDong, 
                            baseDongWithDong, 
                            cityFull + " " + dong,
                            getChosung(dong), 
                            getChosung(normDong), 
                            getChosung(baseDongWithDong)
                        ],
                        desc: cityFull
                    });
                }
            });
        });
    }

    function getAutocompleteSuggestions(q) {
        if (!q) return [];
        if (AUTOCOMPLETE_DICT.length === 0) initAutocomplete();
        
        const qNorm = q.replace(/\s+/g, ''); // 띄어쓰기 무시
        const isCho = /^[ㄱ-ㅎ]+$/.test(qNorm);
        
        const matches = [];
        for (const item of AUTOCOMPLETE_DICT) {
            let matched = false;
            for (const s of item.searchable) {
                if (!s) continue;
                if (isCho) {
                    if (/^[ㄱ-ㅎ]+$/.test(s) && s.includes(qNorm)) { matched = true; break; }
                } else {
                    if (!/^[ㄱ-ㅎ]+$/.test(s) && s.replace(/\s+/g, '').includes(qNorm)) { matched = true; break; }
                }
            }
            if (matched) matches.push(item);
            if (matches.length >= 8) break; // 최대 8개까지만 추천
        }
        return matches;
    }

    function showAutocomplete(q) {
        const resultEl = document.getElementById('dong-search-result');
        if (!resultEl) return;
        
        if (!q || !q.trim()) {
            resultEl.innerHTML = '';
            return;
        }

        const suggestions = getAutocompleteSuggestions(q);
        
        if (suggestions.length === 0) {
            resultEl.innerHTML = `
            <div class="flex flex-col items-center justify-center py-6 text-center bg-gray-50 dark:bg-slate-800/50 rounded-2xl">
                <p class="text-sm font-black text-gray-500 dark:text-gray-400">'${q}' 추천 결과가 없습니다.</p>
                <p class="text-[11px] text-gray-400 mt-1">엔터(Enter)를 눌러 전체 검색을 진행해 보세요.</p>
            </div>`;
            return;
        }

        const html = suggestions.map(s => {
            const icon = s.type === 'city' ? 'building-2' : 'map-pin';
            return `
            <button onclick="executeAutocomplete('${s.searchVal}')" class="flex items-center gap-3 w-full text-left bg-white dark:bg-slate-900 border-2 border-transparent hover:border-[#FF6600] hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-xl px-4 py-2.5 transition-all group">
                <div class="bg-gray-100 dark:bg-slate-800 group-hover:bg-[#FF6600] p-1.5 rounded-lg transition-colors flex-shrink-0">
                    <i data-lucide="${icon}" class="w-4 h-4 text-gray-400 dark:text-slate-400 group-hover:text-white transition-colors"></i>
                </div>
                <div class="flex-1 min-w-0 flex items-baseline gap-2">
                    <span class="text-sm font-bold text-gray-900 dark:text-white truncate">${s.displayText}</span>
                    <span class="text-[11px] text-gray-400 dark:text-slate-500 font-medium truncate">${s.desc}</span>
                </div>
                <i data-lucide="arrow-up-left" class="w-3.5 h-3.5 text-gray-300 group-hover:text-[#FF6600] opacity-0 group-hover:opacity-100 transition-all flex-shrink-0"></i>
            </button>`;
        }).join('');

        resultEl.innerHTML = `
        <div class="py-1">
            <p class="text-[10px] text-gray-400 font-bold mb-2 ml-1">💡 추천 검색어</p>
            <div class="flex flex-col gap-1">${html}</div>
        </div>`;
        lucide.createIcons();
    }

    window.executeAutocomplete = function(val) {
        const input = document.getElementById('dong-search-input');
        if (input) input.value = val;
        performDongSearch(val);
    };

    // ── 8. 메인 검색 진입점 및 필터 관리 ──────────────────────
    window.searchByDong = function (query) {
        if (!query || !query.trim()) return null;
        const q = query.trim();
        return isCitySearch(q) ? searchByCity(q) : searchByDongName(q);
    };

    window._searchFilteredCandidates = null;

    window.applySearchFilter = function (list) {
        window._searchFilteredCandidates = list;
        const btn = document.getElementById('search-reset-btn');
        if (btn) { btn.classList.remove('hidden'); btn.classList.add('flex'); }
        rerender();
    };

    window.resetSearchFilter = function () {
        window._searchFilteredCandidates = null;
        const input = document.getElementById('dong-search-input');
        if (input) input.value = '';
        const el = document.getElementById('dong-search-result');
        if (el) el.innerHTML = '';
        const btn = document.getElementById('search-reset-btn');
        if (btn) { btn.classList.add('hidden'); btn.classList.remove('flex'); }
        const banner = document.getElementById('search-active-banner');
        if (banner) { banner.classList.add('hidden'); banner.classList.remove('flex'); }
        rerender();
    };

    function rerender() {
        const regionBtn = document.getElementById('btn-region');
        if (regionBtn && regionBtn.classList.contains('active')) renderRegionView();
        else renderOriginalView();
    }

    window.addEventListener('load', function () {
        const origO = window.renderOriginalView;
        const origR = window.renderRegionView;
        if (typeof origO === 'function') {
            window.renderOriginalView = function () {
                if (window._searchFilteredCandidates !== null) renderSearchView();
                else origO.apply(this, arguments);
            };
        }
        if (typeof origR === 'function') {
            window.renderRegionView = function (t) {
                if (window._searchFilteredCandidates !== null) renderSearchView();
                else origR.apply(this, arguments);
            };
        }
    });

    // ── 9. 검색 결과 뷰 렌더링 ──────────────────────────────
    const CAT_ORDER = ["광역단체장", "기초단체장", "광역의원", "기초의원", "기초비례", "재보궐"];
    const CAT_LABEL = {
        "광역단체장": "광역자치단체장",
        "기초단체장": "기초자치단체장",
        "광역의원":   "광역의회의원",
        "기초의원":   "기초의회의원",
        "기초비례":   "기초비례대표",
        "재보궐":     "재보궐선거",
    };

    function renderSearchView() {
        const container = document.getElementById('content-area');
        if (!container) return;
        const filtered = window._searchFilteredCandidates || [];

        if (!filtered.length) {
            container.innerHTML = `
            <div class="flex flex-col items-center justify-center py-20 text-center">
                <div class="bg-gray-100 dark:bg-slate-700 rounded-2xl p-4 mb-3">
                    <i data-lucide="search-x" class="w-10 h-10 text-gray-300 dark:text-slate-500"></i>
                </div>
                <p class="text-base font-black text-gray-400 dark:text-slate-500">해당 지역에 등록된 후보가 없어요</p>
                <button onclick="resetSearchFilter()" class="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF6600] text-white rounded-xl font-black text-sm hover:bg-orange-700 transition-colors">
                    <i data-lucide="refresh-ccw" class="w-4 h-4"></i>전체 보기로 돌아가기
                </button>
            </div>`;
            lucide.createIcons();
            return;
        }

        let html = `
        <div class="mb-6 flex items-center justify-between">
            <h2 class="text-xl font-black text-gray-900 dark:text-white tracking-tight">
                🔍 검색 결과 <span class="text-[#FF6600]">${filtered.length}명</span>
            </h2>
            <button onclick="resetSearchFilter()" class="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 rounded-xl font-black text-sm hover:bg-gray-200 transition-colors">
                <i data-lucide="x" class="w-4 h-4"></i>필터 해제
            </button>
        </div>`;

        for (const cat of CAT_ORDER) {
            let group = filtered.filter(c => c.category === cat);
            if (!group.length) continue;

            group.sort((a, b) => {
                const isBireA = a.constituency === "비례" || a.category.includes("비례");
                const isBireB = b.constituency === "비례" || b.category.includes("비례");

                if (isBireA && !isBireB) return 1;
                if (!isBireA && isBireB) return -1;

                const nameA = a.name || "";
                const nameB = b.name || "";
                return nameA.localeCompare(nameB, 'ko-KR');
            });

            html += `
            <section class="mb-10 scroll-mt-24">
                <h2 class="section-title">${CAT_LABEL[cat]}</h2>
                <div class="grid-responsive">
                    ${group.map(c => typeof createCard === 'function' ? createCard(c) : '').join('')}
                </div>
            </section>`;
        }

        container.innerHTML = html;
        lucide.createIcons();
    }

    // ── 10. 검색 박스 UI 및 제어 ───────────────────────────────
    window.renderDongSearch = function () {
        const container = document.getElementById('dong-search-root');
        if (!container) return;

        container.innerHTML = `
        <div class="bg-white dark:bg-slate-800 border border-orange-100 dark:border-slate-700 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-7 shadow-sm">
            <div class="flex items-center gap-3 mb-5">
                <div class="bg-orange-100 dark:bg-orange-900/30 p-2.5 rounded-xl">
                    <i data-lucide="search" class="w-5 h-5 text-[#FF6600]"></i>
                </div>
                <div>
                    <h2 class="font-black text-gray-900 dark:text-white text-lg leading-tight">내 동네 후보 찾기</h2>
                    <p class="text-xs text-gray-400 dark:text-slate-500 font-medium">시·군·구, 행정동 초성 또는 이름을 입력해 보세요.</p>
                </div>
            </div>

            <div class="relative mb-2">
                <input
                    id="dong-search-input"
                    type="text"
                    autocomplete="off"
                    placeholder="예) 종로구, 이곡1동, 병점동..."
                    class="w-full border-2 border-orange-200 dark:border-orange-900/50 rounded-2xl px-5 py-3.5 pr-32 text-sm font-bold bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-slate-600 focus:outline-none focus:border-[#FF6600] transition-colors"
                    oninput="onDongSearchInput(this.value, false)"
                    onkeydown="if(event.key==='Enter') onDongSearchInput(this.value, true)"
                />
                <div class="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1.5 items-center">
                    <button id="search-reset-btn" onclick="resetSearchFilter()" class="hidden items-center gap-1 bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-300 rounded-xl px-2.5 py-1.5 text-xs font-black hover:bg-gray-200 transition-colors">
                        <i data-lucide="x" class="w-3 h-3"></i>초기화
                    </button>
                    <button onclick="onDongSearchInput(document.getElementById('dong-search-input').value, true)" class="bg-[#FF6600] text-white rounded-xl p-2 hover:bg-orange-700 transition-colors">
                        <i data-lucide="search" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
            <p class="text-[10px] text-gray-400 dark:text-slate-600 font-medium mb-1">※ 현재 서울 · 경기 · 대구 지역 지원 | 초성 검색 지원</p>

            <div id="dong-search-result" class="mt-3"></div>
        </div>

        <div id="search-active-banner" class="hidden mt-3 items-center justify-between bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/50 rounded-2xl px-4 py-3">
            <div class="flex items-center gap-2 min-w-0">
                <i data-lucide="filter" class="w-4 h-4 text-[#FF6600] flex-shrink-0"></i>
                <span id="search-active-text" class="text-sm font-black text-orange-600 dark:text-orange-400 truncate"></span>
            </div>
            <button onclick="resetSearchFilter()" class="flex items-center gap-1 text-xs font-black text-gray-500 dark:text-slate-400 hover:text-gray-700 transition-colors flex-shrink-0 ml-3">
                <i data-lucide="x" class="w-3 h-3"></i>해제
            </button>
        </div>`;

        lucide.createIcons();
    };

    let searchTimeout = null;
    window.onDongSearchInput = function (value, immediate) {
        clearTimeout(searchTimeout);
        if (immediate) {
            performDongSearch(value); // 엔터, 검색버튼 누를 때 전체 검색 실행
        } else {
            searchTimeout = setTimeout(() => showAutocomplete(value), 150); // 타이핑 시 자동완성 렌더링
        }
    };

    function showBannerAndScroll(labelText) {
        const banner = document.getElementById('search-active-banner');
        const bannerText = document.getElementById('search-active-text');
        if (banner && bannerText) {
            bannerText.textContent = labelText;
            banner.classList.remove('hidden'); banner.classList.add('flex');
        }
        const resetBtn = document.getElementById('search-reset-btn');
        if (resetBtn) { resetBtn.classList.remove('hidden'); resetBtn.classList.add('flex'); }

        setTimeout(() => {
            const ca = document.getElementById('content-area');
            if (ca) ca.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
    }

    // [시/구/군 검색 결과 적용]
    function applyCityResult(result) {
        const resultEl = document.getElementById('dong-search-result');
        const labelText = `'${result.cityName}' 관련 후보 ${result.candidates.length}명 표시 중`;
        if (resultEl) {
            resultEl.innerHTML = `
            <div class="bg-orange-50 dark:bg-orange-900/20 rounded-xl px-4 py-3 mb-1">
                <div class="flex items-center gap-2">
                    <i data-lucide="map-pin" class="w-3.5 h-3.5 text-[#FF6600]"></i>
                    <span class="text-xs font-black text-gray-700 dark:text-slate-200">${result.cityName}</span>
                    <span class="text-[10px] text-gray-400">· 후보 ${result.candidates.length}명</span>
                </div>
                <p class="text-[10px] text-gray-400 mt-2">↓ 아래 목록이 검색 결과로 필터링됩니다</p>
            </div>`;
            lucide.createIcons();
        }
        window.applySearchFilter(result.candidates);
        showBannerAndScroll(labelText);
    }

    // [최종 행정동/선거구 결과 적용]
    function applyDongResults(query, results) {
        const resultEl = document.getElementById('dong-search-result');
        const seen = new Set();
        const matchedCandidates = [];
        for (const r of results) {
            const all = [...r.광역단체장, ...r.기초단체장, ...r.광역의원, ...r.기초의원];
            all.forEach(c => { if (!seen.has(c.name)) { seen.add(c.name); matchedCandidates.push(c); } });
        }

        const infoRows = results.map(r => {
            const total = r.광역단체장.length + r.기초단체장.length + r.광역의원.length + r.기초의원.length;
            const mDongsStr = r.matchedDongs && r.matchedDongs.length > 0 ? r.matchedDongs.join(', ') : '';
            const allDongsStr = r.dongs.join(', ');
            
            return `<div class="mb-4 last:mb-0">
                <div class="flex items-center gap-2 mb-1.5">
                    <i data-lucide="map-pin" class="w-3.5 h-3.5 text-[#FF6600]"></i>
                    <span class="text-[13px] font-black text-gray-800 dark:text-slate-200">${r.districtName}</span>
                    <span class="text-[10px] text-gray-400">· ${r.short} · 후보 ${total}명</span>
                </div>
                <div class="ml-5 space-y-2">
                    ${mDongsStr ? `<div><span class="text-[11px] font-bold text-[#FF6600] bg-orange-100/60 dark:bg-orange-900/40 px-1.5 py-0.5 rounded-md leading-tight">💡 검색된 동: ${mDongsStr}</span></div>` : ''}
                    <div class="text-[11px] text-gray-500 break-keep leading-relaxed bg-white dark:bg-slate-800 p-2 rounded-lg border border-gray-100 dark:border-slate-700">
                        <span class="font-bold text-gray-600 dark:text-slate-400">📍 관할 행정동:</span> ${allDongsStr}
                    </div>
                </div>
            </div>`;
        }).join('');

        if (resultEl) {
            resultEl.innerHTML = `
            <div class="bg-orange-50 dark:bg-orange-900/20 rounded-xl px-4 py-3 mb-1">
                ${infoRows}
                <p class="text-[10px] text-gray-400 mt-3 pt-2 border-t border-orange-200/50 dark:border-orange-800/30">↓ 아래 목록이 검색 결과로 필터링됩니다</p>
            </div>`;
            lucide.createIcons();
        }

        const labelText = `'${query}' (${results.map(r=>r.districtName).join(', ')}) 후보 ${matchedCandidates.length}명 표시 중`;
        window.applySearchFilter(matchedCandidates);
        showBannerAndScroll(labelText);
    }

    // [단일 도시 내에서 다중 선거구가 겹칠 경우 선거구 선택 화면]
    function renderDistrictSelection(query, cityData) {
        const resultEl = document.getElementById('dong-search-result');
        const btnHtml = cityData.districts.map(d => {
            const uniqueMatched = [...new Set(d.matchedDongs)];
            const mDongsStr = uniqueMatched.length > 0 ? uniqueMatched.join(', ') : '';
            const allDongsStr = d.dongs.join(', ');

            return `
            <button onclick="selectSpecificDistrict('${query}', '${d.districtName}', '${d.metropolitan}')"
                class="flex items-start gap-3 w-full text-left bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-700 hover:border-[#FF6600] hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-2xl px-4 py-3.5 transition-all group">
                <div class="bg-orange-100 dark:bg-orange-900/30 group-hover:bg-[#FF6600] p-2 rounded-xl transition-colors flex-shrink-0 mt-0.5">
                    <i data-lucide="map-pin" class="w-4 h-4 text-[#FF6600] group-hover:text-white transition-colors"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <p class="font-black text-gray-900 dark:text-white text-sm truncate">${d.districtName}</p>
                    ${mDongsStr ? `<p class="text-[11px] font-bold text-[#FF6600] mt-1.5 leading-tight truncate">💡 검색된 동: ${mDongsStr}</p>` : ''}
                    <p class="text-[11px] text-gray-500 font-medium mt-1.5 leading-relaxed line-clamp-2 break-keep">📍 관할: ${allDongsStr}</p>
                </div>
                <i data-lucide="chevron-right" class="w-4 h-4 text-gray-300 ml-1 mt-1 flex-shrink-0 group-hover:text-[#FF6600] transition-colors"></i>
            </button>`;
        }).join('');

        resultEl.innerHTML = `
        <div class="py-1">
            <div class="flex items-center gap-2 mb-2">
                <i data-lucide="help-circle" class="w-4 h-4 text-[#FF6600]"></i>
                <p class="text-sm font-black text-gray-700 dark:text-slate-200">'${query}'(이)가 여러 선거구에 나뉘어 있어요</p>
            </div>
            <p class="text-xs text-gray-400 dark:text-slate-500 mb-3">어느 선거구를 찾으시나요?</p>
            <div class="flex flex-col gap-2">${btnHtml}</div>
        </div>`;
        lucide.createIcons();
    }

    // [다중 도시 선택 화면]
    function renderCitySelectionForDong(query, uniqueCities) {
        const resultEl = document.getElementById('dong-search-result');
        const btnHtml = uniqueCities.map(c => {
            return `
            <button onclick="selectSpecificCityForDong('${query}', '${c.city}', '${c.metro}')"
                class="flex items-center gap-3 w-full text-left bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-700 hover:border-[#FF6600] hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-2xl px-4 py-3.5 transition-all group">
                <div class="bg-orange-100 dark:bg-orange-900/30 group-hover:bg-[#FF6600] p-2 rounded-xl transition-colors flex-shrink-0">
                    <i data-lucide="map-pin" class="w-4 h-4 text-[#FF6600] group-hover:text-white transition-colors"></i>
                </div>
                <div>
                    <p class="font-black text-gray-900 dark:text-white text-sm">${c.short} ${c.city}</p>
                    <p class="text-[11px] text-gray-400 font-medium mt-0.5">선거구 ${c.districts.length}개 발견</p>
                </div>
                <i data-lucide="chevron-right" class="w-4 h-4 text-gray-300 ml-auto flex-shrink-0 group-hover:text-[#FF6600] transition-colors"></i>
            </button>`;
        }).join('');

        resultEl.innerHTML = `
        <div class="py-1">
            <div class="flex items-center gap-2 mb-2">
                <i data-lucide="help-circle" class="w-4 h-4 text-[#FF6600]"></i>
                <p class="text-sm font-black text-gray-700 dark:text-slate-200">여러 지역이 발견되었어요</p>
            </div>
            <p class="text-xs text-gray-400 dark:text-slate-500 mb-3">어느 지역을 찾으시나요?</p>
            <div class="flex flex-col gap-2">${btnHtml}</div>
        </div>`;
        lucide.createIcons();
    }

    function handleDongResults(query, results) {
        const uniqueCities = [];
        for (const r of results) {
            const key = r.metropolitan + "_" + r.city;
            let found = uniqueCities.find(c => c.key === key);
            if (!found) {
                uniqueCities.push({ key, metro: r.metropolitan, short: r.short, city: r.city, districts: [r] });
            } else {
                found.districts.push(r);
            }
        }

        if (uniqueCities.length > 1) {
            renderCitySelectionForDong(query, uniqueCities);
            return;
        }

        const cityData = uniqueCities[0];
        if (cityData.districts.length > 1) {
            renderDistrictSelection(query, cityData);
            return;
        }

        applyDongResults(query, cityData.districts);
    }

    window.selectSpecificCityForDong = function(query, cityName, metroName) {
        const result = searchByDongName(query);
        if(result && result.found) {
            const filtered = result.results.filter(r => r.city === cityName && r.metropolitan === metroName);
            handleDongResults(query, filtered); 
        }
    };

    window.selectSpecificDistrict = function(query, districtName, metroName) {
        const result = searchByDongName(query);
        if (result && result.found) {
            const filtered = result.results.filter(r => r.districtName === districtName && r.metropolitan === metroName);
            applyDongResults(query, filtered);
        }
    };

    window.selectSpecificCity = function(query, metroName) {
        const result = searchByCity(query, metroName);
        if (result && result.found) applyCityResult(result);
    };

    // 통합 검색 엔트리 포인트
    function performDongSearch(query) {
        const resultEl = document.getElementById('dong-search-result');
        if (!resultEl) return;

        if (!query || !query.trim()) {
            resultEl.innerHTML = '';
            if (window._searchFilteredCandidates !== null) window.resetSearchFilter();
            return;
        }

        const result = window.searchByDong(query);

        if (!result || !result.found) {
            resultEl.innerHTML = `
            <div class="flex flex-col items-center justify-center py-6 text-center">
                <div class="bg-gray-100 dark:bg-slate-700 rounded-xl p-3 mb-2">
                    <i data-lucide="map-pin-off" class="w-6 h-6 text-gray-300 dark:text-slate-500"></i>
                </div>
                <p class="text-sm font-black text-gray-400">'${query}'을(를) 찾지 못했어요</p>
                <p class="text-xs text-gray-300 dark:text-slate-600 mt-1">서울·경기·대구 행정동 또는 시·군·구 이름을 정확히 입력해 주세요</p>
            </div>`;
            lucide.createIcons();
            return;
        }

        if (result.type === 'multi-city') {
            const matchedCities = result.results;
            const btnHtml = matchedCities.map(c => {
                return `
                <button onclick="selectSpecificCity('${query}', '${c.metro}')"
                    class="flex items-center gap-3 w-full text-left bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-700 hover:border-[#FF6600] hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-2xl px-4 py-3.5 transition-all group">
                    <div class="bg-orange-100 dark:bg-orange-900/30 group-hover:bg-[#FF6600] p-2 rounded-xl transition-colors flex-shrink-0">
                        <i data-lucide="map-pin" class="w-4 h-4 text-[#FF6600] group-hover:text-white transition-colors"></i>
                    </div>
                    <div>
                        <p class="font-black text-gray-900 dark:text-white text-sm">${c.short} ${c.city}</p>
                    </div>
                    <i data-lucide="chevron-right" class="w-4 h-4 text-gray-300 ml-auto flex-shrink-0 group-hover:text-[#FF6600] transition-colors"></i>
                </button>`;
            }).join('');

            resultEl.innerHTML = `
            <div class="py-1">
                <div class="flex items-center gap-2 mb-2">
                    <i data-lucide="help-circle" class="w-4 h-4 text-[#FF6600]"></i>
                    <p class="text-sm font-black text-gray-700 dark:text-slate-200">여러 지역이 발견되었어요</p>
                </div>
                <p class="text-xs text-gray-400 dark:text-slate-500 mb-3">어느 지역을 찾으시나요?</p>
                <div class="flex flex-col gap-2">${btnHtml}</div>
            </div>`;
            lucide.createIcons();
            return;
        }

        if (result.type === 'city') {
            applyCityResult(result);
            return;
        }

        if (result.type === 'dong') {
            handleDongResults(query, result.results);
            return;
        }
    }

})();