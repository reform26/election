/**
 * geocode.js - 후보자 좌표 자동 삽입 스크립트
 * 사용법: node geocode.js
 *
 * can.js의 각 후보자에 coords 필드를 자동으로 채워넣습니다.
 * Nominatim (OpenStreetMap) 무료 API 사용 - API 키 불필요
 */

const fs = require('fs');

// ── 1. can.js 읽기 ──
const canContent = fs.readFileSync('./can.js', 'utf-8');

// candidates 배열 추출 (window.candidates = [...] 또는 const candidates = [...])
const match = canContent.match(/(?:window\.candidates|const candidates)\s*=\s*(\[[\s\S]*?\]);?\s*$/m);
// 마지막 대괄호까지 포함하도록 greedy하게 찾기
const arrMatch = canContent.match(/(?:window\.candidates|const candidates)\s*=\s*(\[[\s\S]*\])/);
if (!arrMatch) {
    console.error('❌ can.js에서 candidates 배열을 찾을 수 없어요.');
    process.exit(1);
}

let candidates;
try {
    candidates = eval(arrMatch[1]); // JSON.parse 대신 eval (JS 객체 문법이라)
} catch(e) {
    console.error('❌ candidates 파싱 실패:', e.message);
    process.exit(1);
}

// ── 2. 광역단체장 청사명 매핑 ──
const OFFICE_MAP = {
    "서울특별시": "서울특별시청",
    "부산광역시": "부산광역시청",
    "대구광역시": "대구광역시청",
    "인천광역시": "인천광역시청",
    "전남광주통합특별시": "광주광역시청",
    "대전광역시": "대전광역시청",
    "울산광역시": "울산광역시청",
    "세종특별자치시": "세종특별자치시청",
    "경기도": "경기도청",
    "강원특별자치도": "강원도청",
    "충청북도": "충청북도청",
    "충청남도": "충청남도청",
    "전북특별자치도": "전북특별자치도청",
    "경상북도": "경상북도청",
    "경상남도": "경상남도청",
    "제주특별자치도": "제주특별자치도청",
};

// ── 3. Nominatim API 호출 (1초 딜레이 포함) ──
async function geocode(query) {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query + ', 대한민국')}&format=json&limit=1&accept-language=ko`;
    try {
        const res = await fetch(url, {
            headers: { 'User-Agent': 'reform2026-geocode-script' }
        });
        const data = await res.json();
        if (data && data[0]) {
            return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
        }
    } catch(e) {
        console.warn(`  ⚠️  fetch 실패: ${query}`);
    }
    return null;
}

function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}

// ── 4. 후보자별 쿼리 생성 ──
function buildQuery(cand) {
    const cat = cand.category;

    if (cat === '광역단체장') {
        return OFFICE_MAP[cand.region] || cand.region + ' 시청';
    }

    if (cat === '기초단체장') {
        const parts = cand.region.split(' ');
        const loc = parts[parts.length - 1];
        const city = parts.slice(0, -1).join(' ');
        if (loc.endsWith('구')) return `${city} ${loc}청`;
        if (loc.endsWith('군')) return `${city} ${loc}청`;
        return `${loc}청`;
    }

    if ((cat === '광역의원' || cat === '기초의원') && cand.subRegion) {
        // 첫 번째 행정동만 사용
        const firstDong = cand.subRegion.split(/[,、]\s*/)[0].trim();
        const metro = cand.metropolitan || cand.region;
        return `${firstDong} ${metro}`;
    }

    return cand.region;
}

// ── 5. 메인 실행 ──
async function main() {
    console.log(`\n🗺️  후보자 좌표 자동 삽입 시작 (총 ${candidates.length}명)\n`);

    // 캐시 (같은 쿼리 중복 조회 방지)
    const cache = {};
    let successCount = 0;
    let skipCount = 0;
    let failCount = 0;

    for (let i = 0; i < candidates.length; i++) {
        const cand = candidates[i];

        // 이미 coords가 있으면 스킵
        if (cand.coords) {
            console.log(`  ⏭️  [${i+1}/${candidates.length}] ${cand.name} - 이미 좌표 있음`);
            skipCount++;
            continue;
        }

        const query = buildQuery(cand);
        process.stdout.write(`  🔍 [${i+1}/${candidates.length}] ${cand.name} (${query}) ... `);

        let coords;
        if (cache[query]) {
            coords = cache[query];
            process.stdout.write('캐시 ✓\n');
        } else {
            await sleep(1100); // Nominatim 1초 제한
            coords = await geocode(query);
            if (coords) {
                cache[query] = coords;
                process.stdout.write(`[${coords[0].toFixed(4)}, ${coords[1].toFixed(4)}] ✓\n`);
            } else {
                process.stdout.write('❌ 실패\n');
            }
        }

        if (coords) {
            cand.coords = coords;
            successCount++;
        } else {
            failCount++;
        }
    }

    console.log(`\n📊 결과: 성공 ${successCount}명, 스킵 ${skipCount}명, 실패 ${failCount}명\n`);

    // ── 6. can.js 다시 쓰기 ──
    // candidates 배열 직렬화
    const serialized = JSON.stringify(candidates, null, 4)
        // JSON → JS 객체 스타일로 변환 (키에 따옴표 제거)
        .replace(/"([a-zA-Z_][a-zA-Z0-9_]*)"\s*:/g, '$1:');

    // 원본 파일에서 배열 부분만 교체
    const prefix = canContent.slice(0, arrMatch.index + arrMatch[0].indexOf('['));
    const suffix = canContent.slice(arrMatch.index + arrMatch[0].length);
    const newContent = prefix + serialized + suffix;

    fs.writeFileSync('./can.js', newContent, 'utf-8');
    console.log('✅ can.js 업데이트 완료!\n');

    if (failCount > 0) {
        console.log('⚠️  좌표를 찾지 못한 후보자는 지도에 표시되지 않아요.');
        console.log('   can.js에서 해당 후보자에 coords를 수동으로 추가할 수 있어요:\n');
        console.log('   coords: [위도, 경도]\n');
    }
}

main().catch(console.error);
