// ══════════════════════════════════════════════════
// 전체 후보자 지도 (Leaflet + Nominatim 자동 지오코딩)
// ══════════════════════════════════════════════════
let leafletMap = null;
let leafletMarkers = [];
let leafletLoaded = false;
let currentMapCategory = '전체';

// ── Nominatim 지오코딩 쿼리 생성 ──
function buildGeoQuery(cand) {
    const cat = cand.category;
    if (cat === '광역단체장') {
        // 시청/도청 검색
        const officeMap = {
            "서울특별시":"서울특별시청","부산광역시":"부산광역시청","대구광역시":"대구광역시청",
            "인천광역시":"인천광역시청","전남광주통합특별시":"광주광역시청","대전광역시":"대전광역시청",
            "울산광역시":"울산광역시청","세종특별자치시":"세종특별자치시청","경기도":"경기도청",
            "강원특별자치도":"강원도청","충청북도":"충청북도청","충청남도":"충청남도청",
            "전북특별자치도":"전북특별자치도청","경상북도":"경상북도청","경상남도":"경상남도청",
            "제주특별자치도":"제주특별자치도청"
        };
        return officeMap[cand.region] || cand.region + " 시청";
    }
    if (cat === '기초단체장') {
        // 구청/시청/군청
        const r = cand.region; // e.g. "서울 강동구"
        const parts = r.split(' ');
        const loc = parts[parts.length - 1];
        const city = parts.slice(0, -1).join(' ');
        if (loc.endsWith('구')) return `${city} ${loc}청`;
        if (loc.endsWith('군')) return `${loc}청`;
        return `${loc}청`; // 시청
    }
    if ((cat === '광역의원' || cat === '기초의원') && cand.subRegion) {
        // 행정동 목록의 첫 번째 동 기준 검색 (나머지는 평균 낼 수 없으므로 첫 동 대표)
        // → 여러 동을 각각 geocode 후 평균
        return null; // 별도 처리
    }
    return cand.region;
}

// ── sessionStorage 캐시 ──
const CACHE_KEY = 'candMapCoords_v2';
function loadCache() {
    try { return JSON.parse(sessionStorage.getItem(CACHE_KEY) || '{}'); }
    catch(e) { return {}; }
}
function saveCache(cache) {
    try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(cache)); }
    catch(e) {}
}

