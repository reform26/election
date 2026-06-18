/**
 * fw4comparison.js
 * 광역비례 · 기초비례 · 광역단체장 · 기초단체장 4방향 비교 아코디언
 *
 * 의존:
 *   window.REGIONAL  (results.js) — 광역비례 데이터
 *   window.BASIC     (results.js) — 기초비례 데이터
 *   window.RESULTS   (results.js) — 광역/기초 단체장 후보 데이터
 *
 * HTML에 아래 아코디언 마크업을 추가한 뒤 이 파일을 로드하세요.
 * results.js 이후, 아코디언 마크업 이후에 로드해야 합니다.
 *
 * ── 필요한 HTML 마크업 ──────────────────────────────────────────────
 *
 *  <div class="cmp-accordion" id="acc-4way">
 *    <button class="cmp-accordion-trigger" aria-expanded="false" aria-controls="acc-4way-body">
 *      <span class="cmp-accordion-icon orange">
 *        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
 *             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
 *          <rect x="3" y="3" width="7" height="7"/>
 *          <rect x="14" y="3" width="7" height="7"/>
 *          <rect x="3" y="14" width="7" height="7"/>
 *          <rect x="14" y="14" width="7" height="7"/>
 *        </svg>
 *      </span>
 *      <span class="cmp-accordion-label">
 *        <strong>광역비례 · 기초비례 · 광역단체장 · 기초단체장 4방향 비교</strong>
 *        <span>같은 읍면동 안에서 비례 2종 + 단체장 2종 득표율을 동시에 비교 · 읍면동 단위</span>
 *      </span>
 *      <svg class="cmp-accordion-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none"
 *           stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
 *           aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
 *    </button>
 *    <div class="cmp-accordion-body" id="acc-4way-body" style="padding-top:20px;">
 *
 *      <!-- 지역 탭 -->
 *      <div class="cross-region-tabs" role="tablist" aria-label="4방향 비교 지역 선택">
 *        <button class="fw-region-tab active" data-fwregion="서울-동작" role="tab">서울 × 동작구</button>
 *        <button class="fw-region-tab" data-fwregion="경기-수원" role="tab">경기 × 수원시</button>
 *        <button class="fw-region-tab" data-fwregion="경기-화성" role="tab">경기 × 화성시</button>
 *      </div>
 *
 *      <!-- 범례 -->
 *      <div style="display:flex;align-items:center;gap:14px;margin-bottom:12px;flex-wrap:wrap;">
 *        <span style="display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:700;color:var(--text2);">
 *          <svg width="9" height="9" viewBox="0 0 9 9"><circle cx="4.5" cy="4.5" r="4.5" fill="var(--blue)"/></svg>광역비례
 *        </span>
 *        <span style="display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:700;color:var(--text2);">
 *          <svg width="9" height="9" viewBox="0 0 9 9"><circle cx="4.5" cy="4.5" r="4.5" fill="var(--emerald)"/></svg>기초비례
 *        </span>
 *        <span style="display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:700;color:var(--text2);">
 *          <svg width="9" height="9" viewBox="0 0 9 9"><circle cx="4.5" cy="4.5" r="4.5" fill="var(--orange)"/></svg>광역단체장
 *        </span>
 *        <span style="display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:700;color:var(--text2);">
 *          <svg width="9" height="9" viewBox="0 0 9 9"><circle cx="4.5" cy="4.5" r="4.5" fill="#a855f7"/></svg>기초단체장
 *        </span>
 *      </div>
 *
 *      <!-- 통계 pills -->
 *      <div class="cross-stat-pills" id="fw-stat-pills"></div>
 *
 *      <!-- 차트 영역 -->
 *      <div id="fw-bar-wrap" class="cross-bar-wrap visible" style="display:block;"></div>
 *
 *    </div>
 *  </div>
 *
 * ────────────────────────────────────────────────────────────────────
 */

