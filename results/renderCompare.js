// ══════════════════════════════════════════════════════════════════════
// renderCompare.js
// 주요 후보 비교 탭 — 상단 비교 뷰 렌더링 + 이벤트 바인딩
//
// 의존:
//   - window.RESULTS  (results.js)  : 광역단체장 후보 득표율·neighborhoods
//   - window.REGIONAL (results.js)  : 광역비례 districts·rate
//   - cross-comparison.js의 CROSS_CANDIDATES 상수와 동일한 후보 목록 사용
//
// 진입점:
//   renderCompare()          — switchTab('compare') 에서 호출
//   initCompareEvents()      — DOMContentLoaded 또는 initEvents() 에서 1회 호출
// ══════════════════════════════════════════════════════════════════════

;(function (global) {
  'use strict';

  // ── 1. 후보 메타 ──────────────────────────────────────────────────
  // cross-comparison.js 의 CROSS_CANDIDATES 와 동일한 구성
  var CMP_CANDIDATES = [
    { resultsId: 1, regionKey: '서울', label: '서울특별시장', candName: '김정철' },
    { resultsId: 2, regionKey: '부산', label: '부산광역시장', candName: '정이한'  },
    { resultsId: 3, regionKey: '대구', label: '대구광역시장', candName: '이수찬'  },
    { resultsId: 7, regionKey: '경기', label: '경기도지사',   candName: '조응천'  },
  ];

  // 시군구 정렬 상태 (광역별 독립)
  var sortState = { 서울: 'desc', 부산: 'desc', 대구: 'desc', 경기: 'desc' };
  // 읍면동 선택 구 상태
  var dongSel   = { 서울: null, 부산: null, 대구: null, 경기: null };
  // 읍면동 페이지 상태 (더보기)
  var dongPage  = { 서울: 1, 부산: 1, 대구: 1, 경기: 1 };
  var DONG_PAGE_SIZE = 100;
  // 현재 활성 서브탭
  var activeLevel = 'overview'; // 'overview' | 'district' | 'dong'

  // ── 2. 데이터 접근 헬퍼 ───────────────────────────────────────────
  function getResult(id) {
    var RS = global.RESULTS || [];
    return RS.find(function (r) { return r.id === id; }) || null;
  }

  function getRegional(regionKey) {
    var R = global.REGIONAL || [];
    return R.find(function (r) { return r.name === regionKey && r.type === '광역'; }) || null;
  }

  // 관외사전투표 마커에서 구 이름 추출
  // '종로구_관외사전투표' → '종로구'
  // 경기: '수원장안구_관외사전투표' → '수원장안구'  (REGIONAL district 이름에 맞춤)
  function districtNameFromAbsenteeMarker(nhName) {
    return nhName.replace(/_관외사전투표$/, '');
  }

  // RESULTS neighborhoods 에서 구별 후보 득표율 계산
  // — 관외사전투표 항목 기준으로 구 경계를 나누고 각 구 동들의 단순 평균
  // 단체장 neighborhoods → { distKey: { dongName: rate } }
  function buildCandDongRateMap(neighborhoods, regionKey) {
    var map = {};
    var currentDist = null;
    (neighborhoods || []).forEach(function (nh) {
      if (nh.name.includes('_관외사전투표')) {
        var raw = districtNameFromAbsenteeMarker(nh.name);
        currentDist = normalizeCandDistKey(raw, regionKey);
        if (!map[currentDist]) map[currentDist] = {};
      } else if (currentDist) {
        if (nh.rate != null) map[currentDist][nh.name] = nh.rate;
      }
    });
    return map;
  }

  // 구별 단체장 득표율 계산 (읍면동 단순 평균)
  // ⚠️ 주의: 읍면동별 투표수 차이를 반영하지 않는 단순 평균이므로
  //          실제 구 집계 득표율과 다소 차이가 있을 수 있습니다.
  function buildCandDistrictRateMap(neighborhoods, regionKey) {
    var groups = {};
    var currentDist = null;
    (neighborhoods || []).forEach(function (nh) {
      if (nh.name.includes('_관외사전투표')) {
        var raw = districtNameFromAbsenteeMarker(nh.name);
        // 부산·대구: '영도구' 그대로, 경기: '수원장안구' → REGIONAL 이름 매칭 위해 정규화
        currentDist = normalizeCandDistKey(raw, regionKey);
        if (!groups[currentDist]) groups[currentDist] = [];
        // 관외사전투표는 동 단위 투표가 아니므로 구 평균 계산에서 제외
      } else if (currentDist) {
        if (nh.rate != null) groups[currentDist].push(nh.rate);
      }
    });
    var rateMap = {};
    Object.keys(groups).forEach(function (k) {
      var arr = groups[k].filter(function (v) { return v != null; });
      rateMap[k] = arr.length ? +(arr.reduce(function (a, b) { return a + b; }, 0) / arr.length).toFixed(2) : null;
    });
    return rateMap;
  }


  // 관외사전투표 rate 맵 반환 { distKey: absenteeRate }
  function buildAbsenteeRateMap(neighborhoods, regionKey) {
    var map = {};
    (neighborhoods || []).forEach(function(nh) {
      if (nh.name.includes('_관외사전투표') && nh.rate != null) {
        var raw = districtNameFromAbsenteeMarker(nh.name);
        var key = normalizeCandDistKey(raw, regionKey);
        map[key] = nh.rate;
      }
    });
    return map;
  }


  // 동별 사전투표·당일투표 rate 맵 반환
  // { distKey: { dongName: { early: rate, polling: rate } } }
  function buildCandDongVoteTypeMap(neighborhoods, regionKey) {
    var map = {};
    var currentDist = null;
    (neighborhoods || []).forEach(function(nh) {
      if (nh.name.includes('_관외사전투표')) {
        var raw = districtNameFromAbsenteeMarker(nh.name);
        currentDist = normalizeCandDistKey(raw, regionKey);
        if (!map[currentDist]) map[currentDist] = {};
      } else if (currentDist && nh.votes) {
        map[currentDist][nh.name] = {
          early:   nh.votes.early   ? nh.votes.early.rate   : null,
          polling: nh.votes.polling ? nh.votes.polling.rate : null,
        };
      }
    });
    return map;
  }

  // REGIONAL neighborhoods에서도 동일하게 추출 (비례 사전/당일)
  function buildRegionalDongVoteTypeMap(neighborhoods) {
    var map = {};
    var currentDist = null;
    (neighborhoods || []).forEach(function(nh) {
      if (nh.name.includes('_관외사전투표')) {
        currentDist = districtNameFromAbsenteeMarker(nh.name);
        if (!map[currentDist]) map[currentDist] = {};
      } else if (currentDist && nh.votes) {
        map[currentDist][nh.name] = {
          early:   nh.votes.early   ? nh.votes.early.rate   : null,
          polling: nh.votes.polling ? nh.votes.polling.rate : null,
        };
      }
    });
    return map;
  }

  // 후보 neighborhood 관외사전투표 prefix → REGIONAL districts.name 에 맞는 키로 정규화
  function normalizeCandDistKey(raw, regionKey) {
    if (regionKey === '부산') {
      // '영도구' → 그대로 (부산 districts 이름은 '영도구')
      return raw;
    }
    if (regionKey === '대구') {
      // '달서구' → 그대로
      return raw;
    }
    if (regionKey === '경기') {
      // RESULTS: '수원장안구' → REGIONAL: '수원시장안구'  ('시' 삽입)
      // RESULTS: '의정부' → REGIONAL: '의정부시'
      // 특수 예외 맵
      var GYEONGGI_DIST_FIX = {
        '수원장안구':  '수원시장안구',
        '수원권선구':  '수원시권선구',
        '수원팔달구':  '수원시팔달구',
        '수원영통구':  '수원시영통구',
        '성남수정구':  '성남시수정구',
        '성남중원구':  '성남시중원구',
        '분당구':      '성남시분당구',
        '안양만안구':  '안양시만안구',
        '안양동안구':  '안양시동안구',
        '부천원미구':  '부천시원미구',
        '부천소사구':  '부천시소사구',
        '부천오정구':  '부천시오정구',
        '안산상록구':  '안산시상록구',
        '안산단원구':  '안산시단원구',
        '고양덕양구':  '고양시덕양구',
        '고양일산동구':'고양시일산동구',
        '고양일산서구':'고양시일산서구',
        '화성만세구':  '화성시만세구',
        '화성효행구':  '화성시효행구',
        '화성병점구':  '화성시병점구',
        '화성동탄구':  '화성시동탄구',
        '용인처인구':  '용인시처인구',
        '용인수지구':  '용인시수지구',
        '용인기흥구':  '용인시기흥구',
      };
      if (GYEONGGI_DIST_FIX[raw]) return GYEONGGI_DIST_FIX[raw];
      // 단독 시 이름: '의정부' → '의정부시' 등
      if (!/[시군구]$/.test(raw)) return raw + '시';
      return raw;
    }
    // 서울: 그대로
    return raw;
  }

  // ── 3. 광역 뷰 렌더 ──────────────────────────────────────────────
  function renderOverview() {
    var heroGrid = document.getElementById('cmp-hero-grid');
    var barChart = document.getElementById('cmp-bar-chart');
    if (!heroGrid || !barChart) return;

    // 후보별 득표율 수집
    var items = CMP_CANDIDATES.map(function (meta) {
      var res = getResult(meta.resultsId);
      var reg = getRegional(meta.regionKey);
      return {
        meta:     meta,
        candRate: res  ? (res.voteRate  != null ? res.voteRate  : null) : null,
        propRate: reg  ? (reg.rate      != null ? reg.rate      : null) : null,
        candVotes: res ? (res.totalVotes|| 0) : 0,
      };
    });

    var maxRate = 0;
    items.forEach(function (it) {
      if (it.candRate != null && it.candRate > maxRate) maxRate = it.candRate;
    });
    if (maxRate === 0) maxRate = 10;

    // 히어로 카드
    heroGrid.innerHTML = items.map(function (it) {
      if (it.candRate == null) return '';
      var barW = Math.min((it.candRate / maxRate) * 100, 100).toFixed(1);
      var votesStr = it.candVotes ? it.candVotes.toLocaleString() + '표' : '—';

      // 비례 득표율 + 갭 배지
      var propHtml = '';
      if (it.propRate != null) {
        var gap = +(it.propRate - it.candRate).toFixed(2);
        var isPos = gap >= 0;
        var gapColor = isPos ? 'var(--blue)' : 'var(--orange)';
        var gapBg    = isPos ? 'rgba(37,99,235,0.08)' : 'rgba(255,102,0,0.08)';
        var gapArrow = isPos ? '▲' : '▼';
        propHtml = [
          '<div>',
            '<div style="font-size:11px;font-weight:700;color:var(--blue);letter-spacing:.04em;margin-bottom:2px;">비례</div>',
            '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">',
              '<div style="font-size:22px;font-weight:900;letter-spacing:-0.04em;color:var(--blue);line-height:1;">',
                it.propRate.toFixed(2),
                '<span style="font-size:13px;font-weight:700;color:var(--text3);margin-left:1px;">%</span>',
              '</div>',
            '<span style="display:inline-flex;align-items:center;gap:3px;padding:3px 9px;border-radius:20px;' +
              'background:' + gapBg + ';font-size:12px;font-weight:800;color:' + gapColor + ';" ' +
              'title="비례−단체장 갭">',
              gapArrow + ' ' + (isPos ? '+' : '') + gap.toFixed(2) + '%p',
            '</span>',
            '</div>',
          '</div>',
        ].join('');
      }

      return [
        '<div class="cmp-hero-card">',
          '<div>',
            '<div class="cmp-hero-name">' + escH(it.meta.candName) + '</div>',
            '<div class="cmp-hero-region">' + escH(it.meta.label) + '</div>',
          '</div>',
          '<div style="margin-top:8px;">',
            '<div style="font-size:11px;font-weight:700;color:var(--orange);letter-spacing:.04em;margin-bottom:2px;">단체장</div>',
            '<div class="cmp-hero-rate">' + it.candRate.toFixed(2) + '<span>%</span></div>',
          '</div>',
          propHtml,
          '<div class="cmp-hero-bar-wrap" style="margin-top:8px;">',
            '<div class="cmp-hero-bar" style="width:' + barW + '%"></div>',
          '</div>',
          '<div class="cmp-hero-votes">득표수 <strong>' + escH(votesStr) + '</strong></div>',
        '</div>',
      ].join('');
    }).join('');

    // 바 차트 (후보 득표율 + 비례 득표율 나란히)
    var allRates = [];
    items.forEach(function (it) {
      if (it.candRate != null) allRates.push(it.candRate);
      if (it.propRate != null) allRates.push(it.propRate);
    });
    var chartMax = allRates.length ? Math.max.apply(null, allRates) * 1.15 : 10;

    // 바 차트 — grouped bar: 하나의 트랙 안에 단체장(오렌지)·비례(블루) 겹쳐서 표시
    barChart.innerHTML = items.map(function (it) {
      if (it.candRate == null) return '';
      var candPct = ((it.candRate / chartMax) * 100).toFixed(1);
      var propPct = it.propRate != null ? ((it.propRate / chartMax) * 100).toFixed(1) : '0';
      // 두 바 중 더 긴 쪽을 먼저(뒤에), 짧은 쪽을 앞에 overlay — z-index로 처리
      var candIsLonger = it.propRate == null || it.candRate >= it.propRate;
      var gap = it.propRate != null ? +(it.propRate - it.candRate).toFixed(2) : null;
      var gapStr = gap !== null
        ? (gap >= 0
            ? '<span style="color:var(--blue);font-size:11px;font-weight:700;flex-shrink:0;">▲+' + gap.toFixed(2) + '%p</span>'
            : '<span style="color:var(--orange);font-size:11px;font-weight:700;flex-shrink:0;">▼' + gap.toFixed(2) + '%p</span>')
        : '';

      // 바 차트: 두 바를 겹치되 각 바의 텍스트를 바 끝 오른쪽에 표시
      var candLabel = it.candRate.toFixed(2) + '%';
      var propLabel = it.propRate != null ? it.propRate.toFixed(2) + '%' : '';

      return [
        '<div class="cmp-bar-row" style="align-items:center;margin-bottom:8px;">',
          '<div class="cmp-bar-label">' + escH(it.meta.candName) + '</div>',
          '<div style="flex:1;position:relative;display:flex;flex-direction:column;gap:3px;">',
            // 단체장 바 (오렌지)
            '<div style="position:relative;height:14px;background:var(--surface2);border-radius:4px;overflow:visible;">',
              '<div style="position:absolute;left:0;top:0;bottom:0;width:' + candPct + '%;background:var(--orange);border-radius:4px;" title="단체장 ' + it.candRate.toFixed(2) + '%"></div>',
              '<span style="position:absolute;left:calc(' + candPct + '% + 4px);top:50%;transform:translateY(-50%);font-size:10px;font-weight:700;color:var(--orange);white-space:nowrap;">' + candLabel + '</span>',
            '</div>',
            // 비례 바 (블루)
            (it.propRate != null
              ? '<div style="position:relative;height:14px;background:var(--surface2);border-radius:4px;overflow:visible;">' +
                  '<div style="position:absolute;left:0;top:0;bottom:0;width:' + propPct + '%;background:var(--blue);border-radius:4px;" title="비례 ' + it.propRate.toFixed(2) + '%"></div>' +
                  '<span style="position:absolute;left:calc(' + propPct + '% + 4px);top:50%;transform:translateY(-50%);font-size:10px;font-weight:700;color:var(--blue);white-space:nowrap;">' + propLabel + '</span>' +
                '</div>'
              : ''),
          '</div>',
          // 갭 배지
          '<div style="min-width:70px;text-align:right;flex-shrink:0;padding-left:8px;">' + gapStr + '</div>',
        '</div>',
      ].join('');
    }).join('');

    // 범례 삽입 (최초 1회)
    if (!document.getElementById('cmp-overview-legend')) {
      var legendEl = document.createElement('div');
      legendEl.id = 'cmp-overview-legend';
      legendEl.style.cssText = 'display:flex;align-items:center;gap:16px;margin-bottom:14px;font-size:12px;font-weight:700;color:var(--text2);flex-wrap:wrap;';
      legendEl.innerHTML = [
        '<span style="display:flex;align-items:center;gap:5px;"><span style="width:12px;height:12px;border-radius:3px;background:var(--orange);display:inline-block;"></span>단체장 득표율 (위 바)</span>',
        '<span style="display:flex;align-items:center;gap:5px;"><span style="width:12px;height:12px;border-radius:3px;background:var(--blue);display:inline-block;"></span>광역비례 득표율 (아래 바)</span>',
        '<span style="font-size:11px;color:var(--text3);font-weight:500;">오른쪽 수치는 비례−단체장 갭</span>',
      ].join('');
      barChart.parentNode.insertBefore(legendEl, barChart);
    }

    // ── 연관성 인사이트 카드 ──
    var insightWrap = document.getElementById('cmp-overview-insight');
    if (!insightWrap) {
      insightWrap = document.createElement('div');
      insightWrap.id = 'cmp-overview-insight';
      barChart.parentNode.appendChild(insightWrap);
    }

    // 갭 분석 + 전국 요약
    var validItems = items.filter(function(it){ return it.candRate != null && it.propRate != null; });
    var gaps = validItems.map(function(it){
      return { meta: it.meta, gap: +(it.propRate - it.candRate).toFixed(2), candRate: it.candRate, propRate: it.propRate };
    });

    // 비례가 단체장보다 높은 곳 / 낮은 곳
    var propHigher = gaps.filter(function(g){ return g.gap > 0; });
    var candHigher = gaps.filter(function(g){ return g.gap <= 0; });
    var maxGapPos  = gaps.slice().sort(function(a,b){ return b.gap - a.gap; })[0];
    var maxGapNeg  = gaps.slice().sort(function(a,b){ return a.gap - b.gap; })[0];

    // 전국 평균 단체장 vs 비례
    var avgCand = validItems.length ? +(validItems.reduce(function(s,it){ return s + it.candRate; }, 0) / validItems.length).toFixed(2) : null;
    var avgProp = validItems.length ? +(validItems.reduce(function(s,it){ return s + it.propRate; }, 0) / validItems.length).toFixed(2) : null;

    function insightSentence() {
      if (!validItems.length) return '데이터를 불러오는 중입니다.';
      var lines = [];
      if (propHigher.length === gaps.length) {
        lines.push('4개 지역 모두 <strong>광역비례 득표율이 단체장 득표율보다 높습니다.</strong> 후보 개인 경쟁력보다 정당 지지가 더 넓게 퍼진 구도입니다.');
      } else if (candHigher.length === gaps.length) {
        lines.push('4개 지역 모두 <strong>단체장 득표율이 광역비례를 앞섰습니다.</strong> 후보의 개인 경쟁력이 정당 지지를 견인하는 구도입니다.');
      } else {
        lines.push(
          '<strong>' + propHigher.map(function(g){ return g.meta.regionKey; }).join('·') + '</strong>은 비례 득표율이 단체장을 앞섰고, ' +
          '<strong>' + candHigher.map(function(g){ return g.meta.regionKey; }).join('·') + '</strong>은 단체장이 비례를 앞섰습니다.'
        );
      }
      if (maxGapPos && maxGapPos.gap > 0) {
        lines.push(
          '비례-단체장 격차가 가장 큰 지역은 <strong>' + escH(maxGapPos.meta.regionKey) + '</strong>으로, 비례가 단체장보다 <strong>+' + maxGapPos.gap.toFixed(2) + '%p</strong> 높습니다. ' +
          '정당 지지가 후보 개인 지지를 눈에 띄게 웃도는 지역입니다.'
        );
      }
      if (maxGapNeg && maxGapNeg.gap < 0) {
        lines.push(
          '반대로 <strong>' + escH(maxGapNeg.meta.regionKey) + '</strong>은 단체장이 비례보다 <strong>' + Math.abs(maxGapNeg.gap).toFixed(2) + '%p</strong> 높아, ' +
          '후보 개인 경쟁력이 정당 지지를 뛰어넘고 있습니다.'
        );
      }
      if (avgCand !== null && avgProp !== null) {
        var netGap = +(avgProp - avgCand).toFixed(2);
        lines.push(
          '4개 지역 평균은 단체장 <strong>' + avgCand + '%</strong> · 비례 <strong>' + avgProp + '%</strong>으로, ' +
          (netGap >= 0
            ? '비례가 평균 <strong>+' + netGap + '%p</strong> 앞서는 흐름입니다.'
            : '단체장이 평균 <strong>+' + Math.abs(netGap) + '%p</strong> 앞서는 흐름입니다.')
        );
      }
      return lines.join(' ');
    }

    insightWrap.innerHTML = [
      '<div style="margin-top:20px;padding:20px;background:var(--orange-light);border-radius:14px;border:1px solid rgba(255,102,0,0.15);">',
        // 헤더
        '<div style="font-size:11px;font-weight:700;color:var(--orange);letter-spacing:.06em;margin-bottom:14px;">📊 연관성 분석</div>',
        // 갭 배지 그리드 — 먼저, 크게
        '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px;margin-bottom:16px;">',
          gaps.map(function(g){
            var isPos = g.gap >= 0;
            var color  = isPos ? 'var(--blue)' : 'var(--orange)';
            var bg     = isPos ? 'rgba(37,99,235,0.10)' : 'rgba(255,102,0,0.10)';
            var border = isPos ? 'rgba(37,99,235,0.20)' : 'rgba(255,102,0,0.20)';
            var arrow  = isPos ? '▲' : '▼';
            var sign   = isPos ? '+' : '';
            return [
              '<div style="background:' + bg + ';border:1px solid ' + border + ';border-radius:12px;padding:12px 14px;display:flex;flex-direction:column;gap:4px;">',
                '<div style="font-size:12px;font-weight:700;color:var(--text2);">' + escH(g.meta.regionKey) + '</div>',
                '<div style="font-size:22px;font-weight:900;letter-spacing:-0.04em;color:' + color + ';line-height:1;">' + arrow + ' ' + sign + g.gap.toFixed(2) + '<span style="font-size:13px;font-weight:700;">%p</span></div>',
                '<div style="font-size:10px;color:' + color + ';opacity:.75;font-weight:600;">비례' + (isPos ? '↑ 우세' : '↓ 단체장 우세') + '</div>',
              '</div>',
            ].join('');
          }).join(''),
        '</div>',
        // 보조 텍스트
        '<div style="font-size:12px;line-height:1.8;color:var(--text2);border-top:1px solid rgba(255,102,0,0.12);padding-top:12px;">' + insightSentence() + '</div>',
      '</div>',
    ].join('');
  }

  // ── 이상치 TOP3 섹션 공통 렌더러 ────────────────────────────────
  // gapItems: [{regionKey, name, gap}, ...]  gap = 비례 - 단체장
  function renderOutlierTop3(containerEl, gapItems, level) {
    if (!containerEl) return;
    if (!gapItems || !gapItems.length) { containerEl.style.display = 'none'; return; }

    // 비례 우세 TOP3 / 단체장 우세 TOP3
    var propTop3 = gapItems.slice().sort(function(a,b){ return b.gap - a.gap; }).slice(0, 3);
    var candTop3 = gapItems.slice().sort(function(a,b){ return a.gap - b.gap; }).slice(0, 3).filter(function(d){ return d.gap < 0; });

    function rankRow(item, i, type) {
      var isBlue = type === 'prop';
      var color  = isBlue ? 'var(--blue)' : 'var(--orange)';
      var gapStr = isBlue ? ('+' + item.gap.toFixed(2) + '%p') : ('+' + Math.abs(item.gap).toFixed(2) + '%p');
      var medals = ['🥇','🥈','🥉'];
      return [
        '<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border);">',
          '<span style="font-size:14px;width:20px;text-align:center;flex-shrink:0;">' + (medals[i] || (i+1)+'.') + '</span>',
          '<span style="flex:1;font-size:12px;font-weight:600;color:var(--text);min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="' + escH(item.name) + '">',
            (item.regionKey ? '<span style="font-size:10px;color:var(--text3);margin-right:3px;">[' + escH(item.regionKey) + ']</span>' : '') + escH(item.name),
          '</span>',
          '<span style="font-size:12px;font-weight:700;color:' + color + ';flex-shrink:0;">' + gapStr + '</span>',
        '</div>',
      ].join('');
    }

    containerEl.style.display = '';
    containerEl.innerHTML = [
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px;">',

        // 비례 우세 TOP3
        '<div style="padding:14px 16px;background:rgba(37,99,235,0.05);border:1px solid rgba(37,99,235,0.15);border-radius:14px;">',
          '<div style="font-size:11px;font-weight:700;color:var(--blue);letter-spacing:.05em;margin-bottom:10px;">🔵 비례가 단체장을 크게 앞선 TOP 3</div>',
          '<div style="font-size:11px;color:var(--text3);margin-bottom:8px;">정당 지지가 후보 개인 지지보다 눈에 띄게 높은 곳</div>',
          propTop3.map(function(item, i){ return rankRow(item, i, 'prop'); }).join(''),
        '</div>',

        // 단체장 우세 TOP3
        '<div style="padding:14px 16px;background:rgba(255,102,0,0.05);border:1px solid rgba(255,102,0,0.15);border-radius:14px;">',
          '<div style="font-size:11px;font-weight:700;color:var(--orange);letter-spacing:.05em;margin-bottom:10px;">🟠 단체장이 비례를 크게 앞선 TOP 3</div>',
          '<div style="font-size:11px;color:var(--text3);margin-bottom:8px;">후보 개인 경쟁력이 정당 지지를 뛰어넘은 곳</div>',
          (candTop3.length
            ? candTop3.map(function(item, i){ return rankRow(item, i, 'cand'); }).join('')
            : '<div style="font-size:12px;color:var(--text3);padding:8px 0;">해당 없음 (단체장이 비례를 앞선 ' + level + ' 없음)</div>'),
        '</div>',

      '</div>',
    ].join('');
  }

  // ── 4. 시군구 뷰 렌더 ────────────────────────────────────────────
  function renderDistrict() {
    var grid = document.getElementById('cmp-district-grid');
    if (!grid) return;

    // 전 지역 통합 gap 목록 (이상치 TOP3용)
    var allDistGaps = [];

    grid.innerHTML = CMP_CANDIDATES.map(function (meta) {
      var reg = getRegional(meta.regionKey);
      var res = getResult(meta.resultsId);
      if (!reg) return '';

      var candRateMap    = res ? buildCandDistrictRateMap(res.neighborhoods, meta.regionKey) : {};
      var absenteeMap = res ? buildAbsenteeRateMap(res.neighborhoods, meta.regionKey) : {};

      var districts = (reg.districts || []).map(function (d) {
        return {
          name:         d.name,
          propRate:     d.rate,
          candRate:     candRateMap[d.name] != null ? candRateMap[d.name] : null,
          absenteeRate: absenteeMap[d.name] != null ? absenteeMap[d.name] : null,
        };
      });

      var sort = sortState[meta.regionKey] || 'desc';
      var sorted = districts.slice().sort(function (a, b) {
        if (sort === 'gap-desc' || sort === 'gap-asc') {
          var ga = (a.propRate != null && a.candRate != null) ? a.propRate - a.candRate : -Infinity;
          var gb = (b.propRate != null && b.candRate != null) ? b.propRate - b.candRate : -Infinity;
          return sort === 'gap-desc' ? gb - ga : ga - gb;
        }
        if (sort === 'cand-desc') {
          var ca = a.candRate != null ? a.candRate : -Infinity;
          var cb = b.candRate != null ? b.candRate : -Infinity;
          return cb - ca;
        }
        var ra = a.propRate != null ? a.propRate : -Infinity;
        var rb = b.propRate != null ? b.propRate : -Infinity;
        return sort === 'desc' ? rb - ra : ra - rb;
      });

      var avg = reg.rate || 0;
      var maxRate = sorted.reduce(function (mx, d) { return Math.max(mx, d.propRate || 0); }, 0) || 10;

      // 피어슨 상관계수
      var paired = sorted.filter(function(d){ return d.candRate != null && d.propRate != null; });
      var corrText = '';
      if (paired.length >= 3) {
        var n = paired.length;
        var sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;
        paired.forEach(function(d){ sumX += d.candRate; sumY += d.propRate; sumXY += d.candRate * d.propRate; sumX2 += d.candRate * d.candRate; sumY2 += d.propRate * d.propRate; });
        var denom = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
        var r = denom > 0 ? +((n * sumXY - sumX * sumY) / denom).toFixed(2) : null;
        var rLabel = r === null ? '' : Math.abs(r) >= 0.7 ? '강한 연관' : Math.abs(r) >= 0.4 ? '중간 연관' : '약한 연관';
        var rColor = r === null ? '' : Math.abs(r) >= 0.7 ? '#16a34a' : Math.abs(r) >= 0.4 ? '#d97706' : '#6b7280';
        corrText = r !== null
          ? '<span style="display:inline-flex;align-items:center;gap:5px;padding:3px 9px;border-radius:20px;font-size:11px;font-weight:700;background:' + rColor + '22;color:' + rColor + ';">r = ' + r + ' · ' + rLabel + '</span>'
          : '';

      }

      // 전체 gap 목록에 추가 (paired 조건 밖 — 구 수 무관하게 항상 수집)
      paired.forEach(function(d){
        allDistGaps.push({ regionKey: meta.regionKey, name: d.name, gap: +(d.propRate - d.candRate).toFixed(2) });
      });

      // 구별 갭 배지 — CSS 클래스 기반 (다크모드 대응)
      function gapBadge(d) {
        if (d.candRate == null || d.propRate == null) return '';
        var gap = +(d.propRate - d.candRate).toFixed(2);
        if (Math.abs(gap) < 0.5) {
          return '<span class="gap-badge gap-badge-eq" title="단체장·비례 동반">≈</span>';
        }
        if (gap > 0) {
          return '<span class="gap-badge gap-badge-up" title="비례가 단체장보다 +' + gap + '%p">▲' + gap.toFixed(1) + '</span>';
        }
        return '<span class="gap-badge gap-badge-down" title="단체장이 비례보다 +' + Math.abs(gap) + '%p">▼' + Math.abs(gap).toFixed(1) + '</span>';
      }

      // 단체장 평균 계산 (헤더 표시용)
      var candAvg = (function() {
        var vals = sorted.filter(function(d){ return d.candRate != null; }).map(function(d){ return d.candRate; });
        return vals.length ? +(vals.reduce(function(a,b){ return a+b; }, 0) / vals.length).toFixed(2) : null;
      })();

      // 헤더 평균 섹션
      var headerAvgHtml = [
        '<div style="display:flex;gap:14px;margin-top:10px;flex-wrap:wrap;">',
          '<div>',
            '<div class="cmp-district-col-avg-label">비례 평균</div>',
            '<div class="cmp-district-col-avg-value">' + avg.toFixed(2) + '<span style="font-size:11px;font-weight:700;color:var(--text3);margin-left:1px;">%</span></div>',
          '</div>',
          (candAvg !== null ? [
            '<div style="width:1px;background:var(--border);flex-shrink:0;margin:2px 0;"></div>',
            '<div>',
              '<div class="cmp-district-col-avg-label">단체장 평균*</div>',
              '<div style="font-size:18px;font-weight:900;letter-spacing:-0.04em;color:var(--text2);line-height:1;">' + candAvg.toFixed(2) + '<span style="font-size:11px;font-weight:700;color:var(--text3);margin-left:1px;">%</span></div>',
            '</div>',
            (function(){
              var hGap = +(avg - candAvg).toFixed(2);
              var cls = hGap > 0 ? 'gap-badge-up' : hGap < 0 ? 'gap-badge-down' : 'gap-badge-eq';
              var sign = hGap > 0 ? '+' : '';
              var arrow = hGap > 0 ? '▲' : hGap < 0 ? '▼' : '≈';
              return '<span class="gap-badge ' + cls + '" style="align-self:center;" title="비례 평균 − 단체장 평균 (단체장은 읍면동 단순 평균)">' + arrow + sign + hGap.toFixed(2) + '%p</span>';
            })(),
          ].join('') : ''),
        '</div>',
        (corrText ? '<div style="margin-top:6px;">' + corrText + '</div>' : ''),
        (candAvg !== null ? '<div style="margin-top:5px;font-size:10px;color:var(--text3);">* 단체장 수치는 읍면동 단순 평균 (투표수 미가중)</div>' : ''),
      ].join('');

      return [
        '<div class="cmp-district-col">',
          '<div class="cmp-district-col-header">',
            '<div class="cmp-district-col-name">' + escH(meta.candName) + '</div>',
            '<div class="cmp-district-col-region">' + escH(meta.label) + '</div>',
            headerAvgHtml,
          '</div>',
          '<div class="cmp-district-list">',
            sorted.map(function (d, i) {
              var rank = i + 1;
              var barW = ((d.propRate || 0) / maxRate * 100).toFixed(1);
              var rankCls = rank === 1 ? 'top1' : rank <= 3 ? 'top3' : '';
              // 서브라인: 갭 배지 + 관외사전투표율
              var gapBadgeHtml = gapBadge(d);
              var absText = d.absenteeRate != null ? '사전 ' + d.absenteeRate.toFixed(1) + '%' : '';

              // 툴팁용 데이터 속성
              var tipLines = [escH(d.name)];
              tipLines.push('비례 ' + (d.propRate != null ? d.propRate.toFixed(2) : '—') + '%');
              if (d.candRate != null) tipLines.push('단체장 ' + d.candRate.toFixed(2) + '%');
              if (d.propRate != null && d.candRate != null) {
                var gv = +(d.propRate - d.candRate).toFixed(2);
                tipLines.push('갭 ' + (gv >= 0 ? '+' : '') + gv + '%p (비례' + (gv >= 0 ? '↑' : '↓') + ')');
              }
              if (d.absenteeRate != null) tipLines.push('관외사전 ' + d.absenteeRate.toFixed(2) + '%');

              return [
                '<div class="cmp-district-item ' + rankCls + '" data-tip="' + tipLines.join('&#10;') + '">',
                  '<div class="cmp-district-item-rank">' + rank + '</div>',
                  '<div class="cmp-district-item-body">',
                    '<div class="cmp-district-item-name">' + escH(d.name) + gapBadgeHtml + '</div>',
                    '<div class="cmp-district-item-sub">',
                      (d.candRate != null
                        ? '<span style="color:var(--orange);font-weight:700;">단 ' + d.candRate.toFixed(1) + '%</span>'
                        : ''),
                      (absText ? '<span style="margin-left:2px;">' + absText + '</span>' : ''),
                    '</div>',
                  '</div>',
                  '<div class="cmp-district-item-right">',
                    '<div class="cmp-district-item-rate">' + (d.propRate != null ? d.propRate.toFixed(2) + '%' : '—') + '</div>',
                    // grouped bar: 단체장(오렌지 내부)·비례(블루 외부) 동일 트랙
                    (function(){
                      var propW  = ((d.propRate  || 0) / maxRate * 100).toFixed(1);
                      var candW  = ((d.candRate  || 0) / maxRate * 100).toFixed(1);
                      var hasCand = d.candRate != null;
                      return [
                        '<div style="width:48px;height:6px;background:var(--surface2);border-radius:3px;overflow:hidden;position:relative;">',
                          '<div style="position:absolute;inset:0;width:' + propW + '%;background:var(--blue);border-radius:3px;opacity:0.7;"></div>',
                          (hasCand ? '<div style="position:absolute;top:1px;bottom:1px;left:0;width:' + candW + '%;background:var(--orange);border-radius:2px;opacity:0.85;"></div>' : ''),
                        '</div>',
                      ].join('');
                    })(),
                  '</div>',
                '</div>',
              ].join('');
            }).join(''),
          '</div>',
        '</div>',
      ].join('');
    }).join('');

    // grid 위에 이상치 TOP3 섹션 주입
    var outlierEl = document.getElementById('cmp-district-outlier');
    if (!outlierEl) {
      outlierEl = document.createElement('div');
      outlierEl.id = 'cmp-district-outlier';
      grid.parentNode.insertBefore(outlierEl, grid);
    }
    renderOutlierTop3(outlierEl, allDistGaps, '구');
  }

  // ── 5. 읍면동 뷰 렌더 ────────────────────────────────────────────
  function buildDongGroups(neighborhoods) {
    // REGIONAL neighborhoods 에서 구별 그룹 맵 반환
    // { '종로구': [{name, rate}, ...], ... }
    var groups = {};
    var distNames = []; // 순서 보존
    var current = null;
    (neighborhoods || []).forEach(function (nh) {
      if (nh.name.includes('_관외사전투표')) {
        current = districtNameFromAbsenteeMarker(nh.name);
        if (!groups[current]) { groups[current] = []; distNames.push(current); }
        // 관외사전투표 항목 자체는 리스트에서 제외 (시군구 뷰에서 이미 활용)
      } else if (current) {
        groups[current].push({ name: nh.name, rate: nh.rate });
      }
    });
    return { groups: groups, distNames: distNames };
  }

  function populateDongSelects() {
    var SEL_MAP = {
      '서울': 'cmp-dong-sel-seoul',
      '경기': 'cmp-dong-sel-gyeonggi',
      '부산': 'cmp-dong-sel-busan',
      '대구': 'cmp-dong-sel-daegu',
    };
    CMP_CANDIDATES.forEach(function (meta) {
      var selId = SEL_MAP[meta.regionKey];
      if (!selId) return;
      // 헤더 인라인 select (grid 재생성마다 새로 만들어짐 → 매번 채움)
      var sel = document.getElementById(selId);
      if (!sel) return;

      var reg = getRegional(meta.regionKey);
      if (!reg) return;

      var built = buildDongGroups(reg.neighborhoods);
      var distNames = built.distNames;

      sel.innerHTML = '<option value="">전체 구</option>';
      distNames.forEach(function (dname) {
        var opt = document.createElement('option');
        opt.value = dname;
        opt.textContent = dname;
        sel.appendChild(opt);
      });

      // 현재 선택값 복원
      if (dongSel[meta.regionKey]) {
        sel.value = dongSel[meta.regionKey];
      } else if (distNames.length) {
        dongSel[meta.regionKey] = distNames[0];
        sel.value = distNames[0];
      }

      // 이벤트 바인딩 (인라인이라 매번 재바인딩 — onchange로 중복 방지)
      sel.onchange = function () {
        dongSel[meta.regionKey] = sel.value || null;
        dongPage[meta.regionKey] = 1;
        renderDong();
      };
    });
  }

  function renderDong() {
    var grid = document.getElementById('cmp-dong-grid');
    if (!grid) return;

    var SEL_MAP = {
      '서울': 'cmp-dong-sel-seoul',
      '경기': 'cmp-dong-sel-gyeonggi',
      '부산': 'cmp-dong-sel-busan',
      '대구': 'cmp-dong-sel-daegu',
    };

    // 전 지역 동 gap 목록 (TOP3용) — REGIONAL 비례 neighborhoods 기준
    // 단체장 읍면동 데이터가 없으므로: 각 구의 단체장 평균을 동 단위 기준값으로 활용
    var allDongGaps = [];

    grid.innerHTML = CMP_CANDIDATES.map(function (meta) {
      var reg = getRegional(meta.regionKey);
      if (!reg) return '';

      var built = buildDongGroups(reg.neighborhoods);
      var groups = built.groups;
      var selId = SEL_MAP[meta.regionKey];
      var selEl = selId ? document.getElementById(selId) : null;
      var selectedDist = dongSel[meta.regionKey] || (selEl && selEl.value) || null;

      // 단체장 읍면동별 rate 맵 (동 이름 → rate)
      var res = getResult(meta.resultsId);
      var candDongMap     = res ? buildCandDongRateMap(res.neighborhoods, meta.regionKey) : {};
      var candVoteTypeMap = res ? buildCandDongVoteTypeMap(res.neighborhoods, meta.regionKey) : {};
      var propVoteTypeMap = reg ? buildRegionalDongVoteTypeMap(reg.neighborhoods) : {};
      // 구별 단체장 평균 (헤더 배지용)
      var candDistrictMap = res ? buildCandDistrictRateMap(res.neighborhoods, meta.regionKey) : {};
      var distCandRate = selectedDist ? candDistrictMap[selectedDist] : null;

      // REGIONAL 구별 비례 득표율 (헤더 배지용)
      var distPropRate = null;
      if (selectedDist && reg.districts) {
        var distObj = reg.districts.find(function(d){ return d.name === selectedDist; });
        if (distObj) distPropRate = distObj.rate;
      }

      // candDongMap 키(distKey)는 normalizeCandDistKey 적용된 키 → REGIONAL distName을 같은 방식으로 정규화해서 조회
      function getCandDongRate(distName, dongName) {
        // 직접 키로 먼저 시도
        if (candDongMap[distName] && candDongMap[distName][dongName] != null) return candDongMap[distName][dongName];
        // normalizeCandDistKey 적용 후 재시도 (경기 등 이름 불일치 해소)
        var normalized = normalizeCandDistKey(distName, meta.regionKey);
        if (candDongMap[normalized] && candDongMap[normalized][dongName] != null) return candDongMap[normalized][dongName];
        return null;
      }

      // 전체 동 목록 구성 (gap 수집은 200개 제한 전 전체 대상)
      var allDongsForGap = [];
      if (!selectedDist) {
        built.distNames.forEach(function (dn) {
          (groups[dn] || []).forEach(function (nh) { allDongsForGap.push(Object.assign({ distKey: dn }, nh)); });
        });
      } else {
        allDongsForGap = (groups[selectedDist] || []).map(function(nh){ return Object.assign({ distKey: selectedDist }, nh); });
      }

      // 동별 갭: 전체 동 기준으로 수집 (200개 제한 없음)
      allDongsForGap.forEach(function(d){
        if (d.rate == null) return;
        var candDongRate = getCandDongRate(d.distKey, d.name);
        if (candDongRate != null) {
          allDongGaps.push({
            regionKey: meta.regionKey,
            name: d.distKey + ' ' + d.name,
            gap: +(d.rate - candDongRate).toFixed(2),
          });
        }
      });

      // 화면 표시용은 전체 정렬 후 페이지 제한 (정렬 먼저, 슬라이스 나중)
      var page = dongPage[meta.regionKey] || 1;
      var sortedAll = allDongsForGap.slice().sort(function(a, b){ return (b.rate || 0) - (a.rate || 0); });
      var items = sortedAll.slice(0, DONG_PAGE_SIZE * page);
      var hasMore = sortedAll.length > DONG_PAGE_SIZE * page;

      var maxRate = items.reduce(function (mx, d) { return Math.max(mx, d.rate || 0); }, 0) || 10;

      return [
        '<div class="cmp-dong-col">',
          '<div class="cmp-dong-col-header">',
            // 후보명 + 지역 레이블
            '<div class="cmp-dong-col-candidate">' + escH(meta.candName) + '</div>',
            // 인라인 드롭다운 — 헤더 안에 직접
            '<select class="cmp-dong-inline-select" id="' + (SEL_MAP[meta.regionKey] || '') + '" aria-label="' + escH(meta.regionKey) + ' 구 선택">',
            '</select>',
            // 구별 단체장 vs 비례 갭 배지
            (distCandRate != null && distPropRate != null ? (function(){
              var gap = +(distPropRate - distCandRate).toFixed(2);
              var isPos = gap >= 0;
              var cls   = isPos ? 'gap-badge gap-badge-up' : 'gap-badge gap-badge-down';
              var arrow = isPos ? '▲' : '▼';
              var sign  = isPos ? '+' : '';
              var lbl   = isPos ? '비례 우세' : '단체장 우세';
              return '<div style="margin-top:8px;display:flex;align-items:center;gap:6px;flex-wrap:wrap;">' +
                '<span class="' + cls + '">' + arrow + sign + gap.toFixed(2) + '%p</span>' +
                '<span style="font-size:10px;color:var(--text3);font-weight:600;">' + lbl + ' (이 구 기준)</span>' +
              '</div>';
            })() : ''),
          '</div>',
          '<div class="cmp-dong-list" style="max-height:480px;overflow-y:auto;">',
            (items.length === 0
              ? '<div class="cmp-dong-empty">데이터가 없습니다.</div>'
              : items.map(function (d) {
                  var barW = ((d.rate || 0) / maxRate * 100).toFixed(1);

                  // 동 갭 배지 — CSS 클래스 기반
                  var dongGapHtml = '';
                  var candDongRate = getCandDongRate(d.distKey, d.name);
                  if (candDongRate != null && d.rate != null) {
                    var dg = +(d.rate - candDongRate).toFixed(2);
                    if (dg > 0.5)
                      dongGapHtml = '<span class="dong-gap-badge dong-gap-badge-up" title="비례가 단체장보다 +' + dg.toFixed(2) + '%p">▲' + dg.toFixed(1) + '</span>';
                    else if (dg < -0.5)
                      dongGapHtml = '<span class="dong-gap-badge dong-gap-badge-down" title="단체장이 비례보다 +' + Math.abs(dg).toFixed(2) + '%p">▼' + Math.abs(dg).toFixed(1) + '</span>';
                  }

                  // 사전/당일 세부 득표율 (11px, CSS 클래스)
                  var vt = (propVoteTypeMap[d.distKey] || {})[d.name] || {};
                  var vtHtml = '';
                  if (vt.early != null || vt.polling != null) {
                    vtHtml = '<div class="cmp-dong-vote-detail">' +
                      (vt.early   != null ? '<span style="color:var(--blue);" title="사전투표">사전 ' + vt.early.toFixed(1)   + '%</span>' : '') +
                      (vt.polling != null ? '<span style="color:var(--text3);" title="당일투표">당일 ' + vt.polling.toFixed(1) + '%</span>' : '') +
                    '</div>';
                  }

                  // 툴팁
                  var tipLines = [d.distKey + ' ' + d.name];
                  if (d.rate != null) tipLines.push('비례 ' + d.rate.toFixed(2) + '%');
                  if (candDongRate != null) tipLines.push('단체장 ' + candDongRate.toFixed(2) + '%');
                  if (d.rate != null && candDongRate != null) {
                    var dg2 = +(d.rate - candDongRate).toFixed(2);
                    tipLines.push('갭 ' + (dg2 >= 0 ? '+' : '') + dg2 + '%p (비례' + (dg2 >= 0 ? '↑' : '↓') + ')');
                  }
                  if (vt.early   != null) tipLines.push('사전투표 ' + vt.early.toFixed(2) + '%');
                  if (vt.polling != null) tipLines.push('당일투표 ' + vt.polling.toFixed(2) + '%');

                  return [
                    '<div class="cmp-dong-item" data-tip="' + tipLines.join('&#10;') + '">',
                      '<div class="cmp-dong-item-name">' + escH(d.name) + dongGapHtml + '</div>',
                      '<div class="cmp-dong-item-bar"><div class="cmp-dong-item-bar-fill" style="width:' + barW + '%"></div></div>',
                      '<div style="display:flex;flex-direction:column;align-items:flex-end;min-width:48px;">',
                        '<div class="cmp-dong-item-rate">' + (d.rate != null ? d.rate.toFixed(2) + '%' : '—') + '</div>',
                        vtHtml,
                      '</div>',
                    '</div>',
                  ].join('');
                }).join('')
            ),
          '</div>',
          (hasMore
            ? '<div style="padding:0 8px 8px;">' +
                '<button class="cmp-dong-more-btn" data-region="' + escH(meta.regionKey) + '">' +
                  '▼ 더 보기 (' + (sortedAll.length - items.length) + '개 · 전체 ' + sortedAll.length + '개)' +
                '</button>' +
              '</div>'
            : ''),
        '</div>',
      ].join('');
    }).join('');
    populateDongSelects();

    // 더 보기 버튼 이벤트
    grid.querySelectorAll('.cmp-dong-more-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var rk = btn.getAttribute('data-region');
        dongPage[rk] = (dongPage[rk] || 1) + 1;
        renderDong();
      });
    });

    // grid 위에 이상치 TOP3 섹션 주입
    var outlierEl = document.getElementById('cmp-dong-outlier');
    if (!outlierEl) {
      outlierEl = document.createElement('div');
      outlierEl.id = 'cmp-dong-outlier';
      grid.parentNode.insertBefore(outlierEl, grid);
    }
    renderOutlierTop3(outlierEl, allDongGaps, '동');
  }

  // ── 6. 뷰 전환 ───────────────────────────────────────────────────
  function switchView(level) {
    activeLevel = level;

    // 서브탭 버튼 active 동기화
    document.querySelectorAll('.cmp-level-btn').forEach(function (b) {
      b.classList.toggle('active', b.dataset.level === level);
    });

    // 뷰 컨테이너 표시
    var views = { overview: 'cmp-view-overview', district: 'cmp-view-district', dong: 'cmp-view-dong' };
    Object.keys(views).forEach(function (k) {
      var el = document.getElementById(views[k]);
      if (el) el.style.display = k === level ? '' : 'none';
    });

    // 정렬 컨트롤 / 읍면동 컨트롤 표시
    var sortWrap = document.getElementById('cmp-district-sort-wrap');
    var dongWrap = document.getElementById('cmp-dong-ctrl-wrap');
    if (sortWrap) sortWrap.style.display = level === 'district' ? '' : 'none';
    if (dongWrap) dongWrap.style.display = level === 'dong' ? '' : 'none';

    // 렌더
    if (level === 'overview') renderOverview();
    else if (level === 'district') renderDistrict();
    else if (level === 'dong') renderDong();
  }

  // ── 7. 공개 진입점 ───────────────────────────────────────────────
  function renderCompare() {
    // RESULTS / REGIONAL 이 아직 로드 안 됐을 경우 짧게 재시도
    if ((!global.RESULTS || !global.RESULTS.length) || (!global.REGIONAL || !global.REGIONAL.length)) {
      setTimeout(renderCompare, 200);
      return;
    }
    switchView(activeLevel);
  }

  // ── 8. 이벤트 바인딩 (1회) ───────────────────────────────────────
  var _evBound = false;
  function initCompareEvents() {
    if (_evBound) return;
    _evBound = true;

    // 서브탭 (광역 / 시군구 / 읍면동)
    document.querySelectorAll('.cmp-level-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        switchView(btn.dataset.level);
      });
    });

    // 정렬 드롭다운 (select)
    var sortSelect = document.getElementById('cmp-sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', function () {
        var sort = sortSelect.value;
        Object.keys(sortState).forEach(function (k) { sortState[k] = sort; });
        if (activeLevel === 'district') renderDistrict();
      });
    }

    // 읍면동 구 선택 드롭다운은 populateDongSelects()에서 헤더 인라인으로 바인딩됩니다.
  }

  // ── 9. 유틸 ──────────────────────────────────────────────────────
  function escH(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ── 10. 공개 API ─────────────────────────────────────────────────
  global.renderCompare     = renderCompare;
  global.initCompareEvents = initCompareEvents;

})(window);