// ── Nominatim 단건 조회 ──
async function geocode(query) {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query + ', 대한민국')}&format=json&limit=1&accept-language=ko`;
    try {
        const res = await fetch(url, { headers: { 'User-Agent': 'reform2026-candidate-map' } });
        const data = await res.json();
        if (data && data[0]) return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    } catch(e) {}
    return null;
}

// ── 후보 1명의 좌표 계산 ──
// 우선순위: 1) cand.coords (geocode.js로 미리 넣은 값)
//           2) sessionStorage 캐시
//           3) Nominatim 실시간 조회
async function getCoords(cand, cache) {
    // geocode.js로 미리 좌표가 삽입된 경우 즉시 반환
    if (cand.coords) return cand.coords;

    const cat = cand.category;

    if (cat === '광역단체장') {
        const key = 'metro:' + cand.region;
        if (cache[key]) return cache[key];
        const q = buildGeoQuery(cand);
        const c = await geocode(q);
        if (c) cache[key] = c;
        return c;
    }

    if (cat === '기초단체장') {
        const key = 'local:' + cand.region;
        if (cache[key]) return cache[key];
        const q = buildGeoQuery(cand);
        const c = await geocode(q);
        if (c) cache[key] = c;
        return c;
    }

    if ((cat === '광역의원' || cat === '기초의원') && cand.subRegion) {
        // 첫 번째 행정동만 사용
        const firstDong = cand.subRegion.split(/[,、]\s*/)[0].trim();
        const key = 'dong:' + firstDong;
        if (cache[key]) return cache[key];
        const metro = cand.metropolitan || cand.region;
        let c = await geocode(`${firstDong} ${metro}`);
        if (!c) c = await geocode(firstDong);
        if (c) cache[key] = c;
        return c;
    }

    return null;
}

// ── 지도 열기 ──
window.openAllCandidatesMap = function() {
    const overlay = document.getElementById('all-candidates-map-overlay');
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    if (!leafletLoaded) {
        leafletLoaded = true;
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
        script.onload = initLeafletMap;
        document.head.appendChild(script);
    } else if (leafletMap) {
        setTimeout(() => leafletMap.invalidateSize(), 100);
    }
};

window.closeAllCandidatesMap = function() {
    document.getElementById('all-candidates-map-overlay').style.display = 'none';
    document.body.style.overflow = '';
};

function initLeafletMap() {
    leafletMap = L.map('all-candidates-leaflet-map', {
        center: [36.5, 127.8], zoom: 7, zoomControl: true,
    });
    L.tileLayer('https://tiles.osm.kr/hot/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://osm.kr/">OSM Korea</a> contributors', maxZoom: 19,
    }).addTo(leafletMap);
    loadAndPlaceMarkers();
}

// ── 마커 생성 (좌표 있는 것부터 즉시, 나머지는 순차 조회) ──
async function loadAndPlaceMarkers() {
    leafletMarkers.forEach(m => m.remove());
    leafletMarkers = [];

    const colorMap = { '광역단체장':'#e53e3e','기초단체장':'#d69e2e','광역의원':'#3182ce','기초의원':'#FF6600','재보궐선거':'#805ad5' };
    const sizeMap  = { '광역단체장':34,'기초단체장':30,'광역의원':26,'기초의원':22,'재보궐선거':26 };

    const cands = (window.candidates || []).filter(c =>
        !c.hidden &&
        (currentMapCategory === '전체' || c.category === currentMapCategory)
    );

    const cache = loadCache();
    let placed = 0;
    const subtitle = document.getElementById('all-map-subtitle');
    subtitle.innerText = '좌표를 불러오는 중...';

    // 이미 캐시된 것은 즉시 표시, 없는 것만 조회
    const pending = [];
    for (const cand of cands) {
        const coords = await getCoords(cand, cache);
        if (coords) {
            addMarker(cand, coords, colorMap, sizeMap);
            placed++;
            subtitle.innerText = `${placed}/${cands.length}명 표시 중...`;
        } else {
            pending.push(cand);
        }
    }

    saveCache(cache);
    subtitle.innerText = `${placed}명 표시 중${pending.length > 0 ? ` (좌표 없음 ${pending.length}명)` : ' ✓'} · 마커를 클릭하면 상세 정보`;
}

const _coordCount = {};
function addMarker(cand, coords, colorMap, sizeMap) {
    const key = coords[0].toFixed(4) + ',' + coords[1].toFixed(4);
    _coordCount[key] = (_coordCount[key] || 0) + 1;
    const cnt = _coordCount[key];
    const angle = (cnt - 1) * 1.2;
    const r = Math.floor((cnt - 1) / 6) * 0.003 + 0.002;
    const lat = coords[0] + (cnt > 1 ? Math.sin(angle) * r : 0);
    const lng = coords[1] + (cnt > 1 ? Math.cos(angle) * r : 0);

    const catKey = cand.category || '기초의원';
    const color = colorMap[catKey] || '#FF6600';
    const sz = sizeMap[catKey] || 22;

    const icon = L.divIcon({
        className: '',
        html: `<div class="cand-div-icon" style="background:${color};width:${sz}px;height:${sz}px;font-size:${Math.floor(sz*0.38)}px;">${cand.name.charAt(0)}</div>`,
        iconSize: [sz, sz], iconAnchor: [sz/2, sz/2], popupAnchor: [0, -(sz/2+4)],
    });

    const isConfirmed = (["공천확정","후보"].includes(cand.status)) && cand.name !== "이수찬" && cand.name !== "김성민";
    const statusText = isConfirmed ? '🟠 공천확정' : (cand.decl && cand.decl !== '#' ? '📢 출마선언' : '📝 출마예정');
    const districtText = cand.district ? ` ${cand.district}선거구` : '';
    const subRegionText = cand.subRegion
        ? `<div style="color:#94a3b8;font-size:0.66rem;margin-top:4px;line-height:1.6;">${cand.subRegion.replace(/,\s*/g,' · ')}</div>`
        : '';

    // 직책/의회명 표시
    // 광역·기초단체장: office 필드 그대로 (예: "서울특별시장", "관악구청장")
    // 광역·기초의원: region 필드에서 의회명 직접 생성 (office 필드는 불규칙해서 사용 안 함)
    function getOfficeLabel(c) {
        if (c.category === '광역단체장' || c.category === '기초단체장') {
            return c.office || c.category;
        }
        if (c.category === '광역의원' || c.category === '기초의원') {
            const region = c.region || '';
            const fullNames = {
                '서울특별시': '서울특별시의회',
                '부산광역시': '부산광역시의회',
                '대구광역시': '대구광역시의회',
                '인천광역시': '인천광역시의회',
                '전남광주통합특별시': '광주광역시의회',
                '대전광역시': '대전광역시의회',
                '울산광역시': '울산광역시의회',
                '세종특별자치시': '세종특별자치시의회',
                '경기도': '경기도의회',
                '강원특별자치도': '강원특별자치도의회',
                '충청북도': '충청북도의회',
                '충청남도': '충청남도의회',
                '전북특별자치도': '전북특별자치도의회',
                '경상북도': '경상북도의회',
                '경상남도': '경상남도의회',
                '제주특별자치도': '제주특별자치도의회',
            };
            if (fullNames[region]) return fullNames[region];
            // "서울 강남구" → "강남구의회", "경기 수원시" → "수원시의회"
            const parts = region.split(' ');
            const loc = parts[parts.length - 1];
            return loc ? loc + '의회' : c.category;
        }
        return c.office || c.category;
    }
    const officeLabel = getOfficeLabel(cand);

    const popupHtml = `
        <div style="background:#0f172a;padding:12px 14px;min-width:170px;font-family:'Pretendard','Noto Sans KR',sans-serif;">
            <div style="font-size:1rem;font-weight:900;color:#FF6600;margin-bottom:3px;">${cand.name}</div>
            <div style="font-size:0.75rem;font-weight:700;color:#e2e8f0;">${officeLabel}${districtText}</div>
            <div style="font-size:0.7rem;color:#64748b;margin-top:2px;">${cand.region}</div>
            ${subRegionText}
            <div style="margin-top:6px;font-size:0.68rem;font-weight:800;color:white;">${statusText}</div>
        </div>`;

    const marker = L.marker([lat, lng], { icon })
        .bindPopup(popupHtml, { maxWidth: 260 })
        .addTo(leafletMap);
    leafletMarkers.push(marker);
}

window.filterMapCategory = function(cat) {
    currentMapCategory = cat;
    document.querySelectorAll('.map-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.cat === cat);
    });
    if (leafletMap) {
        // coordCount 리셋
        Object.keys(_coordCount).forEach(k => delete _coordCount[k]);
        loadAndPlaceMarkers();
    }
};

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const ov = document.getElementById('all-candidates-map-overlay');
        if (ov && ov.style.display !== 'none') closeAllCandidatesMap();
    }
});
document.getElementById('all-candidates-map-overlay').addEventListener('click', function(e) {
    if (e.target === this) closeAllCandidatesMap();
});