(function (global) {
  'use strict';

  // ── 지역 설정 ────────────────────────────────────────────────────
  //   regionalKey     : REGIONAL[].name  (type:'광역')
  //   basicKey        : BASIC[].name
  //   regionalCandId  : RESULTS id — 광역단체장
  //   basicCandId     : RESULTS id — 기초단체장
  //   basicDistrictKey: REGIONAL neighborhoods 에서 구 단위로 좁힐 때 사용 (null = 전체)
  //   suAreas         : REGIONAL/RESULTS 구 prefix 배열 (수원·화성 광역비례 필터용)
  var FW_REGIONS = [
    {
      key: '서울-동작',
      label: '서울 × 동작구',
      regionalKey: '서울',
      basicKey: '서울 동작구',
      regionalCandId: 1,    // 김정철 서울시장
      basicCandId: 141,     // 박일하 동작구청장
      basicDistrictKey: '동작구',  // 광역비례 서울에서 동작구 읍면동만 추출
      suAreas: null,
    },
    {
      key: '경기-수원',
      label: '경기 × 수원시',
      regionalKey: '경기',
      basicKey: '경기 수원시',
      regionalCandId: 7,    // 조응천 경기지사
      basicCandId: 9,       // 정희윤 수원시장
      basicDistrictKey: null,
      suAreas: ['수원시장안구', '수원시권선구', '수원시팔달구', '수원시영통구'],
    },
    {
      key: '경기-화성',
      label: '경기 × 화성시',
      regionalKey: '경기',
      basicKey: '경기 화성시',
      regionalCandId: 7,    // 조응천 경기지사
      basicCandId: 12,      // 전성균 화성시장
      basicDistrictKey: null,
      suAreas: ['화성시만세구', '화성시효행구', '화성시병점구', '화성시동탄구'],
    },
  ];

  var fwState = { activeRegion: '서울-동작' };
  var _fwBound = false;

  // ── 데이터 접근 헬퍼 ─────────────────────────────────────────────
  function getRegional(key) {
    return (global.REGIONAL || []).find(function (r) {
      return r.name === key && r.type === '광역';
    }) || null;
  }
  function getBasic(key) {
    return (global.BASIC || []).find(function (r) { return r.name === key; }) || null;
  }
  function getResult(id) {
    return (global.RESULTS || []).find(function (r) { return r.id === id; }) || null;
  }

  // ── 광역비례 동 맵 ───────────────────────────────────────────────
  // suAreas 있으면 해당 구 아래 동만, basicDistrictKey 있으면 해당 구 아래만, 둘 다 없으면 전체
  function extractRegionalDongsForArea(regionalNhs, suAreas, basicDistrictKey) {
    if (!regionalNhs || !regionalNhs.length) return {};
    var map = {};
    var inArea = false;

    if (suAreas && suAreas.length) {
      var areaSet = {};
      suAreas.forEach(function (a) {
        areaSet[a] = true;
        // REGIONAL neighborhoods 키는 '수원장안구', '화성만세구' 형태일 수 있음
        // '수원시장안구' → '수원장안구', '화성시만세구' → '화성만세구' 등으로도 등록
        var alt = a
          .replace(/^수원시/, '수원')
          .replace(/^화성시/, '화성')
          .replace(/^성남시/, '성남')
          .replace(/^안양시/, '안양')
          .replace(/^안산시/, '안산')
          .replace(/^고양시/, '고양')
          .replace(/^용인시/, '용인')
          .replace(/^부천시/, '부천');
        if (alt !== a) areaSet[alt] = true;
      });
      regionalNhs.forEach(function (nh) {
        if (nh.name.includes('_관외사전투표')) {
          var areaName = nh.name.replace(/_관외사전투표$/, '');
          inArea = !!areaSet[areaName];
        } else if (inArea && nh.rate != null) {
          map[nh.name] = nh.rate;
        }
      });
    } else if (basicDistrictKey) {
      var prefix = basicDistrictKey + '_관외사전투표';
      regionalNhs.forEach(function (nh) {
        if (nh.name === prefix) { inArea = true; }
        else if (nh.name.includes('_관외사전투표')) { inArea = false; }
        else if (inArea && nh.rate != null) { map[nh.name] = nh.rate; }
      });
    } else {
      regionalNhs.forEach(function (nh) {
        if (!nh.name.includes('_관외사전투표') && nh.rate != null) {
          map[nh.name] = nh.rate;
        }
      });
    }
    return map;
  }

  // ── 기초비례 동 맵 ───────────────────────────────────────────────
  function extractBasicDongs(basicNhs) {
    var map = {};
    (basicNhs || []).forEach(function (nh) {
      if (!nh.name.includes('_관외사전투표') && nh.name !== '관외사전투표' && nh.rate != null) {
        map[nh.name] = nh.rate;
      }
    });
    return map;
  }

  // ── 단체장 후보 동 맵 ────────────────────────────────────────────
  // noDistrictSplit=true: 동작구청장처럼 구 분리 없이 바로 동 목록
  // suAreas 있으면: RESULTS 구 prefix = 시 접두사 제거 후 매칭
  function extractCandDongsForArea(resultNhs, suAreas, noDistrictSplit) {
    var map = {};
    if (!resultNhs || !resultNhs.length) return map;

    if (noDistrictSplit) {
      resultNhs.forEach(function (nh) {
        if (nh.name !== '관외사전투표' && !nh.name.includes('_관외사전투표') && nh.rate != null) {
          map[nh.name] = nh.rate;
        }
      });
      return map;
    }

    var inArea = false;
    if (suAreas && suAreas.length) {
      // RESULTS 구 prefix는 시 이름 없이: '장안구_관외사전투표', '만세구_관외사전투표' 등
      // suAreas 값('수원시장안구') → '장안구_관외사전투표' 로 변환
      var areaSet = {};
      suAreas.forEach(function (a) {
        var stripped = a
          .replace(/^수원시/, '')
          .replace(/^화성시/, '')
          .replace(/^경기/, '');
        areaSet[stripped + '_관외사전투표'] = true;
        areaSet[a + '_관외사전투표'] = true; // 원본도 보험용
      });
      resultNhs.forEach(function (nh) {
        if (nh.name.includes('_관외사전투표')) {
          inArea = !!areaSet[nh.name];
        } else if (inArea && nh.rate != null) {
          map[nh.name] = nh.rate;
        }
      });
    } else {
      resultNhs.forEach(function (nh) {
        if (!nh.name.includes('_관외사전투표') && nh.name !== '관외사전투표' && nh.rate != null) {
          map[nh.name] = nh.rate;
        }
      });
    }
    return map;
  }

  // ── 행 데이터 빌드 ───────────────────────────────────────────────
  function buildFWRows(cfg) {
    var regional = getRegional(cfg.regionalKey);
    var basic    = getBasic(cfg.basicKey);
    var regCand  = getResult(cfg.regionalCandId);
    var basCand  = getResult(cfg.basicCandId);

    if (!regional || !basic || !regCand || !basCand) return [];

    var noSplit    = (cfg.key === '서울-동작'); // 동작구청장은 구 분리 없음
    var regDongMap = extractRegionalDongsForArea(
      regional.neighborhoods, cfg.suAreas || null, cfg.basicDistrictKey || null
    );
    var basDongMap  = extractBasicDongs(basic.neighborhoods);
    var regCandMap  = extractCandDongsForArea(regCand.neighborhoods, cfg.suAreas || null, noSplit);
    var basCandMap  = extractCandDongsForArea(basCand.neighborhoods, cfg.suAreas || null, noSplit);

    // 4개 맵 모두 존재하는 동만 교차
    var rows = [];
    Object.keys(basDongMap).forEach(function (name) {
      var reg = regDongMap[name];
      var bas = basDongMap[name];
      var rc  = regCandMap[name];
      var bc  = basCandMap[name];
      if (reg != null && bas != null && (rc != null || bc != null)) {
        rows.push({ name: name, regional: reg, basic: bas, regCand: rc, basCand: bc });
      }
    });

    rows.sort(function (a, b) { return b.basic - a.basic; });
    return rows;
  }

  // ── 유틸 ────────────────────────────────────────────────────────
  function escH(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ── 바 차트 렌더 ─────────────────────────────────────────────────
  function renderFWBar(container, rows) {
    if (!container) return;
    if (!rows || !rows.length) {
      container.innerHTML = '<div class="cross-empty">해당 지역 데이터가 없습니다.</div>';
      return;
    }

    var allVals = rows.reduce(function (arr, r) {
      if (r.regional != null) arr.push(r.regional);
      if (r.basic    != null) arr.push(r.basic);
      if (r.regCand  != null) arr.push(r.regCand);
      if (r.basCand  != null) arr.push(r.basCand);
      return arr;
    }, []);
    var maxRate = (Math.max.apply(null, allVals) * 1.1) || 10;

    var html = '<div class="cross-bar-list">';
    rows.forEach(function (row) {
      var r1 = row.regional != null ? Math.min((row.regional / maxRate) * 100, 100).toFixed(1) : 0;
      var r2 = row.basic    != null ? Math.min((row.basic    / maxRate) * 100, 100).toFixed(1) : 0;
      var r3 = row.regCand  != null ? Math.min((row.regCand  / maxRate) * 100, 100).toFixed(1) : 0;
      var r4 = row.basCand  != null ? Math.min((row.basCand  / maxRate) * 100, 100).toFixed(1) : 0;

      html += '<div class="cross-bar-row">';
      html +=   '<div class="cross-bar-label" title="' + escH(row.name) + '">' + escH(row.name) + '</div>';
      html +=   '<div class="cross-bar-pair">';

      // 광역비례 (파랑)
      html += '<div class="cross-bar-track">'
        + '<div class="cross-bar-fill-wrap"><div class="cross-bar-fill" style="width:' + r1 + '%;background:var(--blue)"></div></div>'
        + '<span class="cross-bar-rate" style="color:var(--blue)">'
        + (row.regional != null ? row.regional.toFixed(2) + '%' : '—') + '</span></div>';

      // 기초비례 (에메랄드)
      html += '<div class="cross-bar-track">'
        + '<div class="cross-bar-fill-wrap"><div class="cross-bar-fill" style="width:' + r2 + '%;background:var(--emerald)"></div></div>'
        + '<span class="cross-bar-rate" style="color:var(--emerald)">'
        + (row.basic != null ? row.basic.toFixed(2) + '%' : '—') + '</span></div>';

      // 광역단체장 (오렌지)
      html += '<div class="cross-bar-track">'
        + '<div class="cross-bar-fill-wrap"><div class="cross-bar-fill" style="width:' + r3 + '%;background:var(--orange)"></div></div>'
        + '<span class="cross-bar-rate" style="color:var(--orange)">'
        + (row.regCand != null ? row.regCand.toFixed(2) + '%' : '—') + '</span></div>';

      // 기초단체장 (퍼플)
      html += '<div class="cross-bar-track">'
        + '<div class="cross-bar-fill-wrap"><div class="cross-bar-fill" style="width:' + r4 + '%;background:#a855f7"></div></div>'
        + '<span class="cross-bar-rate" style="color:#a855f7">'
        + (row.basCand != null ? row.basCand.toFixed(2) + '%' : '—') + '</span></div>';

      html += '</div></div>';
    });
    html += '</div>';
    container.innerHTML = html;
  }

  // ── 통계 pills ──────────────────────────────────────────────────
  function updateFWStatPills(rows) {
    var el = document.getElementById('fw-stat-pills');
    if (!el) return;
    if (!rows.length) { el.innerHTML = ''; return; }

    function avg(key) {
      var vals = rows.filter(function (r) { return r[key] != null; });
      return vals.length ? vals.reduce(function (s, r) { return s + r[key]; }, 0) / vals.length : null;
    }
    var ra = avg('regional'), ba = avg('basic'), rc = avg('regCand'), bc = avg('basCand');
    var html = '';
    if (ra != null) html += '<span class="cross-stat-pill" style="background:rgba(37,99,235,.08);color:var(--blue);border-color:rgba(37,99,235,.15)">광역비례 평균 ' + ra.toFixed(2) + '%</span>';
    if (ba != null) html += '<span class="cross-stat-pill" style="background:#ecfdf5;color:#059669;border-color:rgba(5,150,105,.2)">기초비례 평균 ' + ba.toFixed(2) + '%</span>';
    if (rc != null) html += '<span class="cross-stat-pill" style="background:var(--orange-light);color:var(--orange);border-color:rgba(255,102,0,.2)">광역단체장 평균 ' + rc.toFixed(2) + '%</span>';
    if (bc != null) html += '<span class="cross-stat-pill" style="background:rgba(168,85,247,.08);color:#a855f7;border-color:rgba(168,85,247,.2)">기초단체장 평균 ' + bc.toFixed(2) + '%</span>';
    html += '<span class="cross-stat-pill">' + rows.length + '개 읍면동</span>';
    el.innerHTML = html;
  }

  // ── 렌더 진입점 ─────────────────────────────────────────────────
  function renderFW() {
    var cfg = FW_REGIONS.find(function (r) { return r.key === fwState.activeRegion; });
    if (!cfg) return;
    var rows = buildFWRows(cfg);
    updateFWStatPills(rows);
    renderFWBar(document.getElementById('fw-bar-wrap'), rows);
  }

  function initFW() {
    if (_fwBound) { renderFW(); return; }
    _fwBound = true;

    document.querySelectorAll('.fw-region-tab').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.fw-region-tab').forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        fwState.activeRegion = btn.dataset.fwregion;
        renderFW();
      });
    });

    renderFW();
  }

  // 외부 노출 — initCompareAccordions()에서 acc-4way 오픈 시 호출
  global.FW4Comparison = { init: initFW };

})(window);
