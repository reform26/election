// results.js — 개혁신당 2026 지방선거 개표 결과
// ══════════════════════════════════════════════════════════════════
// 📌 사용법
//   1. 각 항목의 숫자 필드만 채워넣으세요.
//   2. result: '당선' | '낙선' | '후보'  (집계 전엔 '후보' 유지)
//   3. quota: 해당 선거구 선출 정원  (현재 전원 1로 설정 — 기초의원 다인선거구는 직접 수정)
//   4. voteRate: 득표율 (소수점 1자리, 예: 23.4)
//   5. totalVotes: 득표수 (정수, 예: 15830)
//   6. districts / neighborhoods: 선택 입력 — 모달 지역별 표심 테이블용
//      [ { name: '강남구', candidateRate: 12.3, rivalARate: 45.6 }, … ]
//
// ⚡ rank(순위)는 자동 계산됩니다 — 직접 입력 불필요
// ⚡ totalCandidates도 선거구 그루핑으로 자동 계산됩니다
//
// 🔄 index.html 연동 방법:
//   <script src="can.js"></script>
//   <script src="results.js"></script>   ← can.js 다음에 추가
//   그러면 index.html이 id 기준으로 자동 머지합니다.
// ══════════════════════════════════════════════════════════════════

var RESULTS = [
  // [  1] 광역단체장  | 김정철 | 서울특별시장
  { id: 1, voteRate: 0.82, totalVotes: 43321, result: '후보', quota: 1, districts: [], neighborhoods: [{
    "name": "종로구_관외사전투표",
    "rate": 1.02,
    "votes": {
      "absentee": {
        "rate": 1.02,
        "count": 90
      }
    }
  },
  {
    "name": "청운효자동",
    "rate": 0.74,
    "votes": {
      "early": {
        "rate": 0.78,
        "count": 18
      },
      "polling": {
        "rate": 0.72,
        "count": 26
      }
    }
  },
  {
    "name": "사직동",
    "rate": 0.77,
    "votes": {
      "early": {
        "rate": 0.39,
        "count": 5
      },
      "polling": {
        "rate": 0.94,
        "count": 28
      }
    }
  },
  {
    "name": "삼청동",
    "rate": 0.48,
    "votes": {
      "early": {
        "rate": 0.33,
        "count": 1
      },
      "polling": {
        "rate": 0.54,
        "count": 4
      }
    }
  },
  {
    "name": "부암동",
    "rate": 0.66,
    "votes": {
      "early": {
        "rate": 0.48,
        "count": 6
      },
      "polling": {
        "rate": 0.73,
        "count": 23
      }
    }
  },
  {
    "name": "평창동",
    "rate": 0.6,
    "votes": {
      "early": {
        "rate": 0.83,
        "count": 20
      },
      "polling": {
        "rate": 0.51,
        "count": 31
      }
    }
  },
  {
    "name": "무악동",
    "rate": 0.67,
    "votes": {
      "early": {
        "rate": 0.56,
        "count": 9
      },
      "polling": {
        "rate": 0.74,
        "count": 20
      }
    }
  },
  {
    "name": "교남동",
    "rate": 0.75,
    "votes": {
      "early": {
        "rate": 0.74,
        "count": 13
      },
      "polling": {
        "rate": 0.75,
        "count": 26
      }
    }
  },
  {
    "name": "가회동",
    "rate": 0.79,
    "votes": {
      "early": {
        "rate": 0.13,
        "count": 1
      },
      "polling": {
        "rate": 1.24,
        "count": 14
      }
    }
  },
  {
    "name": "종로1·2·3·4가동",
    "rate": 0.96,
    "votes": {
      "early": {
        "rate": 0.88,
        "count": 8
      },
      "polling": {
        "rate": 1,
        "count": 19
      }
    }
  },
  {
    "name": "종로5·6가동",
    "rate": 0.76,
    "votes": {
      "early": {
        "rate": 0.39,
        "count": 3
      },
      "polling": {
        "rate": 0.93,
        "count": 15
      }
    }
  },
  {
    "name": "이화동",
    "rate": 0.81,
    "votes": {
      "early": {
        "rate": 0.63,
        "count": 8
      },
      "polling": {
        "rate": 0.91,
        "count": 21
      }
    }
  },
  {
    "name": "혜화동",
    "rate": 1.35,
    "votes": {
      "early": {
        "rate": 1.44,
        "count": 42
      },
      "polling": {
        "rate": 1.29,
        "count": 69
      }
    }
  },
  {
    "name": "창신제1동",
    "rate": 0.57,
    "votes": {
      "early": {
        "rate": 0.42,
        "count": 6
      },
      "polling": {
        "rate": 0.72,
        "count": 10
      }
    }
  },
  {
    "name": "창신제2동",
    "rate": 0.41,
    "votes": {
      "early": {
        "rate": 0.14,
        "count": 2
      },
      "polling": {
        "rate": 0.57,
        "count": 13
      }
    }
  },
  {
    "name": "창신제3동",
    "rate": 0.46,
    "votes": {
      "early": {
        "rate": 0.53,
        "count": 7
      },
      "polling": {
        "rate": 0.41,
        "count": 8
      }
    }
  },
  {
    "name": "숭인제1동",
    "rate": 0.36,
    "votes": {
      "early": {
        "rate": 0.48,
        "count": 5
      },
      "polling": {
        "rate": 0.29,
        "count": 5
      }
    }
  },
  {
    "name": "숭인제2동",
    "rate": 0.94,
    "votes": {
      "early": {
        "rate": 0.75,
        "count": 12
      },
      "polling": {
        "rate": 1.03,
        "count": 33
      }
    }
  },
{
    "name": "중구_관외사전투표",
    "rate": 1.03,
    "votes": {
      "absentee": {
        "rate": 1.03,
        "count": 94
      }
    }
  },
  {
    "name": "소공동",
    "rate": 0.89,
    "votes": {
      "early": {
        "rate": 0.76,
        "count": 3
      },
      "polling": {
        "rate": 0.95,
        "count": 7
      }
    }
  },
  {
    "name": "회현동",
    "rate": 0.9,
    "votes": {
      "early": {
        "rate": 1.08,
        "count": 7
      },
      "polling": {
        "rate": 0.81,
        "count": 11
      }
    }
  },
  {
    "name": "명동",
    "rate": 0.72,
    "votes": {
      "early": {
        "rate": 0.59,
        "count": 2
      },
      "polling": {
        "rate": 0.78,
        "count": 5
      }
    }
  },
  {
    "name": "필동",
    "rate": 0.88,
    "votes": {
      "early": {
        "rate": 0.64,
        "count": 5
      },
      "polling": {
        "rate": 1.01,
        "count": 15
      }
    }
  },
  {
    "name": "장충동",
    "rate": 1.22,
    "votes": {
      "early": {
        "rate": 0.79,
        "count": 5
      },
      "polling": {
        "rate": 1.4,
        "count": 22
      }
    }
  },
  {
    "name": "광희동",
    "rate": 0.88,
    "votes": {
      "early": {
        "rate": 0.97,
        "count": 5
      },
      "polling": {
        "rate": 0.86,
        "count": 17
      }
    }
  },
  {
    "name": "을지로동",
    "rate": 0.85,
    "votes": {
      "early": {
        "rate": 1.15,
        "count": 7
      },
      "polling": {
        "rate": 0.67,
        "count": 7
      }
    }
  },
  {
    "name": "신당동",
    "rate": 0.75,
    "votes": {
      "early": {
        "rate": 0.88,
        "count": 9
      },
      "polling": {
        "rate": 0.7,
        "count": 17
      }
    }
  },
  {
    "name": "다산동",
    "rate": 0.84,
    "votes": {
      "early": {
        "rate": 0.66,
        "count": 11
      },
      "polling": {
        "rate": 0.91,
        "count": 40
      }
    }
  },
  {
    "name": "약수동",
    "rate": 0.85,
    "votes": {
      "early": {
        "rate": 0.84,
        "count": 19
      },
      "polling": {
        "rate": 0.86,
        "count": 55
      }
    }
  },
  {
    "name": "청구동",
    "rate": 0.82,
    "votes": {
      "early": {
        "rate": 1.04,
        "count": 14
      },
      "polling": {
        "rate": 0.75,
        "count": 35
      }
    }
  },
  {
    "name": "신당제5동",
    "rate": 0.76,
    "votes": {
      "early": {
        "rate": 0.77,
        "count": 16
      },
      "polling": {
        "rate": 0.75,
        "count": 23
      }
    }
  },
  {
    "name": "동화동",
    "rate": 0.66,
    "votes": {
      "early": {
        "rate": 0.43,
        "count": 8
      },
      "polling": {
        "rate": 0.79,
        "count": 28
      }
    }
  },
  {
    "name": "황학동",
    "rate": 0.78,
    "votes": {
      "early": {
        "rate": 0.94,
        "count": 17
      },
      "polling": {
        "rate": 0.72,
        "count": 34
      }
    }
  },
  {
    "name": "중림동",
    "rate": 0.81,
    "votes": {
      "early": {
        "rate": 0.8,
        "count": 15
      },
      "polling": {
        "rate": 0.82,
        "count": 36
      }
    }
  },
{
    "name": "용산구_관외사전투표",
    "rate": 1.09,
    "votes": {
      "absentee": {
        "rate": 1.09,
        "count": 155
      }
    }
  },
  {
    "name": "후암동",
    "rate": 0.68,
    "votes": {
      "early": {
        "rate": 0.79,
        "count": 21
      },
      "polling": {
        "rate": 0.62,
        "count": 30
      }
    }
  },
  {
    "name": "용산2가동",
    "rate": 0.61,
    "votes": {
      "early": {
        "rate": 0.64,
        "count": 10
      },
      "polling": {
        "rate": 0.59,
        "count": 15
      }
    }
  },
  {
    "name": "남영동",
    "rate": 0.62,
    "votes": {
      "early": {
        "rate": 0.39,
        "count": 3
      },
      "polling": {
        "rate": 0.7,
        "count": 15
      }
    }
  },
  {
    "name": "청파동",
    "rate": 0.91,
    "votes": {
      "early": {
        "rate": 0.89,
        "count": 22
      },
      "polling": {
        "rate": 0.92,
        "count": 56
      }
    }
  },
  {
    "name": "원효로제1동",
    "rate": 0.79,
    "votes": {
      "early": {
        "rate": 0.61,
        "count": 17
      },
      "polling": {
        "rate": 0.88,
        "count": 52
      }
    }
  },
  {
    "name": "원효로제2동",
    "rate": 0.69,
    "votes": {
      "early": {
        "rate": 0.68,
        "count": 13
      },
      "polling": {
        "rate": 0.69,
        "count": 34
      }
    }
  },
  {
    "name": "효창동",
    "rate": 0.74,
    "votes": {
      "early": {
        "rate": 0.97,
        "count": 20
      },
      "polling": {
        "rate": 0.61,
        "count": 22
      }
    }
  },
  {
    "name": "용문동",
    "rate": 0.64,
    "votes": {
      "early": {
        "rate": 0.89,
        "count": 21
      },
      "polling": {
        "rate": 0.49,
        "count": 19
      }
    }
  },
  {
    "name": "한강로동",
    "rate": 0.5,
    "votes": {
      "early": {
        "rate": 0.37,
        "count": 9
      },
      "polling": {
        "rate": 0.54,
        "count": 42
      }
    }
  },
  {
    "name": "이촌제1동",
    "rate": 0.69,
    "votes": {
      "early": {
        "rate": 0.55,
        "count": 21
      },
      "polling": {
        "rate": 0.74,
        "count": 70
      }
    }
  },
  {
    "name": "이촌제2동",
    "rate": 0.47,
    "votes": {
      "early": {
        "rate": 0.52,
        "count": 6
      },
      "polling": {
        "rate": 0.45,
        "count": 15
      }
    }
  },
  {
    "name": "이태원제1동",
    "rate": 0.67,
    "votes": {
      "early": {
        "rate": 1.04,
        "count": 7
      },
      "polling": {
        "rate": 0.53,
        "count": 10
      }
    }
  },
  {
    "name": "이태원제2동",
    "rate": 0.61,
    "votes": {
      "early": {
        "rate": 0.61,
        "count": 7
      },
      "polling": {
        "rate": 0.61,
        "count": 17
      }
    }
  },
  {
    "name": "한남동",
    "rate": 0.4,
    "votes": {
      "early": {
        "rate": 0.52,
        "count": 6
      },
      "polling": {
        "rate": 0.37,
        "count": 17
      }
    }
  },
  {
    "name": "서빙고동",
    "rate": 0.67,
    "votes": {
      "early": {
        "rate": 0.46,
        "count": 5
      },
      "polling": {
        "rate": 0.72,
        "count": 32
      }
    }
  },
  {
    "name": "보광동",
    "rate": 0.66,
    "votes": {
      "early": {
        "rate": 0.48,
        "count": 6
      },
      "polling": {
        "rate": 0.8,
        "count": 13
      }
    }
  },
{
    "name": "성동구_관외사전투표",
    "rate": 0.82,
    "votes": {
      "absentee": {
        "rate": 0.82,
        "count": 144
      }
    }
  },
  {
    "name": "금호1가동",
    "rate": 0.53,
    "votes": {
      "early": {
        "rate": 0.65,
        "count": 11
      },
      "polling": {
        "rate": 0.49,
        "count": 27
      }
    }
  },
  {
    "name": "금호2·3가동",
    "rate": 0.46,
    "votes": {
      "early": {
        "rate": 0.37,
        "count": 11
      },
      "polling": {
        "rate": 0.5,
        "count": 38
      }
    }
  },
  {
    "name": "금호4가동",
    "rate": 0.51,
    "votes": {
      "early": {
        "rate": 0.41,
        "count": 11
      },
      "polling": {
        "rate": 0.56,
        "count": 28
      }
    }
  },
  {
    "name": "옥수동",
    "rate": 0.53,
    "votes": {
      "early": {
        "rate": 0.4,
        "count": 13
      },
      "polling": {
        "rate": 0.58,
        "count": 58
      }
    }
  },
  {
    "name": "왕십리도선동",
    "rate": 0.65,
    "votes": {
      "early": {
        "rate": 0.62,
        "count": 21
      },
      "polling": {
        "rate": 0.66,
        "count": 63
      }
    }
  },
  {
    "name": "왕십리제2동",
    "rate": 0.41,
    "votes": {
      "early": {
        "rate": 0.51,
        "count": 15
      },
      "polling": {
        "rate": 0.36,
        "count": 21
      }
    }
  },
  {
    "name": "행당제1동",
    "rate": 0.68,
    "votes": {
      "early": {
        "rate": 0.75,
        "count": 18
      },
      "polling": {
        "rate": 0.65,
        "count": 39
      }
    }
  },
  {
    "name": "행당제2동",
    "rate": 0.47,
    "votes": {
      "early": {
        "rate": 0.45,
        "count": 16
      },
      "polling": {
        "rate": 0.49,
        "count": 41
      }
    }
  },
  {
    "name": "마장동",
    "rate": 0.63,
    "votes": {
      "early": {
        "rate": 0.4,
        "count": 12
      },
      "polling": {
        "rate": 0.71,
        "count": 60
      }
    }
  },
  {
    "name": "사근동",
    "rate": 1.23,
    "votes": {
      "early": {
        "rate": 1.05,
        "count": 15
      },
      "polling": {
        "rate": 1.3,
        "count": 52
      }
    }
  },
  {
    "name": "송정동",
    "rate": 0.77,
    "votes": {
      "early": {
        "rate": 0.63,
        "count": 9
      },
      "polling": {
        "rate": 0.84,
        "count": 26
      }
    }
  },
  {
    "name": "용답동",
    "rate": 0.81,
    "votes": {
      "early": {
        "rate": 1.03,
        "count": 22
      },
      "polling": {
        "rate": 0.7,
        "count": 30
      }
    }
  },
  {
    "name": "응봉동",
    "rate": 0.32,
    "votes": {
      "early": {
        "rate": 0.25,
        "count": 6
      },
      "polling": {
        "rate": 0.36,
        "count": 18
      }
    }
  },
  {
    "name": "성수1가제1동",
    "rate": 0.44,
    "votes": {
      "early": {
        "rate": 0.75,
        "count": 14
      },
      "polling": {
        "rate": 0.33,
        "count": 18
      }
    }
  },
  {
    "name": "성수1가제2동",
    "rate": 0.58,
    "votes": {
      "early": {
        "rate": 0.71,
        "count": 19
      },
      "polling": {
        "rate": 0.51,
        "count": 30
      }
    }
  },
  {
    "name": "성수2가제1동",
    "rate": 0.56,
    "votes": {
      "early": {
        "rate": 0.67,
        "count": 17
      },
      "polling": {
        "rate": 0.51,
        "count": 23
      }
    }
  },
  {
    "name": "성수2가제3동",
    "rate": 0.74,
    "votes": {
      "early": {
        "rate": 0.86,
        "count": 15
      },
      "polling": {
        "rate": 0.68,
        "count": 24
      }
    }
  },
{
    "name": "광진구_관외사전투표",
    "rate": 0.98,
    "votes": {
      "absentee": {
        "rate": 0.98,
        "count": 194
      }
    }
  },
  {
    "name": "중곡제1동",
    "rate": 0.9,
    "votes": {
      "early": {
        "rate": 0.8,
        "count": 21
      },
      "polling": {
        "rate": 0.95,
        "count": 46
      }
    }
  },
  {
    "name": "중곡제2동",
    "rate": 0.75,
    "votes": {
      "early": {
        "rate": 0.56,
        "count": 19
      },
      "polling": {
        "rate": 0.86,
        "count": 56
      }
    }
  },
  {
    "name": "중곡제3동",
    "rate": 0.73,
    "votes": {
      "early": {
        "rate": 0.65,
        "count": 16
      },
      "polling": {
        "rate": 0.77,
        "count": 40
      }
    }
  },
  {
    "name": "중곡제4동",
    "rate": 0.63,
    "votes": {
      "early": {
        "rate": 0.6,
        "count": 26
      },
      "polling": {
        "rate": 0.64,
        "count": 63
      }
    }
  },
  {
    "name": "능동",
    "rate": 0.74,
    "votes": {
      "early": {
        "rate": 0.66,
        "count": 12
      },
      "polling": {
        "rate": 0.78,
        "count": 30
      }
    }
  },
  {
    "name": "구의제1동",
    "rate": 0.86,
    "votes": {
      "early": {
        "rate": 0.83,
        "count": 33
      },
      "polling": {
        "rate": 0.88,
        "count": 67
      }
    }
  },
  {
    "name": "구의제2동",
    "rate": 0.68,
    "votes": {
      "early": {
        "rate": 0.44,
        "count": 16
      },
      "polling": {
        "rate": 0.79,
        "count": 69
      }
    }
  },
  {
    "name": "구의제3동",
    "rate": 0.7,
    "votes": {
      "early": {
        "rate": 0.8,
        "count": 39
      },
      "polling": {
        "rate": 0.66,
        "count": 69
      }
    }
  },
  {
    "name": "광장동",
    "rate": 0.66,
    "votes": {
      "early": {
        "rate": 0.71,
        "count": 31
      },
      "polling": {
        "rate": 0.64,
        "count": 78
      }
    }
  },
  {
    "name": "자양제1동",
    "rate": 0.89,
    "votes": {
      "early": {
        "rate": 0.75,
        "count": 34
      },
      "polling": {
        "rate": 0.98,
        "count": 67
      }
    }
  },
  {
    "name": "자양제2동",
    "rate": 0.61,
    "votes": {
      "early": {
        "rate": 0.42,
        "count": 13
      },
      "polling": {
        "rate": 0.68,
        "count": 63
      }
    }
  },
  {
    "name": "자양제3동",
    "rate": 0.54,
    "votes": {
      "early": {
        "rate": 0.54,
        "count": 26
      },
      "polling": {
        "rate": 0.54,
        "count": 52
      }
    }
  },
  {
    "name": "자양제4동",
    "rate": 0.68,
    "votes": {
      "early": {
        "rate": 0.64,
        "count": 23
      },
      "polling": {
        "rate": 0.69,
        "count": 49
      }
    }
  },
  {
    "name": "화양동",
    "rate": 1.27,
    "votes": {
      "early": {
        "rate": 1.58,
        "count": 43
      },
      "polling": {
        "rate": 1.15,
        "count": 83
      }
    }
  },
  {
    "name": "군자동",
    "rate": 1.25,
    "votes": {
      "early": {
        "rate": 1.48,
        "count": 39
      },
      "polling": {
        "rate": 1.15,
        "count": 71
      }
    }
  },
{
    "name": "동대문구_관외사전투표",
    "rate": 1.2,
    "votes": {
      "absentee": {
        "rate": 1.2,
        "count": 293
      }
    }
  },
  {
    "name": "신설동",
    "rate": 0.83,
    "votes": {
      "early": {
        "rate": 0.93,
        "count": 16
      },
      "polling": {
        "rate": 0.8,
        "count": 43
      }
    }
  },
  {
    "name": "용두동",
    "rate": 0.92,
    "votes": {
      "early": {
        "rate": 0.9,
        "count": 36
      },
      "polling": {
        "rate": 0.93,
        "count": 70
      }
    }
  },
  {
    "name": "제기동",
    "rate": 1.05,
    "votes": {
      "early": {
        "rate": 0.76,
        "count": 25
      },
      "polling": {
        "rate": 1.17,
        "count": 90
      }
    }
  },
  {
    "name": "청량리동",
    "rate": 0.48,
    "votes": {
      "early": {
        "rate": 0.48,
        "count": 12
      },
      "polling": {
        "rate": 0.49,
        "count": 33
      }
    }
  },
  {
    "name": "회기동",
    "rate": 1.61,
    "votes": {
      "early": {
        "rate": 1.82,
        "count": 41
      },
      "polling": {
        "rate": 1.47,
        "count": 48
      }
    }
  },
  {
    "name": "휘경제1동",
    "rate": 0.77,
    "votes": {
      "early": {
        "rate": 0.71,
        "count": 18
      },
      "polling": {
        "rate": 0.8,
        "count": 44
      }
    }
  },
  {
    "name": "휘경제2동",
    "rate": 0.92,
    "votes": {
      "early": {
        "rate": 0.42,
        "count": 8
      },
      "polling": {
        "rate": 1.02,
        "count": 92
      }
    }
  },
  {
    "name": "이문제1동",
    "rate": 0.93,
    "votes": {
      "early": {
        "rate": 0.97,
        "count": 22
      },
      "polling": {
        "rate": 0.92,
        "count": 115
      }
    }
  },
  {
    "name": "이문제2동",
    "rate": 0.76,
    "votes": {
      "early": {
        "rate": 0.75,
        "count": 24
      },
      "polling": {
        "rate": 0.77,
        "count": 52
      }
    }
  },
  {
    "name": "전농제1동",
    "rate": 0.77,
    "votes": {
      "early": {
        "rate": 0.49,
        "count": 17
      },
      "polling": {
        "rate": 0.85,
        "count": 104
      }
    }
  },
  {
    "name": "전농제2동",
    "rate": 0.65,
    "votes": {
      "early": {
        "rate": 0.72,
        "count": 24
      },
      "polling": {
        "rate": 0.61,
        "count": 38
      }
    }
  },
  {
    "name": "답십리제1동",
    "rate": 0.59,
    "votes": {
      "early": {
        "rate": 0.64,
        "count": 23
      },
      "polling": {
        "rate": 0.58,
        "count": 59
      }
    }
  },
  {
    "name": "답십리제2동",
    "rate": 0.5,
    "votes": {
      "early": {
        "rate": 0.34,
        "count": 13
      },
      "polling": {
        "rate": 0.55,
        "count": 57
      }
    }
  },
  {
    "name": "장안제1동",
    "rate": 0.66,
    "votes": {
      "early": {
        "rate": 0.56,
        "count": 31
      },
      "polling": {
        "rate": 0.69,
        "count": 93
      }
    }
  },
  {
    "name": "장안제2동",
    "rate": 0.71,
    "votes": {
      "early": {
        "rate": 0.88,
        "count": 36
      },
      "polling": {
        "rate": 0.64,
        "count": 76
      }
    }
  },
{"name":"중랑구_관외사전투표","rate":0.96,"votes":{"absentee":{"rate":0.96,"count":241}}},
{"name":"면목본동","rate":0.65,"votes":{"early":{"rate":0.53,"count":30},"polling":{"rate":0.73,"count":66}}},
{"name":"면목제2동","rate":0.72,"votes":{"early":{"rate":0.63,"count":22},"polling":{"rate":0.76,"count":51}}},
{"name":"면목제3·8동","rate":0.58,"votes":{"early":{"rate":0.78,"count":24},"polling":{"rate":0.5,"count":37}}},
{"name":"면목제4동","rate":0.71,"votes":{"early":{"rate":0.72,"count":16},"polling":{"rate":0.7,"count":39}}},
{"name":"면목제5동","rate":0.66,"votes":{"early":{"rate":0.55,"count":14},"polling":{"rate":0.72,"count":32}}},
{"name":"면목제7동","rate":0.72,"votes":{"early":{"rate":0.63,"count":28},"polling":{"rate":0.79,"count":50}}},
{"name":"상봉제1동","rate":0.78,"votes":{"early":{"rate":1.02,"count":25},"polling":{"rate":0.7,"count":53}}},
{"name":"상봉제2동","rate":1,"votes":{"early":{"rate":0.74,"count":26},"polling":{"rate":1.14,"count":73}}},
{"name":"중화제1동","rate":0.66,"votes":{"early":{"rate":0.38,"count":11},"polling":{"rate":0.81,"count":45}}},
{"name":"중화제2동","rate":0.85,"votes":{"early":{"rate":0.84,"count":33},"polling":{"rate":0.85,"count":70}}},
{"name":"묵제1동","rate":0.7,"votes":{"early":{"rate":0.59,"count":26},"polling":{"rate":0.74,"count":84}}},
{"name":"묵제2동","rate":0.85,"votes":{"early":{"rate":1,"count":40},"polling":{"rate":0.74,"count":40}}},
{"name":"망우본동","rate":0.56,"votes":{"early":{"rate":0.4,"count":20},"polling":{"rate":0.62,"count":78}}},
{"name":"망우제3동","rate":0.53,"votes":{"early":{"rate":0.27,"count":8},"polling":{"rate":0.69,"count":32}}},
{"name":"신내제1동","rate":0.72,"votes":{"early":{"rate":0.74,"count":31},"polling":{"rate":0.71,"count":97}}},
{"name":"신내제2동","rate":0.72,"votes":{"early":{"rate":0.62,"count":28},"polling":{"rate":0.78,"count":57}}},
{"name":"성북구_관외사전투표","rate":0.9,"votes":{"absentee":{"rate":0.9,"count":275}}},
{"name":"성북동","rate":0.67,"votes":{"early":{"rate":0.72,"count":22},"polling":{"rate":0.65,"count":32}}},
{"name":"삼선동","rate":0.9,"votes":{"early":{"rate":0.63,"count":31},"polling":{"rate":1.09,"count":78}}},
{"name":"동선동","rate":0.89,"votes":{"early":{"rate":1.08,"count":19},"polling":{"rate":0.82,"count":40}}},
{"name":"돈암제1동","rate":0.67,"votes":{"early":{"rate":0.43,"count":9},"polling":{"rate":0.77,"count":40}}},
{"name":"돈암제2동","rate":0.65,"votes":{"early":{"rate":0.66,"count":18},"polling":{"rate":0.65,"count":55}}},
{"name":"안암동","rate":1.68,"votes":{"early":{"rate":1.33,"count":33},"polling":{"rate":1.85,"count":98}}},
{"name":"보문동","rate":0.95,"votes":{"early":{"rate":0.97,"count":24},"polling":{"rate":0.94,"count":43}}},
{"name":"정릉제1동","rate":0.5,"votes":{"early":{"rate":0.59,"count":17},"polling":{"rate":0.45,"count":27}}},
{"name":"정릉제2동","rate":0.69,"votes":{"early":{"rate":0.84,"count":31},"polling":{"rate":0.6,"count":39}}},
{"name":"정릉제3동","rate":0.88,"votes":{"early":{"rate":0.82,"count":16},"polling":{"rate":0.91,"count":35}}},
{"name":"정릉제4동","rate":0.61,"votes":{"early":{"rate":0.54,"count":22},"polling":{"rate":0.65,"count":50}}},
{"name":"길음제1동","rate":0.66,"votes":{"early":{"rate":0.63,"count":29},"polling":{"rate":0.67,"count":84}}},
{"name":"길음제2동","rate":0.62,"votes":{"early":{"rate":0.61,"count":18},"polling":{"rate":0.62,"count":48}}},
{"name":"종암동","rate":0.84,"votes":{"early":{"rate":0.63,"count":36},"polling":{"rate":0.93,"count":121}}},
{"name":"월곡제1동","rate":0.52,"votes":{"early":{"rate":0.41,"count":16},"polling":{"rate":0.57,"count":49}}},
{"name":"월곡제2동","rate":0.65,"votes":{"early":{"rate":0.67,"count":17},"polling":{"rate":0.65,"count":43}}},
{"name":"장위제1동","rate":0.58,"votes":{"early":{"rate":0.32,"count":10},"polling":{"rate":0.69,"count":51}}},
{"name":"장위제2동","rate":0.51,"votes":{"early":{"rate":0.44,"count":7},"polling":{"rate":0.53,"count":28}}},
{"name":"장위제3동","rate":0.62,"votes":{"early":{"rate":0.34,"count":8},"polling":{"rate":0.71,"count":50}}},
{"name":"석관동","rate":0.56,"votes":{"early":{"rate":0.43,"count":16},"polling":{"rate":0.6,"count":70}}},
{"name":"강북구_관외사전투표","rate":0.86,"votes":{"absentee":{"rate":0.86,"count":151}}},
{"name":"삼양동","rate":0.6,"votes":{"early":{"rate":0.63,"count":22},"polling":{"rate":0.59,"count":46}}},
{"name":"미아동","rate":0.46,"votes":{"early":{"rate":0.44,"count":17},"polling":{"rate":0.48,"count":31}}},
{"name":"송중동","rate":0.5,"votes":{"early":{"rate":0.47,"count":16},"polling":{"rate":0.51,"count":45}}},
{"name":"송천동","rate":0.61,"votes":{"early":{"rate":0.44,"count":16},"polling":{"rate":0.7,"count":53}}},
{"name":"삼각산동","rate":0.58,"votes":{"early":{"rate":0.51,"count":20},"polling":{"rate":0.6,"count":67}}},
{"name":"번1동","rate":0.64,"votes":{"early":{"rate":0.7,"count":22},"polling":{"rate":0.59,"count":28}}},
{"name":"번2동","rate":0.7,"votes":{"early":{"rate":0.37,"count":8},"polling":{"rate":0.86,"count":41}}},
{"name":"번3동","rate":0.61,"votes":{"early":{"rate":0.47,"count":13},"polling":{"rate":0.68,"count":35}}},
{"name":"수유1동","rate":0.71,"votes":{"early":{"rate":0.62,"count":21},"polling":{"rate":0.75,"count":42}}},
{"name":"수유2동","rate":0.62,"votes":{"early":{"rate":0.52,"count":20},"polling":{"rate":0.69,"count":42}}},
{"name":"수유3동","rate":0.62,"votes":{"early":{"rate":0.52,"count":11},"polling":{"rate":0.65,"count":47}}},
{"name":"우이동","rate":0.54,"votes":{"early":{"rate":0.28,"count":9},"polling":{"rate":0.68,"count":41}}},
{"name":"인수동","rate":0.6,"votes":{"early":{"rate":0.56,"count":25},"polling":{"rate":0.63,"count":51}}},
{"name":"도봉구_관외사전투표","rate":0.87,"votes":{"absentee":{"rate":0.87,"count":172}}},
{"name":"쌍문1동","rate":0.55,"votes":{"early":{"rate":0.43,"count":13},"polling":{"rate":0.6,"count":39}}},
{"name":"쌍문2동","rate":0.56,"votes":{"early":{"rate":0.54,"count":15},"polling":{"rate":0.57,"count":33}}},
{"name":"쌍문3동","rate":0.74,"votes":{"early":{"rate":0.63,"count":18},"polling":{"rate":0.81,"count":41}}},
{"name":"쌍문4동","rate":0.41,"votes":{"early":{"rate":0.38,"count":11},"polling":{"rate":0.43,"count":26}}},
{"name":"방학1동","rate":0.6,"votes":{"early":{"rate":0.57,"count":21},"polling":{"rate":0.62,"count":55}}},
{"name":"방학2동","rate":0.49,"votes":{"early":{"rate":0.35,"count":11},"polling":{"rate":0.57,"count":30}}},
{"name":"방학3동","rate":0.52,"votes":{"early":{"rate":0.52,"count":27},"polling":{"rate":0.52,"count":44}}},
{"name":"창1동","rate":0.57,"votes":{"early":{"rate":0.57,"count":21},"polling":{"rate":0.57,"count":44}}},
{"name":"창2동","rate":0.64,"votes":{"early":{"rate":0.68,"count":32},"polling":{"rate":0.62,"count":55}}},
{"name":"창3동","rate":0.48,"votes":{"early":{"rate":0.29,"count":6},"polling":{"rate":0.58,"count":22}}},
{"name":"창4동","rate":0.68,"votes":{"early":{"rate":0.66,"count":27},"polling":{"rate":0.68,"count":70}}},
{"name":"창5동","rate":0.53,"votes":{"early":{"rate":0.45,"count":19},"polling":{"rate":0.58,"count":48}}},
{"name":"도봉1동","rate":0.44,"votes":{"early":{"rate":0.41,"count":16},"polling":{"rate":0.46,"count":31}}},
{"name":"도봉2동","rate":0.55,"votes":{"early":{"rate":0.48,"count":13},"polling":{"rate":0.57,"count":58}}},
{ "name": "노원구_관외사전투표", "rate": 0.89, "votes": { "absentee": { "rate": 0.89, "count": 283 } } },
{ "name": "월계1동", "rate": 0.78, "votes": { "polling": { "rate": 0.80, "count": 56 }, "early": { "rate": 0.73, "count": 28 } } },
{ "name": "월계2동", "rate": 0.52, "votes": { "polling": { "rate": 0.56, "count": 49 }, "early": { "rate": 0.39, "count": 14 } } },
{ "name": "월계3동", "rate": 0.64, "votes": { "polling": { "rate": 0.68, "count": 79 }, "early": { "rate": 0.44, "count": 11 } } },
{ "name": "공릉1동", "rate": 0.96, "votes": { "polling": { "rate": 0.87, "count": 110 }, "early": { "rate": 1.16, "count": 64 } } },
{ "name": "공릉2동", "rate": 0.78, "votes": { "polling": { "rate": 0.84, "count": 124 }, "early": { "rate": 0.64, "count": 35 } } },
{ "name": "하계1동", "rate": 0.98, "votes": { "polling": { "rate": 0.88, "count": 82 }, "early": { "rate": 1.29, "count": 38 } } },
{ "name": "하계2동", "rate": 0.60, "votes": { "polling": { "rate": 0.62, "count": 48 }, "early": { "rate": 0.53, "count": 16 } } },
{ "name": "중계본동", "rate": 0.72, "votes": { "polling": { "rate": 0.76, "count": 55 }, "early": { "rate": 0.61, "count": 18 } } },
{ "name": "중계1동", "rate": 0.78, "votes": { "polling": { "rate": 0.81, "count": 65 }, "early": { "rate": 0.72, "count": 27 } } },
{ "name": "중계2·3동", "rate": 0.71, "votes": { "polling": { "rate": 0.78, "count": 91 }, "early": { "rate": 0.55, "count": 27 } } },
{ "name": "중계4동", "rate": 0.66, "votes": { "polling": { "rate": 0.73, "count": 47 }, "early": { "rate": 0.50, "count": 15 } } },
{ "name": "상계1동", "rate": 0.72, "votes": { "polling": { "rate": 0.79, "count": 98 }, "early": { "rate": 0.57, "count": 32 } } },
{ "name": "상계2동", "rate": 0.75, "votes": { "polling": { "rate": 0.72, "count": 44 }, "early": { "rate": 0.78, "count": 27 } } },
{ "name": "상계3·4동", "rate": 0.75, "votes": { "polling": { "rate": 0.76, "count": 74 }, "early": { "rate": 0.71, "count": 20 } } },
{ "name": "상계5동", "rate": 0.83, "votes": { "polling": { "rate": 0.86, "count": 66 }, "early": { "rate": 0.75, "count": 26 } } },
{ "name": "상계6·7동", "rate": 0.84, "votes": { "polling": { "rate": 0.92, "count": 110 }, "early": { "rate": 0.56, "count": 19 } } },
{ "name": "상계8동", "rate": 0.88, "votes": { "polling": { "rate": 0.99, "count": 71 }, "early": { "rate": 0.67, "count": 25 } } },
{ "name": "상계9동", "rate": 0.90, "votes": { "polling": { "rate": 0.83, "count": 57 }, "early": { "rate": 1.05, "count": 35 } } },
{ "name": "상계10동", "rate": 0.82, "votes": { "polling": { "rate": 0.76, "count": 48 }, "early": { "rate": 0.93, "count": 30 } } },
{"name":"은평구_관외사전투표","rate":0.94,"votes":{"absentee":{"rate":0.94,"count":316}}},
{"name":"녹번동","rate":0.59,"votes":{"early":{"rate":0.58,"count":32},"polling":{"rate":0.6,"count":66}}},
{"name":"응암제1동","rate":0.8,"votes":{"early":{"rate":0.55,"count":24},"polling":{"rate":0.91,"count":96}}},
{"name":"응암제2동","rate":0.73,"votes":{"early":{"rate":0.75,"count":24},"polling":{"rate":0.72,"count":64}}},
{"name":"응암제3동","rate":0.48,"votes":{"early":{"rate":0.42,"count":19},"polling":{"rate":0.53,"count":35}}},
{"name":"역촌동","rate":0.66,"votes":{"early":{"rate":0.53,"count":38},"polling":{"rate":0.73,"count":100}}},
{"name":"신사제1동","rate":0.73,"votes":{"early":{"rate":0.53,"count":29},"polling":{"rate":0.87,"count":64}}},
{"name":"신사제2동","rate":0.7,"votes":{"early":{"rate":0.75,"count":19},"polling":{"rate":0.68,"count":41}}},
{"name":"증산동","rate":0.63,"votes":{"early":{"rate":0.55,"count":16},"polling":{"rate":0.67,"count":34}}},
{"name":"수색동","rate":0.78,"votes":{"early":{"rate":0.55,"count":22},"polling":{"rate":0.9,"count":66}}},
{"name":"불광제1동","rate":0.71,"votes":{"early":{"rate":0.57,"count":23},"polling":{"rate":0.75,"count":95}}},
{"name":"불광제2동","rate":0.65,"votes":{"early":{"rate":0.46,"count":18},"polling":{"rate":0.73,"count":62}}},
{"name":"갈현제1동","rate":0.54,"votes":{"early":{"rate":0.41,"count":10},"polling":{"rate":0.62,"count":25}}},
{"name":"갈현제2동","rate":0.8,"votes":{"early":{"rate":0.73,"count":33},"polling":{"rate":0.83,"count":68}}},
{"name":"구산동","rate":0.65,"votes":{"early":{"rate":0.65,"count":30},"polling":{"rate":0.65,"count":60}}},
{"name":"대조동","rate":0.97,"votes":{"early":{"rate":0.92,"count":36},"polling":{"rate":1,"count":84}}},
{"name":"진관동","rate":0.77,"votes":{"early":{"rate":0.59,"count":50},"polling":{"rate":0.86,"count":162}}},
{"name":"서대문구_관외사전투표","rate":1.18,"votes":{"absentee":{"rate":1.18,"count":268}}},
{"name":"충현동","rate":1.1,"votes":{"early":{"rate":0.99,"count":19},"polling":{"rate":1.14,"count":78}}},
{"name":"천연동","rate":1.11,"votes":{"early":{"rate":0.83,"count":24},"polling":{"rate":1.24,"count":77}}},
{"name":"북아현동","rate":1.01,"votes":{"early":{"rate":0.87,"count":26},"polling":{"rate":1.08,"count":58}}},
{"name":"신촌동","rate":1.39,"votes":{"early":{"rate":1.98,"count":30},"polling":{"rate":1.26,"count":84}}},
{"name":"연희동","rate":0.85,"votes":{"early":{"rate":0.56,"count":20},"polling":{"rate":0.93,"count":109}}},
{"name":"홍제제1동","rate":0.51,"votes":{"early":{"rate":0.45,"count":11},"polling":{"rate":0.52,"count":50}}},
{"name":"홍제제2동","rate":0.73,"votes":{"early":{"rate":0.65,"count":19},"polling":{"rate":0.78,"count":35}}},
{"name":"홍제제3동","rate":0.61,"votes":{"early":{"rate":0.78,"count":21},"polling":{"rate":0.53,"count":33}}},
{"name":"홍은제1동","rate":0.49,"votes":{"early":{"rate":0.68,"count":29},"polling":{"rate":0.4,"count":33}}},
{"name":"홍은제2동","rate":0.61,"votes":{"early":{"rate":0.29,"count":9},"polling":{"rate":0.71,"count":64}}},
{"name":"남가좌제1동","rate":0.59,"votes":{"early":{"rate":0.62,"count":27},"polling":{"rate":0.57,"count":35}}},
{"name":"남가좌제2동","rate":0.6,"votes":{"early":{"rate":0.46,"count":15},"polling":{"rate":0.65,"count":63}}},
{"name":"북가좌제1동","rate":0.71,"votes":{"early":{"rate":0.51,"count":21},"polling":{"rate":0.86,"count":50}}},
{"name":"북가좌제2동","rate":0.62,"votes":{"early":{"rate":0.53,"count":24},"polling":{"rate":0.67,"count":65}}},
{"name":"마포구_관외사전투표","rate":1,"votes":{"absentee":{"rate":1,"count":286}}},
{"name":"공덕동","rate":0.72,"votes":{"early":{"rate":0.46,"count":15},"polling":{"rate":0.78,"count":104}}},
{"name":"아현동","rate":0.7,"votes":{"early":{"rate":0.72,"count":24},"polling":{"rate":0.7,"count":73}}},
{"name":"도화동","rate":0.66,"votes":{"early":{"rate":0.65,"count":21},"polling":{"rate":0.67,"count":54}}},
{"name":"용강동","rate":0.83,"votes":{"early":{"rate":0.64,"count":22},"polling":{"rate":0.91,"count":70}}},
{"name":"대흥동","rate":1.1,"votes":{"early":{"rate":1.19,"count":23},"polling":{"rate":1.07,"count":50}}},
{"name":"염리동","rate":0.67,"votes":{"early":{"rate":0.43,"count":12},"polling":{"rate":0.8,"count":44}}},
{"name":"신수동","rate":0.76,"votes":{"early":{"rate":0.62,"count":19},"polling":{"rate":0.82,"count":64}}},
{"name":"서강동","rate":0.82,"votes":{"early":{"rate":0.73,"count":25},"polling":{"rate":0.86,"count":76}}},
{"name":"서교동","rate":0.92,"votes":{"early":{"rate":1,"count":25},"polling":{"rate":0.89,"count":66}}},
{"name":"합정동","rate":0.87,"votes":{"early":{"rate":0.55,"count":15},"polling":{"rate":1.03,"count":55}}},
{"name":"망원1동","rate":0.77,"votes":{"early":{"rate":0.79,"count":27},"polling":{"rate":0.76,"count":46}}},
{"name":"망원2동","rate":0.8,"votes":{"early":{"rate":0.84,"count":26},"polling":{"rate":0.78,"count":47}}},
{"name":"연남동","rate":0.75,"votes":{"early":{"rate":0.91,"count":24},"polling":{"rate":0.66,"count":30}}},
{"name":"성산1동","rate":0.68,"votes":{"early":{"rate":0.48,"count":12},"polling":{"rate":0.77,"count":45}}},
{"name":"성산2동","rate":0.89,"votes":{"early":{"rate":0.89,"count":42},"polling":{"rate":0.89,"count":125}}},
{"name":"상암동","rate":0.89,"votes":{"early":{"rate":0.92,"count":34},"polling":{"rate":0.88,"count":95}}},
{"name":"양천구_관외사전투표","rate":0.93,"votes":{"absentee":{"rate":0.93,"count":266}}},
{"name":"목1동","rate":0.66,"votes":{"early":{"rate":0.79,"count":22},"polling":{"rate":0.63,"count":69}}},
{"name":"목2동","rate":0.9,"votes":{"early":{"rate":0.94,"count":42},"polling":{"rate":0.88,"count":86}}},
{"name":"목3동","rate":0.91,"votes":{"early":{"rate":0.85,"count":28},"polling":{"rate":0.94,"count":64}}},
{"name":"목4동","rate":0.69,"votes":{"early":{"rate":0.5,"count":20},"polling":{"rate":0.79,"count":62}}},
{"name":"목5동","rate":0.56,"votes":{"early":{"rate":0.46,"count":23},"polling":{"rate":0.59,"count":88}}},
{"name":"신월1동","rate":0.57,"votes":{"early":{"rate":0.29,"count":8},"polling":{"rate":0.7,"count":43}}},
{"name":"신월2동","rate":0.55,"votes":{"early":{"rate":0.35,"count":11},"polling":{"rate":0.64,"count":42}}},
{"name":"신월3동","rate":0.46,"votes":{"early":{"rate":0.39,"count":8},"polling":{"rate":0.5,"count":19}}},
{"name":"신월4동","rate":0.39,"votes":{"early":{"rate":0.3,"count":9},"polling":{"rate":0.44,"count":25}}},
{"name":"신월5동","rate":0.63,"votes":{"early":{"rate":0.35,"count":10},"polling":{"rate":0.83,"count":32}}},
{"name":"신월6동","rate":0.61,"votes":{"early":{"rate":0.67,"count":21},"polling":{"rate":0.57,"count":27}}},
{"name":"신월7동","rate":0.65,"votes":{"early":{"rate":0.57,"count":16},"polling":{"rate":0.69,"count":44}}},
{"name":"신정1동","rate":0.62,"votes":{"early":{"rate":0.73,"count":17},"polling":{"rate":0.58,"count":41}}},
{"name":"신정2동","rate":0.67,"votes":{"early":{"rate":0.61,"count":26},"polling":{"rate":0.72,"count":42}}},
{"name":"신정3동","rate":0.56,"votes":{"early":{"rate":0.53,"count":19},"polling":{"rate":0.57,"count":103}}},
{"name":"신정4동","rate":0.69,"votes":{"early":{"rate":0.61,"count":26},"polling":{"rate":0.72,"count":78}}},
{"name":"신정6동","rate":0.67,"votes":{"early":{"rate":0.9,"count":25},"polling":{"rate":0.61,"count":59}}},
{"name":"신정7동","rate":0.78,"votes":{"early":{"rate":0.67,"count":18},"polling":{"rate":0.81,"count":91}}},
{"name":"강서구_관외사전투표","rate":1.09,"votes":{"absentee":{"rate":1.09,"count":389}}},
{"name":"염창동","rate":0.8,"votes":{"early":{"rate":0.86,"count":51},"polling":{"rate":0.77,"count":115}}},
{"name":"등촌제1동","rate":0.97,"votes":{"early":{"rate":1.05,"count":44},"polling":{"rate":0.93,"count":74}}},
{"name":"등촌제2동","rate":0.73,"votes":{"early":{"rate":0.66,"count":22},"polling":{"rate":0.76,"count":48}}},
{"name":"등촌제3동","rate":0.69,"votes":{"early":{"rate":0.65,"count":27},"polling":{"rate":0.7,"count":79}}},
{"name":"화곡본동","rate":0.82,"votes":{"early":{"rate":0.81,"count":36},"polling":{"rate":0.83,"count":71}}},
{"name":"화곡제1동","rate":0.83,"votes":{"early":{"rate":0.62,"count":33},"polling":{"rate":0.91,"count":134}}},
{"name":"화곡제2동","rate":0.67,"votes":{"early":{"rate":0.54,"count":15},"polling":{"rate":0.74,"count":34}}},
{"name":"화곡제3동","rate":0.82,"votes":{"early":{"rate":0.96,"count":28},"polling":{"rate":0.77,"count":60}}},
{"name":"화곡제4동","rate":0.66,"votes":{"early":{"rate":0.37,"count":13},"polling":{"rate":0.86,"count":46}}},
{"name":"화곡제6동","rate":0.7,"votes":{"early":{"rate":0.55,"count":23},"polling":{"rate":0.78,"count":65}}},
{"name":"화곡제8동","rate":0.96,"votes":{"early":{"rate":1.04,"count":51},"polling":{"rate":0.89,"count":59}}},
{"name":"우장산동","rate":0.83,"votes":{"early":{"rate":0.96,"count":44},"polling":{"rate":0.79,"count":118}}},
{"name":"가양제1동","rate":0.89,"votes":{"early":{"rate":0.85,"count":29},"polling":{"rate":0.91,"count":106}}},
{"name":"가양제2동","rate":0.65,"votes":{"early":{"rate":0.63,"count":16},"polling":{"rate":0.66,"count":35}}},
{"name":"가양제3동","rate":0.62,"votes":{"early":{"rate":0.71,"count":19},"polling":{"rate":0.57,"count":30}}},
{"name":"발산제1동","rate":0.63,"votes":{"early":{"rate":0.43,"count":21},"polling":{"rate":0.71,"count":89}}},
{"name":"공항동","rate":0.93,"votes":{"early":{"rate":0.76,"count":26},"polling":{"rate":1,"count":95}}},
{"name":"방화제1동","rate":0.71,"votes":{"early":{"rate":0.51,"count":31},"polling":{"rate":0.79,"count":111}}},
{"name":"방화제2동","rate":0.99,"votes":{"early":{"rate":0.94,"count":35},"polling":{"rate":1.01,"count":77}}},
{"name":"방화제3동","rate":0.74,"votes":{"early":{"rate":0.84,"count":32},"polling":{"rate":0.69,"count":53}}},
{"name":"구로구_관외사전투표","rate":1.17,"votes":{"absentee":{"rate":1.17,"count":267}}},
{"name":"신도림동","rate":0.64,"votes":{"early":{"rate":0.65,"count":36},"polling":{"rate":0.64,"count":86}}},
{"name":"구로제1동","rate":0.88,"votes":{"early":{"rate":0.62,"count":26},"polling":{"rate":1.04,"count":68}}},
{"name":"구로제2동","rate":0.68,"votes":{"early":{"rate":0.23,"count":6},"polling":{"rate":0.85,"count":59}}},
{"name":"구로제3동","rate":1.28,"votes":{"early":{"rate":1.09,"count":41},"polling":{"rate":1.37,"count":101}}},
{"name":"구로제4동","rate":0.79,"votes":{"early":{"rate":0.46,"count":10},"polling":{"rate":0.91,"count":54}}},
{"name":"구로제5동","rate":0.85,"votes":{"early":{"rate":0.75,"count":26},"polling":{"rate":0.88,"count":95}}},
{"name":"가리봉동","rate":1.23,"votes":{"early":{"rate":1.17,"count":14},"polling":{"rate":1.27,"count":30}}},
{"name":"고척제1동","rate":0.81,"votes":{"early":{"rate":0.58,"count":27},"polling":{"rate":0.93,"count":86}}},
{"name":"고척제2동","rate":0.72,"votes":{"early":{"rate":0.77,"count":27},"polling":{"rate":0.7,"count":62}}},
{"name":"개봉제1동","rate":0.72,"votes":{"early":{"rate":0.38,"count":17},"polling":{"rate":0.85,"count":101}}},
{"name":"개봉제2동","rate":0.76,"votes":{"early":{"rate":0.84,"count":41},"polling":{"rate":0.73,"count":83}}},
{"name":"개봉제3동","rate":0.75,"votes":{"early":{"rate":0.47,"count":14},"polling":{"rate":0.88,"count":54}}},
{"name":"오류제1동","rate":0.8,"votes":{"early":{"rate":0.77,"count":31},"polling":{"rate":0.82,"count":63}}},
{"name":"오류제2동","rate":0.56,"votes":{"early":{"rate":0.55,"count":25},"polling":{"rate":0.57,"count":73}}},
{"name":"수궁동","rate":0.61,"votes":{"early":{"rate":0.79,"count":24},"polling":{"rate":0.55,"count":46}}},
{"name":"항동","rate":0.98,"votes":{"early":{"rate":0.56,"count":18},"polling":{"rate":1.25,"count":62}}},
{"name":"금천구_관외사전투표","rate":1.01,"votes":{"absentee":{"rate":1.01,"count":152}}},
{"name":"가산동","rate":1.53,"votes":{"early":{"rate":1.46,"count":51},"polling":{"rate":1.56,"count":125}}},
{"name":"독산제1동","rate":1.12,"votes":{"early":{"rate":1.63,"count":68},"polling":{"rate":1,"count":173}}},
{"name":"독산제2동","rate":0.86,"votes":{"early":{"rate":0.52,"count":13},"polling":{"rate":1.03,"count":51}}},
{"name":"독산제3동","rate":0.65,"votes":{"early":{"rate":0.33,"count":12},"polling":{"rate":0.81,"count":58}}},
{"name":"독산제4동","rate":0.72,"votes":{"early":{"rate":0.57,"count":16},"polling":{"rate":0.82,"count":34}}},
{"name":"시흥제1동","rate":0.85,"votes":{"early":{"rate":0.79,"count":34},"polling":{"rate":0.87,"count":87}}},
{"name":"시흥제2동","rate":0.5,"votes":{"early":{"rate":0.48,"count":15},"polling":{"rate":0.51,"count":37}}},
{"name":"시흥제3동","rate":0.66,"votes":{"early":{"rate":0.55,"count":11},"polling":{"rate":0.73,"count":25}}},
{"name":"시흥제4동","rate":0.74,"votes":{"early":{"rate":0.73,"count":21},"polling":{"rate":0.75,"count":46}}},
{"name":"시흥제5동","rate":0.8,"votes":{"early":{"rate":0.81,"count":29},"polling":{"rate":0.8,"count":40}}},
{"name":"영등포구_관외사전투표","rate":1.18,"votes":{"absentee":{"rate":1.18,"count":342}}},
{"name":"영등포본동","rate":0.82,"votes":{"early":{"rate":0.88,"count":25},"polling":{"rate":0.8,"count":61}}},
{"name":"영등포동","rate":1.29,"votes":{"early":{"rate":1.18,"count":41},"polling":{"rate":1.33,"count":133}}},
{"name":"여의동","rate":0.56,"votes":{"early":{"rate":0.55,"count":21},"polling":{"rate":0.56,"count":77}}},
{"name":"당산제1동","rate":1.01,"votes":{"early":{"rate":1.3,"count":35},"polling":{"rate":0.9,"count":71}}},
{"name":"당산제2동","rate":0.83,"votes":{"early":{"rate":1,"count":39},"polling":{"rate":0.79,"count":112}}},
{"name":"도림동","rate":1.05,"votes":{"early":{"rate":0.88,"count":25},"polling":{"rate":1.13,"count":66}}},
{"name":"문래동","rate":0.78,"votes":{"early":{"rate":0.62,"count":23},"polling":{"rate":0.83,"count":101}}},
{"name":"양평제1동","rate":1.1,"votes":{"early":{"rate":0.93,"count":31},"polling":{"rate":1.18,"count":76}}},
{"name":"양평제2동","rate":0.82,"votes":{"early":{"rate":0.89,"count":30},"polling":{"rate":0.8,"count":66}}},
{"name":"신길제1동","rate":0.82,"votes":{"early":{"rate":0.92,"count":21},"polling":{"rate":0.78,"count":51}}},
{"name":"신길제3동","rate":0.73,"votes":{"early":{"rate":0.84,"count":18},"polling":{"rate":0.69,"count":40}}},
{"name":"신길제4동","rate":0.8,"votes":{"early":{"rate":0.77,"count":11},"polling":{"rate":0.81,"count":36}}},
{"name":"신길제5동","rate":0.81,"votes":{"early":{"rate":0.54,"count":8},"polling":{"rate":0.93,"count":31}}},
{"name":"신길제6동","rate":0.85,"votes":{"early":{"rate":0.76,"count":23},"polling":{"rate":0.9,"count":56}}},
{"name":"신길제7동","rate":0.79,"votes":{"early":{"rate":0.73,"count":15},"polling":{"rate":0.81,"count":58}}},
{"name":"대림제1동","rate":0.76,"votes":{"early":{"rate":0.84,"count":21},"polling":{"rate":0.72,"count":31}}},
{"name":"대림제2동","rate":0.88,"votes":{"early":{"rate":0.8,"count":15},"polling":{"rate":0.92,"count":36}}},
{"name":"대림제3동","rate":0.7,"votes":{"early":{"rate":0.66,"count":18},"polling":{"rate":0.71,"count":54}}},
{"name":"동작구_관외사전투표","rate":1.49,"votes":{"absentee":{"rate":1.49,"count":468}}},
{"name":"노량진제1동","rate":1.33,"votes":{"early":{"rate":1.86,"count":48},"polling":{"rate":1.22,"count":157}}},
{"name":"노량진제2동","rate":1.51,"votes":{"early":{"rate":1.63,"count":31},"polling":{"rate":1.42,"count":34}}},
{"name":"상도제1동","rate":1.32,"votes":{"early":{"rate":1.49,"count":94},"polling":{"rate":1.26,"count":202}}},
{"name":"상도제2동","rate":1.26,"votes":{"early":{"rate":1.07,"count":43},"polling":{"rate":1.35,"count":125}}},
{"name":"상도제3동","rate":1.28,"votes":{"early":{"rate":1.1,"count":55},"polling":{"rate":1.39,"count":107}}},
{"name":"상도제4동","rate":1.24,"votes":{"early":{"rate":1.28,"count":59},"polling":{"rate":1.22,"count":105}}},
{"name":"흑석동","rate":0.91,"votes":{"early":{"rate":1.02,"count":44},"polling":{"rate":0.86,"count":94}}},
{"name":"사당제1동","rate":1.33,"votes":{"early":{"rate":1.34,"count":36},"polling":{"rate":1.33,"count":102}}},
{"name":"사당제2동","rate":0.99,"votes":{"early":{"rate":0.94,"count":48},"polling":{"rate":1.02,"count":102}}},
{"name":"사당제3동","rate":0.84,"votes":{"early":{"rate":0.69,"count":21},"polling":{"rate":0.89,"count":76}}},
{"name":"사당제4동","rate":0.92,"votes":{"early":{"rate":0.96,"count":24},"polling":{"rate":0.9,"count":42}}},
{"name":"사당제5동","rate":1.08,"votes":{"early":{"rate":1.18,"count":28},"polling":{"rate":1.04,"count":53}}},
{"name":"대방동","rate":1.37,"votes":{"early":{"rate":1.44,"count":60},"polling":{"rate":1.34,"count":153}}},
{"name":"신대방제1동","rate":1.17,"votes":{"early":{"rate":1.19,"count":36},"polling":{"rate":1.16,"count":98}}},
{"name":"신대방제2동","rate":1.03,"votes":{"early":{"rate":0.83,"count":26},"polling":{"rate":1.11,"count":84}}},
{"name":"관악구_관외사전투표","rate":1.69,"votes":{"absentee":{"rate":1.69,"count":542}}},
{"name":"보라매동","rate":1.18,"votes":{"early":{"rate":1.63,"count":51},"polling":{"rate":1,"count":78}}},
{"name":"은천동","rate":1.05,"votes":{"early":{"rate":1.02,"count":49},"polling":{"rate":1.06,"count":115}}},
{"name":"성현동","rate":0.98,"votes":{"early":{"rate":0.96,"count":37},"polling":{"rate":0.99,"count":111}}},
{"name":"중앙동","rate":1.79,"votes":{"early":{"rate":1.78,"count":50},"polling":{"rate":1.8,"count":83}}},
{"name":"청림동","rate":0.88,"votes":{"early":{"rate":0.74,"count":18},"polling":{"rate":0.94,"count":52}}},
{"name":"행운동","rate":1.5,"votes":{"early":{"rate":1.22,"count":45},"polling":{"rate":1.6,"count":159}}},
{"name":"청룡동","rate":1.38,"votes":{"early":{"rate":1.31,"count":57},"polling":{"rate":1.41,"count":174}}},
{"name":"낙성대동","rate":1.85,"votes":{"early":{"rate":1.4,"count":33},"polling":{"rate":2.03,"count":119}}},
{"name":"인헌동","rate":1.53,"votes":{"early":{"rate":1.6,"count":88},"polling":{"rate":1.49,"count":123}}},
{"name":"남현동","rate":1.14,"votes":{"early":{"rate":1.29,"count":39},"polling":{"rate":1.07,"count":62}}},
{"name":"신림동","rate":1.77,"votes":{"early":{"rate":1.87,"count":54},"polling":{"rate":1.73,"count":109}}},
{"name":"신사동","rate":1.28,"votes":{"early":{"rate":1.41,"count":55},"polling":{"rate":1.2,"count":77}}},
{"name":"조원동","rate":1.14,"votes":{"early":{"rate":1.04,"count":33},"polling":{"rate":1.19,"count":74}}},
{"name":"미성동","rate":1.02,"votes":{"early":{"rate":0.99,"count":41},"polling":{"rate":1.03,"count":99}}},
{"name":"난곡동","rate":0.99,"votes":{"early":{"rate":0.8,"count":28},"polling":{"rate":1.07,"count":81}}},
{"name":"난향동","rate":0.72,"votes":{"early":{"rate":0.58,"count":15},"polling":{"rate":0.8,"count":38}}},
{"name":"서원동","rate":1.45,"votes":{"early":{"rate":1.81,"count":51},"polling":{"rate":1.3,"count":89}}},
{"name":"신원동","rate":1.11,"votes":{"early":{"rate":0.91,"count":29},"polling":{"rate":1.24,"count":61}}},
{"name":"서림동","rate":1.41,"votes":{"early":{"rate":1.3,"count":27},"polling":{"rate":1.45,"count":108}}},
{"name":"삼성동","rate":0.88,"votes":{"early":{"rate":0.95,"count":34},"polling":{"rate":0.85,"count":61}}},
{"name":"대학동","rate":2.02,"votes":{"early":{"rate":1.99,"count":78},"polling":{"rate":2.04,"count":148}}},
{"name":"서초구_관외사전투표","rate":1.21,"votes":{"absentee":{"rate":1.21,"count":285}}},
{"name":"서초1동","rate":1.02,"votes":{"early":{"rate":1.42,"count":38},"polling":{"rate":0.88,"count":64}}},
{"name":"서초2동","rate":0.85,"votes":{"early":{"rate":1.12,"count":32},"polling":{"rate":0.77,"count":71}}},
{"name":"서초3동","rate":0.87,"votes":{"early":{"rate":1.16,"count":40},"polling":{"rate":0.78,"count":96}}},
{"name":"서초4동","rate":0.66,"votes":{"early":{"rate":0.96,"count":22},"polling":{"rate":0.61,"count":73}}},
{"name":"잠원동","rate":0.61,"votes":{"early":{"rate":0.88,"count":32},"polling":{"rate":0.54,"count":75}}},
{"name":"반포본동","rate":0.71,"votes":{"early":{"rate":0,"count":0},"polling":{"rate":1.92,"count":1}}},
{"name":"반포1동","rate":0.56,"votes":{"early":{"rate":0.69,"count":23},"polling":{"rate":0.52,"count":60}}},
{"name":"반포2동","rate":0.57,"votes":{"early":{"rate":0.83,"count":25},"polling":{"rate":0.5,"count":53}}},
{"name":"반포3동","rate":0.69,"votes":{"early":{"rate":0.88,"count":27},"polling":{"rate":0.62,"count":57}}},
{"name":"반포4동","rate":0.67,"votes":{"early":{"rate":0.56,"count":10},"polling":{"rate":0.7,"count":47}}},
{"name":"방배본동","rate":0.54,"votes":{"early":{"rate":0.65,"count":18},"polling":{"rate":0.5,"count":38}}},
{"name":"방배1동","rate":0.88,"votes":{"early":{"rate":0.93,"count":22},"polling":{"rate":0.86,"count":53}}},
{"name":"방배2동","rate":0.86,"votes":{"early":{"rate":0.71,"count":18},"polling":{"rate":0.92,"count":64}}},
{"name":"방배3동","rate":0.7,"votes":{"early":{"rate":0.73,"count":16},"polling":{"rate":0.69,"count":41}}},
{"name":"방배4동","rate":0.68,"votes":{"early":{"rate":0.59,"count":20},"polling":{"rate":0.72,"count":69}}},
{"name":"양재1동","rate":0.73,"votes":{"early":{"rate":0.69,"count":25},"polling":{"rate":0.74,"count":121}}},
{"name":"양재2동","rate":1.09,"votes":{"early":{"rate":0.99,"count":37},"polling":{"rate":1.14,"count":81}}},
{"name":"내곡동","rate":0.49,"votes":{"early":{"rate":0.48,"count":13},"polling":{"rate":0.49,"count":30}}},
{"name":"강남구_관외사전투표","rate":1.14,"votes":{"absentee":{"rate":1.14,"count":375}}},
{"name":"신사동","rate":0.44,"votes":{"early":{"rate":0.52,"count":8},"polling":{"rate":0.42,"count":25}}},
{"name":"논현1동","rate":0.78,"votes":{"early":{"rate":0.54,"count":10},"polling":{"rate":0.86,"count":51}}},
{"name":"논현2동","rate":0.59,"votes":{"early":{"rate":0.7,"count":11},"polling":{"rate":0.57,"count":38}}},
{"name":"압구정동","rate":0.54,"votes":{"early":{"rate":0.45,"count":9},"polling":{"rate":0.56,"count":60}}},
{"name":"청담동","rate":0.63,"votes":{"early":{"rate":0.6,"count":11},"polling":{"rate":0.63,"count":64}}},
{"name":"삼성1동","rate":0.63,"votes":{"early":{"rate":0.7,"count":10},"polling":{"rate":0.6,"count":29}}},
{"name":"삼성2동","rate":0.73,"votes":{"early":{"rate":1.12,"count":32},"polling":{"rate":0.63,"count":70}}},
{"name":"대치1동","rate":0.83,"votes":{"early":{"rate":1.07,"count":23},"polling":{"rate":0.77,"count":69}}},
{"name":"대치2동","rate":0.8,"votes":{"early":{"rate":1.02,"count":32},"polling":{"rate":0.75,"count":110}}},
{"name":"대치4동","rate":1.02,"votes":{"early":{"rate":1.43,"count":34},"polling":{"rate":0.83,"count":44}}},
{"name":"역삼1동","rate":1.22,"votes":{"early":{"rate":1.42,"count":41},"polling":{"rate":1.16,"count":114}}},
{"name":"역삼2동","rate":0.84,"votes":{"early":{"rate":1.15,"count":45},"polling":{"rate":0.73,"count":88}}},
{"name":"도곡1동","rate":0.89,"votes":{"early":{"rate":0.99,"count":27},"polling":{"rate":0.85,"count":66}}},
{"name":"도곡2동","rate":0.72,"votes":{"early":{"rate":1.15,"count":21},"polling":{"rate":0.66,"count":85}}},
{"name":"개포1동","rate":0.74,"votes":{"early":{"rate":0.93,"count":33},"polling":{"rate":0.68,"count":71}}},
{"name":"개포2동","rate":0.82,"votes":{"early":{"rate":0.83,"count":23},"polling":{"rate":0.81,"count":124}}},
{"name":"개포3동","rate":0.84,"votes":{"early":{"rate":0.98,"count":26},"polling":{"rate":0.78,"count":46}}},
{"name":"개포4동","rate":0.77,"votes":{"early":{"rate":0.82,"count":26},"polling":{"rate":0.75,"count":61}}},
{"name":"일원본동","rate":0.84,"votes":{"early":{"rate":0.77,"count":27},"polling":{"rate":0.88,"count":70}}},
{"name":"일원1동","rate":0.92,"votes":{"early":{"rate":0.72,"count":12},"polling":{"rate":0.99,"count":51}}},
{"name":"수서동","rate":0.69,"votes":{"early":{"rate":1.05,"count":25},"polling":{"rate":0.54,"count":30}}},
{"name":"세곡동","rate":0.85,"votes":{"early":{"rate":0.47,"count":22},"polling":{"rate":0.95,"count":166}}},
{"name":"송파구_관외사전투표","rate":1.11,"votes":{"absentee":{"rate":1.11,"count":452}}},
{"name":"풍납1동","rate":0.61,"votes":{"early":{"rate":0.54,"count":13},"polling":{"rate":0.66,"count":23}}},
{"name":"풍납2동","rate":0.88,"votes":{"early":{"rate":1.03,"count":44},"polling":{"rate":0.79,"count":60}}},
{"name":"거여1동","rate":0.6,"votes":{"early":{"rate":0.26,"count":5},"polling":{"rate":0.76,"count":31}}},
{"name":"거여2동","rate":0.75,"votes":{"early":{"rate":0.71,"count":24},"polling":{"rate":0.77,"count":66}}},
{"name":"마천1동","rate":0.58,"votes":{"early":{"rate":0.64,"count":14},"polling":{"rate":0.55,"count":30}}},
{"name":"마천2동","rate":0.75,"votes":{"early":{"rate":0.66,"count":21},"polling":{"rate":0.79,"count":47}}},
{"name":"방이1동","rate":0.76,"votes":{"early":{"rate":0.84,"count":21},"polling":{"rate":0.73,"count":39}}},
{"name":"방이2동","rate":0.91,"votes":{"early":{"rate":0.88,"count":26},"polling":{"rate":0.92,"count":85}}},
{"name":"오륜동","rate":0.67,"votes":{"early":{"rate":0.63,"count":18},"polling":{"rate":0.68,"count":45}}},
{"name":"오금동","rate":0.64,"votes":{"early":{"rate":0.49,"count":21},"polling":{"rate":0.69,"count":98}}},
{"name":"송파1동","rate":0.9,"votes":{"early":{"rate":1.02,"count":39},"polling":{"rate":0.85,"count":66}}},
{"name":"송파2동","rate":0.76,"votes":{"early":{"rate":0.85,"count":26},"polling":{"rate":0.73,"count":51}}},
{"name":"석촌동","rate":0.88,"votes":{"early":{"rate":0.86,"count":37},"polling":{"rate":0.89,"count":87}}},
{"name":"삼전동","rate":0.84,"votes":{"early":{"rate":0.83,"count":36},"polling":{"rate":0.85,"count":78}}},
{"name":"가락본동","rate":0.91,"votes":{"early":{"rate":1.02,"count":33},"polling":{"rate":0.87,"count":74}}},
{"name":"가락1동","rate":0.69,"votes":{"early":{"rate":0.95,"count":38},"polling":{"rate":0.59,"count":59}}},
{"name":"가락2동","rate":0.8,"votes":{"early":{"rate":1,"count":31},"polling":{"rate":0.75,"count":80}}},
{"name":"문정1동","rate":0.95,"votes":{"early":{"rate":1.35,"count":38},"polling":{"rate":0.8,"count":57}}},
{"name":"문정2동","rate":0.79,"votes":{"early":{"rate":0.71,"count":16},"polling":{"rate":0.8,"count":98}}},
{"name":"장지동","rate":0.83,"votes":{"early":{"rate":0.74,"count":33},"polling":{"rate":0.87,"count":99}}},
{"name":"잠실본동","rate":0.84,"votes":{"early":{"rate":0.83,"count":34},"polling":{"rate":0.84,"count":72}}},
{"name":"잠실2동","rate":0.67,"votes":{"early":{"rate":0.56,"count":24},"polling":{"rate":0.72,"count":91}}},
{"name":"잠실3동","rate":0.42,"votes":{"early":{"rate":0.39,"count":11},"polling":{"rate":0.43,"count":60}}},
{"name":"잠실4동","rate":0.77,"votes":{"early":{"rate":0.75,"count":31},"polling":{"rate":0.78,"count":98}}},
{"name":"잠실6동","rate":0.48,"votes":{"early":{"rate":0.75,"count":22},"polling":{"rate":0.35,"count":21}}},
{"name":"잠실7동","rate":0.75,"votes":{"early":{"rate":0.94,"count":15},"polling":{"rate":0.68,"count":28}}},
{"name":"위례동","rate":0.71,"votes":{"early":{"rate":0.63,"count":30},"polling":{"rate":0.73,"count":112}}},
{"name":"강동구_관외사전투표","rate":1.23,"votes":{"absentee":{"rate":1.23,"count":374}}},
{"name":"강일동","rate":0.85,"votes":{"early":{"rate":0.78,"count":40},"polling":{"rate":0.88,"count":109}}},
{"name":"상일제1동","rate":0.92,"votes":{"early":{"rate":1.05,"count":50},"polling":{"rate":0.87,"count":127}}},
{"name":"상일제2동","rate":0.9,"votes":{"early":{"rate":0.56,"count":11},"polling":{"rate":1.04,"count":47}}},
{"name":"명일제1동","rate":0.84,"votes":{"early":{"rate":1.03,"count":41},"polling":{"rate":0.75,"count":67}}},
{"name":"명일제2동","rate":0.84,"votes":{"early":{"rate":0.93,"count":21},"polling":{"rate":0.81,"count":54}}},
{"name":"고덕제1동","rate":0.65,"votes":{"early":{"rate":0.78,"count":28},"polling":{"rate":0.59,"count":47}}},
{"name":"고덕제2동","rate":0.67,"votes":{"early":{"rate":0.86,"count":26},"polling":{"rate":0.6,"count":57}}},
{"name":"암사제1동","rate":0.8,"votes":{"early":{"rate":0.54,"count":23},"polling":{"rate":0.9,"count":97}}},
{"name":"암사제2동","rate":0.94,"votes":{"early":{"rate":1.16,"count":46},"polling":{"rate":0.76,"count":37}}},
{"name":"암사제3동","rate":0.83,"votes":{"early":{"rate":0.83,"count":26},"polling":{"rate":0.83,"count":54}}},
{"name":"천호제1동","rate":0.84,"votes":{"early":{"rate":0.63,"count":22},"polling":{"rate":0.93,"count":76}}},
{"name":"천호제2동","rate":0.9,"votes":{"early":{"rate":0.81,"count":38},"polling":{"rate":0.93,"count":116}}},
{"name":"천호제3동","rate":0.95,"votes":{"early":{"rate":0.88,"count":28},"polling":{"rate":0.98,"count":93}}},
{"name":"성내제1동","rate":0.8,"votes":{"early":{"rate":0.7,"count":23},"polling":{"rate":0.86,"count":56}}},
{"name":"성내제2동","rate":1.15,"votes":{"early":{"rate":1.09,"count":43},"polling":{"rate":1.18,"count":95}}},
{"name":"성내제3동","rate":0.89,"votes":{"early":{"rate":0.92,"count":37},"polling":{"rate":0.88,"count":63}}},
{"name":"길동","rate":0.82,"votes":{"early":{"rate":0.88,"count":54},"polling":{"rate":0.8,"count":132}}},
{"name":"둔촌제1동","rate":0.68,"votes":{"early":{"rate":0.68,"count":37},"polling":{"rate":0.69,"count":89}}},
{"name":"둔촌제2동","rate":0.87,"votes":{"early":{"rate":0.86,"count":31},"polling":{"rate":0.88,"count":83}}}
] },

  // [  2] 광역단체장  | 정이한 | 부산광역시장
  { id: 2, voteRate: 1.56, totalVotes: 27418, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"중구_관외사전투표","rate":1.75,"votes":{"absentee":{"rate":1.75,"count":43}}},
{"name":"중앙동","rate":2.09,"votes":{"early":{"rate":1.34,"count":5},"polling":{"rate":2.39,"count":22}}},
{"name":"동광동","rate":1.75,"votes":{"early":{"rate":0.85,"count":3},"polling":{"rate":2.23,"count":15}}},
{"name":"대청동","rate":1.35,"votes":{"early":{"rate":0.74,"count":6},"polling":{"rate":1.61,"count":30}}},
{"name":"보수동","rate":1.66,"votes":{"early":{"rate":1.5,"count":20},"polling":{"rate":1.72,"count":58}}},
{"name":"부평동","rate":1.51,"votes":{"early":{"rate":2.12,"count":16},"polling":{"rate":1.19,"count":17}}},
{"name":"광복동","rate":1.21,"votes":{"early":{"rate":1.14,"count":2},"polling":{"rate":1.25,"count":4}}},
{"name":"남포동","rate":1.49,"votes":{"early":{"rate":0.76,"count":1},"polling":{"rate":1.84,"count":5}}},
{"name":"영주제1동","rate":2.3,"votes":{"early":{"rate":1.56,"count":9},"polling":{"rate":2.66,"count":32}}},
{"name":"영주제2동","rate":1.59,"votes":{"early":{"rate":1.17,"count":8},"polling":{"rate":1.7,"count":42}}},
{"name":"서구_관외사전투표","rate":1.82,"votes":{"absentee":{"rate":1.82,"count":95}}},
{"name":"동대신제1동","rate":1.52,"votes":{"early":{"rate":1.09,"count":9},"polling":{"rate":1.71,"count":32}}},
{"name":"동대신제2동","rate":1.09,"votes":{"early":{"rate":0.78,"count":6},"polling":{"rate":1.2,"count":26}}},
{"name":"동대신제3동","rate":1.69,"votes":{"early":{"rate":1.63,"count":23},"polling":{"rate":1.72,"count":42}}},
{"name":"서대신제1동","rate":1.59,"votes":{"early":{"rate":1.23,"count":26},"polling":{"rate":1.74,"count":89}}},
{"name":"서대신제3동","rate":1.35,"votes":{"early":{"rate":0.99,"count":13},"polling":{"rate":1.56,"count":35}}},
{"name":"서대신제4동","rate":1.82,"votes":{"early":{"rate":0.99,"count":13},"polling":{"rate":2.29,"count":54}}},
{"name":"부민동","rate":2.23,"votes":{"early":{"rate":2.29,"count":28},"polling":{"rate":2.2,"count":52}}},
{"name":"아미동","rate":1.99,"votes":{"early":{"rate":1.61,"count":11},"polling":{"rate":2.11,"count":43}}},
{"name":"초장동","rate":1.35,"votes":{"early":{"rate":0.74,"count":4},"polling":{"rate":1.66,"count":17}}},
{"name":"충무동","rate":1.17,"votes":{"early":{"rate":1.06,"count":17},"polling":{"rate":1.23,"count":37}}},
{"name":"남부민제1동","rate":1.11,"votes":{"early":{"rate":1.03,"count":7},"polling":{"rate":1.14,"count":17}}},
{"name":"남부민제2동","rate":1.3,"votes":{"early":{"rate":0.85,"count":8},"polling":{"rate":1.46,"count":38}}},
{"name":"암남동","rate":1.61,"votes":{"early":{"rate":1.63,"count":34},"polling":{"rate":1.6,"count":95}}},
{"name":"동구_관외사전투표","rate":2.01,"votes":{"absentee":{"rate":2.01,"count":94}}},
{"name":"초량제1동","rate":1.62,"votes":{"early":{"rate":1.58,"count":12},"polling":{"rate":1.65,"count":23}}},
{"name":"초량제2동","rate":1.09,"votes":{"early":{"rate":0.53,"count":5},"polling":{"rate":1.43,"count":22}}},
{"name":"초량제3동","rate":1.41,"votes":{"early":{"rate":0.97,"count":21},"polling":{"rate":1.65,"count":65}}},
{"name":"초량제6동","rate":1.36,"votes":{"early":{"rate":0.9,"count":8},"polling":{"rate":1.62,"count":26}}},
{"name":"수정제1동","rate":1.58,"votes":{"early":{"rate":1.55,"count":15},"polling":{"rate":1.62,"count":19}}},
{"name":"수정제2동","rate":1.42,"votes":{"early":{"rate":1.62,"count":28},"polling":{"rate":1.29,"count":37}}},
{"name":"수정제4동","rate":1.67,"votes":{"early":{"rate":2.05,"count":12},"polling":{"rate":1.45,"count":15}}},
{"name":"수정제5동","rate":1.36,"votes":{"early":{"rate":0.98,"count":9},"polling":{"rate":1.62,"count":22}}},
{"name":"좌천동","rate":1.51,"votes":{"early":{"rate":1.18,"count":21},"polling":{"rate":1.69,"count":59}}},
{"name":"범일제1동","rate":1.59,"votes":{"early":{"rate":1.66,"count":21},"polling":{"rate":1.56,"count":58}}},
{"name":"범일제2동","rate":1.1,"votes":{"early":{"rate":0.98,"count":13},"polling":{"rate":1.18,"count":28}}},
{"name":"범일제5동","rate":1.6,"votes":{"early":{"rate":2.23,"count":18},"polling":{"rate":1.42,"count":41}}},
{"name":"영도구_관외사전투표","rate":1.69,"votes":{"absentee":{"rate":1.69,"count":81}}},
{"name":"남항동","rate":1.43,"votes":{"early":{"rate":1.52,"count":14},"polling":{"rate":1.41,"count":47}}},
{"name":"영선제1동","rate":1.97,"votes":{"early":{"rate":1.7,"count":13},"polling":{"rate":2.17,"count":23}}},
{"name":"영선제2동","rate":1.41,"votes":{"early":{"rate":1.39,"count":35},"polling":{"rate":1.43,"count":34}}},
{"name":"신선동","rate":1.19,"votes":{"early":{"rate":1.12,"count":10},"polling":{"rate":1.22,"count":23}}},
{"name":"봉래제1동","rate":1.4,"votes":{"early":{"rate":0.99,"count":16},"polling":{"rate":1.72,"count":35}}},
{"name":"봉래제2동","rate":1.33,"votes":{"early":{"rate":0.54,"count":6},"polling":{"rate":1.71,"count":40}}},
{"name":"청학제1동","rate":1.5,"votes":{"early":{"rate":0.9,"count":6},"polling":{"rate":1.74,"count":28}}},
{"name":"청학제2동","rate":1.48,"votes":{"early":{"rate":1.21,"count":24},"polling":{"rate":1.59,"count":83}}},
{"name":"동삼제1동","rate":1.56,"votes":{"early":{"rate":1.37,"count":56},"polling":{"rate":1.65,"count":139}}},
{"name":"동삼제2동","rate":1.65,"votes":{"early":{"rate":1.69,"count":21},"polling":{"rate":1.61,"count":23}}},
{"name":"동삼제3동","rate":1.54,"votes":{"early":{"rate":1.58,"count":27},"polling":{"rate":1.52,"count":41}}},
{"name":"부산진구_관외사전투표","rate":2.27,"votes":{"absentee":{"rate":2.27,"count":497}}},
{"name":"부전제1동","rate":1.84,"votes":{"early":{"rate":0.79,"count":12},"polling":{"rate":2.24,"count":91}}},
{"name":"부전제2동","rate":2.28,"votes":{"early":{"rate":2.87,"count":26},"polling":{"rate":2.13,"count":80}}},
{"name":"연지동","rate":1.63,"votes":{"early":{"rate":1.38,"count":45},"polling":{"rate":1.72,"count":164}}},
{"name":"초읍동","rate":1.64,"votes":{"early":{"rate":1.3,"count":40},"polling":{"rate":1.77,"count":141}}},
{"name":"양정제1동","rate":1.77,"votes":{"early":{"rate":1.65,"count":50},"polling":{"rate":1.83,"count":132}}},
{"name":"양정제2동","rate":1.87,"votes":{"early":{"rate":1.6,"count":27},"polling":{"rate":1.95,"count":125}}},
{"name":"전포제1동","rate":2.41,"votes":{"early":{"rate":1.69,"count":41},"polling":{"rate":2.69,"count":166}}},
{"name":"전포제2동","rate":1.56,"votes":{"early":{"rate":0.96,"count":24},"polling":{"rate":1.75,"count":138}}},
{"name":"부암제1동","rate":1.87,"votes":{"early":{"rate":1.06,"count":27},"polling":{"rate":2.13,"count":168}}},
{"name":"부암제3동","rate":1.58,"votes":{"early":{"rate":1.44,"count":46},"polling":{"rate":1.63,"count":138}}},
{"name":"당감제1동","rate":1.6,"votes":{"early":{"rate":1.29,"count":32},"polling":{"rate":1.7,"count":132}}},
{"name":"당감제2동","rate":1.91,"votes":{"early":{"rate":1.54,"count":21},"polling":{"rate":2.02,"count":90}}},
{"name":"당감제4동","rate":1.62,"votes":{"early":{"rate":1.15,"count":18},"polling":{"rate":1.84,"count":61}}},
{"name":"가야제1동","rate":1.88,"votes":{"early":{"rate":1.6,"count":36},"polling":{"rate":2,"count":102}}},
{"name":"가야제2동","rate":1.66,"votes":{"early":{"rate":1.86,"count":45},"polling":{"rate":1.59,"count":103}}},
{"name":"개금제1동","rate":2.19,"votes":{"early":{"rate":2.22,"count":56},"polling":{"rate":2.18,"count":128}}},
{"name":"개금제2동","rate":1.8,"votes":{"early":{"rate":1.54,"count":24},"polling":{"rate":1.92,"count":63}}},
{"name":"개금제3동","rate":1.6,"votes":{"early":{"rate":1.52,"count":46},"polling":{"rate":1.62,"count":164}}},
{"name":"범천제1동","rate":2.46,"votes":{"early":{"rate":2.07,"count":29},"polling":{"rate":2.61,"count":93}}},
{"name":"범천제2동","rate":1.7,"votes":{"early":{"rate":1.24,"count":31},"polling":{"rate":1.86,"count":134}}},
{"name":"동래구_관외사전투표","rate":2.09,"votes":{"absentee":{"rate":2.09,"count":320}}},
{"name":"수민동","rate":1.42,"votes":{"early":{"rate":1.2,"count":45},"polling":{"rate":1.5,"count":156}}},
{"name":"복산동","rate":1.21,"votes":{"early":{"rate":1.32,"count":18},"polling":{"rate":1.16,"count":35}}},
{"name":"명륜동","rate":1.35,"votes":{"early":{"rate":1.41,"count":45},"polling":{"rate":1.33,"count":113}}},
{"name":"온천제1동","rate":1.69,"votes":{"early":{"rate":1.17,"count":39},"polling":{"rate":1.84,"count":218}}},
{"name":"온천제2동","rate":1.62,"votes":{"early":{"rate":1.63,"count":50},"polling":{"rate":1.62,"count":142}}},
{"name":"온천제3동","rate":1.65,"votes":{"early":{"rate":1.27,"count":46},"polling":{"rate":1.76,"count":220}}},
{"name":"사직제1동","rate":1.68,"votes":{"early":{"rate":1.38,"count":26},"polling":{"rate":1.83,"count":70}}},
{"name":"사직제2동","rate":1.81,"votes":{"early":{"rate":1.58,"count":53},"polling":{"rate":1.91,"count":158}}},
{"name":"사직제3동","rate":1.56,"votes":{"early":{"rate":1.16,"count":23},"polling":{"rate":1.71,"count":94}}},
{"name":"안락제1동","rate":1.29,"votes":{"early":{"rate":1.38,"count":29},"polling":{"rate":1.25,"count":60}}},
{"name":"안락제2동","rate":1.31,"votes":{"early":{"rate":1.23,"count":32},"polling":{"rate":1.33,"count":136}}},
{"name":"명장제1동","rate":1.5,"votes":{"early":{"rate":1.37,"count":25},"polling":{"rate":1.55,"count":77}}},
{"name":"명장제2동","rate":1.31,"votes":{"early":{"rate":1.01,"count":17},"polling":{"rate":1.42,"count":66}}},
{"name":"남구_관외사전투표","rate":2.34,"votes":{"absentee":{"rate":2.34,"count":325}}},
{"name":"대연제1동","rate":1.68,"votes":{"early":{"rate":1.09,"count":24},"polling":{"rate":1.96,"count":91}}},
{"name":"대연제3동","rate":1.64,"votes":{"early":{"rate":1.6,"count":57},"polling":{"rate":1.65,"count":213}}},
{"name":"대연제4동","rate":0.96,"votes":{"early":{"rate":0.45,"count":7},"polling":{"rate":1.12,"count":55}}},
{"name":"대연제5동","rate":1.63,"votes":{"early":{"rate":1.29,"count":32},"polling":{"rate":1.79,"count":93}}},
{"name":"대연제6동","rate":1.6,"votes":{"early":{"rate":1.23,"count":31},"polling":{"rate":1.78,"count":96}}},
{"name":"용호제1동","rate":1.44,"votes":{"early":{"rate":1.23,"count":29},"polling":{"rate":1.47,"count":236}}},
{"name":"용호제2동","rate":1.24,"votes":{"early":{"rate":1.3,"count":30},"polling":{"rate":1.22,"count":87}}},
{"name":"용호제3동","rate":1.22,"votes":{"early":{"rate":1.08,"count":41},"polling":{"rate":1.37,"count":49}}},
{"name":"용호제4동","rate":1.43,"votes":{"early":{"rate":1.37,"count":23},"polling":{"rate":1.46,"count":35}}},
{"name":"용당동","rate":1.16,"votes":{"early":{"rate":1.2,"count":11},"polling":{"rate":1.15,"count":33}}},
{"name":"감만제1동","rate":1.2,"votes":{"early":{"rate":0.87,"count":9},"polling":{"rate":1.32,"count":37}}},
{"name":"감만제2동","rate":1.55,"votes":{"early":{"rate":1.53,"count":18},"polling":{"rate":1.57,"count":32}}},
{"name":"우암동","rate":1.15,"votes":{"early":{"rate":0.51,"count":10},"polling":{"rate":1.35,"count":88}}},
{"name":"문현제1동","rate":1.54,"votes":{"early":{"rate":1.53,"count":31},"polling":{"rate":1.55,"count":51}}},
{"name":"문현제2동","rate":1.91,"votes":{"early":{"rate":1.69,"count":19},"polling":{"rate":2.01,"count":50}}},
{"name":"문현제3동","rate":1.65,"votes":{"early":{"rate":1.9,"count":43},"polling":{"rate":1.55,"count":85}}},
{"name":"문현제4동","rate":1.81,"votes":{"early":{"rate":1.34,"count":18},"polling":{"rate":2.02,"count":61}}},
{"name":"북구_관외사전투표","rate":1.77,"votes":{"absentee":{"rate":1.77,"count":243}}},
{"name":"구포제1동","rate":1.18,"votes":{"early":{"rate":1.02,"count":30},"polling":{"rate":1.27,"count":74}}},
{"name":"구포제2동","rate":1.26,"votes":{"early":{"rate":1.5,"count":46},"polling":{"rate":1.18,"count":109}}},
{"name":"구포제3동","rate":1.16,"votes":{"early":{"rate":1.08,"count":35},"polling":{"rate":1.2,"count":69}}},
{"name":"금곡동","rate":1.51,"votes":{"early":{"rate":1.54,"count":59},"polling":{"rate":1.51,"count":225}}},
{"name":"화명제1동","rate":1.37,"votes":{"early":{"rate":1.45,"count":61},"polling":{"rate":1.35,"count":217}}},
{"name":"화명제2동","rate":1.21,"votes":{"early":{"rate":1.15,"count":27},"polling":{"rate":1.23,"count":76}}},
{"name":"화명제3동","rate":1.56,"votes":{"early":{"rate":1.21,"count":49},"polling":{"rate":1.68,"count":195}}},
{"name":"덕천제1동","rate":1.09,"votes":{"early":{"rate":0.66,"count":15},"polling":{"rate":1.26,"count":73}}},
{"name":"덕천제2동","rate":1.22,"votes":{"early":{"rate":0.97,"count":18},"polling":{"rate":1.33,"count":54}}},
{"name":"덕천제3동","rate":1.32,"votes":{"early":{"rate":0.74,"count":12},"polling":{"rate":1.61,"count":54}}},
{"name":"만덕제1동","rate":0.98,"votes":{"early":{"rate":0.7,"count":19},"polling":{"rate":1.1,"count":67}}},
{"name":"만덕제2동","rate":1.07,"votes":{"early":{"rate":0.89,"count":37},"polling":{"rate":1.15,"count":121}}},
{"name":"만덕제3동","rate":1.1,"votes":{"early":{"rate":0.87,"count":30},"polling":{"rate":1.22,"count":85}}},
{"name":"해운대구_관외사전투표","rate":1.98,"votes":{"absentee":{"rate":1.98,"count":391}}},
{"name":"우제1동","rate":1.21,"votes":{"early":{"rate":1.27,"count":28},"polling":{"rate":1.2,"count":97}}},
{"name":"우제2동","rate":1.26,"votes":{"early":{"rate":0.77,"count":24},"polling":{"rate":1.39,"count":153}}},
{"name":"우제3동","rate":1.28,"votes":{"early":{"rate":1.4,"count":41},"polling":{"rate":1.24,"count":125}}},
{"name":"중제1동","rate":1.51,"votes":{"early":{"rate":1.34,"count":40},"polling":{"rate":1.57,"count":137}}},
{"name":"중제2동","rate":1.47,"votes":{"early":{"rate":1.39,"count":26},"polling":{"rate":1.5,"count":72}}},
{"name":"좌제1동","rate":1.79,"votes":{"early":{"rate":2.15,"count":36},"polling":{"rate":1.69,"count":101}}},
{"name":"좌제2동","rate":1.58,"votes":{"early":{"rate":1.37,"count":53},"polling":{"rate":1.65,"count":173}}},
{"name":"좌제3동","rate":1.55,"votes":{"early":{"rate":1.48,"count":36},"polling":{"rate":1.58,"count":82}}},
{"name":"좌제4동","rate":1.48,"votes":{"early":{"rate":1.59,"count":62},"polling":{"rate":1.43,"count":116}}},
{"name":"송정동","rate":1.51,"votes":{"early":{"rate":1.54,"count":18},"polling":{"rate":1.49,"count":47}}},
{"name":"반여제1동","rate":1.32,"votes":{"early":{"rate":1.02,"count":39},"polling":{"rate":1.4,"count":189}}},
{"name":"반여제2동","rate":1.17,"votes":{"early":{"rate":0.85,"count":16},"polling":{"rate":1.35,"count":47}}},
{"name":"반여제3동","rate":1.67,"votes":{"early":{"rate":1.78,"count":20},"polling":{"rate":1.62,"count":38}}},
{"name":"반여제4동","rate":1.57,"votes":{"early":{"rate":1.47,"count":26},"polling":{"rate":1.6,"count":85}}},
{"name":"반송제1동","rate":1.42,"votes":{"early":{"rate":1.24,"count":28},"polling":{"rate":1.53,"count":55}}},
{"name":"반송제2동","rate":1.56,"votes":{"early":{"rate":1.41,"count":50},"polling":{"rate":1.64,"count":115}}},
{"name":"재송제1동","rate":1.33,"votes":{"early":{"rate":1.21,"count":39},"polling":{"rate":1.36,"count":167}}},
{"name":"재송제2동","rate":1.22,"votes":{"early":{"rate":1.14,"count":29},"polling":{"rate":1.25,"count":90}}},
{"name":"기장군_관외사전투표","rate":2.19,"votes":{"absentee":{"rate":2.19,"count":204}}},
{"name":"기장읍","rate":1.39,"votes":{"early":{"rate":1.52,"count":64},"polling":{"rate":1.36,"count":250}}},
{"name":"장안읍","rate":1.9,"votes":{"early":{"rate":1.42,"count":15},"polling":{"rate":2.06,"count":66}}},
{"name":"정관읍","rate":1.42,"votes":{"early":{"rate":1.17,"count":87},"polling":{"rate":1.5,"count":367}}},
{"name":"일광읍","rate":1.7,"votes":{"early":{"rate":1.31,"count":43},"polling":{"rate":1.81,"count":199}}},
{"name":"철마면","rate":1.15,"votes":{"early":{"rate":0.77,"count":4},"polling":{"rate":1.22,"count":36}}},
{"name":"사하구_관외사전투표","rate":2.22,"votes":{"absentee":{"rate":2.22,"count":283}}},
{"name":"괴정제1동","rate":1.18,"votes":{"early":{"rate":1.19,"count":32},"polling":{"rate":1.17,"count":67}}},
{"name":"괴정제2동","rate":1.31,"votes":{"early":{"rate":0.79,"count":14},"polling":{"rate":1.49,"count":74}}},
{"name":"괴정제3동","rate":1.34,"votes":{"early":{"rate":0.86,"count":16},"polling":{"rate":1.56,"count":63}}},
{"name":"괴정제4동","rate":1.47,"votes":{"early":{"rate":1.59,"count":25},"polling":{"rate":1.42,"count":60}}},
{"name":"당리동","rate":1.32,"votes":{"early":{"rate":1.4,"count":50},"polling":{"rate":1.29,"count":106}}},
{"name":"하단제1동","rate":1.49,"votes":{"early":{"rate":1.81,"count":51},"polling":{"rate":1.37,"count":100}}},
{"name":"하단제2동","rate":1.59,"votes":{"early":{"rate":1.13,"count":30},"polling":{"rate":1.74,"count":142}}},
{"name":"신평제1동","rate":1.17,"votes":{"early":{"rate":0.98,"count":22},"polling":{"rate":1.27,"count":59}}},
{"name":"신평제2동","rate":1.29,"votes":{"early":{"rate":0.97,"count":25},"polling":{"rate":1.43,"count":79}}},
{"name":"장림제1동","rate":1.45,"votes":{"early":{"rate":1.04,"count":22},"polling":{"rate":1.66,"count":70}}},
{"name":"장림제2동","rate":1.45,"votes":{"early":{"rate":0.73,"count":19},"polling":{"rate":1.69,"count":134}}},
{"name":"다대제1동","rate":1.3,"votes":{"early":{"rate":0.99,"count":37},"polling":{"rate":1.39,"count":176}}},
{"name":"다대제2동","rate":1.58,"votes":{"early":{"rate":1.36,"count":46},"polling":{"rate":1.67,"count":154}}},
{"name":"구평동","rate":1.32,"votes":{"early":{"rate":0.82,"count":12},"polling":{"rate":1.52,"count":57}}},
{"name":"감천제1동","rate":1.3,"votes":{"early":{"rate":1.12,"count":25},"polling":{"rate":1.37,"count":79}}},
{"name":"감천제2동","rate":1.12,"votes":{"early":{"rate":0.83,"count":5},"polling":{"rate":1.24,"count":19}}},
{"name":"금정구_관외사전투표","rate":2.31,"votes":{"absentee":{"rate":2.31,"count":269}}},
{"name":"서제1동","rate":1.52,"votes":{"early":{"rate":0.76,"count":5},"polling":{"rate":1.88,"count":26}}},
{"name":"서제2동","rate":0.79,"votes":{"early":{"rate":0.94,"count":11},"polling":{"rate":0.73,"count":20}}},
{"name":"서제3동","rate":1.82,"votes":{"early":{"rate":1.45,"count":25},"polling":{"rate":2.02,"count":65}}},
{"name":"금사회동동","rate":1.65,"votes":{"early":{"rate":1.3,"count":17},"polling":{"rate":1.86,"count":41}}},
{"name":"부곡제1동","rate":1.57,"votes":{"early":{"rate":1.2,"count":15},"polling":{"rate":1.77,"count":43}}},
{"name":"부곡제2동","rate":1.69,"votes":{"early":{"rate":1.44,"count":33},"polling":{"rate":1.79,"count":110}}},
{"name":"부곡제3동","rate":1.57,"votes":{"early":{"rate":1.88,"count":48},"polling":{"rate":1.42,"count":72}}},
{"name":"부곡제4동","rate":1.76,"votes":{"early":{"rate":1.73,"count":37},"polling":{"rate":1.77,"count":65}}},
{"name":"장전제1동","rate":2.94,"votes":{"early":{"rate":3.17,"count":72},"polling":{"rate":2.86,"count":171}}},
{"name":"장전제2동","rate":1.99,"votes":{"early":{"rate":1.7,"count":50},"polling":{"rate":2.08,"count":183}}},
{"name":"선두구동","rate":0.94,"votes":{"early":{"rate":0.82,"count":3},"polling":{"rate":0.99,"count":8}}},
{"name":"청룡노포동","rate":1.07,"votes":{"early":{"rate":1.14,"count":19},"polling":{"rate":1.03,"count":32}}},
{"name":"남산동","rate":1.71,"votes":{"early":{"rate":1.69,"count":57},"polling":{"rate":1.71,"count":151}}},
{"name":"구서제1동","rate":1.79,"votes":{"early":{"rate":2.03,"count":67},"polling":{"rate":1.66,"count":101}}},
{"name":"구서제2동","rate":1.68,"votes":{"early":{"rate":2.05,"count":77},"polling":{"rate":1.57,"count":188}}},
{"name":"금성동","rate":1.19,"votes":{"early":{"rate":1.85,"count":3},"polling":{"rate":0.88,"count":3}}},
{"name":"강서구_관외사전투표","rate":1.96,"votes":{"absentee":{"rate":1.96,"count":142}}},
{"name":"대저1동","rate":0.8,"votes":{"early":{"rate":1.49,"count":12},"polling":{"rate":0.55,"count":12}}},
{"name":"대저2동","rate":2.1,"votes":{"early":{"rate":2.07,"count":20},"polling":{"rate":2.11,"count":44}}},
{"name":"강동동","rate":1.29,"votes":{"early":{"rate":1.03,"count":9},"polling":{"rate":1.32,"count":87}}},
{"name":"명지1동","rate":1.31,"votes":{"early":{"rate":1.27,"count":78},"polling":{"rate":1.32,"count":231}}},
{"name":"명지2동","rate":1.42,"votes":{"early":{"rate":1.19,"count":46},"polling":{"rate":1.52,"count":148}}},
{"name":"가락동","rate":1.09,"votes":{"early":{"rate":0.71,"count":3},"polling":{"rate":1.3,"count":10}}},
{"name":"녹산동","rate":1.16,"votes":{"early":{"rate":0.9,"count":9},"polling":{"rate":1.21,"count":67}}},
{"name":"신호동","rate":1.34,"votes":{"early":{"rate":0.96,"count":20},"polling":{"rate":1.52,"count":66}}},
{"name":"가덕도동","rate":0.84,"votes":{"early":{"rate":0.68,"count":4},"polling":{"rate":0.9,"count":12}}},
{"name":"연제구_관외사전투표","rate":2,"votes":{"absentee":{"rate":2,"count":250}}},
{"name":"거제제1동","rate":1.75,"votes":{"early":{"rate":1.8,"count":49},"polling":{"rate":1.74,"count":192}}},
{"name":"거제제2동","rate":1.91,"votes":{"early":{"rate":1.5,"count":42},"polling":{"rate":2.04,"count":180}}},
{"name":"거제제3동","rate":1.57,"votes":{"early":{"rate":1.31,"count":21},"polling":{"rate":1.69,"count":58}}},
{"name":"거제제4동","rate":1.61,"votes":{"early":{"rate":1.27,"count":18},"polling":{"rate":1.76,"count":55}}},
{"name":"연산제1동","rate":1.35,"votes":{"early":{"rate":1.17,"count":24},"polling":{"rate":1.42,"count":79}}},
{"name":"연산제2동","rate":1.96,"votes":{"early":{"rate":1.61,"count":45},"polling":{"rate":2.06,"count":185}}},
{"name":"연산제3동","rate":1.39,"votes":{"early":{"rate":1.21,"count":17},"polling":{"rate":1.45,"count":54}}},
{"name":"연산제4동","rate":1.44,"votes":{"early":{"rate":0.86,"count":19},"polling":{"rate":1.65,"count":104}}},
{"name":"연산제5동","rate":2.02,"votes":{"early":{"rate":1.86,"count":41},"polling":{"rate":2.09,"count":109}}},
{"name":"연산제6동","rate":1.52,"votes":{"early":{"rate":1.38,"count":21},"polling":{"rate":1.56,"count":89}}},
{"name":"연산제8동","rate":1.47,"votes":{"early":{"rate":1.54,"count":27},"polling":{"rate":1.45,"count":70}}},
{"name":"연산제9동","rate":1.39,"votes":{"early":{"rate":1.45,"count":45},"polling":{"rate":1.38,"count":170}}},
{"name":"수영구_관외사전투표","rate":1.79,"votes":{"absentee":{"rate":1.79,"count":183}}},
{"name":"남천제1동","rate":1.35,"votes":{"early":{"rate":1.33,"count":24},"polling":{"rate":1.36,"count":76}}},
{"name":"남천제2동","rate":1.25,"votes":{"early":{"rate":1.54,"count":30},"polling":{"rate":1.14,"count":55}}},
{"name":"수영동","rate":1.06,"votes":{"early":{"rate":1.07,"count":13},"polling":{"rate":1.06,"count":60}}},
{"name":"망미제1동","rate":1.35,"votes":{"early":{"rate":1.12,"count":37},"polling":{"rate":1.43,"count":131}}},
{"name":"망미제2동","rate":1.23,"votes":{"early":{"rate":0.75,"count":7},"polling":{"rate":1.35,"count":53}}},
{"name":"광안제1동","rate":1.62,"votes":{"early":{"rate":1.4,"count":43},"polling":{"rate":1.71,"count":133}}},
{"name":"광안제2동","rate":1.32,"votes":{"early":{"rate":0.92,"count":24},"polling":{"rate":1.51,"count":83}}},
{"name":"광안제3동","rate":1.9,"votes":{"early":{"rate":2.06,"count":26},"polling":{"rate":1.83,"count":52}}},
{"name":"광안제4동","rate":1.31,"votes":{"early":{"rate":1.16,"count":20},"polling":{"rate":1.37,"count":59}}},
{"name":"민락동","rate":1.24,"votes":{"early":{"rate":0.86,"count":25},"polling":{"rate":1.36,"count":128}}},
{"name":"사상구_관외사전투표","rate":2.13,"votes":{"absentee":{"rate":2.13,"count":188}}},
{"name":"삼락동","rate":1.37,"votes":{"early":{"rate":1.2,"count":17},"polling":{"rate":1.54,"count":22}}},
{"name":"모라제1동","rate":1.1,"votes":{"early":{"rate":0.94,"count":41},"polling":{"rate":1.19,"count":102}}},
{"name":"모라제3동","rate":1.51,"votes":{"early":{"rate":1.44,"count":24},"polling":{"rate":1.54,"count":49}}},
{"name":"덕포제1동","rate":1.55,"votes":{"early":{"rate":1.26,"count":25},"polling":{"rate":1.71,"count":64}}},
{"name":"덕포제2동","rate":1.41,"votes":{"early":{"rate":1.57,"count":25},"polling":{"rate":1.35,"count":58}}},
{"name":"괘법동","rate":2.03,"votes":{"early":{"rate":1.98,"count":46},"polling":{"rate":2.05,"count":165}}},
{"name":"감전동","rate":1.36,"votes":{"early":{"rate":1.38,"count":17},"polling":{"rate":1.35,"count":58}}},
{"name":"주례제1동","rate":1.68,"votes":{"early":{"rate":1.53,"count":33},"polling":{"rate":1.74,"count":101}}},
{"name":"주례제2동","rate":1.91,"votes":{"early":{"rate":2.08,"count":34},"polling":{"rate":1.87,"count":146}}},
{"name":"주례제3동","rate":1.42,"votes":{"early":{"rate":1.06,"count":22},"polling":{"rate":1.6,"count":64}}},
{"name":"학장동","rate":1.54,"votes":{"early":{"rate":1.19,"count":35},"polling":{"rate":1.64,"count":163}}},
{"name":"엄궁동","rate":1.5,"votes":{"early":{"rate":1.55,"count":53},"polling":{"rate":1.47,"count":122}}}
] },

  // [  3] 광역단체장  | 이수찬 | 대구광역시장
  { id: 3, voteRate: 1.02, totalVotes: 13324, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"중구_관외사전투표","rate":1.58,"votes":{"absentee":{"rate":1.58,"count":86}}},
{"name":"동인동","rate":1.29,"votes":{"early":{"rate":1.42,"count":15},"polling":{"rate":1.26,"count":52}}},
{"name":"삼덕동","rate":1.63,"votes":{"early":{"rate":1.58,"count":13},"polling":{"rate":1.65,"count":40}}},
{"name":"성내1동","rate":1.63,"votes":{"early":{"rate":1.33,"count":7},"polling":{"rate":1.72,"count":29}}},
{"name":"성내2동","rate":0.98,"votes":{"early":{"rate":1.03,"count":9},"polling":{"rate":0.97,"count":31}}},
{"name":"성내3동","rate":0.75,"votes":{"early":{"rate":0.92,"count":15},"polling":{"rate":0.69,"count":34}}},
{"name":"대신동","rate":1.1,"votes":{"early":{"rate":1.08,"count":14},"polling":{"rate":1.11,"count":32}}},
{"name":"남산1동","rate":1.47,"votes":{"early":{"rate":2.1,"count":10},"polling":{"rate":1.31,"count":24}}},
{"name":"남산2동","rate":1.03,"votes":{"early":{"rate":1.24,"count":11},"polling":{"rate":0.96,"count":27}}},
{"name":"남산3동","rate":0.99,"votes":{"early":{"rate":1.08,"count":9},"polling":{"rate":0.95,"count":21}}},
{"name":"남산4동","rate":0.82,"votes":{"early":{"rate":0.66,"count":12},"polling":{"rate":0.86,"count":53}}},
{"name":"대봉1동","rate":0.77,"votes":{"early":{"rate":1.37,"count":12},"polling":{"rate":0.6,"count":18}}},
{"name":"대봉2동","rate":0.82,"votes":{"early":{"rate":0.87,"count":9},"polling":{"rate":0.79,"count":19}}},
{"name":"동구_관외사전투표","rate":1.54,"votes":{"absentee":{"rate":1.54,"count":288}}},
{"name":"신암1동","rate":1.08,"votes":{"early":{"rate":1.79,"count":27},"polling":{"rate":0.83,"count":35}}},
{"name":"신암2동","rate":1.07,"votes":{"early":{"rate":1,"count":18},"polling":{"rate":1.1,"count":50}}},
{"name":"신암3동","rate":0.91,"votes":{"early":{"rate":1.06,"count":17},"polling":{"rate":0.85,"count":33}}},
{"name":"신암4동","rate":1.06,"votes":{"early":{"rate":1.13,"count":23},"polling":{"rate":1.04,"count":71}}},
{"name":"신암5동","rate":0.83,"votes":{"early":{"rate":1.08,"count":13},"polling":{"rate":0.73,"count":21}}},
{"name":"신천1·2동","rate":0.82,"votes":{"early":{"rate":0.58,"count":8},"polling":{"rate":0.89,"count":44}}},
{"name":"신천3동","rate":1.19,"votes":{"early":{"rate":1.27,"count":24},"polling":{"rate":1.17,"count":64}}},
{"name":"신천4동","rate":1.08,"votes":{"early":{"rate":1.11,"count":16},"polling":{"rate":1.07,"count":47}}},
{"name":"효목1동","rate":0.95,"votes":{"early":{"rate":1.29,"count":11},"polling":{"rate":0.89,"count":44}}},
{"name":"효목2동","rate":1.08,"votes":{"early":{"rate":1.63,"count":28},"polling":{"rate":0.91,"count":52}}},
{"name":"도평동","rate":0.64,"votes":{"early":{"rate":0.91,"count":5},"polling":{"rate":0.53,"count":7}}},
{"name":"불로·봉무동","rate":0.66,"votes":{"early":{"rate":0.69,"count":11},"polling":{"rate":0.66,"count":53}}},
{"name":"지저동","rate":0.97,"votes":{"early":{"rate":1.16,"count":18},"polling":{"rate":0.91,"count":46}}},
{"name":"동촌동","rate":0.98,"votes":{"early":{"rate":0.77,"count":13},"polling":{"rate":1.05,"count":55}}},
{"name":"방촌동","rate":0.93,"votes":{"early":{"rate":0.8,"count":15},"polling":{"rate":0.96,"count":72}}},
{"name":"해안동","rate":1.01,"votes":{"early":{"rate":1.25,"count":22},"polling":{"rate":0.92,"count":45}}},
{"name":"안심1동","rate":0.92,"votes":{"early":{"rate":0.66,"count":23},"polling":{"rate":0.98,"count":145}}},
{"name":"안심2동","rate":0.94,"votes":{"early":{"rate":1.11,"count":17},"polling":{"rate":0.9,"count":57}}},
{"name":"안심3동","rate":1.1,"votes":{"early":{"rate":1.08,"count":28},"polling":{"rate":1.1,"count":81}}},
{"name":"안심4동","rate":0.92,"votes":{"early":{"rate":1.08,"count":18},"polling":{"rate":0.89,"count":90}}},
{"name":"혁신동","rate":0.88,"votes":{"early":{"rate":0.77,"count":14},"polling":{"rate":0.92,"count":52}}},
{"name":"공산동","rate":0.93,"votes":{"early":{"rate":1.21,"count":28},"polling":{"rate":0.85,"count":70}}},
{"name":"서구_관외사전투표","rate":1.36,"votes":{"absentee":{"rate":1.36,"count":97}}},
{"name":"내당1동","rate":0.83,"votes":{"early":{"rate":0.79,"count":16},"polling":{"rate":0.84,"count":46}}},
{"name":"내당2·3동","rate":1,"votes":{"early":{"rate":1.07,"count":8},"polling":{"rate":0.98,"count":34}}},
{"name":"내당4동","rate":1.1,"votes":{"early":{"rate":0.73,"count":13},"polling":{"rate":1.22,"count":69}}},
{"name":"비산1동","rate":0.99,"votes":{"early":{"rate":0.88,"count":9},"polling":{"rate":1.02,"count":30}}},
{"name":"비산2·3동","rate":1.03,"votes":{"early":{"rate":0.76,"count":6},"polling":{"rate":1.1,"count":34}}},
{"name":"비산4동","rate":0.72,"votes":{"early":{"rate":0.51,"count":4},"polling":{"rate":0.77,"count":27}}},
{"name":"비산5동","rate":0.83,"votes":{"early":{"rate":0.84,"count":7},"polling":{"rate":0.83,"count":15}}},
{"name":"비산6동","rate":1,"votes":{"early":{"rate":0.7,"count":7},"polling":{"rate":1.11,"count":29}}},
{"name":"비산7동","rate":0.88,"votes":{"early":{"rate":0.99,"count":7},"polling":{"rate":0.85,"count":31}}},
{"name":"평리1동","rate":0.81,"votes":{"early":{"rate":0.87,"count":7},"polling":{"rate":0.79,"count":19}}},
{"name":"평리2동","rate":0.69,"votes":{"early":{"rate":0.7,"count":8},"polling":{"rate":0.69,"count":18}}},
{"name":"평리3동","rate":0.9,"votes":{"early":{"rate":0.81,"count":11},"polling":{"rate":0.93,"count":43}}},
{"name":"평리4동","rate":0.83,"votes":{"early":{"rate":1.04,"count":17},"polling":{"rate":0.78,"count":47}}},
{"name":"평리5동","rate":0.62,"votes":{"early":{"rate":0.94,"count":12},"polling":{"rate":0.51,"count":19}}},
{"name":"평리6동","rate":1.05,"votes":{"early":{"rate":0.85,"count":6},"polling":{"rate":1.11,"count":22}}},
{"name":"상중이동","rate":0.8,"votes":{"early":{"rate":0.77,"count":15},"polling":{"rate":0.81,"count":56}}},
{"name":"원대동","rate":0.91,"votes":{"early":{"rate":1.01,"count":13},"polling":{"rate":0.87,"count":34}}},
{"name":"남구_관외사전투표","rate":1.65,"votes":{"absentee":{"rate":1.65,"count":114}}},
{"name":"이천동","rate":1.01,"votes":{"early":{"rate":0.97,"count":14},"polling":{"rate":1.02,"count":62}}},
{"name":"봉덕1동","rate":0.87,"votes":{"early":{"rate":1.2,"count":11},"polling":{"rate":0.77,"count":23}}},
{"name":"봉덕2동","rate":0.85,"votes":{"early":{"rate":1.28,"count":15},"polling":{"rate":0.76,"count":41}}},
{"name":"봉덕3동","rate":0.92,"votes":{"early":{"rate":0.96,"count":16},"polling":{"rate":0.91,"count":48}}},
{"name":"대명1동","rate":0.9,"votes":{"early":{"rate":0.98,"count":11},"polling":{"rate":0.87,"count":32}}},
{"name":"대명2동","rate":1.33,"votes":{"early":{"rate":1.62,"count":22},"polling":{"rate":1.27,"count":75}}},
{"name":"대명3동","rate":1.14,"votes":{"early":{"rate":0.88,"count":10},"polling":{"rate":1.22,"count":43}}},
{"name":"대명4동","rate":0.9,"votes":{"early":{"rate":0.49,"count":5},"polling":{"rate":1.02,"count":37}}},
{"name":"대명5동","rate":1.42,"votes":{"early":{"rate":1.85,"count":19},"polling":{"rate":1.28,"count":41}}},
{"name":"대명6동","rate":1.16,"votes":{"early":{"rate":1.04,"count":13},"polling":{"rate":1.19,"count":48}}},
{"name":"대명9동","rate":0.86,"votes":{"early":{"rate":0.93,"count":15},"polling":{"rate":0.84,"count":39}}},
{"name":"대명10동","rate":1.02,"votes":{"early":{"rate":0.47,"count":4},"polling":{"rate":1.17,"count":37}}},
{"name":"대명11동","rate":0.95,"votes":{"early":{"rate":0.92,"count":8},"polling":{"rate":0.96,"count":28}}},
{"name":"북구_관외사전투표","rate":1.62,"votes":{"absentee":{"rate":1.62,"count":331}}},
{"name":"고성동","rate":0.84,"votes":{"early":{"rate":1.03,"count":22},"polling":{"rate":0.77,"count":44}}},
{"name":"칠성동","rate":0.91,"votes":{"early":{"rate":0.75,"count":12},"polling":{"rate":0.93,"count":85}}},
{"name":"침산1동","rate":1.07,"votes":{"early":{"rate":2.92,"count":9},"polling":{"rate":0.68,"count":10}}},
{"name":"침산2동","rate":0.79,"votes":{"early":{"rate":0.63,"count":11},"polling":{"rate":0.83,"count":58}}},
{"name":"침산3동","rate":0.94,"votes":{"early":{"rate":0.92,"count":21},"polling":{"rate":0.95,"count":69}}},
{"name":"노원동","rate":0.93,"votes":{"early":{"rate":0.51,"count":6},"polling":{"rate":1.04,"count":50}}},
{"name":"산격1동","rate":1.02,"votes":{"early":{"rate":1.02,"count":9},"polling":{"rate":1.02,"count":32}}},
{"name":"산격2동","rate":0.92,"votes":{"early":{"rate":1.31,"count":19},"polling":{"rate":0.77,"count":29}}},
{"name":"산격3동","rate":1.9,"votes":{"early":{"rate":2.89,"count":22},"polling":{"rate":1.65,"count":51}}},
{"name":"산격4동","rate":0.9,"votes":{"early":{"rate":0.94,"count":8},"polling":{"rate":0.89,"count":26}}},
{"name":"복현1동","rate":1.73,"votes":{"early":{"rate":1.86,"count":15},"polling":{"rate":1.68,"count":41}}},
{"name":"복현2동","rate":1.17,"votes":{"early":{"rate":0.84,"count":22},"polling":{"rate":1.24,"count":140}}},
{"name":"대현동","rate":1.04,"votes":{"early":{"rate":1.09,"count":24},"polling":{"rate":1.03,"count":62}}},
{"name":"검단동","rate":0.81,"votes":{"early":{"rate":0.93,"count":6},"polling":{"rate":0.78,"count":19}}},
{"name":"무태조야동","rate":0.82,"votes":{"early":{"rate":0.71,"count":24},"polling":{"rate":0.85,"count":109}}},
{"name":"관문동","rate":0.79,"votes":{"early":{"rate":0.92,"count":18},"polling":{"rate":0.77,"count":101}}},
{"name":"태전1동","rate":1.15,"votes":{"early":{"rate":1.39,"count":17},"polling":{"rate":1.11,"count":95}}},
{"name":"태전2동","rate":0.98,"votes":{"early":{"rate":1.12,"count":26},"polling":{"rate":0.94,"count":80}}},
{"name":"구암동","rate":0.98,"votes":{"early":{"rate":1.17,"count":38},"polling":{"rate":0.92,"count":111}}},
{"name":"관음동","rate":0.91,"votes":{"early":{"rate":1.23,"count":19},"polling":{"rate":0.82,"count":44}}},
{"name":"읍내동","rate":1.03,"votes":{"early":{"rate":1.28,"count":29},"polling":{"rate":0.97,"count":94}}},
{"name":"동천동","rate":1.12,"votes":{"early":{"rate":1.16,"count":40},"polling":{"rate":1.11,"count":107}}},
{"name":"국우동","rate":1.18,"votes":{"early":{"rate":1.08,"count":28},"polling":{"rate":1.2,"count":135}}},
{"name":"수성구_관외사전투표","rate":1.48,"votes":{"absentee":{"rate":1.48,"count":338}}},
{"name":"범어1동","rate":0.78,"votes":{"early":{"rate":0.67,"count":11},"polling":{"rate":0.81,"count":71}}},
{"name":"범어2동","rate":1.15,"votes":{"early":{"rate":0.69,"count":6},"polling":{"rate":1.21,"count":70}}},
{"name":"범어3동","rate":1.02,"votes":{"early":{"rate":1.32,"count":26},"polling":{"rate":0.92,"count":59}}},
{"name":"범어4동","rate":1.08,"votes":{"early":{"rate":1.26,"count":25},"polling":{"rate":1.02,"count":61}}},
{"name":"만촌1동","rate":0.89,"votes":{"early":{"rate":1.17,"count":28},"polling":{"rate":0.81,"count":66}}},
{"name":"만촌2동","rate":0.98,"votes":{"early":{"rate":0.75,"count":11},"polling":{"rate":1.06,"count":49}}},
{"name":"만촌3동","rate":1.1,"votes":{"early":{"rate":1.19,"count":27},"polling":{"rate":1.07,"count":78}}},
{"name":"수성1가동","rate":0.99,"votes":{"early":{"rate":1.17,"count":26},"polling":{"rate":0.93,"count":62}}},
{"name":"수성2·3가동","rate":0.96,"votes":{"early":{"rate":1.09,"count":15},"polling":{"rate":0.91,"count":34}}},
{"name":"수성4가동","rate":1.12,"votes":{"early":{"rate":1.45,"count":29},"polling":{"rate":1,"count":51}}},
{"name":"황금1동","rate":0.83,"votes":{"early":{"rate":0.74,"count":18},"polling":{"rate":0.86,"count":70}}},
{"name":"황금2동","rate":0.83,"votes":{"early":{"rate":0.9,"count":14},"polling":{"rate":0.81,"count":33}}},
{"name":"중동","rate":1.05,"votes":{"early":{"rate":0.95,"count":13},"polling":{"rate":1.07,"count":60}}},
{"name":"상동","rate":0.75,"votes":{"early":{"rate":0.9,"count":10},"polling":{"rate":0.72,"count":43}}},
{"name":"파동","rate":0.71,"votes":{"early":{"rate":0.63,"count":14},"polling":{"rate":0.74,"count":48}}},
{"name":"두산동","rate":0.86,"votes":{"early":{"rate":1.02,"count":13},"polling":{"rate":0.83,"count":46}}},
{"name":"지산1동","rate":0.83,"votes":{"early":{"rate":0.89,"count":23},"polling":{"rate":0.81,"count":62}}},
{"name":"지산2동","rate":0.92,"votes":{"early":{"rate":0.53,"count":11},"polling":{"rate":1.04,"count":74}}},
{"name":"범물1동","rate":0.74,"votes":{"early":{"rate":0.72,"count":11},"polling":{"rate":0.74,"count":31}}},
{"name":"범물2동","rate":0.84,"votes":{"early":{"rate":0.73,"count":15},"polling":{"rate":0.87,"count":56}}},
{"name":"고산1동","rate":1.02,"votes":{"early":{"rate":0.81,"count":37},"polling":{"rate":1.1,"count":130}}},
{"name":"고산2동","rate":1.07,"votes":{"early":{"rate":0.98,"count":33},"polling":{"rate":1.1,"count":113}}},
{"name":"고산3동","rate":1.15,"votes":{"early":{"rate":1.08,"count":44},"polling":{"rate":1.18,"count":137}}},
{"name":"달서구_관외사전투표","rate":1.52,"votes":{"absentee":{"rate":1.52,"count":416}}},
{"name":"성당동","rate":0.81,"votes":{"early":{"rate":1.14,"count":19},"polling":{"rate":0.74,"count":56}}},
{"name":"두류1,2동","rate":0.96,"votes":{"early":{"rate":1.43,"count":22},"polling":{"rate":0.84,"count":49}}},
{"name":"두류3동","rate":0.73,"votes":{"early":{"rate":0.52,"count":7},"polling":{"rate":0.81,"count":29}}},
{"name":"본리동","rate":0.77,"votes":{"early":{"rate":0.81,"count":22},"polling":{"rate":0.75,"count":64}}},
{"name":"감삼동","rate":0.81,"votes":{"early":{"rate":0.84,"count":13},"polling":{"rate":0.8,"count":103}}},
{"name":"죽전동","rate":0.93,"votes":{"early":{"rate":0.84,"count":12},"polling":{"rate":0.96,"count":53}}},
{"name":"장기동","rate":0.91,"votes":{"early":{"rate":0.92,"count":16},"polling":{"rate":0.91,"count":56}}},
{"name":"용산1동","rate":0.82,"votes":{"early":{"rate":0.86,"count":28},"polling":{"rate":0.81,"count":92}}},
{"name":"용산2동","rate":0.99,"votes":{"early":{"rate":1.18,"count":26},"polling":{"rate":0.95,"count":103}}},
{"name":"이곡1동","rate":1.34,"votes":{"early":{"rate":1.7,"count":31},"polling":{"rate":1.27,"count":107}}},
{"name":"이곡2동","rate":1.08,"votes":{"early":{"rate":1.14,"count":29},"polling":{"rate":1.06,"count":61}}},
{"name":"신당동","rate":1.45,"votes":{"early":{"rate":1.63,"count":20},"polling":{"rate":1.43,"count":169}}},
{"name":"월성1동","rate":1,"votes":{"early":{"rate":0.99,"count":36},"polling":{"rate":1,"count":147}}},
{"name":"월성2동","rate":0.94,"votes":{"early":{"rate":1,"count":21},"polling":{"rate":0.92,"count":53}}},
{"name":"진천동","rate":1.06,"votes":{"early":{"rate":1.31,"count":53},"polling":{"rate":1.01,"count":205}}},
{"name":"유천동","rate":0.66,"votes":{"early":{"rate":0.66,"count":22},"polling":{"rate":0.66,"count":75}}},
{"name":"상인1동","rate":0.8,"votes":{"early":{"rate":0.73,"count":18},"polling":{"rate":0.81,"count":118}}},
{"name":"상인2동","rate":0.87,"votes":{"early":{"rate":0.78,"count":14},"polling":{"rate":0.89,"count":56}}},
{"name":"상인3동","rate":0.97,"votes":{"early":{"rate":1.01,"count":15},"polling":{"rate":0.96,"count":38}}},
{"name":"도원동","rate":0.85,"votes":{"early":{"rate":1.01,"count":36},"polling":{"rate":0.81,"count":114}}},
{"name":"송현1동","rate":0.77,"votes":{"early":{"rate":0.68,"count":11},"polling":{"rate":0.8,"count":49}}},
{"name":"송현2동","rate":0.85,"votes":{"early":{"rate":1.06,"count":15},"polling":{"rate":0.81,"count":59}}},
{"name":"본동","rate":0.83,"votes":{"early":{"rate":0.78,"count":7},"polling":{"rate":0.84,"count":44}}},
{"name":"달성군_관외사전투표","rate":1.57,"votes":{"absentee":{"rate":1.57,"count":188}}},
{"name":"화원읍","rate":0.87,"votes":{"early":{"rate":0.96,"count":43},"polling":{"rate":0.86,"count":173}}},
{"name":"논공읍","rate":0.99,"votes":{"early":{"rate":0.53,"count":6},"polling":{"rate":1.08,"count":65}}},
{"name":"다사읍","rate":0.94,"votes":{"early":{"rate":0.89,"count":53},"polling":{"rate":0.95,"count":341}}},
{"name":"유가읍","rate":1.27,"votes":{"early":{"rate":1.41,"count":71},"polling":{"rate":1.19,"count":114}}},
{"name":"옥포읍","rate":0.74,"votes":{"early":{"rate":0.69,"count":15},"polling":{"rate":0.75,"count":70}}},
{"name":"현풍읍","rate":1.23,"votes":{"early":{"rate":1.46,"count":27},"polling":{"rate":1.17,"count":83}}},
{"name":"가창면","rate":0.7,"votes":{"early":{"rate":0.96,"count":8},"polling":{"rate":0.63,"count":18}}},
{"name":"하빈면","rate":0.82,"votes":{"early":{"rate":1.54,"count":11},"polling":{"rate":0.44,"count":6}}},
{"name":"구지면","rate":1.08,"votes":{"early":{"rate":0.85,"count":20},"polling":{"rate":1.18,"count":65}}},
{"name":"군위군_관외사전투표","rate":0.74,"votes":{"absentee":{"rate":0.74,"count":19}}},
{"name":"군위읍","rate":1.12,"votes":{"early":{"rate":1.15,"count":24},"polling":{"rate":1.11,"count":30}}},
{"name":"소보면","rate":1.09,"votes":{"early":{"rate":0.18,"count":1},"polling":{"rate":1.71,"count":14}}},
{"name":"효령면","rate":0.95,"votes":{"early":{"rate":0.88,"count":9},"polling":{"rate":0.99,"count":13}}},
{"name":"부계면","rate":1.06,"votes":{"early":{"rate":1.03,"count":4},"polling":{"rate":1.07,"count":10}}},
{"name":"우보면","rate":2.12,"votes":{"early":{"rate":1.7,"count":9},"polling":{"rate":2.45,"count":16}}},
{"name":"의흥면","rate":1.92,"votes":{"early":{"rate":1.31,"count":7},"polling":{"rate":2.28,"count":21}}},
{"name":"산성면","rate":1.65,"votes":{"early":{"rate":1.42,"count":5},"polling":{"rate":1.83,"count":8}}},
{"name":"삼국유사면","rate":1.21,"votes":{"early":{"rate":1.72,"count":5},"polling":{"rate":0.93,"count":5}}}
] },

  // [  4] 광역단체장  | 이기붕 | 인천광역시장
  { id: 4, voteRate: 1.09, totalVotes: 16788, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"영종구_관외사전투표","rate":1.47,"votes":{"absentee":{"rate":1.47,"count":101}}},
{"name":"영종동","rate":1.16,"votes":{"early":{"rate":0.94,"count":26},"polling":{"rate":1.23,"count":113}}},
{"name":"영종1동","rate":0.94,"votes":{"early":{"rate":0.85,"count":38},"polling":{"rate":0.98,"count":99}}},
{"name":"영종2동","rate":0.85,"votes":{"early":{"rate":0.97,"count":28},"polling":{"rate":0.81,"count":63}}},
{"name":"운서1동","rate":1.29,"votes":{"early":{"rate":1.19,"count":51},"polling":{"rate":1.37,"count":64}}},
{"name":"운서2동","rate":1.34,"votes":{"early":{"rate":1.55,"count":30},"polling":{"rate":1.27,"count":70}}},
{"name":"용유동","rate":0.54,"votes":{"early":{"rate":0.18,"count":1},"polling":{"rate":0.72,"count":8}}},
{"name":"제물포구_관외사전투표","rate":1.87,"votes":{"absentee":{"rate":1.87,"count":92}}},
{"name":"신포동","rate":0.86,"votes":{"early":{"rate":0.36,"count":3},"polling":{"rate":1.14,"count":17}}},
{"name":"연안동","rate":0.91,"votes":{"early":{"rate":0.95,"count":10},"polling":{"rate":0.88,"count":12}}},
{"name":"신흥동","rate":1.35,"votes":{"early":{"rate":1,"count":17},"polling":{"rate":1.49,"count":65}}},
{"name":"도원동","rate":1.81,"votes":{"early":{"rate":1.37,"count":12},"polling":{"rate":2.16,"count":24}}},
{"name":"율목동","rate":1.1,"votes":{"early":{"rate":1.62,"count":7},"polling":{"rate":0.86,"count":8}}},
{"name":"동인천동","rate":1.24,"votes":{"early":{"rate":1.06,"count":9},"polling":{"rate":1.34,"count":21}}},
{"name":"개항동","rate":1.37,"votes":{"early":{"rate":0.61,"count":5},"polling":{"rate":1.67,"count":34}}},
{"name":"만석동","rate":1.02,"votes":{"early":{"rate":0.35,"count":4},"polling":{"rate":1.38,"count":30}}},
{"name":"화수1·화평동","rate":0.76,"votes":{"early":{"rate":0.61,"count":5},"polling":{"rate":0.82,"count":15}}},
{"name":"화수2동","rate":1.04,"votes":{"early":{"rate":1.28,"count":11},"polling":{"rate":0.97,"count":25}}},
{"name":"송현1·2동","rate":0.8,"votes":{"early":{"rate":0.96,"count":19},"polling":{"rate":0.7,"count":23}}},
{"name":"송현3동","rate":0.99,"votes":{"early":{"rate":0.99,"count":4},"polling":{"rate":0.99,"count":9}}},
{"name":"송림1동","rate":0.72,"votes":{"early":{"rate":0.82,"count":4},"polling":{"rate":0.69,"count":15}}},
{"name":"송림2동","rate":0.92,"votes":{"early":{"rate":0.76,"count":3},"polling":{"rate":1.09,"count":4}}},
{"name":"송림3·5동","rate":1.07,"votes":{"early":{"rate":0.9,"count":9},"polling":{"rate":1.18,"count":20}}},
{"name":"송림4동","rate":0.73,"votes":{"early":{"rate":0.83,"count":10},"polling":{"rate":0.66,"count":13}}},
{"name":"송림6동","rate":0.75,"votes":{"early":{"rate":0.64,"count":7},"polling":{"rate":0.8,"count":19}}},
{"name":"금창동","rate":0.99,"votes":{"early":{"rate":0.96,"count":3},"polling":{"rate":1,"count":8}}},
{"name":"미추홀구_관외사전투표","rate":1.58,"votes":{"absentee":{"rate":1.58,"count":314}}},
{"name":"숭의1·3동","rate":0.91,"votes":{"early":{"rate":0.38,"count":7},"polling":{"rate":1.12,"count":54}}},
{"name":"숭의2동","rate":1.05,"votes":{"early":{"rate":0.88,"count":16},"polling":{"rate":1.14,"count":39}}},
{"name":"숭의4동","rate":1.03,"votes":{"early":{"rate":0.98,"count":25},"polling":{"rate":1.06,"count":48}}},
{"name":"용현1·4동","rate":1.16,"votes":{"early":{"rate":0.82,"count":14},"polling":{"rate":1.28,"count":68}}},
{"name":"용현2동","rate":0.72,"votes":{"early":{"rate":0.55,"count":19},"polling":{"rate":0.81,"count":56}}},
{"name":"용현3동","rate":0.7,"votes":{"early":{"rate":0.78,"count":10},"polling":{"rate":0.64,"count":12}}},
{"name":"용현5동","rate":1,"votes":{"early":{"rate":0.99,"count":58},"polling":{"rate":1,"count":134}}},
{"name":"학익1동","rate":0.86,"votes":{"early":{"rate":0.82,"count":36},"polling":{"rate":0.87,"count":125}}},
{"name":"학익2동","rate":0.91,"votes":{"early":{"rate":0.79,"count":18},"polling":{"rate":0.96,"count":57}}},
{"name":"도화1동","rate":1.01,"votes":{"early":{"rate":0.95,"count":21},"polling":{"rate":1.04,"count":58}}},
{"name":"도화2·3동","rate":1.21,"votes":{"early":{"rate":1.12,"count":45},"polling":{"rate":1.25,"count":111}}},
{"name":"주안1동","rate":1.03,"votes":{"early":{"rate":0.65,"count":14},"polling":{"rate":1.21,"count":57}}},
{"name":"주안2동","rate":0.7,"votes":{"early":{"rate":0.7,"count":17},"polling":{"rate":0.7,"count":47}}},
{"name":"주안3동","rate":1.2,"votes":{"early":{"rate":1.4,"count":24},"polling":{"rate":1.11,"count":41}}},
{"name":"주안4동","rate":0.99,"votes":{"early":{"rate":0.97,"count":24},"polling":{"rate":0.99,"count":59}}},
{"name":"주안5동","rate":1.26,"votes":{"early":{"rate":0.86,"count":24},"polling":{"rate":1.44,"count":87}}},
{"name":"주안6동","rate":0.98,"votes":{"early":{"rate":0.98,"count":28},"polling":{"rate":0.98,"count":61}}},
{"name":"주안7동","rate":0.98,"votes":{"early":{"rate":1.04,"count":27},"polling":{"rate":0.93,"count":36}}},
{"name":"주안8동","rate":0.94,"votes":{"early":{"rate":1.01,"count":19},"polling":{"rate":0.93,"count":61}}},
{"name":"관교동","rate":0.66,"votes":{"early":{"rate":0.52,"count":11},"polling":{"rate":0.72,"count":35}}},
{"name":"문학동","rate":1.08,"votes":{"early":{"rate":1.36,"count":28},"polling":{"rate":0.88,"count":27}}},
{"name":"연수구_관외사전투표","rate":1.68,"votes":{"absentee":{"rate":1.68,"count":365}}},
{"name":"옥련1동","rate":1.15,"votes":{"early":{"rate":1.29,"count":24},"polling":{"rate":1.11,"count":63}}},
{"name":"옥련2동","rate":0.97,"votes":{"early":{"rate":0.94,"count":31},"polling":{"rate":0.98,"count":64}}},
{"name":"선학동","rate":1.28,"votes":{"early":{"rate":1.12,"count":29},"polling":{"rate":1.34,"count":81}}},
{"name":"연수1동","rate":1.31,"votes":{"early":{"rate":1.11,"count":27},"polling":{"rate":1.4,"count":71}}},
{"name":"연수2동","rate":1.32,"votes":{"early":{"rate":1.14,"count":33},"polling":{"rate":1.4,"count":98}}},
{"name":"연수3동","rate":1.52,"votes":{"early":{"rate":1.48,"count":36},"polling":{"rate":1.54,"count":81}}},
{"name":"청학동","rate":0.89,"votes":{"early":{"rate":0.68,"count":20},"polling":{"rate":0.98,"count":72}}},
{"name":"동춘1동","rate":1.06,"votes":{"early":{"rate":0.88,"count":32},"polling":{"rate":1.13,"count":100}}},
{"name":"동춘2동","rate":1.29,"votes":{"early":{"rate":0.98,"count":30},"polling":{"rate":1.45,"count":83}}},
{"name":"동춘3동","rate":1.17,"votes":{"early":{"rate":1.3,"count":41},"polling":{"rate":1.11,"count":66}}},
{"name":"송도1동","rate":1.28,"votes":{"early":{"rate":1.35,"count":61},"polling":{"rate":1.26,"count":164}}},
{"name":"송도2동","rate":1.17,"votes":{"early":{"rate":1.04,"count":47},"polling":{"rate":1.22,"count":136}}},
{"name":"송도3동","rate":1.36,"votes":{"early":{"rate":1.41,"count":82},"polling":{"rate":1.35,"count":221}}},
{"name":"송도4동","rate":1.34,"votes":{"early":{"rate":1.1,"count":55},"polling":{"rate":1.4,"count":250}}},
{"name":"송도5동","rate":1.07,"votes":{"early":{"rate":0.65,"count":26},"polling":{"rate":1.17,"count":189}}},
{"name":"남동구_관외사전투표","rate":1.57,"votes":{"absentee":{"rate":1.57,"count":373}}},
{"name":"구월1동","rate":0.83,"votes":{"early":{"rate":0.61,"count":29},"polling":{"rate":0.94,"count":92}}},
{"name":"구월2동","rate":0.79,"votes":{"early":{"rate":0.78,"count":46},"polling":{"rate":0.8,"count":97}}},
{"name":"구월3동","rate":1.43,"votes":{"early":{"rate":1.16,"count":27},"polling":{"rate":1.52,"count":116}}},
{"name":"구월4동","rate":0.97,"votes":{"early":{"rate":1,"count":16},"polling":{"rate":0.95,"count":36}}},
{"name":"간석1동","rate":1.04,"votes":{"early":{"rate":0.72,"count":13},"polling":{"rate":1.13,"count":74}}},
{"name":"간석2동","rate":0.88,"votes":{"early":{"rate":1.13,"count":20},"polling":{"rate":0.82,"count":58}}},
{"name":"간석3동","rate":1.09,"votes":{"early":{"rate":0.92,"count":24},"polling":{"rate":1.15,"count":89}}},
{"name":"간석4동","rate":0.93,"votes":{"early":{"rate":0.61,"count":15},"polling":{"rate":1.02,"count":90}}},
{"name":"만수1동","rate":0.95,"votes":{"early":{"rate":0.88,"count":20},"polling":{"rate":0.99,"count":48}}},
{"name":"만수2동","rate":1.01,"votes":{"early":{"rate":0.74,"count":27},"polling":{"rate":1.15,"count":84}}},
{"name":"만수3동","rate":0.98,"votes":{"early":{"rate":0.91,"count":21},"polling":{"rate":1.01,"count":50}}},
{"name":"만수4동","rate":0.84,"votes":{"early":{"rate":0.67,"count":23},"polling":{"rate":0.94,"count":53}}},
{"name":"만수5동","rate":1.27,"votes":{"early":{"rate":1.1,"count":19},"polling":{"rate":1.34,"count":61}}},
{"name":"만수6동","rate":1.01,"votes":{"early":{"rate":0.67,"count":21},"polling":{"rate":1.14,"count":90}}},
{"name":"장수서창동","rate":0.74,"votes":{"early":{"rate":0.67,"count":18},"polling":{"rate":0.77,"count":47}}},
{"name":"서창2동","rate":0.81,"votes":{"early":{"rate":0.72,"count":37},"polling":{"rate":0.85,"count":106}}},
{"name":"남촌도림동","rate":1,"votes":{"early":{"rate":1.12,"count":23},"polling":{"rate":0.96,"count":61}}},
{"name":"논현1동","rate":0.94,"votes":{"early":{"rate":0.95,"count":41},"polling":{"rate":0.93,"count":89}}},
{"name":"논현2동","rate":1.12,"votes":{"early":{"rate":0.93,"count":35},"polling":{"rate":1.19,"count":123}}},
{"name":"논현고잔동","rate":0.97,"votes":{"early":{"rate":0.9,"count":55},"polling":{"rate":1.01,"count":123}}},
{"name":"부평구_관외사전투표","rate":1.56,"votes":{"absentee":{"rate":1.56,"count":409}}},
{"name":"부평1동","rate":1.05,"votes":{"early":{"rate":1.12,"count":51},"polling":{"rate":1.03,"count":109}}},
{"name":"부평2동","rate":1.14,"votes":{"early":{"rate":0.88,"count":22},"polling":{"rate":1.28,"count":63}}},
{"name":"부평3동","rate":0.9,"votes":{"early":{"rate":0.98,"count":22},"polling":{"rate":0.86,"count":37}}},
{"name":"부평4동","rate":1.12,"votes":{"early":{"rate":0.8,"count":28},"polling":{"rate":1.23,"count":117}}},
{"name":"부평5동","rate":1.17,"votes":{"early":{"rate":0.53,"count":13},"polling":{"rate":1.37,"count":113}}},
{"name":"부평6동","rate":1.17,"votes":{"early":{"rate":0.88,"count":28},"polling":{"rate":1.35,"count":73}}},
{"name":"산곡1동","rate":1.59,"votes":{"early":{"rate":1.8,"count":29},"polling":{"rate":1.52,"count":73}}},
{"name":"산곡2동","rate":0.88,"votes":{"early":{"rate":0.77,"count":27},"polling":{"rate":0.93,"count":89}}},
{"name":"산곡3동","rate":0.97,"votes":{"early":{"rate":1.37,"count":46},"polling":{"rate":0.77,"count":52}}},
{"name":"산곡4동","rate":0.68,"votes":{"early":{"rate":0.52,"count":12},"polling":{"rate":0.74,"count":43}}},
{"name":"청천1동","rate":1,"votes":{"early":{"rate":1.02,"count":33},"polling":{"rate":0.99,"count":68}}},
{"name":"청천2동","rate":1.04,"votes":{"early":{"rate":0.86,"count":29},"polling":{"rate":1.1,"count":115}}},
{"name":"갈산1동","rate":1.17,"votes":{"early":{"rate":0.84,"count":20},"polling":{"rate":1.35,"count":57}}},
{"name":"갈산2동","rate":0.94,"votes":{"early":{"rate":1,"count":32},"polling":{"rate":0.9,"count":49}}},
{"name":"삼산1동","rate":1.14,"votes":{"early":{"rate":1.02,"count":47},"polling":{"rate":1.2,"count":118}}},
{"name":"삼산2동","rate":1.03,"votes":{"early":{"rate":0.91,"count":39},"polling":{"rate":1.1,"count":97}}},
{"name":"부개1동","rate":1.2,"votes":{"early":{"rate":0.58,"count":13},"polling":{"rate":1.51,"count":68}}},
{"name":"부개2동","rate":1.16,"votes":{"early":{"rate":0.84,"count":26},"polling":{"rate":1.33,"count":79}}},
{"name":"부개3동","rate":1.14,"votes":{"early":{"rate":1.25,"count":48},"polling":{"rate":1.1,"count":106}}},
{"name":"일신동","rate":1.08,"votes":{"early":{"rate":1.15,"count":21},"polling":{"rate":1.05,"count":38}}},
{"name":"십정1동","rate":0.95,"votes":{"early":{"rate":0.86,"count":33},"polling":{"rate":0.99,"count":74}}},
{"name":"십정2동","rate":1.15,"votes":{"early":{"rate":0.77,"count":15},"polling":{"rate":1.27,"count":81}}},
{"name":"계양구_관외사전투표","rate":1.73,"votes":{"absentee":{"rate":1.73,"count":245}}},
{"name":"효성1동","rate":0.96,"votes":{"early":{"rate":0.77,"count":32},"polling":{"rate":1.06,"count":89}}},
{"name":"효성2동","rate":1.04,"votes":{"early":{"rate":0.95,"count":35},"polling":{"rate":1.07,"count":108}}},
{"name":"계산1동","rate":1.09,"votes":{"early":{"rate":0.4,"count":7},"polling":{"rate":1.32,"count":70}}},
{"name":"계산2동","rate":1.02,"votes":{"early":{"rate":0.68,"count":16},"polling":{"rate":1.2,"count":53}}},
{"name":"계산3동","rate":1.15,"votes":{"early":{"rate":0.93,"count":25},"polling":{"rate":1.25,"count":70}}},
{"name":"계산4동","rate":1.07,"votes":{"early":{"rate":0.78,"count":31},"polling":{"rate":1.22,"count":92}}},
{"name":"작전1동","rate":1.07,"votes":{"early":{"rate":0.94,"count":29},"polling":{"rate":1.12,"count":93}}},
{"name":"작전2동","rate":0.93,"votes":{"early":{"rate":0.68,"count":23},"polling":{"rate":1.04,"count":80}}},
{"name":"작전서운동","rate":1,"votes":{"early":{"rate":0.63,"count":20},"polling":{"rate":1.11,"count":116}}},
{"name":"계양1동","rate":1.03,"votes":{"early":{"rate":1,"count":19},"polling":{"rate":1.04,"count":68}}},
{"name":"계양2동","rate":1.24,"votes":{"early":{"rate":1.04,"count":47},"polling":{"rate":1.34,"count":132}}},
{"name":"계양3동","rate":0.95,"votes":{"early":{"rate":0.71,"count":26},"polling":{"rate":1.07,"count":77}}},
{"name":"서해구_관외사전투표","rate":1.69,"votes":{"absentee":{"rate":1.69,"count":286}}},
{"name":"검암경서동","rate":1,"votes":{"early":{"rate":0.86,"count":40},"polling":{"rate":1.05,"count":141}}},
{"name":"연희동","rate":1.05,"votes":{"early":{"rate":0.86,"count":45},"polling":{"rate":1.14,"count":122}}},
{"name":"청라1동","rate":0.9,"votes":{"early":{"rate":1.12,"count":48},"polling":{"rate":0.79,"count":70}}},
{"name":"청라2동","rate":0.88,"votes":{"early":{"rate":0.86,"count":52},"polling":{"rate":0.89,"count":124}}},
{"name":"청라3동","rate":0.91,"votes":{"early":{"rate":0.92,"count":43},"polling":{"rate":0.91,"count":93}}},
{"name":"가정1동","rate":1.03,"votes":{"early":{"rate":1.3,"count":59},"polling":{"rate":0.94,"count":127}}},
{"name":"가정2동","rate":1.15,"votes":{"early":{"rate":1,"count":25},"polling":{"rate":1.22,"count":65}}},
{"name":"가정3동","rate":1,"votes":{"early":{"rate":0.74,"count":10},"polling":{"rate":1.14,"count":29}}},
{"name":"신현원창동","rate":1.07,"votes":{"early":{"rate":0.85,"count":22},"polling":{"rate":1.13,"count":110}}},
{"name":"석남1동","rate":1.18,"votes":{"early":{"rate":0.85,"count":18},"polling":{"rate":1.3,"count":83}}},
{"name":"석남2동","rate":1.12,"votes":{"early":{"rate":0.91,"count":19},"polling":{"rate":1.22,"count":49}}},
{"name":"석남3동","rate":1.05,"votes":{"early":{"rate":0.93,"count":17},"polling":{"rate":1.11,"count":39}}},
{"name":"가좌1동","rate":1.19,"votes":{"early":{"rate":1.01,"count":18},"polling":{"rate":1.29,"count":43}}},
{"name":"가좌2동","rate":0.89,"votes":{"early":{"rate":0.67,"count":22},"polling":{"rate":1,"count":62}}},
{"name":"가좌3동","rate":0.85,"votes":{"early":{"rate":0.75,"count":22},"polling":{"rate":0.92,"count":40}}},
{"name":"가좌4동","rate":0.64,"votes":{"early":{"rate":0.4,"count":7},"polling":{"rate":0.74,"count":29}}},
{"name":"검단구_관외사전투표","rate":1.63,"votes":{"absentee":{"rate":1.63,"count":218}}},
{"name":"검단동","rate":1,"votes":{"early":{"rate":0.93,"count":33},"polling":{"rate":1.03,"count":93}}},
{"name":"불로대곡동","rate":0.92,"votes":{"early":{"rate":0.81,"count":41},"polling":{"rate":0.96,"count":124}}},
{"name":"원당동","rate":0.95,"votes":{"early":{"rate":0.73,"count":24},"polling":{"rate":1.08,"count":67}}},
{"name":"당하동","rate":1.01,"votes":{"early":{"rate":0.86,"count":46},"polling":{"rate":1.07,"count":143}}},
{"name":"오류왕길동","rate":0.95,"votes":{"early":{"rate":0.66,"count":21},"polling":{"rate":1.08,"count":77}}},
{"name":"마전동","rate":1.08,"votes":{"early":{"rate":1.01,"count":37},"polling":{"rate":1.12,"count":66}}},
{"name":"아라1동","rate":0.98,"votes":{"early":{"rate":0.78,"count":42},"polling":{"rate":1.06,"count":131}}},
{"name":"아라2동","rate":0.85,"votes":{"early":{"rate":0.93,"count":38},"polling":{"rate":0.81,"count":67}}},
{"name":"강화군_관외사전투표","rate":0.97,"votes":{"absentee":{"rate":0.97,"count":48}}},
{"name":"강화읍","rate":0.67,"votes":{"early":{"rate":0.57,"count":25},"polling":{"rate":0.73,"count":48}}},
{"name":"선원면","rate":0.81,"votes":{"early":{"rate":0.56,"count":12},"polling":{"rate":0.99,"count":29}}},
{"name":"불은면","rate":0.71,"votes":{"early":{"rate":0.77,"count":9},"polling":{"rate":0.67,"count":10}}},
{"name":"길상면","rate":0.48,"votes":{"early":{"rate":0.41,"count":8},"polling":{"rate":0.54,"count":12}}},
{"name":"화도면","rate":0.95,"votes":{"early":{"rate":1,"count":8},"polling":{"rate":0.92,"count":14}}},
{"name":"양도면","rate":0.9,"votes":{"early":{"rate":0.82,"count":7},"polling":{"rate":0.95,"count":12}}},
{"name":"내가면","rate":0.6,"votes":{"early":{"rate":0.66,"count":4},"polling":{"rate":0.57,"count":6}}},
{"name":"하점면","rate":1.2,"votes":{"early":{"rate":0.61,"count":6},"polling":{"rate":1.68,"count":21}}},
{"name":"양사면","rate":0.68,"votes":{"early":{"rate":0.84,"count":3},"polling":{"rate":0.6,"count":4}}},
{"name":"송해면","rate":0.51,"votes":{"early":{"rate":0.63,"count":7},"polling":{"rate":0.36,"count":3}}},
{"name":"교동면","rate":0.76,"votes":{"early":{"rate":0.89,"count":6},"polling":{"rate":0.67,"count":6}}},
{"name":"삼산면","rate":1.12,"votes":{"early":{"rate":0.5,"count":2},"polling":{"rate":1.49,"count":10}}},
{"name":"서도면","rate":1.91,"votes":{"early":{"rate":1.08,"count":1},"polling":{"rate":2.2,"count":6}}},
{"name":"옹진군_관외사전투표","rate":1.4,"votes":{"absentee":{"rate":1.4,"count":28}}},
{"name":"북도면","rate":1.37,"votes":{"early":{"rate":0.3,"count":1},"polling":{"rate":1.83,"count":14}}},
{"name":"연평면","rate":1.77,"votes":{"early":{"rate":2.02,"count":10},"polling":{"rate":1.46,"count":6}}},
{"name":"백령면","rate":1.98,"votes":{"early":{"rate":1.69,"count":15},"polling":{"rate":2.16,"count":31}}},
{"name":"대청면","rate":2.32,"votes":{"early":{"rate":1.71,"count":6},"polling":{"rate":2.78,"count":13}}},
{"name":"덕적면","rate":1.92,"votes":{"early":{"rate":2.13,"count":8},"polling":{"rate":1.79,"count":11}}},
{"name":"자월면","rate":1.51,"votes":{"early":{"rate":1.29,"count":3},"polling":{"rate":1.61,"count":8}}},
{"name":"영흥면","rate":1.35,"votes":{"early":{"rate":1.15,"count":17},"polling":{"rate":1.52,"count":29}}}
] },

  // [  5] 광역단체장  | 강희린 | 대전광역시장
  { id: 5, voteRate: 2.35, totalVotes: 17370, result: '후보', quota: 1, districts: [], neighborhoods: [{ "name": "동구_관외사전투표", "rate": 2.66, "votes": { "absentee": { "rate": 2.66, "count": 343 } } },
{ "name": "중앙동", "rate": 1.50, "votes": { "polling": { "rate": 1.42, "count": 14 }, "early": { "rate": 1.63, "count": 10 } } },
{ "name": "신인동", "rate": 1.53, "votes": { "polling": { "rate": 1.53, "count": 79 }, "early": { "rate": 1.53, "count": 19 } } },
{ "name": "효동", "rate": 1.91, "votes": { "polling": { "rate": 2.05, "count": 177 }, "early": { "rate": 1.61, "count": 66 } } },
{ "name": "판암1동", "rate": 2.07, "votes": { "polling": { "rate": 2.24, "count": 83 }, "early": { "rate": 1.76, "count": 35 } } },
{ "name": "판암2동", "rate": 1.58, "votes": { "polling": { "rate": 1.50, "count": 37 }, "early": { "rate": 1.69, "count": 28 } } },
{ "name": "용운동", "rate": 1.78, "votes": { "polling": { "rate": 1.97, "count": 130 }, "early": { "rate": 1.34, "count": 37 } } },
{ "name": "대동", "rate": 1.98, "votes": { "polling": { "rate": 1.65, "count": 61 }, "early": { "rate": 2.46, "count": 62 } } },
{ "name": "자양동", "rate": 2.26, "votes": { "polling": { "rate": 2.38, "count": 70 }, "early": { "rate": 2.02, "count": 30 } } },
{ "name": "가양1동", "rate": 1.53, "votes": { "polling": { "rate": 1.68, "count": 64 }, "early": { "rate": 1.27, "count": 30 } } },
{ "name": "가양2동", "rate": 1.92, "votes": { "polling": { "rate": 2.03, "count": 113 }, "early": { "rate": 1.60, "count": 31 } } },
{ "name": "용전동", "rate": 2.19, "votes": { "polling": { "rate": 2.33, "count": 130 }, "early": { "rate": 1.85, "count": 41 } } },
{ "name": "성남동", "rate": 1.50, "votes": { "polling": { "rate": 1.26, "count": 44 }, "early": { "rate": 2.02, "count": 31 } } },
{ "name": "홍도동", "rate": 1.83, "votes": { "polling": { "rate": 2.01, "count": 65 }, "early": { "rate": 1.43, "count": 21 } } },
{ "name": "삼성동", "rate": 1.83, "votes": { "polling": { "rate": 1.88, "count": 82 }, "early": { "rate": 1.70, "count": 27 } } },
{ "name": "대청동", "rate": 1.33, "votes": { "polling": { "rate": 1.25, "count": 10 }, "early": { "rate": 1.57, "count": 4 } } },
{ "name": "산내동", "rate": 1.83, "votes": { "polling": { "rate": 2.04, "count": 131 }, "early": { "rate": 1.36, "count": 40 } } },
{ "name": "중구_관외사전투표", "rate": 3.05, "votes": { "absentee": { "rate": 3.05, "count": 411 } } },
{ "name": "은행선화동", "rate": 2.41, "votes": { "polling": { "rate": 2.46, "count": 170 }, "early": { "rate": 2.20, "count": 42 } } },
{ "name": "목동", "rate": 2.02, "votes": { "polling": { "rate": 1.81, "count": 91 }, "early": { "rate": 2.41, "count": 65 } } },
{ "name": "중촌동", "rate": 1.70, "votes": { "polling": { "rate": 1.82, "count": 98 }, "early": { "rate": 1.32, "count": 23 } } },
{ "name": "대흥동", "rate": 2.28, "votes": { "polling": { "rate": 2.35, "count": 81 }, "early": { "rate": 2.14, "count": 35 } } },
{ "name": "문창동", "rate": 1.76, "votes": { "polling": { "rate": 1.81, "count": 25 }, "early": { "rate": 1.63, "count": 10 } } },
{ "name": "석교동", "rate": 1.61, "votes": { "polling": { "rate": 1.65, "count": 75 }, "early": { "rate": 1.51, "count": 28 } } },
{ "name": "대사동", "rate": 2.60, "votes": { "polling": { "rate": 3.11, "count": 47 }, "early": { "rate": 1.58, "count": 12 } } },
{ "name": "부사동", "rate": 1.52, "votes": { "polling": { "rate": 1.55, "count": 29 }, "early": { "rate": 1.46, "count": 12 } } },
{ "name": "용두동", "rate": 2.21, "votes": { "polling": { "rate": 2.41, "count": 74 }, "early": { "rate": 1.81, "count": 27 } } },
{ "name": "오류동", "rate": 2.22, "votes": { "polling": { "rate": 2.31, "count": 74 }, "early": { "rate": 2.04, "count": 34 } } },
{ "name": "태평1동", "rate": 2.01, "votes": { "polling": { "rate": 1.83, "count": 80 }, "early": { "rate": 2.42, "count": 45 } } },
{ "name": "태평2동", "rate": 2.07, "votes": { "polling": { "rate": 2.10, "count": 175 }, "early": { "rate": 1.99, "count": 53 } } },
{ "name": "유천1동", "rate": 2.20, "votes": { "polling": { "rate": 2.07, "count": 36 }, "early": { "rate": 2.48, "count": 20 } } },
{ "name": "유천2동", "rate": 1.59, "votes": { "polling": { "rate": 1.45, "count": 62 }, "early": { "rate": 1.96, "count": 30 } } },
{ "name": "문화1동", "rate": 1.91, "votes": { "polling": { "rate": 1.86, "count": 127 }, "early": { "rate": 2.05, "count": 54 } } },
{ "name": "문화2동", "rate": 1.97, "votes": { "polling": { "rate": 2.09, "count": 76 }, "early": { "rate": 1.74, "count": 34 } } },
{ "name": "산성동", "rate": 1.66, "votes": { "polling": { "rate": 1.72, "count": 144 }, "early": { "rate": 1.44, "count": 35 } } },
{ "name": "서구_관외사전투표", "rate": 3.22, "votes": { "absentee": { "rate": 3.22, "count": 861 } } },
{ "name": "복수동", "rate": 1.87, "votes": { "polling": { "rate": 1.94, "count": 117 }, "early": { "rate": 1.73, "count": 52 } } },
{ "name": "도마1동", "rate": 1.97, "votes": { "polling": { "rate": 1.99, "count": 115 }, "early": { "rate": 1.90, "count": 45 } } },
{ "name": "도마2동", "rate": 1.67, "votes": { "polling": { "rate": 1.54, "count": 101 }, "early": { "rate": 2.12, "count": 40 } } },
{ "name": "정림동", "rate": 1.39, "votes": { "polling": { "rate": 1.47, "count": 70 }, "early": { "rate": 1.23, "count": 31 } } },
{ "name": "변동", "rate": 1.12, "votes": { "polling": { "rate": 1.28, "count": 48 }, "early": { "rate": 0.56, "count": 6 } } },
{ "name": "용문동", "rate": 2.49, "votes": { "polling": { "rate": 2.33, "count": 133 }, "early": { "rate": 2.85, "count": 73 } } },
{ "name": "탄방동", "rate": 2.57, "votes": { "polling": { "rate": 2.62, "count": 261 }, "early": { "rate": 2.35, "count": 54 } } },
{ "name": "둔산1동", "rate": 1.97, "votes": { "polling": { "rate": 1.93, "count": 106 }, "early": { "rate": 2.03, "count": 54 } } },
{ "name": "둔산2동", "rate": 2.21, "votes": { "polling": { "rate": 2.25, "count": 273 }, "early": { "rate": 2.04, "count": 47 } } },
{ "name": "둔산3동", "rate": 1.89, "votes": { "polling": { "rate": 2.10, "count": 131 }, "early": { "rate": 1.56, "count": 61 } } },
{ "name": "괴정동", "rate": 2.04, "votes": { "polling": { "rate": 2.14, "count": 91 }, "early": { "rate": 1.73, "count": 23 } } },
{ "name": "가장동", "rate": 1.72, "votes": { "polling": { "rate": 1.60, "count": 58 }, "early": { "rate": 1.97, "count": 32 } } },
{ "name": "내동", "rate": 1.60, "votes": { "polling": { "rate": 1.57, "count": 113 }, "early": { "rate": 1.69, "count": 42 } } },
{ "name": "갈마1동", "rate": 2.10, "votes": { "polling": { "rate": 2.25, "count": 129 }, "early": { "rate": 1.71, "count": 40 } } },
{ "name": "갈마2동", "rate": 2.34, "votes": { "polling": { "rate": 2.53, "count": 152 }, "early": { "rate": 1.92, "count": 52 } } },
{ "name": "월평1동", "rate": 3.31, "votes": { "polling": { "rate": 3.49, "count": 110 }, "early": { "rate": 2.82, "count": 34 } } },
{ "name": "월평2동", "rate": 1.90, "votes": { "polling": { "rate": 1.86, "count": 86 }, "early": { "rate": 1.97, "count": 53 } } },
{ "name": "월평3동", "rate": 2.06, "votes": { "polling": { "rate": 2.16, "count": 150 }, "early": { "rate": 1.83, "count": 56 } } },
{ "name": "만년동", "rate": 3.68, "votes": { "polling": { "rate": 3.83, "count": 152 }, "early": { "rate": 3.41, "count": 77 } } },
{ "name": "가수원동", "rate": 1.75, "votes": { "polling": { "rate": 1.69, "count": 52 }, "early": { "rate": 1.84, "count": 39 } } },
{ "name": "도안동", "rate": 2.20, "votes": { "polling": { "rate": 2.25, "count": 249 }, "early": { "rate": 2.04, "count": 65 } } },
{ "name": "관저1동", "rate": 2.31, "votes": { "polling": { "rate": 2.26, "count": 96 }, "early": { "rate": 2.40, "count": 66 } } },
{ "name": "관저2동", "rate": 2.21, "votes": { "polling": { "rate": 2.42, "count": 336 }, "early": { "rate": 1.75, "count": 112 } } },
{ "name": "기성동", "rate": 2.64, "votes": { "polling": { "rate": 2.66, "count": 28 }, "early": { "rate": 2.60, "count": 19 } } },
{ "name": "유성구_관외사전투표", "rate": 3.61, "votes": { "absentee": { "rate": 3.61, "count": 822 } } },
{ "name": "진잠동", "rate": 1.80, "votes": { "polling": { "rate": 1.81, "count": 144 }, "early": { "rate": 1.76, "count": 50 } } },
{ "name": "학하동", "rate": 2.68, "votes": { "polling": { "rate": 2.66, "count": 165 }, "early": { "rate": 2.71, "count": 86 } } },
{ "name": "원신흥동", "rate": 2.09, "votes": { "polling": { "rate": 2.24, "count": 227 }, "early": { "rate": 1.77, "count": 78 } } },
{ "name": "상대동", "rate": 2.38, "votes": { "polling": { "rate": 2.40, "count": 186 }, "early": { "rate": 2.30, "count": 61 } } },
{ "name": "온천1동", "rate": 3.39, "votes": { "polling": { "rate": 3.40, "count": 261 }, "early": { "rate": 3.37, "count": 126 } } },
{ "name": "온천2동", "rate": 4.35, "votes": { "polling": { "rate": 4.15, "count": 605 }, "early": { "rate": 5.18, "count": 181 } } },
{ "name": "노은1동", "rate": 3.31, "votes": { "polling": { "rate": 3.26, "count": 200 }, "early": { "rate": 3.37, "count": 124 } } },
{ "name": "노은2동", "rate": 2.44, "votes": { "polling": { "rate": 2.33, "count": 181 }, "early": { "rate": 2.75, "count": 73 } } },
{ "name": "노은3동", "rate": 2.63, "votes": { "polling": { "rate": 2.74, "count": 323 }, "early": { "rate": 2.36, "count": 126 } } },
{ "name": "신성동", "rate": 4.06, "votes": { "polling": { "rate": 4.00, "count": 312 }, "early": { "rate": 4.21, "count": 150 } } },
{ "name": "전민동", "rate": 3.01, "votes": { "polling": { "rate": 3.13, "count": 261 }, "early": { "rate": 2.79, "count": 119 } } },
{ "name": "구즉동", "rate": 2.69, "votes": { "polling": { "rate": 2.80, "count": 264 }, "early": { "rate": 2.49, "count": 124 } } },
{ "name": "관평동", "rate": 2.39, "votes": { "polling": { "rate": 2.45, "count": 279 }, "early": { "rate": 2.27, "count": 141 } } },
{ "name": "대덕구_관외사전투표", "rate": 2.83, "votes": { "absentee": { "rate": 2.83, "count": 230 } } },
{ "name": "오정동", "rate": 1.76, "votes": { "polling": { "rate": 1.77, "count": 77 }, "early": { "rate": 1.75, "count": 24 } } },
{ "name": "대화동", "rate": 2.58, "votes": { "polling": { "rate": 2.91, "count": 47 }, "early": { "rate": 1.96, "count": 17 } } },
{ "name": "회덕동", "rate": 1.68, "votes": { "polling": { "rate": 1.71, "count": 82 }, "early": { "rate": 1.55, "count": 19 } } },
{ "name": "비래동", "rate": 1.49, "votes": { "polling": { "rate": 1.56, "count": 75 }, "early": { "rate": 1.34, "count": 32 } } },
{ "name": "송촌동", "rate": 1.93, "votes": { "polling": { "rate": 2.07, "count": 175 }, "early": { "rate": 1.65, "count": 68 } } },
{ "name": "중리동", "rate": 2.10, "votes": { "polling": { "rate": 2.12, "count": 117 }, "early": { "rate": 2.02, "count": 37 } } },
{ "name": "법1동", "rate": 2.02, "votes": { "polling": { "rate": 2.22, "count": 89 }, "early": { "rate": 1.63, "count": 34 } } },
{ "name": "법2동", "rate": 2.23, "votes": { "polling": { "rate": 2.10, "count": 110 }, "early": { "rate": 2.54, "count": 59 } } },
{ "name": "신탄진동", "rate": 2.45, "votes": { "polling": { "rate": 2.68, "count": 140 }, "early": { "rate": 1.96, "count": 47 } } },
{ "name": "석봉동", "rate": 2.55, "votes": { "polling": { "rate": 2.71, "count": 128 }, "early": { "rate": 2.23, "count": 55 } } },
{ "name": "덕암동", "rate": 2.33, "votes": { "polling": { "rate": 2.47, "count": 92 }, "early": { "rate": 2.06, "count": 38 } } },
{ "name": "목상동", "rate": 2.21, "votes": { "polling": { "rate": 2.35, "count": 36 }, "early": { "rate": 2.02, "count": 22 } } }
] },

  // [  6] 광역단체장  | 하헌휘 | 세종특별자치시장
  { id: 6, voteRate: 2.94, totalVotes: 5641, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 5.36,
  votes: { absentee: { rate: 5.36, count: 1031 } }
},

{ name: '조치원읍', rate: 2.01,
  votes: {
    early: { rate: 1.14, count: 76 },
    polling: { rate: 2.06, count: 259 }
  }
},

{ name: '연기면', rate: 1.47,
  votes: {
    early: { rate: 2.77, count: 11 },
    polling: { rate: 1.11, count: 7 }
  }
},

{ name: '연동면', rate: 1.15,
  votes: {
    early: { rate: 0.81, count: 3 },
    polling: { rate: 1.26, count: 12 }
  }
},

{ name: '부강면', rate: 1.88,
  votes: {
    early: { rate: 1.76, count: 16 },
    polling: { rate: 1.89, count: 29 }
  }
},

{ name: '금남면', rate: 2.07,
  votes: {
    early: { rate: 1.88, count: 24 },
    polling: { rate: 2.09, count: 57 }
  }
},

{ name: '장군면', rate: 1.76,
  votes: {
    early: { rate: 1.50, count: 12 },
    polling: { rate: 1.87, count: 31 }
  }
},

{ name: '연서면', rate: 1.92,
  votes: {
    early: { rate: 1.20, count: 9 },
    polling: { rate: 2.14, count: 46 }
  }
},

{ name: '전의면', rate: 1.25,
  votes: {
    early: { rate: 1.54, count: 13 },
    polling: { rate: 1.31, count: 18 }
  }
},

{ name: '전동면', rate: 1.96,
  votes: {
    early: { rate: 2.35, count: 10 },
    polling: { rate: 1.86, count: 17 }
  }
},

{ name: '소정면', rate: 1.77,
  votes: {
    early: { rate: 2.14, count: 8 },
    polling: { rate: 1.72, count: 9 }
  }
},

{ name: '한솔동', rate: 2.66,
  votes: {
    early: { rate: 2.07, count: 55 },
    polling: { rate: 2.86, count: 156 }
  }
},

{ name: '도담동', rate: 3.39,
  votes: {
    early: { rate: 3.13, count: 131 },
    polling: { rate: 3.54, count: 233 }
  }
},

{ name: '아름동', rate: 3.30,
  votes: {
    early: { rate: 3.46, count: 129 },
    polling: { rate: 3.22, count: 197 }
  }
},

{ name: '종촌동', rate: 3.30,
  votes: {
    early: { rate: 2.89, count: 114 },
    polling: { rate: 3.48, count: 265 }
  }
},

{ name: '고운동', rate: 2.46,
  votes: {
    early: { rate: 2.17, count: 92 },
    polling: { rate: 2.57, count: 240 }
  }
},

{ name: '보람동', rate: 2.70,
  votes: {
    early: { rate: 2.50, count: 77 },
    polling: { rate: 2.84, count: 140 }
  }
},

{ name: '새롬동', rate: 3.17,
  votes: {
    early: { rate: 2.81, count: 117 },
    polling: { rate: 3.35, count: 224 }
  }
},

{ name: '대평동', rate: 2.26,
  votes: {
    early: { rate: 2.75, count: 57 },
    polling: { rate: 2.30, count: 55 }
  }
},

{ name: '소담동', rate: 2.83,
  votes: {
    early: { rate: 2.61, count: 100 },
    polling: { rate: 2.96, count: 164 }
  }
},

{ name: '다정동', rate: 2.68,
  votes: {
    early: { rate: 2.35, count: 107 },
    polling: { rate: 2.87, count: 205 }
  }
},

{ name: '해밀동', rate: 3.71,
  votes: {
    early: { rate: 3.59, count: 114 },
    polling: { rate: 3.74, count: 232 }
  }
},

{ name: '반곡동', rate: 3.29,
  votes: {
    early: { rate: 2.84, count: 112 },
    polling: { rate: 3.50, count: 270 }
  }
},

{ name: '어진동', rate: 4.09,
  votes: {
    early: { rate: 2.85, count: 32 },
    polling: { rate: 4.18, count: 133 }
  }
},

{ name: '나성동', rate: 3.14,
  votes: {
    early: { rate: 3.04, count: 68 },
    polling: { rate: 3.21, count: 96 }
  }
}] },

  // [  7] 광역단체장  | 조응천 | 경기도지사
  { id: 7, voteRate: 4.32, totalVotes: 295232, result: '후보', quota: 1, districts: [], neighborhoods: [
{"name":"수원시장안구_관외사전투표","rate":5.12,"votes":{"absentee":{"rate":5.12,"count":623}}},
{"name":"파장동","rate":4.53,"votes":{"early":{"rate":3.44,"count":107},"polling":{"rate":4.93,"count":423}}},
{"name":"정자1동","rate":4.49,"votes":{"early":{"rate":3.81,"count":174},"polling":{"rate":4.76,"count":552}}},
{"name":"정자2동","rate":4.28,"votes":{"early":{"rate":3.46,"count":106},"polling":{"rate":4.47,"count":578}}},
{"name":"정자3동","rate":4.77,"votes":{"early":{"rate":4.29,"count":236},"polling":{"rate":4.96,"count":695}}},
{"name":"영화동","rate":3.32,"votes":{"early":{"rate":2.46,"count":55},"polling":{"rate":3.68,"count":195}}},
{"name":"송죽동","rate":3.53,"votes":{"early":{"rate":3.77,"count":89},"polling":{"rate":3.42,"count":187}}},
{"name":"조원1동","rate":4.19,"votes":{"early":{"rate":4,"count":138},"polling":{"rate":4.26,"count":366}}},
{"name":"조원2동","rate":4.8,"votes":{"early":{"rate":3.93,"count":148},"polling":{"rate":5.38,"count":303}}},
{"name":"연무동","rate":3.59,"votes":{"early":{"rate":3.39,"count":58},"polling":{"rate":3.65,"count":223}}},
{"name":"수원시권선구_관외사전투표","rate":5.13,"votes":{"absentee":{"rate":5.13,"count":1035}}},
{"name":"세류2동","rate":3.45,"votes":{"early":{"rate":2.51,"count":59},"polling":{"rate":3.8,"count":243}}},
{"name":"세류3동","rate":3.19,"votes":{"early":{"rate":1.91,"count":41},"polling":{"rate":3.81,"count":171}}},
{"name":"평동","rate":3.9,"votes":{"early":{"rate":3.15,"count":79},"polling":{"rate":4.03,"count":591}}},
{"name":"서둔동","rate":3.9,"votes":{"early":{"rate":3.29,"count":127},"polling":{"rate":4.11,"count":450}}},
{"name":"구운동","rate":4.2,"votes":{"early":{"rate":2.99,"count":77},"polling":{"rate":4.63,"count":340}}},
{"name":"금곡동","rate":4.12,"votes":{"early":{"rate":3.76,"count":229},"polling":{"rate":4.27,"count":630}}},
{"name":"호매실동","rate":3.72,"votes":{"early":{"rate":3.19,"count":206},"polling":{"rate":4,"count":479}}},
{"name":"권선1동","rate":4.18,"votes":{"early":{"rate":4.01,"count":88},"polling":{"rate":4.22,"count":308}}},
{"name":"권선2동","rate":5.02,"votes":{"early":{"rate":4.7,"count":240},"polling":{"rate":5.12,"count":837}}},
{"name":"곡선동","rate":4.66,"votes":{"early":{"rate":3.61,"count":137},"polling":{"rate":5.02,"count":558}}},
{"name":"입북동","rate":3.93,"votes":{"early":{"rate":3.16,"count":64},"polling":{"rate":4.16,"count":281}}},
{"name":"율천동","rate":5.55,"votes":{"early":{"rate":5.68,"count":258},"polling":{"rate":5.51,"count":792}}},
{"name":"수원시팔달구_관외사전투표","rate":5.51,"votes":{"absentee":{"rate":5.51,"count":614}}},
{"name":"행궁동","rate":4.14,"votes":{"early":{"rate":3.08,"count":33},"polling":{"rate":4.57,"count":119}}},
{"name":"매교동","rate":4.43,"votes":{"early":{"rate":4.09,"count":82},"polling":{"rate":4.52,"count":339}}},
{"name":"매산동","rate":4.29,"votes":{"early":{"rate":3.58,"count":42},"polling":{"rate":4.55,"count":142}}},
{"name":"고등동","rate":4.61,"votes":{"early":{"rate":3.92,"count":129},"polling":{"rate":5.03,"count":275}}},
{"name":"화서1동","rate":4.23,"votes":{"early":{"rate":4.4,"count":113},"polling":{"rate":4.16,"count":271}}},
{"name":"화서2동","rate":5.36,"votes":{"early":{"rate":5.12,"count":179},"polling":{"rate":5.46,"count":463}}},
{"name":"지동","rate":3.89,"votes":{"early":{"rate":3.34,"count":56},"polling":{"rate":4.16,"count":143}}},
{"name":"우만1동","rate":4.13,"votes":{"early":{"rate":3.52,"count":73},"polling":{"rate":4.35,"count":249}}},
{"name":"우만2동","rate":5.64,"votes":{"early":{"rate":5.72,"count":152},"polling":{"rate":5.6,"count":290}}},
{"name":"인계동","rate":4.83,"votes":{"early":{"rate":4.52,"count":161},"polling":{"rate":4.91,"count":656}}},
{"name":"세류1동","rate":4.66,"votes":{"early":{"rate":3.99,"count":63},"polling":{"rate":5,"count":156}}},
{"name":"수원시영통구_관외사전투표","rate":6.56,"votes":{"absentee":{"rate":6.56,"count":1310}}},
{"name":"매탄1동","rate":4.62,"votes":{"early":{"rate":4.14,"count":60},"polling":{"rate":4.82,"count":168}}},
{"name":"매탄2동","rate":4.17,"votes":{"early":{"rate":3.87,"count":70},"polling":{"rate":4.29,"count":186}}},
{"name":"매탄3동","rate":4.73,"votes":{"early":{"rate":3.87,"count":173},"polling":{"rate":5.08,"count":556}}},
{"name":"매탄4동","rate":4.49,"votes":{"early":{"rate":4.81,"count":118},"polling":{"rate":4.36,"count":271}}},
{"name":"원천동","rate":5.39,"votes":{"early":{"rate":5.22,"count":178},"polling":{"rate":5.43,"count":793}}},
{"name":"광교1동","rate":5.91,"votes":{"early":{"rate":5.5,"count":326},"polling":{"rate":6.04,"count":1175}}},
{"name":"광교2동","rate":5.8,"votes":{"early":{"rate":6.05,"count":170},"polling":{"rate":5.73,"count":601}}},
{"name":"영통1동","rate":5.28,"votes":{"early":{"rate":4.54,"count":203},"polling":{"rate":5.59,"count":611}}},
{"name":"영통2동","rate":6.77,"votes":{"early":{"rate":6.64,"count":290},"polling":{"rate":6.84,"count":586}}},
{"name":"영통3동","rate":5.76,"votes":{"early":{"rate":5.54,"count":205},"polling":{"rate":5.84,"count":638}}},
{"name":"망포1동","rate":5.49,"votes":{"early":{"rate":5.41,"count":185},"polling":{"rate":5.52,"count":521}}},
{"name":"망포2동","rate":5.13,"votes":{"early":{"rate":4.6,"count":239},"polling":{"rate":5.37,"count":635}}},
{"name":"성남시수정구_관외사전투표","rate":4.24,"votes":{"absentee":{"rate":4.24,"count":644}}},
{"name":"신흥1동","rate":3.02,"votes":{"early":{"rate":3.06,"count":60},"polling":{"rate":2.99,"count":92}}},
{"name":"신흥2동","rate":4.3,"votes":{"early":{"rate":3.34,"count":124},"polling":{"rate":4.62,"count":509}}},
{"name":"신흥3동","rate":3.4,"votes":{"early":{"rate":3.65,"count":94},"polling":{"rate":3.17,"count":90}}},
{"name":"태평1동","rate":3.32,"votes":{"early":{"rate":2.46,"count":55},"polling":{"rate":3.8,"count":156}}},
{"name":"태평2동","rate":3.04,"votes":{"early":{"rate":2.85,"count":47},"polling":{"rate":3.12,"count":133}}},
{"name":"태평3동","rate":3.59,"votes":{"early":{"rate":3.58,"count":83},"polling":{"rate":3.6,"count":123}}},
{"name":"태평4동","rate":2.87,"votes":{"early":{"rate":3.34,"count":59},"polling":{"rate":2.58,"count":73}}},
{"name":"수진1동","rate":2.58,"votes":{"early":{"rate":2.83,"count":51},"polling":{"rate":2.44,"count":77}}},
{"name":"수진2동","rate":3.15,"votes":{"early":{"rate":2.58,"count":63},"polling":{"rate":3.46,"count":153}}},
{"name":"단대동","rate":3.34,"votes":{"early":{"rate":2.65,"count":51},"polling":{"rate":3.62,"count":170}}},
{"name":"산성동","rate":2.93,"votes":{"early":{"rate":3.59,"count":25},"polling":{"rate":2.63,"count":40}}},
{"name":"양지동","rate":3.17,"votes":{"early":{"rate":2.86,"count":47},"polling":{"rate":3.36,"count":89}}},
{"name":"복정동","rate":5.04,"votes":{"early":{"rate":3.7,"count":61},"polling":{"rate":5.55,"count":238}}},
{"name":"위례동","rate":4.94,"votes":{"early":{"rate":4.61,"count":272},"polling":{"rate":5.07,"count":773}}},
{"name":"신촌동","rate":5.19,"votes":{"early":{"rate":6.06,"count":30},"polling":{"rate":4.85,"count":61}}},
{"name":"고등동","rate":4.21,"votes":{"early":{"rate":3.74,"count":76},"polling":{"rate":4.45,"count":175}}},
{"name":"시흥동","rate":4.89,"votes":{"early":{"rate":6.22,"count":28},"polling":{"rate":4.36,"count":50}}},
{"name":"성남시중원구_관외사전투표","rate":4.15,"votes":{"absentee":{"rate":4.15,"count":546}}},
{"name":"성남동","rate":3.47,"votes":{"early":{"rate":3.39,"count":144},"polling":{"rate":3.51,"count":364}}},
{"name":"중앙동","rate":4.16,"votes":{"early":{"rate":2.99,"count":69},"polling":{"rate":4.65,"count":255}}},
{"name":"금광1동","rate":4.18,"votes":{"early":{"rate":3.84,"count":125},"polling":{"rate":4.36,"count":274}}},
{"name":"금광2동","rate":3,"votes":{"early":{"rate":2.11,"count":75},"polling":{"rate":3.48,"count":231}}},
{"name":"은행1동","rate":3.46,"votes":{"early":{"rate":3.11,"count":54},"polling":{"rate":3.68,"count":99}}},
{"name":"은행2동","rate":2.48,"votes":{"early":{"rate":2.02,"count":63},"polling":{"rate":2.72,"count":157}}},
{"name":"상대원1동","rate":3.17,"votes":{"early":{"rate":3.08,"count":82},"polling":{"rate":3.2,"count":233}}},
{"name":"상대원2동","rate":2.63,"votes":{"early":{"rate":2.82,"count":21},"polling":{"rate":2.46,"count":19}}},
{"name":"상대원3동","rate":2.47,"votes":{"early":{"rate":2.72,"count":58},"polling":{"rate":2.29,"count":70}}},
{"name":"하대원동","rate":3.28,"votes":{"early":{"rate":3.02,"count":107},"polling":{"rate":3.41,"count":226}}},
{"name":"도촌동","rate":3.7,"votes":{"early":{"rate":3.11,"count":105},"polling":{"rate":3.92,"count":359}}},
{"name":"성남시분당구_관외사전투표","rate":5.64,"votes":{"absentee":{"rate":5.64,"count":1404}}},
{"name":"분당동","rate":5.18,"votes":{"early":{"rate":4.95,"count":115},"polling":{"rate":5.24,"count":476}}},
{"name":"수내1동","rate":5.81,"votes":{"early":{"rate":5.48,"count":135},"polling":{"rate":5.94,"count":389}}},
{"name":"수내2동","rate":5.8,"votes":{"early":{"rate":6.02,"count":82},"polling":{"rate":5.72,"count":210}}},
{"name":"수내3동","rate":5.48,"votes":{"early":{"rate":4.7,"count":99},"polling":{"rate":5.86,"count":254}}},
{"name":"정자동","rate":6.34,"votes":{"early":{"rate":7.65,"count":93},"polling":{"rate":6.04,"count":317}}},
{"name":"정자1동","rate":6.55,"votes":{"early":{"rate":6.66,"count":180},"polling":{"rate":6.53,"count":760}}},
{"name":"정자2동","rate":4.79,"votes":{"early":{"rate":5.44,"count":94},"polling":{"rate":4.56,"count":230}}},
{"name":"정자3동","rate":5.26,"votes":{"early":{"rate":4.78,"count":114},"polling":{"rate":5.45,"count":325}}},
{"name":"서현1동","rate":5.72,"votes":{"early":{"rate":5.41,"count":232},"polling":{"rate":5.85,"count":615}}},
{"name":"서현2동","rate":5.37,"votes":{"early":{"rate":4.94,"count":139},"polling":{"rate":5.56,"count":358}}},
{"name":"이매1동","rate":5.46,"votes":{"early":{"rate":4.77,"count":127},"polling":{"rate":5.64,"count":566}}},
{"name":"이매2동","rate":5.97,"votes":{"early":{"rate":5.83,"count":122},"polling":{"rate":6.03,"count":294}}},
{"name":"야탑1동","rate":4.53,"votes":{"early":{"rate":4.85,"count":186},"polling":{"rate":4.33,"count":279}}},
{"name":"야탑2동","rate":5.66,"votes":{"early":{"rate":6.12,"count":129},"polling":{"rate":5.5,"count":347}}},
{"name":"야탑3동","rate":4.61,"votes":{"early":{"rate":4.2,"count":123},"polling":{"rate":4.73,"count":475}}},
{"name":"금곡동","rate":4.92,"votes":{"early":{"rate":5.3,"count":147},"polling":{"rate":4.82,"count":518}}},
{"name":"구미동","rate":4.82,"votes":{"early":{"rate":5.62,"count":169},"polling":{"rate":4.61,"count":516}}},
{"name":"구미1동","rate":4.82,"votes":{"early":{"rate":4.27,"count":153},"polling":{"rate":5.16,"count":297}}},
{"name":"판교동","rate":6.16,"votes":{"early":{"rate":5.39,"count":172},"polling":{"rate":6.41,"count":634}}},
{"name":"삼평동","rate":5.3,"votes":{"early":{"rate":4.69,"count":148},"polling":{"rate":5.53,"count":466}}},
{"name":"백현동","rate":5.28,"votes":{"early":{"rate":5.03,"count":178},"polling":{"rate":5.37,"count":523}}},
{"name":"운중동","rate":5.21,"votes":{"early":{"rate":5.47,"count":219},"polling":{"rate":5.14,"count":755}}},
{"name":"의정부시_관외사전투표","rate":4.17,"votes":{"absentee":{"rate":4.17,"count":902}}},
{"name":"의정부1동","rate":3.54,"votes":{"early":{"rate":3.88,"count":127},"polling":{"rate":3.43,"count":346}}},
{"name":"의정부2동","rate":3.23,"votes":{"early":{"rate":2.89,"count":75},"polling":{"rate":3.34,"count":288}}},
{"name":"호원1동","rate":2.93,"votes":{"early":{"rate":2.86,"count":143},"polling":{"rate":2.97,"count":321}}},
{"name":"호원2동","rate":3.47,"votes":{"early":{"rate":3.43,"count":208},"polling":{"rate":3.49,"count":359}}},
{"name":"장암동","rate":3.55,"votes":{"early":{"rate":3.37,"count":102},"polling":{"rate":3.64,"count":232}}},
{"name":"신곡1동","rate":3.29,"votes":{"early":{"rate":3.13,"count":135},"polling":{"rate":3.33,"count":469}}},
{"name":"신곡2동","rate":3.53,"votes":{"early":{"rate":3.26,"count":190},"polling":{"rate":3.63,"count":546}}},
{"name":"송산1동","rate":3.9,"votes":{"early":{"rate":3.64,"count":128},"polling":{"rate":3.99,"count":381}}},
{"name":"송산2동","rate":3.71,"votes":{"early":{"rate":3.56,"count":177},"polling":{"rate":3.79,"count":349}}},
{"name":"송산3동","rate":3.72,"votes":{"early":{"rate":3.39,"count":194},"polling":{"rate":3.87,"count":489}}},
{"name":"자금동","rate":3.48,"votes":{"early":{"rate":2.85,"count":80},"polling":{"rate":3.68,"count":320}}},
{"name":"가능동","rate":3.12,"votes":{"early":{"rate":2.76,"count":111},"polling":{"rate":3.34,"count":217}}},
{"name":"흥선동","rate":3.15,"votes":{"early":{"rate":3.06,"count":75},"polling":{"rate":3.2,"count":150}}},
{"name":"녹양동","rate":3.38,"votes":{"early":{"rate":3.15,"count":101},"polling":{"rate":3.52,"count":190}}},
{"name":"고산동","rate":3.97,"votes":{"early":{"rate":3.13,"count":111},"polling":{"rate":4.29,"count":387}}},
{"name":"안양시만안구_관외사전투표","rate":4.63,"votes":{"absentee":{"rate":4.63,"count":556}}},
{"name":"안양1동","rate":5.01,"votes":{"early":{"rate":4.73,"count":141},"polling":{"rate":5.14,"count":343}}},
{"name":"안양2동","rate":3.7,"votes":{"early":{"rate":3.17,"count":84},"polling":{"rate":3.9,"count":283}}},
{"name":"안양3동","rate":3.41,"votes":{"early":{"rate":3.56,"count":84},"polling":{"rate":3.33,"count":157}}},
{"name":"안양4동","rate":3.24,"votes":{"early":{"rate":3.18,"count":48},"polling":{"rate":3.29,"count":67}}},
{"name":"안양5동","rate":3.19,"votes":{"early":{"rate":2.69,"count":57},"polling":{"rate":3.42,"count":153}}},
{"name":"안양6동","rate":3.64,"votes":{"early":{"rate":3.23,"count":103},"polling":{"rate":3.79,"count":321}}},
{"name":"안양7동","rate":3.67,"votes":{"early":{"rate":3.44,"count":91},"polling":{"rate":3.8,"count":179}}},
{"name":"안양8동","rate":3.46,"votes":{"early":{"rate":3.79,"count":53},"polling":{"rate":3.27,"count":78}}},
{"name":"안양9동","rate":2.98,"votes":{"early":{"rate":2.38,"count":58},"polling":{"rate":3.28,"count":159}}},
{"name":"석수1동","rate":4.36,"votes":{"early":{"rate":4.23,"count":112},"polling":{"rate":4.41,"count":310}}},
{"name":"석수2동","rate":3.98,"votes":{"early":{"rate":3.49,"count":132},"polling":{"rate":4.16,"count":438}}},
{"name":"충훈동","rate":3.56,"votes":{"early":{"rate":3.07,"count":64},"polling":{"rate":3.85,"count":136}}},
{"name":"박달동","rate":2.93,"votes":{"early":{"rate":2.43,"count":58},"polling":{"rate":3.22,"count":133}}},
{"name":"호현동","rate":4.1,"votes":{"early":{"rate":3.32,"count":94},"polling":{"rate":4.43,"count":294}}},
{"name":"안양시동안구_관외사전투표","rate":5.58,"votes":{"absentee":{"rate":5.58,"count":1008}}},
{"name":"비산1동","rate":4.96,"votes":{"early":{"rate":4.68,"count":167},"polling":{"rate":5.06,"count":524}}},
{"name":"비산2동","rate":4.89,"votes":{"early":{"rate":4.36,"count":133},"polling":{"rate":5.26,"count":234}}},
{"name":"비산3동","rate":4.32,"votes":{"early":{"rate":4.28,"count":120},"polling":{"rate":4.34,"count":247}}},
{"name":"부흥동","rate":4.6,"votes":{"early":{"rate":4.73,"count":131},"polling":{"rate":4.54,"count":244}}},
{"name":"달안동","rate":4.28,"votes":{"early":{"rate":4.21,"count":70},"polling":{"rate":4.32,"count":149}}},
{"name":"관양동","rate":4.62,"votes":{"early":{"rate":4.69,"count":185},"polling":{"rate":4.59,"count":530}}},
{"name":"인덕원동","rate":4.89,"votes":{"early":{"rate":4.87,"count":121},"polling":{"rate":4.9,"count":307}}},
{"name":"부림동","rate":4.83,"votes":{"early":{"rate":5.03,"count":197},"polling":{"rate":4.74,"count":416}}},
{"name":"평촌동","rate":4.87,"votes":{"early":{"rate":4.73,"count":136},"polling":{"rate":4.95,"count":252}}},
{"name":"평안동","rate":4.82,"votes":{"early":{"rate":4.93,"count":174},"polling":{"rate":4.76,"count":356}}},
{"name":"귀인동","rate":5.54,"votes":{"early":{"rate":5.09,"count":108},"polling":{"rate":5.72,"count":302}}},
{"name":"호계1동","rate":5.18,"votes":{"early":{"rate":4.99,"count":174},"polling":{"rate":5.25,"count":502}}},
{"name":"호계2동","rate":4.48,"votes":{"early":{"rate":4.85,"count":172},"polling":{"rate":4.34,"count":414}}},
{"name":"호계3동","rate":3.82,"votes":{"early":{"rate":3.53,"count":140},"polling":{"rate":3.96,"count":299}}},
{"name":"범계동","rate":5.95,"votes":{"early":{"rate":5.79,"count":131},"polling":{"rate":6.02,"count":311}}},
{"name":"신촌동","rate":4.96,"votes":{"early":{"rate":4.26,"count":95},"polling":{"rate":5.33,"count":221}}},
{"name":"갈산동","rate":4.97,"votes":{"early":{"rate":4.63,"count":73},"polling":{"rate":5.13,"count":180}}},
{"name":"부천시원미구_관외사전투표","rate":4.77,"votes":{"absentee":{"rate":4.77,"count":876}}},
{"name":"심곡1동","rate":3.47,"votes":{"early":{"rate":3.18,"count":48},"polling":{"rate":3.61,"count":119}}},
{"name":"심곡2동","rate":3.66,"votes":{"early":{"rate":2.42,"count":53},"polling":{"rate":4.3,"count":182}}},
{"name":"심곡3동","rate":3.44,"votes":{"early":{"rate":2.47,"count":34},"polling":{"rate":3.87,"count":120}}},
{"name":"원미1동","rate":3.38,"votes":{"early":{"rate":3.02,"count":79},"polling":{"rate":3.57,"count":175}}},
{"name":"원미2동","rate":3.17,"votes":{"early":{"rate":2.59,"count":43},"polling":{"rate":3.45,"count":117}}},
{"name":"춘의동","rate":3.11,"votes":{"early":{"rate":2.67,"count":50},"polling":{"rate":3.31,"count":141}}},
{"name":"도당동","rate":2.91,"votes":{"early":{"rate":2.46,"count":48},"polling":{"rate":3.05,"count":184}}},
{"name":"약대동","rate":3.95,"votes":{"early":{"rate":3.51,"count":98},"polling":{"rate":4.19,"count":212}}},
{"name":"중동","rate":4.49,"votes":{"early":{"rate":3.65,"count":90},"polling":{"rate":4.81,"count":312}}},
{"name":"중1동","rate":4.68,"votes":{"early":{"rate":4.21,"count":202},"polling":{"rate":4.86,"count":609}}},
{"name":"중2동","rate":4.76,"votes":{"early":{"rate":4.32,"count":71},"polling":{"rate":4.83,"count":476}}},
{"name":"중3동","rate":4.75,"votes":{"early":{"rate":5.02,"count":156},"polling":{"rate":4.64,"count":354}}},
{"name":"중4동","rate":4.8,"votes":{"early":{"rate":4.43,"count":205},"polling":{"rate":5.11,"count":278}}},
{"name":"상동","rate":3.71,"votes":{"early":{"rate":2.81,"count":73},"polling":{"rate":4.12,"count":234}}},
{"name":"상1동","rate":4.22,"votes":{"early":{"rate":4.41,"count":191},"polling":{"rate":4.11,"count":298}}},
{"name":"상2동","rate":3.93,"votes":{"early":{"rate":3.66,"count":150},"polling":{"rate":4.06,"count":341}}},
{"name":"상3동","rate":4.42,"votes":{"early":{"rate":3.94,"count":184},"polling":{"rate":4.65,"count":448}}},
{"name":"부천시소사구_관외사전투표","rate":4.19,"votes":{"absentee":{"rate":4.19,"count":531}}},
{"name":"심곡본1동","rate":3.57,"votes":{"early":{"rate":3.14,"count":83},"polling":{"rate":3.82,"count":168}}},
{"name":"심곡본동","rate":3.67,"votes":{"early":{"rate":3.84,"count":66},"polling":{"rate":3.6,"count":156}}},
{"name":"소사본동","rate":3.66,"votes":{"early":{"rate":3.05,"count":92},"polling":{"rate":3.89,"count":301}}},
{"name":"소사본1동","rate":3.66,"votes":{"early":{"rate":3.1,"count":132},"polling":{"rate":3.92,"count":363}}},
{"name":"범박동","rate":4.09,"votes":{"early":{"rate":3.28,"count":144},"polling":{"rate":4.52,"count":382}}},
{"name":"옥길동","rate":3.6,"votes":{"early":{"rate":3.6,"count":153},"polling":{"rate":3.6,"count":356}}},
{"name":"괴안동","rate":3.8,"votes":{"early":{"rate":3.87,"count":111},"polling":{"rate":3.76,"count":188}}},
{"name":"역곡3동","rate":3.65,"votes":{"early":{"rate":2.55,"count":90},"polling":{"rate":4.2,"count":300}}},
{"name":"송내1동","rate":4.05,"votes":{"early":{"rate":3.88,"count":92},"polling":{"rate":4.11,"count":283}}},
{"name":"송내2동","rate":3.51,"votes":{"early":{"rate":3.28,"count":122},"polling":{"rate":3.63,"count":278}}},
{"name":"역곡1동","rate":3.37,"votes":{"early":{"rate":3.67,"count":110},"polling":{"rate":3.2,"count":158}}},
{"name":"역곡2동","rate":3.89,"votes":{"early":{"rate":3.29,"count":106},"polling":{"rate":4.31,"count":198}}},
{"name":"소사동","rate":3.5,"votes":{"early":{"rate":3.83,"count":41},"polling":{"rate":3.29,"count":56}}},
{"name":"부천시오정구_관외사전투표","rate":3.97,"votes":{"absentee":{"rate":3.97,"count":297}}},
{"name":"성곡동","rate":3.54,"votes":{"early":{"rate":3.05,"count":145},"polling":{"rate":3.73,"count":445}}},
{"name":"원종1동","rate":3.35,"votes":{"early":{"rate":2.75,"count":83},"polling":{"rate":3.62,"count":241}}},
{"name":"원종2동","rate":2.89,"votes":{"early":{"rate":3.02,"count":55},"polling":{"rate":2.84,"count":148}}},
{"name":"고강본동","rate":2.98,"votes":{"early":{"rate":2.71,"count":84},"polling":{"rate":3.11,"count":214}}},
{"name":"고강1동","rate":2.61,"votes":{"early":{"rate":2.01,"count":44},"polling":{"rate":3.01,"count":97}}},
{"name":"오정동","rate":3.1,"votes":{"early":{"rate":2.84,"count":77},"polling":{"rate":3.22,"count":198}}},
{"name":"신흥동","rate":3.3,"votes":{"early":{"rate":2.48,"count":33},"polling":{"rate":3.52,"count":174}}},
{"name":"광명시_관외사전투표","rate":4.5,"votes":{"absentee":{"rate":4.5,"count":663}}},
{"name":"광명1동","rate":4.59,"votes":{"early":{"rate":4.68,"count":83},"polling":{"rate":4.56,"count":268}}},
{"name":"광명2동","rate":4.22,"votes":{"early":{"rate":3.49,"count":57},"polling":{"rate":4.7,"count":117}}},
{"name":"광명3동","rate":3.1,"votes":{"early":{"rate":2.78,"count":24},"polling":{"rate":3.2,"count":92}}},
{"name":"광명4동","rate":3.33,"votes":{"early":{"rate":4.22,"count":68},"polling":{"rate":2.77,"count":71}}},
{"name":"광명5동","rate":3.18,"votes":{"early":{"rate":2.93,"count":54},"polling":{"rate":3.32,"count":109}}},
{"name":"광명6동","rate":3.52,"votes":{"early":{"rate":2.81,"count":60},"polling":{"rate":3.9,"count":157}}},
{"name":"광명7동","rate":3.88,"votes":{"early":{"rate":3.33,"count":141},"polling":{"rate":4.16,"count":346}}},
{"name":"철산1동","rate":4.4,"votes":{"early":{"rate":3.81,"count":74},"polling":{"rate":4.79,"count":144}}},
{"name":"철산2동","rate":4.48,"votes":{"early":{"rate":4.23,"count":126},"polling":{"rate":4.6,"count":300}}},
{"name":"철산3동","rate":4.25,"votes":{"early":{"rate":3.91,"count":183},"polling":{"rate":4.37,"count":588}}},
{"name":"철산4동","rate":4.55,"votes":{"early":{"rate":4.64,"count":76},"polling":{"rate":4.5,"count":141}}},
{"name":"하안1동","rate":4.21,"votes":{"early":{"rate":3.99,"count":126},"polling":{"rate":4.29,"count":368}}},
{"name":"하안2동","rate":4.36,"votes":{"early":{"rate":4.63,"count":116},"polling":{"rate":4.19,"count":161}}},
{"name":"하안3동","rate":3.88,"votes":{"early":{"rate":3.83,"count":126},"polling":{"rate":3.9,"count":248}}},
{"name":"하안4동","rate":3.4,"votes":{"early":{"rate":3.61,"count":88},"polling":{"rate":3.26,"count":119}}},
{"name":"소하1동","rate":3.56,"votes":{"early":{"rate":2.89,"count":120},"polling":{"rate":3.84,"count":388}}},
{"name":"소하2동","rate":3.39,"votes":{"early":{"rate":3.35,"count":139},"polling":{"rate":3.41,"count":291}}},
{"name":"일직동","rate":4.87,"votes":{"early":{"rate":5.31,"count":143},"polling":{"rate":4.71,"count":326}}},
{"name":"학온동","rate":2.78,"votes":{"early":{"rate":0.83,"count":2},"polling":{"rate":3.55,"count":22}}},
{"name":"평택시_관외사전투표","rate":5.13,"votes":{"absentee":{"rate":5.13,"count":1452}}},
{"name":"팽성읍","rate":3.6,"votes":{"early":{"rate":2.97,"count":87},"polling":{"rate":3.83,"count":307}}},
{"name":"안중읍","rate":4.01,"votes":{"early":{"rate":3.78,"count":202},"polling":{"rate":4.12,"count":494}}},
{"name":"포승읍","rate":3.55,"votes":{"early":{"rate":3.51,"count":116},"polling":{"rate":3.58,"count":194}}},
{"name":"청북읍","rate":3.61,"votes":{"early":{"rate":2.86,"count":65},"polling":{"rate":3.83,"count":287}}},
{"name":"진위면","rate":3.46,"votes":{"early":{"rate":3.13,"count":42},"polling":{"rate":3.61,"count":112}}},
{"name":"서탄면","rate":3.19,"votes":{"early":{"rate":3.89,"count":19},"polling":{"rate":2.86,"count":30}}},
{"name":"고덕면","rate":4.32,"votes":{"early":{"rate":4.9,"count":124},"polling":{"rate":3.96,"count":162}}},
{"name":"오성면","rate":4.45,"votes":{"early":{"rate":4.86,"count":52},"polling":{"rate":4.22,"count":83}}},
{"name":"현덕면","rate":3.67,"votes":{"early":{"rate":3.21,"count":74},"polling":{"rate":3.89,"count":182}}},
{"name":"중앙동","rate":4,"votes":{"early":{"rate":3.97,"count":147},"polling":{"rate":4.01,"count":578}}},
{"name":"서정동","rate":3.96,"votes":{"early":{"rate":3.68,"count":88},"polling":{"rate":4.06,"count":256}}},
{"name":"송탄동","rate":3.79,"votes":{"early":{"rate":3.71,"count":64},"polling":{"rate":3.81,"count":277}}},
{"name":"지산동","rate":3.64,"votes":{"early":{"rate":2.78,"count":38},"polling":{"rate":4.06,"count":113}}},
{"name":"송북동","rate":3.39,"votes":{"early":{"rate":2.98,"count":80},"polling":{"rate":3.58,"count":203}}},
{"name":"신장1동","rate":3.87,"votes":{"early":{"rate":3.41,"count":25},"polling":{"rate":4.09,"count":61}}},
{"name":"신장2동","rate":3.03,"votes":{"early":{"rate":2.81,"count":18},"polling":{"rate":3.15,"count":37}}},
{"name":"신평동","rate":3.78,"votes":{"early":{"rate":3.42,"count":53},"polling":{"rate":3.89,"count":216}}},
{"name":"원평동","rate":4.42,"votes":{"early":{"rate":5.39,"count":95},"polling":{"rate":3.94,"count":137}}},
{"name":"통복동","rate":3.65,"votes":{"early":{"rate":3.74,"count":31},"polling":{"rate":3.61,"count":67}}},
{"name":"비전1동","rate":4,"votes":{"early":{"rate":3.54,"count":162},"polling":{"rate":4.14,"count":623}}},
{"name":"비전2동","rate":3.96,"votes":{"early":{"rate":4.43,"count":231},"polling":{"rate":3.83,"count":671}}},
{"name":"세교동","rate":4.38,"votes":{"early":{"rate":3.65,"count":132},"polling":{"rate":4.61,"count":525}}},
{"name":"용이동","rate":4.08,"votes":{"early":{"rate":3.15,"count":89},"polling":{"rate":4.43,"count":337}}},
{"name":"동삭동","rate":5.15,"votes":{"early":{"rate":3.98,"count":132},"polling":{"rate":5.48,"count":658}}},
{"name":"고덕동","rate":4.54,"votes":{"early":{"rate":4.78,"count":141},"polling":{"rate":4.5,"count":862}}},
{"name":"양주시_관외사전투표","rate":4.01,"votes":{"absentee":{"rate":4.01,"count":590}}},
{"name":"백석읍","rate":2.63,"votes":{"early":{"rate":2.71,"count":90},"polling":{"rate":2.59,"count":207}}},
{"name":"은현면","rate":3.01,"votes":{"early":{"rate":3.22,"count":27},"polling":{"rate":2.9,"count":48}}},
{"name":"남면","rate":2.7,"votes":{"early":{"rate":3.23,"count":28},"polling":{"rate":2.45,"count":45}}},
{"name":"광적면","rate":2.63,"votes":{"early":{"rate":2.04,"count":50},"polling":{"rate":3.2,"count":83}}},
{"name":"장흥면","rate":3.26,"votes":{"early":{"rate":3.1,"count":62},"polling":{"rate":3.34,"count":130}}},
{"name":"양주1동","rate":2.56,"votes":{"early":{"rate":3.98,"count":27},"polling":{"rate":1.98,"count":33}}},
{"name":"양주2동","rate":3.08,"votes":{"early":{"rate":2.92,"count":162},"polling":{"rate":3.14,"count":468}}},
{"name":"회천1동","rate":3.51,"votes":{"early":{"rate":3.08,"count":47},"polling":{"rate":3.74,"count":108}}},
{"name":"회천2동","rate":2.86,"votes":{"early":{"rate":2.52,"count":138},"polling":{"rate":3,"count":394}}},
{"name":"회천3동","rate":3.46,"votes":{"early":{"rate":3.02,"count":111},"polling":{"rate":3.69,"count":256}}},
{"name":"옥정1동","rate":3.25,"votes":{"early":{"rate":3.27,"count":129},"polling":{"rate":3.24,"count":383}}},
{"name":"옥정2동","rate":3.3,"votes":{"early":{"rate":3.22,"count":182},"polling":{"rate":3.32,"count":536}}},
{"name":"동두천시_관외사전투표","rate":4.47,"votes":{"absentee":{"rate":4.47,"count":179}}},
{"name":"생연1동","rate":2.74,"votes":{"early":{"rate":2.76,"count":27},"polling":{"rate":2.72,"count":44}}},
{"name":"생연2동","rate":2.93,"votes":{"early":{"rate":2.67,"count":57},"polling":{"rate":3.11,"count":96}}},
{"name":"중앙동","rate":2.75,"votes":{"early":{"rate":3.03,"count":32},"polling":{"rate":2.51,"count":30}}},
{"name":"보산동","rate":3.62,"votes":{"early":{"rate":4.11,"count":21},"polling":{"rate":3.25,"count":22}}},
{"name":"불현동","rate":2.95,"votes":{"early":{"rate":2.48,"count":87},"polling":{"rate":3.18,"count":227}}},
{"name":"송내동","rate":2.75,"votes":{"early":{"rate":2.36,"count":82},"polling":{"rate":2.94,"count":212}}},
{"name":"소요동","rate":2.86,"votes":{"early":{"rate":3.35,"count":40},"polling":{"rate":2.63,"count":68}}},
{"name":"상패동","rate":2.52,"votes":{"early":{"rate":2.71,"count":22},"polling":{"rate":2.4,"count":32}}},
{"name":"안산시상록구_관외사전투표","rate":4.62,"votes":{"absentee":{"rate":4.62,"count":652}}},
{"name":"일동","rate":2.96,"votes":{"early":{"rate":2.8,"count":84},"polling":{"rate":3.04,"count":187}}},
{"name":"이동","rate":3.51,"votes":{"early":{"rate":3.48,"count":68},"polling":{"rate":3.52,"count":231}}},
{"name":"사동","rate":3.92,"votes":{"early":{"rate":4.01,"count":149},"polling":{"rate":3.89,"count":354}}},
{"name":"사이동","rate":3.74,"votes":{"early":{"rate":3.43,"count":120},"polling":{"rate":3.85,"count":370}}},
{"name":"해양동","rate":4.75,"votes":{"early":{"rate":4.35,"count":174},"polling":{"rate":4.87,"count":684}}},
{"name":"본오1동","rate":3.15,"votes":{"early":{"rate":2.79,"count":95},"polling":{"rate":3.29,"count":304}}},
{"name":"본오2동","rate":3.47,"votes":{"early":{"rate":2.8,"count":54},"polling":{"rate":3.62,"count":299}}},
{"name":"본오3동","rate":3.95,"votes":{"early":{"rate":3.61,"count":99},"polling":{"rate":4.11,"count":234}}},
{"name":"부곡동","rate":2.45,"votes":{"early":{"rate":2.48,"count":63},"polling":{"rate":2.44,"count":135}}},
{"name":"월피동","rate":3.37,"votes":{"early":{"rate":2.45,"count":80},"polling":{"rate":3.63,"count":415}}},
{"name":"성포동","rate":3.78,"votes":{"early":{"rate":3.23,"count":118},"polling":{"rate":4.01,"count":357}}},
{"name":"반월동","rate":3.64,"votes":{"early":{"rate":3.43,"count":99},"polling":{"rate":3.73,"count":230}}},
{"name":"안산동","rate":2.42,"votes":{"early":{"rate":2.52,"count":34},"polling":{"rate":2.36,"count":57}}},
{"name":"안산시단원구_관외사전투표","rate":4.27,"votes":{"absentee":{"rate":4.27,"count":575}}},
{"name":"와동","rate":2.97,"votes":{"early":{"rate":2.2,"count":72},"polling":{"rate":3.24,"count":304}}},
{"name":"고잔동","rate":3.54,"votes":{"early":{"rate":3.54,"count":92},"polling":{"rate":3.55,"count":213}}},
{"name":"중앙동","rate":3.79,"votes":{"early":{"rate":3.07,"count":115},"polling":{"rate":4.2,"count":285}}},
{"name":"호수동","rate":3.79,"votes":{"early":{"rate":2.82,"count":130},"polling":{"rate":4.08,"count":644}}},
{"name":"원곡동","rate":1.98,"votes":{"early":{"rate":1.92,"count":14},"polling":{"rate":2.01,"count":27}}},
{"name":"백운동","rate":3.35,"votes":{"early":{"rate":2.88,"count":113},"polling":{"rate":3.61,"count":262}}},
{"name":"신길동","rate":2.86,"votes":{"early":{"rate":2.67,"count":69},"polling":{"rate":2.93,"count":195}}},
{"name":"초지동","rate":3.83,"votes":{"early":{"rate":3.51,"count":189},"polling":{"rate":3.94,"count":594}}},
{"name":"선부1동","rate":3.21,"votes":{"early":{"rate":2.76,"count":63},"polling":{"rate":3.38,"count":193}}},
{"name":"선부2동","rate":2.99,"votes":{"early":{"rate":2.49,"count":50},"polling":{"rate":3.2,"count":148}}},
{"name":"선부3동","rate":3.34,"votes":{"early":{"rate":2.87,"count":83},"polling":{"rate":3.47,"count":369}}},
{"name":"대부동","rate":2.74,"votes":{"early":{"rate":3.2,"count":49},"polling":{"rate":2.48,"count":67}}},
{"name":"고양시덕양구_관외사전투표","rate":4.49,"votes":{"absentee":{"rate":4.49,"count":1316}}},
{"name":"주교동","rate":3.02,"votes":{"early":{"rate":2.55,"count":44},"polling":{"rate":3.29,"count":97}}},
{"name":"원신동","rate":3.64,"votes":{"early":{"rate":2.39,"count":37},"polling":{"rate":3.89,"count":303}}},
{"name":"흥도동","rate":3.73,"votes":{"early":{"rate":2.92,"count":60},"polling":{"rate":3.89,"count":402}}},
{"name":"성사1동","rate":4.13,"votes":{"early":{"rate":3.21,"count":114},"polling":{"rate":4.55,"count":352}}},
{"name":"성사2동","rate":3.94,"votes":{"early":{"rate":3.62,"count":65},"polling":{"rate":4.09,"count":150}}},
{"name":"효자동","rate":4.17,"votes":{"early":{"rate":4.06,"count":159},"polling":{"rate":4.22,"count":344}}},
{"name":"삼송1동","rate":4.3,"votes":{"early":{"rate":3.61,"count":136},"polling":{"rate":4.66,"count":341}}},
{"name":"삼송2동","rate":4.28,"votes":{"early":{"rate":4.34,"count":154},"polling":{"rate":4.26,"count":377}}},
{"name":"창릉동","rate":4.16,"votes":{"early":{"rate":3.33,"count":84},"polling":{"rate":4.47,"count":311}}},
{"name":"고양동","rate":3,"votes":{"early":{"rate":2.37,"count":98},"polling":{"rate":3.34,"count":248}}},
{"name":"관산동","rate":2.76,"votes":{"early":{"rate":2.74,"count":88},"polling":{"rate":2.76,"count":278}}},
{"name":"능곡동","rate":3.95,"votes":{"early":{"rate":3.3,"count":93},"polling":{"rate":4.29,"count":232}}},
{"name":"화정1동","rate":4.74,"votes":{"early":{"rate":4.13,"count":245},"polling":{"rate":5.06,"count":591}}},
{"name":"화정2동","rate":4.58,"votes":{"early":{"rate":3.87,"count":159},"polling":{"rate":4.85,"count":516}}},
{"name":"행주동","rate":3.16,"votes":{"early":{"rate":3.22,"count":43},"polling":{"rate":3.13,"count":111}}},
{"name":"행신1동","rate":4.49,"votes":{"early":{"rate":3.76,"count":107},"polling":{"rate":4.79,"count":335}}},
{"name":"행신2동","rate":4.11,"votes":{"early":{"rate":3.5,"count":153},"polling":{"rate":4.38,"count":446}}},
{"name":"행신3동","rate":4.01,"votes":{"early":{"rate":3.47,"count":124},"polling":{"rate":4.26,"count":335}}},
{"name":"행신4동","rate":3.65,"votes":{"early":{"rate":3.28,"count":107},"polling":{"rate":3.86,"count":221}}},
{"name":"화전동","rate":3.89,"votes":{"early":{"rate":3.36,"count":65},"polling":{"rate":3.99,"count":397}}},
{"name":"대덕동","rate":4.21,"votes":{"early":{"rate":4.06,"count":69},"polling":{"rate":4.25,"count":228}}},
{"name":"식사동","rate":4.52,"votes":{"early":{"rate":3.92,"count":162},"polling":{"rate":4.72,"count":588}}},
{"name":"고양시일산동구_관외사전투표","rate":4.65,"votes":{"absentee":{"rate":4.65,"count":807}}},
{"name":"중산1동","rate":4.38,"votes":{"early":{"rate":3.71,"count":123},"polling":{"rate":4.76,"count":278}}},
{"name":"중산2동","rate":3.78,"votes":{"early":{"rate":3.14,"count":88},"polling":{"rate":4.03,"count":296}}},
{"name":"정발산동","rate":4.15,"votes":{"early":{"rate":3.31,"count":85},"polling":{"rate":4.47,"count":310}}},
{"name":"풍산동","rate":3.79,"votes":{"early":{"rate":3.1,"count":131},"polling":{"rate":4.01,"count":534}}},
{"name":"백석1동","rate":4.92,"votes":{"early":{"rate":4.7,"count":141},"polling":{"rate":4.98,"count":499}}},
{"name":"백석2동","rate":4.43,"votes":{"early":{"rate":3.27,"count":92},"polling":{"rate":5,"count":286}}},
{"name":"마두1동","rate":4.85,"votes":{"early":{"rate":4.38,"count":60},"polling":{"rate":4.93,"count":412}}},
{"name":"마두2동","rate":5.67,"votes":{"early":{"rate":4.19,"count":153},"polling":{"rate":6.74,"count":345}}},
{"name":"장항1동","rate":4.81,"votes":{"early":{"rate":4.16,"count":41},"polling":{"rate":4.91,"count":328}}},
{"name":"장항2동","rate":4.81,"votes":{"early":{"rate":4.72,"count":119},"polling":{"rate":4.84,"count":343}}},
{"name":"고봉동","rate":2.76,"votes":{"early":{"rate":1.82,"count":28},"polling":{"rate":3.02,"count":170}}},
{"name":"일산2동","rate":3.73,"votes":{"early":{"rate":3.32,"count":107},"polling":{"rate":3.94,"count":249}}},
{"name":"고양시일산서구_관외사전투표","rate":4.82,"votes":{"absentee":{"rate":4.82,"count":662}}},
{"name":"일산1동","rate":3.8,"votes":{"early":{"rate":3.21,"count":123},"polling":{"rate":4.1,"count":306}}},
{"name":"일산3동","rate":4.51,"votes":{"early":{"rate":3.7,"count":155},"polling":{"rate":4.82,"count":536}}},
{"name":"탄현1동","rate":3.99,"votes":{"early":{"rate":3.08,"count":118},"polling":{"rate":4.37,"count":410}}},
{"name":"탄현2동","rate":4.28,"votes":{"early":{"rate":3.7,"count":112},"polling":{"rate":4.61,"count":241}}},
{"name":"주엽1동","rate":5.01,"votes":{"early":{"rate":4.35,"count":154},"polling":{"rate":5.26,"count":500}}},
{"name":"주엽2동","rate":4.64,"votes":{"early":{"rate":5.17,"count":158},"polling":{"rate":4.46,"count":409}}},
{"name":"대화동","rate":4.34,"votes":{"early":{"rate":3.75,"count":110},"polling":{"rate":4.49,"count":527}}},
{"name":"송포동","rate":4.43,"votes":{"early":{"rate":3.28,"count":88},"polling":{"rate":4.89,"count":334}}},
{"name":"덕이동","rate":3.41,"votes":{"early":{"rate":3.1,"count":96},"polling":{"rate":3.51,"count":322}}},
{"name":"가좌동","rate":3.27,"votes":{"early":{"rate":3.39,"count":96},"polling":{"rate":3.21,"count":184}}},
{"name":"과천시_관외사전투표","rate":5.33,"votes":{"absentee":{"rate":5.33,"count":268}}},
{"name":"중앙동","rate":6.42,"votes":{"early":{"rate":6.42,"count":140},"polling":{"rate":6.42,"count":287}}},
{"name":"원문동","rate":6.32,"votes":{"early":{"rate":5.44,"count":125},"polling":{"rate":6.64,"count":419}}},
{"name":"갈현동","rate":4.68,"votes":{"early":{"rate":5.12,"count":108},"polling":{"rate":4.53,"count":292}}},
{"name":"별양동","rate":5.99,"votes":{"early":{"rate":5.91,"count":88},"polling":{"rate":6.01,"count":289}}},
{"name":"부림동","rate":5.85,"votes":{"early":{"rate":7.07,"count":119},"polling":{"rate":5.21,"count":168}}},
{"name":"과천동","rate":3.84,"votes":{"early":{"rate":3.46,"count":25},"polling":{"rate":3.96,"count":89}}},
{"name":"문원동","rate":4.7,"votes":{"early":{"rate":4.57,"count":59},"polling":{"rate":4.77,"count":116}}},
{"name":"의왕시_관외사전투표","rate":5.73,"votes":{"absentee":{"rate":5.73,"count":546}}},
{"name":"고천동","rate":4.59,"votes":{"early":{"rate":4.57,"count":147},"polling":{"rate":4.61,"count":287}}},
{"name":"부곡동","rate":3.81,"votes":{"early":{"rate":3.6,"count":172},"polling":{"rate":3.91,"count":379}}},
{"name":"오전동","rate":3.87,"votes":{"early":{"rate":3.17,"count":115},"polling":{"rate":4.07,"count":523}}},
{"name":"내손1동","rate":4.84,"votes":{"early":{"rate":4.48,"count":118},"polling":{"rate":4.97,"count":365}}},
{"name":"내손2동","rate":5.1,"votes":{"early":{"rate":4.78,"count":206},"polling":{"rate":5.24,"count":528}}},
{"name":"청계동","rate":4.59,"votes":{"early":{"rate":4.14,"count":178},"polling":{"rate":4.72,"count":714}}},
{"name":"구리시_관외사전투표","rate":5.13,"votes":{"absentee":{"rate":5.13,"count":457}}},
{"name":"갈매동","rate":4.32,"votes":{"early":{"rate":4.17,"count":209},"polling":{"rate":4.4,"count":391}}},
{"name":"동구동","rate":4.36,"votes":{"early":{"rate":3.94,"count":166},"polling":{"rate":4.49,"count":625}}},
{"name":"인창동","rate":4.11,"votes":{"early":{"rate":3.97,"count":131},"polling":{"rate":4.16,"count":362}}},
{"name":"교문1동","rate":3.36,"votes":{"early":{"rate":3.61,"count":52},"polling":{"rate":3.29,"count":160}}},
{"name":"교문2동","rate":4.86,"votes":{"early":{"rate":4.94,"count":108},"polling":{"rate":4.83,"count":370}}},
{"name":"수택1동","rate":3.78,"votes":{"early":{"rate":3.56,"count":83},"polling":{"rate":3.87,"count":208}}},
{"name":"수택2동","rate":3.45,"votes":{"early":{"rate":2.95,"count":80},"polling":{"rate":3.62,"count":291}}},
{"name":"수택3동","rate":4.15,"votes":{"early":{"rate":3.78,"count":169},"polling":{"rate":4.38,"count":322}}},
{"name":"남양주시_관외사전투표","rate":6.55,"votes":{"absentee":{"rate":6.55,"count":2269}}},
{"name":"와부읍","rate":4.82,"votes":{"early":{"rate":4.28,"count":305},"polling":{"rate":4.99,"count":1132}}},
{"name":"진접읍","rate":3.63,"votes":{"early":{"rate":3.11,"count":278},"polling":{"rate":3.79,"count":1096}}},
{"name":"화도읍","rate":8.92,"votes":{"early":{"rate":7.84,"count":790},"polling":{"rate":9.25,"count":3075}}},
{"name":"진건읍","rate":4.1,"votes":{"early":{"rate":4.2,"count":113},"polling":{"rate":4.05,"count":266}}},
{"name":"오남읍","rate":3.61,"votes":{"early":{"rate":2.72,"count":170},"polling":{"rate":3.99,"count":574}}},
{"name":"퇴계원읍","rate":4.07,"votes":{"early":{"rate":4.34,"count":165},"polling":{"rate":3.96,"count":356}}},
{"name":"별내면","rate":3.88,"votes":{"early":{"rate":3.9,"count":112},"polling":{"rate":3.87,"count":229}}},
{"name":"수동면","rate":11.39,"votes":{"early":{"rate":11.88,"count":250},"polling":{"rate":10.99,"count":284}}},
{"name":"조안면","rate":4.94,"votes":{"early":{"rate":4.51,"count":26},"polling":{"rate":5.15,"count":61}}},
{"name":"호평동","rate":9.92,"votes":{"early":{"rate":8.31,"count":603},"polling":{"rate":10.62,"count":1770}}},
{"name":"평내동","rate":9.65,"votes":{"early":{"rate":8.62,"count":439},"polling":{"rate":10.1,"count":1176}}},
{"name":"금곡동","rate":5.53,"votes":{"early":{"rate":4.7,"count":98},"polling":{"rate":5.83,"count":339}}},
{"name":"양정동","rate":5.18,"votes":{"early":{"rate":5.09,"count":22},"polling":{"rate":5.23,"count":35}}},
{"name":"다산1동","rate":4.96,"votes":{"early":{"rate":4.38,"count":354},"polling":{"rate":5.09,"count":1861}}},
{"name":"다산2동","rate":4.92,"votes":{"early":{"rate":4.57,"count":228},"polling":{"rate":5.06,"count":610}}},
{"name":"별내동","rate":4.53,"votes":{"early":{"rate":4.38,"count":390},"polling":{"rate":4.58,"count":1210}}},
{"name":"오산시_관외사전투표","rate":5.21,"votes":{"absentee":{"rate":5.21,"count":597}}},
{"name":"중앙동","rate":4.65,"votes":{"early":{"rate":4.25,"count":195},"polling":{"rate":4.83,"count":512}}},
{"name":"대원1동","rate":4,"votes":{"early":{"rate":3.52,"count":187},"polling":{"rate":4.2,"count":548}}},
{"name":"대원2동","rate":3.87,"votes":{"early":{"rate":3.5,"count":89},"polling":{"rate":4,"count":310}}},
{"name":"남촌동","rate":4.1,"votes":{"early":{"rate":3.49,"count":78},"polling":{"rate":4.27,"count":331}}},
{"name":"신장1동","rate":4.11,"votes":{"early":{"rate":3.67,"count":139},"polling":{"rate":4.26,"count":439}}},
{"name":"신장2동","rate":4.15,"votes":{"early":{"rate":4.43,"count":110},"polling":{"rate":4.06,"count":291}}},
{"name":"세마동","rate":4.59,"votes":{"early":{"rate":3.99,"count":135},"polling":{"rate":4.78,"count":500}}},
{"name":"초평동","rate":3.82,"votes":{"early":{"rate":3.68,"count":155},"polling":{"rate":3.89,"count":312}}},
{"name":"화성시만세구_관외사전투표","rate":5.24,"votes":{"absentee":{"rate":5.24,"count":663}}},
{"name":"우정읍","rate":3.39,"votes":{"early":{"rate":3.27,"count":91},"polling":{"rate":3.46,"count":156}}},
{"name":"향남읍","rate":3.27,"votes":{"early":{"rate":3.04,"count":218},"polling":{"rate":3.34,"count":799}}},
{"name":"남양읍","rate":4.07,"votes":{"early":{"rate":3.51,"count":250},"polling":{"rate":4.31,"count":684}}},
{"name":"마도면","rate":2.81,"votes":{"early":{"rate":3.5,"count":50},"polling":{"rate":2.22,"count":38}}},
{"name":"송산면","rate":3.27,"votes":{"early":{"rate":3.53,"count":56},"polling":{"rate":3.12,"count":89}}},
{"name":"서신면","rate":3.21,"votes":{"early":{"rate":3.82,"count":49},"polling":{"rate":2.81,"count":56}}},
{"name":"팔탄면","rate":3.22,"votes":{"early":{"rate":3.62,"count":51},"polling":{"rate":2.99,"count":76}}},
{"name":"장안면","rate":2.84,"votes":{"early":{"rate":2.6,"count":27},"polling":{"rate":2.93,"count":75}}},
{"name":"양감면","rate":2.99,"votes":{"early":{"rate":3.11,"count":33},"polling":{"rate":2.87,"count":32}}},
{"name":"새솔동","rate":3.12,"votes":{"early":{"rate":2.79,"count":107},"polling":{"rate":3.29,"count":227}}},
{"name":"정남면","rate":3.5,"votes":{"early":{"rate":4.4,"count":51},"polling":{"rate":3.17,"count":100}}},
{"name":"매송면","rate":3.44,"votes":{"early":{"rate":3.4,"count":27},"polling":{"rate":3.46,"count":74}}},
{"name":"비봉면","rate":3.85,"votes":{"early":{"rate":3.86,"count":81},"polling":{"rate":3.84,"count":194}}},
{"name":"화성시효행구_관외사전투표","rate":5.09,"votes":{"absentee":{"rate":5.09,"count":274}}},
{"name":"봉담읍","rate":4.32,"votes":{"early":{"rate":3.73,"count":355},"polling":{"rate":4.49,"count":1467}}},
{"name":"기배동","rate":3.66,"votes":{"early":{"rate":3.44,"count":146},"polling":{"rate":3.89,"count":165}}},
{"name":"화성시병점구_관외사전투표","rate":6.99,"votes":{"absentee":{"rate":6.99,"count":816}}},
{"name":"진안동","rate":5.17,"votes":{"early":{"rate":4.51,"count":125},"polling":{"rate":5.3,"count":781}}},
{"name":"병점1동","rate":4.9,"votes":{"early":{"rate":4.34,"count":201},"polling":{"rate":5.14,"count":558}}},
{"name":"병점2동","rate":4.96,"votes":{"early":{"rate":4.79,"count":191},"polling":{"rate":5.06,"count":318}}},
{"name":"반월동","rate":5.61,"votes":{"early":{"rate":4.03,"count":137},"polling":{"rate":6.08,"count":690}}},
{"name":"화산동","rate":4,"votes":{"early":{"rate":3.73,"count":145},"polling":{"rate":4.13,"count":337}}},
{"name":"동탄3동","rate":7.01,"votes":{"early":{"rate":5.93,"count":292},"polling":{"rate":7.47,"count":862}}},
{"name":"동탄구_관외사전투표","rate":9.63,"votes":{"absentee":{"rate":9.63,"count":1795}}},
{"name":"동탄1동","rate":8.57,"votes":{"early":{"rate":8.14,"count":453},"polling":{"rate":8.73,"count":1352}}},
{"name":"동탄2동","rate":5.83,"votes":{"early":{"rate":5.05,"count":277},"polling":{"rate":6.26,"count":629}}},
{"name":"동탄4동","rate":10.48,"votes":{"early":{"rate":9.23,"count":566},"polling":{"rate":10.92,"count":1868}}},
{"name":"동탄5동","rate":8.56,"votes":{"early":{"rate":7.38,"count":361},"polling":{"rate":8.95,"count":1288}}},
{"name":"동탄6동","rate":10.88,"votes":{"early":{"rate":8.89,"count":397},"polling":{"rate":11.56,"count":1525}}},
{"name":"동탄7동","rate":10.76,"votes":{"early":{"rate":8.6,"count":498},"polling":{"rate":11.52,"count":1896}}},
{"name":"동탄8동","rate":10.49,"votes":{"early":{"rate":8.25,"count":373},"polling":{"rate":11.38,"count":1300}}},
{"name":"동탄9동","rate":12.67,"votes":{"early":{"rate":11.16,"count":685},"polling":{"rate":13.2,"count":2348}}},
{"name":"시흥시_관외사전투표","rate":4.35,"votes":{"absentee":{"rate":4.35,"count":902}}},
{"name":"대야동","rate":3.76,"votes":{"early":{"rate":4.03,"count":190},"polling":{"rate":3.67,"count":490}}},
{"name":"신천동","rate":2.85,"votes":{"early":{"rate":2.88,"count":85},"polling":{"rate":2.85,"count":268}}},
{"name":"신현동","rate":2.74,"votes":{"early":{"rate":2.77,"count":39},"polling":{"rate":2.72,"count":75}}},
{"name":"은행동","rate":3.47,"votes":{"early":{"rate":3.12,"count":187},"polling":{"rate":3.59,"count":629}}},
{"name":"매화동","rate":2.38,"votes":{"early":{"rate":1.88,"count":32},"polling":{"rate":2.68,"count":78}}},
{"name":"목감동","rate":3.74,"votes":{"early":{"rate":3.01,"count":162},"polling":{"rate":4.08,"count":479}}},
{"name":"군자동","rate":2.56,"votes":{"early":{"rate":2.24,"count":50},"polling":{"rate":2.68,"count":155}}},
{"name":"월곶동","rate":3.56,"votes":{"early":{"rate":3.03,"count":68},"polling":{"rate":3.82,"count":172}}},
{"name":"정왕본동","rate":3.45,"votes":{"early":{"rate":3.82,"count":63},"polling":{"rate":3.28,"count":122}}},
{"name":"정왕1동","rate":4.17,"votes":{"early":{"rate":3.32,"count":68},"polling":{"rate":4.53,"count":222}}},
{"name":"정왕2동","rate":3.72,"votes":{"early":{"rate":3.64,"count":108},"polling":{"rate":3.76,"count":262}}},
{"name":"정왕3동","rate":3.25,"votes":{"early":{"rate":3.12,"count":84},"polling":{"rate":3.32,"count":179}}},
{"name":"정왕4동","rate":4.04,"votes":{"early":{"rate":3.81,"count":115},"polling":{"rate":4.17,"count":221}}},
{"name":"거북섬동","rate":4.23,"votes":{"early":{"rate":3.24,"count":41},"polling":{"rate":4.81,"count":104}}},
{"name":"배곧1동","rate":3.81,"votes":{"early":{"rate":3.34,"count":138},"polling":{"rate":4.01,"count":381}}},
{"name":"배곧2동","rate":3.72,"votes":{"early":{"rate":3.47,"count":102},"polling":{"rate":3.8,"count":345}}},
{"name":"과림동","rate":2.94,"votes":{"early":{"rate":2.54,"count":8},"polling":{"rate":3.18,"count":17}}},
{"name":"연성동","rate":3.59,"votes":{"early":{"rate":3.24,"count":88},"polling":{"rate":3.71,"count":281}}},
{"name":"능곡동","rate":3.68,"votes":{"early":{"rate":3.6,"count":116},"polling":{"rate":3.71,"count":263}}},
{"name":"장곡동","rate":3.2,"votes":{"early":{"rate":2.77,"count":156},"polling":{"rate":3.41,"count":408}}},
{"name":"군포시_관외사전투표","rate":4.76,"votes":{"absentee":{"rate":4.76,"count":724}}},
{"name":"군포1동","rate":3.88,"votes":{"early":{"rate":3.02,"count":80},"polling":{"rate":4.1,"count":413}}},
{"name":"군포2동","rate":3.7,"votes":{"early":{"rate":3.17,"count":184},"polling":{"rate":3.91,"count":560}}},
{"name":"산본1동","rate":3.56,"votes":{"early":{"rate":3.12,"count":62},"polling":{"rate":3.74,"count":179}}},
{"name":"산본2동","rate":4.36,"votes":{"early":{"rate":3.86,"count":124},"polling":{"rate":4.52,"count":428}}},
{"name":"금정동","rate":3.88,"votes":{"early":{"rate":3.04,"count":69},"polling":{"rate":4.2,"count":252}}},
{"name":"재궁동","rate":3.88,"votes":{"early":{"rate":3.89,"count":103},"polling":{"rate":3.88,"count":226}}},
{"name":"오금동","rate":4.37,"votes":{"early":{"rate":4.28,"count":130},"polling":{"rate":4.41,"count":311}}},
{"name":"수리동","rate":3.94,"votes":{"early":{"rate":3.86,"count":78},"polling":{"rate":3.97,"count":216}}},
{"name":"궁내동","rate":4.46,"votes":{"early":{"rate":3.84,"count":109},"polling":{"rate":4.72,"count":312}}},
{"name":"광정동","rate":4.49,"votes":{"early":{"rate":4.05,"count":127},"polling":{"rate":4.66,"count":392}}},
{"name":"대야동","rate":3.52,"votes":{"early":{"rate":2.61,"count":52},"polling":{"rate":4.14,"count":120}}},
{"name":"송부동","rate":3.66,"votes":{"early":{"rate":2.71,"count":69},"polling":{"rate":4.01,"count":279}}},
{"name":"하남시_관외사전투표","rate":4.47,"votes":{"absentee":{"rate":4.47,"count":1031}}},
{"name":"천현동","rate":3.86,"votes":{"early":{"rate":4.04,"count":35},"polling":{"rate":3.78,"count":68}}},
{"name":"신장1동","rate":3.18,"votes":{"early":{"rate":3.37,"count":68},"polling":{"rate":3,"count":60}}},
{"name":"신장2동","rate":3.88,"votes":{"early":{"rate":3.64,"count":220},"polling":{"rate":3.96,"count":648}}},
{"name":"덕풍1동","rate":3.42,"votes":{"early":{"rate":2.97,"count":72},"polling":{"rate":3.66,"count":169}}},
{"name":"덕풍2동","rate":3.46,"votes":{"early":{"rate":3.54,"count":94},"polling":{"rate":3.43,"count":191}}},
{"name":"덕풍3동","rate":3.78,"votes":{"early":{"rate":3.52,"count":125},"polling":{"rate":3.89,"count":352}}},
{"name":"미사1동","rate":4.6,"votes":{"early":{"rate":4.42,"count":234},"polling":{"rate":4.65,"count":757}}},
{"name":"미사2동","rate":3.98,"votes":{"early":{"rate":3.69,"count":273},"polling":{"rate":4.13,"count":613}}},
{"name":"미사3동","rate":4.14,"votes":{"early":{"rate":3.79,"count":97},"polling":{"rate":4.24,"count":381}}},
{"name":"감북동","rate":4.42,"votes":{"early":{"rate":5.6,"count":36},"polling":{"rate":3.66,"count":37}}},
{"name":"감일동","rate":4.53,"votes":{"early":{"rate":3.77,"count":224},"polling":{"rate":4.91,"count":570}}},
{"name":"위례동","rate":6.02,"votes":{"early":{"rate":5.16,"count":187},"polling":{"rate":6.31,"count":698}}},
{"name":"춘궁동","rate":3.31,"votes":{"early":{"rate":4.55,"count":7},"polling":{"rate":2.39,"count":5}}},
{"name":"초이동","rate":3.1,"votes":{"early":{"rate":3.93,"count":16},"polling":{"rate":2.71,"count":24}}},
{"name":"파주시_관외사전투표","rate":4.06,"votes":{"absentee":{"rate":4.06,"count":1138}}},
{"name":"문산읍","rate":3.1,"votes":{"early":{"rate":2.79,"count":141},"polling":{"rate":3.22,"count":424}}},
{"name":"조리읍","rate":3.11,"votes":{"early":{"rate":2.81,"count":87},"polling":{"rate":3.22,"count":289}}},
{"name":"법원읍","rate":3.1,"votes":{"early":{"rate":3.91,"count":46},"polling":{"rate":2.78,"count":81}}},
{"name":"파주읍","rate":2.84,"votes":{"early":{"rate":3.64,"count":51},"polling":{"rate":2.56,"count":100}}},
{"name":"광탄면","rate":3.17,"votes":{"early":{"rate":3.39,"count":46},"polling":{"rate":3.07,"count":94}}},
{"name":"탄현면","rate":2.93,"votes":{"early":{"rate":2.66,"count":39},"polling":{"rate":3.01,"count":136}}},
{"name":"월롱면","rate":4.22,"votes":{"early":{"rate":3.17,"count":29},"polling":{"rate":4.66,"count":101}}},
{"name":"적성면","rate":3.16,"votes":{"early":{"rate":3.94,"count":30},"polling":{"rate":2.86,"count":58}}},
{"name":"파평면","rate":2.8,"votes":{"early":{"rate":3.47,"count":16},"polling":{"rate":2.56,"count":34}}},
{"name":"장단면","rate":2.07,"votes":{"early":{"rate":4.14,"count":6},"polling":{"rate":1.03,"count":3}}},
{"name":"교하동","rate":3.72,"votes":{"early":{"rate":2.99,"count":19},"polling":{"rate":3.94,"count":83}}},
{"name":"운정1동","rate":3.36,"votes":{"early":{"rate":2.37,"count":114},"polling":{"rate":3.61,"count":674}}},
{"name":"운정2동","rate":3.65,"votes":{"early":{"rate":3.3,"count":97},"polling":{"rate":3.7,"count":744}}},
{"name":"운정3동","rate":3.81,"votes":{"early":{"rate":3.24,"count":195},"polling":{"rate":3.98,"count":817}}},
{"name":"운정4동","rate":2.96,"votes":{"early":{"rate":2.35,"count":67},"polling":{"rate":3.27,"count":188}}},
{"name":"운정5동","rate":3.73,"votes":{"early":{"rate":3,"count":141},"polling":{"rate":3.92,"count":681}}},
{"name":"운정6동","rate":3.95,"votes":{"early":{"rate":3.44,"count":120},"polling":{"rate":4.12,"count":434}}},
{"name":"금촌1동","rate":3.63,"votes":{"early":{"rate":3.58,"count":94},"polling":{"rate":3.65,"count":226}}},
{"name":"금촌2동","rate":3.47,"votes":{"early":{"rate":3.14,"count":143},"polling":{"rate":3.64,"count":337}}},
{"name":"금촌3동","rate":3.34,"votes":{"early":{"rate":3.33,"count":107},"polling":{"rate":3.35,"count":223}}},
{"name":"여주시_관외사전투표","rate":4.36,"votes":{"absentee":{"rate":4.36,"count":287}}},
{"name":"가남읍","rate":3.16,"votes":{"early":{"rate":3.6,"count":70},"polling":{"rate":2.97,"count":133}}},
{"name":"점동면","rate":2.84,"votes":{"early":{"rate":2.56,"count":26},"polling":{"rate":3.01,"count":51}}},
{"name":"세종대왕면","rate":2.68,"votes":{"early":{"rate":3.38,"count":27},"polling":{"rate":2.4,"count":48}}},
{"name":"흥천면","rate":2.67,"votes":{"early":{"rate":2.74,"count":20},"polling":{"rate":2.65,"count":45}}},
{"name":"금사면","rate":3.02,"votes":{"early":{"rate":3.04,"count":17},"polling":{"rate":3.01,"count":30}}},
{"name":"산북면","rate":3.58,"votes":{"early":{"rate":3.4,"count":16},"polling":{"rate":3.69,"count":31}}},
{"name":"대신면","rate":3.02,"votes":{"early":{"rate":4.14,"count":41},"polling":{"rate":2.54,"count":58}}},
{"name":"북내면","rate":2.61,"votes":{"early":{"rate":2.66,"count":21},"polling":{"rate":2.58,"count":41}}},
{"name":"강천면","rate":2.4,"votes":{"early":{"rate":2.78,"count":20},"polling":{"rate":2.22,"count":34}}},
{"name":"여흥동","rate":3.14,"votes":{"early":{"rate":3.91,"count":100},"polling":{"rate":2.83,"count":179}}},
{"name":"중앙동","rate":3.06,"votes":{"early":{"rate":2.88,"count":85},"polling":{"rate":3.13,"count":235}}},
{"name":"오학동","rate":2.9,"votes":{"early":{"rate":2.9,"count":99},"polling":{"rate":2.9,"count":135}}},
{"name":"이천시_관외사전투표","rate":4.24,"votes":{"absentee":{"rate":4.24,"count":588}}},
{"name":"장호원읍","rate":2.53,"votes":{"early":{"rate":3.01,"count":62},"polling":{"rate":2.29,"count":95}}},
{"name":"부발읍","rate":3.09,"votes":{"early":{"rate":3.07,"count":98},"polling":{"rate":3.1,"count":342}}},
{"name":"신둔면","rate":2.62,"votes":{"early":{"rate":2.42,"count":53},"polling":{"rate":2.73,"count":114}}},
{"name":"백사면","rate":2.6,"votes":{"early":{"rate":2.73,"count":45},"polling":{"rate":2.54,"count":96}}},
{"name":"호법면","rate":2.35,"votes":{"early":{"rate":2.63,"count":22},"polling":{"rate":2.21,"count":38}}},
{"name":"마장면","rate":2.87,"votes":{"early":{"rate":3.21,"count":76},"polling":{"rate":2.69,"count":115}}},
{"name":"대월면","rate":2.68,"votes":{"early":{"rate":2.8,"count":64},"polling":{"rate":2.61,"count":100}}},
{"name":"모가면","rate":2.89,"votes":{"early":{"rate":2.68,"count":22},"polling":{"rate":3.02,"count":40}}},
{"name":"설성면","rate":2.95,"votes":{"early":{"rate":3.43,"count":19},"polling":{"rate":2.76,"count":39}}},
{"name":"율면","rate":2.8,"votes":{"early":{"rate":2.72,"count":17},"polling":{"rate":2.85,"count":22}}},
{"name":"창전동","rate":3.36,"votes":{"early":{"rate":3.58,"count":57},"polling":{"rate":3.28,"count":138}}},
{"name":"증포동","rate":3.14,"votes":{"early":{"rate":2.67,"count":155},"polling":{"rate":3.31,"count":516}}},
{"name":"중리동","rate":3.4,"votes":{"early":{"rate":3.52,"count":81},"polling":{"rate":3.35,"count":160}}},
{"name":"관고동","rate":2.94,"votes":{"early":{"rate":2.76,"count":58},"polling":{"rate":3.07,"count":88}}},
{"name":"용인시처인구_관외사전투표","rate":4.07,"votes":{"absentee":{"rate":4.07,"count":729}}},
{"name":"포곡읍","rate":3.2,"votes":{"early":{"rate":3.15,"count":127},"polling":{"rate":3.22,"count":300}}},
{"name":"모현읍","rate":3.53,"votes":{"early":{"rate":3.23,"count":121},"polling":{"rate":3.63,"count":375}}},
{"name":"이동읍","rate":3.29,"votes":{"early":{"rate":3.26,"count":84},"polling":{"rate":3.31,"count":179}}},
{"name":"남사읍","rate":3.82,"votes":{"early":{"rate":3.71,"count":74},"polling":{"rate":3.85,"count":299}}},
{"name":"원삼면","rate":3.39,"votes":{"early":{"rate":2.54,"count":27},"polling":{"rate":3.76,"count":90}}},
{"name":"백암면","rate":3.09,"votes":{"early":{"rate":3.12,"count":41},"polling":{"rate":3.07,"count":73}}},
{"name":"양지읍","rate":3.16,"votes":{"early":{"rate":3.46,"count":104},"polling":{"rate":3.01,"count":179}}},
{"name":"중앙동","rate":3.34,"votes":{"early":{"rate":2.81,"count":94},"polling":{"rate":3.56,"count":278}}},
{"name":"역북동","rate":3.85,"votes":{"early":{"rate":3.62,"count":162},"polling":{"rate":3.95,"count":379}}},
{"name":"삼가동","rate":4.36,"votes":{"early":{"rate":3.53,"count":60},"polling":{"rate":4.61,"count":260}}},
{"name":"유림1동","rate":3.67,"votes":{"early":{"rate":2.82,"count":52},"polling":{"rate":4.08,"count":154}}},
{"name":"유림2동","rate":3.2,"votes":{"early":{"rate":2.89,"count":97},"polling":{"rate":3.3,"count":365}}},
{"name":"동부동","rate":2.93,"votes":{"early":{"rate":2.65,"count":51},"polling":{"rate":3.07,"count":116}}},
{"name":"용인시수지구_관외사전투표","rate":5.45,"votes":{"absentee":{"rate":5.45,"count":707}}},
{"name":"풍덕천1동","rate":5.01,"votes":{"early":{"rate":5.02,"count":260},"polling":{"rate":5.01,"count":518}}},
{"name":"풍덕천2동","rate":5.04,"votes":{"early":{"rate":5.11,"count":287},"polling":{"rate":5.01,"count":719}}},
{"name":"신봉동","rate":4.89,"votes":{"early":{"rate":4.58,"count":238},"polling":{"rate":5,"count":756}}},
{"name":"동천동","rate":4.7,"votes":{"early":{"rate":4.11,"count":287},"polling":{"rate":4.93,"count":855}}},
{"name":"상현1동","rate":4.71,"votes":{"early":{"rate":4.43,"count":111},"polling":{"rate":4.8,"count":342}}},
{"name":"상현3동","rate":5.43,"votes":{"early":{"rate":5.42,"count":220},"polling":{"rate":5.43,"count":491}}},
{"name":"성복동","rate":4.85,"votes":{"early":{"rate":4.31,"count":237},"polling":{"rate":4.99,"count":1015}}},
{"name":"용인시기흥구_관외사전투표","rate":5.29,"votes":{"absentee":{"rate":5.29,"count":1732}}},
{"name":"신갈동","rate":4.4,"votes":{"early":{"rate":3.93,"count":160},"polling":{"rate":4.54,"count":587}}},
{"name":"영덕1동","rate":4.83,"votes":{"early":{"rate":4.04,"count":191},"polling":{"rate":5.2,"count":524}}},
{"name":"영덕2동","rate":3.94,"votes":{"early":{"rate":3.3,"count":89},"polling":{"rate":4.23,"count":254}}},
{"name":"구갈동","rate":4.93,"votes":{"early":{"rate":3.69,"count":140},"polling":{"rate":5.27,"count":724}}},
{"name":"상갈동","rate":4.16,"votes":{"early":{"rate":4.25,"count":101},"polling":{"rate":4.11,"count":161}}},
{"name":"보라동","rate":4.11,"votes":{"early":{"rate":3.67,"count":163},"polling":{"rate":4.3,"count":454}}},
{"name":"기흥동","rate":3.57,"votes":{"early":{"rate":3.44,"count":67},"polling":{"rate":3.6,"count":227}}},
{"name":"서농동","rate":4.84,"votes":{"early":{"rate":4.75,"count":169},"polling":{"rate":4.89,"count":367}}},
{"name":"구성동","rate":4.08,"votes":{"early":{"rate":3.98,"count":225},"polling":{"rate":4.12,"count":566}}},
{"name":"마북동","rate":4.71,"votes":{"early":{"rate":3.83,"count":140},"polling":{"rate":4.98,"count":607}}},
{"name":"동백1동","rate":4.12,"votes":{"early":{"rate":3.51,"count":148},"polling":{"rate":4.37,"count":433}}},
{"name":"동백2동","rate":4.47,"votes":{"early":{"rate":3.72,"count":156},"polling":{"rate":4.86,"count":396}}},
{"name":"동백3동","rate":3.83,"votes":{"early":{"rate":3.01,"count":112},"polling":{"rate":4.19,"count":363}}},
{"name":"상하동","rate":3.98,"votes":{"early":{"rate":3.98,"count":122},"polling":{"rate":3.98,"count":316}}},
{"name":"보정동","rate":5.27,"votes":{"early":{"rate":4.69,"count":278},"polling":{"rate":5.55,"count":682}}},
{"name":"죽전1동","rate":4.53,"votes":{"early":{"rate":4.2,"count":224},"polling":{"rate":4.7,"count":470}}},
{"name":"죽전2동","rate":5.17,"votes":{"early":{"rate":5.23,"count":86},"polling":{"rate":5.16,"count":319}}},
{"name":"죽전3동","rate":4.76,"votes":{"early":{"rate":3.92,"count":101},"polling":{"rate":5.02,"count":430}}},
{"name":"상현2동","rate":4.68,"votes":{"early":{"rate":4.64,"count":226},"polling":{"rate":4.7,"count":518}}},
{"name":"안성시_관외사전투표","rate":4.15,"votes":{"absentee":{"rate":4.15,"count":475}}},
{"name":"공도읍","rate":3.29,"votes":{"early":{"rate":3.07,"count":220},"polling":{"rate":3.37,"count":632}}},
{"name":"보개면","rate":3.49,"votes":{"early":{"rate":3.86,"count":46},"polling":{"rate":3.23,"count":54}}},
{"name":"금광면","rate":3.02,"votes":{"early":{"rate":3.74,"count":33},"polling":{"rate":2.77,"count":69}}},
{"name":"서운면","rate":3.28,"votes":{"early":{"rate":3.06,"count":22},"polling":{"rate":3.46,"count":32}}},
{"name":"미양면","rate":3.03,"votes":{"early":{"rate":3.84,"count":30},"polling":{"rate":2.65,"count":44}}},
{"name":"대덕면","rate":3.32,"votes":{"early":{"rate":3.48,"count":55},"polling":{"rate":3.26,"count":131}}},
{"name":"양성면","rate":2.7,"votes":{"early":{"rate":2.42,"count":20},"polling":{"rate":2.85,"count":45}}},
{"name":"원곡면","rate":3,"votes":{"early":{"rate":2.88,"count":27},"polling":{"rate":3.07,"count":55}}},
{"name":"일죽면","rate":2.9,"votes":{"early":{"rate":2.77,"count":33},"polling":{"rate":2.97,"count":64}}},
{"name":"죽산면","rate":3.37,"votes":{"early":{"rate":3.61,"count":56},"polling":{"rate":3.17,"count":58}}},
{"name":"삼죽면","rate":3.64,"votes":{"early":{"rate":5.62,"count":37},"polling":{"rate":2.39,"count":25}}},
{"name":"고삼면","rate":2.83,"votes":{"early":{"rate":3.65,"count":19},"polling":{"rate":2.16,"count":14}}},
{"name":"안성1동","rate":3.34,"votes":{"early":{"rate":3.12,"count":64},"polling":{"rate":3.48,"count":114}}},
{"name":"안성2동","rate":3.34,"votes":{"early":{"rate":2.88,"count":94},"polling":{"rate":3.55,"count":245}}},
{"name":"안성3동","rate":3.46,"votes":{"early":{"rate":3.15,"count":117},"polling":{"rate":3.61,"count":263}}},
{"name":"김포시_관외사전투표","rate":4.48,"votes":{"absentee":{"rate":4.48,"count":980}}},
{"name":"통진읍","rate":2.65,"votes":{"early":{"rate":2.46,"count":103},"polling":{"rate":2.73,"count":263}}},
{"name":"고촌읍","rate":3.86,"votes":{"early":{"rate":3.35,"count":182},"polling":{"rate":4.01,"count":716}}},
{"name":"양촌읍","rate":3.39,"votes":{"early":{"rate":2.94,"count":108},"polling":{"rate":3.58,"count":315}}},
{"name":"대곶면","rate":3.05,"votes":{"early":{"rate":3.21,"count":33},"polling":{"rate":2.99,"count":84}}},
{"name":"월곶면","rate":3.37,"votes":{"early":{"rate":3.91,"count":39},"polling":{"rate":3.02,"count":47}}},
{"name":"하성면","rate":3.4,"votes":{"early":{"rate":3.22,"count":41},"polling":{"rate":3.5,"count":87}}},
{"name":"김포본동","rate":3.7,"votes":{"early":{"rate":3.26,"count":136},"polling":{"rate":3.79,"count":794}}},
{"name":"장기본동","rate":3.81,"votes":{"early":{"rate":3.42,"count":146},"polling":{"rate":3.95,"count":477}}},
{"name":"사우동","rate":3.73,"votes":{"early":{"rate":3.13,"count":107},"polling":{"rate":4.05,"count":265}}},
{"name":"풍무동","rate":3.57,"votes":{"early":{"rate":2.93,"count":167},"polling":{"rate":3.74,"count":779}}},
{"name":"장기동","rate":3.43,"votes":{"early":{"rate":3.21,"count":143},"polling":{"rate":3.51,"count":436}}},
{"name":"구래동","rate":3.59,"votes":{"early":{"rate":3.52,"count":165},"polling":{"rate":3.62,"count":444}}},
{"name":"마산동","rate":2.75,"votes":{"early":{"rate":2.42,"count":86},"polling":{"rate":2.87,"count":302}}},
{"name":"운양동","rate":3.96,"votes":{"early":{"rate":3.84,"count":209},"polling":{"rate":4.01,"count":605}}},
{"name":"광주시_관외사전투표","rate":3.6,"votes":{"absentee":{"rate":3.6,"count":774}}},
{"name":"초월읍","rate":2.77,"votes":{"early":{"rate":2.64,"count":151},"polling":{"rate":2.82,"count":448}}},
{"name":"곤지암읍","rate":2.62,"votes":{"early":{"rate":2.83,"count":85},"polling":{"rate":2.52,"count":163}}},
{"name":"도척면","rate":2.67,"votes":{"early":{"rate":2.21,"count":32},"polling":{"rate":2.93,"count":76}}},
{"name":"퇴촌면","rate":2.72,"votes":{"early":{"rate":2.46,"count":61},"polling":{"rate":2.86,"count":125}}},
{"name":"남종면","rate":2.76,"votes":{"early":{"rate":5.09,"count":11},"polling":{"rate":1.89,"count":11}}},
{"name":"남한산성면","rate":3.94,"votes":{"early":{"rate":3.8,"count":12},"polling":{"rate":3.99,"count":35}}},
{"name":"오포1동","rate":3.08,"votes":{"early":{"rate":2.88,"count":97},"polling":{"rate":3.16,"count":277}}},
{"name":"오포2동","rate":2.75,"votes":{"early":{"rate":2.74,"count":94},"polling":{"rate":2.75,"count":257}}},
{"name":"신현동","rate":3.31,"votes":{"early":{"rate":3.16,"count":144},"polling":{"rate":3.39,"count":306}}},
{"name":"능평동","rate":3.32,"votes":{"early":{"rate":2.96,"count":94},"polling":{"rate":3.51,"count":219}}},
{"name":"경안동","rate":3.25,"votes":{"early":{"rate":3.24,"count":116},"polling":{"rate":3.25,"count":285}}},
{"name":"쌍령동","rate":3.14,"votes":{"early":{"rate":3.15,"count":87},"polling":{"rate":3.14,"count":159}}},
{"name":"송정동","rate":3.2,"votes":{"early":{"rate":3.37,"count":104},"polling":{"rate":3.13,"count":213}}},
{"name":"탄벌동","rate":2.7,"votes":{"early":{"rate":2.7,"count":133},"polling":{"rate":2.71,"count":326}}},
{"name":"광남1동","rate":3,"votes":{"early":{"rate":2.64,"count":143},"polling":{"rate":3.24,"count":271}}},
{"name":"광남2동","rate":3.19,"votes":{"early":{"rate":2.67,"count":108},"polling":{"rate":3.4,"count":332}}},
{"name":"포천시_관외사전투표","rate":4.23,"votes":{"absentee":{"rate":4.23,"count":269}}},
{"name":"소흘읍","rate":2.88,"votes":{"early":{"rate":2.54,"count":154},"polling":{"rate":3.04,"count":404}}},
{"name":"군내면","rate":3.15,"votes":{"early":{"rate":2.95,"count":49},"polling":{"rate":3.26,"count":92}}},
{"name":"내촌면","rate":3.28,"votes":{"early":{"rate":2.62,"count":23},"polling":{"rate":3.73,"count":49}}},
{"name":"가산면","rate":3.03,"votes":{"early":{"rate":2.61,"count":37},"polling":{"rate":3.28,"count":78}}},
{"name":"신북면","rate":2.85,"votes":{"early":{"rate":3.56,"count":52},"polling":{"rate":2.55,"count":89}}},
{"name":"창수면","rate":2.11,"votes":{"early":{"rate":1.43,"count":7},"polling":{"rate":2.6,"count":18}}},
{"name":"영중면","rate":2.91,"votes":{"early":{"rate":2.55,"count":24},"polling":{"rate":3.13,"count":48}}},
{"name":"일동면","rate":3.12,"votes":{"early":{"rate":2.91,"count":44},"polling":{"rate":3.23,"count":91}}},
{"name":"이동면","rate":3.05,"votes":{"early":{"rate":3.14,"count":21},"polling":{"rate":3.02,"count":56}}},
{"name":"영북면","rate":4.12,"votes":{"early":{"rate":4.04,"count":50},"polling":{"rate":4.16,"count":96}}},
{"name":"관인면","rate":2.83,"votes":{"early":{"rate":3.02,"count":15},"polling":{"rate":2.72,"count":24}}},
{"name":"화현면","rate":3.62,"votes":{"early":{"rate":2.66,"count":11},"polling":{"rate":4.13,"count":32}}},
{"name":"포천동","rate":3.51,"votes":{"early":{"rate":3.64,"count":148},"polling":{"rate":3.41,"count":202}}},
{"name":"선단동","rate":2.44,"votes":{"early":{"rate":2.5,"count":54},"polling":{"rate":2.41,"count":94}}},
{"name":"연천군_관외사전투표","rate":4.52,"votes":{"absentee":{"rate":4.52,"count":127}}},
{"name":"연천읍","rate":3.97,"votes":{"early":{"rate":5.27,"count":78},"polling":{"rate":3.22,"count":82}}},
{"name":"전곡읍","rate":2.82,"votes":{"early":{"rate":2.93,"count":94},"polling":{"rate":2.76,"count":164}}},
{"name":"군남면","rate":2.15,"votes":{"early":{"rate":2.53,"count":9},"polling":{"rate":2.05,"count":26}}},
{"name":"청산면","rate":2.78,"votes":{"early":{"rate":3.73,"count":23},"polling":{"rate":2.37,"count":34}}},
{"name":"백학면","rate":3.73,"votes":{"early":{"rate":3.33,"count":16},"polling":{"rate":3.95,"count":34}}},
{"name":"미산면","rate":3.7,"votes":{"early":{"rate":4.78,"count":17},"polling":{"rate":2.99,"count":16}}},
{"name":"왕징면","rate":2.49,"votes":{"early":{"rate":1.75,"count":4},"polling":{"rate":2.9,"count":12}}},
{"name":"신서면","rate":2.15,"votes":{"early":{"rate":2.32,"count":15},"polling":{"rate":2.02,"count":17}}},
{"name":"중면","rate":4.24,"votes":{"early":{"rate":4.08,"count":2},"polling":{"rate":4.35,"count":3}}},
{"name":"장남면","rate":4,"votes":{"early":{"rate":3.05,"count":5},"polling":{"rate":4.5,"count":14}}},
{"name":"양평군_관외사전투표","rate":4.23,"votes":{"absentee":{"rate":4.23,"count":353}}},
{"name":"양평읍","rate":3.21,"votes":{"early":{"rate":3.21,"count":182},"polling":{"rate":3.22,"count":361}}},
{"name":"강상면","rate":2.69,"votes":{"early":{"rate":2.82,"count":51},"polling":{"rate":2.62,"count":82}}},
{"name":"강하면","rate":3.41,"votes":{"early":{"rate":3.17,"count":27},"polling":{"rate":3.54,"count":57}}},
{"name":"양서면","rate":3.44,"votes":{"early":{"rate":3.75,"count":74},"polling":{"rate":3.31,"count":158}}},
{"name":"옥천면","rate":3.33,"votes":{"early":{"rate":3.05,"count":66},"polling":{"rate":3.57,"count":90}}},
{"name":"서종면","rate":4,"votes":{"early":{"rate":3.68,"count":55},"polling":{"rate":4.15,"count":132}}},
{"name":"단월면","rate":3.55,"votes":{"early":{"rate":4.05,"count":31},"polling":{"rate":3.25,"count":41}}},
{"name":"청운면","rate":3.59,"votes":{"early":{"rate":5.7,"count":47},"polling":{"rate":2.12,"count":25}}},
{"name":"양동면","rate":2.02,"votes":{"early":{"rate":1.57,"count":13},"polling":{"rate":2.27,"count":34}}},
{"name":"지평면","rate":3.41,"votes":{"early":{"rate":2.64,"count":33},"polling":{"rate":3.83,"count":89}}},
{"name":"용문면","rate":3.28,"votes":{"early":{"rate":3.65,"count":115},"polling":{"rate":3.08,"count":180}}},
{"name":"개군면","rate":1.73,"votes":{"early":{"rate":0,"count":0},"polling":{"rate":2.57,"count":46}}},
{"name":"가평군_관외사전투표","rate":5.1,"votes":{"absentee":{"rate":5.1,"count":173}}},
{"name":"가평읍","rate":3.28,"votes":{"early":{"rate":3.05,"count":125},"polling":{"rate":3.43,"count":225}}},
{"name":"설악면","rate":4.09,"votes":{"early":{"rate":4.01,"count":69},"polling":{"rate":4.14,"count":130}}},
{"name":"청평면","rate":4.54,"votes":{"early":{"rate":4.93,"count":100},"polling":{"rate":4.35,"count":192}}},
{"name":"상면","rate":3.61,"votes":{"early":{"rate":3.75,"count":30},"polling":{"rate":3.56,"count":71}}},
{"name":"조종면","rate":3.85,"votes":{"early":{"rate":3.89,"count":58},"polling":{"rate":3.83,"count":104}}},
{"name":"북면","rate":3.08,"votes":{"early":{"rate":4.25,"count":29},"polling":{"rate":2.43,"count":30}}}
] },

  // [  8] 기초단체장  | 이용우 | 서울 강동구청장
  { id: 8, voteRate: 1.80, totalVotes: 5099, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '관외사전투표',
    rate: 2.43,
    votes: {
      absentee: { rate: 2.43, count: 744 }
    }
  },

  {
    name: '강일동',
    rate: 1.49,
    votes: {
      early: { rate: 1.22, count: 63 },
      polling: { rate: 1.61, count: 201 }
    }
  },
  {
    name: '상일제1동',
    rate: 1.72,
    votes: {
      early: { rate: 1.71, count: 82 },
      polling: { rate: 1.75, count: 251 }
    }
  },
  {
    name: '상일제2동',
    rate: 1.52,
    votes: {
      early: { rate: 1.02, count: 20 },
      polling: { rate: 1.71, count: 78 }
    }
  },
  {
    name: '명일제1동',
    rate: 1.76,
    votes: {
      early: { rate: 2.20, count: 88 },
      polling: { rate: 1.57, count: 140 }
    }
  },
  {
    name: '명일제2동',
    rate: 1.45,
    votes: {
      early: { rate: 1.50, count: 34 },
      polling: { rate: 1.41, count: 96 }
    }
  },
  {
    name: '고덕제1동',
    rate: 1.45,
    votes: {
      early: { rate: 1.40, count: 50 },
      polling: { rate: 1.48, count: 118 }
    }
  },
  {
    name: '고덕제2동',
    rate: 1.46,
    votes: {
      early: { rate: 1.64, count: 50 },
      polling: { rate: 1.54, count: 124 }
    }
  },
  {
    name: '암사제1동',
    rate: 1.32,
    votes: {
      early: { rate: 1.13, count: 48 },
      polling: { rate: 1.39, count: 152 }
    }
  },
  {
    name: '암사제2동',
    rate: 1.76,
    votes: {
      early: { rate: 1.93, count: 77 },
      polling: { rate: 1.60, count: 79 }
    }
  },
  {
    name: '암사제3동',
    rate: 1.54,
    votes: {
      early: { rate: 1.23, count: 39 },
      polling: { rate: 1.72, count: 110 }
    }
  },
  {
    name: '천호제1동',
    rate: 1.69,
    votes: {
      early: { rate: 1.27, count: 45 },
      polling: { rate: 1.79, count: 155 }
    }
  },
  {
    name: '천호제2동',
    rate: 1.43,
    votes: {
      early: { rate: 1.86, count: 88 },
      polling: { rate: 1.95, count: 244 }
    }
  },
  {
    name: '천호제3동',
    rate: 1.99,
    votes: {
      early: { rate: 1.80, count: 58 },
      polling: { rate: 2.07, count: 200 }
    }
  },
  {
    name: '성내제1동',
    rate: 1.72,
    votes: {
      early: { rate: 1.51, count: 50 },
      polling: { rate: 1.96, count: 120 }
    }
  },
  {
    name: '성내제2동',
    rate: 2.13,
    votes: {
      early: { rate: 2.22, count: 88 },
      polling: { rate: 2.07, count: 167 }
    }
  },
  {
    name: '성내제3동',
    rate: 1.83,
    votes: {
      early: { rate: 1.65, count: 67 },
      polling: { rate: 1.91, count: 140 }
    }
  },
  {
    name: '길동',
    rate: 1.80,
    votes: {
      early: { rate: 1.59, count: 98 },
      polling: { rate: 1.88, count: 314 }
    }
  },
  {
    name: '둔촌제1동',
    rate: 1.84,
    votes: {
      early: { rate: 1.79, count: 98 },
      polling: { rate: 1.85, count: 241 }
    }
  },
  {
    name: '둔촌제2동',
    rate: 1.88,
    votes: {
      early: { rate: 1.76, count: 64 },
      polling: { rate: 1.91, count: 182 }
    }
  }] },

  // [  9] 기초단체장  | 정희윤 | 경기 수원시장
  { id: 9, voteRate: 3.01, totalVotes: 18025, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: "장안구_관외사전투표",
    rate: 3.61,
    votes: {
      absentee: { rate: 3.61, count: 435 }
    }
  },
  {
    name: "파장동",
    rate: 2.42,
    votes: {
      early: { rate: 1.73, count: 54 },
      polling: { rate: 2.63, count: 231 }
    }
  },
  {
    name: "정자1동",
    rate: 2.62,
    votes: {
      early: { rate: 2.35, count: 107 },
      polling: { rate: 2.70, count: 318 }
    }
  },
  {
    name: "정자2동",
    rate: 2.81,
    votes: {
      early: { rate: 2.37, count: 73 },
      polling: { rate: 2.89, count: 378 }
    }
  },
  {
    name: "정자3동",
    rate: 3.08,
    votes: {
      early: { rate: 2.64, count: 146 },
      polling: { rate: 3.20, count: 454 }
    }
  },
  {
    name: "영화동",
    rate: 1.93,
    votes: {
      early: { rate: 1.77, count: 40 },
      polling: { rate: 2.00, count: 108 }
    }
  },
  {
    name: "송죽동",
    rate: 2.17,
    votes: {
      early: { rate: 2.35, count: 56 },
      polling: { rate: 2.29, count: 117 }
    }
  },
  {
    name: "조원1동",
    rate: 2.64,
    votes: {
      early: { rate: 2.50, count: 87 },
      polling: { rate: 2.73, count: 236 }
    }
  },
  {
    name: "조원2동",
    rate: 2.52,
    votes: {
      early: { rate: 2.80, count: 106 },
      polling: { rate: 2.48, count: 134 }
    }
  },
  {
    name: "연무동",
    rate: 2.44,
    votes: {
      early: { rate: 2.59, count: 45 },
      polling: { rate: 2.44, count: 149 }
    }
  },
  {
    name: "권선구_관외사전투표",
    rate: 3.65,
    votes: {
      absentee: { rate: 3.65, count: 748 }
    }
  },
  {
    name: "세류2동",
    rate: 2.28,
    votes: {
      early: { rate: 1.76, count: 42 },
      polling: { rate: 2.47, count: 161 }
    }
  },
  {
    name: "세류3동",
    rate: 2.19,
    votes: {
      early: { rate: 1.61, count: 35 },
      polling: { rate: 2.48, count: 113 }
    }
  },
  {
    name: "평동",
    rate: 2.57,
    votes: {
      early: { rate: 2.14, count: 54 },
      polling: { rate: 2.65, count: 393 }
    }
  },
  {
    name: "서둔동",
    rate: 2.57,
    votes: {
      early: { rate: 2.52, count: 98 },
      polling: { rate: 2.57, count: 287 }
    }
  },
  {
    name: "구운동",
    rate: 2.06,
    votes: {
      early: { rate: 1.84, count: 48 },
      polling: { rate: 2.13, count: 159 }
    }
  },
  {
    name: "금곡동",
    rate: 2.56,
    votes: {
      early: { rate: 2.26, count: 139 },
      polling: { rate: 2.68, count: 401 }
    }
  },
  {
    name: "호매실동",
    rate: 2.31,
    votes: {
      early: { rate: 1.82, count: 118 },
      polling: { rate: 2.57, count: 313 }
    }
  },
  {
    name: "권선1동",
    rate: 2.93,
    votes: {
      early: { rate: 2.92, count: 65 },
      polling: { rate: 2.94, count: 218 }
    }
  },
  {
    name: "권선2동",
    rate: 2.92,
    votes: {
      early: { rate: 2.75, count: 142 },
      polling: { rate: 3.00, count: 491 }
    }
  },
  {
    name: "곡선동",
    rate: 3.05,
    votes: {
      early: { rate: 2.61, count: 100 },
      polling: { rate: 3.25, count: 361 }
    }
  },
  {
    name: "입북동",
    rate: 2.69,
    votes: {
      early: { rate: 2.36, count: 48 },
      polling: { rate: 2.78, count: 190 }
    }
  },
  {
    name: "율천동",
    rate: 3.61,
    votes: {
      early: { rate: 3.50, count: 161 },
      polling: { rate: 3.72, count: 530 }
    }
  },
  {
    name: "팔달구_관외사전투표",
    rate: 3.58,
    votes: {
      absentee: { rate: 3.58, count: 406 }
    }
  },
  {
    name: "행궁동",
    rate: 2.29,
    votes: {
      early: { rate: 1.76, count: 19 },
      polling: { rate: 2.51, count: 67 }
    }
  },
  {
    name: "매교동",
    rate: 2.65,
    votes: {
      early: { rate: 2.57, count: 52 },
      polling: { rate: 2.67, count: 203 }
    }
  },
  {
    name: "매산동",
    rate: 2.49,
    votes: {
      early: { rate: 2.02, count: 24 },
      polling: { rate: 2.65, count: 84 }
    }
  },
  {
    name: "고등동",
    rate: 3.07,
    votes: {
      early: { rate: 2.94, count: 98 },
      polling: { rate: 3.33, count: 174 }
    }
  },
  {
    name: "화서1동",
    rate: 2.70,
    votes: {
      early: { rate: 2.43, count: 63 },
      polling: { rate: 2.98, count: 185 }
    }
  },
  {
    name: "화서2동",
    rate: 3.22,
    votes: {
      early: { rate: 2.64, count: 93 },
      polling: { rate: 3.43, count: 295 }
    }
  },
  {
    name: "지동",
    rate: 2.21,
    votes: {
      early: { rate: 1.54, count: 26 },
      polling: { rate: 2.66, count: 89 }
    }
  },
  {
    name: "우만1동",
    rate: 2.20,
    votes: {
      early: { rate: 2.29, count: 48 },
      polling: { rate: 2.17, count: 127 }
    }
  },
  {
    name: "우만2동",
    rate: 3.43,
    votes: {
      early: { rate: 2.94, count: 79 },
      polling: { rate: 3.68, count: 194 }
    }
  },
  {
    name: "인계동",
    rate: 2.79,
    votes: {
      early: { rate: 2.61, count: 94 },
      polling: { rate: 2.83, count: 385 }
    }
  },
  {
    name: "세류1동",
    rate: 2.99,
    votes: {
      early: { rate: 2.43, count: 39 },
      polling: { rate: 3.07, count: 104 }
    }
  },
 {
    name: "영통구_관외사전투표",
    rate: 4.35,
    votes: {
      absentee: { rate: 4.35, count: 882 }
    }
  },
  {
    name: "매탄1동",
    rate: 2.81,
    votes: {
      early: { rate: 2.81, count: 41 },
      polling: { rate: 2.83, count: 99 }
    }
  },
  {
    name: "매탄2동",
    rate: 2.35,
    votes: {
      early: { rate: 2.19, count: 40 },
      polling: { rate: 2.53, count: 106 }
    }
  },
  {
    name: "매탄3동",
    rate: 2.76,
    votes: {
      early: { rate: 2.44, count: 110 },
      polling: { rate: 2.89, count: 321 }
    }
  },
  {
    name: "매탄4동",
    rate: 3.00,
    votes: {
      early: { rate: 3.15, count: 78 },
      polling: { rate: 2.70, count: 172 }
    }
  },
  {
    name: "원천동",
    rate: 3.10,
    votes: {
      early: { rate: 3.23, count: 111 },
      polling: { rate: 2.96, count: 454 }
    }
  },
  {
    name: "광교1동",
    rate: 3.22,
    votes: {
      early: { rate: 3.09, count: 185 },
      polling: { rate: 3.25, count: 641 }
    }
  },
  {
    name: "광교2동",
    rate: 3.16,
    votes: {
      early: { rate: 2.86, count: 81 },
      polling: { rate: 3.60, count: 342 }
    }
  },
  {
    name: "영통1동",
    rate: 3.40,
    votes: {
      early: { rate: 3.24, count: 146 },
      polling: { rate: 3.67, count: 383 }
    }
  },
  {
    name: "영통2동",
    rate: 4.85,
    votes: {
      early: { rate: 4.68, count: 207 },
      polling: { rate: 4.82, count: 431 }
    }
  },
  {
    name: "영통3동",
    rate: 3.71,
    votes: {
      early: { rate: 3.74, count: 140 },
      polling: { rate: 3.69, count: 409 }
    }
  },
  {
    name: "망포1동",
    rate: 3.00,
    votes: {
      early: { rate: 2.93, count: 101 },
      polling: { rate: 3.03, count: 289 }
    }
  },
  {
    name: "망포2동",
    rate: 3.23,
    votes: {
      early: { rate: 3.16, count: 165 },
      polling: { rate: 3.26, count: 389 }
    }
  }
] },

  // [ 10] 기초단체장  | 송창훈 | 경기 용인시장
  { id: 10, voteRate: 1.45, totalVotes: 8267, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '처인구_관외사전투표',
    rate: 1.75,
    votes: {
      absentee: { rate: 1.75, count: 317 }
    }
  },
  {
    name: '포곡읍',
    rate: 1.31,
    votes: {
      early: { rate: 1.18, count: 48 },
      polling: { rate: 1.31, count: 124 }
    }
  },
  {
    name: '모현읍',
    rate: 1.20,
    votes: {
      early: { rate: 0.85, count: 32 },
      polling: { rate: 1.20, count: 139 }
    }
  },
  {
    name: '이동읍',
    rate: 1.13,
    votes: {
      early: { rate: 1.27, count: 33 },
      polling: { rate: 1.12, count: 59 }
    }
  },
  {
    name: '남사읍',
    rate: 1.10,
    votes: {
      early: { rate: 0.79, count: 16 },
      polling: { rate: 1.11, count: 92 }
    }
  },
  {
    name: '원삼면',
    rate: 1.10,
    votes: {
      early: { rate: 1.01, count: 11 },
      polling: { rate: 1.11, count: 27 }
    }
  },
  {
    name: '백암면',
    rate: 1.32,
    votes: {
      early: { rate: 1.19, count: 16 },
      polling: { rate: 1.33, count: 34 }
    }
  },
  {
    name: '양지읍',
    rate: 1.15,
    votes: {
      early: { rate: 1.31, count: 40 },
      polling: { rate: 1.07, count: 65 }
    }
  },
  {
    name: '중앙동',
    rate: 0.97,
    votes: {
      early: { rate: 0.83, count: 28 },
      polling: { rate: 1.03, count: 82 }
    }
  },
  {
    name: '역북동',
    rate: 1.13,
    votes: {
      early: { rate: 1.11, count: 50 },
      polling: { rate: 1.14, count: 111 }
    }
  },
  {
    name: '삼가동',
    rate: 0.91,
    votes: {
      early: { rate: 0.82, count: 14 },
      polling: { rate: 0.95, count: 54 }
    }
  },
  {
    name: '유림1동',
    rate: 1.31,
    votes: {
      early: { rate: 0.91, count: 17 },
      polling: { rate: 1.52, count: 58 }
    }
  },
  {
    name: '유림2동',
    rate: 0.97,
    votes: {
      early: { rate: 0.77, count: 26 },
      polling: { rate: 1.02, count: 116 }
    }
  },
  {
    name: '동부동',
    rate: 1.23,
    votes: {
      early: { rate: 0.88, count: 17 },
      polling: { rate: 1.41, count: 54 }
    }
  },
  {
    name: '수지구_관외사전투표',
    rate: 2.15,
    votes: {
      absentee: { rate: 2.15, count: 281 }
    }
  },
  {
    name: '풍덕천1동',
    rate: 1.77,
    votes: {
      early: { rate: 1.68, count: 88 },
      polling: { rate: 1.81, count: 190 }
    }
  },
  {
    name: '풍덕천2동',
    rate: 1.54,
    votes: {
      early: { rate: 1.66, count: 94 },
      polling: { rate: 1.49, count: 216 }
    }
  },
  {
    name: '신봉동',
    rate: 1.19,
    votes: {
      early: { rate: 1.05, count: 55 },
      polling: { rate: 1.23, count: 186 }
    }
  },
  {
    name: '동천동',
    rate: 1.39,
    votes: {
      early: { rate: 1.07, count: 75 },
      polling: { rate: 1.51, count: 264 }
    }
  },
  {
    name: '상현1동',
    rate: 1.29,
    votes: {
      early: { rate: 1.11, count: 28 },
      polling: { rate: 1.35, count: 97 }
    }
  },
  {
    name: '상현3동',
    rate: 1.93,
    votes: {
      early: { rate: 1.71, count: 70 },
      polling: { rate: 2.02, count: 185 }
    }
  },
  {
    name: '성복동',
    rate: 1.26,
    votes: {
      early: { rate: 1.23, count: 68 },
      polling: { rate: 1.27, count: 259 }
    }
  },
  {
    name: "기흥구_관외사전투표",
    rate: 2.26,
    votes: {
      absentee: { rate: 2.26, count: 746 }
    }
  },
  {
    name: "신갈동",
    rate: 1.64,
    votes: {
      early: { rate: 1.36, count: 56 },
      polling: { rate: 1.73, count: 225 }
    }
  },
  {
    name: "영덕1동",
    rate: 1.87,
    votes: {
      early: { rate: 1.56, count: 74 },
      polling: { rate: 2.00, count: 204 }
    }
  },
  {
    name: "영덕2동",
    rate: 1.45,
    votes: {
      early: { rate: 1.14, count: 31 },
      polling: { rate: 1.59, count: 96 }
    }
  },
  {
    name: "구갈동",
    rate: 1.70,
    votes: {
      early: { rate: 1.47, count: 56 },
      polling: { rate: 1.75, count: 243 }
    }
  },
  {
    name: "상갈동",
    rate: 1.74,
    votes: {
      early: { rate: 1.54, count: 37 },
      polling: { rate: 1.86, count: 74 }
    }
  },
  {
    name: "보라동",
    rate: 1.39,
    votes: {
      early: { rate: 1.41, count: 63 },
      polling: { rate: 1.39, count: 148 }
    }
  },
  {
    name: "기흥동",
    rate: 1.38,
    votes: {
      early: { rate: 1.17, count: 23 },
      polling: { rate: 1.44, count: 92 }
    }
  },
  {
    name: "서농동",
    rate: 2.18,
    votes: {
      early: { rate: 2.09, count: 75 },
      polling: { rate: 2.24, count: 169 }
    }
  },
  {
    name: "구성동",
    rate: 1.19,
    votes: {
      early: { rate: 1.16, count: 66 },
      polling: { rate: 1.21, count: 166 }
    }
  },
  {
    name: "마북동",
    rate: 1.15,
    votes: {
      early: { rate: 1.06, count: 39 },
      polling: { rate: 1.20, count: 145 }
    }
  },
  {
    name: "동백1동",
    rate: 1.00,
    votes: {
      early: { rate: 0.94, count: 40 },
      polling: { rate: 1.03, count: 103 }
    }
  },
  {
    name: "동백2동",
    rate: 1.04,
    votes: {
      early: { rate: 0.78, count: 33 },
      polling: { rate: 1.18, count: 97 }
    }
  },
  {
    name: "동백3동",
    rate: 0.79,
    votes: {
      early: { rate: 0.56, count: 21 },
      polling: { rate: 0.92, count: 78 }
    }
  },
  {
    name: "상하동",
    rate: 1.38,
    votes: {
      early: { rate: 1.48, count: 46 },
      polling: { rate: 1.34, count: 107 }
    }
  },
  {
    name: "보정동",
    rate: 1.52,
    votes: {
      early: { rate: 1.34, count: 80 },
      polling: { rate: 1.61, count: 198 }
    }
  },
  {
    name: "죽전1동",
    rate: 1.45,
    votes: {
      early: { rate: 1.34, count: 72 },
      polling: { rate: 1.52, count: 154 }
    }
  },
  {
    name: "죽전2동",
    rate: 1.83,
    votes: {
      early: { rate: 1.93, count: 32 },
      polling: { rate: 1.74, count: 112 }
    }
  },
  {
    name: "죽전3동",
    rate: 1.58,
    votes: {
      early: { rate: 1.36, count: 35 },
      polling: { rate: 1.66, count: 143 }
    }
  },
  {
    name: "상현2동",
    rate: 1.30,
    votes: {
      early: { rate: 1.20, count: 59 },
      polling: { rate: 1.32, count: 150 }
    }
  }
] },

  // [ 11] 기초단체장  | 신현철 | 경기 고양시장
  { id: 11, voteRate: 1.92, totalVotes: 10382, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '덕양구_관외사전투표',
    rate: 2.29,
    votes: {
      absentee: { rate: 2.29, count: 679 }
    }
  },

  { name: '주교동', rate: 2.05,
    votes: {
      early: { rate: 1.49, count: 26 },
      polling: { rate: 2.37, count: 71 }
    }
  },

  { name: '원신동', rate: 1.50,
    votes: {
      early: { rate: 1.35, count: 21 },
      polling: { rate: 1.53, count: 121 }
    }
  },

  { name: '흥도동', rate: 1.53,
    votes: {
      early: { rate: 1.60, count: 33 },
      polling: { rate: 1.52, count: 159 }
    }
  },

  { name: '성사1동', rate: 2.17,
    votes: {
      early: { rate: 1.65, count: 59 },
      polling: { rate: 2.41, count: 190 }
    }
  },

  { name: '성사2동', rate: 2.81,
    votes: {
      early: { rate: 1.71, count: 31 },
      polling: { rate: 3.35, count: 125 }
    }
  },

  { name: '효자동', rate: 1.78,
    votes: {
      early: { rate: 1.50, count: 59 },
      polling: { rate: 1.92, count: 158 }
    }
  },

  { name: '삼송1동', rate: 1.77,
    votes: {
      early: { rate: 1.66, count: 63 },
      polling: { rate: 1.82, count: 135 }
    }
  },

  { name: '삼송2동', rate: 1.81,
    votes: {
      early: { rate: 1.74, count: 62 },
      polling: { rate: 1.84, count: 165 }
    }
  },

  { name: '창릉동', rate: 1.76,
    votes: {
      early: { rate: 1.77, count: 45 },
      polling: { rate: 1.76, count: 124 }
    }
  },

  { name: '고양동', rate: 1.52,
    votes: {
      early: { rate: 1.08, count: 45 },
      polling: { rate: 1.76, count: 133 }
    }
  },

  { name: '관산동', rate: 1.31,
    votes: {
      early: { rate: 1.14, count: 37 },
      polling: { rate: 1.36, count: 140 }
    }
  },

  { name: '능곡동', rate: 1.80,
    votes: {
      early: { rate: 1.19, count: 34 },
      polling: { rate: 2.11, count: 116 }
    }
  },

  { name: '화정1동', rate: 1.91,
    votes: {
      early: { rate: 1.85, count: 111 },
      polling: { rate: 1.94, count: 230 }
    }
  },

  { name: '화정2동', rate: 2.01,
    votes: {
      early: { rate: 1.67, count: 69 },
      polling: { rate: 2.15, count: 232 }
    }
  },

  { name: '행주동', rate: 1.51,
    votes: {
      early: { rate: 1.11, count: 15 },
      polling: { rate: 1.66, count: 60 }
    }
  },

  { name: '행신1동', rate: 1.72,
    votes: {
      early: { rate: 1.53, count: 44 },
      polling: { rate: 1.80, count: 128 }
    }
  },

  { name: '행신2동', rate: 1.64,
    votes: {
      early: { rate: 1.57, count: 69 },
      polling: { rate: 1.67, count: 173 }
    }
  },

  { name: '행신3동', rate: 1.76,
    votes: {
      early: { rate: 1.34, count: 48 },
      polling: { rate: 1.95, count: 156 }
    }
  },

  { name: '행신4동', rate: 1.41,
    votes: {
      early: { rate: 1.19, count: 39 },
      polling: { rate: 1.54, count: 90 }
    }
  },

  { name: '화전동', rate: 1.59,
    votes: {
      early: { rate: 1.44, count: 28 },
      polling: { rate: 1.62, count: 163 }
    }
  },

  { name: '대덕동', rate: 1.61,
    votes: {
      early: { rate: 1.75, count: 30 },
      polling: { rate: 1.57, count: 85 }
    }
  },

  { name: '식사동', rate: 2.20,
    votes: {
      early: { rate: 2.16, count: 90 },
      polling: { rate: 2.21, count: 278 }
    }
  },
  {
    name: '일산동구_관외사전투표',
    rate: 2.42,
    votes: {
      absentee: { rate: 2.42, count: 426 }
    }
  },

  { name: '중산1동', rate: 1.66,
    votes: {
      early: { rate: 1.46, count: 49 },
      polling: { rate: 1.76, count: 104 }
    }
  },

  { name: '중산2동', rate: 1.83,
    votes: {
      early: { rate: 1.87, count: 53 },
      polling: { rate: 1.80, count: 134 }
    }
  },

  { name: '정발산동', rate: 1.85,
    votes: {
      early: { rate: 1.62, count: 42 },
      polling: { rate: 1.92, count: 123 }
    }
  },

  { name: '풍산동', rate: 1.78,
    votes: {
      early: { rate: 1.15, count: 49 },
      polling: { rate: 1.85, count: 266 }
    }
  },

  { name: '백석1동', rate: 1.99,
    votes: {
      early: { rate: 2.15, count: 65 },
      polling: { rate: 1.95, count: 197 }
    }
  },

  { name: '백석2동', rate: 1.81,
    votes: {
      early: { rate: 1.55, count: 44 },
      polling: { rate: 1.93, count: 112 }
    }
  },

  { name: '마두1동', rate: 2.15,
    votes: {
      early: { rate: 2.17, count: 30 },
      polling: { rate: 2.14, count: 181 }
    }
  },

  { name: '마두2동', rate: 2.06,
    votes: {
      early: { rate: 1.91, count: 70 },
      polling: { rate: 2.18, count: 113 }
    }
  },

  { name: '장항1동', rate: 2.49,
    votes: {
      early: { rate: 1.41, count: 14 },
      polling: { rate: 2.65, count: 179 }
    }
  },

  { name: '장항2동', rate: 1.99,
    votes: {
      early: { rate: 1.82, count: 46 },
      polling: { rate: 2.06, count: 147 }
    }
  },

  { name: '고봉동', rate: 1.54,
    votes: {
      early: { rate: 0.90, count: 14 },
      polling: { rate: 1.60, count: 98 }
    }
  },

  { name: '일산2동', rate: 1.73,
    votes: {
      early: { rate: 1.45, count: 47 },
      polling: { rate: 1.85, count: 120 }
    }
  },
{
    "name": "일산서구_관외사전투표",
    "rate": 2.60,
    "votes": {
      "absentee": { "rate": 2.60, "count": 360 }
    }
  },
  {
    "name": "일산1동",
    "rate": 1.88,
    "votes": {
      "early": { "rate": 1.72, "count": 66 },
      "polling": { "rate": 1.94, "count": 147 }
    }
  },
  {
    "name": "일산3동",
    "rate": 1.99,
    "votes": {
      "early": { "rate": 1.53, "count": 64 },
      "polling": { "rate": 2.14, "count": 240 }
    }
  },
  {
    "name": "탄현1동",
    "rate": 1.83,
    "votes": {
      "early": { "rate": 1.48, "count": 57 },
      "polling": { "rate": 1.94, "count": 184 }
    }
  },
  {
    "name": "탄현2동",
    "rate": 1.92,
    "votes": {
      "early": { "rate": 1.44, "count": 44 },
      "polling": { "rate": 2.08, "count": 110 }
    }
  },
  {
    "name": "주엽1동",
    "rate": 2.04,
    "votes": {
      "early": { "rate": 1.91, "count": 68 },
      "polling": { "rate": 2.07, "count": 198 }
    }
  },
  {
    "name": "주엽2동",
    "rate": 1.97,
    "votes": {
      "early": { "rate": 1.89, "count": 58 },
      "polling": { "rate": 1.99, "count": 185 }
    }
  },
  {
    "name": "대화동",
    "rate": 2.23,
    "votes": {
      "early": { "rate": 1.93, "count": 57 },
      "polling": { "rate": 2.29, "count": 272 }
    }
  },
  {
    "name": "송포동",
    "rate": 2.10,
    "votes": {
      "early": { "rate": 1.49, "count": 40 },
      "polling": { "rate": 2.35, "count": 162 }
    }
  },
  {
    "name": "덕이동",
    "rate": 1.98,
    "votes": {
      "early": { "rate": 1.35, "count": 42 },
      "polling": { "rate": 2.02, "count": 168 }
    }
  },
  {
    "name": "가좌동",
    "rate": 2.02,
    "votes": {
      "early": { "rate": 1.30, "count": 37 },
      "polling": { "rate": 2.10, "count": 79 }
    }
  }
] },

  // [ 12] 기초단체장  | 전성균 | 경기 화성시장
  { id: 12, voteRate: 7.19, totalVotes: 32602, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '만세구_관외사전투표',
    rate: 4.90,
    votes: {
      absentee: { rate: 4.90, count: 630 }
    }
  },

  {
    name: '우정읍',
    rate: 3.21,
    votes: {
      early: { rate: 2.94, count: 83 },
      polling: { rate: 3.29, count: 152 }
    }
  },
  {
    name: '향남읍',
    rate: 3.32,
    votes: {
      early: { rate: 3.68, count: 266 },
      polling: { rate: 3.18, count: 773 }
    }
  },
  {
    name: '남양읍',
    rate: 3.43,
    votes: {
      early: { rate: 3.28, count: 236 },
      polling: { rate: 3.49, count: 564 }
    }
  },
  {
    name: '마도면',
    rate: 1.93,
    votes: {
      early: { rate: 2.42, count: 35 },
      polling: { rate: 1.52, count: 27 }
    }
  },
  {
    name: '송산면',
    rate: 2.06,
    votes: {
      early: { rate: 2.22, count: 36 },
      polling: { rate: 1.99, count: 59 }
    }
  },
  {
    name: '서신면',
    rate: 1.82,
    votes: {
      early: { rate: 2.08, count: 27 },
      polling: { rate: 1.63, count: 33 }
    }
  },
  {
    name: '팔탄면',
    rate: 2.20,
    votes: {
      early: { rate: 2.16, count: 31 },
      polling: { rate: 2.12, count: 55 }
    }
  },
  {
    name: '장안면',
    rate: 2.12,
    votes: {
      early: { rate: 2.37, count: 25 },
      polling: { rate: 2.09, count: 52 }
    }
  },
  {
    name: '양감면',
    rate: 2.47,
    votes: {
      early: { rate: 3.15, count: 34 },
      polling: { rate: 2.37, count: 21 }
    }
  },
  {
    name: '새솔동',
    rate: 3.09,
    votes: {
      early: { rate: 2.86, count: 110 },
      polling: { rate: 3.19, count: 222 }
    }
  },
  {
    name: '정남면',
    rate: 2.60,
    votes: {
      early: { rate: 2.83, count: 33 },
      polling: { rate: 2.48, count: 80 }
    }
  },
  {
    name: '매송면',
    rate: 2.60,
    votes: {
      early: { rate: 2.60, count: 21 },
      polling: { rate: 2.61, count: 57 }
    }
  },
  {
    name: '비봉면',
    rate: 2.91,
    votes: {
      early: { rate: 3.06, count: 65 },
      polling: { rate: 2.82, count: 144 }
    }
  },
  {
    name: '효행구_관외사전투표',
    rate: 4.43,
    votes: {
      absentee: { rate: 4.43, count: 242 }
    }
  },

  {
    name: '봉담읍',
    rate: 3.44,
    votes: {
      early: { rate: 3.02, count: 290 },
      polling: { rate: 3.55, count: 1177 }
    }
  },
  {
    name: '기배동',
    rate: 3.10,
    votes: {
      early: { rate: 2.93, count: 125 },
      polling: { rate: 3.24, count: 139 }
    }
  },
  {
    name: '병점구_관외사전투표',
    rate: 6.30,
    votes: {
      absentee: { rate: 6.30, count: 744 }
    }
  },

  {
    name: '진안동',
    rate: 4.28,
    votes: {
      early: { rate: 3.18, count: 89 },
      polling: { rate: 4.44, count: 663 }
    }
  },
  {
    name: '병점1동',
    rate: 3.86,
    votes: {
      early: { rate: 3.53, count: 165 },
      polling: { rate: 3.99, count: 438 }
    }
  },
  {
    name: '병점2동',
    rate: 3.72,
    votes: {
      early: { rate: 3.28, count: 132 },
      polling: { rate: 4.00, count: 255 }
    }
  },
  {
    name: '반월동',
    rate: 4.33,
    votes: {
      early: { rate: 3.42, count: 117 },
      polling: { rate: 4.59, count: 527 }
    }
  },
  {
    name: '화산동',
    rate: 3.08,
    votes: {
      early: { rate: 3.14, count: 123 },
      polling: { rate: 3.02, count: 251 }
    }
  },
  {
    name: '동탄3동',
    rate: 6.27,
    votes: {
      early: { rate: 5.57, count: 276 },
      polling: { rate: 6.48, count: 758 }
    }
  },
{ name: '동탄구_관외사전투표', rate: 11.60,
  votes: { absentee: { rate: 11.60, count: 2152 } }
},

{ name: '동탄1동', rate: 8.36,
  votes: {
    early: { rate: 7.84, count: 436 },
    polling: { rate: 8.54, count: 1326 }
  }
},

{ name: '동탄2동', rate: 4.88,
  votes: {
    early: { rate: 4.25, count: 232 },
    polling: { rate: 5.22, count: 527 }
  }
},

{ name: '동탄4동', rate: 12.65,
  votes: {
    early: { rate: 10.64, count: 649 },
    polling: { rate: 13.37, count: 2290 }
  }
},

{ name: '동탄5동', rate: 9.27,
  votes: {
    early: { rate: 8.90, count: 434 },
    polling: { rate: 9.39, count: 1353 }
  }
},

{ name: '동탄6동', rate: 14.53,
  votes: {
    early: { rate: 11.54, count: 515 },
    polling: { rate: 15.55, count: 2052 }
  }
},

{ name: '동탄7동', rate: 14.59,
  votes: {
    early: { rate: 11.61, count: 667 },
    polling: { rate: 15.62, count: 2574 }
  }
},

{ name: '동탄8동', rate: 17.90,
  votes: {
    early: { rate: 14.86, count: 669 },
    polling: { rate: 19.10, count: 2182 }
  }
},

{ name: '동탄9동', rate: 17.10,
  votes: {
    early: { rate: 14.50, count: 885 },
    polling: { rate: 17.98, count: 3204 }
  }}
] },

  // [ 13] 기초단체장  | 송진영 | 경기 오산시장
  { id: 13, voteRate: 2.32, totalVotes: 2694, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 3.30,
  votes: { absentee: { rate: 3.30, count: 384 } }
},

{ name: '중앙동', rate: 2.33,
  votes: {
    early: { rate: 2.06, count: 96 },
    polling: { rate: 2.45, count: 265 }
  }
},

{ name: '대원1동', rate: 2.20,
  votes: {
    early: { rate: 1.97, count: 106 },
    polling: { rate: 2.30, count: 305 }
  }
},

{ name: '대원2동', rate: 2.10,
  votes: {
    early: { rate: 2.19, count: 56 },
    polling: { rate: 2.07, count: 163 }
  }
},

{ name: '남촌동', rate: 2.08,
  votes: {
    early: { rate: 2.53, count: 57 },
    polling: { rate: 1.95, count: 154 }
  }
},

{ name: '신장1동', rate: 2.35,
  votes: {
    early: { rate: 2.09, count: 80 },
    polling: { rate: 2.45, count: 257 }
  }
},

{ name: '신장2동', rate: 1.93,
  votes: {
    early: { rate: 2.08, count: 52 },
    polling: { rate: 1.88, count: 137 }
  }
},

{ name: '세마동', rate: 2.52,
  votes: {
    early: { rate: 1.90, count: 65 },
    polling: { rate: 2.72, count: 288 }
  }
},

{ name: '초평동', rate: 1.70,
  votes: {
    early: { rate: 1.39, count: 59 },
    polling: { rate: 1.86, count: 152 }
  }
}] },

  // [ 14] 기초단체장  | 고금란 | 경기 과천시장
  { id: 14, voteRate: 2.27, totalVotes: 1068, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 2.75,
  votes: { absentee: { rate: 2.75, count: 140 } }
},

{ name: '중앙동', rate: 1.95,
  votes: {
    early: { rate: 1.67, count: 37 },
    polling: { rate: 2.08, count: 94 }
  }
},

{ name: '원문동', rate: 1.90,
  votes: {
    early: { rate: 1.72, count: 40 },
    polling: { rate: 1.96, count: 125 }
  }
},

{ name: '갈현동', rate: 1.84,
  votes: {
    early: { rate: 2.17, count: 46 },
    polling: { rate: 1.77, count: 113 }
  }
},

{ name: '별양동', rate: 2.41,
  votes: {
    early: { rate: 2.86, count: 43 },
    polling: { rate: 2.26, count: 110 }
  }
},

{ name: '부림동', rate: 2.53,
  votes: {
    early: { rate: 2.94, count: 50 },
    polling: { rate: 2.32, count: 76 }
  }
},

{ name: '과천동', rate: 2.29,
  votes: {
    early: { rate: 2.72, count: 20 },
    polling: { rate: 2.15, count: 49 }
  }
},

{ name: '문원동', rate: 3.30,
  votes: {
    early: { rate: 2.29, count: 30 },
    polling: { rate: 3.84, count: 95 }
  }
}] },

  // [ 15] 기초단체장  | 이혜숙 | 서울 관악구청장
  { id: 15, voteRate: 5.04, totalVotes: 13089, result: '후보', quota: 1, districts: [], neighborhoods: [{
    name: '관외사전투표',
    rate: 5.43,
    votes: {
      absentee: { rate: 5.43, count: 1766 }
    }
  },

  {
    name: '보라매동',
    rate: 4.28,
    votes: {
      early: { rate: 4.64, count: 146 },
      polling: { rate: 4.50, count: 319 }
    }
  },
  {
    name: '은천동',
    rate: 4.01,
    votes: {
      early: { rate: 3.74, count: 181 },
      polling: { rate: 4.25, count: 447 }
    }
  },
  {
    name: '성현동',
    rate: 4.19,
    votes: {
      early: { rate: 3.93, count: 153 },
      polling: { rate: 4.31, count: 485 }
    }
  },
  {
    name: '중앙동',
    rate: 5.51,
    votes: {
      early: { rate: 5.84, count: 150 },
      polling: { rate: 5.35, count: 266 }
    }
  },
  {
    name: '청림동',
    rate: 4.33,
    votes: {
      early: { rate: 3.42, count: 84 },
      polling: { rate: 4.59, count: 256 }
    }
  },
  {
    name: '행운동',
    rate: 5.41,
    votes: {
      early: { rate: 5.18, count: 193 },
      polling: { rate: 5.50, count: 556 }
    }
  },
  {
    name: '청룡동',
    rate: 5.88,
    votes: {
      early: { rate: 7.00, count: 219 },
      polling: { rate: 5.61, count: 777 }
    }
  },
  {
    name: '낙성대동',
    rate: 5.00,
    votes: {
      early: { rate: 6.01, count: 144 },
      polling: { rate: 4.94, count: 425 }
    }
  },
  {
    name: '인헌동',
    rate: 4.70,
    votes: {
      early: { rate: 4.35, count: 242 },
      polling: { rate: 4.94, count: 450 }
    }
  },
  {
    name: '남현동',
    rate: 4.15,
    votes: {
      early: { rate: 3.56, count: 108 },
      polling: { rate: 4.63, count: 278 }
    }
  },
  {
    name: '신림동',
    rate: 5.30,
    votes: {
      early: { rate: 5.88, count: 173 },
      polling: { rate: 5.22, count: 447 }
    }
  },
  {
    name: '신사동',
    rate: 4.47,
    votes: {
      early: { rate: 4.22, count: 166 },
      polling: { rate: 4.63, count: 303 }
    }
  },
  {
    name: '조원동',
    rate: 4.33,
    votes: {
      early: { rate: 4.11, count: 132 },
      polling: { rate: 4.34, count: 283 }
    }
  },
  {
    name: '미성동',
    rate: 4.00,
    votes: {
      early: { rate: 3.62, count: 141 },
      polling: { rate: 4.26, count: 415 }
    }
  },
  {
    name: '난곡동',
    rate: 3.63,
    votes: {
      early: { rate: 3.23, count: 115 },
      polling: { rate: 3.82, count: 294 }
    }
  },
  {
    name: '난향동',
    rate: 3.70,
    votes: {
      early: { rate: 2.97, count: 77 },
      polling: { rate: 4.11, count: 197 }
    }
  },
  {
    name: '서원동',
    rate: 4.74,
    votes: {
      early: { rate: 4.68, count: 134 },
      polling: { rate: 4.79, count: 418 }
    }
  },
  {
    name: '신원동',
    rate: 4.34,
    votes: {
      early: { rate: 5.29, count: 171 },
      polling: { rate: 4.30, count: 271 }
    }
  },
  {
    name: '서림동',
    rate: 4.96,
    votes: {
      early: { rate: 4.21, count: 88 },
      polling: { rate: 5.53, count: 420 }
    }
  },
  {
    name: '삼성동',
    rate: 3.79,
    votes: {
      early: { rate: 3.50, count: 126 },
      polling: { rate: 3.94, count: 287 }
    }
  },
  {
    name: '대학동',
    rate: 5.64,
    votes: {
      early: { rate: 6.17, count: 243 },
      polling: { rate: 5.39, count: 527 }
    }
  }] },

  // [ 16] 기초단체장  | 길기영 | 서울 중구청장
  { id: 16, voteRate: 3.18, totalVotes: 2207, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '관외사전투표',
    rate: 2.97,
    votes: {
      absentee: { rate: 2.97, count: 273 }
    }
  },

  {
    name: '소공동',
    rate: 2.03,
    votes: {
      early: { rate: 1.26, count: 5 },
      polling: { rate: 2.44, count: 18 }
    }
  },
  {
    name: '회현동',
    rate: 6.25,
    votes: {
      early: { rate: 7.03, count: 46 },
      polling: { rate: 5.88, count: 81 }
    }
  },
  {
    name: '명동',
    rate: 2.42,
    votes: {
      early: { rate: 2.33, count: 8 },
      polling: { rate: 2.47, count: 16 }
    }
  },
  {
    name: '필동',
    rate: 2.97,
    votes: {
      early: { rate: 3.16, count: 25 },
      polling: { rate: 2.87, count: 43 }
    }
  },
  {
    name: '장충동',
    rate: 3.52,
    votes: {
      early: { rate: 3.75, count: 24 },
      polling: { rate: 3.43, count: 55 }
    }
  },
  {
    name: '광희동',
    rate: 2.77,
    votes: {
      early: { rate: 2.86, count: 15 },
      polling: { rate: 2.75, count: 55 }
    }
  },
  {
    name: '을지로동',
    rate: 2.10,
    votes: {
      early: { rate: 1.96, count: 12 },
      polling: { rate: 2.19, count: 23 }
    }
  },
  {
    name: '신당동',
    rate: 2.39,
    votes: {
      early: { rate: 2.53, count: 26 },
      polling: { rate: 2.33, count: 58 }
    }
  },
  {
    name: '다산동',
    rate: 4.88,
    votes: {
      early: { rate: 4.84, count: 81 },
      polling: { rate: 4.90, count: 218 }
    }
  },
  {
    name: '약수동',
    rate: 2.82,
    votes: {
      early: { rate: 3.18, count: 73 },
      polling: { rate: 2.69, count: 175 }
    }
  },
  {
    name: '청구동',
    rate: 3.21,
    votes: {
      early: { rate: 3.39, count: 46 },
      polling: { rate: 3.15, count: 148 }
    }
  },
  {
    name: '신당제5동',
    rate: 2.89,
    votes: {
      early: { rate: 2.73, count: 57 },
      polling: { rate: 2.99, count: 93 }
    }
  },
  {
    name: '동화동',
    rate: 3.72,
    votes: {
      early: { rate: 3.71, count: 70 },
      polling: { rate: 3.73, count: 134 }
    }
  },
  {
    name: '황학동',
    rate: 2.50,
    votes: {
      early: { rate: 2.73, count: 50 },
      polling: { rate: 2.42, count: 115 }
    }
  },
  {
    name: '중림동',
    rate: 2.56,
    votes: {
      early: { rate: 2.61, count: 49 },
      polling: { rate: 2.53, count: 113 }
    }
  }] },

  // [ 17] 기초단체장  | 김형우 | 강원 삼척시장
  { id: 17, voteRate: 4.42, totalVotes: 1628, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 6.55,
  votes: { absentee: { rate: 6.55, count: 219 } }
},

{ name: '도계읍', rate: 3.44,
  votes: {
    early: { rate: 3.18, count: 68 },
    polling: { rate: 3.46, count: 95 }
  }
},

{ name: '원덕읍', rate: 3.24,
  votes: {
    early: { rate: 4.21, count: 44 },
    polling: { rate: 2.65, count: 46 }
  }
},

{ name: '근덕면', rate: 3.89,
  votes: {
    early: { rate: 3.36, count: 32 },
    polling: { rate: 4.01, count: 74 }
  }
},

{ name: '하장면', rate: 2.83,
  votes: {
    early: { rate: 1.99, count: 4 },
    polling: { rate: 3.11, count: 17 }
  }
},

{ name: '노곡면', rate: 3.93,
  votes: {
    early: { rate: 5.31, count: 6 },
    polling: { rate: 3.34, count: 9 }
  }
},

{ name: '미로면', rate: 4.22,
  votes: {
    early: { rate: 6.03, count: 35 },
    polling: { rate: 4.19, count: 24 }
  }
},

{ name: '가곡면', rate: 2.23,
  votes: {
    early: { rate: 0.00, count: 0 },
    polling: { rate: 2.91, count: 8 }
  }
},

{ name: '신기면', rate: 3.26,
  votes: {
    early: { rate: 2.96, count: 6 },
    polling: { rate: 3.51, count: 8 }
  }
},

{ name: '남양동', rate: 3.89,
  votes: {
    early: { rate: 6.09, count: 87 },
    polling: { rate: 3.31, count: 126 }
  }
},

{ name: '성내동', rate: 4.75,
  votes: {
    early: { rate: 3.90, count: 79 },
    polling: { rate: 5.32, count: 121 }
  }
},

{ name: '교동', rate: 5.11,
  votes: {
    early: { rate: 4.66, count: 116 },
    polling: { rate: 5.43, count: 218 }
  }
},

{ name: '정라동', rate: 4.94,
  votes: {
    early: { rate: 3.67, count: 34 },
    polling: { rate: 5.18, count: 147 }
  }
}] },

  // [ 18] 기초단체장  | 김홍수 | 강원 동해시장
  { id: 18, voteRate: 3.48, totalVotes: 1618, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 3.85,
  votes: { absentee: { rate: 3.85, count: 154 } }
},

{ name: '천곡동', rate: 3.09,
  votes: {
    early: { rate: 2.40, count: 78 },
    polling: { rate: 3.30, count: 302 }
  }
},

{ name: '송정동', rate: 4.30,
  votes: {
    early: { rate: 4.37, count: 26 },
    polling: { rate: 4.26, count: 47 }
  }
},

{ name: '북삼동', rate: 3.89,
  votes: {
    early: { rate: 3.16, count: 134 },
    polling: { rate: 4.07, count: 257 }
  }
},

{ name: '부곡동', rate: 3.25,
  votes: {
    early: { rate: 2.87, count: 44 },
    polling: { rate: 3.61, count: 56 }
  }
},

{ name: '동호동', rate: 3.07,
  votes: {
    early: { rate: 2.46, count: 24 },
    polling: { rate: 3.36, count: 50 }
  }
},

{ name: '발한동', rate: 1.84,
  votes: {
    early: { rate: 2.02, count: 16 },
    polling: { rate: 1.74, count: 18 }
  }
},

{ name: '묵호동', rate: 1.67,
  votes: {
    early: { rate: 1.05, count: 5 },
    polling: { rate: 1.94, count: 18 }
  }
},

{ name: '북평동', rate: 4.05,
  votes: {
    early: { rate: 4.11, count: 100 },
    polling: { rate: 3.96, count: 146 }
  }
},

{ name: '망상동', rate: 2.65,
  votes: {
    early: { rate: 3.25, count: 16 },
    polling: { rate: 2.29, count: 26 }
  }
},

{ name: '삼화동', rate: 4.23,
  votes: {
    early: { rate: 3.50, count: 22 },
    polling: { rate: 4.78, count: 42 }
  }
}] },

  // [ 19] 기초단체장  | 유관곤 | 충남 서산시장
  { id: 19, voteRate: 2.87, totalVotes: 2521, result: '후보', quota: 1, districts: [], neighborhoods: [
  {
    name: "관외사전투표",
    rate: 2.85,
    votes: {
      absentee: { rate: 2.85, count: 285 }
    }
  },

  {
    name: "대산읍",
    rate: 1.57,
    votes: {
      early: { rate: 1.70, count: 36 },
      polling: { rate: 2.48, count: 90 }
    }
  },

  {
    name: "인지면",
    rate: 6.61,
    votes: {
      early: { rate: 4.50, count: 64 },
      polling: { rate: 7.94, count: 179 }
    }
  },

  {
    name: "부석면",
    rate: 3.23,
    votes: {
      early: { rate: 2.29, count: 19 },
      polling: { rate: 3.68, count: 67 }
    }
  },

  {
    name: "팔봉면",
    rate: 2.92,
    votes: {
      early: { rate: 1.61, count: 11 },
      polling: { rate: 3.69, count: 43 }
    }
  },

  {
    name: "지곡면",
    rate: 2.73,
    votes: {
      early: { rate: 2.02, count: 22 },
      polling: { rate: 3.06, count: 76 }
    }
  },

  {
    name: "성연면",
    rate: 2.69,
    votes: {
      early: { rate: 1.83, count: 43 },
      polling: { rate: 3.16, count: 133 }
    }
  },

  {
    name: "음암면",
    rate: 1.75,
    votes: {
      early: { rate: 1.89, count: 21 },
      polling: { rate: 1.70, count: 54 }
    }
  },

  {
    name: "운산면",
    rate: 2.25,
    votes: {
      early: { rate: 2.47, count: 23 },
      polling: { rate: 2.14, count: 39 }
    }
  },

  {
    name: "해미면",
    rate: 1.99,
    votes: {
      early: { rate: 2.26, count: 34 },
      polling: { rate: 1.64, count: 38 }
    }
  },

  {
    name: "고북면",
    rate: 3.09,
    votes: {
      early: { rate: 3.11, count: 19 },
      polling: { rate: 2.97, count: 53 }
    }
  },

  {
    name: "부춘동",
    rate: 2.87,
    votes: {
      early: { rate: 1.84, count: 46 },
      polling: { rate: 3.34, count: 181 }
    }
  },

  {
    name: "동문1동",
    rate: 2.57,
    votes: {
      early: { rate: 2.16, count: 59 },
      polling: { rate: 2.71, count: 137 }
    }
  },

  {
    name: "동문2동",
    rate: 2.43,
    votes: {
      early: { rate: 2.25, count: 24 },
      polling: { rate: 3.39, count: 89 }
    }
  },

  {
    name: "수석동",
    rate: 2.70,
    votes: {
      early: { rate: 2.27, count: 61 },
      polling: { rate: 2.95, count: 143 }
    }
  },

  {
    name: "석남동",
    rate: 2.90,
    votes: {
      early: { rate: 2.55, count: 104 },
      polling: { rate: 3.03, count: 311 }
    }
  }
] },

  // [ 20] 광역의원   | 서운교 | 대구광역시 수성구 제3선거구
  { id: 20, voteRate: 8.09, totalVotes: 4.42, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 8.53,
  votes: { absentee: { rate: 8.53, count: 392 } }
},
{ name: '고산1동', rate: 8.25,
  votes: {
    early: { rate: 7.78, count: 355 },
    polling: { rate: 8.44, count: 984 }
  }
},
{ name: '고산2동', rate: 8.48,
  votes: {
    early: { rate: 8.70, count: 290 },
    polling: { rate: 8.40, count: 853 }
  }
},
{ name: '고산3동', rate: 7.45,
  votes: {
    early: { rate: 7.36, count: 295 },
    polling: { rate: 7.47, count: 862 }
  }
},] },

  // [ 21] 광역의원   | 강인수 | 서울특별시 강남구 제1선거구
  { id: 21, voteRate: 9.68, totalVotes: 4183, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 14.91,
  votes: { absentee: { rate: 14.91, count: 638 } }
},
{ name: '신사동', rate: 8.45,
  votes: {
    early: { rate: 13.23, count: 194 },
    polling: { rate: 7.26, count: 427 }
  }
},
{ name: '논현1동', rate: 13.12,
  votes: {
    early: { rate: 17.83, count: 302 },
    polling: { rate: 11.73, count: 672 }
  }
},
{ name: '압구정동', rate: 7.19,
  votes: {
    early: { rate: 11.77, count: 222 },
    polling: { rate: 6.37, count: 667 }
  }
},
{ name: '청담동', rate: 8.99,
  votes: {
    early: { rate: 14.19, count: 247 },
    polling: { rate: 8.10, count: 808 }
  }
},] },

  // [ 22] 광역의원   | 주이삭 | 서울특별시 서대문구 제1선거구
  { id: 22, voteRate: 13.88, totalVotes: 5577, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 10.32,
  votes: { absentee: { rate: 10.32, count: 596 } }
},
{ name: '충현동', rate: 17.34,
  votes: {
    early: { rate: 16.70, count: 321 },
    polling: { rate: 17.52, count: 1202 }
  }
},
{ name: '천연동', rate: 13.59,
  votes: {
    early: { rate: 12.27, count: 348 },
    polling: { rate: 14.20, count: 883 }
  }
},
{ name: '북아현동', rate: 17.42,
  votes: {
    early: { rate: 15.65, count: 461 },
    polling: { rate: 18.39, count: 986 }
  }
},
{ name: '신촌동', rate: 9.48,
  votes: {
    early: { rate: 14.81, count: 221 },
    polling: { rate: 8.29, count: 552 }
  }
}] },

  // [ 23] 광역의원   | 문모은 | 서울특별시 강북구 제4선거구
  { id: 23, voteRate: 2.60, totalVotes: 900, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '관외사전투표',
    rate: 3.06,
    votes: {
      absentee: { rate: 3.06, count: 127 }
    }
  },

  {
    name: '미아동',
    rate: 2.61,
    votes: {
      early: { rate: 2.06, count: 79 },
      polling: { rate: 2.74, count: 181 }
    }
  },

  {
    name: '송중동',
    rate: 2.66,
    votes: {
      early: { rate: 2.64, count: 91 },
      polling: { rate: 2.66, count: 238 }
    }
  },

  {
    name: '번3동',
    rate: 2.22,
    votes: {
      early: { rate: 1.74, count: 49 },
      polling: { rate: 2.49, count: 130 }
    }
  }] },

  // [ 24] 광역의원   | 강득형 | 서울특별시 강남구 제4선거구
  { id: 24, voteRate: 2.78, totalVotes: 1759, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 4.16,
  votes: { absentee: { rate: 4.16, count: 276 } }
},
{ name: '개포3동', rate: 3.10,
  votes: {
    early: { rate: 2.94, count: 77 },
    polling: { rate: 3.18, count: 187 }
  }
},
{ name: '일원본동', rate: 2.78,
  votes: {
    early: { rate: 2.35, count: 82 },
    polling: { rate: 2.97, count: 235 }
  }
},
{ name: '일원1동', rate: 2.42,
  votes: {
    early: { rate: 2.26, count: 37 },
    polling: { rate: 2.47, count: 127 }
  }
},
{ name: '수서동', rate: 2.21,
  votes: {
    early: { rate: 2.16, count: 51 },
    polling: { rate: 2.24, count: 123 }
  }
},
{ name: '세곡동', rate: 2.55,
  votes: {
    early: { rate: 2.04, count: 94 },
    polling: { rate: 2.68, count: 464 }
  }
},] },

  // [ 25] 광역의원   | 박상혁 | 서울특별시 서초구 제1선거구
  { id: 25, voteRate: 7.63, totalVotes: 4436, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 7.09,
  votes: { absentee: { rate: 7.09, count: 394 } }
},
{ name: '잠원동', rate: 8.47,
  votes: {
    early: { rate: 9.03, count: 326 },
    polling: { rate: 8.32, count: 1139 }
  }
},
{ name: '반포1동', rate: 6.66,
  votes: {
    early: { rate: 7.44, count: 245 },
    polling: { rate: 6.44, count: 735 }
  }
},
{ name: '반포3동', rate: 9.14,
  votes: {
    early: { rate: 10.34, count: 315 },
    polling: { rate: 8.73, count: 782 }
  }
},
{ name: '반포4동', rate: 5.84,
  votes: {
    early: { rate: 6.15, count: 109 },
    polling: { rate: 5.76, count: 386 }
  }
},] },

  // [ 26] 광역의원   | 이종태 | 서울특별시 강동구 제2선거구
  { id: 26, voteRate: 4.30, totalVotes: 1940, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 4.89,
  votes: { absentee: { rate: 4.89, count: 210 } }
},
{ name: '상일제1동', rate: 4.20,
  votes: {
    early: { rate: 4.21, count: 199 },
    polling: { rate: 4.20, count: 605 }
  }
},
{ name: '명일제1동', rate: 4.37,
  votes: {
    early: { rate: 4.80, count: 189 },
    polling: { rate: 4.17, count: 367 }
  }
},
{ name: '명일제2동', rate: 4.17,
  votes: {
    early: { rate: 4.52, count: 101 },
    polling: { rate: 4.05, count: 265 }
  }
},] },

  // [ 27] 광역의원   | 류근윤 | 충청북도 청주시 제13선거구
  { id: 27, voteRate: 4.50, totalVotes: 719, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 4.32,
  votes: { absentee: { rate: 4.32, count: 66 } }
},
{ name: '우암동', rate: 6.32,
  votes: {
    early: { rate: 7.02, count: 105 },
    polling: { rate: 6.03, count: 218 }
  }
},
{ name: '내덕제1동', rate: 3.52,
  votes: {
    early: { rate: 3.28, count: 44 },
    polling: { rate: 3.67, count: 88 }
  }
},
{ name: '내덕제2동', rate: 3.45,
  votes: {
    early: { rate: 3.78, count: 63 },
    polling: { rate: 3.30, count: 128 }
  }
},] },

  // [ 28] 광역의원   | 김순주 | 세종특별자치시 4선거구
  { id: 28, voteRate: 14.07, totalVotes: 1908, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 12.31,
  votes: { absentee: { rate: 12.31, count: 245 } }
},
{ name: '연기면', rate: 3.80,
  votes: {
    early: { rate: 4.63, count: 18 },
    polling: { rate: 3.27, count: 20 }
  }
},
{ name: '연동면', rate: 3.20,
  votes: {
    early: { rate: 3.06, count: 11 },
    polling: { rate: 3.26, count: 30 }
  }
},
{ name: '해밀동', rate: 17.06,
  votes: {
    early: { rate: 15.30, count: 483 },
    polling: { rate: 17.99, count: 1097 }
  }
},] },

  // [ 29] 광역의원   | 이건우 | 제주특별자치도 노형 을선거구
  { id: 29, voteRate: 11.57, totalVotes: 1524, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 12.28,
  votes: { absentee: { rate: 12.28, count: 265 } }
},
{ name: '노형동', rate: 11.39,
  votes: {
    early: { rate: 9.89, count: 301 },
    polling: { rate: 11.98, count: 951 }
  }
},] },

  // [ 30] 광역의원   | 양해두 | 제주특별자치도 외도·이호·도두선거구
  { id: 30, voteRate: 27.51, totalVotes: 3559, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 20.71,
  votes: { absentee: { rate: 20.71, count: 298 } }
},
{ name: '외도동', rate: 30.98,
  votes: {
    early: { rate: 23.89, count: 662 },
    polling: { rate: 34.45, count: 1948 }
  }
},
{ name: '이호동', rate: 21.07,
  votes: {
    early: { rate: 16.82, count: 109 },
    polling: { rate: 23.54, count: 266 }
  }
},
{ name: '도두동', rate: 21.32,
  votes: {
    early: { rate: 17.38, count: 68 },
    polling: { rate: 23.09, count: 200 }
  }
},] },

  // [ 31] 기초의원   | 채송준 | 서울 강남구 다선거구
  { id: 31, voteRate: 4.03, totalVotes: 1662, result: '후보', quota: 1, districts: [], neighborhoods: [{
    name: '관외사전투표',
    rate: 4.49,
    votes: {
      absentee: { rate: 4.49, count: 243 }
    }
  },
  {
    name: '논현2동',
    rate: 2.62,
    votes: {
      early: { rate: 2.53, count: 38 },
      polling: { rate: 2.64, count: 170 }
    }
  },
  {
    name: '역삼1동',
    rate: 3.41,
    votes: {
      early: { rate: 3.77, count: 107 },
      polling: { rate: 3.30, count: 312 }
    }
  },
  {
    name: '역삼2동',
    rate: 5.12,
    votes: {
      early: { rate: 5.91, count: 225 },
      polling: { rate: 4.86, count: 562 }
    }
  }] },

  // [ 32] 기초의원   | 이규민 | 서울 강남구 마선거구
  { id: 32, voteRate: 3.13, totalVotes: 916, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '관외사전투표',
    rate: 5.22,
    votes: {
      absentee: { rate: 5.22, count: 146 }
    }
  },
  {
    name: '개포3동',
    rate: 3.12,
    votes: {
      early: { rate: 3.11, count: 81 },
      polling: { rate: 3.12, count: 181 }
    }
  },
  {
    name: '일원본동',
    rate: 3.24,
    votes: {
      early: { rate: 3.13, count: 109 },
      polling: { rate: 3.29, count: 257 }
    }
  },
  {
    name: '일원1동',
    rate: 2.10,
    votes: {
      early: { rate: 1.71, count: 28 },
      polling: { rate: 2.23, count: 112 }
    }
  }] },

  // [ 33] 기초의원   | 구성도 | 서울 강남구 라선거구
  { id: 33, voteRate: 4.13, totalVotes: 2001, result: '후보', quota: 1, districts: [], neighborhoods: [ {
    name: '관외사전투표',
    rate: 4.57,
    votes: {
      absentee: { rate: 4.57, count: 269 }
    }
  },
  {
    name: '개포1동',
    rate: 4.09,
    votes: {
      early: { rate: 5.33, count: 186 },
      polling: { rate: 3.66, count: 372 }
    }
  },
  {
    name: '개포2동',
    rate: 4.60,
    votes: {
      early: { rate: 4.26, count: 117 },
      polling: { rate: 4.66, count: 698 }
    }
  },
  {
    name: '개포4동',
    rate: 3.21,
    votes: {
      early: { rate: 3.16, count: 99 },
      polling: { rate: 3.23, count: 256 }
    }
  }] },

  // [ 34] 기초의원   | 김동현 | 서울 강남구 자선거구
  { id: 34, voteRate: 5.24, totalVotes: 2233, result: '후보', quota: 1, districts: [], neighborhoods: [{
    name: '관외사전투표',
    rate: 5.58,
    votes: {
      absentee: { rate: 5.58, count: 271 }
    }
  },
  {
    name: '삼성1동',
    rate: 4.40,
    votes: {
      early: { rate: 4.82, count: 68 },
      polling: { rate: 4.27, count: 203 }
    }
  },
  {
    name: '삼성2동',
    rate: 5.37,
    votes: {
      early: { rate: 5.61, count: 160 },
      polling: { rate: 5.31, count: 583 }
    }
  },
  {
    name: '대치2동',
    rate: 5.37,
    votes: {
      early: { rate: 5.98, count: 187 },
      polling: { rate: 5.24, count: 759 }
    }
  }] },

  // [ 35] 기초의원   | 김정훈 | 서울 동대문구 바선거구
  { id: 35, voteRate: 2.71, totalVotes: 1420, result: '후보', quota: 1, districts: [], neighborhoods: [ {
    name: '관외사전투표',
    rate: 3.09,
    votes: {
      absentee: { rate: 3.09, count: 164 }
    }
  },
  {
    name: '답십리제2동',
    rate: 2.61,
    votes: {
      early: { rate: 2.54, count: 92 },
      polling: { rate: 2.63, count: 261 }
    }
  },
  {
    name: '장안제1동',
    rate: 2.66,
    votes: {
      early: { rate: 2.10, count: 111 },
      polling: { rate: 2.90, count: 372 }
    }
  },
  {
    name: '장안제2동',
    rate: 2.74,
    votes: {
      early: { rate: 2.35, count: 92 },
      polling: { rate: 2.88, count: 327 }
    }
  }] },

  // [ 36] 기초의원   | 이호엽 | 서울 성북구 가선거구
  { id: 36, voteRate: 3.93, totalVotes: 2276, result: '후보', quota: 1, districts: [], neighborhoods: [      {
    name: '관외사전투표',
    rate: 3.03,
    votes: {
      absentee: { rate: 3.03, count: 198 }
    }
  },

  {
    name: '성북동',
    rate: 3.15,
    votes: {
      early: { rate: 2.41, count: 76 },
      polling: { rate: 3.28, count: 136 }
    }
  },

  {
    name: '삼선동',
    rate: 3.26,
    votes: {
      early: { rate: 2.79, count: 125 },
      polling: { rate: 3.36, count: 1140 }
    }
  },

  {
    name: '동선동',
    rate: 2.98,
    votes: {
      early: { rate: 3.10, count: 45 },
      polling: { rate: 3.13, count: 693 }
    }
  },

  {
    name: '돈암제2동',
    rate: 3.08,
    votes: {
      early: { rate: 2.29, count: 61 },
      polling: { rate: 3.16, count: 535 }
    }
  },

  {
    name: '안암동',
    rate: 4.66,
    votes: {
      early: { rate: 4.66, count: 165 },
      polling: { rate: 4.66, count: 460 }
    }
  },

  {
    name: '보문동',
    rate: 3.21,
    votes: {
      early: { rate: 2.96, count: 71 },
      polling: { rate: 3.41, count: 158 }
    }
  }
] },

  // [ 37] 기초의원   | 김성우 | 서울 서대문구 가선거구
  { id: 37, voteRate: 6.67, totalVotes: 2654, result: '후보', quota: 1, districts: [], neighborhoods: [{
    name: '관외사전투표',
    rate: 6.17,
    votes: {
      absentee: { rate: 6.17, count: 353 }
    }
  },
  {
    name: '충현동',
    rate: 6.79,
    votes: {
      early: { rate: 5.89, count: 112 },
      polling: { rate: 7.04, count: 477 }
    }
  },
  {
    name: '천연동',
    rate: 5.83,
    votes: {
      early: { rate: 4.90, count: 139 },
      polling: { rate: 6.26, count: 385 }
    }
  },
  {
    name: '북아현동',
    rate: 8.42,
    votes: {
      early: { rate: 7.41, count: 217 },
      polling: { rate: 8.97, count: 476 }
    }
  },
  {
    name: '신촌동',
    rate: 6.09,
    votes: {
      early: { rate: 7.98, count: 118 },
      polling: { rate: 5.67, count: 375 }
    }
  }] },

  // [ 38] 기초의원   | 오상균 | 서울 성동구 다선거구
  { id: 38, voteRate: 2.83, totalVotes: 878, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.12,"votes":{"absentee":{"rate":4.12,"count":171}}},
{"name":"마장동","rate":2.22,"votes":{"early":{"rate":1.79,"count":52},"polling":{"rate":2.38,"count":193}}},
{"name":"사근동","rate":4.79,"votes":{"early":{"rate":3.98,"count":55},"polling":{"rate":5.08,"count":196}}},
{"name":"송정동","rate":1.75,"votes":{"early":{"rate":1.58,"count":22},"polling":{"rate":1.83,"count":55}}},
{"name":"용답동","rate":2.12,"votes":{"early":{"rate":2.31,"count":48},"polling":{"rate":2.02,"count":83}}},] },

  // [ 39] 기초의원   | 최성진 | 서울 구로구 바선거구
  { id: 39, voteRate: 5.00, totalVotes: 1293, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":5.27,"votes":{"absentee":{"rate":5.27,"count":196}}},
{"name":"구로제3동","rate":5.8,"votes":{"early":{"rate":5.52,"count":202},"polling":{"rate":5.93,"count":427}}},
{"name":"구로제4동","rate":4.2,"votes":{"early":{"rate":2.59,"count":54},"polling":{"rate":4.78,"count":274}}},
{"name":"가리봉동","rate":4,"votes":{"early":{"rate":3.01,"count":35},"polling":{"rate":4.51,"count":102}}}] },

  // [ 40] 기초의원   | 고길주 | 서울 영등포구 사선거구
  { id: 40, voteRate: 2.30, totalVotes: 808, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":3.55,"votes":{"absentee":{"rate":3.55,"count":145}}},
{"name":"신길제6동","rate":2.66,"votes":{"early":{"rate":2.09,"count":61},"polling":{"rate":2.94,"count":178}}},
{"name":"대림제1동","rate":1.69,"votes":{"early":{"rate":1.46,"count":35},"polling":{"rate":1.82,"count":75}}},
{"name":"대림제2동","rate":2.16,"votes":{"early":{"rate":1.78,"count":32},"polling":{"rate":2.34,"count":88}}},
{"name":"대림제3동","rate":1.94,"votes":{"early":{"rate":1.95,"count":51},"polling":{"rate":1.94,"count":142}}},] },

  // [ 41] 기초의원   | 박성진 | 서울 노원구 마선거구
  { id: 41, voteRate: 4.49, totalVotes: 1645, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":5.36,"votes":{"absentee":{"rate":5.36,"count":219}}},
{"name":"상계2동","rate":4.66,"votes":{"early":{"rate":4.34,"count":145},"polling":{"rate":4.84,"count":288}}},
{"name":"상계3·4동","rate":4.14,"votes":{"early":{"rate":3.01,"count":81},"polling":{"rate":4.46,"count":426}}},
{"name":"상계5동","rate":4.44,"votes":{"early":{"rate":3.42,"count":115},"polling":{"rate":4.89,"count":369}}}] },

  // [ 42] 기초의원   | 최제일 | 서울 광진구 나선거구
  { id: 42, voteRate: 3.93, totalVotes: 1896, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.21,"votes":{"absentee":{"rate":4.21,"count":226}}},
{"name":"능동","rate":2.77,"votes":{"early":{"rate":2.74,"count":49},"polling":{"rate":2.78,"count":105}}},
{"name":"구의제2동","rate":3.12,"votes":{"early":{"rate":2.58,"count":93},"polling":{"rate":3.34,"count":289}}},
{"name":"광장동","rate":5.34,"votes":{"early":{"rate":4.65,"count":199},"polling":{"rate":5.59,"count":668}}},
{"name":"군자동","rate":2.98,"votes":{"early":{"rate":2.52,"count":65},"polling":{"rate":3.18,"count":192}}}] },

  // [ 43] 기초의원   | 김주연 | 서울 광진구 다선거구
  { id: 43, voteRate: 2.95, totalVotes: 1615, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":3.84,"votes":{"absentee":{"rate":3.84,"count":222}}},
{"name":"구의제1동","rate":3.48,"votes":{"early":{"rate":2.81,"count":108},"polling":{"rate":3.83,"count":283}}},
{"name":"구의제3동","rate":2.77,"votes":{"early":{"rate":3.05,"count":144},"polling":{"rate":2.64,"count":266}}},
{"name":"자양제1동","rate":2.63,"votes":{"early":{"rate":2.19,"count":95},"polling":{"rate":2.93,"count":193}}},
{"name":"자양제2동","rate":2.51,"votes":{"early":{"rate":2.18,"count":64},"polling":{"rate":2.61,"count":233}}}] },

  // [ 44] 기초의원   | 이진현 | 서울 광진구 라선거구
  { id: 44, voteRate: 4.21, totalVotes: 1586, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":5.06,"votes":{"absentee":{"rate":5.06,"count":193}}},
{"name":"자양제3동","rate":3.89,"votes":{"early":{"rate":3.29,"count":154},"polling":{"rate":4.19,"count":390}}},
{"name":"자양제4동","rate":3.24,"votes":{"early":{"rate":3.25,"count":112},"polling":{"rate":3.23,"count":218}}},
{"name":"화양동","rate":5.39,"votes":{"early":{"rate":5.5,"count":145},"polling":{"rate":5.35,"count":374}}}] },

  // [ 45] 기초의원   | 박범근 | 서울 관악구 라선거구
  { id: 45, voteRate: 3.57, totalVotes: 1329, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.52,"votes":{"absentee":{"rate":4.52,"count":180}}},
{"name":"신사동","rate":3.42,"votes":{"early":{"rate":3.52,"count":135},"polling":{"rate":3.37,"count":215}}},
{"name":"조원동","rate":4.17,"votes":{"early":{"rate":3.47,"count":109},"polling":{"rate":4.53,"count":280}}},
{"name":"미성동","rate":3,"votes":{"early":{"rate":2.78,"count":113},"polling":{"rate":3.09,"count":294}}}] },

  // [ 46] 기초의원   | 민영진 | 서울 관악구 마선거구
  { id: 46, voteRate: 12.11, totalVotes: 2496, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":7.86,"votes":{"absentee":{"rate":7.86,"count":196}}},
{"name":"난곡동","rate":13.06,"votes":{"early":{"rate":12.92,"count":444},"polling":{"rate":13.13,"count":973}}},
{"name":"난향동","rate":12.18,"votes":{"early":{"rate":10.48,"count":265},"polling":{"rate":13.09,"count":616}}}] },

  // [ 47] 기초의원   | 구자민 | 서울 관악구 나선거구
  { id: 47, voteRate: 6.40, totalVotes: 3153, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":6.8,"votes":{"absentee":{"rate":6.8,"count":375}}},
{"name":"행운동","rate":5.59,"votes":{"early":{"rate":4.73,"count":171},"polling":{"rate":5.91,"count":579}}},
{"name":"낙성대동","rate":8.63,"votes":{"early":{"rate":7.21,"count":167},"polling":{"rate":9.2,"count":530}}},
{"name":"인헌동","rate":6.57,"votes":{"early":{"rate":5.1,"count":275},"polling":{"rate":7.53,"count":613}}},
{"name":"남현동","rate":5.08,"votes":{"early":{"rate":3.94,"count":116},"polling":{"rate":5.67,"count":325}}}] },

  // [ 48] 기초의원   | 구가환 | 서울 관악구 다선거구
  { id: 48, voteRate: 4.89, totalVotes: 2551, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":5.34,"votes":{"absentee":{"rate":5.34,"count":348}}},
{"name":"성현동","rate":4.46,"votes":{"early":{"rate":4.1,"count":153},"polling":{"rate":4.59,"count":495}}},
{"name":"중앙동","rate":5.3,"votes":{"early":{"rate":4.82,"count":132},"polling":{"rate":5.59,"count":248}}},
{"name":"청림동","rate":5.18,"votes":{"early":{"rate":4.79,"count":112},"polling":{"rate":5.35,"count":284}}},
{"name":"청룡동","rate":4.8,"votes":{"early":{"rate":3.18,"count":134},"polling":{"rate":5.37,"count":642}}}] },

  // [ 49] 기초의원   | 원동철 | 서울 관악구 사선거구
  { id: 49, voteRate: 3.90, totalVotes: 935, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.81,"votes":{"absentee":{"rate":4.81,"count":136}}},
{"name":"삼성동","rate":1.9,"votes":{"early":{"rate":1.99,"count":68},"polling":{"rate":1.86,"count":128}}},
{"name":"대학동","rate":5.57,"votes":{"early":{"rate":5.24,"count":197},"polling":{"rate":5.75,"count":403}}}] },

  // [ 50] 기초의원   | 장성혁 | 서울 송파구 가선거구
  { id: 50, voteRate: 5.02, totalVotes: 2297, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":6.33,"votes":{"absentee":{"rate":6.33,"count":235}}},
{"name":"풍납1동","rate":4.03,"votes":{"early":{"rate":3.25,"count":76},"polling":{"rate":4.57,"count":153}}},
{"name":"풍납2동","rate":4.19,"votes":{"early":{"rate":3.97,"count":165},"polling":{"rate":4.32,"count":317}}},
{"name":"잠실4동","rate":5.68,"votes":{"early":{"rate":5.98,"count":238},"polling":{"rate":5.58,"count":680}}},
{"name":"잠실6동","rate":5,"votes":{"early":{"rate":5.66,"count":160},"polling":{"rate":4.67,"count":268}}}] },

  // [ 51] 기초의원   | 김영민 | 서울 강동구 사선거구
  { id: 51, voteRate: 4.72, totalVotes: 2772, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":5.76,"votes":{"absentee":{"rate":5.76,"count":373}}},
{"name":"길동","rate":3.71,"votes":{"early":{"rate":3.46,"count":203},"polling":{"rate":3.8,"count":601}}},
{"name":"둔촌제1동","rate":5.43,"votes":{"early":{"rate":5.71,"count":301},"polling":{"rate":5.31,"count":668}}},
{"name":"둔촌제2동","rate":4.95,"votes":{"early":{"rate":4.17,"count":146},"polling":{"rate":5.26,"count":476}}}] },

  // [ 52] 기초의원   | 조연우 | 부산 기장군 다선거구
  { id: 52, voteRate: 1.36, totalVotes: 531, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":2.56,"votes":{"absentee":{"rate":2.56,"count":99}}},
{"name":"장안읍","rate":1.24,"votes":{"early":{"rate":1.69,"count":17},"polling":{"rate":1.09,"count":33}}},
{"name":"정관읍","rate":1.24,"votes":{"early":{"rate":1.05,"count":76},"polling":{"rate":1.29,"count":305}}}] },

  // [ 53] 기초의원   | 박종길 | 대구 달서구 다선거구
  { id: 53, voteRate: 6.38, totalVotes: 2125, result: '후보', quota: 1, districts: [], neighborhoods: [{
    name: '관외사전투표',
    rate: 7.01,
    votes: {
      absentee: { rate: 7.01, count: 181 }
    }
  },
  {
    name: '이곡1동',
    rate: 5.80,
    votes: {
      early: { rate: 7.35, count: 132 },
      polling: { rate: 5.46, count: 447 }
    }
  },
  {
    name: '이곡2동',
    rate: 7.11,
    votes: {
      early: { rate: 8.04, count: 201 },
      polling: { rate: 6.69, count: 372 }
    }
  },
  {
    name: '신당동',
    rate: 6.24,
    votes: {
      early: { rate: 7.10, count: 86 },
      polling: { rate: 6.15, count: 701 }
    }
  }] },

  // [ 54] 기초의원   | 우영훈 | 대구 달성군 가선거구
  { id: 54, voteRate: 3.61, totalVotes: 1094, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '관외사전투표',
    rate: 4.86,
    votes: {
      absentee: { rate: 4.86, count: 130 }
    }
  },
  {
    name: '화원읍',
    rate: 3.68,
    votes: {
      early: { rate: 4.04, count: 178 },
      polling: { rate: 3.59, count: 701 }
    }
  },
  {
    name: '가창면',
    rate: 2.32,
    votes: {
      early: { rate: 3.01, count: 24 },
      polling: { rate: 2.12, count: 58 }
    }
  }] },

  // [ 55] 기초의원   | 우성원 | 대구 달성군 다선거구
  { id: 55, voteRate: 13.59, totalVotes: 4521, result: '후보', quota: 1, districts: [], neighborhoods: [{
    name: '관외사전투표',
    rate: 9.25,
    votes: {
      absentee: { rate: 9.25, count: 244 }
    }
  },
  {
    name: '유가읍',
    rate: 18.43,
    votes: {
      early: { rate: 19.53, count: 970 },
      polling: { rate: 17.84, count: 1664 }
    }
  },
  {
    name: '현풍읍',
    rate: 10.62,
    votes: {
      early: { rate: 10.26, count: 188 },
      polling: { rate: 10.72, count: 737 }
    }
  },
  {
    name: '구지면',
    rate: 9.46,
    votes: {
      early: { rate: 8.52, count: 195 },
      polling: { rate: 9.87, count: 519 }
    }
  }] },

  // [ 56] 기초의원   | 박철현 | 대구 동구 다선거구
  { id: 56, voteRate: 4.11, totalVotes: 1457, result: '후보', quota: 1, districts: [], neighborhoods: [{
    name: '관외사전투표',
    rate: 4.84,
    votes: {
      absentee: { rate: 4.84, count: 165 }
    }
  },
  {
    name: '신천1·2동',
    rate: 2.87,
    votes: {
      early: { rate: 2.67, count: 36 },
      polling: { rate: 2.93, count: 141 }
    }
  },
  {
    name: '신천3동',
    rate: 4.35,
    votes: {
      early: { rate: 4.77, count: 88 },
      polling: { rate: 4.21, count: 227 }
    }
  },
  {
    name: '신천4동',
    rate: 4.23,
    votes: {
      early: { rate: 5.92, count: 84 },
      polling: { rate: 3.67, count: 157 }
    }
  },
  {
    name: '효목1동',
    rate: 3.06,
    votes: {
      early: { rate: 2.99, count: 25 },
      polling: { rate: 3.07, count: 146 }
    }
  },
  {
    name: '효목2동',
    rate: 5.26,
    votes: {
      early: { rate: 5.01, count: 84 },
      polling: { rate: 5.34, count: 297 }
    }
  }] },

  // [ 57] 기초의원   | 오태훈 | 대구 수성구 라선거구
  { id: 57, voteRate: 9.55, totalVotes: 4655, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '관외사전투표',
    rate: 9.29,
    votes: {
      absentee: { rate: 9.29, count: 418 }
    }
  },
  {
    name: '고산1동',
    rate: 9.87,
    votes: {
      early: { rate: 8.52, count: 379 },
      polling: { rate: 10.40, count: 1185 }
    }
  },
  {
    name: '고산2동',
    rate: 10.43,
    votes: {
      early: { rate: 8.94, count: 291 },
      polling: { rate: 10.92, count: 1080 }
    }
  },
  {
    name: '고산3동',
    rate: 8.55,
    votes: {
      early: { rate: 7.93, count: 310 },
      polling: { rate: 8.77, count: 983 }
    }
  }] },

  // [ 58] 기초의원   | 최윤석 | 대구 수성구 마선거구
  { id: 58, voteRate: 4.19, totalVotes: 1824, result: '후보', quota: 1, districts: [], neighborhoods: [{
    name: '관외사전투표',
    rate: 5.78,
    votes: {
      absentee: { rate: 5.78, count: 222 }
    }
  },
  {
    name: '수성1가동',
    rate: 3.20,
    votes: {
      early: { rate: 3.60, count: 77 },
      polling: { rate: 3.06, count: 193 }
    }
  },
  {
    name: '수성2·3가동',
    rate: 6.61,
    votes: {
      early: { rate: 7.28, count: 95 },
      polling: { rate: 6.36, count: 224 }
    }
  },
  {
    name: '수성4가동',
    rate: 4.72,
    votes: {
      early: { rate: 5.24, count: 99 },
      polling: { rate: 4.52, count: 219 }
    }
  },
  {
    name: '중동',
    rate: 3.77,
    votes: {
      early: { rate: 3.59, count: 46 },
      polling: { rate: 3.82, count: 202 }
    }
  },
  {
    name: '상동',
    rate: 3.04,
    votes: {
      early: { rate: 2.83, count: 29 },
      polling: { rate: 3.08, count: 171 }
    }
  },
  {
    name: '두산동',
    rate: 3.78,
    votes: {
      early: { rate: 4.19, count: 50 },
      polling: { rate: 3.68, count: 192 }
    }
  }] },

  // [ 59] 기초의원   | 성진영 | 대구 중구 가선거구
  { id: 59, voteRate: 4.07, totalVotes: 908, result: '후보', quota: 1, districts: [], neighborhoods: [{
    name: '관외사전투표',
    rate: 4.55,
    votes: {
      absentee: { rate: 4.55, count: 109 }
    }
  },
  {
    name: '동인동',
    rate: 4.11,
    votes: {
      early: { rate: 5.29, count: 55 },
      polling: { rate: 3.81, count: 154 }
    }
  },
  {
    name: '삼덕동',
    rate: 4.88,
    votes: {
      early: { rate: 6.15, count: 50 },
      polling: { rate: 4.45, count: 106 }
    }
  },
  {
    name: '성내1동',
    rate: 3.19,
    votes: {
      early: { rate: 2.72, count: 14 },
      polling: { rate: 3.34, count: 55 }
    }
  },
  {
    name: '남산1동',
    rate: 4.02,
    votes: {
      early: { rate: 6.18, count: 29 },
      polling: { rate: 3.45, count: 62 }
    }
  },
  {
    name: '대봉1동',
    rate: 3.42,
    votes: {
      early: { rate: 3.71, count: 32 },
      polling: { rate: 3.34, count: 98 }
    }
  },
  {
    name: '대봉2동',
    rate: 4.22,
    votes: {
      early: { rate: 4.51, count: 46 },
      polling: { rate: 4.09, count: 96 }
    }
  }] },

  // [ 60] 기초의원   | 강신학 | 인천 연수구 마선거구
  { id: 60, voteRate: 3.82, totalVotes: 986, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.62,"votes":{"absentee":{"rate":4.62,"count":152}}},
{"name":"송도4동","rate":3.72,"votes":{"early":{"rate":3.61,"count":179},"polling":{"rate":3.75,"count":655}}}] },

  // [ 61] 기초의원   | 이종호 | 인천 제물포구 가선거구
  { id: 61, voteRate: 10.55, totalVotes: 2163, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":7.32,"votes":{"absentee":{"rate":7.32,"count":132}}},
{"name":"신포동","rate":9.39,"votes":{"early":{"rate":9.62,"count":79},"polling":{"rate":9.26,"count":133}}},
{"name":"연안동","rate":7.56,"votes":{"early":{"rate":7.68,"count":78},"polling":{"rate":7.47,"count":96}}},
{"name":"신흥동","rate":11.42,"votes":{"early":{"rate":9.91,"count":160},"polling":{"rate":12,"count":502}}},
{"name":"도원동","rate":19.67,"votes":{"early":{"rate":16.88,"count":145},"polling":{"rate":21.89,"count":236}}},
{"name":"율목동","rate":10.8,"votes":{"early":{"rate":9.81,"count":41},"polling":{"rate":11.28,"count":98}}},
{"name":"동인천동","rate":9.48,"votes":{"early":{"rate":7.75,"count":63},"polling":{"rate":10.43,"count":154}}},
{"name":"개항동","rate":8.7,"votes":{"early":{"rate":8.78,"count":69},"polling":{"rate":8.67,"count":171}}}] },

  // [ 62] 기초의원   | 이성실 | 인천 연수구 라선거구
  { id: 62, voteRate: 6.77, totalVotes: 2936, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":7.6,"votes":{"absentee":{"rate":7.6,"count":346}}},
{"name":"송도1동","rate":5.99,"votes":{"early":{"rate":5.83,"count":262},"polling":{"rate":6.05,"count":766}}},
{"name":"송도3동","rate":7.2,"votes":{"early":{"rate":6.73,"count":388},"polling":{"rate":7.38,"count":1167}}}] },

  // [ 63] 기초의원   | 강민제 | 인천 남동구 가선거구
  { id: 63, voteRate: 1.87, totalVotes: 1157, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":2.29,"votes":{"absentee":{"rate":2.29,"count":175}}},
{"name":"구월1동","rate":1.72,"votes":{"early":{"rate":1.14,"count":53},"polling":{"rate":2.01,"count":184}}},
{"name":"구월3동","rate":2.36,"votes":{"early":{"rate":1.56,"count":34},"polling":{"rate":2.6,"count":186}}},
{"name":"구월4동","rate":1,"votes":{"early":{"rate":0.88,"count":13},"polling":{"rate":1.05,"count":36}}},
{"name":"간석1동","rate":2,"votes":{"early":{"rate":2.36,"count":39},"polling":{"rate":1.9,"count":116}}},
{"name":"간석4동","rate":1.88,"votes":{"early":{"rate":1.36,"count":31},"polling":{"rate":2.02,"count":166}}},
{"name":"남촌도림동","rate":1.55,"votes":{"early":{"rate":1.58,"count":30},"polling":{"rate":1.54,"count":91}}}] },

  // [ 64] 기초의원   | 하용준 | 대전 동구 나선거구
  { id: 64, voteRate: 2.37, totalVotes: 772, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":3.13,"votes":{"absentee":{"rate":3.13,"count":97}}},
{"name":"판암1동","rate":2.16,"votes":{"early":{"rate":1.83,"count":35},"polling":{"rate":2.34,"count":83}}},
{"name":"판암2동","rate":1.83,"votes":{"early":{"rate":1.55,"count":24},"polling":{"rate":2.02,"count":46}}},
{"name":"용운동","rate":2.34,"votes":{"early":{"rate":1.86,"count":49},"polling":{"rate":2.54,"count":159}}},
{"name":"대동","rate":2.29,"votes":{"early":{"rate":2.61,"count":62},"polling":{"rate":2.07,"count":73}}},
{"name":"자양동","rate":3,"votes":{"early":{"rate":3.32,"count":47},"polling":{"rate":2.83,"count":80}}},
{"name":"대청동","rate":1.43,"votes":{"early":{"rate":2.12,"count":5},"polling":{"rate":1.21,"count":9}}}] },

  // [ 65] 기초의원   | 박현겸 | 대전 동구 가선거구
  { id: 65, voteRate: 4.04, totalVotes: 1826, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.68,"votes":{"absentee":{"rate":4.68,"count":289}}},
{"name":"중앙동","rate":2.25,"votes":{"early":{"rate":3.6,"count":21},"polling":{"rate":1.4,"count":13}}},
{"name":"신인동","rate":4.38,"votes":{"early":{"rate":4.53,"count":54},"polling":{"rate":4.34,"count":214}}},
{"name":"효동","rate":4.58,"votes":{"early":{"rate":4.85,"count":192},"polling":{"rate":4.45,"count":367}}},
{"name":"홍도동","rate":3.22,"votes":{"early":{"rate":2.64,"count":37},"polling":{"rate":3.48,"count":106}}},
{"name":"삼성동","rate":3.71,"votes":{"early":{"rate":3.09,"count":47},"polling":{"rate":3.94,"count":164}}},
{"name":"산내동","rate":3.54,"votes":{"early":{"rate":3.24,"count":91},"polling":{"rate":3.67,"count":225}}}] },

  // [ 66] 기초의원   | 조동운 | 대전 서구 다선거구
  { id: 66, voteRate: 2.77, totalVotes: 1436, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.34,"votes":{"absentee":{"rate":4.34,"count":226}}},
{"name":"가수원동","rate":2.15,"votes":{"early":{"rate":2.37,"count":48},"polling":{"rate":1.99,"count":57}}},
{"name":"도안동","rate":2.79,"votes":{"early":{"rate":2.68,"count":82},"polling":{"rate":2.82,"count":300}}},
{"name":"관저1동","rate":3.49,"votes":{"early":{"rate":3.35,"count":88},"polling":{"rate":3.58,"count":146}}},
{"name":"관저2동","rate":2.32,"votes":{"early":{"rate":2.09,"count":130},"polling":{"rate":2.43,"count":323}}},
{"name":"기성동","rate":1.86,"votes":{"early":{"rate":1.87,"count":13},"polling":{"rate":1.85,"count":18}}},] },

  // [ 67] 기초의원   | 김영욱 | 대전 서구 가선거구
  { id: 67, voteRate: 2.42, totalVotes: 843, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.15,"votes":{"absentee":{"rate":4.15,"count":147}}},
{"name":"복수동","rate":2.44,"votes":{"early":{"rate":2.37,"count":69},"polling":{"rate":2.48,"count":142}}},
{"name":"도마1동","rate":2.37,"votes":{"early":{"rate":2.59,"count":58},"polling":{"rate":2.28,"count":124}}},
{"name":"도마2동","rate":2.27,"votes":{"early":{"rate":2.41,"count":43},"polling":{"rate":2.23,"count":138}}},
{"name":"정림동","rate":1.73,"votes":{"early":{"rate":1.61,"count":39},"polling":{"rate":1.8,"count":81}}},] },

  // [ 68] 기초의원   | 윤서진 | 대전 유성구 나선거구
  { id: 68, voteRate: 9.18, totalVotes: 3979, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '관외사전투표',
    rate: 9.74,
    votes: {
      absentee: { rate: 9.74, count: 547 }
    }
  },
  {
    name: '온천1동',
    rate: 6.60,
    votes: {
      early: { rate: 5.94, count: 210 },
      polling: { rate: 6.92, count: 507 }
    }
  },
  {
    name: '온천2동',
    rate: 11.61,
    votes: {
      early: { rate: 12.79, count: 435 },
      polling: { rate: 11.32, count: 1579 }
    }
  },
  {
    name: '노은1동',
    rate: 7.41,
    votes: {
      early: { rate: 7.70, count: 274 },
      polling: { rate: 7.24, count: 424 }
    }
  }] },

  // [ 69] 기초의원   | 박진우 | 광주 동구 가선거구
  { id: 69, voteRate: 3.55, totalVotes: 852, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 3.76, votes: { absentee: { rate: 3.76, count: 148 } } },
{ name: '충장동', rate: 4.81, votes: { early: { rate: 2.81, count: 24 }, polling: { rate: 6.48, count: 66 } } },
{ name: '동명동', rate: 5.23, votes: { early: { rate: 2.60, count: 17 }, polling: { rate: 8.09, count: 49 } } },
{ name: '계림1동', rate: 3.47, votes: { early: { rate: 2.01, count: 30 }, polling: { rate: 4.39, count: 104 } } },
{ name: '계림2동', rate: 3.40, votes: { early: { rate: 1.59, count: 42 }, polling: { rate: 4.83, count: 159 } } },
{ name: '산수1동', rate: 3.00, votes: { early: { rate: 1.80, count: 26 }, polling: { rate: 4.17, count: 63 } } },
{ name: '산수2동', rate: 2.96, votes: { early: { rate: 1.92, count: 34 }, polling: { rate: 3.74, count: 87 } } },] },

  // [ 70] 기초의원   | 이재형 | 경기 수원시 자선거구
  { id: 70, voteRate: 6.02, totalVotes: 2308, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":7.38,"votes":{"absentee":{"rate":7.38,"count":385}}},
{"name":"원천동","rate":6.79,"votes":{"early":{"rate":5.35,"count":181},"polling":{"rate":7.12,"count":1031}}},
{"name":"영통1동","rate":4.64,"votes":{"early":{"rate":4.04,"count":179},"polling":{"rate":4.88,"count":526}}}] },

  // [ 71] 기초의원   | 황승빈 | 경기 수원시 파선거구
  { id: 71, voteRate: 5.96, totalVotes: 3681, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":7.12,"votes":{"absentee":{"rate":7.12,"count":421}}},
{"name":"영통2동","rate":6.9,"votes":{"early":{"rate":7.26,"count":309},"polling":{"rate":6.71,"count":556}}},
{"name":"영통3동","rate":5.42,"votes":{"early":{"rate":5.59,"count":202},"polling":{"rate":5.36,"count":568}}},
{"name":"망포1동","rate":5.54,"votes":{"early":{"rate":5.65,"count":187},"polling":{"rate":5.5,"count":498}}},
{"name":"망포2동","rate":5.63,"votes":{"early":{"rate":4.92,"count":248},"polling":{"rate":5.94,"count":679}}},] },

  // [ 72] 기초의원   | 노만래 | 경기 수원시 다선거구
  { id: 72, voteRate: 2.69, totalVotes: 1512, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":3.74,"votes":{"absentee":{"rate":3.74,"count":232}}},
{"name":"정자1동","rate":2.45,"votes":{"early":{"rate":2.07,"count":91},"polling":{"rate":2.6,"count":290}}},
{"name":"정자2동","rate":2.32,"votes":{"early":{"rate":2.3,"count":68},"polling":{"rate":2.33,"count":290}}},
{"name":"정자3동","rate":2.86,"votes":{"early":{"rate":2.66,"count":143},"polling":{"rate":2.94,"count":398}}}] },

  // [ 73] 기초의원   | 민경록 | 경기 수원시 바선거구
  { id: 73, voteRate: 6.67, totalVotes: 3494, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":7.31,"votes":{"absentee":{"rate":7.31,"count":396}}},
{"name":"매교동","rate":5.56,"votes":{"early":{"rate":4.91,"count":97},"polling":{"rate":5.73,"count":419}}},
{"name":"매산동","rate":4.52,"votes":{"early":{"rate":4.46,"count":50},"polling":{"rate":4.55,"count":135}}},
{"name":"고등동","rate":6.76,"votes":{"early":{"rate":6.15,"count":198},"polling":{"rate":7.13,"count":380}}},
{"name":"화서1동","rate":6.23,"votes":{"early":{"rate":6.82,"count":171},"polling":{"rate":6,"count":373}}},
{"name":"화서2동","rate":8.96,"votes":{"early":{"rate":8.34,"count":286},"polling":{"rate":9.22,"count":758}}},
{"name":"세류1동","rate":5.03,"votes":{"early":{"rate":4.63,"count":72},"polling":{"rate":5.23,"count":157}}}] },

  // [ 74] 기초의원   | 김동광 | 경기 수원시 사선거구
  { id: 74, voteRate: 4.36, totalVotes: 1978, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":5.61,"votes":{"absentee":{"rate":5.61,"count":312}}},
{"name":"행궁동","rate":3.16,"votes":{"early":{"rate":2.55,"count":26},"polling":{"rate":3.41,"count":85}}},
{"name":"지동","rate":2.77,"votes":{"early":{"rate":2.81,"count":45},"polling":{"rate":2.75,"count":90}}},
{"name":"우만1동","rate":3.51,"votes":{"early":{"rate":3.38,"count":67},"polling":{"rate":3.55,"count":193}}},
{"name":"우만2동","rate":5.3,"votes":{"early":{"rate":5.36,"count":139},"polling":{"rate":5.27,"count":262}}},
{"name":"인계동","rate":4.64,"votes":{"early":{"rate":4.33,"count":149},"polling":{"rate":4.72,"count":607}}}] },

  // [ 75] 기초의원   | 우태주 | 경기 용인시 카선거구
  { id: 75, voteRate: 3.15, totalVotes: 2311, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":3.95,"votes":{"absentee":{"rate":3.95,"count":290}}},
{"name":"보정동","rate":3.15,"votes":{"early":{"rate":2.77,"count":159},"polling":{"rate":3.34,"count":394}}},
{"name":"죽전1동","rate":2.98,"votes":{"early":{"rate":2.79,"count":144},"polling":{"rate":3.08,"count":294}}},
{"name":"죽전2동","rate":3.44,"votes":{"early":{"rate":3.17,"count":50},"polling":{"rate":3.51,"count":207}}},
{"name":"죽전3동","rate":3.06,"votes":{"early":{"rate":2.87,"count":72},"polling":{"rate":3.12,"count":256}}},
{"name":"상현2동","rate":2.85,"votes":{"early":{"rate":2.62,"count":125},"polling":{"rate":2.96,"count":313}}}] },

  // [ 76] 기초의원   | 이승도 | 경기 용인시 사선거구
  { id: 76, voteRate: 2.44, totalVotes: 1258, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":3.49,"votes":{"absentee":{"rate":3.49,"count":171}}},
{"name":"상현1동","rate":2.17,"votes":{"early":{"rate":1.77,"count":43},"polling":{"rate":2.31,"count":156}}},
{"name":"상현3동","rate":2.91,"votes":{"early":{"rate":2.82,"count":110},"polling":{"rate":2.95,"count":257}}},
{"name":"성복동","rate":2.1,"votes":{"early":{"rate":1.97,"count":104},"polling":{"rate":2.13,"count":415}}}] },

  // [ 77] 기초의원   | 정민재 | 경기 고양시 아선거구
  { id: 77, voteRate: 2.95, totalVotes: 1505, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":3.75,"votes":{"absentee":{"rate":3.75,"count":305}}},
{"name":"정발산동","rate":2.56,"votes":{"early":{"rate":2.34,"count":58},"polling":{"rate":2.64,"count":175}}},
{"name":"풍산동","rate":2.48,"votes":{"early":{"rate":1.72,"count":70},"polling":{"rate":2.73,"count":350}}},
{"name":"장항1동","rate":3.31,"votes":{"early":{"rate":2.71,"count":26},"polling":{"rate":3.39,"count":219}}},
{"name":"장항2동","rate":3.2,"votes":{"early":{"rate":2.88,"count":70},"polling":{"rate":3.32,"count":225}}},] },

  // [ 78] 기초의원   | 김성욱 | 경기 화성시 다선거구
  { id: 78, voteRate: 9.88, totalVotes: 6055, result: '후보', quota: 1, districts: [], neighborhoods: [{
    name: '관외사전투표',
    rate: 11.20,
    votes: {
      absentee: { rate: 11.20, count: 718 }
    }
  },

  {
    name: '동탄1동',
    rate: 10.82,
    votes: {
      early: { rate: 9.54, count: 526 },
      polling: { rate: 11.31, count: 1711 }
    }
  },

  {
    name: '동탄2동',
    rate: 6.95,
    votes: {
      early: { rate: 6.25, count: 319 },
      polling: { rate: 7.02, count: 690 }
    }
  },

  {
    name: '동탄5동',
    rate: 11.00,
    votes: {
      early: { rate: 9.46, count: 454 },
      polling: { rate: 11.41, count: 1611 }
    }
  }] },

  // [ 79] 기초의원   | 김기현 | 경기 화성시 라선거구
  { id: 79, voteRate: 12.83, totalVotes: 7880, result: '당선', quota: 1, districts: [], neighborhoods: [  {
    name: '관외사전투표',
    rate: 11.34,
    votes: {
      absentee: { rate: 11.34, count: 720 }
    }
  },

  {
    name: '동탄4동',
    rate: 12.86,
    votes: {
      early: { rate: 9.49, count: 566 },
      polling: { rate: 13.71, count: 2276 }
    }
  },

  {
    name: '동탄6동',
    rate: 12.88,
    votes: {
      early: { rate: 9.85, count: 428 },
      polling: { rate: 13.91, count: 1783 }
    }
  },

  {
    name: '동탄8동',
    rate: 13.62,
    votes: {
      early: { rate: 10.58, count: 467 },
      polling: { rate: 14.84, count: 1635 }
    }
  }] },

  // [ 80] 기초의원   | 이우주 | 경기 화성시 마선거구
  { id: 80, voteRate: 17.10, totalVotes: 8838, result: '후보', quota: 1, districts: [], neighborhoods: [ {
    name: '관외사전투표',
    rate: 13.93,
    votes: {
      absentee: { rate: 13.93, count: 799 }
    }
  },

  {
    name: '동탄7동',
    rate: 15.65,
    votes: {
      early: { rate: 11.76, count: 673 },
      polling: { rate: 16.54, count: 2693 }
    }
  },

  {
    name: '동탄9동',
    rate: 17.28,
    votes: {
      early: { rate: 15.58, count: 964 },
      polling: { rate: 20.62, count: 3702 }
    }
  }] },

  // [ 81] 기초의원   | 이세원 | 경기 화성시 아선거구
  { id: 81, voteRate: 6.82, totalVotes: 2447, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '관외사전투표',
    rate: 8.15,
    votes: {
      absentee: { rate: 8.15, count: 387 }
    }
  },

  {
    name: '반월동',
    rate: 5.39,
    votes: {
      early: { rate: 4.41, count: 149 },
      polling: { rate: 5.69, count: 641 }
    }
  },

  {
    name: '동탄3동',
    rate: 7.63,
    votes: {
      early: { rate: 6.85, count: 339 },
      polling: { rate: 7.82, count: 918 }
    }
  }] },

  // [ 82] 기초의원   | 오태석 | 경기 화성시 바선거구
  { id: 82, voteRate: 4.01, totalVotes: 2180, result: '후보', quota: 1, districts: [], neighborhoods: [ {
    name: '관외사전투표',
    rate: 4.65,
    votes: {
      absentee: { rate: 4.65, count: 243 }
    }
  },

  {
    name: '봉담읍',
    rate: 4.02,
    votes: {
      early: { rate: 3.27, count: 303 },
      polling: { rate: 4.23, count: 1335 }
    }
  },

  {
    name: '기배동',
    rate: 3.61,
    votes: {
      early: { rate: 3.33, count: 136 },
      polling: { rate: 3.88, count: 157 }
    }
  }] },

  // [ 83] 기초의원   | 홍승우 | 경기 성남시 차선거구
  { id: 83, voteRate: 3.32, totalVotes: 1772, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '분당동',
    rate: 3.10,
    votes: {
      early: { rate: 3.24, count: 73 },
      polling: { rate: 3.07, count: 268 }
    }
  },
  {
    name: '수내3동',
    rate: 3.28,
    votes: {
      early: { rate: 2.71, count: 55 },
      polling: { rate: 3.56, count: 148 }
    }
  },
  {
    name: '정자2동',
    rate: 3.36,
    votes: {
      early: { rate: 3.80, count: 63 },
      polling: { rate: 3.21, count: 155 }
    }
  },
  {
    name: '정자3동',
    rate: 3.24,
    votes: {
      early: { rate: 3.24, count: 75 },
      polling: { rate: 3.24, count: 186 }
    }
  },
  {
    name: '구미동',
    rate: 2.95,
    votes: {
      early: { rate: 2.77, count: 81 },
      polling: { rate: 3.00, count: 323 }
    }
  }] },

  // [ 84] 기초의원   | 오정대 | 경기 성남시 바선거구
  { id: 84, voteRate: 2.94, totalVotes: 1003, result: '후보', quota: 1, districts: [], neighborhoods: [ {"name":"관외사전투표","rate":4.65,"votes":{"absentee":{"rate":4.65,"count":141}}},
{"name":"이매1동","rate":2.86,"votes":{"early":{"rate":2.89,"count":77},"polling":{"rate":2.86,"count":284}}},
{"name":"이매2동","rate":2.39,"votes":{"early":{"rate":2.39,"count":50},"polling":{"rate":2.39,"count":115}}},
{"name":"삼평동","rate":2.91,"votes":{"early":{"rate":2.55,"count":80},"polling":{"rate":3.05,"count":253}}},
] },

  // [ 85] 기초의원   | 김병진 | 경기 성남시 마선거구
  { id: 85, voteRate: 3.48, totalVotes: 1585, result: '후보', quota: 1, districts: [], neighborhoods: [ {
    name: '관외사전투표',
    rate: 4.60,
    votes: {
      absentee: { rate: 4.60, count: 278 }
    }
  },
  {
    name: '중앙동',
    rate: 3.99,
    votes: {
      early: { rate: 3.26, count: 73 },
      polling: { rate: 4.29, count: 227 }
    }
  },
  {
    name: '금광1동',
    rate: 4.34,
    votes: {
      early: { rate: 3.64, count: 115 },
      polling: { rate: 4.71, count: 286 }
    }
  },
  {
    name: '금광2동',
    rate: 3.11,
    votes: {
      early: { rate: 2.08, count: 71 },
      polling: { rate: 3.65, count: 234 }
    }
  },
  {
    name: '은행1동',
    rate: 3.20,
    votes: {
      early: { rate: 2.12, count: 35 },
      polling: { rate: 3.89, count: 101 }
    }
  },
  {
    name: '은행2동',
    rate: 1.91,
    votes: {
      early: { rate: 1.53, count: 46 },
      polling: { rate: 2.11, count: 116 }
    }
  }] },

  // [ 86] 기초의원   | 정유경 | 경기 부천시 사선거구
  { id: 86, voteRate: 3.66, totalVotes: 1763, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.55,"votes":{"absentee":{"rate":4.55,"count":209}}},
{"name":"범박동","rate":3.82,"votes":{"early":{"rate":3.62,"count":153},"polling":{"rate":3.93,"count":318}}},
{"name":"옥길동","rate":3.67,"votes":{"early":{"rate":3.4,"count":139},"polling":{"rate":3.79,"count":358}}},
{"name":"괴안동","rate":3.43,"votes":{"early":{"rate":3.68,"count":101},"polling":{"rate":3.28,"count":156}}},
{"name":"역곡3동","rate":3.24,"votes":{"early":{"rate":2.23,"count":75},"polling":{"rate":3.75,"count":250}}}] },

  // [ 87] 기초의원   | 김태수 | 경기 부천시 마선거구
  { id: 87, voteRate: 6.66, totalVotes: 4218, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":5.97,"votes":{"absentee":{"rate":5.97,"count":391}}},
{"name":"약대동","rate":6.73,"votes":{"early":{"rate":6.17,"count":165},"polling":{"rate":7.03,"count":342}}},
{"name":"중1동","rate":6.63,"votes":{"early":{"rate":5.09,"count":239},"polling":{"rate":7.23,"count":874}}},
{"name":"중2동","rate":5.76,"votes":{"early":{"rate":4.56,"count":71},"polling":{"rate":5.96,"count":560}}},
{"name":"중3동","rate":7.07,"votes":{"early":{"rate":5.46,"count":164},"polling":{"rate":7.73,"count":567}}},
{"name":"중4동","rate":7.76,"votes":{"early":{"rate":6.78,"count":302},"polling":{"rate":8.59,"count":448}}}] },

  // [ 88] 기초의원   | 박윤옥 | 경기 남양주시 가선거구
  { id: 88, voteRate: 4.03, totalVotes: 2062, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.57,"votes":{"absentee":{"rate":4.57,"count":232}}},
{"name":"화도읍","rate":3.57,"votes":{"early":{"rate":3.76,"count":364},"polling":{"rate":3.51,"count":1115}}},
{"name":"수동면","rate":7.49,"votes":{"early":{"rate":8.57,"count":174},"polling":{"rate":6.6,"count":162}}}] },

  // [ 89] 기초의원   | 최종열 | 경기 남양주시 사선거구
  { id: 89, voteRate: 2.39, totalVotes: 1517, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":3.31,"votes":{"absentee":{"rate":3.31,"count":184}}},
{"name":"와부읍","rate":3.25,"votes":{"early":{"rate":3.15,"count":214},"polling":{"rate":3.28,"count":700}}},
{"name":"진건읍","rate":1.2,"votes":{"early":{"rate":1.3,"count":33},"polling":{"rate":1.16,"count":70}}},
{"name":"퇴계원읍","rate":1.62,"votes":{"early":{"rate":1.3,"count":47},"polling":{"rate":1.76,"count":148}}},
{"name":"조안면","rate":1.83,"votes":{"early":{"rate":1.51,"count":8},"polling":{"rate":1.99,"count":22}}},
{"name":"금곡동","rate":1.18,"votes":{"early":{"rate":0.76,"count":15},"polling":{"rate":1.33,"count":72}}},] },

  // [ 90] 기초의원   | 김용인 | 경기 남양주시 다선거구
  { id: 90, voteRate: 2.41, totalVotes: 998, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":3.53,"votes":{"absentee":{"rate":3.53,"count":160}}},
{"name":"진접읍","rate":2.27,"votes":{"early":{"rate":2.16,"count":189},"polling":{"rate":2.3,"count":641}}}] },

  // [ 91] 기초의원   | 최진형 | 경기 안산시 가선거구
  { id: 91, voteRate: 3.23, totalVotes: 1786, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.18,"votes":{"absentee":{"rate":4.18,"count":194}}},
{"name":"사동","rate":3.49,"votes":{"early":{"rate":3.84,"count":138},"polling":{"rate":3.35,"count":294}}},
{"name":"사이동","rate":2.81,"votes":{"early":{"rate":2.52,"count":85},"polling":{"rate":2.91,"count":270}}},
{"name":"해양동","rate":3.32,"votes":{"early":{"rate":3.02,"count":116},"polling":{"rate":3.41,"count":461}}},
{"name":"본오3동","rate":2.7,"votes":{"early":{"rate":3,"count":79},"polling":{"rate":2.55,"count":140}}},] },

  // [ 92] 기초의원   | 이재범 | 경기 평택시 라선거구
  { id: 92, voteRate: 4.15, totalVotes: 1596, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.01,"votes":{"absentee":{"rate":4.01,"count":187}}},
{"name":"비전1동","rate":3.59,"votes":{"early":{"rate":3.41,"count":151},"polling":{"rate":3.65,"count":527}}},
{"name":"동삭동","rate":4.89,"votes":{"early":{"rate":4.27,"count":138},"polling":{"rate":5.06,"count":589}}}] },

  // [ 93] 기초의원   | 신찬호 | 경기 안양시 사선거구
  { id: 93, voteRate: 4.21, totalVotes: 1767, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":5.75,"votes":{"absentee":{"rate":5.75,"count":210}}},
{"name":"평촌동","rate":3.95,"votes":{"early":{"rate":4.24,"count":120},"polling":{"rate":3.78,"count":189}}},
{"name":"평안동","rate":3.69,"votes":{"early":{"rate":2.98,"count":103},"polling":{"rate":4.03,"count":295}}},
{"name":"귀인동","rate":3.96,"votes":{"early":{"rate":3.47,"count":72},"polling":{"rate":4.15,"count":216}}},
{"name":"범계동","rate":5.33,"votes":{"early":{"rate":5.12,"count":114},"polling":{"rate":5.43,"count":274}}},
{"name":"갈산동","rate":3.39,"votes":{"early":{"rate":2.98,"count":46},"polling":{"rate":3.57,"count":123}}}] },

  // [ 94] 기초의원   | 이천은 | 경기 안양시 바선거구
  { id: 94, voteRate: 5.04, totalVotes: 2295, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":5.64,"votes":{"absentee":{"rate":5.64,"count":289}}},
{"name":"달안동","rate":5.62,"votes":{"early":{"rate":6.42,"count":104},"polling":{"rate":5.23,"count":173}}},
{"name":"관양동","rate":4.08,"votes":{"early":{"rate":3.73,"count":140},"polling":{"rate":4.2,"count":462}}},
{"name":"인덕원동","rate":4.42,"votes":{"early":{"rate":3.76,"count":90},"polling":{"rate":4.68,"count":280}}},
{"name":"부림동","rate":6.17,"votes":{"early":{"rate":5.01,"count":189},"polling":{"rate":6.69,"count":564}}}] },

  // [ 95] 기초의원   | 박원길 | 경기 안양시 아선거구
  { id: 95, voteRate: 3.99, totalVotes: 1926, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":5.39,"votes":{"absentee":{"rate":5.39,"count":272}}},
{"name":"호계1동","rate":4.56,"votes":{"early":{"rate":4.3,"count":146},"polling":{"rate":4.66,"count":439}}},
{"name":"호계2동","rate":3.64,"votes":{"early":{"rate":3.33,"count":114},"polling":{"rate":3.76,"count":352}}},
{"name":"호계3동","rate":3.06,"votes":{"early":{"rate":2.44,"count":94},"polling":{"rate":3.38,"count":250}}},
{"name":"신촌동","rate":4.06,"votes":{"early":{"rate":4.36,"count":94},"polling":{"rate":3.89,"count":158}}}] },

  // [ 96] 기초의원   | 김주우 | 경기 시흥시 나선거구
  { id: 96, voteRate: 3.96, totalVotes: 1698, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.16,"votes":{"absentee":{"rate":4.16,"count":169}}},
{"name":"대야동","rate":3.84,"votes":{"early":{"rate":3.13,"count":141},"polling":{"rate":4.08,"count":521}}},
{"name":"매화동","rate":2.45,"votes":{"early":{"rate":1.89,"count":31},"polling":{"rate":2.78,"count":76}}},
{"name":"목감동","rate":4.53,"votes":{"early":{"rate":4.01,"count":206},"polling":{"rate":4.77,"count":533}}},
{"name":"과림동","rate":1.78,"votes":{"early":{"rate":1.03,"count":3},"polling":{"rate":2.22,"count":11}}}] },

  // [ 97] 기초의원   | 이봉관 | 경기 시흥시 마선거구
  { id: 97, voteRate: 3.42, totalVotes: 1643, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.59,"votes":{"absentee":{"rate":4.59,"count":172}}},
{"name":"정왕3동","rate":2.84,"votes":{"early":{"rate":2.63,"count":69},"polling":{"rate":2.95,"count":151}}},
{"name":"정왕4동","rate":3.41,"votes":{"early":{"rate":3.06,"count":90},"polling":{"rate":3.61,"count":186}}},
{"name":"거북섬동","rate":3.68,"votes":{"early":{"rate":2.1,"count":26},"polling":{"rate":4.62,"count":96}}},
{"name":"배곧1동","rate":3.18,"votes":{"early":{"rate":2.98,"count":121},"polling":{"rate":3.27,"count":301}}},
{"name":"배곧2동","rate":3.58,"votes":{"early":{"rate":3.1,"count":89},"polling":{"rate":3.73,"count":330}}}] },

  // [ 98] 기초의원   | 양준모 | 경기 파주시 마선거구
  { id: 98, voteRate: 2.83, totalVotes: 1690, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.56,"votes":{"absentee":{"rate":4.56,"count":226}}},
{"name":"조리읍","rate":2.52,"votes":{"early":{"rate":2.47,"count":73},"polling":{"rate":2.54,"count":216}}},
{"name":"파주읍","rate":2.38,"votes":{"early":{"rate":2.34,"count":31},"polling":{"rate":2.4,"count":89}}},
{"name":"광탄면","rate":2.16,"votes":{"early":{"rate":2.09,"count":27},"polling":{"rate":2.19,"count":63}}},
{"name":"월롱면","rate":3.39,"votes":{"early":{"rate":2.56,"count":22},"polling":{"rate":3.74,"count":77}}},
{"name":"금촌1동","rate":2.81,"votes":{"early":{"rate":3.51,"count":87},"polling":{"rate":2.52,"count":147}}},
{"name":"금촌2동","rate":2.91,"votes":{"early":{"rate":2.9,"count":125},"polling":{"rate":2.91,"count":256}}},
{"name":"금촌3동","rate":2.5,"votes":{"early":{"rate":2.12,"count":65},"polling":{"rate":2.69,"count":170}}}] },

  // [ 99] 기초의원   | 심명보 | 경기 김포시 다선거구
  { id: 99, voteRate: 1.71, totalVotes: 963, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":2.6,"votes":{"absentee":{"rate":2.6,"count":132}}},
{"name":"통진읍","rate":1.59,"votes":{"early":{"rate":1.69,"count":67},"polling":{"rate":1.55,"count":141}}},
{"name":"양촌읍","rate":1.49,"votes":{"early":{"rate":1.39,"count":49},"polling":{"rate":1.53,"count":129}}},
{"name":"대곶면","rate":1.49,"votes":{"early":{"rate":2.06,"count":20},"polling":{"rate":1.28,"count":34}}},
{"name":"월곶면","rate":1.45,"votes":{"early":{"rate":1.37,"count":13},"polling":{"rate":1.51,"count":22}}},
{"name":"하성면","rate":3.17,"votes":{"early":{"rate":2.48,"count":30},"polling":{"rate":3.52,"count":82}}},
{"name":"구래동","rate":1.49,"votes":{"early":{"rate":1.41,"count":64},"polling":{"rate":1.51,"count":178}}}] },

  // [100] 기초의원   | 장준휘 | 경기 의정부시 라선거구
  { id: 100, voteRate: 4.52, totalVotes: 2816, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":5.47,"votes":{"absentee":{"rate":5.47,"count":301}}},
{"name":"송산1동","rate":4.19,"votes":{"early":{"rate":4.19,"count":143},"polling":{"rate":4.19,"count":385}}},
{"name":"송산2동","rate":3.8,"votes":{"early":{"rate":3.52,"count":171},"polling":{"rate":3.96,"count":352}}},
{"name":"송산3동","rate":4.25,"votes":{"early":{"rate":3.62,"count":203},"polling":{"rate":4.54,"count":560}}},
{"name":"고산동","rate":5.64,"votes":{"early":{"rate":4.61,"count":160},"polling":{"rate":6.05,"count":532}}}] },

  // [101] 기초의원   | 박현호 | 경기 의왕시 가선거구
  { id: 101, voteRate: 4.61, totalVotes: 1987, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":6.61,"votes":{"absentee":{"rate":6.61,"count":276}}},
{"name":"고천동","rate":6.24,"votes":{"early":{"rate":6.22,"count":192},"polling":{"rate":6.25,"count":374}}},
{"name":"부곡동","rate":4.5,"votes":{"early":{"rate":4.06,"count":186},"polling":{"rate":4.72,"count":440}}},
{"name":"오전동","rate":3.25,"votes":{"early":{"rate":2.88,"count":100},"polling":{"rate":3.36,"count":414}}}] },

  // [102] 기초의원   | 양성혁 | 경기 의왕시 나선거구
  { id: 102, voteRate: 4.87, totalVotes: 2297, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":6.3,"votes":{"absentee":{"rate":6.3,"count":317}}},
{"name":"내손1동","rate":4.41,"votes":{"early":{"rate":3.83,"count":96},"polling":{"rate":4.61,"count":325}}},
{"name":"내손2동","rate":5.74,"votes":{"early":{"rate":5.18,"count":215},"polling":{"rate":5.98,"count":577}}},
{"name":"청계동","rate":4.09,"votes":{"early":{"rate":3.51,"count":145},"polling":{"rate":4.25,"count":616}}}] },

  // [103] 기초의원   | 전상현 | 강원 원주시 나선거구
  { id: 103, voteRate: 2.96, totalVotes: 561, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 3.25, votes: { absentee: { rate: 3.25, count: 85 } } },
{ name: '호저면', rate: 1.98, votes: { early: { rate: 1.11, count: 5 }, polling: { rate: 2.32, count: 27 } } },
{ name: '지정면', rate: 2.86, votes: { early: { rate: 2.55, count: 116 }, polling: { rate: 3.31, count: 275 } } },
{ name: '우산동', rate: 2.90, votes: { early: { rate: 2.88, count: 9 }, polling: { rate: 2.91, count: 44 } } },] },

  // [104] 기초의원   | 최태영 | 강원 춘천시 라선거구
  { id: 104, voteRate: 2.26, totalVotes: 515, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 3.37, votes: { absentee: { rate: 3.37, count: 135 } } },
{ name: '효자2동', rate: 3.60, votes: { early: { rate: 3.61, count: 39 }, polling: { rate: 3.55, count: 130 } } },
{ name: '석사동', rate: 1.48, votes: { early: { rate: 1.35, count: 42 }, polling: { rate: 1.51, count: 165 } } },] },

  // [105] 기초의원   | 이강민 | 충남 천안시 라선거구
  { id: 105, voteRate: 3.24, totalVotes: 708, result: '후보', quota: 1, districts: [], neighborhoods: [ 
{ name: '관외사전투표', rate: 3.32,
  votes: { absentee: { rate: 3.32, count: 131 } }
},
{ name: '불당1동', rate: 2.53,
  votes: {
    early: { rate: 1.89, count: 43 },
    polling: { rate: 2.69, count: 265 }
  }
},
{ name: '불당2동', rate: 1.86,
  votes: {
    early: { rate: 1.90, count: 77 },
    polling: { rate: 1.84, count: 191 }
  }
}] },

  // [106] 기초의원   | 이해성 | 충남 천안시 바선거구
  { id: 106, voteRate: 2.42, totalVotes: 786, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '관외사전투표',
    rate: 3.48,
    votes: {
      absentee: { rate: 3.48, count: 155 }
    }
  },
  {
    name: '성거읍',
    rate: 2.17,
    votes: {
      early: { rate: 2.22, count: 42 },
      polling: { rate: 2.15, count: 119 }
    }
  },
  {
    name: '부성1동',
    rate: 3.48,
    votes: {
      early: { rate: 4.84, count: 195 },
      polling: { rate: 3.15, count: 518 }
    }
  }] },

  // [107] 기초의원   | 손승범 | 충남 천안시 다선거구
  { id: 107, voteRate: 3.55, totalVotes: 887, result: '후보', quota: 1, districts: [], neighborhoods: [ {
    name: '관외사전투표',
    rate: 4.31,
    votes: {
      absentee: { rate: 4.31, count: 125 }
    }
  },
  {
    name: '문성동',
    rate: 4.36,
    votes: {
      early: { rate: 3.96, count: 38 },
      polling: { rate: 4.53, count: 103 }
    }
  },
  {
    name: '봉명동',
    rate: 3.48,
    votes: {
      early: { rate: 3.24, count: 55 },
      polling: { rate: 3.57, count: 166 }
    }
  },
  {
    name: '성정1동',
    rate: 2.41,
    votes: {
      early: { rate: 2.15, count: 26 },
      polling: { rate: 2.48, count: 114 }
    }
  },
  {
    name: '성정2동',
    rate: 3.85,
    votes: {
      early: { rate: 2.72, count: 48 },
      polling: { rate: 4.26, count: 206 }
    }
  }] },

  // [108] 기초의원   | 고재윤 | 충남 당진시 라선거구
  { id: 108, voteRate: 4.59, totalVotes: 1466, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '관외사전투표',
    rate: 5.32,
    votes: {
      absentee: { rate: 5.32, count: 210 }
    }
  },
  {
    name: '당진1동',
    rate: 5.73,
    votes: {
      early: { rate: 3.93, count: 130 },
      polling: { rate: 6.29, count: 664 }
    }
  },
  {
    name: '당진3동',
    rate: 4.15,
    votes: {
      early: { rate: 4.12, count: 146 },
      polling: { rate: 4.18, count: 163 }
    }
  },
  {
    name: '고대면',
    rate: 1.76,
    votes: {
      early: { rate: 2.02, count: 28 },
      polling: { rate: 1.54, count: 26 }
    }
  },
  {
    name: '석문면',
    rate: 2.74,
    votes: {
      early: { rate: 2.70, count: 37 },
      polling: { rate: 2.77, count: 60 }
    }
  }] },

  // [109] 기초의원   | 김관호 | 충남 아산시 라선거구
  { id: 109, voteRate: 2.42, totalVotes: 758, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.08,"votes":{"absentee":{"rate":4.08,"count":182}}},
{"name":"배방읍","rate":2.4,"votes":{"early":{"rate":1.39,"count":13},"polling":{"rate":2.51,"count":224}}},
{"name":"탕정면","rate":1.99,"votes":{"early":{"rate":1.86,"count":69},"polling":{"rate":2.03,"count":268}}}] },

  // [110] 기초단체장  | 조순자 | 경북 구미시장
  { id: 110, voteRate: 2.14, totalVotes: 3868, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 2.78,
  votes: { absentee: { rate: 2.78, count: 565 } }
},

{ name: '선산읍', rate: 2.18,
  votes: {
    early: { rate: 2.76, count: 35 },
    polling: { rate: 1.66, count: 63 }
  }
},

{ name: '고아읍', rate: 2.09,
  votes: {
    early: { rate: 2.81, count: 52 },
    polling: { rate: 1.67, count: 226 }
  }
},

{ name: '산동읍', rate: 1.54,
  votes: {
    early: { rate: 1.67, count: 49 },
    polling: { rate: 1.45, count: 114 }
  }
},

{ name: '무을면', rate: 1.55,
  votes: {
    early: { rate: 0.66, count: 2 },
    polling: { rate: 1.63, count: 14 }
  }
},

{ name: '옥성면', rate: 1.92,
  votes: {
    early: { rate: 1.44, count: 4 },
    polling: { rate: 1.81, count: 14 }
  }
},

{ name: '도개면', rate: 1.74,
  votes: {
    early: { rate: 1.29, count: 4 },
    polling: { rate: 1.92, count: 7 }
  }
},

{ name: '해평면', rate: 1.63,
  votes: {
    early: { rate: 1.51, count: 9 },
    polling: { rate: 1.61, count: 20 }
  }
},

{ name: '장천면', rate: 1.63,
  votes: {
    early: { rate: 1.69, count: 9 },
    polling: { rate: 1.60, count: 10 }
  }
},

{ name: '송정동', rate: 1.89,
  votes: {
    early: { rate: 2.27, count: 51 },
    polling: { rate: 1.74, count: 131 }
  }
},

{ name: '원평동', rate: 2.21,
  votes: {
    early: { rate: 2.28, count: 37 },
    polling: { rate: 2.18, count: 56 }
  }
},

{ name: '지산동', rate: 1.17,
  votes: {
    early: { rate: 1.63, count: 5 },
    polling: { rate: 1.02, count: 7 }
  }
},

{ name: '도량동', rate: 2.06,
  votes: {
    early: { rate: 2.09, count: 43 },
    polling: { rate: 2.04, count: 191 }
  }
},

{ name: '선주원남동', rate: 2.67,
  votes: {
    early: { rate: 2.60, count: 89 },
    polling: { rate: 2.70, count: 224 }
  }
},

{ name: '형곡1동', rate: 2.19,
  votes: {
    early: { rate: 2.37, count: 58 },
    polling: { rate: 2.03, count: 74 }
  }
},

{ name: '형곡2동', rate: 2.13,
  votes: {
    early: { rate: 2.53, count: 40 },
    polling: { rate: 1.99, count: 89 }
  }
},

{ name: '신평1동', rate: 2.02,
  votes: {
    early: { rate: 3.15, count: 33 },
    polling: { rate: 1.89, count: 30 }
  }
},

{ name: '신평2동', rate: 2.01,
  votes: {
    early: { rate: 2.64, count: 15 },
    polling: { rate: 1.70, count: 13 }
  }
},

{ name: '비산동', rate: 2.17,
  votes: {
    early: { rate: 2.87, count: 55 },
    polling: { rate: 2.03, count: 97 }
  }
},

{ name: '공단동', rate: 2.30,
  votes: {
    early: { rate: 3.00, count: 18 },
    polling: { rate: 2.07, count: 23 }
  }
},

{ name: '광평동', rate: 2.13,
  votes: {
    early: { rate: 2.31, count: 13 },
    polling: { rate: 2.11, count: 25 }
  }
},

{ name: '상모사곡동', rate: 1.88,
  votes: {
    early: { rate: 2.62, count: 77 },
    polling: { rate: 1.71, count: 199 }
  }
},

{ name: '임오동', rate: 1.75,
  votes: {
    early: { rate: 2.77, count: 39 },
    polling: { rate: 1.53, count: 89 }
  }
},

{ name: '인동동', rate: 1.93,
  votes: {
    early: { rate: 2.31, count: 61 },
    polling: { rate: 1.79, count: 241 }
  }
},

{ name: '진미동', rate: 2.10,
  votes: {
    early: { rate: 2.31, count: 47 },
    polling: { rate: 2.05, count: 75 }
  }
},

{ name: '양포동', rate: 2.33,
  votes: {
    early: { rate: 2.61, count: 106 },
    polling: { rate: 2.29, count: 305 }
  }
}] },

  // [111] 기초의원   | 류태하 | 경북 구미시 자선거구
  { id: 111, voteRate: 4.68, totalVotes: 1016, result: '후보', quota: 1, districts: [], neighborhoods: [{
    name: '관외사전투표',
    rate: 5.99,
    votes: {
      absentee: { rate: 5.99, count: 108 }
    }
  },
  {
    name: '인동동',
    rate: 4.33,
    votes: {
      early: { rate: 4.47, count: 137 },
      polling: { rate: 4.30, count: 519 }
    }
  },
  {
    name: '진미동',
    rate: 5.40,
    votes: {
      early: { rate: 5.12, count: 93 },
      polling: { rate: 5.59, count: 158 }
    }
  }] },

  // [112] 기초의원   | 김성조 | 경북 포항시 바선거구
  { id: 112, voteRate: 16.37, totalVotes: 2604, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '관외사전투표',
    rate: 16.69,
    votes: {
      absentee: { rate: 16.69, count: 396 }
    }
  },
  {
    name: '장량동',
    rate: 16.30,
    votes: {
      early: { rate: 15.02, count: 285 },
      polling: { rate: 16.51, count: 1914 }
    }
  }] },

  // [113] 기초의원   | 정진호 | 경북 울진군 나선거구
  { id: 113, voteRate: 9.37, totalVotes: 752, result: '후보', quota: 1, districts: [], neighborhoods: [{
    name: '관외사전투표',
    rate: 10.69,
    votes: {
      absentee: { rate: 10.69, count: 92 }
    }
  },
  {
    name: '북면',
    rate: 13.71,
    votes: {
      early: { rate: 10.70, count: 169 },
      polling: { rate: 15.83, count: 354 }
    }
  },
  {
    name: '죽변면',
    rate: 4.04,
    votes: {
      early: { rate: 4.16, count: 60 },
      polling: { rate: 3.95, count: 74 }
    }
  }] },

  // [114] 기초의원   | 황은재 | 충북 청주시 차선거구
  { id: 114, voteRate: 3.05, totalVotes: 951, result: '후보', quota: 1, districts: [], neighborhoods: [ {
    name: '관외사전투표',
    rate: 5.99,
    votes: {
      absentee: { rate: 5.99, count: 260 }
    }
  },
  {
    name: '복대제2동',
    rate: 8.75,
    votes: {
      early: { rate: 6.54, count: 107 },
      polling: { rate: 9.58, count: 417 }
    }
  },
  {
    name: '가경동',
    rate: 12.27,
    votes: {
      early: { rate: 8.46, count: 384 },
      polling: { rate: 13.33, count: 2154 }
    }
  }] },

  // [115] 기초의원   | 김성준 | 서울 강동구 마선거구
  { id: 115, voteRate: 3.67, totalVotes: 707, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":3.93,"votes":{"absentee":{"rate":3.93,"count":112}}},
{"name":"천호제2동","rate":3.64,"votes":{"early":{"rate":3.31,"count":149},"polling":{"rate":3.76,"count":445}}},] },

  // [116] 기초의원   | 정민우 | 서울 강동구 바선거구
  { id: 116, voteRate: 4.30, totalVotes: 1539, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.64,"votes":{"absentee":{"rate":4.64,"count":165}}},
{"name":"성내제1동","rate":4.62,"votes":{"early":{"rate":4.11,"count":134},"polling":{"rate":4.89,"count":309}}},
{"name":"성내제2동","rate":4.24,"votes":{"early":{"rate":4.18,"count":163},"polling":{"rate":4.27,"count":329}}},
{"name":"성내제3동","rate":3.95,"votes":{"early":{"rate":3.53,"count":141},"polling":{"rate":4.19,"count":291}}}] },

  // [117] 기초의원   | 김민식 | 인천 서해구 다선거구
  { id: 117, voteRate: 6.00, totalVotes: 2690, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.89,"votes":{"absentee":{"rate":4.89,"count":225}}},
{"name":"가정1동","rate":7.56,"votes":{"early":{"rate":6.88,"count":299},"polling":{"rate":7.79,"count":1008}}},
{"name":"가정2동","rate":6.47,"votes":{"early":{"rate":5.86,"count":142},"polling":{"rate":6.75,"count":345}}},
{"name":"가정3동","rate":3.1,"votes":{"early":{"rate":2.94,"count":37},"polling":{"rate":3.18,"count":77}}},
{"name":"신현원창동","rate":4.77,"votes":{"early":{"rate":3.04,"count":74},"polling":{"rate":5.23,"count":481}}}] },

  // [118] 기초의원   | 양현성 | 서울 강남구 나선거구
  { id: 118, voteRate: 3.68, totalVotes: 995, result: '후보', quota: 1, districts: [], neighborhoods: [
  {
    name: '거소투표',
    rate: 2.86,
    votes: {
      absentee: { rate: 2.86, count: 1 }
    }
  },
  {
    name: '관외사전투표',
    rate: 5.40,
    votes: {
      absentee: { rate: 5.40, count: 140 }
    }
  },
  {
    name: '압구정동',
    rate: 4.14,
    votes: {
      early: { rate: 4.94, count: 97 },
      polling: { rate: 3.99, count: 419 }
    }
  },
  {
    name: '청담동',
    rate: 2.84,
    votes: {
      early: { rate: 3.58, count: 65 },
      polling: { rate: 2.71, count: 273 }
    }
  }
] },

  // [119] 기초의원   | 조현조 | 부산 금정구 가선거구
  { id: 119, voteRate: 6.13, totalVotes: 1561, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.59,"votes":{"absentee":{"rate":4.59,"count":82}}},
{"name":"서제1동","rate":8.78,"votes":{"early":{"rate":6.43,"count":42},"polling":{"rate":9.9,"count":135}}},
{"name":"서제2동","rate":5.1,"votes":{"early":{"rate":5.22,"count":61},"polling":{"rate":5.05,"count":136}}},
{"name":"서제3동","rate":6.77,"votes":{"early":{"rate":6.15,"count":105},"polling":{"rate":7.1,"count":223}}},
{"name":"금사회동동","rate":8.53,"votes":{"early":{"rate":9.02,"count":118},"polling":{"rate":8.23,"count":180}}},
{"name":"부곡제1동","rate":4.15,"votes":{"early":{"rate":4.17,"count":52},"polling":{"rate":4.14,"count":98}}},
{"name":"부곡제4동","rate":5.63,"votes":{"early":{"rate":5.95,"count":127},"polling":{"rate":5.45,"count":198}}}] },

  // [120] 기초의원   | 권민찬 | 부산 금정구 다선거구
  { id: 120, voteRate: 4.04, totalVotes: 822, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.43,"votes":{"absentee":{"rate":4.43,"count":105}}},
{"name":"장전제1동","rate":4.96,"votes":{"early":{"rate":5.45,"count":122},"polling":{"rate":4.77,"count":281}}},
{"name":"구서제1동","rate":3.19,"votes":{"early":{"rate":3.48,"count":114},"polling":{"rate":3.03,"count":182}}},
{"name":"금성동","rate":3.08,"votes":{"early":{"rate":4.46,"count":7},"polling":{"rate":2.42,"count":8}}}] },

  // [121] 기초의원   | 신유림 | 부산 부산진구 가선거구
  { id: 121, voteRate: 2.75, totalVotes: 859, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.71,"votes":{"absentee":{"rate":4.71,"count":142}}},
{"name":"부전제1동","rate":3.36,"votes":{"early":{"rate":2.71,"count":39},"polling":{"rate":3.61,"count":140}}},
{"name":"연지동","rate":2.31,"votes":{"early":{"rate":2.57,"count":81},"polling":{"rate":2.22,"count":202}}},
{"name":"초읍동","rate":2.39,"votes":{"early":{"rate":2.15,"count":63},"polling":{"rate":2.48,"count":189}}}] },

  // [122] 기초의원   | 서명교 | 대구 수성구 가선거구
  { id: 122, voteRate: 9.61, totalVotes: 3615, result: '후보', quota: 1, districts: [], neighborhoods: [{
    name: '관외사전투표',
    rate: 9.34,
    votes: {
      absentee: { rate: 9.34, count: 416 }
    }
  },
  {
    name: '범어1동',
    rate: 9.92,
    votes: {
      early: { rate: 10.97, count: 172 },
      polling: { rate: 9.72, count: 820 }
    }
  },
  {
    name: '범어4동',
    rate: 9.58,
    votes: {
      early: { rate: 9.29, count: 177 },
      polling: { rate: 9.67, count: 553 }
    }
  },
  {
    name: '황금1동',
    rate: 11.00,
    votes: {
      early: { rate: 11.11, count: 260 },
      polling: { rate: 10.97, count: 851 }
    }
  },
  {
    name: '황금2동',
    rate: 6.60,
    votes: {
      early: { rate: 7.32, count: 109 },
      polling: { rate: 6.32, count: 246 }
    }
  }] },

  // [123] 기초의원   | 이민수 | 서울 동작구 가선거구
  { id: 123, voteRate: 5.31, totalVotes: 1230, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":5.41,"votes":{"absentee":{"rate":5.41,"count":217}}},
{"name":"노량진제1동","rate":5.26,"votes":{"early":{"rate":4.82,"count":124},"polling":{"rate":5.36,"count":663}}},
{"name":"노량진제2동","rate":5.44,"votes":{"early":{"rate":5.75,"count":108},"polling":{"rate":5.18,"count":118}}}] },

  // [124] 기초의원   | 김효숙 | 서울 동작구 나선거구
  { id: 124, voteRate: 8.49, totalVotes: 2664, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":6.74,"votes":{"absentee":{"rate":6.74,"count":354}}},
{"name":"상도제2동","rate":8.96,"votes":{"early":{"rate":7.29,"count":289},"polling":{"rate":9.69,"count":883}}},
{"name":"상도제4동","rate":8.75,"votes":{"early":{"rate":8.06,"count":365},"polling":{"rate":9.13,"count":770}}}] },

  // [125] 기초의원   | 민경희 | 서울 동작구 다선거구
  { id: 125, voteRate: 8.32, totalVotes: 2684, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":7.88,"votes":{"absentee":{"rate":7.88,"count":376}}},
{"name":"상도제3동","rate":8.65,"votes":{"early":{"rate":8.14,"count":399},"polling":{"rate":8.99,"count":663}}},
{"name":"대방동","rate":8.18,"votes":{"early":{"rate":8.32,"count":340},"polling":{"rate":8.13,"count":899}}}] },

  // [126] 기초의원   | 민경준 | 서울 중랑구 다선거구
  { id: 126, voteRate: 2.51, totalVotes: 1.174, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '관외사전투표',
    rate: 3.25,
    votes: {
      absentee: { rate: 3.25, count: 182 }
    }
  },
  {
    name: '면목본동',
    rate: 2.18,
    votes: {
      early: { rate: 1.98, count: 111 },
      polling: { rate: 2.30, count: 206 }
    }
  },
  {
    name: '면목제2동',
    rate: 2.23,
    votes: {
      early: { rate: 1.67, count: 57 },
      polling: { rate: 2.52, count: 165 }
    }
  },
  {
    name: '면목제5동',
    rate: 2.21,
    votes: {
      early: { rate: 1.62, count: 40 },
      polling: { rate: 2.56, count: 111 }
    }
  },
  {
    name: '상봉제2동',
    rate: 3.09,
    votes: {
      early: { rate: 2.30, count: 79 },
      polling: { rate: 3.53, count: 221 }
    }
  }] },

  // [127] 기초의원   | 이영자 | 인천 연수구 가선거구
  { id: 127, voteRate: 2.73, totalVotes: 815, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":3.17,"votes":{"absentee":{"rate":3.17,"count":86}}},
{"name":"옥련2동","rate":2.73,"votes":{"early":{"rate":2.61,"count":86},"polling":{"rate":2.79,"count":177}}},
{"name":"연수1동","rate":2.99,"votes":{"early":{"rate":2.68,"count":64},"polling":{"rate":3.14,"count":153}}},
{"name":"청학동","rate":2.44,"votes":{"early":{"rate":2.08,"count":61},"polling":{"rate":2.59,"count":186}}},] },

  // [128] 기초의원   | 변재민 | 인천 연수구 다선거구
  { id: 128, voteRate: 2.97, totalVotes: 952, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.05,"votes":{"absentee":{"rate":4.05,"count":156}}},
{"name":"옥련1동","rate":2.57,"votes":{"early":{"rate":2.94,"count":54},"polling":{"rate":2.45,"count":135}}},
{"name":"동춘1동","rate":2.98,"votes":{"early":{"rate":2.88,"count":104},"polling":{"rate":3.02,"count":257}}},
{"name":"동춘2동","rate":2.84,"votes":{"early":{"rate":2.5,"count":76},"polling":{"rate":3.02,"count":168}}}] },

  // [129] 기초의원   | 정민기 | 서울 중랑구 바선거구
  { id: 129, voteRate: 3.05, totalVotes: 719, result: '후보', quota: 1, districts: [], neighborhoods: [{
    name: '관외사전투표',
    rate: 3.47,
    votes: {
      absentee: { rate: 3.47, count: 87 }
    }
  },
  {
    name: '상봉제1동',
    rate: 3.04,
    votes: {
      early: { rate: 2.62, count: 63 },
      polling: { rate: 3.18, count: 230 }
    }
  },
  {
    name: '신내제2동',
    rate: 2.95,
    votes: {
      early: { rate: 2.50, count: 111 },
      polling: { rate: 3.24, count: 225 }
    }
  }] },

  // [130] 기초의원   | 한민희 | 충남 계룡시 나선거구
  { id: 130, voteRate: 4.38, totalVotes: 393, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":3.62,"votes":{"absentee":{"rate":3.62,"count":37}}},
{"name":"엄사면","rate":4.5,"votes":{"early":{"rate":4.52,"count":116},"polling":{"rate":4.49,"count":239}}}] },

  // [131] 기초의원   | 김희성 | 경남 김해시 다선거구
  { id: 131, voteRate: 4.51, totalVotes: 1352, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":5.24,"votes":{"absentee":{"rate":5.24,"count":168}}},
{"name":"동상동","rate":4.34,"votes":{"early":{"rate":4.69,"count":60},"polling":{"rate":4.16,"count":103}}},
{"name":"회현동","rate":3.41,"votes":{"early":{"rate":2.77,"count":41},"polling":{"rate":3.77,"count":98}}},
{"name":"부원동","rate":3.96,"votes":{"early":{"rate":4.7,"count":74},"polling":{"rate":3.51,"count":88}}},
{"name":"활천동","rate":4.88,"votes":{"early":{"rate":4.23,"count":167},"polling":{"rate":5.12,"count":550}}}] },

  // [132] 기초단체장  | 강명상 | 경남 창원시장
  { id: 132, voteRate: 2.55, totalVotes: 13858, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: "의창구_관외사전투표",
    rate: 3.26,
    votes: {
      absentee: { rate: 3.26, count: 375 }
    }
  },
  {
    name: "동읍",
    rate: 2.07,
    votes: {
      early: { rate: 1.91, count: 51 },
      polling: { rate: 2.14, count: 148 }
    }
  },
  {
    name: "북면",
    rate: 2.16,
    votes: {
      early: { rate: 2.04, count: 112 },
      polling: { rate: 2.21, count: 325 }
    }
  },
  {
    name: "대산면",
    rate: 1.12,
    votes: {
      early: { rate: 0.69, count: 8 },
      polling: { rate: 1.33, count: 31 }
    }
  },
  {
    name: "의창동",
    rate: 2.95,
    votes: {
      early: { rate: 2.30, count: 105 },
      polling: { rate: 3.12, count: 592 }
    }
  },
  {
    name: "팔룡동",
    rate: 3.03,
    votes: {
      early: { rate: 2.84, count: 122 },
      polling: { rate: 3.13, count: 291 }
    }
  },
  {
    name: "명곡동",
    rate: 2.55,
    votes: {
      early: { rate: 2.76, count: 142 },
      polling: { rate: 2.47, count: 351 }
    }
  },
  {
    name: "봉림동",
    rate: 2.63,
    votes: {
      early: { rate: 1.98, count: 70 },
      polling: { rate: 2.85, count: 297 }
    }
  },
  {
    name: "거소투표",
    rate: 3.78,
    votes: {
      early: { rate: 3.78, count: 13 },
      polling: null
    }
  },
  {
    name: "성산구_관외사전투표",
    rate: 4.06,
    votes: {
      absentee: { rate: 4.06, count: 520 }
    }
  },
  {
    name: "반송동",
    rate: 2.95,
    votes: {
      early: { rate: 3.00, count: 168 },
      polling: { rate: 2.91, count: 427 }
    }
  },
  {
    name: "중앙동",
    rate: 3.53,
    votes: {
      early: { rate: 3.11, count: 124 },
      polling: { rate: 3.69, count: 588 }
    }
  },
  {
    name: "용지동",
    rate: 3.53,
    votes: {
      early: { rate: 3.73, count: 107 },
      polling: { rate: 3.42, count: 325 }
    }
  },
  {
    name: "상남동",
    rate: 3.01,
    votes: {
      early: { rate: 2.95, count: 142 },
      polling: { rate: 3.11, count: 256 }
    }
  },
  {
    name: "사파동",
    rate: 3.07,
    votes: {
      early: { rate: 2.84, count: 165 },
      polling: { rate: 3.26, count: 509 }
    }
  },
  {
    name: "가음정동",
    rate: 3.00,
    votes: {
      early: { rate: 2.82, count: 162 },
      polling: { rate: 3.16, count: 439 }
    }
  },
  {
    name: "성주동",
    rate: 2.92,
    votes: {
      early: { rate: 2.10, count: 69 },
      polling: { rate: 3.39, count: 360 }
    }
  },
  {
    name: "웅남동",
    rate: 1.33,
    votes: {
      early: { rate: 0.80, count: 30 },
      polling: { rate: 1.55, count: 70 }
    }
  },
  {
    name: "마산합포구_관외사전투표",
    rate: 2.84,
    votes: {
      absentee: { rate: 2.84, count: 254 }
    }
  },
  {
    name: "구산면",
    rate: 1.66,
    votes: {
      early: { rate: 1.23, count: 6 },
      polling: { rate: 1.79, count: 28 }
    }
  },
  {
    name: "진동면",
    rate: 1.71,
    votes: {
      early: { rate: 1.68, count: 40 },
      polling: { rate: 1.66, count: 64 }
    }
  },
  {
    name: "진북면",
    rate: 1.81,
    votes: {
      early: { rate: 1.37, count: 6 },
      polling: { rate: 2.16, count: 26 }
    }
  },
  {
    name: "진전면",
    rate: 1.18,
    votes: {
      early: { rate: 1.19, count: 7 },
      polling: { rate: 1.12, count: 16 }
    }
  },
  {
    name: "현동",
    rate: 1.11,
    votes: {
      early: { rate: 1.16, count: 50 },
      polling: { rate: 1.04, count: 94 }
    }
  },
  {
    name: "가포동",
    rate: 1.11,
    votes: {
      early: { rate: 1.15, count: 22 },
      polling: { rate: 1.13, count: 51 }
    }
  },
  {
    name: "월영동",
    rate: 1.15,
    votes: {
      early: { rate: 1.15, count: 128 },
      polling: { rate: 1.14, count: 315 }
    }
  },
  {
    name: "문화동",
    rate: 1.35,
    votes: {
      early: { rate: 1.32, count: 50 },
      polling: { rate: 1.36, count: 78 }
    }
  },
  {
    name: "반월중앙동",
    rate: 1.81,
    votes: {
      early: { rate: 1.44, count: 27 },
      polling: { rate: 1.91, count: 96 }
    }
  },
  {
    name: "완월동",
    rate: 1.89,
    votes: {
      early: { rate: 1.67, count: 25 },
      polling: { rate: 2.17, count: 63 }
    }
  },
  {
    name: "자산동",
    rate: 1.49,
    votes: {
      early: { rate: 1.48, count: 20 },
      polling: { rate: 1.49, count: 51 }
    }
  },
  {
    name: "오동동",
    rate: 1.42,
    votes: {
      early: { rate: 1.45, count: 26 },
      polling: { rate: 1.41, count: 127 }
    }
  },
  {
    name: "교방동",
    rate: 1.58,
    votes: {
      early: { rate: 1.48, count: 77 },
      polling: { rate: 1.67, count: 141 }
    }
  },
  {
    name: "합포동",
    rate: 1.23,
    votes: {
      early: { rate: 1.74, count: 24 },
      polling: { rate: 1.17, count: 38 }
    }
  },
  {
    name: "산호동",
    rate: 1.44,
    votes: {
      early: { rate: 1.98, count: 32 },
      polling: { rate: 1.22, count: 91 }
    }
  },
{
    name: "마산회원구_관외사전투표",
    rate: 2.84,
    votes: {
      absentee: { rate: 2.84, count: 245 }
    }
  },
  {
    name: "내서읍",
    rate: 1.63,
    votes: {
      early: { rate: 1.63, count: 98 },
      polling: { rate: 1.65, count: 382 }
    }
  },
  {
    name: "회원1동",
    rate: 2.19,
    votes: {
      early: { rate: 2.09, count: 33 },
      polling: { rate: 2.09, count: 76 }
    }
  },
  {
    name: "회원2동",
    rate: 1.81,
    votes: {
      early: { rate: 1.92, count: 25 },
      polling: { rate: 1.75, count: 58 }
    }
  },
  {
    name: "석전동",
    rate: 2.52,
    votes: {
      early: { rate: 2.43, count: 49 },
      polling: { rate: 2.56, count: 153 }
    }
  },
  {
    name: "회성동",
    rate: 1.70,
    votes: {
      early: { rate: 1.29, count: 10 },
      polling: { rate: 1.94, count: 37 }
    }
  },
  {
    name: "양덕1동",
    rate: 2.12,
    votes: {
      early: { rate: 2.10, count: 30 },
      polling: { rate: 2.21, count: 75 }
    }
  },
  {
    name: "양덕2동",
    rate: 1.95,
    votes: {
      early: { rate: 2.60, count: 103 },
      polling: { rate: 1.83, count: 421 }
    }
  },
  {
    name: "합성1동",
    rate: 2.33,
    votes: {
      early: { rate: 2.18, count: 34 },
      polling: { rate: 2.33, count: 67 }
    }
  },
  {
    name: "합성2동",
    rate: 2.15,
    votes: {
      early: { rate: 2.65, count: 40 },
      polling: { rate: 2.00, count: 59 }
    }
  },
  {
    name: "구암1동",
    rate: 1.97,
    votes: {
      early: { rate: 1.87, count: 24 },
      polling: { rate: 1.93, count: 62 }
    }
  },
  {
    name: "구암2동",
    rate: 2.01,
    votes: {
      early: { rate: 2.56, count: 29 },
      polling: { rate: 1.94, count: 81 }
    }
  },
  {
    name: "봉암동",
    rate: 1.44,
    votes: {
      early: { rate: 1.27, count: 7 },
      polling: { rate: 1.48, count: 14 }
    }
  },
  {
    name: "진해구_관외사전투표",
    rate: 1.51,
    votes: {
      absentee: { rate: 1.51, count: 232 }
    }
  },
  {
    name: "충무동",
    rate: 2.94,
    votes: {
      early: { rate: 3.57, count: 73 },
      polling: { rate: 2.68, count: 130 }
    }
  },
  {
    name: "여좌동",
    rate: 1.71,
    votes: {
      early: { rate: 1.99, count: 24 },
      polling: { rate: 1.61, count: 47 }
    }
  },
  {
    name: "태백동",
    rate: 2.31,
    votes: {
      early: { rate: 2.50, count: 15 },
      polling: { rate: 2.21, count: 27 }
    }
  },
  {
    name: "경화동",
    rate: 1.60,
    votes: {
      early: { rate: 1.20, count: 21 },
      polling: { rate: 1.85, count: 56 }
    }
  },
  {
    name: "병암동",
    rate: 1.86,
    votes: {
      early: { rate: 2.06, count: 27 },
      polling: { rate: 1.64, count: 37 }
    }
  },
  {
    name: "석동",
    rate: 2.64,
    votes: {
      early: { rate: 2.49, count: 54 },
      polling: { rate: 2.71, count: 150 }
    }
  },
  {
    name: "이동",
    rate: 1.63,
    votes: {
      early: { rate: 1.01, count: 10 },
      polling: { rate: 1.85, count: 53 }
    }
  },
  {
    name: "자은동",
    rate: 2.20,
    votes: {
      early: { rate: 1.89, count: 48 },
      polling: { rate: 2.32, count: 158 }
    }
  },
  {
    name: "덕산동",
    rate: 2.01,
    votes: {
      early: { rate: 2.28, count: 35 },
      polling: { rate: 1.87, count: 52 }
    }
  },
  {
    name: "풍호동",
    rate: 2.24,
    votes: {
      early: { rate: 2.04, count: 70 },
      polling: { rate: 2.33, count: 188 }
    }
  },
  {
    name: "웅천동",
    rate: 1.85,
    votes: {
      early: { rate: 1.46, count: 29 },
      polling: { rate: 2.03, count: 85 }
    }
  },
  {
    name: "웅동1동",
    rate: 1.74,
    votes: {
      early: { rate: 1.85, count: 23 },
      polling: { rate: 1.72, count: 39 }
    }
  },
  {
    name: "웅동2동",
    rate: 1.72,
    votes: {
      early: { rate: 1.41, count: 68 },
      polling: { rate: 1.84, count: 216 }
    }
  }
] },

  // [133] 기초단체장  | 이창원 | 충남 논산시장
  { id: 133, voteRate: 1.47, totalVotes: 870, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 5.80,
  votes: { absentee: { rate: 5.80, count: 139 } }
},

{ name: '강경읍', rate: 1.08,
  votes: {
    early: { rate: 0.67, count: 9 },
    polling: { rate: 1.32, count: 32 }
  }
},

{ name: '연무읍', rate: 1.13,
  votes: {
    early: { rate: 1.43, count: 32 },
    polling: { rate: 1.17, count: 43 }
  }
},

{ name: '성동면', rate: 1.32,
  votes: {
    early: { rate: 0.87, count: 5 },
    polling: { rate: 1.61, count: 21 }
  }
},

{ name: '광석면', rate: 0.96,
  votes: {
    early: { rate: 0.43, count: 3 },
    polling: { rate: 1.04, count: 16 }
  }
},

{ name: '노성면', rate: 1.78,
  votes: {
    early: { rate: 1.96, count: 8 },
    polling: { rate: 1.62, count: 18 }
  }
},

{ name: '상월면', rate: 2.36,
  votes: {
    early: { rate: 2.67, count: 19 },
    polling: { rate: 1.98, count: 22 }
  }
},

{ name: '부적면', rate: 1.33,
  votes: {
    early: { rate: 1.36, count: 9 },
    polling: { rate: 1.23, count: 14 }
  }
},

{ name: '연산면', rate: 1.26,
  votes: {
    early: { rate: 1.12, count: 12 },
    polling: { rate: 1.27, count: 28 }
  }
},

{ name: '벌곡면', rate: 2.04,
  votes: {
    early: { rate: 1.86, count: 10 },
    polling: { rate: 2.11, count: 16 }
  }
},

{ name: '양촌면', rate: 1.92,
  votes: {
    early: { rate: 1.19, count: 10 },
    polling: { rate: 2.08, count: 41 }
  }
},

{ name: '가야곡면', rate: 1.29,
  votes: {
    early: { rate: 1.46, count: 9 },
    polling: { rate: 1.31, count: 14 }
  }
},

{ name: '은진면', rate: 1.36,
  votes: {
    early: { rate: 1.47, count: 9 },
    polling: { rate: 1.34, count: 17 }
  }
},

{ name: '채운면', rate: 1.81,
  votes: {
    early: { rate: 0.00, count: 0 },
    polling: { rate: 1.52, count: 21 }
  }
},

{ name: '취암동', rate: 1.29,
  votes: {
    early: { rate: 1.25, count: 56 },
    polling: { rate: 1.31, count: 135 }
  }
},

{ name: '부창동', rate: 1.29,
  votes: {
    early: { rate: 1.37, count: 17 },
    polling: { rate: 1.27, count: 72 }
  }
}] },

  // [134] 기초의원   | 고귀한 | 부산 연제구 가선거구
  { id: 134, voteRate: 1.27, totalVotes: 479, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":1.74,"votes":{"absentee":{"rate":1.74,"count":73}}},
{"name":"거제제1동","rate":1.2,"votes":{"early":{"rate":1.49,"count":39},"polling":{"rate":1.13,"count":119}}},
{"name":"거제제2동","rate":1.36,"votes":{"early":{"rate":1.3,"count":35},"polling":{"rate":1.38,"count":117}}},
{"name":"거제제3동","rate":1.01,"votes":{"early":{"rate":1,"count":15},"polling":{"rate":1.01,"count":33}}},
{"name":"거제제4동","rate":1.09,"votes":{"early":{"rate":0.98,"count":13},"polling":{"rate":1.14,"count":34}}}] },

  // [135] 기초의원   | 문현진 | 경남 김해시 사선거구
  { id: 135, voteRate: 2.00, totalVotes: 666, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":2.56,"votes":{"absentee":{"rate":2.56,"count":88}}},
{"name":"내외동","rate":1.94,"votes":{"early":{"rate":1.86,"count":160},"polling":{"rate":1.98,"count":418}}}] },

  // [136] 광역의원   | 양시훈 | 경기 화성시 제5선거구
  { id: 136, voteRate: 16.71, totalVotes: 8668, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 14.21,
  votes: { absentee: { rate: 14.21, count: 822 } }
},
{ name: '동탄7동', rate: 15.07,
  votes: {
    early: { rate: 11.74, count: 673 },
    polling: { rate: 16.26, count: 2658 }
  }
},
{ name: '동탄9동', rate: 18.85,
  votes: {
    early: { rate: 15.19, count: 929 },
    polling: { rate: 20.11, count: 3571 }
  }
},] },

  // [137] 광역의원   | 한범수 | 서울 영등포구 제2선거구
  { id: 137, voteRate: 4.31, totalVotes: 3216, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 5.06,
  votes: { absentee: { rate: 5.06, count: 579 } }
},
{ name: '영등포동', rate: 4.82,
  votes: {
    early: { rate: 4.47, count: 154 },
    polling: { rate: 4.94, count: 489 }
  }
},
{ name: '당산제1동', rate: 4.00,
  votes: {
    early: { rate: 4.31, count: 115 },
    polling: { rate: 3.90, count: 305 }
  }
},
{ name: '당산제2동', rate: 3.91,
  votes: {
    early: { rate: 3.74, count: 144 },
    polling: { rate: 3.95, count: 556 }
  }
},
{ name: '양평제1동', rate: 4.28,
  votes: {
    early: { rate: 3.90, count: 128 },
    polling: { rate: 4.47, count: 283 }
  }
},
{ name: '양평제2동', rate: 3.94,
  votes: {
    early: { rate: 4.06, count: 135 },
    polling: { rate: 3.89, count: 318 }
  }
},] },

  // [138] 기초의원   | 오다겸 | 부산 사하구 마선거구
  { id: 138, voteRate: 8.39, totalVotes: 2491, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":7.59,"votes":{"absentee":{"rate":7.59,"count":175}}},
{"name":"다대제1동","rate":8.02,"votes":{"early":{"rate":7.77,"count":271},"polling":{"rate":8.1,"count":964}}},
{"name":"다대제2동","rate":9.02,"votes":{"early":{"rate":8.18,"count":264},"polling":{"rate":9.34,"count":808}}}] },

  // [139] 기초단체장  | 최봉환 | 부산 금정구청장
  { id: 139, voteRate: 2.16, totalVotes: 2490, result: '후보', quota: 1, districts: [], neighborhoods: [
  {
    name: "관외사전투표",
    rate: 2.57,
    votes: {
      absentee: { rate: 2.57, count: 302 }
    }
  },

  {
    name: "서제1동",
    rate: 1.78,
    votes: {
      early: { rate: 0.60, count: 4 },
      polling: { rate: 2.33, count: 33 }
    }
  },

  {
    name: "서제2동",
    rate: 1.31,
    votes: {
      early: { rate: 0.76, count: 9 },
      polling: { rate: 1.55, count: 43 }
    }
  },

  {
    name: "서제3동",
    rate: 1.52,
    votes: {
      early: { rate: 1.43, count: 25 },
      polling: { rate: 1.57, count: 51 }
    }
  },

  {
    name: "금사회동동",
    rate: 1.59,
    votes: {
      early: { rate: 1.05, count: 14 },
      polling: { rate: 1.92, count: 43 }
    }
  },

  {
    name: "부곡제1동",
    rate: 1.31,
    votes: {
      early: { rate: 0.94, count: 12 },
      polling: { rate: 1.50, count: 37 }
    }
  },

  {
    name: "부곡제2동",
    rate: 1.55,
    votes: {
      early: { rate: 1.13, count: 26 },
      polling: { rate: 1.71, count: 106 }
    }
  },

  {
    name: "부곡제3동",
    rate: 1.62,
    votes: {
      early: { rate: 1.60, count: 41 },
      polling: { rate: 1.64, count: 84 }
    }
  },

  {
    name: "부곡제4동",
    rate: 1.76,
    votes: {
      early: { rate: 1.75, count: 38 },
      polling: { rate: 1.76, count: 66 }
    }
  },

  {
    name: "장전제1동",
    rate: 3.05,
    votes: {
      early: { rate: 3.00, count: 69 },
      polling: { rate: 3.07, count: 186 }
    }
  },

  {
    name: "장전제2동",
    rate: 1.68,
    votes: {
      early: { rate: 1.73, count: 51 },
      polling: { rate: 1.66, count: 148 }
    }
  },

  {
    name: "선두구동",
    rate: 2.43,
    votes: {
      early: { rate: 1.89, count: 7 },
      polling: { rate: 2.68, count: 22 }
    }
  },

  {
    name: "청룡노포동",
    rate: 1.86,
    votes: {
      early: { rate: 1.84, count: 31 },
      polling: { rate: 1.87, count: 59 }
    }
  },

  {
    name: "남산동",
    rate: 3.01,
    votes: {
      early: { rate: 3.02, count: 103 },
      polling: { rate: 3.00, count: 269 }
    }
  },

  {
    name: "구서제1동",
    rate: 2.37,
    votes: {
      early: { rate: 2.37, count: 79 },
      polling: { rate: 2.36, count: 145 }
    }
  },

  {
    name: "구서제2동",
    rate: 2.34,
    votes: {
      early: { rate: 2.67, count: 101 },
      polling: { rate: 2.23, count: 270 }
    }
  },

  {
    name: "금성동",
    rate: 1.18,
    votes: {
      early: { rate: 1.84, count: 3 },
      polling: { rate: 0.87, count: 3 }
    }
  }
] },

  // [140] 기초의원   | 김신재 | 부산 해운대구 다선거구
  { id: 140, voteRate: 3.33, totalVotes: 897, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":3.19,"votes":{"absentee":{"rate":3.19,"count":87}}},
{"name":"중제2동","rate":2.12,"votes":{"early":{"rate":2.24,"count":40},"polling":{"rate":2.08,"count":95}}},
{"name":"좌제2동","rate":4.03,"votes":{"early":{"rate":4.12,"count":152},"polling":{"rate":4,"count":400}}},
{"name":"송정동","rate":2.99,"votes":{"early":{"rate":2.86,"count":32},"polling":{"rate":3.04,"count":90}}}] },

  // [141] 기초단체장  | 박일하 | 서울 동작구청장
  { id: 141, voteRate: 19.39, totalVotes: 41918, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 14.68,
  votes: { absentee: { rate: 14.68, count: 4591 } }
},
{ name: '노량진제1동', rate: 24.67,
  votes: {
    early: { rate: 20.39, count: 523 },
    polling: { rate: 25.53, count: 3254 }
  }
},
{ name: '노량진제2동', rate: 24.78,
  votes: {
    early: { rate: 20.45, count: 388 },
    polling: { rate: 28.24, count: 667 }
  }
},
{ name: '상도제1동', rate: 18.18,
  votes: {
    early: { rate: 16.56, count: 1041 },
    polling: { rate: 18.83, count: 3001 }
  }
},
{ name: '상도제2동', rate: 31.97,
  votes: {
    early: { rate: 27.04, count: 1081 },
    polling: { rate: 34.10, count: 3147 }
  }
},
{ name: '상도제3동', rate: 20.07,
  votes: {
    early: { rate: 17.87, count: 887 },
    polling: { rate: 21.51, count: 1635 }
  }
},
{ name: '상도제4동', rate: 27.91,
  votes: {
    early: { rate: 24.30, count: 1111 },
    polling: { rate: 29.83, count: 2544 }
  }
},
{ name: '흑석동', rate: 14.94,
  votes: {
    early: { rate: 14.06, count: 605 },
    polling: { rate: 15.28, count: 1656 }
  }
},
{ name: '사당제1동', rate: 15.18,
  votes: {
    early: { rate: 13.52, count: 360 },
    polling: { rate: 15.77, count: 1197 }
  }
},
{ name: '사당제2동', rate: 15.55,
  votes: {
    early: { rate: 14.01, count: 706 },
    polling: { rate: 16.34, count: 1619 }
  }
},
{ name: '사당제3동', rate: 19.60,
  votes: {
    early: { rate: 17.79, count: 542 },
    polling: { rate: 20.24, count: 1714 }
  }
},
{ name: '사당제4동', rate: 19.53,
  votes: {
    early: { rate: 18.27, count: 459 },
    polling: { rate: 20.21, count: 940 }
  }
},
{ name: '사당제5동', rate: 20.43,
  votes: {
    early: { rate: 17.11, count: 406 },
    polling: { rate: 21.84, count: 1118 }
  }
},
{ name: '대방동', rate: 19.24,
  votes: {
    early: { rate: 17.20, count: 720 },
    polling: { rate: 19.88, count: 2253 }
  }
},
{ name: '신대방제1동', rate: 15.49,
  votes: {
    early: { rate: 13.74, count: 412 },
    polling: { rate: 16.14, count: 1345 }
  }
},
{ name: '신대방제2동', rate: 18.44,
  votes: {
    early: { rate: 16.57, count: 518 },
    polling: { rate: 19.12, count: 1439 }
  }
},] },

  // [142] 기초의원   | 안병두 | 서울 서초구 다선거구
  { id: 142, voteRate: 4.03, totalVotes: 1887, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.63,"votes":{"absentee":{"rate":4.63,"count":238}}},
{"name":"서초1동","rate":3.73,"votes":{"early":{"rate":4.16,"count":108},"polling":{"rate":3.58,"count":250}}},
{"name":"서초3동","rate":3.82,"votes":{"early":{"rate":4.08,"count":135},"polling":{"rate":3.75,"count":441}}},
{"name":"방배2동","rate":3.97,"votes":{"early":{"rate":3.5,"count":85},"polling":{"rate":4.14,"count":277}}},
{"name":"방배3동","rate":4.46,"votes":{"early":{"rate":5.05,"count":107},"polling":{"rate":4.24,"count":241}}}] },

  // [143] 기초의원   | 이형준 | 서울 서초구 마선거구
  { id: 143, voteRate: 4.73, totalVotes: 2047, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":5.62,"votes":{"absentee":{"rate":5.62,"count":282}}},
{"name":"양재1동","rate":4.12,"votes":{"early":{"rate":3.08,"count":108},"polling":{"rate":4.35,"count":682}}},
{"name":"양재2동","rate":6.01,"votes":{"early":{"rate":5,"count":182},"polling":{"rate":6.55,"count":449}}},
{"name":"내곡동","rate":4.01,"votes":{"early":{"rate":3.91,"count":101},"polling":{"rate":4.06,"count":238}}}] },

  // [144] 기초의원   | 오세철 | 서울 서초구 가선거구
  { id: 144, voteRate: 5.57, totalVotes: 3193, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":6.45,"votes":{"absentee":{"rate":6.45,"count":351}}},
{"name":"잠원동","rate":6.59,"votes":{"early":{"rate":7.1,"count":252},"polling":{"rate":6.45,"count":868}}},
{"name":"반포1동","rate":4.86,"votes":{"early":{"rate":5.88,"count":191},"polling":{"rate":4.56,"count":514}}},
{"name":"반포3동","rate":5.62,"votes":{"early":{"rate":5.78,"count":173},"polling":{"rate":5.57,"count":494}}},
{"name":"반포4동","rate":4.19,"votes":{"early":{"rate":3.95,"count":69},"polling":{"rate":4.25,"count":280}}}] },

  // [145] 기초단체장  | 이성진 | 충남 천안시장
  { id: 145, voteRate: 2.62, totalVotes: 7821, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '서북구_관외사전투표', rate: 3.54,
  votes: { absentee: { rate: 3.54, count: 665 } }
},

{ name: '성환읍', rate: 2.09,
  votes: {
    early: { rate: 2.04, count: 59 },
    polling: { rate: 2.11, count: 148 }
  }
},

{ name: '성거읍', rate: 2.54,
  votes: {
    early: { rate: 2.04, count: 41 },
    polling: { rate: 2.70, count: 161 }
  }
},

{ name: '직산읍', rate: 2.51,
  votes: {
    early: { rate: 2.64, count: 68 },
    polling: { rate: 2.45, count: 125 }
  }
},

{ name: '입장면', rate: 2.17,
  votes: {
    early: { rate: 2.01, count: 25 },
    polling: { rate: 2.25, count: 53 }
  }
},

{ name: '쌍용1동', rate: 2.31,
  votes: {
    early: { rate: 2.94, count: 43 },
    polling: { rate: 2.08, count: 80 }
  }
},

{ name: '쌍용2동', rate: 2.50,
  votes: {
    early: { rate: 2.34, count: 84 },
    polling: { rate: 2.56, count: 272 }
  }
},

{ name: '쌍용3동', rate: 2.47,
  votes: {
    early: { rate: 3.02, count: 71 },
    polling: { rate: 2.23, count: 120 }
  }
},

{ name: '백석동', rate: 2.31,
  votes: {
    early: { rate: 1.94, count: 57 },
    polling: { rate: 2.40, count: 298 }
  }
},

{ name: '불당1동', rate: 3.32,
  votes: {
    early: { rate: 3.15, count: 73 },
    polling: { rate: 3.36, count: 338 }
  }
},

{ name: '불당2동', rate: 2.74,
  votes: {
    early: { rate: 2.70, count: 112 },
    polling: { rate: 2.75, count: 291 }
  }
},

{ name: '부성1동', rate: 3.07,
  votes: {
    early: { rate: 2.62, count: 111 },
    polling: { rate: 3.17, count: 552 }
  }
},

{ name: '부성2동', rate: 2.85,
  votes: {
    early: { rate: 2.58, count: 113 },
    polling: { rate: 2.92, count: 530 }
  }
},
{ name: '동남구_관외사전투표', rate: 3.30,
  votes: { absentee: { rate: 3.30, count: 536 } }
},

{ name: '목천읍', rate: 1.74,
  votes: {
    early: { rate: 1.54, count: 33 },
    polling: { rate: 1.79, count: 125 }
  }
},

{ name: '풍세면', rate: 2.02,
  votes: {
    early: { rate: 1.97, count: 25 },
    polling: { rate: 2.03, count: 65 }
  }
},

{ name: '광덕면', rate: 1.73,
  votes: {
    early: { rate: 1.27, count: 7 },
    polling: { rate: 1.88, count: 30 }
  }
},

{ name: '북면', rate: 1.62,
  votes: {
    early: { rate: 1.99, count: 9 },
    polling: { rate: 1.72, count: 20 }
  }
},

{ name: '성남면', rate: 1.60,
  votes: {
    early: { rate: 1.45, count: 9 },
    polling: { rate: 1.68, count: 16 }
  }
},

{ name: '수신면', rate: 0.70,
  votes: {
    early: { rate: 0.00, count: 0 },
    polling: { rate: 1.16, count: 7 }
  }
},

{ name: '병천면', rate: 2.16,
  votes: {
    early: { rate: 2.68, count: 32 },
    polling: { rate: 1.80, count: 31 }
  }
},

{ name: '동면', rate: 2.15,
  votes: {
    early: { rate: 2.27, count: 9 },
    polling: { rate: 2.07, count: 13 }
  }
},

{ name: '중앙동', rate: 1.49,
  votes: {
    early: { rate: 1.42, count: 12 },
    polling: { rate: 1.54, count: 22 }
  }
},

{ name: '문성동', rate: 2.97,
  votes: {
    early: { rate: 2.44, count: 25 },
    polling: { rate: 3.19, count: 77 }
  }
},

{ name: '원성1동', rate: 1.60,
  votes: {
    early: { rate: 1.53, count: 13 },
    polling: { rate: 1.70, count: 42 }
  }
},

{ name: '원성2동', rate: 1.97,
  votes: {
    early: { rate: 1.65, count: 19 },
    polling: { rate: 2.15, count: 59 }
  }
},

{ name: '봉명동', rate: 2.96,
  votes: {
    early: { rate: 2.80, count: 50 },
    polling: { rate: 3.01, count: 151 }
  }
},

{ name: '일봉동', rate: 2.23,
  votes: {
    early: { rate: 1.92, count: 32 },
    polling: { rate: 2.30, count: 168 }
  }
},

{ name: '신방동', rate: 1.65,
  votes: {
    early: { rate: 2.45, count: 93 },
    polling: { rate: 1.86, count: 274 }
  }
},

{ name: '청룡동', rate: 1.67,
  votes: {
    early: { rate: 1.69, count: 97 },
    polling: { rate: 1.66, count: 414 }
  }
},

{ name: '신안동', rate: 1.72,
  votes: {
    early: { rate: 2.58, count: 90 },
    polling: { rate: 1.63, count: 325 }
  }
},

{ name: '성정1동', rate: 2.39,
  votes: {
    early: { rate: 1.85, count: 24 },
    polling: { rate: 2.52, count: 124 }
  }
},

{ name: '성정2동', rate: 3.16,
  votes: {
    early: { rate: 2.93, count: 55 },
    polling: { rate: 3.31, count: 170 }
  }
}
] },

  // [146] 재보궐선거  | 이은창 | 충남 공주·부여·청양
  { id: 146, voteRate: 2.28, totalVotes: 2613, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"공주시_관외사전투표","rate":2.99,"votes":{"absentee":{"rate":2.99,"count":209}}},
{"name":"유구읍","rate":2.17,"votes":{"early":{"rate":2.34,"count":30},"polling":{"rate":2.09,"count":57}}},
{"name":"이인면","rate":1.66,"votes":{"early":{"rate":1.91,"count":10},"polling":{"rate":1.55,"count":17}}},
{"name":"탄천면","rate":1.24,"votes":{"early":{"rate":0.86,"count":4},"polling":{"rate":1.43,"count":13}}},
{"name":"계룡면","rate":1.63,"votes":{"early":{"rate":1.28,"count":12},"polling":{"rate":1.81,"count":32}}},
{"name":"반포면","rate":1.36,"votes":{"early":{"rate":1.07,"count":8},"polling":{"rate":1.51,"count":21}}},
{"name":"의당면","rate":2.14,"votes":{"early":{"rate":2.32,"count":28},"polling":{"rate":1.98,"count":27}}},
{"name":"정안면","rate":2.11,"votes":{"early":{"rate":2.04,"count":18},"polling":{"rate":2.15,"count":31}}},
{"name":"우성면","rate":2.11,"votes":{"early":{"rate":1.94,"count":12},"polling":{"rate":2.16,"count":43}}},
{"name":"사곡면","rate":2.03,"votes":{"early":{"rate":2.96,"count":16},"polling":{"rate":1.46,"count":13}}},
{"name":"신풍면","rate":1.6,"votes":{"early":{"rate":1.38,"count":9},"polling":{"rate":1.75,"count":16}}},
{"name":"중학동","rate":3.5,"votes":{"early":{"rate":3.62,"count":26},"polling":{"rate":3.44,"count":51}}},
{"name":"웅진동","rate":3.04,"votes":{"early":{"rate":3.02,"count":48},"polling":{"rate":3.04,"count":69}}},
{"name":"금학동","rate":3.44,"votes":{"early":{"rate":3.51,"count":31},"polling":{"rate":3.4,"count":55}}},
{"name":"옥룡동","rate":2.78,"votes":{"early":{"rate":2.01,"count":26},"polling":{"rate":3.21,"count":75}}},
{"name":"신관동","rate":4.32,"votes":{"early":{"rate":3.68,"count":125},"polling":{"rate":4.68,"count":279}}},
{"name":"월송동","rate":3.71,"votes":{"early":{"rate":3.44,"count":96},"polling":{"rate":3.88,"count":181}}},
{"name":"부여군_관외사전투표","rate":2.09,"votes":{"absentee":{"rate":2.09,"count":73}}},
{"name":"부여읍","rate":1.48,"votes":{"early":{"rate":1.46,"count":53},"polling":{"rate":1.49,"count":97}}},
{"name":"규암면","rate":1.59,"votes":{"early":{"rate":1.25,"count":22},"polling":{"rate":1.76,"count":66}}},
{"name":"은산면","rate":1.23,"votes":{"early":{"rate":1.07,"count":9},"polling":{"rate":1.36,"count":15}}},
{"name":"외산면","rate":0.79,"votes":{"early":{"rate":0.58,"count":3},"polling":{"rate":0.94,"count":7}}},
{"name":"내산면","rate":1.09,"votes":{"early":{"rate":0.78,"count":2},"polling":{"rate":1.24,"count":7}}},
{"name":"구룡면","rate":1.93,"votes":{"early":{"rate":1.1,"count":4},"polling":{"rate":2.32,"count":18}}},
{"name":"홍산면","rate":1.17,"votes":{"early":{"rate":1.08,"count":7},"polling":{"rate":1.23,"count":11}}},
{"name":"옥산면","rate":2.91,"votes":{"early":{"rate":4.5,"count":13},"polling":{"rate":1.93,"count":9}}},
{"name":"남면","rate":0.42,"votes":{"early":{"rate":0.65,"count":2},"polling":{"rate":0.31,"count":2}}},
{"name":"충화면","rate":0.83,"votes":{"early":{"rate":0.47,"count":1},"polling":{"rate":1.03,"count":4}}},
{"name":"양화면","rate":0.82,"votes":{"early":{"rate":1.7,"count":5},"polling":{"rate":0.36,"count":2}}},
{"name":"임천면","rate":1.8,"votes":{"early":{"rate":2.14,"count":12},"polling":{"rate":1.59,"count":14}}},
{"name":"장암면","rate":1.19,"votes":{"early":{"rate":0.68,"count":3},"polling":{"rate":1.45,"count":12}}},
{"name":"세도면","rate":1.57,"votes":{"early":{"rate":1.66,"count":10},"polling":{"rate":1.51,"count":15}}},
{"name":"석성면","rate":0.81,"votes":{"early":{"rate":1.08,"count":6},"polling":{"rate":0.65,"count":6}}},
{"name":"초촌면","rate":1.69,"votes":{"early":{"rate":2.09,"count":8},"polling":{"rate":1.46,"count":10}}},
{"name":"청양군_관외사전투표","rate":2.38,"votes":{"absentee":{"rate":2.38,"count":43}}},
{"name":"청양읍","rate":2.34,"votes":{"early":{"rate":2.28,"count":61},"polling":{"rate":2.38,"count":77}}},
{"name":"운곡면","rate":1.22,"votes":{"early":{"rate":1.25,"count":7},"polling":{"rate":1.2,"count":9}}},
{"name":"대치면","rate":1.79,"votes":{"early":{"rate":1.48,"count":9},"polling":{"rate":2.02,"count":17}}},
{"name":"정산면","rate":1.68,"votes":{"early":{"rate":1.73,"count":15},"polling":{"rate":1.64,"count":20}}},
{"name":"목면","rate":1.63,"votes":{"early":{"rate":2.07,"count":7},"polling":{"rate":1.35,"count":7}}},
{"name":"청남면","rate":1.13,"votes":{"early":{"rate":0.96,"count":4},"polling":{"rate":1.24,"count":8}}},
{"name":"장평면","rate":1.72,"votes":{"early":{"rate":2.75,"count":11},"polling":{"rate":1.28,"count":12}}},
{"name":"남양면","rate":1.86,"votes":{"early":{"rate":1.33,"count":9},"polling":{"rate":2.28,"count":20}}},
{"name":"화성면","rate":1.41,"votes":{"early":{"rate":1.38,"count":8},"polling":{"rate":1.43,"count":10}}},
{"name":"비봉면","rate":1.73,"votes":{"early":{"rate":1.04,"count":6},"polling":{"rate":2.32,"count":16}}}
] },

  // [147] 재보궐선거  | 김성열 | 경기 하남 갑
  { id: 147, voteRate: 2.18, totalVotes: 1948, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":2.82,"votes":{"absentee":{"rate":2.82,"count":298}}},
{"name":"천현동","rate":1.59,"votes":{"early":{"rate":1.93,"count":15},"polling":{"rate":1.43,"count":25}}},
{"name":"신장1동","rate":1.8,"votes":{"early":{"rate":1.79,"count":36},"polling":{"rate":1.82,"count":36}}},
{"name":"신장2동","rate":1.87,"votes":{"early":{"rate":1.7,"count":100},"polling":{"rate":1.93,"count":306}}},
{"name":"덕풍1동","rate":1.9,"votes":{"early":{"rate":1.71,"count":41},"polling":{"rate":2.01,"count":91}}},
{"name":"덕풍2동","rate":1.9,"votes":{"early":{"rate":1.58,"count":42},"polling":{"rate":2.07,"count":111}}},
{"name":"감북동","rate":1.59,"votes":{"early":{"rate":1.57,"count":10},"polling":{"rate":1.59,"count":16}}},
{"name":"감일동","rate":2.38,"votes":{"early":{"rate":2.16,"count":128},"polling":{"rate":2.49,"count":283}}},
{"name":"위례동","rate":2.7,"votes":{"early":{"rate":2.46,"count":89},"polling":{"rate":2.78,"count":300}}},
{"name":"춘궁동","rate":0.84,"votes":{"early":{"rate":0.65,"count":1},"polling":{"rate":0.98,"count":2}}},
{"name":"초이동","rate":1.1,"votes":{"early":{"rate":1.96,"count":8},"polling":{"rate":0.7,"count":6}}}] },

  // [148] 재보궐선거  | 문인수 | 경기 안산 갑
  { id: 148, voteRate: 5.40, totalVotes: 4968, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":5.68,"votes":{"absentee":{"rate":5.68,"count":477}}},
{"name":"사동","rate":5.41,"votes":{"early":{"rate":5.88,"count":206},"polling":{"rate":5.23,"count":475}}},
{"name":"사이동","rate":5.63,"votes":{"early":{"rate":5.35,"count":184},"polling":{"rate":5.73,"count":548}}},
{"name":"해양동","rate":6.49,"votes":{"early":{"rate":5.62,"count":212},"polling":{"rate":6.73,"count":940}}},
{"name":"본오1동","rate":4.88,"votes":{"early":{"rate":4.42,"count":143},"polling":{"rate":5.04,"count":465}}},
{"name":"본오2동","rate":4.72,"votes":{"early":{"rate":3.52,"count":66},"polling":{"rate":4.99,"count":411}}},
{"name":"본오3동","rate":5.26,"votes":{"early":{"rate":5.01,"count":131},"polling":{"rate":5.37,"count":306}}},
{"name":"반월동","rate":4.27,"votes":{"early":{"rate":3.45,"count":98},"polling":{"rate":4.65,"count":287}}}] },

  // [149] 기초의원   | 조성한 | 대전 유성구 가선거구
  { id: 149, voteRate: 3.24, totalVotes: 1616, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '관외사전투표',
    rate: 4.01,
    votes: {
      absentee: { rate: 4.01, count: 256 }
    }
  },
  {
    name: '진잠동',
    rate: 2.26,
    votes: {
      early: { rate: 1.68, count: 46 },
      polling: { rate: 2.46, count: 187 }
    }
  },
  {
    name: '학하동',
    rate: 3.09,
    votes: {
      early: { rate: 2.90, count: 89 },
      polling: { rate: 3.19, count: 190 }
    }
  },
  {
    name: '원신흥동',
    rate: 3.29,
    votes: {
      early: { rate: 3.17, count: 135 },
      polling: { rate: 3.34, count: 325 }
    }
  },
  {
    name: '상대동',
    rate: 3.85,
    votes: {
      early: { rate: 3.58, count: 92 },
      polling: { rate: 3.95, count: 293 }
    }
  }] },

  // [150] 광역의원   | 장경석 | 인천 옹진군선거구
  { id: 150, voteRate: 9.16, totalVotes: 1126, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 6.35,
  votes: { absentee: { rate: 6.35, count: 126 } }
},
{ name: '북도면', rate: 7.58,
  votes: {
    early: { rate: 7.69, count: 26 },
    polling: { rate: 7.53, count: 59 }
  }
},
{ name: '연평면', rate: 8.22,
  votes: {
    early: { rate: 9.84, count: 48 },
    polling: { rate: 6.31, count: 26 }
  }
},
{ name: '백령면', rate: 14.22,
  votes: {
    early: { rate: 15.89, count: 140 },
    polling: { rate: 13.18, count: 186 }
  }
},
{ name: '대청면', rate: 8.13,
  votes: {
    early: { rate: 7.14, count: 25 },
    polling: { rate: 8.87, count: 41 }
  }
},
{ name: '덕적면', rate: 8.18,
  votes: {
    early: { rate: 8.36, count: 31 },
    polling: { rate: 8.08, count: 50 }
  }
},
{ name: '자월면', rate: 9.15,
  votes: {
    early: { rate: 13.22, count: 30 },
    polling: { rate: 7.29, count: 36 }
  }
},
{ name: '영흥면', rate: 8.83,
  votes: {
    early: { rate: 9.15, count: 134 },
    polling: { rate: 8.60, count: 165 }
  }
},] },

  // [151] 기초단체장  | 김윤재 | 서울 용산구청장
  { id: 151, voteRate: 1.69, totalVotes: 1923, result: '후보', quota: 1, districts: [], neighborhoods: [    {
    name: '관외사전투표',
    rate: 2.47,
    votes: {
      absentee: { rate: 2.47, count: 356 }
    }
  },

  {
    name: '후암동',
    rate: 1.45,
    votes: {
      early: { rate: 1.08, count: 29 },
      polling: { rate: 1.65, count: 81 }
    }
  },
  {
    name: '용산2가동',
    rate: 1.06,
    votes: {
      early: { rate: 0.88, count: 14 },
      polling: { rate: 1.17, count: 30 }
    }
  },
  {
    name: '남영동',
    rate: 1.75,
    votes: {
      early: { rate: 1.40, count: 11 },
      polling: { rate: 1.88, count: 41 }
    }
  },
  {
    name: '청파동',
    rate: 2.02,
    votes: {
      early: { rate: 1.41, count: 35 },
      polling: { rate: 2.26, count: 140 }
    }
  },
  {
    name: '원효로제1동',
    rate: 1.77,
    votes: {
      early: { rate: 1.58, count: 44 },
      polling: { rate: 1.85, count: 111 }
    }
  },
  {
    name: '원효로제2동',
    rate: 1.75,
    votes: {
      early: { rate: 1.40, count: 27 },
      polling: { rate: 1.89, count: 94 }
    }
  },
  {
    name: '효창동',
    rate: 1.52,
    votes: {
      early: { rate: 1.65, count: 34 },
      polling: { rate: 1.45, count: 53 }
    }
  },
  {
    name: '용문동',
    rate: 1.39,
    votes: {
      early: { rate: 1.27, count: 30 },
      polling: { rate: 1.45, count: 57 }
    }
  },
  {
    name: '한강로동',
    rate: 1.72,
    votes: {
      early: { rate: 1.97, count: 48 },
      polling: { rate: 1.65, count: 130 }
    }
  },
  {
    name: '이촌제1동',
    rate: 1.54,
    votes: {
      early: { rate: 1.36, count: 52 },
      polling: { rate: 1.62, count: 153 }
    }
  },
  {
    name: '이촌제2동',
    rate: 1.17,
    votes: {
      early: { rate: 1.36, count: 16 },
      polling: { rate: 1.11, count: 37 }
    }
  },
  {
    name: '이태원제1동',
    rate: 1.24,
    votes: {
      early: { rate: 1.62, count: 11 },
      polling: { rate: 1.11, count: 21 }
    }
  },
  {
    name: '이태원제2동',
    rate: 1.23,
    votes: {
      early: { rate: 1.04, count: 12 },
      polling: { rate: 1.31, count: 37 }
    }
  },
  {
    name: '한남동',
    rate: 1.32,
    votes: {
      early: { rate: 1.71, count: 20 },
      polling: { rate: 1.22, count: 56 }
    }
  },
  {
    name: '서빙고동',
    rate: 1.58,
    votes: {
      early: { rate: 1.10, count: 12 },
      polling: { rate: 1.69, count: 76 }
    }
  },
  {
    name: '보광동',
    rate: 1.79,
    votes: {
      early: { rate: 1.91, count: 24 },
      polling: { rate: 1.69, count: 28 }
    }
  }] },

  // [152] 기초단체장  | 정찬옥 | 서울 성동구청장
  { id: 152, voteRate: 2.21, totalVotes: 3571, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '관외사전투표',
    rate: 2.71,
    votes: {
      absentee: { rate: 2.71, count: 465 }
    }
  },

  {
    name: '금호1가동',
    rate: 2.42,
    votes: {
      early: { rate: 2.00, count: 34 },
      polling: { rate: 2.53, count: 139 }
    }
  },
  {
    name: '금호2·3가동',
    rate: 2.95,
    votes: {
      early: { rate: 2.39, count: 72 },
      polling: { rate: 3.19, count: 246 }
    }
  },
  {
    name: '금호4가동',
    rate: 2.49,
    votes: {
      early: { rate: 2.44, count: 66 },
      polling: { rate: 2.57, count: 124 }
    }
  },
  {
    name: '옥수동',
    rate: 1.75,
    votes: {
      early: { rate: 1.22, count: 40 },
      polling: { rate: 1.92, count: 193 }
    }
  },
  {
    name: '왕십리도선동',
    rate: 1.79,
    votes: {
      early: { rate: 1.33, count: 45 },
      polling: { rate: 1.92, count: 186 }
    }
  },
  {
    name: '왕십리제2동',
    rate: 1.72,
    votes: {
      early: { rate: 1.91, count: 56 },
      polling: { rate: 1.64, count: 97 }
    }
  },
  {
    name: '행당제1동',
    rate: 2.03,
    votes: {
      early: { rate: 1.82, count: 44 },
      polling: { rate: 2.12, count: 128 }
    }
  },
  {
    name: '행당제2동',
    rate: 1.73,
    votes: {
      early: { rate: 1.58, count: 57 },
      polling: { rate: 1.78, count: 152 }
    }
  },
  {
    name: '마장동',
    rate: 2.43,
    votes: {
      early: { rate: 2.37, count: 72 },
      polling: { rate: 2.45, count: 208 }
    }
  },
  {
    name: '사근동',
    rate: 4.17,
    votes: {
      early: { rate: 3.25, count: 47 },
      polling: { rate: 4.34, count: 177 }
    }
  },
  {
    name: '송정동',
    rate: 1.93,
    votes: {
      early: { rate: 1.66, count: 24 },
      polling: { rate: 1.97, count: 63 }
    }
  },
  {
    name: '용답동',
    rate: 2.52,
    votes: {
      early: { rate: 2.67, count: 58 },
      polling: { rate: 2.45, count: 102 }
    }
  },
  {
    name: '응봉동',
    rate: 1.41,
    votes: {
      early: { rate: 1.18, count: 29 },
      polling: { rate: 1.53, count: 77 }
    }
  },
  {
    name: '성수1가제1동',
    rate: 1.99,
    votes: {
      early: { rate: 1.83, count: 34 },
      polling: { rate: 2.02, count: 110 }
    }
  },
  {
    name: '성수1가제2동',
    rate: 2.18,
    votes: {
      early: { rate: 2.16, count: 58 },
      polling: { rate: 2.16, count: 128 }
    }
  },
  {
    name: '성수2가제1동',
    rate: 1.75,
    votes: {
      early: { rate: 1.32, count: 34 },
      polling: { rate: 1.99, count: 92 }
    }
  },
  {
    name: '성수2가제3동',
    rate: 1.97,
    votes: {
      early: { rate: 1.95, count: 34 },
      polling: { rate: 1.92, count: 69 }
    }
  }] },

  // [153] 기초의원   | 이민희 | 광주 광산구 가선거구
  { id: 153, voteRate: 3.04, totalVotes: 1038, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 3.74, votes: { absentee: { rate: 3.74, count: 176 } } },
{ name: '송정1동', rate: 2.57, votes: { early: { rate: 1.95, count: 33 }, polling: { rate: 3.01, count: 70 } } },
{ name: '송정2동', rate: 2.71, votes: { early: { rate: 2.69, count: 29 }, polling: { rate: 2.72, count: 36 } } },
{ name: '도산동', rate: 2.95, votes: { early: { rate: 2.02, count: 58 }, polling: { rate: 3.82, count: 120 } } },
{ name: '어룡동', rate: 3.57, votes: { early: { rate: 2.64, count: 126 }, polling: { rate: 4.05, count: 309 } } },
{ name: '동곡동', rate: 1.09, votes: { early: { rate: 0.71, count: 3 }, polling: { rate: 1.49, count: 6 } } },
{ name: '평동', rate: 2.33, votes: { early: { rate: 2.08, count: 27 }, polling: { rate: 2.75, count: 22 } } },
{ name: '삼도동', rate: 1.19, votes: { early: { rate: 1.07, count: 5 }, polling: { rate: 1.30, count: 6 } } },
{ name: '본량동', rate: 0.91, votes: { early: { rate: 1.30, count: 5 }, polling: { rate: 0.52, count: 2 } } },] },

  // [154] 기초의원   | 손득호 | 강원특별자치도 동해시 가선거구
  { id: 154, voteRate: 6.12, totalVotes: 1270, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 4.79, votes: { absentee: { rate: 4.79, count: 90 } } },
{ name: '송정동', rate: 3.11, votes: { early: { rate: 3.14, count: 18 }, polling: { rate: 3.10, count: 32 } } },
{ name: '북삼동', rate: 6.22, votes: { early: { rate: 5.83, count: 237 }, polling: { rate: 6.57, count: 366 } } },
{ name: '북평동', rate: 5.18, votes: { early: { rate: 4.95, count: 116 }, polling: { rate: 5.67, count: 199 } } },
{ name: '삼화동', rate: 13.80, votes: { early: { rate: 12.48, count: 74 }, polling: { rate: 14.76, count: 120 } } },] },

  // [155] 기초의원   | 이인숙 | 충북 청주시 하선거구
  { id: 155, voteRate: 3.57, totalVotes: 786, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '관외사전투표',
    rate: 4.05,
    votes: {
      absentee: { rate: 4.05, count: 112 }
    }
  },
  {
    name: '율량·사천동',
    rate: 3.50,
    votes: {
      early: { rate: 3.65, count: 147 },
      polling: { rate: 3.46, count: 522 }
    }
  }] },

  // [156] 기초의원   | 이완복 | 충북 청주시 마선거구
  { id: 156, voteRate: 4.23, totalVotes: 1309, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '관외사전투표',
    rate: 4.67,
    votes: {
      absentee: { rate: 4.67, count: 177 }
    }
  },
  {
    name: '사직제1동',
    rate: 3.68,
    votes: {
      early: { rate: 3.59, count: 17 },
      polling: { rate: 3.71, count: 53 }
    }
  },
  {
    name: '사직제2동',
    rate: 3.37,
    votes: {
      early: { rate: 3.37, count: 27 },
      polling: { rate: 3.38, count: 126 }
    }
  },
  {
    name: '모충동',
    rate: 4.07,
    votes: {
      early: { rate: 2.78, count: 45 },
      polling: { rate: 4.38, count: 299 }
    }
  },
  {
    name: '수곡제1동',
    rate: 6.06,
    votes: {
      early: { rate: 7.54, count: 85 },
      polling: { rate: 5.63, count: 216 }
    }
  },
  {
    name: '수곡제2동',
    rate: 3.63,
    votes: {
      early: { rate: 3.17, count: 79 },
      polling: { rate: 3.88, count: 182 }
    }
  }] },

  // [157] 기초의원   | 서태모 | 충남 서산시 마선거구
  { id: 157, voteRate: 4.13, totalVotes: 584, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":2.63,"votes":{"absentee":{"rate":2.63,"count":37}}},
{"name":"음암면","rate":1.31,"votes":{"early":{"rate":1.4,"count":15},"polling":{"rate":1.29,"count":39}}},
{"name":"운산면","rate":1.49,"votes":{"early":{"rate":1.22,"count":11},"polling":{"rate":1.64,"count":28}}},
{"name":"해미면","rate":4.22,"votes":{"early":{"rate":3.69,"count":54},"polling":{"rate":4.58,"count":100}}},
{"name":"고북면","rate":12.93,"votes":{"early":{"rate":13.18,"count":77},"polling":{"rate":12.84,"count":219}}}] },

  // [158] 기초의원   | 손영훈 | 충남 계룡시 가선거구
  { id: 158, voteRate: 2.31, totalVotes: 344, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":3.15,"votes":{"absentee":{"rate":3.15,"count":50}}},
{"name":"두마면","rate":1.8,"votes":{"early":{"rate":1.26,"count":25},"polling":{"rate":2.06,"count":88}}},
{"name":"신도안면","rate":3.82,"votes":{"early":{"rate":3.28,"count":41},"polling":{"rate":4.28,"count":63}}},
{"name":"금암동","rate":1.76,"votes":{"early":{"rate":1.88,"count":33},"polling":{"rate":1.67,"count":41}}},] },

  // [159] 기초의원   | 최재혁 | 서울 서대문구 마선거구
  { id: 159, voteRate: 1.88, totalVotes: 980, result: '후보', quota: 1, districts: [], neighborhoods: [  {
    name: '관외사전투표',
    rate: 3.03,
    votes: {
      absentee: { rate: 3.03, count: 148 }
    }
  },
  {
    name: '남가좌제1동',
    rate: 2.23,
    votes: {
      early: { rate: 1.91, count: 81 },
      polling: { rate: 2.46, count: 149 }
    }
  },
  {
    name: '남가좌제2동',
    rate: 1.77,
    votes: {
      early: { rate: 1.46, count: 46 },
      polling: { rate: 1.87, count: 178 }
    }
  },
  {
    name: '북가좌제1동',
    rate: 1.99,
    votes: {
      early: { rate: 1.50, count: 61 },
      polling: { rate: 2.33, count: 134 }
    }
  },
  {
    name: '북가좌제2동',
    rate: 1.30,
    votes: {
      early: { rate: 1.01, count: 45 },
      polling: { rate: 1.43, count: 138 }
    }
  }] },

  // [160] 기초의원   | 김범일 | 서울 양천구 가선거구
  { id: 160, voteRate: 4.52, totalVotes: 1216, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":5,"votes":{"absentee":{"rate":5,"count":165}}},
{"name":"목2동","rate":5.23,"votes":{"early":{"rate":4.4,"count":195},"polling":{"rate":5.63,"count":527}}},
{"name":"목3동","rate":3.38,"votes":{"early":{"rate":3.1,"count":100},"polling":{"rate":3.52,"count":229}}}] },

  // [161] 기초단체장  | 방인섭 | 울산 남구청장
  { id: 161, voteRate: 4.96, totalVotes: 8077, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 5.72,
  votes: { absentee: { rate: 5.72, count: 974 } }
},

{ name: '신정1동', rate: 3.82,
  votes: {
    early: { rate: 3.94, count: 110 },
    polling: { rate: 3.77, count: 259 }
  }
},

{ name: '신정2동', rate: 4.32,
  votes: {
    early: { rate: 4.76, count: 117 },
    polling: { rate: 4.21, count: 394 }
  }
},

{ name: '신정3동', rate: 4.23,
  votes: {
    early: { rate: 4.86, count: 113 },
    polling: { rate: 3.96, count: 217 }
  }
},

{ name: '신정4동', rate: 4.02,
  votes: {
    early: { rate: 4.26, count: 121 },
    polling: { rate: 3.92, count: 269 }
  }
},

{ name: '신정5동', rate: 4.37,
  votes: {
    early: { rate: 4.53, count: 66 },
    polling: { rate: 4.30, count: 133 }
  }
},

{ name: '달동', rate: 5.11,
  votes: {
    early: { rate: 4.68, count: 113 },
    polling: { rate: 5.23, count: 504 }
  }
},

{ name: '삼산동', rate: 7.22,
  votes: {
    early: { rate: 7.79, count: 403 },
    polling: { rate: 7.05, count: 1156 }
  }
},

{ name: '삼호동', rate: 3.71,
  votes: {
    early: { rate: 4.01, count: 138 },
    polling: { rate: 3.56, count: 266 }
  }
},

{ name: '무거동', rate: 3.86,
  votes: {
    early: { rate: 4.08, count: 139 },
    polling: { rate: 3.78, count: 466 }
  }
},

{ name: '옥동', rate: 3.56,
  votes: {
    early: { rate: 3.08, count: 104 },
    polling: { rate: 3.72, count: 367 }
  }
},

{ name: '야음장생포동', rate: 5.23,
  votes: {
    early: { rate: 8.16, count: 72 },
    polling: { rate: 6.88, count: 214 }
  }
},

{ name: '대현동', rate: 4.30,
  votes: {
    early: { rate: 4.20, count: 188 },
    polling: { rate: 4.35, count: 476 }
  }
},

{ name: '수암동', rate: 5.34,
  votes: {
    early: { rate: 5.21, count: 133 },
    polling: { rate: 5.40, count: 319 }
  }
},

{ name: '선암동', rate: 3.59,
  votes: {
    early: { rate: 4.90, count: 47 },
    polling: { rate: 3.36, count: 180 }
  }
}] },

  // [162] 기초단체장  | 조중연 | 충남 서천군수
  { id: 162, voteRate: 2.02, totalVotes: 584, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 2.54,
  votes: { absentee: { rate: 2.54, count: 70 } }
},

{ name: '장항읍', rate: 2.15,
  votes: {
    early: { rate: 2.09, count: 46 },
    polling: { rate: 2.19, count: 74 }
  }
},

{ name: '서천읍', rate: 2.30,
  votes: {
    early: { rate: 2.54, count: 72 },
    polling: { rate: 2.14, count: 86 }
  }
},

{ name: '마서면', rate: 2.17,
  votes: {
    early: { rate: 1.76, count: 13 },
    polling: { rate: 2.39, count: 37 }
  }
},

{ name: '화양면', rate: 2.34,
  votes: {
    early: { rate: 2.12, count: 8 },
    polling: { rate: 2.45, count: 19 }
  }
},

{ name: '기산면', rate: 1.62,
  votes: {
    early: { rate: 1.85, count: 7 },
    polling: { rate: 1.43, count: 7 }
  }
},

{ name: '한산면', rate: 1.69,
  votes: {
    early: { rate: 1.78, count: 12 },
    polling: { rate: 1.60, count: 12 }
  }
},

{ name: '마산면', rate: 0.51,
  votes: {
    early: { rate: 0.00, count: 0 },
    polling: { rate: 0.79, count: 4 }
  }
},

{ name: '시초면', rate: 1.26,
  votes: {
    early: { rate: 1.56, count: 4 },
    polling: { rate: 1.06, count: 4 }
  }
},

{ name: '문산면', rate: 2.07,
  votes: {
    early: { rate: 1.08, count: 3 },
    polling: { rate: 2.68, count: 12 }
  }
},

{ name: '판교면', rate: 1.85,
  votes: {
    early: { rate: 1.20, count: 7 },
    polling: { rate: 2.43, count: 16 }
  }
},

{ name: '종천면', rate: 1.74,
  votes: {
    early: { rate: 1.66, count: 9 },
    polling: { rate: 1.81, count: 12 }
  }
},

{ name: '비인면', rate: 1.32,
  votes: {
    early: { rate: 0.73, count: 6 },
    polling: { rate: 1.16, count: 11 }
  }
},

{ name: '서면', rate: 1.45,
  votes: {
    early: { rate: 1.44, count: 12 },
    polling: { rate: 1.46, count: 20 }
  }
}] },

  // [163] 광역의원   | 김장호 | 울산광역시 남구 제4선거구
  { id: 163, voteRate: 6.50, totalVotes: 1804, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 5.24,
  votes: { absentee: { rate: 5.24, count: 138 } }
},
{ name: '삼산동', rate: 6.76,
  votes: {
    early: { rate: 7.09, count: 361 },
    polling: { rate: 6.66, count: 1069 }
  }
},
{ name: '야음장생포동', rate: 5.87,
  votes: {
    early: { rate: 6.86, count: 59 },
    polling: { rate: 5.59, count: 171 }
  }
},] },

  // [164] 광역의원   | 최신성 | 울산광역시 남구 제5선거구
  { id: 164, voteRate: 9.43, totalVotes: 2138, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 9.30,
  votes: { absentee: { rate: 9.30, count: 231 } }
},
{ name: '달동', rate: 9.07,
  votes: {
    early: { rate: 8.07, count: 188 },
    polling: { rate: 9.31, count: 879 }
  }
},
{ name: '수암동', rate: 10.06,
  votes: {
    early: { rate: 10.22, count: 257 },
    polling: { rate: 9.99, count: 578 }
  }
},] },

  // [165] 광역의원   | 김소라 | 울산광역시 남구 제6선거구
  { id: 165, voteRate: 4.83, totalVotes: 1149, result: '후보', quota: 1, districts: [], neighborhoods: [{ name: '관외사전투표', rate: 5.20,
  votes: { absentee: { rate: 5.20, count: 116 } }
},
{ name: '대현동', rate: 5.19,
  votes: {
    early: { rate: 4.28, count: 189 },
    polling: { rate: 5.57, count: 597 }
  }
},
{ name: '선암동', rate: 3.83,
  votes: {
    early: { rate: 4.34, count: 41 },
    polling: { rate: 3.74, count: 196 }
  }
},] },

  // [166] 기초의원   | 정일경 | 울산 남구 마선거구
  { id: 166, voteRate: 3.66, totalVotes: 824, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":3.98,"votes":{"absentee":{"rate":3.98,"count":99}}},
{"name":"달동","rate":3.58,"votes":{"early":{"rate":4.1,"count":97},"polling":{"rate":3.45,"count":322}}},
{"name":"수암동","rate":3.69,"votes":{"early":{"rate":3.85,"count":97},"polling":{"rate":3.61,"count":208}}}] },

  // [167] 기초의원   | 김근우 | 울산 남구 바선거구
  { id: 167, voteRate: 2.97, totalVotes: 693, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":3.56,"votes":{"absentee":{"rate":3.56,"count":86}}},
{"name":"대현동","rate":3.03,"votes":{"early":{"rate":3.04,"count":134},"polling":{"rate":3.02,"count":319}}},
{"name":"선암동","rate":2.62,"votes":{"early":{"rate":2.13,"count":20},"polling":{"rate":2.71,"count":133}}}] },

  // [168] 기초의원   | 박소영 | 울산 남구 나선거구
  { id: 168, voteRate: 3.41, totalVotes: 867, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":4.32,"votes":{"absentee":{"rate":4.32,"count":125}}},
{"name":"신정4동","rate":3.96,"votes":{"early":{"rate":3.85,"count":108},"polling":{"rate":4.01,"count":268}}},
{"name":"옥동","rate":2.79,"votes":{"early":{"rate":2.13,"count":71},"polling":{"rate":3.02,"count":291}}}] },

  // [169] 재보궐선거  | 김동칠 | 울산 남구 갑
  { id: 169, voteRate: 2.51, totalVotes: 2289, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":3.73,"votes":{"absentee":{"rate":3.73,"count":338}}},
{"name":"신정1동","rate":2.15,"votes":{"early":{"rate":2.23,"count":60},"polling":{"rate":2.12,"count":142}}},
{"name":"신정2동","rate":2.23,"votes":{"early":{"rate":2.27,"count":55},"polling":{"rate":2.23,"count":205}}},
{"name":"신정3동","rate":2.45,"votes":{"early":{"rate":2.37,"count":51},"polling":{"rate":2.48,"count":133}}},
{"name":"신정4동","rate":2.91,"votes":{"early":{"rate":2.35,"count":65},"polling":{"rate":3.15,"count":212}}},
{"name":"신정5동","rate":3.08,"votes":{"early":{"rate":3.34,"count":48},"polling":{"rate":2.95,"count":90}}},
{"name":"삼호동","rate":2.18,"votes":{"early":{"rate":2.55,"count":85},"polling":{"rate":2.01,"count":147}}},
{"name":"무거동","rate":2.35,"votes":{"early":{"rate":2.68,"count":88},"polling":{"rate":2.26,"count":273}}},
{"name":"옥동","rate":2.2,"votes":{"early":{"rate":1.73,"count":57},"polling":{"rate":2.36,"count":229}}}] },

  // [170] 재보궐선거  | 정승연 | 인천 연수 갑
  { id: 170, voteRate: 9.66, totalVotes: 9677, result: '후보', quota: 1, districts: [], neighborhoods: [{"name":"관외사전투표","rate":8.44,"votes":{"absentee":{"rate":8.44,"count":836}}},
{"name":"옥련1동","rate":8.78,"votes":{"early":{"rate":7.47,"count":138},"polling":{"rate":9.23,"count":502}}},
{"name":"옥련2동","rate":8.32,"votes":{"early":{"rate":7.48,"count":246},"polling":{"rate":8.75,"count":558}}},
{"name":"선학동","rate":9.12,"votes":{"early":{"rate":7.34,"count":191},"polling":{"rate":9.91,"count":578}}},
{"name":"연수1동","rate":10.26,"votes":{"early":{"rate":9.15,"count":220},"polling":{"rate":10.82,"count":524}}},
{"name":"연수2동","rate":11.12,"votes":{"early":{"rate":9.67,"count":280},"polling":{"rate":11.74,"count":792}}},
{"name":"연수3동","rate":10.59,"votes":{"early":{"rate":8.91,"count":217},"polling":{"rate":11.4,"count":580}}},
{"name":"청학동","rate":8.96,"votes":{"early":{"rate":7.71,"count":227},"polling":{"rate":9.46,"count":687}}},
{"name":"동춘1동","rate":9.32,"votes":{"early":{"rate":8.09,"count":293},"polling":{"rate":9.84,"count":847}}},
{"name":"동춘2동","rate":9.55,"votes":{"early":{"rate":8.75,"count":267},"polling":{"rate":9.99,"count":563}}},
{"name":"동춘3동","rate":12.18,"votes":{"early":{"rate":11.34,"count":359},"polling":{"rate":12.64,"count":736}}}] }

];

// ── 비례대표 득표율 데이터 ────────────────────────────────────────
// 광역의원 비례
var REGIONAL = [
{ name:'서울', rate:3.66, votes: 191190, seats:0, type:'광역',
    districts:[
      {name:'종로구', rate:3.60, votes:2836}, {name:'중구', rate:3.63, votes:2513}, {name:'용산구', rate:3.68, votes:4175},
      {name:'성동구', rate:3.67, votes:5927}, {name:'광진구', rate:3.53, votes:6637}, {name:'동대문구', rate:3.61, votes:7210},
      {name:'중랑구', rate:2.51, votes:5201}, {name:'성북구', rate:3.58, votes:8497}, {name:'강북구', rate:2.20, votes:3316},
      {name:'도봉구', rate:2.60, votes:4437}, {name:'노원구', rate:3.72, votes:10231}, {name:'은평구', rate:2.78, votes:6994},
      {name:'서대문구', rate:4.07, votes:7025}, {name:'마포구', rate:3.72, votes:7631}, {name:'양천구', rate:3.23, votes:7695},
      {name:'강서구', rate:3.03, votes:9136}, {name:'구로구', rate:3.29, votes:7101}, {name:'금천구', rate:2.83, votes:3427},
      {name:'영등포구', rate:4.15, votes:8872}, {name:'동작구', rate:5.62, votes:12203}, {name:'관악구', rate:4.76, votes:12396},
      {name:'서초구', rate:4.45, votes:10314}, {name:'강남구', rate:4.47, votes:13056}, {name:'송파구', rate:3.80, votes:14022},
      {name:'강동구', rate:3.67, votes:10338}
    ],
neighborhoods: [
{
    "name": "종로구_관외사전투표",
    "rate": 4.56,
    "votes": {
      "absentee": { "rate": 4.56, "count": 403 }
    }
  },
  {
    "name": "청운효자동",
    "rate": 3.11,
    "votes": {
      "polling": { "rate": 3.33, "count": 122 },
      "early": { "rate": 2.76, "count": 64 }
    }
  },
  {
    "name": "사직동",
    "rate": 3.60,
    "votes": {
      "polling": { "rate": 3.75, "count": 113 },
      "early": { "rate": 3.24, "count": 42 }
    }
  },
  {
    "name": "삼청동",
    "rate": 2.19,
    "votes": {
      "polling": { "rate": 2.15, "count": 16 },
      "early": { "rate": 2.30, "count": 7 }
    }
  },
  {
    "name": "부암동",
    "rate": 2.84,
    "votes": {
      "polling": { "rate": 3.22, "count": 102 },
      "early": { "rate": 1.90, "count": 24 }
    }
  },
  {
    "name": "평창동",
    "rate": 2.37,
    "votes": {
      "polling": { "rate": 2.18, "count": 133 },
      "early": { "rate": 2.86, "count": 69 }
    }
  },
  {
    "name": "무악동",
    "rate": 3.86,
    "votes": {
      "polling": { "rate": 4.33, "count": 119 },
      "early": { "rate": 3.06, "count": 49 }
    }
  },
  {
    "name": "교남동",
    "rate": 4.43,
    "votes": {
      "polling": { "rate": 4.77, "count": 167 },
      "early": { "rate": 3.77, "count": 67 }
    }
  },
  {
    "name": "가회동",
    "rate": 2.68,
    "votes": {
      "polling": { "rate": 3.42, "count": 39 },
      "early": { "rate": 1.57, "count": 12 }
    }
  },
  {
    "name": "종로1·2·3·4가동",
    "rate": 3.61,
    "votes": {
      "polling": { "rate": 3.82, "count": 74 },
      "early": { "rate": 3.16, "count": 29 }
    }
  },
  {
    "name": "종로5·6가동",
    "rate": 4.97,
    "votes": {
      "polling": { "rate": 6.08, "count": 100 },
      "early": { "rate": 2.60, "count": 20 }
    }
  },
  {
    "name": "이화동",
    "rate": 3.81,
    "votes": {
      "polling": { "rate": 4.32, "count": 101 },
      "early": { "rate": 2.88, "count": 37 }
    }
  },
  {
    "name": "혜화동",
    "rate": 5.86,
    "votes": {
      "polling": { "rate": 6.08, "count": 329 },
      "early": { "rate": 5.44, "count": 160 }
    }
  },
  {
    "name": "창신제1동",
    "rate": 2.40,
    "votes": {
      "polling": { "rate": 2.95, "count": 42 },
      "early": { "rate": 1.86, "count": 27 }
    }
  },
  {
    "name": "창신제2동",
    "rate": 1.31,
    "votes": {
      "polling": { "rate": 1.28, "count": 30 },
      "early": { "rate": 1.37, "count": 19 }
    }
  },
  {
    "name": "창신제3동",
    "rate": 2.48,
    "votes": {
      "polling": { "rate": 2.46, "count": 49 },
      "early": { "rate": 2.50, "count": 33 }
    }
  },
  {
    "name": "숭인제1동",
    "rate": 2.41,
    "votes": {
      "polling": { "rate": 2.76, "count": 49 },
      "early": { "rate": 1.81, "count": 19 }
    }
  },
  {
    "name": "숭인제2동",
    "rate": 3.27,
    "votes": {
      "polling": { "rate": 3.53, "count": 115 },
      "early": { "rate": 2.73, "count": 44 }
    }
  },
 {
    "name": "중구_관외사전투표",
    "rate": 3.83,
    "votes": {
      "absentee": { "rate": 3.83, "count": 352 }
    }
  },
  {
    "name": "소공동",
    "rate": 4.28,
    "votes": {
      "polling": { "rate": 4.51, "count": 33 },
      "early": { "rate": 3.85, "count": 15 }
    }
  },
  {
    "name": "회현동",
    "rate": 3.57,
    "votes": {
      "polling": { "rate": 3.35, "count": 45 },
      "early": { "rate": 4.04, "count": 26 }
    }
  },
  {
    "name": "명동",
    "rate": 2.56,
    "votes": {
      "polling": { "rate": 3.46, "count": 22 },
      "early": { "rate": 0.88, "count": 3 }
    }
  },
  {
    "name": "필동",
    "rate": 4.04,
    "votes": {
      "polling": { "rate": 4.21, "count": 62 },
      "early": { "rate": 3.74, "count": 29 }
    }
  },
  {
    "name": "장충동",
    "rate": 4.51,
    "votes": {
      "polling": { "rate": 4.87, "count": 76 },
      "early": { "rate": 3.63, "count": 23 }
    }
  },
  {
    "name": "광희동",
    "rate": 4.63,
    "votes": {
      "polling": { "rate": 4.68, "count": 92 },
      "early": { "rate": 4.47, "count": 23 }
    }
  },
  {
    "name": "을지로동",
    "rate": 4.98,
    "votes": {
      "polling": { "rate": 4.99, "count": 52 },
      "early": { "rate": 4.97, "count": 30 }
    }
  },
  {
    "name": "신당동",
    "rate": 2.61,
    "votes": {
      "polling": { "rate": 2.58, "count": 63 },
      "early": { "rate": 2.67, "count": 27 }
    }
  },
  {
    "name": "다산동",
    "rate": 2.62,
    "votes": {
      "polling": { "rate": 2.82, "count": 123 },
      "early": { "rate": 2.11, "count": 35 }
    }
  },
  {
    "name": "약수동",
    "rate": 3.15,
    "votes": {
      "polling": { "rate": 3.33, "count": 213 },
      "early": { "rate": 2.65, "count": 60 }
    }
  },
  {
    "name": "청구동",
    "rate": 4.16,
    "votes": {
      "polling": { "rate": 4.24, "count": 196 },
      "early": { "rate": 3.89, "count": 52 }
    }
  },
  {
    "name": "신당제5동",
    "rate": 3,
    "votes": {
      "polling": { "rate": 3.16, "count": 96 },
      "early": { "rate": 2.76, "count": 57 }
    }
  },
  {
    "name": "동화동",
    "rate": 3.18,
    "votes": {
      "polling": { "rate": 3.59, "count": 127 },
      "early": { "rate": 2.41, "count": 45 }
    }
  },
  {
    "name": "황학동",
    "rate": 3.73,
    "votes": {
      "polling": { "rate": 3.77, "count": 176 },
      "early": { "rate": 3.65, "count": 66 }
    }
  },
  {
    "name": "중림동",
    "rate": 4.7,
    "votes": {
      "polling": { "rate": 4.71, "count": 207 },
      "early": { "rate": 4.68, "count": 87 }
    }
  },
  {
    "name": "용산구_관외사전투표",
    "rate": 4.33,
    "votes": {
      "absentee": { "rate": 4.33, "count": 625 }
    }
  },
  {
    "name": "후암동",
    "rate": 2.96,
    "votes": {
      "polling": { "rate": 3.03, "count": 149 },
      "early": { "rate": 2.83, "count": 76 }
    }
  },
  {
    "name": "용산2가동",
    "rate": 2.43,
    "votes": {
      "polling": { "rate": 2.52, "count": 65 },
      "early": { "rate": 2.27, "count": 36 }
    }
  },
  {
    "name": "남영동",
    "rate": 3.47,
    "votes": {
      "polling": { "rate": 3.67, "count": 80 },
      "early": { "rate": 2.93, "count": 23 }
    }
  },
  {
    "name": "청파동",
    "rate": 3.31,
    "votes": {
      "polling": { "rate": 3.49, "count": 216 },
      "early": { "rate": 2.86, "count": 71 }
    }
  },
  {
    "name": "원효로제1동",
    "rate": 4.17,
    "votes": {
      "polling": { "rate": 3.73, "count": 223 },
      "early": { "rate": 5.12, "count": 143 }
    }
  },
  {
    "name": "원효로제2동",
    "rate": 3.49,
    "votes": {
      "polling": { "rate": 3.58, "count": 178 },
      "early": { "rate": 3.25, "count": 63 }
    }
  },
  {
    "name": "효창동",
    "rate": 3.69,
    "votes": {
      "polling": { "rate": 3.53, "count": 129 },
      "early": { "rate": 3.96, "count": 82 }
    }
  },
  {
    "name": "용문동",
    "rate": 3.34,
    "votes": {
      "polling": { "rate": 3.27, "count": 128 },
      "early": { "rate": 3.46, "count": 82 }
    }
  },
  {
    "name": "한강로동",
    "rate": 4.69,
    "votes": {
      "polling": { "rate": 4.58, "count": 362 },
      "early": { "rate": 5.03, "count": 123 }
    }
  },
  {
    "name": "이촌제1동",
    "rate": 4.53,
    "votes": {
      "polling": { "rate": 4.50, "count": 425 },
      "early": { "rate": 4.61, "count": 177 }
    }
  },
  {
    "name": "이촌제2동",
    "rate": 3.01,
    "votes": {
      "polling": { "rate": 3.02, "count": 101 },
      "early": { "rate": 2.98, "count": 35 }
    }
  },
  {
    "name": "이태원제1동",
    "rate": 3.03,
    "votes": {
      "polling": { "rate": 3.07, "count": 58 },
      "early": { "rate": 2.94, "count": 20 }
    }
  },
  {
    "name": "이태원제2동",
    "rate": 2.59,
    "votes": {
      "polling": { "rate": 2.73, "count": 77 },
      "early": { "rate": 2.26, "count": 26 }
    }
  },
  {
    "name": "한남동",
    "rate": 2.53,
    "votes": {
      "polling": { "rate": 2.39, "count": 110 },
      "early": { "rate": 3.08, "count": 36 }
    }
  },
  {
    "name": "서빙고동",
    "rate": 3.19,
    "votes": {
      "polling": { "rate": 3.48, "count": 156 },
      "early": { "rate": 2.01, "count": 22 }
    }
  },
  {
    "name": "보광동",
    "rate": 2.41,
    "votes": {
      "polling": { "rate": 2.54, "count": 42 },
      "early": { "rate": 2.23, "count": 28 }
    }
  },
{
    "name": "성동구_관외사전투표",
    "rate": 4.34,
    "votes": {
      "absentee": { "rate": 4.34, "count": 764 }
    }
  },
  {
    "name": "금호1가동",
    "rate": 3.06,
    "votes": {
      "polling": { "rate": 3.15, "count": 174 },
      "early": { "rate": 2.76, "count": 47 }
    }
  },
  {
    "name": "금호2·3가동",
    "rate": 3.23,
    "votes": {
      "polling": { "rate": 3.57, "count": 275 },
      "early": { "rate": 2.39, "count": 72 }
    }
  },
  {
    "name": "금호4가동",
    "rate": 3.49,
    "votes": {
      "polling": { "rate": 4.13, "count": 209 },
      "early": { "rate": 2.29, "count": 62 }
    }
  },
  {
    "name": "옥수동",
    "rate": 3.99,
    "votes": {
      "polling": { "rate": 4.05, "count": 410 },
      "early": { "rate": 3.79, "count": 124 }
    }
  },
  {
    "name": "왕십리도선동",
    "rate": 3.57,
    "votes": {
      "polling": { "rate": 3.73, "count": 361 },
      "early": { "rate": 3.11, "count": 105 }
    }
  },
  {
    "name": "왕십리제2동",
    "rate": 3.26,
    "votes": {
      "polling": { "rate": 3.13, "count": 186 },
      "early": { "rate": 3.54, "count": 104 }
    }
  },
  {
    "name": "행당제1동",
    "rate": 3.87,
    "votes": {
      "polling": { "rate": 3.97, "count": 240 },
      "early": { "rate": 3.61, "count": 87 }
    }
  },
  {
    "name": "행당제2동",
    "rate": 3.57,
    "votes": {
      "polling": { "rate": 3.73, "count": 318 },
      "early": { "rate": 3.21, "count": 116 }
    }
  },
  {
    "name": "마장동",
    "rate": 3.59,
    "votes": {
      "polling": { "rate": 3.60, "count": 307 },
      "early": { "rate": 3.54, "count": 108 }
    }
  },
  {
    "name": "사근동",
    "rate": 6.90,
    "votes": {
      "polling": { "rate": 7.22, "count": 294 },
      "early": { "rate": 6.02, "count": 87 }
    }
  },
  {
    "name": "송정동",
    "rate": 2.72,
    "votes": {
      "polling": { "rate": 2.66, "count": 83 },
      "early": { "rate": 2.84, "count": 41 }
    }
  },
  {
    "name": "용답동",
    "rate": 3.61,
    "votes": {
      "polling": { "rate": 3.52, "count": 152 },
      "early": { "rate": 3.78, "count": 82 }
    }
  },
  {
    "name": "응봉동",
    "rate": 2.86,
    "votes": {
      "polling": { "rate": 2.85, "count": 144 },
      "early": { "rate": 2.89, "count": 71 }
    }
  },
  {
    "name": "성수1가제1동",
    "rate": 3.22,
    "votes": {
      "polling": { "rate": 3.23, "count": 176 },
      "early": { "rate": 3.22, "count": 60 }
    }
  },
  {
    "name": "성수1가제2동",
    "rate": 3.69,
    "votes": {
      "polling": { "rate": 3.79, "count": 223 },
      "early": { "rate": 3.47, "count": 93 }
    }
  },
  {
    "name": "성수2가제1동",
    "rate": 2.19,
    "votes": {
      "polling": { "rate": 2.22, "count": 102 },
      "early": { "rate": 2.14, "count": 55 }
    }
  },
  {
    "name": "성수2가제3동",
    "rate": 3.56,
    "votes": {
      "polling": { "rate": 3.68, "count": 131 },
      "early": { "rate": 3.33, "count": 58 }
    }
  },
{
    "name": "광진구_관외사전투표",
    "rate": 4.02,
    "votes": {
      "absentee": { "rate": 4.02, "count": 804 }
    }
  },
  {
    "name": "중곡제1동",
    "rate": 2.89,
    "votes": {
      "polling": { "rate": 2.85, "count": 141 },
      "early": { "rate": 2.95, "count": 78 }
    }
  },
  {
    "name": "중곡제2동",
    "rate": 2.57,
    "votes": {
      "polling": { "rate": 2.79, "count": 185 },
      "early": { "rate": 2.15, "count": 74 }
    }
  },
  {
    "name": "중곡제3동",
    "rate": 2.31,
    "votes": {
      "polling": { "rate": 2.38, "count": 126 },
      "early": { "rate": 2.17, "count": 54 }
    }
  },
  {
    "name": "중곡제4동",
    "rate": 2.25,
    "votes": {
      "polling": { "rate": 2.45, "count": 244 },
      "early": { "rate": 1.81, "count": 80 }
    }
  },
  {
    "name": "능동",
    "rate": 3.28,
    "votes": {
      "polling": { "rate": 3.27, "count": 128 },
      "early": { "rate": 3.31, "count": 61 }
    }
  },
  {
    "name": "구의제1동",
    "rate": 4.24,
    "votes": {
      "polling": { "rate": 4.72, "count": 367 },
      "early": { "rate": 3.30, "count": 133 }
    }
  },
  {
    "name": "구의제2동",
    "rate": 2.80,
    "votes": {
      "polling": { "rate": 2.93, "count": 260 },
      "early": { "rate": 2.49, "count": 92 }
    }
  },
  {
    "name": "구의제3동",
    "rate": 3.43,
    "votes": {
      "polling": { "rate": 3.36, "count": 355 },
      "early": { "rate": 3.58, "count": 176 }
    }
  },
  {
    "name": "광장동",
    "rate": 4.34,
    "votes": {
      "polling": { "rate": 4.46, "count": 545 },
      "early": { "rate": 4.00, "count": 174 }
    }
  },
  {
    "name": "자양제1동",
    "rate": 3.13,
    "votes": {
      "polling": { "rate": 3.50, "count": 245 },
      "early": { "rate": 2.57, "count": 118 }
    }
  },
  {
    "name": "자양제2동",
    "rate": 3.21,
    "votes": {
      "polling": { "rate": 3.27, "count": 308 },
      "early": { "rate": 3.04, "count": 94 }
    }
  },
  {
    "name": "자양제3동",
    "rate": 3.67,
    "votes": {
      "polling": { "rate": 3.95, "count": 386 },
      "early": { "rate": 3.13, "count": 152 }
    }
  },
  {
    "name": "자양제4동",
    "rate": 3.67,
    "votes": {
      "polling": { "rate": 3.54, "count": 254 },
      "early": { "rate": 3.94, "count": 142 }
    }
  },
  {
    "name": "화양동",
    "rate": 5.27,
    "votes": {
      "polling": { "rate": 5.22, "count": 383 },
      "early": { "rate": 5.42, "count": 149 }
    }
  },
  {
    "name": "군자동",
    "rate": 3.51,
    "votes": {
      "polling": { "rate": 4.01, "count": 250 },
      "early": { "rate": 2.33, "count": 62 }
    }
  },
  {
    "name": "동대문구_관외사전투표",
    "rate": 4.63,
    "votes": {
      "absentee": { "rate": 4.63, "count": 1137 }
    }
  },
  {
    "name": "신설동",
    "rate": 4.23,
    "votes": {
      "polling": { "rate": 4.56, "count": 247 },
      "early": { "rate": 3.22, "count": 56 }
    }
  },
  {
    "name": "용두동",
    "rate": 3.62,
    "votes": {
      "polling": { "rate": 4.10, "count": 314 },
      "early": { "rate": 2.71, "count": 109 }
    }
  },
  {
    "name": "제기동",
    "rate": 3.85,
    "votes": {
      "polling": { "rate": 4.22, "count": 331 },
      "early": { "rate": 2.98, "count": 99 }
    }
  },
  {
    "name": "청량리동",
    "rate": 2.36,
    "votes": {
      "polling": { "rate": 2.36, "count": 163 },
      "early": { "rate": 2.37, "count": 60 }
    }
  },
  {
    "name": "회기동",
    "rate": 6.05,
    "votes": {
      "polling": { "rate": 5.76, "count": 191 },
      "early": { "rate": 6.47, "count": 147 }
    }
  },
  {
    "name": "휘경제1동",
    "rate": 4.10,
    "votes": {
      "polling": { "rate": 4.42, "count": 248 },
      "early": { "rate": 3.39, "count": 87 }
    }
  },
  {
    "name": "휘경제2동",
    "rate": 4.18,
    "votes": {
      "polling": { "rate": 4.64, "count": 422 },
      "early": { "rate": 1.99, "count": 38 }
    }
  },
  {
    "name": "이문제1동",
    "rate": 4.84,
    "votes": {
      "polling": { "rate": 5.04, "count": 637 },
      "early": { "rate": 3.70, "count": 84 }
    }
  },
  {
    "name": "이문제2동",
    "rate": 2.79,
    "votes": {
      "polling": { "rate": 2.98, "count": 204 },
      "early": { "rate": 2.37, "count": 76 }
    }
  },
  {
    "name": "전농제1동",
    "rate": 3.25,
    "votes": {
      "polling": { "rate": 3.49, "count": 432 },
      "early": { "rate": 2.40, "count": 84 }
    }
  },
  {
    "name": "전농제2동",
    "rate": 2.17,
    "votes": {
      "polling": { "rate": 2.38, "count": 150 },
      "early": { "rate": 1.77, "count": 60 }
    }
  },
  {
    "name": "답십리제1동",
    "rate": 3.27,
    "votes": {
      "polling": { "rate": 3.52, "count": 364 },
      "early": { "rate": 2.59, "count": 94 }
    }
  },
  {
    "name": "답십리제2동",
    "rate": 2.72,
    "votes": {
      "polling": { "rate": 2.86, "count": 299 },
      "early": { "rate": 2.34, "count": 90 }
    }
  },
  {
    "name": "장안제1동",
    "rate": 2.79,
    "votes": {
      "polling": { "rate": 3.01, "count": 409 },
      "early": { "rate": 2.23, "count": 124 }
    }
  },
  {
    "name": "장안제2동",
    "rate": 2.72,
    "votes": {
      "polling": { "rate": 2.76, "count": 329 },
      "early": { "rate": 2.63, "count": 108 }
    }
  },
  {
    "name": "중랑구_관외사전투표",
    "rate": 3.42,
    "votes": {
      "absentee": { "rate": 3.42, "count": 867 }
    }
  },
  {
    "name": "면목본동",
    "rate": 1.99,
    "votes": {
      "polling": { "rate": 2.03, "count": 188 },
      "early": { "rate": 1.94, "count": 112 }
    }
  },
  {
    "name": "면목제2동",
    "rate": 1.99,
    "votes": {
      "polling": { "rate": 2.01, "count": 137 },
      "early": { "rate": 1.97, "count": 69 }
    }
  },
  {
    "name": "면목제3·8동",
    "rate": 2.04,
    "votes": {
      "polling": { "rate": 2.26, "count": 172 },
      "early": { "rate": 1.51, "count": 47 }
    }
  },
  {
    "name": "면목제4동",
    "rate": 2.18,
    "votes": {
      "polling": { "rate": 2.31, "count": 131 },
      "early": { "rate": 1.83, "count": 41 }
    }
  },
  {
    "name": "면목제5동",
    "rate": 2.46,
    "votes": {
      "polling": { "rate": 2.79, "count": 125 },
      "early": { "rate": 1.88, "count": 48 }
    }
  },
  {
    "name": "면목제7동",
    "rate": 2.37,
    "votes": {
      "polling": { "rate": 2.70, "count": 173 },
      "early": { "rate": 1.91, "count": 86 }
    }
  },
  {
    "name": "상봉제1동",
    "rate": 2.74,
    "votes": {
      "polling": { "rate": 2.83, "count": 217 },
      "early": { "rate": 2.47, "count": 61 }
    }
  },
  {
    "name": "상봉제2동",
    "rate": 2.86,
    "votes": {
      "polling": { "rate": 3.14, "count": 203 },
      "early": { "rate": 2.37, "count": 84 }
    }
  },
  {
    "name": "중화제1동",
    "rate": 2.69,
    "votes": {
      "polling": { "rate": 2.92, "count": 165 },
      "early": { "rate": 2.25, "count": 65 }
    }
  },
  {
    "name": "중화제2동",
    "rate": 2.24,
    "votes": {
      "polling": { "rate": 2.20, "count": 184 },
      "early": { "rate": 2.34, "count": 93 }
    }
  },
  {
    "name": "묵제1동",
    "rate": 2.68,
    "votes": {
      "polling": { "rate": 2.90, "count": 332 },
      "early": { "rate": 2.11, "count": 93 }
    }
  },
  {
    "name": "묵제2동",
    "rate": 2.35,
    "votes": {
      "polling": { "rate": 2.45, "count": 135 },
      "early": { "rate": 2.22, "count": 90 }
    }
  },
  {
    "name": "망우본동",
    "rate": 2.14,
    "votes": {
      "polling": { "rate": 2.22, "count": 285 },
      "early": { "rate": 1.92, "count": 96 }
    }
  },
  {
    "name": "망우제3동",
    "rate": 1.71,
    "votes": {
      "polling": { "rate": 1.77, "count": 84 },
      "early": { "rate": 1.61, "count": 48 }
    }
  },
  {
    "name": "신내제1동",
    "rate": 2.42,
    "votes": {
      "polling": { "rate": 2.33, "count": 322 },
      "early": { "rate": 2.71, "count": 115 }
    }
  },
  {
    "name": "신내제2동",
    "rate": 2.69,
    "votes": {
      "polling": { "rate": 3.00, "count": 222 },
      "early": { "rate": 2.17, "count": 99 }
    }
  },
{ "name": "성북구_관외사전투표", "rate": 4.39, "votes": { "absentee": { "rate": 4.39, "count": 1334 } } },
{ "name": "성북동", "rate": 3.47, "votes": { "polling": { "rate": 3.54, "count": 173 }, "early": { "rate": 3.34, "count": 102 } } },
{ "name": "삼선동", "rate": 3.74, "votes": { "polling": { "rate": 4.10, "count": 292 }, "early": { "rate": 3.22, "count": 158 } } },
{ "name": "동선동", "rate": 3.93, "votes": { "polling": { "rate": 4.21, "count": 204 }, "early": { "rate": 3.14, "count": 55 } } },
{ "name": "돈암제1동", "rate": 3.53, "votes": { "polling": { "rate": 3.66, "count": 189 }, "early": { "rate": 3.21, "count": 67 } } },
{ "name": "돈암제2동", "rate": 3.76, "votes": { "polling": { "rate": 3.91, "count": 327 }, "early": { "rate": 3.30, "count": 90 } } },
{ "name": "안암동", "rate": 8.12, "votes": { "polling": { "rate": 8.71, "count": 458 }, "early": { "rate": 6.83, "count": 169 } } },
{ "name": "보문동", "rate": 3.98, "votes": { "polling": { "rate": 3.82, "count": 174 }, "early": { "rate": 4.27, "count": 105 } } },
{ "name": "정릉제1동", "rate": 3.01, "votes": { "polling": { "rate": 3.06, "count": 182 }, "early": { "rate": 2.90, "count": 83 } } },
{ "name": "정릉제2동", "rate": 2.71, "votes": { "polling": { "rate": 2.77, "count": 179 }, "early": { "rate": 2.57, "count": 95 } } },
{ "name": "정릉제3동", "rate": 3.14, "votes": { "polling": { "rate": 3.51, "count": 134 }, "early": { "rate": 2.43, "count": 47 } } },
{ "name": "정릉제4동", "rate": 2.72, "votes": { "polling": { "rate": 3.12, "count": 238 }, "early": { "rate": 1.94, "count": 79 } } },
{ "name": "길음제1동", "rate": 3.74, "votes": { "polling": { "rate": 3.77, "count": 469 }, "early": { "rate": 3.57, "count": 165 } } },
{ "name": "길음제2동", "rate": 3.87, "votes": { "polling": { "rate": 3.88, "count": 299 }, "early": { "rate": 3.84, "count": 113 } } },
{ "name": "종암동", "rate": 3.61, "votes": { "polling": { "rate": 3.79, "count": 494 }, "early": { "rate": 3.31, "count": 188 } } },
{ "name": "월곡제1동", "rate": 2.97, "votes": { "polling": { "rate": 3.23, "count": 276 }, "early": { "rate": 2.44, "count": 94 } } },
{ "name": "월곡제2동", "rate": 3.34, "votes": { "polling": { "rate": 3.27, "count": 217 }, "early": { "rate": 3.53, "count": 90 } } },
{ "name": "장위제1동", "rate": 2.14, "votes": { "polling": { "rate": 2.52, "count": 186 }, "early": { "rate": 1.32, "count": 41 } } },
{ "name": "장위제2동", "rate": 2.63, "votes": { "polling": { "rate": 2.77, "count": 147 }, "early": { "rate": 1.59, "count": 25 } } },
{ "name": "장위제3동", "rate": 3.67, "votes": { "polling": { "rate": 3.72, "count": 259 }, "early": { "rate": 3.55, "count": 82 } } },
{ "name": "석관동", "rate": 2.52, "votes": { "polling": { "rate": 2.64, "count": 309 }, "early": { "rate": 2.19, "count": 82 } } },
{ "name": "강북구_관외사전투표", "rate": 3.00, "votes": { "absentee": { "rate": 3.00, "count": 525 } } },
{ "name": "삼양동", "rate": 2.29, "votes": { "polling": { "rate": 2.38, "count": 187 }, "early": { "rate": 2.09, "count": 73 } } },
{ "name": "미아동", "rate": 1.99, "votes": { "polling": { "rate": 2.14, "count": 139 }, "early": { "rate": 1.75, "count": 67 } } },
{ "name": "송중동", "rate": 2.53, "votes": { "polling": { "rate": 2.69, "count": 237 }, "early": { "rate": 2.12, "count": 72 } } },
{ "name": "송천동", "rate": 1.93, "votes": { "polling": { "rate": 2.06, "count": 156 }, "early": { "rate": 1.66, "count": 60 } } },
{ "name": "삼각산동", "rate": 3.04, "votes": { "polling": { "rate": 3.26, "count": 360 }, "early": { "rate": 2.41, "count": 95 } } },
{ "name": "번1동", "rate": 1.88, "votes": { "polling": { "rate": 1.89, "count": 89 }, "early": { "rate": 1.86, "count": 58 } } },
{ "name": "번2동", "rate": 1.53, "votes": { "polling": { "rate": 1.76, "count": 84 }, "early": { "rate": 1.02, "count": 22 } } },
{ "name": "번3동", "rate": 1.88, "votes": { "polling": { "rate": 2.03, "count": 104 }, "early": { "rate": 1.59, "count": 44 } } },
{ "name": "수유1동", "rate": 1.79, "votes": { "polling": { "rate": 2.14, "count": 119 }, "early": { "rate": 1.19, "count": 40 } } },
{ "name": "수유2동", "rate": 1.82, "votes": { "polling": { "rate": 1.91, "count": 116 }, "early": { "rate": 1.68, "count": 65 } } },
{ "name": "수유3동", "rate": 2.09, "votes": { "polling": { "rate": 2.32, "count": 166 }, "early": { "rate": 1.28, "count": 27 } } },
{ "name": "우이동", "rate": 1.86, "votes": { "polling": { "rate": 2.17, "count": 131 }, "early": { "rate": 1.28, "count": 42 } } },
{ "name": "인수동", "rate": 1.82, "votes": { "polling": { "rate": 1.93, "count": 157 }, "early": { "rate": 1.63, "count": 72 } } },
{ "name": "도봉구_관외사전투표", "rate": 3.71, "votes": { "absentee": { "rate": 3.71, "count": 728 } } },
{ "name": "쌍문1동", "rate": 2.04, "votes": { "polling": { "rate": 2.26, "count": 145 }, "early": { "rate": 1.55, "count": 47 } } },
{ "name": "쌍문2동", "rate": 2.38, "votes": { "polling": { "rate": 2.37, "count": 138 }, "early": { "rate": 2.40, "count": 66 } } },
{ "name": "쌍문3동", "rate": 2.52, "votes": { "polling": { "rate": 2.48, "count": 126 }, "early": { "rate": 2.59, "count": 74 } } },
{ "name": "쌍문4동", "rate": 2.67, "votes": { "polling": { "rate": 2.73, "count": 164 }, "early": { "rate": 2.55, "count": 74 } } },
{ "name": "방학1동", "rate": 2.27, "votes": { "polling": { "rate": 2.54, "count": 226 }, "early": { "rate": 1.62, "count": 59 } } },
{ "name": "방학2동", "rate": 1.63, "votes": { "polling": { "rate": 1.95, "count": 103 }, "early": { "rate": 1.09, "count": 34 } } },
{ "name": "방학3동", "rate": 2.71, "votes": { "polling": { "rate": 2.59, "count": 219 }, "early": { "rate": 2.90, "count": 150 } } },
{ "name": "창1동", "rate": 2.89, "votes": { "polling": { "rate": 2.88, "count": 223 }, "early": { "rate": 2.89, "count": 106 } } },
{ "name": "창2동", "rate": 2.28, "votes": { "polling": { "rate": 2.52, "count": 223 }, "early": { "rate": 1.83, "count": 85 } } },
{ "name": "창3동", "rate": 2.04, "votes": { "polling": { "rate": 2.32, "count": 88 }, "early": { "rate": 1.51, "count": 31 } } },
{ "name": "창4동", "rate": 3.07, "votes": { "polling": { "rate": 3.01, "count": 307 }, "early": { "rate": 3.22, "count": 131 } } },
{ "name": "창5동", "rate": 2.96, "votes": { "polling": { "rate": 2.93, "count": 244 }, "early": { "rate": 3.02, "count": 128 } } },
{ "name": "도봉1동", "rate": 1.91, "votes": { "polling": { "rate": 1.93, "count": 130 }, "early": { "rate": 1.88, "count": 73 } } },
{ "name": "도봉2동", "rate": 2.35, "votes": { "polling": { "rate": 2.53, "count": 257 }, "early": { "rate": 1.67, "count": 45 } } },
{ "name": "노원구_관외사전투표", "rate": 4.67, "votes": { "absentee": { "rate": 4.67, "count": 1481 } } },
{ "name": "월계1동", "rate": 3.58, "votes": { "polling": { "rate": 3.87, "count": 271 }, "early": { "rate": 3.02, "count": 115 } } },
{ "name": "월계2동", "rate": 2.64, "votes": { "polling": { "rate": 2.89, "count": 251 }, "early": { "rate": 2.01, "count": 71 } } },
{ "name": "월계3동", "rate": 3.01, "votes": { "polling": { "rate": 3.07, "count": 353 }, "early": { "rate": 2.71, "count": 68 } } },
{ "name": "공릉1동", "rate": 3.51, "votes": { "polling": { "rate": 3.74, "count": 469 }, "early": { "rate": 2.99, "count": 163 } } },
{ "name": "공릉2동", "rate": 3.52, "votes": { "polling": { "rate": 3.56, "count": 524 }, "early": { "rate": 3.42, "count": 187 } } },
{ "name": "하계1동", "rate": 4.13, "votes": { "polling": { "rate": 4.19, "count": 389 }, "early": { "rate": 3.94, "count": 116 } } },
{ "name": "하계2동", "rate": 3.64, "votes": { "polling": { "rate": 3.65, "count": 280 }, "early": { "rate": 3.60, "count": 109 } } },
{ "name": "중계본동", "rate": 3.64, "votes": { "polling": { "rate": 3.92, "count": 282 }, "early": { "rate": 2.97, "count": 87 } } },
{ "name": "중계1동", "rate": 4.69, "votes": { "polling": { "rate": 4.65, "count": 372 }, "early": { "rate": 4.77, "count": 178 } } },
{ "name": "중계2·3동", "rate": 2.99, "votes": { "polling": { "rate": 3.04, "count": 355 }, "early": { "rate": 2.88, "count": 139 } } },
{ "name": "중계4동", "rate": 3.27, "votes": { "polling": { "rate": 3.60, "count": 232 }, "early": { "rate": 2.56, "count": 76 } } },
{ "name": "상계1동", "rate": 3.32, "votes": { "polling": { "rate": 3.41, "count": 425 }, "early": { "rate": 3.10, "count": 172 } } },
{ "name": "상계2동", "rate": 3.76, "votes": { "polling": { "rate": 3.94, "count": 238 }, "early": { "rate": 3.43, "count": 117 } } },
{ "name": "상계3·4동", "rate": 3.14, "votes": { "polling": { "rate": 3.40, "count": 331 }, "early": { "rate": 2.23, "count": 62 } } },
{ "name": "상계5동", "rate": 3.36, "votes": { "polling": { "rate": 3.58, "count": 274 }, "early": { "rate": 2.88, "count": 99 } } },
{ "name": "상계6·7동", "rate": 3.78, "votes": { "polling": { "rate": 3.90, "count": 469 }, "early": { "rate": 3.33, "count": 112 } } },
{ "name": "상계8동", "rate": 4.71, "votes": { "polling": { "rate": 4.56, "count": 325 }, "early": { "rate": 4.96, "count": 185 } } },
{ "name": "상계9동", "rate": 4.35, "votes": { "polling": { "rate": 4.19, "count": 286 }, "early": { "rate": 4.70, "count": 156 } } },
{ "name": "상계10동", "rate": 4.09, "votes": { "polling": { "rate": 3.98, "count": 250 }, "early": { "rate": 4.30, "count": 137 } } },
{ "name": "은평구_관외사전투표", "rate": 3.46, "votes": { "absentee": { "rate": 3.46, "count": 1153 } } },
{ "name": "녹번동", "rate": 2.77, "votes": { "polling": { "rate": 3.06, "count": 335 }, "early": { "rate": 2.20, "count": 122 } } },
{ "name": "응암제1동", "rate": 2.76, "votes": { "polling": { "rate": 3.03, "count": 319 }, "early": { "rate": 2.11, "count": 92 } } },
{ "name": "응암제2동", "rate": 2.79, "votes": { "polling": { "rate": 3.19, "count": 284 }, "early": { "rate": 1.66, "count": 53 } } },
{ "name": "응암제3동", "rate": 1.72, "votes": { "polling": { "rate": 1.66, "count": 109 }, "early": { "rate": 1.80, "count": 82 } } },
{ "name": "역촌동", "rate": 1.88, "votes": { "polling": { "rate": 1.98, "count": 269 }, "early": { "rate": 1.67, "count": 120 } } },
{ "name": "신사제1동", "rate": 1.99, "votes": { "polling": { "rate": 2.19, "count": 162 }, "early": { "rate": 1.70, "count": 92 } } },
{ "name": "신사제2동", "rate": 2.74, "votes": { "polling": { "rate": 2.71, "count": 164 }, "early": { "rate": 2.83, "count": 71 } } },
{ "name": "증산동", "rate": 3.10, "votes": { "polling": { "rate": 3.29, "count": 166 }, "early": { "rate": 2.77, "count": 80 } } },
{ "name": "수색동", "rate": 4.03, "votes": { "polling": { "rate": 4.23, "count": 309 }, "early": { "rate": 3.66, "count": 145 } } },
{ "name": "불광제1동", "rate": 2.90, "votes": { "polling": { "rate": 3.11, "count": 392 }, "early": { "rate": 2.23, "count": 89 } } },
{ "name": "불광제2동", "rate": 1.99, "votes": { "polling": { "rate": 2.22, "count": 187 }, "early": { "rate": 1.49, "count": 58 } } },
{ "name": "갈현제1동", "rate": 2.23, "votes": { "polling": { "rate": 2.12, "count": 86 }, "early": { "rate": 2.40, "count": 59 } } },
{ "name": "갈현제2동", "rate": 2.40, "votes": { "polling": { "rate": 2.66, "count": 217 }, "early": { "rate": 1.90, "count": 85 } } },
{ "name": "구산동", "rate": 2.28, "votes": { "polling": { "rate": 2.39, "count": 221 }, "early": { "rate": 2.03, "count": 94 } } },
{ "name": "대조동", "rate": 3.08, "votes": { "polling": { "rate": 3.19, "count": 269 }, "early": { "rate": 2.84, "count": 110 } } },
{ "name": "진관동", "rate": 3.58, "votes": { "polling": { "rate": 3.68, "count": 695 }, "early": { "rate": 3.35, "count": 285 } } },
{ "name": "서대문구_관외사전투표", "rate": 4.81, "votes": { "absentee": { "rate": 4.81, "count": 1093 } } },
{ "name": "충현동", "rate": 5.26, "votes": { "polling": { "rate": 5.60, "count": 383 }, "early": { "rate": 4.04, "count": 78 } } },
{ "name": "천연동", "rate": 5.75, "votes": { "polling": { "rate": 5.97, "count": 371 }, "early": { "rate": 5.28, "count": 152 } } },
{ "name": "북아현동", "rate": 6.02, "votes": { "polling": { "rate": 6.68, "count": 357 }, "early": { "rate": 4.83, "count": 143 } } },
{ "name": "신촌동", "rate": 6.57, "votes": { "polling": { "rate": 6.40, "count": 427 }, "early": { "rate": 7.29, "count": 110 } } },
{ "name": "연희동", "rate": 4.55, "votes": { "polling": { "rate": 4.79, "count": 556 }, "early": { "rate": 3.79, "count": 135 } } },
{ "name": "홍제제1동", "rate": 3.23, "votes": { "polling": { "rate": 3.18, "count": 303 }, "early": { "rate": 3.42, "count": 84 } } },
{ "name": "홍제제2동", "rate": 3.97, "votes": { "polling": { "rate": 4.17, "count": 186 }, "early": { "rate": 3.67, "count": 106 } } },
{ "name": "홍제제3동", "rate": 3.41, "votes": { "polling": { "rate": 3.53, "count": 219 }, "early": { "rate": 3.14, "count": 84 } } },
{ "name": "홍은제1동", "rate": 2.99, "votes": { "polling": { "rate": 3.13, "count": 259 }, "early": { "rate": 2.73, "count": 116 } } },
{ "name": "홍은제2동", "rate": 2.77, "votes": { "polling": { "rate": 3.01, "count": 269 }, "early": { "rate": 2.07, "count": 64 } } },
{ "name": "남가좌제1동", "rate": 3.98, "votes": { "polling": { "rate": 4.15, "count": 253 }, "early": { "rate": 3.74, "count": 161 } } },
{ "name": "남가좌제2동", "rate": 3.33, "votes": { "polling": { "rate": 3.58, "count": 344 }, "early": { "rate": 2.57, "count": 83 } } },
{ "name": "북가좌제1동", "rate": 3.65, "votes": { "polling": { "rate": 4.04, "count": 233 }, "early": { "rate": 3.10, "count": 128 } } },
{ "name": "북가좌제2동", "rate": 2.23, "votes": { "polling": { "rate": 2.46, "count": 239 }, "early": { "rate": 1.75, "count": 79 } } },
{ "name": "마포구_관외사전투표", "rate": 4.39, "votes": { "absentee": { "rate": 4.39, "count": 1252 } } },
{ "name": "공덕동", "rate": 3.47, "votes": { "polling": { "rate": 3.64, "count": 485 }, "early": { "rate": 2.80, "count": 91 } } },
{ "name": "아현동", "rate": 4.61, "votes": { "polling": { "rate": 4.79, "count": 502 }, "early": { "rate": 4.03, "count": 134 } } },
{ "name": "도화동", "rate": 3.91, "votes": { "polling": { "rate": 3.97, "count": 320 }, "early": { "rate": 3.76, "count": 121 } } },
{ "name": "용강동", "rate": 4.14, "votes": { "polling": { "rate": 4.50, "count": 346 }, "early": { "rate": 3.31, "count": 113 } } },
{ "name": "대흥동", "rate": 5.47, "votes": { "polling": { "rate": 5.53, "count": 259 }, "early": { "rate": 5.33, "count": 103 } } },
{ "name": "염리동", "rate": 4.26, "votes": { "polling": { "rate": 4.45, "count": 245 }, "early": { "rate": 3.89, "count": 109 } } },
{ "name": "신수동", "rate": 4.13, "votes": { "polling": { "rate": 4.29, "count": 334 }, "early": { "rate": 3.72, "count": 114 } } },
{ "name": "서강동", "rate": 4.10, "votes": { "polling": { "rate": 4.29, "count": 377 }, "early": { "rate": 3.62, "count": 124 } } },
{ "name": "서교동", "rate": 3.68, "votes": { "polling": { "rate": 3.86, "count": 285 }, "early": { "rate": 3.16, "count": 79 } } },
{ "name": "합정동", "rate": 2.96, "votes": { "polling": { "rate": 3.23, "count": 173 }, "early": { "rate": 2.42, "count": 65 } } },
{ "name": "망원1동", "rate": 2.75, "votes": { "polling": { "rate": 2.92, "count": 177 }, "early": { "rate": 2.46, "count": 84 } } },
{ "name": "망원2동", "rate": 2.47, "votes": { "polling": { "rate": 2.76, "count": 166 }, "early": { "rate": 1.91, "count": 59 } } },
{ "name": "연남동", "rate": 2.79, "votes": { "polling": { "rate": 3.02, "count": 138 }, "early": { "rate": 2.40, "count": 63 } } },
{ "name": "성산1동", "rate": 2.72, "votes": { "polling": { "rate": 2.93, "count": 171 }, "early": { "rate": 2.19, "count": 55 } } },
{ "name": "성산2동", "rate": 3.14, "votes": { "polling": { "rate": 3.33, "count": 467 }, "early": { "rate": 2.57, "count": 122 } } },
{ "name": "상암동", "rate": 3.33, "votes": { "polling": { "rate": 3.50, "count": 379 }, "early": { "rate": 2.84, "count": 105 } } },
{ "name": "양천구_관외사전투표", "rate": 4.20, "votes": { "absentee": { "rate": 4.20, "count": 1200 } } },
{ "name": "목1동", "rate": 4.07, "votes": { "polling": { "rate": 4.19, "count": 456 }, "early": { "rate": 3.56, "count": 99 } } },
{ "name": "목2동", "rate": 3.66, "votes": { "polling": { "rate": 3.89, "count": 379 }, "early": { "rate": 3.15, "count": 141 } } },
{ "name": "목3동", "rate": 2.98, "votes": { "polling": { "rate": 3.10, "count": 211 }, "early": { "rate": 2.71, "count": 89 } } },
{ "name": "목4동", "rate": 3.38, "votes": { "polling": { "rate": 3.33, "count": 262 }, "early": { "rate": 3.48, "count": 138 } } },
{ "name": "목5동", "rate": 4.54, "votes": { "polling": { "rate": 4.80, "count": 711 }, "early": { "rate": 3.76, "count": 188 } } },
{ "name": "신월1동", "rate": 1.66, "votes": { "polling": { "rate": 1.82, "count": 112 }, "early": { "rate": 1.28, "count": 35 } } },
{ "name": "신월2동", "rate": 2.24, "votes": { "polling": { "rate": 2.32, "count": 153 }, "early": { "rate": 2.04, "count": 64 } } },
{ "name": "신월3동", "rate": 1.59, "votes": { "polling": { "rate": 1.79, "count": 68 }, "early": { "rate": 1.20, "count": 25 } } },
{ "name": "신월4동", "rate": 1.86, "votes": { "polling": { "rate": 1.85, "count": 105 }, "early": { "rate": 1.87, "count": 56 } } },
{ "name": "신월5동", "rate": 1.84, "votes": { "polling": { "rate": 2.12, "count": 81 }, "early": { "rate": 1.47, "count": 42 } } },
{ "name": "신월6동", "rate": 2.82, "votes": { "polling": { "rate": 2.90, "count": 137 }, "early": { "rate": 2.70, "count": 85 } } },
{ "name": "신월7동", "rate": 2.23, "votes": { "polling": { "rate": 2.19, "count": 140 }, "early": { "rate": 2.33, "count": 65 } } },
{ "name": "신정1동", "rate": 3.63, "votes": { "polling": { "rate": 3.61, "count": 254 }, "early": { "rate": 3.66, "count": 85 } } },
{ "name": "신정2동", "rate": 3.52, "votes": { "polling": { "rate": 3.67, "count": 214 }, "early": { "rate": 3.32, "count": 140 } } },
{ "name": "신정3동", "rate": 2.65, "votes": { "polling": { "rate": 2.76, "count": 498 }, "early": { "rate": 2.08, "count": 75 } } },
{ "name": "신정4동", "rate": 2.63, "votes": { "polling": { "rate": 2.77, "count": 300 }, "early": { "rate": 2.28, "count": 97 } } },
{ "name": "신정6동", "rate": 4.13, "votes": { "polling": { "rate": 4.08, "count": 396 }, "early": { "rate": 4.32, "count": 120 } } },
{ "name": "신정7동", "rate": 3.26, "votes": { "polling": { "rate": 3.23, "count": 365 }, "early": { "rate": 3.34, "count": 90 } } },
{ "name": "강서구_관외사전투표", "rate": 3.84, "votes": { "absentee": { "rate": 3.84, "count": 1384 } } },
{ "name": "염창동", "rate": 3.77, "votes": { "polling": { "rate": 3.95, "count": 594 }, "early": { "rate": 3.33, "count": 197 } } },
{ "name": "등촌제1동", "rate": 3.91, "votes": { "polling": { "rate": 3.95, "count": 319 }, "early": { "rate": 3.85, "count": 162 } } },
{ "name": "등촌제2동", "rate": 2.98, "votes": { "polling": { "rate": 3.15, "count": 201 }, "early": { "rate": 2.67, "count": 90 } } },
{ "name": "등촌제3동", "rate": 2.78, "votes": { "polling": { "rate": 2.85, "count": 327 }, "early": { "rate": 2.57, "count": 107 } } },
{ "name": "화곡본동", "rate": 2.41, "votes": { "polling": { "rate": 2.58, "count": 225 }, "early": { "rate": 2.09, "count": 94 } } },
{ "name": "화곡제1동", "rate": 2.50, "votes": { "polling": { "rate": 2.55, "count": 381 }, "early": { "rate": 2.37, "count": 127 } } },
{ "name": "화곡제2동", "rate": 1.96, "votes": { "polling": { "rate": 2.16, "count": 100 }, "early": { "rate": 1.62, "count": 45 } } },
{ "name": "화곡제3동", "rate": 2.84, "votes": { "polling": { "rate": 3.05, "count": 240 }, "early": { "rate": 2.28, "count": 67 } } },
{ "name": "화곡제4동", "rate": 1.90, "votes": { "polling": { "rate": 2.15, "count": 117 }, "early": { "rate": 1.52, "count": 54 } } },
{ "name": "화곡제6동", "rate": 2.66, "votes": { "polling": { "rate": 2.87, "count": 242 }, "early": { "rate": 2.25, "count": 95 } } },
{ "name": "화곡제8동", "rate": 2.03, "votes": { "polling": { "rate": 1.94, "count": 130 }, "early": { "rate": 2.14, "count": 106 } } },
{ "name": "우장산동", "rate": 3.05, "votes": { "polling": { "rate": 3.25, "count": 490 }, "early": { "rate": 2.42, "count": 112 } } },
{ "name": "가양제1동", "rate": 4.13, "votes": { "polling": { "rate": 4.15, "count": 490 }, "early": { "rate": 4.04, "count": 138 } } },
{ "name": "가양제2동", "rate": 2.54, "votes": { "polling": { "rate": 2.41, "count": 130 }, "early": { "rate": 2.82, "count": 72 } } },
{ "name": "가양제3동", "rate": 2.71, "votes": { "polling": { "rate": 2.55, "count": 135 }, "early": { "rate": 3.02, "count": 82 } } },
{ "name": "발산제1동", "rate": 2.81, "votes": { "polling": { "rate": 2.90, "count": 369 }, "early": { "rate": 2.57, "count": 125 } } },
{ "name": "공항동", "rate": 2.90, "votes": { "polling": { "rate": 2.99, "count": 289 }, "early": { "rate": 2.63, "count": 91 } } },
{ "name": "방화제1동", "rate": 2.69, "votes": { "polling": { "rate": 2.93, "count": 416 }, "early": { "rate": 2.15, "count": 131 } } },
{ "name": "방화제2동", "rate": 2.74, "votes": { "polling": { "rate": 2.88, "count": 222 }, "early": { "rate": 2.45, "count": 92 } } },
{ "name": "방화제3동", "rate": 2.81, "votes": { "polling": { "rate": 2.73, "count": 213 }, "early": { "rate": 2.98, "count": 114 } } },
{ "name": "구로구_관외사전투표", "rate": 4.38, "votes": { "absentee": { "rate": 4.38, "count": 1012 } } },
{ "name": "신도림동", "rate": 4.49, "votes": { "polling": { "rate": 4.55, "count": 618 }, "early": { "rate": 4.35, "count": 243 } } },
{ "name": "구로제1동", "rate": 4.00, "votes": { "polling": { "rate": 4.39, "count": 290 }, "early": { "rate": 3.39, "count": 143 } } },
{ "name": "구로제2동", "rate": 2.35, "votes": { "polling": { "rate": 2.64, "count": 188 }, "early": { "rate": 1.58, "count": 42 } } },
{ "name": "구로제3동", "rate": 4.40, "votes": { "polling": { "rate": 4.72, "count": 354 }, "early": { "rate": 3.77, "count": 143 } } },
{ "name": "구로제4동", "rate": 2.63, "votes": { "polling": { "rate": 3.15, "count": 191 }, "early": { "rate": 1.22, "count": 27 } } },
{ "name": "구로제5동", "rate": 3.79, "votes": { "polling": { "rate": 4.10, "count": 447 }, "early": { "rate": 2.85, "count": 100 } } },
{ "name": "가리봉동", "rate": 3.15, "votes": { "polling": { "rate": 3.32, "count": 81 }, "early": { "rate": 2.79, "count": 34 } } },
{ "name": "고척제1동", "rate": 3.63, "votes": { "polling": { "rate": 3.82, "count": 359 }, "early": { "rate": 3.26, "count": 153 } } },
{ "name": "고척제2동", "rate": 2.28, "votes": { "polling": { "rate": 2.33, "count": 208 }, "early": { "rate": 2.17, "count": 76 } } },
{ "name": "개봉제1동", "rate": 2.71, "votes": { "polling": { "rate": 3.06, "count": 369 }, "early": { "rate": 1.77, "count": 80 } } },
{ "name": "개봉제2동", "rate": 2.80, "votes": { "polling": { "rate": 2.88, "count": 332 }, "early": { "rate": 2.59, "count": 127 } } },
{ "name": "개봉제3동", "rate": 2.21, "votes": { "polling": { "rate": 2.51, "count": 157 }, "early": { "rate": 1.58, "count": 47 } } },
{ "name": "오류제1동", "rate": 2.71, "votes": { "polling": { "rate": 2.72, "count": 211 }, "early": { "rate": 2.69, "count": 110 } } },
{ "name": "오류제2동", "rate": 2.45, "votes": { "polling": { "rate": 2.51, "count": 328 }, "early": { "rate": 2.28, "count": 104 } } },
{ "name": "수궁동", "rate": 2.09, "votes": { "polling": { "rate": 2.21, "count": 188 }, "early": { "rate": 1.75, "count": 54 } } },
{ "name": "항동", "rate": 3.29, "votes": { "polling": { "rate": 3.38, "count": 169 }, "early": { "rate": 3.16, "count": 102 } } },
{ "name": "금천구_관외사전투표", "rate": 3.28, "votes": { "absentee": { "rate": 3.28, "count": 498 } } },
{ "name": "가산동", "rate": 4.57, "votes": { "polling": { "rate": 4.97, "count": 404 }, "early": { "rate": 3.65, "count": 129 } } },
{ "name": "독산제1동", "rate": 3.77, "votes": { "polling": { "rate": 3.66, "count": 640 }, "early": { "rate": 4.25, "count": 179 } } },
{ "name": "독산제2동", "rate": 2.07, "votes": { "polling": { "rate": 2.17, "count": 109 }, "early": { "rate": 1.89, "count": 48 } } },
{ "name": "독산제3동", "rate": 1.85, "votes": { "polling": { "rate": 2.01, "count": 146 }, "early": { "rate": 1.54, "count": 57 } } },
{ "name": "독산제4동", "rate": 1.96, "votes": { "polling": { "rate": 2.04, "count": 86 }, "early": { "rate": 1.84, "count": 52 } } },
{ "name": "시흥제1동", "rate": 2.59, "votes": { "polling": { "rate": 2.81, "count": 285 }, "early": { "rate": 2.07, "count": 90 } } },
{ "name": "시흥제2동", "rate": 2.15, "votes": { "polling": { "rate": 2.16, "count": 159 }, "early": { "rate": 2.11, "count": 67 } } },
{ "name": "시흥제3동", "rate": 2.29, "votes": { "polling": { "rate": 2.60, "count": 91 }, "early": { "rate": 1.74, "count": 35 } } },
{ "name": "시흥제4동", "rate": 1.85, "votes": { "polling": { "rate": 2.11, "count": 132 }, "early": { "rate": 1.30, "count": 38 } } },
{ "name": "시흥제5동", "rate": 2.00, "votes": { "polling": { "rate": 2.14, "count": 110 }, "early": { "rate": 1.79, "count": 65 } } },
{ "name": "영등포구_관외사전투표", "rate": 5.08, "votes": { "absentee": { "rate": 5.08, "count": 1484 } } },
{ "name": "영등포본동", "rate": 3.11, "votes": { "polling": { "rate": 3.24, "count": 251 }, "early": { "rate": 2.78, "count": 80 } } },
{ "name": "영등포동", "rate": 5.96, "votes": { "polling": { "rate": 6.07, "count": 615 }, "early": { "rate": 5.63, "count": 199 } } },
{ "name": "여의동", "rate": 4.13, "votes": { "polling": { "rate": 3.93, "count": 545 }, "early": { "rate": 4.87, "count": 188 } } },
{ "name": "당산제1동", "rate": 4.89, "votes": { "polling": { "rate": 4.78, "count": 380 }, "early": { "rate": 5.21, "count": 142 } } },
{ "name": "당산제2동", "rate": 4.91, "votes": { "polling": { "rate": 4.83, "count": 695 }, "early": { "rate": 5.19, "count": 204 } } },
{ "name": "도림동", "rate": 2.91, "votes": { "polling": { "rate": 2.94, "count": 175 }, "early": { "rate": 2.86, "count": 82 } } },
{ "name": "문래동", "rate": 3.74, "votes": { "polling": { "rate": 3.99, "count": 490 }, "early": { "rate": 2.93, "count": 110 } } },
{ "name": "양평제1동", "rate": 5.12, "votes": { "polling": { "rate": 5.30, "count": 345 }, "early": { "rate": 4.77, "count": 160 } } },
{ "name": "양평제2동", "rate": 4.18, "votes": { "polling": { "rate": 4.08, "count": 341 }, "early": { "rate": 4.42, "count": 150 } } },
{ "name": "신길제1동", "rate": 3.28, "votes": { "polling": { "rate": 3.32, "count": 219 }, "early": { "rate": 3.18, "count": 73 } } },
{ "name": "신길제3동", "rate": 3.24, "votes": { "polling": { "rate": 3.17, "count": 187 }, "early": { "rate": 3.45, "count": 75 } } },
{ "name": "신길제4동", "rate": 3.11, "votes": { "polling": { "rate": 3.40, "count": 153 }, "early": { "rate": 2.21, "count": 32 } } },
{ "name": "신길제5동", "rate": 3.08, "votes": { "polling": { "rate": 3.42, "count": 115 }, "early": { "rate": 2.34, "count": 35 } } },
{ "name": "신길제6동", "rate": 3.70, "votes": { "polling": { "rate": 4.00, "count": 253 }, "early": { "rate": 3.08, "count": 94 } } },
{ "name": "신길제7동", "rate": 4.17, "votes": { "polling": { "rate": 4.31, "count": 311 }, "early": { "rate": 3.70, "count": 76 } } },
{ "name": "대림제1동", "rate": 2.40, "votes": { "polling": { "rate": 2.29, "count": 100 }, "early": { "rate": 2.60, "count": 66 } } },
{ "name": "대림제2동", "rate": 2.59, "votes": { "polling": { "rate": 2.74, "count": 110 }, "early": { "rate": 2.29, "count": 44 } } },
{ "name": "대림제3동", "rate": 2.69, "votes": { "polling": { "rate": 2.71, "count": 210 }, "early": { "rate": 2.64, "count": 72 } } },
{ "name": "동작구_관외사전투표", "rate": 6.33, "votes": { "absentee": { "rate": 6.33, "count": 2014 } } },
{ "name": "노량진제1동", "rate": 6.29, "votes": { "polling": { "rate": 6.31, "count": 824 }, "early": { "rate": 6.18, "count": 161 } } },
{ "name": "노량진제2동", "rate": 5.99, "votes": { "polling": { "rate": 5.86, "count": 143 }, "early": { "rate": 6.16, "count": 119 } } },
{ "name": "상도제1동", "rate": 6.51, "votes": { "polling": { "rate": 6.57, "count": 1071 }, "early": { "rate": 6.34, "count": 404 } } },
{ "name": "상도제2동", "rate": 6.54, "votes": { "polling": { "rate": 6.76, "count": 633 }, "early": { "rate": 6.02, "count": 244 } } },
{ "name": "상도제3동", "rate": 4.41, "votes": { "polling": { "rate": 4.62, "count": 361 }, "early": { "rate": 4.08, "count": 206 } } },
{ "name": "상도제4동", "rate": 5.45, "votes": { "polling": { "rate": 5.48, "count": 477 }, "early": { "rate": 5.41, "count": 251 } } },
{ "name": "흑석동", "rate": 5.40, "votes": { "polling": { "rate": 5.30, "count": 582 }, "early": { "rate": 5.68, "count": 247 } } },
{ "name": "사당제1동", "rate": 4.64, "votes": { "polling": { "rate": 4.76, "count": 370 }, "early": { "rate": 4.31, "count": 117 } } },
{ "name": "사당제2동", "rate": 5.14, "votes": { "polling": { "rate": 5.41, "count": 545 }, "early": { "rate": 4.61, "count": 237 } } },
{ "name": "사당제3동", "rate": 4.86, "votes": { "polling": { "rate": 4.92, "count": 424 }, "early": { "rate": 4.68, "count": 143 } } },
{ "name": "사당제4동", "rate": 4.39, "votes": { "polling": { "rate": 4.24, "count": 201 }, "early": { "rate": 4.65, "count": 118 } } },
{ "name": "사당제5동", "rate": 5.28, "votes": { "polling": { "rate": 5.17, "count": 267 }, "early": { "rate": 5.51, "count": 132 } } },
{ "name": "대방동", "rate": 5.54, "votes": { "polling": { "rate": 5.61, "count": 650 }, "early": { "rate": 5.34, "count": 224 } } },
{ "name": "신대방제1동", "rate": 4.23, "votes": { "polling": { "rate": 4.31, "count": 368 }, "early": { "rate": 3.99, "count": 121 } } },
{ "name": "신대방제2동", "rate": 4.96, "votes": { "polling": { "rate": 5.03, "count": 386 }, "early": { "rate": 4.80, "count": 151 } } },
{ "name": "관악구_관외사전투표", "rate": 5.64, "votes": { "absentee": { "rate": 5.64, "count": 1836 } } },
{ "name": "보라매동", "rate": 3.40, "votes": { "polling": { "rate": 3.25, "count": 258 }, "early": { "rate": 3.78, "count": 119 } } },
{ "name": "은천동", "rate": 3.88, "votes": { "polling": { "rate": 4.05, "count": 443 }, "early": { "rate": 3.49, "count": 169 } } },
{ "name": "성현동", "rate": 4.19, "votes": { "polling": { "rate": 4.36, "count": 494 }, "early": { "rate": 3.69, "count": 144 } } },
{ "name": "중앙동", "rate": 5.88, "votes": { "polling": { "rate": 6.14, "count": 288 }, "early": { "rate": 5.46, "count": 156 } } },
{ "name": "청림동", "rate": 4.51, "votes": { "polling": { "rate": 4.96, "count": 277 }, "early": { "rate": 3.47, "count": 85 } } },
{ "name": "행운동", "rate": 5.29, "votes": { "polling": { "rate": 5.31, "count": 536 }, "early": { "rate": 5.26, "count": 196 } } },
{ "name": "청룡동", "rate": 5.69, "votes": { "polling": { "rate": 6.24, "count": 784 }, "early": { "rate": 4.12, "count": 182 } } },
{ "name": "낙성대동", "rate": 7.59, "votes": { "polling": { "rate": 7.93, "count": 472 }, "early": { "rate": 6.73, "count": 161 } } },
{ "name": "인헌동", "rate": 5.23, "votes": { "polling": { "rate": 5.63, "count": 473 }, "early": { "rate": 4.64, "count": 258 } } },
{ "name": "남현동", "rate": 4.32, "votes": { "polling": { "rate": 4.47, "count": 263 }, "early": { "rate": 4.05, "count": 123 } } },
{ "name": "신림동", "rate": 5.52, "votes": { "polling": { "rate": 5.76, "count": 370 }, "early": { "rate": 5.00, "count": 147 } } },
{ "name": "신사동", "rate": 3.85, "votes": { "polling": { "rate": 3.90, "count": 255 }, "early": { "rate": 3.75, "count": 148 } } },
{ "name": "조원동", "rate": 3.91, "votes": { "polling": { "rate": 4.26, "count": 270 }, "early": { "rate": 3.24, "count": 104 } } },
{ "name": "미성동", "rate": 2.97, "votes": { "polling": { "rate": 3.33, "count": 325 }, "early": { "rate": 2.13, "count": 89 } } },
{ "name": "난곡동", "rate": 3.22, "votes": { "polling": { "rate": 3.31, "count": 254 }, "early": { "rate": 3.04, "count": 108 } } },
{ "name": "난향동", "rate": 3.25, "votes": { "polling": { "rate": 3.47, "count": 167 }, "early": { "rate": 2.85, "count": 74 } } },
{ "name": "서원동", "rate": 4.36, "votes": { "polling": { "rate": 4.29, "count": 297 }, "early": { "rate": 4.55, "count": 130 } } },
{ "name": "신원동", "rate": 3.84, "votes": { "polling": { "rate": 4.16, "count": 208 }, "early": { "rate": 3.35, "count": 108 } } },
{ "name": "서림동", "rate": 5.07, "votes": { "polling": { "rate": 5.43, "count": 412 }, "early": { "rate": 3.78, "count": 79 } } },
{ "name": "삼성동", "rate": 2.48, "votes": { "polling": { "rate": 2.60, "count": 190 }, "early": { "rate": 2.22, "count": 80 } } },
{ "name": "대학동", "rate": 7.56, "votes": { "polling": { "rate": 8.07, "count": 595 }, "early": { "rate": 6.61, "count": 261 } } },
{ "name": "서초구_관외사전투표", "rate": 5.41, "votes": { "absentee": { "rate": 5.41, "count": 1283 } } },
{ "name": "서초1동", "rate": 4.21, "votes": { "polling": { "rate": 4.12, "count": 302 }, "early": { "rate": 4.45, "count": 120 } } },
{ "name": "서초2동", "rate": 4.93, "votes": { "polling": { "rate": 4.66, "count": 435 }, "early": { "rate": 5.82, "count": 167 } } },
{ "name": "서초3동", "rate": 4.30, "votes": { "polling": { "rate": 4.18, "count": 516 }, "early": { "rate": 4.71, "count": 163 } } },
{ "name": "서초4동", "rate": 4.70, "votes": { "polling": { "rate": 4.40, "count": 533 }, "early": { "rate": 6.31, "count": 145 } } },
{ "name": "잠원동", "rate": 5.31, "votes": { "polling": { "rate": 5.30, "count": 734 }, "early": { "rate": 5.36, "count": 196 } } },
{ "name": "반포본동", "rate": 2.13, "votes": { "polling": { "rate": 5.77, "count": 3 }, "early": { "rate": 0.00, "count": 0 } } },
{ "name": "반포1동", "rate": 4.64, "votes": { "polling": { "rate": 4.65, "count": 541 }, "early": { "rate": 4.61, "count": 154 } } },
{ "name": "반포2동", "rate": 4.50, "votes": { "polling": { "rate": 4.43, "count": 470 }, "early": { "rate": 4.75, "count": 144 } } },
{ "name": "반포3동", "rate": 5.08, "votes": { "polling": { "rate": 4.95, "count": 455 }, "early": { "rate": 5.48, "count": 169 } } },
{ "name": "반포4동", "rate": 3.81, "votes": { "polling": { "rate": 3.86, "count": 262 }, "early": { "rate": 3.61, "count": 65 } } },
{ "name": "방배본동", "rate": 3.77, "votes": { "polling": { "rate": 3.78, "count": 292 }, "early": { "rate": 3.74, "count": 104 } } },
{ "name": "방배1동", "rate": 3.58, "votes": { "polling": { "rate": 3.66, "count": 227 }, "early": { "rate": 3.40, "count": 81 } } },
{ "name": "방배2동", "rate": 3.77, "votes": { "polling": { "rate": 3.95, "count": 278 }, "early": { "rate": 3.29, "count": 84 } } },
{ "name": "방배3동", "rate": 4.19, "votes": { "polling": { "rate": 3.87, "count": 231 }, "early": { "rate": 5.07, "count": 112 } } },
{ "name": "방배4동", "rate": 3.84, "votes": { "polling": { "rate": 4.04, "count": 392 }, "early": { "rate": 3.29, "count": 112 } } },
{ "name": "양재1동", "rate": 3.79, "votes": { "polling": { "rate": 4.02, "count": 660 }, "early": { "rate": 2.78, "count": 102 } } },
{ "name": "양재2동", "rate": 4.32, "votes": { "polling": { "rate": 4.60, "count": 330 }, "early": { "rate": 3.80, "count": 143 } } },
{ "name": "내곡동", "rate": 3.27, "votes": { "polling": { "rate": 3.55, "count": 218 }, "early": { "rate": 2.65, "count": 72 } } },
// 관외사전투표
{ "name": "강남구_관외사전투표", "rate": 5.49, "votes": { "absentee": { "rate": 5.49, "count": 1793 } } },
// 동별 (polling = 선거일투표, early = 관내사전투표)
{ "name": "신사동", "rate": 3.12, "votes": { "polling": { "rate": 2.95, "count": 177 }, "early": { "rate": 3.77, "count": 58 } } },
{ "name": "논현1동", "rate": 3.39, "votes": { "polling": { "rate": 3.43, "count": 203 }, "early": { "rate": 3.25, "count": 60 } } },
{ "name": "논현2동", "rate": 3.41, "votes": { "polling": { "rate": 3.39, "count": 227 }, "early": { "rate": 3.50, "count": 55 } } },
{ "name": "압구정동", "rate": 4.28, "votes": { "polling": { "rate": 3.91, "count": 417 }, "early": { "rate": 6.22, "count": 123 } } },
{ "name": "청담동", "rate": 3.77, "votes": { "polling": { "rate": 3.79, "count": 385 }, "early": { "rate": 3.68, "count": 67 } } },
{ "name": "삼성1동", "rate": 4.04, "votes": { "polling": { "rate": 3.90, "count": 187 }, "early": { "rate": 4.50, "count": 64 } } },
{ "name": "삼성2동", "rate": 4.65, "votes": { "polling": { "rate": 4.54, "count": 503 }, "early": { "rate": 5.07, "count": 145 } } },
{ "name": "대치1동", "rate": 5.67, "votes": { "polling": { "rate": 5.56, "count": 497 }, "early": { "rate": 6.09, "count": 131 } } },
{ "name": "대치2동", "rate": 5.21, "votes": { "polling": { "rate": 5.19, "count": 760 }, "early": { "rate": 5.31, "count": 167 } } },
{ "name": "대치4동", "rate": 4.29, "votes": { "polling": { "rate": 4.04, "count": 213 }, "early": { "rate": 4.84, "count": 115 } } },
{ "name": "역삼1동", "rate": 4.49, "votes": { "polling": { "rate": 4.29, "count": 420 }, "early": { "rate": 5.17, "count": 149 } } },
{ "name": "역삼2동", "rate": 4.61, "votes": { "polling": { "rate": 4.57, "count": 547 }, "early": { "rate": 4.73, "count": 185 } } },
{ "name": "도곡1동", "rate": 4.89, "votes": { "polling": { "rate": 4.72, "count": 365 }, "early": { "rate": 5.39, "count": 147 } } },
{ "name": "도곡2동", "rate": 4.35, "votes": { "polling": { "rate": 4.25, "count": 549 }, "early": { "rate": 5.04, "count": 92 } } },
{ "name": "개포1동", "rate": 4.98, "votes": { "polling": { "rate": 4.56, "count": 475 }, "early": { "rate": 6.21, "count": 219 } } },
{ "name": "개포2동", "rate": 5.42, "votes": { "polling": { "rate": 5.55, "count": 842 }, "early": { "rate": 4.76, "count": 132 } } },
{ "name": "개포3동", "rate": 4.35, "votes": { "polling": { "rate": 4.55, "count": 268 }, "early": { "rate": 3.90, "count": 103 } } },
{ "name": "개포4동", "rate": 3.68, "votes": { "polling": { "rate": 3.65, "count": 295 }, "early": { "rate": 3.75, "count": 119 } } },
{ "name": "일원본동", "rate": 4.66, "votes": { "polling": { "rate": 5.05, "count": 401 }, "early": { "rate": 3.78, "count": 133 } } },
{ "name": "일원1동", "rate": 3.10, "votes": { "polling": { "rate": 3.36, "count": 173 }, "early": { "rate": 2.31, "count": 38 } } },
{ "name": "수서동", "rate": 2.77, "votes": { "polling": { "rate": 2.78, "count": 154 }, "early": { "rate": 2.74, "count": 65 } } },
{ "name": "세곡동", "rate": 3.71, "votes": { "polling": { "rate": 3.92, "count": 682 }, "early": { "rate": 2.94, "count": 136 } } },
// 관외사전투표
{ "name": "송파구_관외사전투표", "rate": 4.51, "votes": { "absentee": { "rate": 4.51, "count": 1833 } } },

// 동별 (polling = 선거일투표, early = 관내사전투표)
{ "name": "풍납1동", "rate": 3.27, "votes": { "polling": { "rate": 3.61, "count": 125 }, "early": { "rate": 2.78, "count": 67 } } },
{ "name": "풍납2동", "rate": 4.13, "votes": { "polling": { "rate": 4.14, "count": 313 }, "early": { "rate": 4.11, "count": 175 } } },
{ "name": "거여1동", "rate": 2.14, "votes": { "polling": { "rate": 2.20, "count": 90 }, "early": { "rate": 2.01, "count": 38 } } },
{ "name": "거여2동", "rate": 2.95, "votes": { "polling": { "rate": 3.14, "count": 269 }, "early": { "rate": 2.45, "count": 83 } } },
{ "name": "마천1동", "rate": 1.71, "votes": { "polling": { "rate": 1.58, "count": 86 }, "early": { "rate": 2.03, "count": 44 } } },
{ "name": "마천2동", "rate": 1.97, "votes": { "polling": { "rate": 1.96, "count": 116 }, "early": { "rate": 2.00, "count": 63 } } },
{ "name": "방이1동", "rate": 3.22, "votes": { "polling": { "rate": 3.19, "count": 171 }, "early": { "rate": 3.29, "count": 82 } } },
{ "name": "방이2동", "rate": 3.88, "votes": { "polling": { "rate": 3.84, "count": 354 }, "early": { "rate": 4.03, "count": 118 } } },
{ "name": "오륜동", "rate": 4.48, "votes": { "polling": { "rate": 4.49, "count": 295 }, "early": { "rate": 4.45, "count": 126 } } },
{ "name": "오금동", "rate": 2.85, "votes": { "polling": { "rate": 2.80, "count": 397 }, "early": { "rate": 2.99, "count": 129 } } },
{ "name": "송파1동", "rate": 3.30, "votes": { "polling": { "rate": 3.20, "count": 248 }, "early": { "rate": 3.52, "count": 135 } } },
{ "name": "송파2동", "rate": 4.01, "votes": { "polling": { "rate": 3.97, "count": 278 }, "early": { "rate": 4.11, "count": 125 } } },
{ "name": "석촌동", "rate": 3.39, "votes": { "polling": { "rate": 3.55, "count": 344 }, "early": { "rate": 3.03, "count": 130 } } },
{ "name": "삼전동", "rate": 3.28, "votes": { "polling": { "rate": 3.37, "count": 311 }, "early": { "rate": 3.09, "count": 133 } } },
{ "name": "가락본동", "rate": 3.83, "votes": { "polling": { "rate": 3.85, "count": 327 }, "early": { "rate": 3.76, "count": 121 } } },
{ "name": "가락1동", "rate": 4.29, "votes": { "polling": { "rate": 4.05, "count": 407 }, "early": { "rate": 4.87, "count": 195 } } },
{ "name": "가락2동", "rate": 3.34, "votes": { "polling": { "rate": 3.39, "count": 363 }, "early": { "rate": 3.14, "count": 97 } } },
{ "name": "문정1동", "rate": 3.42, "votes": { "polling": { "rate": 3.33, "count": 238 }, "early": { "rate": 3.67, "count": 103 } } },
{ "name": "문정2동", "rate": 4.71, "votes": { "polling": { "rate": 4.66, "count": 566 }, "early": { "rate": 4.96, "count": 111 } } },
{ "name": "장지동", "rate": 3.54, "votes": { "polling": { "rate": 3.78, "count": 431 }, "early": { "rate": 2.93, "count": 131 } } },
{ "name": "잠실본동", "rate": 3.46, "votes": { "polling": { "rate": 3.51, "count": 301 }, "early": { "rate": 3.36, "count": 137 } } },
{ "name": "잠실2동", "rate": 4.81, "votes": { "polling": { "rate": 5.09, "count": 646 }, "early": { "rate": 3.99, "count": 172 } } },
{ "name": "잠실3동", "rate": 3.66, "votes": { "polling": { "rate": 3.67, "count": 517 }, "early": { "rate": 3.59, "count": 101 } } },
{ "name": "잠실4동", "rate": 5.40, "votes": { "polling": { "rate": 5.39, "count": 675 }, "early": { "rate": 5.43, "count": 223 } } },
{ "name": "잠실6동", "rate": 4.42, "votes": { "polling": { "rate": 4.14, "count": 246 }, "early": { "rate": 4.99, "count": 146 } } },
{ "name": "잠실7동", "rate": 4.42, "votes": { "polling": { "rate": 3.95, "count": 163 }, "early": { "rate": 5.63, "count": 89 } } },
{ "name": "위례동", "rate": 4.05, "votes": { "polling": { "rate": 4.13, "count": 630 }, "early": { "rate": 3.80, "count": 182 } } },
// 관외사전투표
{ "name": "강동구_관외사전투표", "rate": 4.33, "votes": { "absentee": { "rate": 4.33, "count": 1309 } } },

// 동별 (polling = 선거일투표, early = 관내사전투표)
{ "name": "강일동", "rate": 2.85, "votes": { "polling": { "rate": 2.98, "count": 369 }, "early": { "rate": 2.53, "count": 129 } } },
{ "name": "상일제1동", "rate": 4.40, "votes": { "polling": { "rate": 4.51, "count": 655 }, "early": { "rate": 4.09, "count": 194 } } },
{ "name": "상일제2동", "rate": 3.56, "votes": { "polling": { "rate": 3.71, "count": 167 }, "early": { "rate": 3.23, "count": 63 } } },
{ "name": "명일제1동", "rate": 3.64, "votes": { "polling": { "rate": 3.66, "count": 325 }, "early": { "rate": 3.59, "count": 143 } } },
{ "name": "명일제2동", "rate": 3.84, "votes": { "polling": { "rate": 3.72, "count": 246 }, "early": { "rate": 4.22, "count": 95 } } },
{ "name": "고덕제1동", "rate": 3.65, "votes": { "polling": { "rate": 3.83, "count": 306 }, "early": { "rate": 3.23, "count": 115 } } },
{ "name": "고덕제2동", "rate": 3.70, "votes": { "polling": { "rate": 3.86, "count": 363 }, "early": { "rate": 3.21, "count": 97 } } },
{ "name": "암사제1동", "rate": 2.55, "votes": { "polling": { "rate": 2.78, "count": 299 }, "early": { "rate": 1.94, "count": 82 } } },
{ "name": "암사제2동", "rate": 3.54, "votes": { "polling": { "rate": 3.77, "count": 184 }, "early": { "rate": 3.26, "count": 129 } } },
{ "name": "암사제3동", "rate": 3.54, "votes": { "polling": { "rate": 4.06, "count": 263 }, "early": { "rate": 2.48, "count": 78 } } },
{ "name": "천호제1동", "rate": 2.44, "votes": { "polling": { "rate": 2.67, "count": 218 }, "early": { "rate": 1.89, "count": 66 } } },
{ "name": "천호제2동", "rate": 3.51, "votes": { "polling": { "rate": 3.63, "count": 449 }, "early": { "rate": 3.19, "count": 150 } } },
{ "name": "천호제3동", "rate": 3.61, "votes": { "polling": { "rate": 3.60, "count": 342 }, "early": { "rate": 3.63, "count": 115 } } },
{ "name": "성내제1동", "rate": 3.84, "votes": { "polling": { "rate": 4.11, "count": 268 }, "early": { "rate": 3.31, "count": 109 } } },
{ "name": "성내제2동", "rate": 3.72, "votes": { "polling": { "rate": 3.88, "count": 311 }, "early": { "rate": 3.40, "count": 134 } } },
{ "name": "성내제3동", "rate": 3.10, "votes": { "polling": { "rate": 3.32, "count": 238 }, "early": { "rate": 2.71, "count": 109 } } },
{ "name": "길동", "rate": 2.91, "votes": { "polling": { "rate": 2.97, "count": 491 }, "early": { "rate": 2.78, "count": 170 } } },
{ "name": "둔촌제1동", "rate": 5.57, "votes": { "polling": { "rate": 5.54, "count": 717 }, "early": { "rate": 5.67, "count": 308 } } },
{ "name": "둔촌제2동", "rate": 3.97, "votes": { "polling": { "rate": 4.21, "count": 397 }, "early": { "rate": 3.35, "count": 121 } } },
    ]
  },
{ name: '부산', rate: 2.52, votes: 44227, seats: 0, type: '광역',
  districts: [
    { name: '중구', rate: 2.09, votes: 423 },
    { name: '서구', rate: 2.39, votes: 1331 },
    { name: '동구', rate: 1.88, votes: 870 },
    { name: '영도구', rate: 1.76, votes: 966 },
    { name: '부산진구', rate: 2.47, votes: 4813 },
    { name: '동래구', rate: 2.86, votes: 4188 },
    { name: '남구', rate: 2.78, votes: 3886 },
    { name: '북구', rate: 2.68, votes: 4297 },
    { name: '해운대구', rate: 2.80, votes: 5508 },
    { name: '기장군', rate: 2.23, votes: 1917 },
    { name: '사하구', rate: 2.17, votes: 3240 },
    { name: '금정구', rate: 3.27, votes: 3780 },
    { name: '강서구', rate: 2.46, votes: 1829 },
    { name: '연제구', rate: 2.51, votes: 2927 },
    { name: '수영구', rate: 2.32, votes: 2094 },
    { name: '사상구', rate: 2.04, votes: 2158 }
  ],
    neighborhoods:[
{
    "name": "중구_관외사전투표",
    "rate": 3.25,
    "votes": {
      "absentee": { "rate": 3.25, "count": 80 }
    }
  },
  {
    "name": "중앙동",
    "rate": 3.34,
    "votes": {
      "polling": { "rate": 2.84, "count": 26 },
      "early": { "rate": 4.56, "count": 17 }
    }
  },
  {
    "name": "동광동",
    "rate": 1.38,
    "votes": {
      "polling": { "rate": 1.65, "count": 11 },
      "early": { "rate": 0.86, "count": 3 }
    }
  },
  {
    "name": "대청동",
    "rate": 1.50,
    "votes": {
      "polling": { "rate": 1.57, "count": 29 },
      "early": { "rate": 1.36, "count": 11 }
    }
  },
  {
    "name": "보수동",
    "rate": 1.81,
    "votes": {
      "polling": { "rate": 1.78, "count": 60 },
      "early": { "rate": 1.88, "count": 25 }
    }
  },
  {
    "name": "부평동",
    "rate": 1.78,
    "votes": {
      "polling": { "rate": 1.12, "count": 16 },
      "early": { "rate": 3.01, "count": 23 }
    }
  },
  {
    "name": "광복동",
    "rate": 1.82,
    "votes": {
      "polling": { "rate": 2.19, "count": 7 },
      "early": { "rate": 1.14, "count": 2 }
    }
  },
  {
    "name": "남포동",
    "rate": 1.50,
    "votes": {
      "polling": { "rate": 1.49, "count": 4 },
      "early": { "rate": 1.53, "count": 2 }
    }
  },
  {
    "name": "영주제1동",
    "rate": 2.98,
    "votes": {
      "polling": { "rate": 2.99, "count": 36 },
      "early": { "rate": 2.97, "count": 17 }
    }
  },
  {
    "name": "영주제2동",
    "rate": 1.70,
    "votes": {
      "polling": { "rate": 1.67, "count": 41 },
      "early": { "rate": 1.78, "count": 12 }
    }
  },
 {
    "name": "서구_관외사전투표",
    "rate": 3.55,
    "votes": {
      "absentee": { "rate": 3.55, "count": 185 }
    }
  },
  {
    "name": "동대신제1동",
    "rate": 2.15,
    "votes": {
      "polling": { "rate": 1.82, "count": 34 },
      "early": { "rate": 2.91, "count": 24 }
    }
  },
  {
    "name": "동대신제2동",
    "rate": 1.77,
    "votes": {
      "polling": { "rate": 1.75, "count": 38 },
      "early": { "rate": 1.80, "count": 14 }
    }
  },
  {
    "name": "동대신제3동",
    "rate": 2.99,
    "votes": {
      "polling": { "rate": 2.74, "count": 67 },
      "early": { "rate": 3.43, "count": 48 }
    }
  },
  {
    "name": "서대신제1동",
    "rate": 2.26,
    "votes": {
      "polling": { "rate": 2.31, "count": 118 },
      "early": { "rate": 2.12, "count": 45 }
    }
  },
  {
    "name": "서대신제3동",
    "rate": 1.89,
    "votes": {
      "polling": { "rate": 1.92, "count": 43 },
      "early": { "rate": 1.83, "count": 24 }
    }
  },
  {
    "name": "서대신제4동",
    "rate": 3.07,
    "votes": {
      "polling": { "rate": 2.88, "count": 68 },
      "early": { "rate": 3.43, "count": 45 }
    }
  },
  {
    "name": "부민동",
    "rate": 3.31,
    "votes": {
      "polling": { "rate": 3.53, "count": 84 },
      "early": { "rate": 2.89, "count": 35 }
    }
  },
  {
    "name": "아미동",
    "rate": 2.09,
    "votes": {
      "polling": { "rate": 2.31, "count": 47 },
      "early": { "rate": 1.44, "count": 10 }
    }
  },
  {
    "name": "초장동",
    "rate": 1.60,
    "votes": {
      "polling": { "rate": 1.65, "count": 17 },
      "early": { "rate": 1.50, "count": 8 }
    }
  },
  {
    "name": "충무동",
    "rate": 1.90,
    "votes": {
      "polling": { "rate": 2.00, "count": 60 },
      "early": { "rate": 1.70, "count": 27 }
    }
  },
  {
    "name": "남부민제1동",
    "rate": 1.59,
    "votes": {
      "polling": { "rate": 1.71, "count": 26 },
      "early": { "rate": 1.32, "count": 9 }
    }
  },
  {
    "name": "남부민제2동",
    "rate": 1.35,
    "votes": {
      "polling": { "rate": 1.19, "count": 31 },
      "early": { "rate": 1.82, "count": 17 }
    }
  },
  {
    "name": "암남동",
    "rate": 2.47,
    "votes": {
      "polling": { "rate": 2.43, "count": 145 },
      "early": { "rate": 2.59, "count": 54 }
    }
  },
{
    "name": "동구_관외사전투표",
    "rate": 2.95,
    "votes": {
      "absentee": { "rate": 2.95, "count": 138 }
    }
  },
  {
    "name": "초량제1동",
    "rate": 2.71,
    "votes": {
      "polling": { "rate": 2.45, "count": 34 },
      "early": { "rate": 3.19, "count": 24 }
    }
  },
  {
    "name": "초량제2동",
    "rate": 1.57,
    "votes": {
      "polling": { "rate": 1.37, "count": 21 },
      "early": { "rate": 1.48, "count": 14 }
    }
  },
  {
    "name": "초량제3동",
    "rate": 2.25,
    "votes": {
      "polling": { "rate": 2.42, "count": 95 },
      "early": { "rate": 1.94, "count": 42 }
    }
  },
  {
    "name": "초량제6동",
    "rate": 1.29,
    "votes": {
      "polling": { "rate": 1.38, "count": 22 },
      "early": { "rate": 1.13, "count": 10 }
    }
  },
  {
    "name": "수정제1동",
    "rate": 1.83,
    "votes": {
      "polling": { "rate": 1.36, "count": 16 },
      "early": { "rate": 2.40, "count": 23 }
    }
  },
  {
    "name": "수정제2동",
    "rate": 1.80,
    "votes": {
      "polling": { "rate": 1.44, "count": 41 },
      "early": { "rate": 2.33, "count": 27 }
    }
  },
  {
    "name": "수정제4동",
    "rate": 1.43,
    "votes": {
      "polling": { "rate": 1.27, "count": 13 },
      "early": { "rate": 1.70, "count": 10 }
    }
  },
  {
    "name": "수정제5동",
    "rate": 1.18,
    "votes": {
      "polling": { "rate": 1.40, "count": 19 },
      "early": { "rate": 0.87, "count": 8 }
    }
  },
  {
    "name": "좌천동",
    "rate": 1.84,
    "votes": {
      "polling": { "rate": 2.00, "count": 70 },
      "early": { "rate": 1.52, "count": 27 }
    }
  },
  {
    "name": "범일제1동",
    "rate": 1.21,
    "votes": {
      "polling": { "rate": 1.19, "count": 44 },
      "early": { "rate": 1.27, "count": 16 }
    }
  },
  {
    "name": "범일제2동",
    "rate": 1.92,
    "votes": {
      "polling": { "rate": 1.94, "count": 46 },
      "early": { "rate": 1.89, "count": 25 }
    }
  },
  {
    "name": "범일제5동",
    "rate": 2.31,
    "votes": {
      "polling": { "rate": 2.26, "count": 65 },
      "early": { "rate": 2.47, "count": 20 }
    }
  },
{ name: '영도_관외사전투표', rate: 2.74,
    votes: { absentee: { rate: 2.74, count: 131 } } },

  { name: '남항동', rate: 1.36,
    votes: {
      polling: { rate: 1.23, count: 41 },
      early: { rate: 1.85, count: 17 }
    }
  },

  { name: '영선제1동', rate: 1.43,
    votes: {
      polling: { rate: 1.61, count: 17 },
      early: { rate: 1.18, count: 9 }
    }
  },

  { name: '영선제2동', rate: 1.66,
    votes: {
      polling: { rate: 1.72, count: 41 },
      early: { rate: 1.59, count: 40 }
    }
  },

  { name: '신선동', rate: 1.52,
    votes: {
      polling: { rate: 1.60, count: 30 },
      early: { rate: 1.34, count: 12 }
    }
  },

  { name: '봉래제1동', rate: 2.12,
    votes: {
      polling: { rate: 2.13, count: 43 },
      early: { rate: 2.11, count: 34 }
    }
  },

  { name: '봉래제2동', rate: 1.98,
    votes: {
      polling: { rate: 2.05, count: 48 },
      early: { rate: 1.81, count: 20 }
    }
  },

  { name: '청학제1동', rate: 1.41,
    votes: {
      polling: { rate: 1.37, count: 22 },
      early: { rate: 1.50, count: 10 }
    }
  },

  { name: '청학제2동', rate: 1.62,
    votes: {
      polling: { rate: 1.50, count: 78 },
      early: { rate: 1.92, count: 38 }
    }
  },

  { name: '동삼제1동', rate: 1.76,
    votes: {
      polling: { rate: 1.77, count: 148 },
      early: { rate: 1.75, count: 71 }
    }
  },

  { name: '동삼제2동', rate: 2.04,
    votes: {
      polling: { rate: 2.04, count: 29 },
      early: { rate: 2.04, count: 25 }
    }
  },

  { name: '동삼제3동', rate: 1.35,
    votes: {
      polling: { rate: 1.36, count: 36 },
      early: { rate: 1.34, count: 23 }
    }
  },
{ name: '부산진구_관외사전투표', rate: 3.51,
    votes: { absentee: { rate: 3.51, count: 765 } } },

  { name: '부전제1동', rate: 2.69,
    votes: {
      polling: { rate: 3.11, count: 126 },
      early: { rate: 1.58, count: 24 }
    }
  },

  { name: '부전제2동', rate: 2.55,
    votes: {
      polling: { rate: 2.74, count: 103 },
      early: { rate: 1.77, count: 16 }
    }
  },

  { name: '연지동', rate: 2.33,
    votes: {
      polling: { rate: 2.28, count: 217 },
      early: { rate: 2.47, count: 81 }
    }
  },

  { name: '초읍동', rate: 2.01,
    votes: {
      polling: { rate: 2.05, count: 163 },
      early: { rate: 1.92, count: 59 }
    }
  },

  { name: '양정제1동', rate: 2.25,
    votes: {
      polling: { rate: 2.24, count: 162 },
      early: { rate: 2.27, count: 69 }
    }
  },

  { name: '양정제2동', rate: 2.52,
    votes: {
      polling: { rate: 2.49, count: 160 },
      early: { rate: 2.61, count: 44 }
    }
  },

  { name: '전포제1동', rate: 2.73,
    votes: {
      polling: { rate: 2.72, count: 167 },
      early: { rate: 2.75, count: 67 }
    }
  },

  { name: '전포제2동', rate: 2.35,
    votes: {
      polling: { rate: 2.34, count: 184 },
      early: { rate: 2.39, count: 61 }
    }
  },

  { name: '부암제1동', rate: 2.35,
    votes: {
      polling: { rate: 2.45, count: 193 },
      early: { rate: 2.05, count: 52 }
    }
  },

  { name: '부암제3동', rate: 2.16,
    votes: {
      polling: { rate: 2.17, count: 184 },
      early: { rate: 2.13, count: 68 }
    }
  },

  { name: '당감제1동', rate: 2.14,
    votes: {
      polling: { rate: 2.26, count: 176 },
      early: { rate: 1.78, count: 44 }
    }
  },

  { name: '당감제2동', rate: 2.42,
    votes: {
      polling: { rate: 2.30, count: 103 },
      early: { rate: 2.80, count: 38 }
    }
  },

  { name: '당감제4동', rate: 2.40,
    votes: {
      polling: { rate: 2.59, count: 87 },
      early: { rate: 1.99, count: 31 }
    }
  },

  { name: '가야제1동', rate: 2.01,
    votes: {
      polling: { rate: 2.16, count: 110 },
      early: { rate: 1.68, count: 38 }
    }
  },

  { name: '가야제2동', rate: 2.39,
    votes: {
      polling: { rate: 2.17, count: 141 },
      early: { rate: 2.99, count: 72 }
    }
  },

  { name: '개금제1동', rate: 2.57,
    votes: {
      polling: { rate: 2.52, count: 148 },
      early: { rate: 2.68, count: 68 }
    }
  },

  { name: '개금제2동', rate: 2.80,
    votes: {
      polling: { rate: 2.82, count: 93 },
      early: { rate: 2.74, count: 43 }
    }
  },

  { name: '개금제3동', rate: 2.25,
    votes: {
      polling: { rate: 2.22, count: 225 },
      early: { rate: 2.35, count: 71 }
    }
  },

  { name: '범천제1동', rate: 2.44,
    votes: {
      polling: { rate: 2.53, count: 90 },
      early: { rate: 2.21, count: 31 }
    }
  },

  { name: '범천제2동', rate: 2.30,
    votes: {
      polling: { rate: 2.37, count: 171 },
      early: { rate: 2.11, count: 53 }
    }
  },
{ name: '동래_관외사전투표', rate: 4.38,
    votes: { absentee: { rate: 4.38, count: 668 } } },

  { name: '수민동', rate: 2.53,
    votes: { polling: { rate: 2.45, count: 255 }, early: { rate: 2.76, count: 103 } } },

  { name: '복산동', rate: 2.28,
    votes: { polling: { rate: 1.85, count: 56 }, early: { rate: 3.23, count: 44 } } },

  { name: '명륜동', rate: 3.52,
    votes: { polling: { rate: 3.38, count: 287 }, early: { rate: 3.88, count: 123 } } },

  { name: '온천제1동', rate: 2.99,
    votes: { polling: { rate: 2.85, count: 338 }, early: { rate: 3.45, count: 115 } } },

  { name: '온천제2동', rate: 2.85,
    votes: { polling: { rate: 2.70, count: 236 }, early: { rate: 3.27, count: 100 } } },

  { name: '온천제3동', rate: 2.54,
    votes: { polling: { rate: 2.42, count: 299 }, early: { rate: 2.92, count: 105 } } },

  { name: '사직제1동', rate: 2.72,
    votes: { polling: { rate: 2.44, count: 93 }, early: { rate: 3.31, count: 62 } } },

  { name: '사직제2동', rate: 3.15,
    votes: { polling: { rate: 3.21, count: 266 }, early: { rate: 3.02, count: 101 } } },

  { name: '사직제3동', rate: 3.03,
    votes: { polling: { rate: 3.05, count: 167 }, early: { rate: 2.99, count: 59 } } },

  { name: '안락제1동', rate: 1.92,
    votes: { polling: { rate: 1.91, count: 92 }, early: { rate: 1.94, count: 41 } } },

  { name: '안락제2동', rate: 2.45,
    votes: { polling: { rate: 2.56, count: 262 }, early: { rate: 2.04, count: 53 } } },

  { name: '명장제1동', rate: 2.10,
    votes: { polling: { rate: 1.90, count: 94 }, early: { rate: 2.62, count: 48 } } },

  { name: '명장제2동', rate: 1.75,
    votes: { polling: { rate: 1.82, count: 85 }, early: { rate: 1.54, count: 26 } } },
{ name: '남구_관외사전투표', rate: 4.61,
    votes: { absentee: { rate: 4.61, count: 641 } } },

  { name: '대연제1동', rate: 2.27,
    votes: { polling: { rate: 2.25, count: 104 }, early: { rate: 2.31, count: 51 } } },

  { name: '대연제3동', rate: 3.48,
    votes: { polling: { rate: 3.42, count: 441 }, early: { rate: 3.69, count: 131 } } },

  { name: '대연제4동', rate: 2.31,
    votes: { polling: { rate: 2.38, count: 117 }, early: { rate: 2.11, count: 33 } } },

  { name: '대연제5동', rate: 2.47,
    votes: { polling: { rate: 2.51, count: 130 }, early: { rate: 2.39, count: 59 } } },

  { name: '대연제6동', rate: 3.05,
    votes: { polling: { rate: 3.00, count: 162 }, early: { rate: 3.16, count: 80 } } },

  { name: '용호제1동', rate: 2.68,
    votes: { polling: { rate: 2.83, count: 454 }, early: { rate: 1.65, count: 39 } } },

  { name: '용호제2동', rate: 2.36,
    votes: { polling: { rate: 2.28, count: 163 }, early: { rate: 2.59, count: 60 } } },

  { name: '용호제3동', rate: 2.57,
    votes: { polling: { rate: 1.87, count: 67 }, early: { rate: 3.23, count: 122 } } },

  { name: '용호제4동', rate: 2.05,
    votes: { polling: { rate: 1.83, count: 44 }, early: { rate: 2.37, count: 40 } } },

  { name: '용당동', rate: 1.84,
    votes: { polling: { rate: 1.73, count: 50 }, early: { rate: 2.19, count: 20 } } },

  { name: '감만제1동', rate: 2.03,
    votes: { polling: { rate: 2.00, count: 56 }, early: { rate: 2.12, count: 22 } } },

  { name: '감만제2동', rate: 2.23,
    votes: { polling: { rate: 2.23, count: 46 }, early: { rate: 2.22, count: 26 } } },

  { name: '우암동', rate: 2.05,
    votes: { polling: { rate: 2.07, count: 136 }, early: { rate: 2.00, count: 39 } } },

  { name: '문현제1동', rate: 2.00,
    votes: { polling: { rate: 1.49, count: 49 }, early: { rate: 2.83, count: 57 } } },

  { name: '문현제2동', rate: 2.46,
    votes: { polling: { rate: 2.05, count: 51 }, early: { rate: 3.39, count: 38 } } },

  { name: '문현제3동', rate: 2.86,
    votes: { polling: { rate: 2.85, count: 156 }, early: { rate: 2.88, count: 65 } } },

  { name: '문현제4동', rate: 2.79,
    votes: { polling: { rate: 2.97, count: 90 }, early: { rate: 2.38, count: 32 } } },
{ name: '북구_관외사전투표', rate: 4.20,
    votes: { absentee: { rate: 4.20, count: 574 } } },

  { name: '구포제1동', rate: 2.73,
    votes: { polling: { rate: 2.84, count: 164 }, early: { rate: 2.53, count: 77 } } },

  { name: '구포제2동', rate: 2.30,
    votes: { polling: { rate: 2.15, count: 198 }, early: { rate: 2.78, count: 85 } } },

  { name: '구포제3동', rate: 1.94,
    votes: { polling: { rate: 2.11, count: 121 }, early: { rate: 1.64, count: 53 } } },

  { name: '금곡동', rate: 2.43,
    votes: { polling: { rate: 2.38, count: 355 }, early: { rate: 2.59, count: 99 } } },

  { name: '화명제1동', rate: 2.89,
    votes: { polling: { rate: 2.78, count: 448 }, early: { rate: 3.29, count: 138 } } },

  { name: '화명제2동', rate: 2.55,
    votes: { polling: { rate: 2.46, count: 151 }, early: { rate: 2.78, count: 65 } } },

  { name: '화명제3동', rate: 3.37,
    votes: { polling: { rate: 3.30, count: 382 }, early: { rate: 3.57, count: 144 } } },

  { name: '덕천제1동', rate: 2.19,
    votes: { polling: { rate: 2.17, count: 125 }, early: { rate: 2.24, count: 51 } } },

  { name: '덕천제2동', rate: 2.45,
    votes: { polling: { rate: 2.31, count: 94 }, early: { rate: 2.76, count: 51 } } },

  { name: '덕천제3동', rate: 1.92,
    votes: { polling: { rate: 1.88, count: 63 }, early: { rate: 2.00, count: 32 } } },

  { name: '만덕제1동', rate: 2.58,
    votes: { polling: { rate: 2.60, count: 158 }, early: { rate: 2.53, count: 68 } } },

  { name: '만덕제2동', rate: 2.23,
    votes: { polling: { rate: 2.06, count: 216 }, early: { rate: 2.66, count: 110 } } },

  { name: '만덕제3동', rate: 2.52,
    votes: { polling: { rate: 2.52, count: 176 }, early: { rate: 2.51, count: 86 } } },
{ name: '해운대_관외사전투표', rate: 4.34,
    votes: { absentee: { rate: 4.34, count: 854 } } },

  { name: '우제1동', rate: 2.28,
    votes: { polling: { rate: 2.32, count: 188 }, early: { rate: 2.15, count: 47 } } },

  { name: '우제2동', rate: 3.19,
    votes: { polling: { rate: 3.37, count: 368 }, early: { rate: 2.59, count: 81 } } },

  { name: '우제3동', rate: 3.22,
    votes: { polling: { rate: 2.96, count: 297 }, early: { rate: 4.12, count: 120 } } },

  { name: '중제1동', rate: 2.85,
    votes: { polling: { rate: 2.85, count: 249 }, early: { rate: 2.86, count: 85 } } },

  { name: '중제2동', rate: 2.71,
    votes: { polling: { rate: 2.59, count: 124 }, early: { rate: 2.99, count: 56 } } },

  { name: '좌제1동', rate: 3.15,
    votes: { polling: { rate: 2.84, count: 170 }, early: { rate: 4.24, count: 71 } } },

  { name: '좌제2동', rate: 3.12,
    votes: { polling: { rate: 3.00, count: 313 }, early: { rate: 3.45, count: 133 } } },

  { name: '좌제3동', rate: 2.64,
    votes: { polling: { rate: 2.60, count: 135 }, early: { rate: 2.72, count: 66 } } },

  { name: '좌제4동', rate: 3.05,
    votes: { polling: { rate: 2.87, count: 233 }, early: { rate: 3.42, count: 133 } } },

  { name: '송정동', rate: 2.37,
    votes: { polling: { rate: 2.10, count: 66 }, early: { rate: 3.10, count: 36 } } },

  { name: '반여제1동', rate: 2.30,
    votes: { polling: { rate: 2.33, count: 315 }, early: { rate: 2.20, count: 84 } } },

  { name: '반여제2동', rate: 1.45,
    votes: { polling: { rate: 1.23, count: 43 }, early: { rate: 1.86, count: 35 } } },

  { name: '반여제3동', rate: 1.94,
    votes: { polling: { rate: 1.79, count: 42 }, early: { rate: 2.24, count: 25 } } },

  { name: '반여제4동', rate: 2.67,
    votes: { polling: { rate: 2.62, count: 139 }, early: { rate: 2.82, count: 50 } } },

  { name: '반송제1동', rate: 1.51,
    votes: { polling: { rate: 1.68, count: 60 }, early: { rate: 1.25, count: 28 } } },

  { name: '반송제2동', rate: 1.55,
    votes: { polling: { rate: 1.43, count: 100 }, early: { rate: 1.78, count: 63 } } },

  { name: '재송제1동', rate: 3.23,
    votes: { polling: { rate: 3.30, count: 405 }, early: { rate: 2.93, count: 94 } } },

  { name: '재송제2동', rate: 1.92,
    votes: { polling: { rate: 1.81, count: 131 }, early: { rate: 2.24, count: 57 } } },
{ name: '기장군_관외사전투표', rate: 3.63,
    votes: { absentee: { rate: 3.63, count: 338 } } },

  { name: '기장읍', rate: 1.66,
    votes: { polling: { rate: 1.64, count: 302 }, early: { rate: 1.76, count: 74 } } },

  { name: '장안읍', rate: 2.16,
    votes: { polling: { rate: 2.09, count: 64 }, early: { rate: 2.39, count: 25 } } },

  { name: '정관읍', rate: 2.04,
    votes: { polling: { rate: 2.13, count: 516 }, early: { rate: 1.71, count: 127 } } },

  { name: '일광읍', rate: 2.83,
    votes: { polling: { rate: 2.75, count: 301 }, early: { rate: 3.10, count: 102 } } },

  { name: '철마면', rate: 1.85,
    votes: { polling: { rate: 1.67, count: 49 }, early: { rate: 2.90, count: 15 } } },
{ name: '사하_관외사전투표', rate: 3.36,
    votes: { absentee: { rate: 3.36, count: 428 } } },

  { name: '괴정제1동', rate: 2.04,
    votes: { polling: { rate: 1.99, count: 114 }, early: { rate: 2.14, count: 57 } } },

  { name: '괴정제2동', rate: 2.05,
    votes: { polling: { rate: 2.07, count: 102 }, early: { rate: 1.99, count: 35 } } },

  { name: '괴정제3동', rate: 1.89,
    votes: { polling: { rate: 1.62, count: 65 }, early: { rate: 2.47, count: 46 } } },

  { name: '괴정제4동', rate: 1.89,
    votes: { polling: { rate: 1.81, count: 76 }, early: { rate: 2.11, count: 33 } } },

  { name: '당리동', rate: 1.88,
    votes: { polling: { rate: 1.86, count: 153 }, early: { rate: 1.93, count: 69 } } },

  { name: '하단제1동', rate: 2.34,
    votes: { polling: { rate: 2.09, count: 152 }, early: { rate: 2.99, count: 84 } } },

  { name: '하단제2동', rate: 2.47,
    votes: { polling: { rate: 2.50, count: 204 }, early: { rate: 2.38, count: 63 } } },

  { name: '신평제1동', rate: 1.81,
    votes: { polling: { rate: 1.77, count: 83 }, early: { rate: 1.87, count: 42 } } },

  { name: '신평제2동', rate: 2.10,
    votes: { polling: { rate: 1.92, count: 106 }, early: { rate: 2.50, count: 64 } } },

  { name: '장림제1동', rate: 1.99,
    votes: { polling: { rate: 2.02, count: 85 }, early: { rate: 1.94, count: 41 } } },

  { name: '장림제2동', rate: 1.67,
    votes: { polling: { rate: 1.84, count: 146 }, early: { rate: 1.15, count: 30 } } },

  { name: '다대제1동', rate: 2.31,
    votes: { polling: { rate: 2.29, count: 290 }, early: { rate: 2.38, count: 89 } } },

  { name: '다대제2동', rate: 2.38,
    votes: { polling: { rate: 2.44, count: 226 }, early: { rate: 2.19, count: 74 } } },

  { name: '구평동', rate: 1.86,
    votes: { polling: { rate: 1.90, count: 71 }, early: { rate: 1.77, count: 26 } } },

  { name: '감천제1동', rate: 1.81,
    votes: { polling: { rate: 1.97, count: 114 }, early: { rate: 1.39, count: 31 } } },

  { name: '감천제2동', rate: 1.50,
    votes: { polling: { rate: 1.62, count: 25 }, early: { rate: 1.16, count: 7 } } },
{ name: '금정_관외사전투표', rate: 4.65,
    votes: { absentee: { rate: 4.65, count: 539 } } },

  { name: '서제1동', rate: 2.20,
    votes: { polling: { rate: 2.51, count: 35 }, early: { rate: 1.53, count: 10 } } },

  { name: '서제2동', rate: 2.05,
    votes: { polling: { rate: 1.87, count: 51 }, early: { rate: 2.46, count: 29 } } },

  { name: '서제3동', rate: 2.33,
    votes: { polling: { rate: 2.21, count: 71 }, early: { rate: 2.57, count: 44 } } },

  { name: '금사회동동', rate: 2.55,
    votes: { polling: { rate: 2.40, count: 53 }, early: { rate: 2.82, count: 37 } } },

  { name: '부곡제1동', rate: 2.17,
    votes: { polling: { rate: 2.39, count: 58 }, early: { rate: 1.75, count: 22 } } },

  { name: '부곡제2동', rate: 2.93,
    votes: { polling: { rate: 2.87, count: 176 }, early: { rate: 3.11, count: 71 } } },

  { name: '부곡제3동', rate: 2.98,
    votes: { polling: { rate: 2.93, count: 131 }, early: { rate: 3.78, count: 96 } } },

  { name: '부곡제4동', rate: 2.72,
    votes: { polling: { rate: 2.64, count: 97 }, early: { rate: 2.86, count: 61 } } },

  { name: '장전제1동', rate: 5.88,
    votes: { polling: { rate: 5.67, count: 338 }, early: { rate: 6.44, count: 146 } } },

  { name: '장전제2동', rate: 3.47,
    votes: { polling: { rate: 3.43, count: 302 }, early: { rate: 3.62, count: 106 } } },

  { name: '선두구동', rate: 1.53,
    votes: { polling: { rate: 1.97, count: 16 }, early: { rate: 0.54, count: 2 } } },

  { name: '청룡노포동', rate: 2.32,
    votes: { polling: { rate: 1.96, count: 61 }, early: { rate: 3.01, count: 50 } } },

  { name: '남산동', rate: 2.67,
    votes: { polling: { rate: 2.60, count: 231 }, early: { rate: 2.83, count: 95 } } },

  { name: '구서제1동', rate: 3.27,
    votes: { polling: { rate: 2.95, count: 179 }, early: { rate: 3.85, count: 127 } } },

  { name: '구서제2동', rate: 3.33,
    votes: { polling: { rate: 3.08, count: 369 }, early: { rate: 4.13, count: 155 } } },

  { name: '금성동', rate: 2.40,
    votes: { polling: { rate: 1.76, count: 6 }, early: { rate: 3.73, count: 6 } } },
 { name: '강서_관외사전투표', rate: 3.92,
    votes: { absentee: { rate: 3.92, count: 283 } } },

  { name: '대저1동', rate: 1.55,
    votes: { polling: { rate: 1.29, count: 28 }, early: { rate: 2.22, count: 18 } } },

  { name: '대저2동', rate: 2.51,
    votes: { polling: { rate: 2.24, count: 47 }, early: { rate: 3.11, count: 30 } } },

  { name: '강동동', rate: 2.24,
    votes: { polling: { rate: 2.41, count: 159 }, early: { rate: 0.92, count: 8 } } },

  { name: '명지1동', rate: 2.67,
    votes: { polling: { rate: 2.64, count: 461 }, early: { rate: 2.77, count: 170 } } },

  { name: '명지2동', rate: 2.51,
    votes: { polling: { rate: 2.49, count: 243 }, early: { rate: 2.55, count: 98 } } },

  { name: '가락동', rate: 2.46,
    votes: { polling: { rate: 2.09, count: 16 }, early: { rate: 3.12, count: 13 } } },

  { name: '녹산동', rate: 1.69,
    votes: { polling: { rate: 1.64, count: 91 }, early: { rate: 2.00, count: 20 } } },

  { name: '신호동', rate: 1.91,
    votes: { polling: { rate: 1.86, count: 81 }, early: { rate: 2.02, count: 42 } } },

  { name: '가덕도동', rate: 0.89,
    votes: { polling: { rate: 0.76, count: 10 }, early: { rate: 1.20, count: 7 } } },
{ name: '연제_관외사전투표', rate: 3.07,
    votes: { absentee: { rate: 3.07, count: 272 } } },

  { name: '삼락동', rate: 1.47,
    votes: { polling: { rate: 1.67, count: 24 }, early: { rate: 1.26, count: 18 } } },

  { name: '모라제1동', rate: 1.79,
    votes: { polling: { rate: 1.83, count: 157 }, early: { rate: 1.71, count: 75 } } },

  { name: '모라제3동', rate: 1.36,
    votes: { polling: { rate: 1.52, count: 48 }, early: { rate: 1.07, count: 18 } } },

  { name: '덕포제1동', rate: 1.64,
    votes: { polling: { rate: 1.63, count: 61 }, early: { rate: 1.66, count: 33 } } },

  { name: '덕포제2동', rate: 2.07,
    votes: { polling: { rate: 2.24, count: 96 }, early: { rate: 1.62, count: 26 } } },

  { name: '괘법동', rate: 2.35,
    votes: { polling: { rate: 2.38, count: 192 }, early: { rate: 2.25, count: 52 } } },

  { name: '감전동', rate: 1.35,
    votes: { polling: { rate: 1.42, count: 61 }, early: { rate: 1.12, count: 14 } } },

  { name: '주례제1동', rate: 2.21,
    votes: { polling: { rate: 2.00, count: 116 }, early: { rate: 2.79, count: 60 } } },

  { name: '주례제2동', rate: 2.44,
    votes: { polling: { rate: 2.37, count: 185 }, early: { rate: 2.82, count: 46 } } },

  { name: '주례제3동', rate: 1.94,
    votes: { polling: { rate: 1.95, count: 78 }, early: { rate: 1.93, count: 40 } } },

  { name: '학장동', rate: 1.80,
    votes: { polling: { rate: 1.80, count: 232 }, early: { rate: 1.79, count: 43 } } },

  { name: '엄궁동', rate: 2.14,
    votes: { polling: { rate: 2.15, count: 185 }, early: { rate: 2.19, count: 66 } } },
{ name: '수영_관외사전투표', rate: 3.66,
    votes: { absentee: { rate: 3.66, count: 456 } } },

  { name: '남천제1동', rate: 2.39,
    votes: { polling: { rate: 2.43, count: 51 }, early: { rate: 2.32, count: 24 } } },

  { name: '남천제2동', rate: 2.77,
    votes: { polling: { rate: 2.62, count: 38 }, early: { rate: 3.05, count: 24 } } },

  { name: '수영동', rate: 1.68,
    votes: { polling: { rate: 1.69, count: 31 }, early: { rate: 1.63, count: 8 } } },

  { name: '망미제1동', rate: 2.10,
    votes: { polling: { rate: 1.97, count: 88 }, early: { rate: 2.37, count: 62 } } },

  { name: '망미제2동', rate: 1.84,
    votes: { polling: { rate: 1.76, count: 30 }, early: { rate: 2.21, count: 12 } } },

  { name: '광안제1동', rate: 2.26,
    votes: { polling: { rate: 2.23, count: 63 }, early: { rate: 2.44, count: 45 } } },

  { name: '광안제2동', rate: 2.09,
    votes: { polling: { rate: 1.93, count: 37 }, early: { rate: 2.40, count: 32 } } },

  { name: '광안제3동', rate: 2.32,
    votes: { polling: { rate: 2.08, count: 18 }, early: { rate: 2.72, count: 14 } } },

  { name: '광안제4동', rate: 2.07,
    votes: { polling: { rate: 1.97, count: 24 }, early: { rate: 2.34, count: 27 } } },

  { name: '민락동', rate: 2.12,
    votes: { polling: { rate: 2.19, count: 71 }, early: { rate: 2.00, count: 33 } } },
{ name: '사상_관외사전투표', rate: 3.07,
    votes: { absentee: { rate: 3.07, count: 272 } } },

  { name: '삼락동', rate: 1.47,
    votes: { polling: { rate: 1.67, count: 24 }, early: { rate: 1.26, count: 18 } } },

  { name: '모라제1동', rate: 1.79,
    votes: { polling: { rate: 1.83, count: 157 }, early: { rate: 1.71, count: 75 } } },

  { name: '모라제3동', rate: 1.36,
    votes: { polling: { rate: 1.52, count: 48 }, early: { rate: 1.07, count: 18 } } },

  { name: '덕포제1동', rate: 1.64,
    votes: { polling: { rate: 1.63, count: 61 }, early: { rate: 1.66, count: 33 } } },

  { name: '덕포제2동', rate: 2.07,
    votes: { polling: { rate: 2.24, count: 96 }, early: { rate: 1.62, count: 26 } } },

  { name: '괘법동', rate: 2.35,
    votes: { polling: { rate: 2.38, count: 192 }, early: { rate: 2.25, count: 52 } } },

  { name: '감전동', rate: 1.36,
    votes: { polling: { rate: 1.42, count: 61 }, early: { rate: 1.12, count: 14 } } },

  { name: '주례제1동', rate: 2.21,
    votes: { polling: { rate: 2.00, count: 116 }, early: { rate: 2.79, count: 60 } } },

  { name: '주례제2동', rate: 2.44,
    votes: { polling: { rate: 2.37, count: 185 }, early: { rate: 2.82, count: 46 } } },

  { name: '주례제3동', rate: 1.94,
    votes: { polling: { rate: 1.95, count: 78 }, early: { rate: 1.93, count: 40 } } },

  { name: '학장동', rate: 1.79,
    votes: { polling: { rate: 1.83, count: 183 }, early: { rate: 1.66, count: 49 } } },

  { name: '엄궁동', rate: 2.14,
    votes: { polling: { rate: 2.23, count: 185 }, early: { rate: 1.94, count: 66 } } },
{ name: '연산제1동', rate: 2.16,
    votes: { polling: { rate: 2.14, count: 119 }, early: { rate: 2.22, count: 46 } } },

  { name: '연산제2동', rate: 2.93,
    votes: { polling: { rate: 2.89, count: 259 }, early: { rate: 3.03, count: 85 } } },

  { name: '연산제3동', rate: 1.88,
    votes: { polling: { rate: 1.86, count: 69 }, early: { rate: 1.93, count: 27 } } },

  { name: '연산제4동', rate: 1.95,
    votes: { polling: { rate: 2.02, count: 127 }, early: { rate: 1.76, count: 39 } } },

  { name: '연산제5동', rate: 2.48,
    votes: { polling: { rate: 2.35, count: 122 }, early: { rate: 2.81, count: 62 } } },

  { name: '연산제6동', rate: 1.75,
    votes: { polling: { rate: 1.76, count: 101 }, early: { rate: 1.71, count: 26 } } },

  { name: '연산제8동', rate: 1.99,
    votes: { polling: { rate: 2.01, count: 97 }, early: { rate: 1.95, count: 34 } } },

  { name: '연산제9동', rate: 1.85,
    votes: { polling: { rate: 1.87, count: 231 }, early: { rate: 1.78, count: 55 } } },
  { name: '거제제1동', rate: 2.89,
    votes: { polling: { rate: 2.82, count: 315 }, early: { rate: 3.14, count: 86 } } },

  { name: '거제제2동', rate: 3.07,
    votes: { polling: { rate: 2.88, count: 257 }, early: { rate: 3.68, count: 104 } } },

  { name: '거제제3동', rate: 2.17,
    votes: { polling: { rate: 2.10, count: 73 }, early: { rate: 2.33, count: 38 } } },

  { name: '거제제4동', rate: 2.01,
    votes: { polling: { rate: 1.73, count: 55 }, early: { rate: 2.64, count: 38 } } }
    ]
  },
 { name: '대구', rate: 3.12, votes: 40504, seats: 0, type: '광역',
  districts: [
    { name: '중구', rate: 3.40, votes: 1868 },
    { name: '동구', rate: 2.61, votes: 4922 },
    { name: '서구', rate: 2.11, votes: 1920 },
    { name: '남구', rate: 2.46, votes: 1888 },
    { name: '북구', rate: 2.89, votes: 6450 },
    { name: '수성구', rate: 4.71, votes: 10703 },
    { name: '달서구', rate: 2.99, votes: 8497 },
    { name: '달성군', rate: 2.95, votes: 3952 },
    { name: '군위군', rate: 1.83, votes: 304 }
  ],
    neighborhoods:[
     { name: '중구_관외사전투표', rate: 4.85,
    votes: { absentee: { rate: 4.85, count: 262 } } },

  { name: '동인동', rate: 3.59,
    votes: {
      polling: { rate: 3.41, count: 140 },
      early: { rate: 4.31, count: 45 }
    } },

  { name: '삼덕동', rate: 3.87,
    votes: {
      polling: { rate: 3.82, count: 92 },
      early: { rate: 4.03, count: 33 }
    } },

  { name: '성내1동', rate: 3.85,
    votes: {
      polling: { rate: 3.50, count: 59 },
      early: { rate: 4.97, count: 26 }
    } },

  { name: '성내2동', rate: 3.00,
    votes: {
      polling: { rate: 2.56, count: 81 },
      early: { rate: 4.61, count: 40 }
    } },

  { name: '성내3동', rate: 2.92,
    votes: {
      polling: { rate: 2.58, count: 126 },
      early: { rate: 3.94, count: 64 }
    } },

  { name: '대신동', rate: 2.80,
    votes: {
      polling: { rate: 2.38, count: 68 },
      early: { rate: 3.73, count: 48 }
    } },

  { name: '남산1동', rate: 3.40,
    votes: {
      polling: { rate: 2.80, count: 51 },
      early: { rate: 5.67, count: 27 }
    } },

  { name: '남산2동', rate: 3.48,
    votes: {
      polling: { rate: 3.14, count: 87 },
      early: { rate: 4.53, count: 40 }
    } },

  { name: '남산3동', rate: 2.35,
    votes: {
      polling: { rate: 1.96, count: 43 },
      early: { rate: 3.39, count: 28 }
    } },

  { name: '남산4동', rate: 2.85,
    votes: {
      polling: { rate: 2.66, count: 162 },
      early: { rate: 3.50, count: 63 }
    } },

  { name: '대봉1동', rate: 3.85,
    votes: {
      polling: { rate: 3.70, count: 110 },
      early: { rate: 4.32, count: 38 }
    } },

  { name: '대봉2동', rate: 3.74,
    votes: {
      polling: { rate: 3.37, count: 80 },
      early: { rate: 4.58, count: 47 }
    } },
  { name: '동구_관외사전투표', rate: 4.31,
    votes: { absentee: { rate: 4.31, count: 801 } } },

  { name: '신암1동', rate: 3.15,
    votes: {
      polling: { rate: 2.89, count: 121 },
      early: { rate: 3.84, count: 58 }
    } },

  { name: '신암2동', rate: 2.37,
    votes: {
      polling: { rate: 2.28, count: 103 },
      early: { rate: 2.62, count: 47 }
    } },

  { name: '신암3동', rate: 2.69,
    votes: {
      polling: { rate: 2.76, count: 107 },
      early: { rate: 2.50, count: 40 }
    } },

  { name: '신암4동', rate: 2.35,
    votes: {
      polling: { rate: 2.41, count: 163 },
      early: { rate: 2.17, count: 44 }
    } },

  { name: '신암5동', rate: 2.26,
    votes: {
      polling: { rate: 1.84, count: 53 },
      early: { rate: 3.30, count: 39 }
    } },

  { name: '신천1·2동', rate: 2.64,
    votes: {
      polling: { rate: 2.59, count: 127 },
      early: { rate: 2.81, count: 39 }
    } },

  { name: '신천3동', rate: 3.28,
    votes: {
      polling: { rate: 3.00, count: 164 },
      early: { rate: 4.10, count: 77 }
    } },

  { name: '신천4동', rate: 3.64,
    votes: {
      polling: { rate: 3.26, count: 142 },
      early: { rate: 4.79, count: 69 }
    } },

  { name: '효목1동', rate: 2.12,
    votes: {
      polling: { rate: 1.91, count: 95 },
      early: { rate: 3.31, count: 28 }
    } },

  { name: '효목2동', rate: 3.00,
    votes: {
      polling: { rate: 2.69, count: 152 },
      early: { rate: 4.06, count: 69 }
    } },

  { name: '도평동', rate: 1.97,
    votes: {
      polling: { rate: 1.96, count: 26 },
      early: { rate: 2.00, count: 11 }
    } },

  { name: '불로·봉무동', rate: 2.12,
    votes: {
      polling: { rate: 1.90, count: 153 },
      early: { rate: 3.23, count: 51 }
    } },

  { name: '지저동', rate: 1.64,
    votes: {
      polling: { rate: 1.65, count: 83 },
      early: { rate: 1.62, count: 25 }
    } },

  { name: '동촌동', rate: 1.75,
    votes: {
      polling: { rate: 1.53, count: 79 },
      early: { rate: 2.43, count: 41 }
    } },

  { name: '방촌동', rate: 2.27,
    votes: {
      polling: { rate: 2.13, count: 157 },
      early: { rate: 2.86, count: 53 }
    } },

  { name: '해안동', rate: 1.93,
    votes: {
      polling: { rate: 1.63, count: 79 },
      early: { rate: 2.77, count: 48 }
    } },

  { name: '안심1동', rate: 2.26,
    votes: {
      polling: { rate: 2.29, count: 335 },
      early: { rate: 2.15, count: 74 }
    } },

  { name: '안심2동', rate: 2.09,
    votes: {
      polling: { rate: 1.93, count: 122 },
      early: { rate: 2.71, count: 41 }
    } },

  { name: '안심3동', rate: 2.76,
    votes: {
      polling: { rate: 2.82, count: 206 },
      early: { rate: 2.60, count: 67 }
    } },

  { name: '안심4동', rate: 2.14,
    votes: {
      polling: { rate: 2.09, count: 211 },
      early: { rate: 2.41, count: 40 }
    } },

  { name: '혁신동', rate: 2.56,
    votes: {
      polling: { rate: 2.40, count: 136 },
      early: { rate: 3.08, count: 56 }
    } },

  { name: '공산동', rate: 2.61,
    votes: {
      polling: { rate: 2.45, count: 201 },
      early: { rate: 3.16, count: 73 }
    } },
{ name: '서구_관외사전투표', rate: 3.78,
    votes: { absentee: { rate: 3.78, count: 269 } } },

  { name: '내당1동', rate: 2.95,
    votes: {
      polling: { rate: 1.98, count: 143 },
      early: { rate: 3.78, count: 77 }
    } },

  { name: '내당2·3동', rate: 1.46,
    votes: {
      polling: { rate: 1.39, count: 45 },
      early: { rate: 2.09, count: 16 }
    } },

  { name: '내당4동', rate: 2.22,
    votes: {
      polling: { rate: 2.11, count: 123 },
      early: { rate: 2.27, count: 41 }
    } },

  { name: '비산1동', rate: 1.28,
    votes: {
      polling: { rate: 0.87, count: 34 },
      early: { rate: 1.54, count: 16 }
    } },

  { name: '비산2·3동', rate: 1.65,
    votes: {
      polling: { rate: 1.57, count: 48 },
      early: { rate: 1.98, count: 16 }
    } },

  { name: '비산4동', rate: 1.80,
    votes: {
      polling: { rate: 1.65, count: 60 },
      early: { rate: 2.12, count: 17 }
    } },

  { name: '비산5동', rate: 1.44,
    votes: {
      polling: { rate: 1.38, count: 25 },
      early: { rate: 1.51, count: 13 }
    } },

  { name: '비산6동', rate: 1.34,
    votes: {
      polling: { rate: 1.34, count: 33 },
      early: { rate: 1.48, count: 15 }
    } },

  { name: '비산7동', rate: 1.93,
    votes: {
      polling: { rate: 1.70, count: 73 },
      early: { rate: 2.30, count: 10 }
    } },

  { name: '평리1동', rate: 1.00,
    votes: {
      polling: { rate: 0.79, count: 19 },
      early: { rate: 1.61, count: 13 }
    } },

  { name: '평리2동', rate: 1.98,
    votes: {
      polling: { rate: 1.77, count: 47 },
      early: { rate: 2.31, count: 27 }
    } },

  { name: '평리3동', rate: 1.96,
    votes: {
      polling: { rate: 1.65, count: 98 },
      early: { rate: 3.03, count: 18 }
    } },

  { name: '평리4동', rate: 2.10,
    votes: {
      polling: { rate: 1.86, count: 112 },
      early: { rate: 2.51, count: 48 }
    } },

  { name: '평리5동', rate: 2.25,
    votes: {
      polling: { rate: 2.03, count: 75 },
      early: { rate: 2.91, count: 36 }
    } },

  { name: '평리6동', rate: 2.24,
    votes: {
      polling: { rate: 1.99, count: 33 },
      early: { rate: 2.46, count: 27 }
    } },

  { name: '상중이동', rate: 1.99,
    votes: {
      polling: { rate: 1.76, count: 124 },
      early: { rate: 2.57, count: 51 }
    } },

  { name: '원대동', rate: 2.24,
    votes: {
      polling: { rate: 2.17, count: 86 },
      early: { rate: 2.75, count: 30 }
    } },
{ name: '남구_관외사전투표', rate: 3.91,
    votes: { absentee: { rate: 3.91, count: 287 } } },

  { name: '이천동', rate: 2.49,
    votes: {
      polling: { rate: 2.42, count: 148 },
      early: { rate: 2.81, count: 41 }
    } },

  { name: '봉덕1동', rate: 2.15,
    votes: {
      polling: { rate: 1.90, count: 58 },
      early: { rate: 2.91, count: 27 }
    } },

  { name: '봉덕2동', rate: 2.50,
    votes: {
      polling: { rate: 2.52, count: 131 },
      early: { rate: 2.89, count: 34 }
    } },

  { name: '봉덕3동', rate: 1.92,
    votes: {
      polling: { rate: 1.98, count: 106 },
      early: { rate: 2.01, count: 34 }
    } },

  { name: '대명1동', rate: 1.76,
    votes: {
      polling: { rate: 1.81, count: 65 },
      early: { rate: 1.93, count: 22 }
    } },

  { name: '대명2동', rate: 2.23,
    votes: {
      polling: { rate: 2.17, count: 164 },
      early: { rate: 2.82, count: 57 }
    } },

  { name: '대명3동', rate: 2.03,
    votes: {
      polling: { rate: 1.98, count: 71 },
      early: { rate: 2.16, count: 25 }
    } },

  { name: '대명4동', rate: 1.96,
    votes: {
      polling: { rate: 1.90, count: 68 },
      early: { rate: 2.43, count: 25 }
    } },

  { name: '대명5동', rate: 3.28,
    votes: {
      polling: { rate: 2.87, count: 93 },
      early: { rate: 4.53, count: 47 }
    } },

  { name: '대명6동', rate: 2.41,
    votes: {
      polling: { rate: 2.30, count: 89 },
      early: { rate: 3.15, count: 40 }
    } },

  { name: '대명9동', rate: 1.77,
    votes: {
      polling: { rate: 1.79, count: 84 },
      early: { rate: 1.71, count: 28 }
    } },

  { name: '대명10동', rate: 2.10,
    votes: {
      polling: { rate: 2.18, count: 70 },
      early: { rate: 1.83, count: 16 }
    } },

  { name: '대명11동', rate: 1.53,
    votes: {
      polling: { rate: 1.26, count: 36 },
      early: { rate: 2.37, count: 21 }
    } },
 { name: '북구_관외사전투표', rate: 4.51,
    votes: { absentee: { rate: 4.51, count: 925 } } },

  { name: '고성동', rate: 2.96,
    votes: {
      polling: { rate: 2.79, count: 148 },
      early: { rate: 3.97, count: 85 }
    } },

  { name: '칠성동', rate: 2.57,
    votes: {
      polling: { rate: 2.55, count: 234 },
      early: { rate: 2.56, count: 41 }
    } },

  { name: '침산1동', rate: 1.77,
    votes: {
      polling: { rate: 1.75, count: 24 },
      early: { rate: 2.58, count: 8 }
    } },

  { name: '침산2동', rate: 3.03,
    votes: {
      polling: { rate: 2.65, count: 197 },
      early: { rate: 3.52, count: 62 }
    } },

  { name: '침산3동', rate: 2.26,
    votes: {
      polling: { rate: 1.98, count: 146 },
      early: { rate: 3.08, count: 71 }
    } },

  { name: '노원동', rate: 2.26,
    votes: {
      polling: { rate: 2.02, count: 104 },
      early: { rate: 2.66, count: 32 }
    } },

  { name: '산격1동', rate: 1.40,
    votes: {
      polling: { rate: 0.74, count: 44 },
      early: { rate: 1.44, count: 13 }
    } },

  { name: '산격2동', rate: 1.72,
    votes: {
      polling: { rate: 1.17, count: 90 },
      early: { rate: 3.62, count: 53 }
    } },

  { name: '산격3동', rate: 2.09,
    votes: {
      polling: { rate: 1.56, count: 105 },
      early: { rate: 7.02, count: 54 }
    } },

  { name: '산격4동', rate: 1.48,
    votes: {
      polling: { rate: 1.20, count: 67 },
      early: { rate: 3.23, count: 28 }
    } },

  { name: '복현1동', rate: 2.73,
    votes: {
      polling: { rate: 2.09, count: 120 },
      early: { rate: 7.22, count: 59 }
    } },

  { name: '복현2동', rate: 2.80,
    votes: {
      polling: { rate: 2.91, count: 335 },
      early: { rate: 2.63, count: 69 }
    } },

  { name: '대현동', rate: 3.17,
    votes: {
      polling: { rate: 3.26, count: 187 },
      early: { rate: 3.86, count: 86 }
    } },

  { name: '검단동', rate: 2.17,
    votes: {
      polling: { rate: 1.87, count: 46 },
      early: { rate: 3.53, count: 23 }
    } },

  { name: '무태조야동', rate: 2.56,
    votes: {
      polling: { rate: 2.62, count: 339 },
      early: { rate: 2.60, count: 89 }
    } },

  { name: '관문동', rate: 2.40,
    votes: {
      polling: { rate: 2.38, count: 309 },
      early: { rate: 2.86, count: 56 }
    } },

  { name: '태전1동', rate: 2.82,
    votes: {
      polling: { rate: 2.66, count: 224 },
      early: { rate: 4.16, count: 51 }
    } },

  { name: '태전2동', rate: 2.06,
    votes: {
      polling: { rate: 2.00, count: 172 },
      early: { rate: 2.30, count: 54 }
    } },

  { name: '구암동', rate: 2.71,
    votes: {
      polling: { rate: 2.41, count: 293 },
      early: { rate: 3.55, count: 116 }
    } },

  { name: '관음동', rate: 2.65,
    votes: {
      polling: { rate: 2.23, count: 121 },
      early: { rate: 3.96, count: 61 }
    } },

  { name: '읍내동', rate: 2.42,
    votes: {
      polling: { rate: 2.40, count: 234 },
      early: { rate: 2.64, count: 60 }
    } },

  { name: '동천동', rate: 3.07,
    votes: {
      polling: { rate: 2.66, count: 259 },
      early: { rate: 5.10, count: 141 }
    } },

  { name: '국우동', rate: 2.83,
    votes: {
      polling: { rate: 2.70, count: 307 },
      early: { rate: 3.56, count: 88 }
    } },
  { name: '수성구_관외사전투표', rate: 6.67,
    votes: { absentee: { rate: 6.67, count: 1539 } } },

  { name: '범어1동', rate: 5.31,
    votes: {
      polling: { rate: 5.11, count: 454 },
      early: { rate: 6.42, count: 106 }
    }
  },

  { name: '범어2동', rate: 5.27,
    votes: {
      polling: { rate: 4.81, count: 280 },
      early: { rate: 5.39, count: 47 }
    }
  },

  { name: '범어3동', rate: 4.39,
    votes: {
      polling: { rate: 4.00, count: 256 },
      early: { rate: 5.71, count: 113 }
    }
  },

  { name: '범어4동', rate: 6.44,
    votes: {
      polling: { rate: 6.31, count: 379 },
      early: { rate: 6.84, count: 137 }
    }
  },

  { name: '만촌1동', rate: 3.90,
    votes: {
      polling: { rate: 3.62, count: 300 },
      early: { rate: 4.82, count: 116 }
    }
  },

  { name: '만촌2동', rate: 4.32,
    votes: {
      polling: { rate: 4.20, count: 196 },
      early: { rate: 4.71, count: 70 }
    }
  },

  { name: '만촌3동', rate: 4.86,
    votes: {
      polling: { rate: 4.82, count: 343 },
      early: { rate: 5.43, count: 124 }
    }
  },

  { name: '수성1가동', rate: 3.78,
    votes: {
      polling: { rate: 3.51, count: 237 },
      early: { rate: 4.52, count: 102 }
    }
  },

  { name: '수성2·3가동', rate: 5.97,
    votes: {
      polling: { rate: 5.63, count: 213 },
      early: { rate: 6.88, count: 95 }
    }
  },

  { name: '수성4가동', rate: 4.78,
    votes: {
      polling: { rate: 4.55, count: 236 },
      early: { rate: 5.37, count: 109 }
    }
  },

  { name: '황금1동', rate: 5.74,
    votes: {
      polling: { rate: 5.34, count: 437 },
      early: { rate: 7.06, count: 173 }
    }
  },

  { name: '황금2동', rate: 3.34,
    votes: {
      polling: { rate: 3.28, count: 134 },
      early: { rate: 3.62, count: 57 }
    }
  },

  { name: '중동', rate: 3.92,
    votes: {
      polling: { rate: 3.78, count: 212 },
      early: { rate: 4.57, count: 63 }
    }
  },

  { name: '상동', rate: 3.58,
    votes: {
      polling: { rate: 3.51, count: 209 },
      early: { rate: 4.02, count: 45 }
    }
  },

  { name: '파동', rate: 2.76,
    votes: {
      polling: { rate: 2.59, count: 169 },
      early: { rate: 3.22, count: 73 }
    }
  },

  { name: '두산동', rate: 4.11,
    votes: {
      polling: { rate: 4.05, count: 227 },
      early: { rate: 4.36, count: 56 }
    }
  },

  { name: '지산1동', rate: 2.68,
    votes: {
      polling: { rate: 2.42, count: 189 },
      early: { rate: 3.74, count: 89 }
    }
  },

  { name: '지산2동', rate: 3.01,
    votes: {
      polling: { rate: 2.62, count: 189 },
      early: { rate: 3.54, count: 74 }
    }
  },

  { name: '범물1동', rate: 2.94,
    votes: {
      polling: { rate: 2.03, count: 86 },
      early: { rate: 2.47, count: 39 }
    }
  },

  { name: '범물2동', rate: 3.09,
    votes: {
      polling: { rate: 2.57, count: 165 },
      early: { rate: 4.12, count: 85 }
    }
  },

  { name: '고산1동', rate: 5.66,
    votes: {
      polling: { rate: 5.64, count: 675 },
      early: { rate: 5.68, count: 263 }
    }
  },

  { name: '고산2동', rate: 4.85,
    votes: {
      polling: { rate: 4.82, count: 503 },
      early: { rate: 5.46, count: 185 }
    }
  },

  { name: '고산3동', rate: 5.04,
    votes: {
      polling: { rate: 5.05, count: 593 },
      early: { rate: 5.66, count: 232 }
    }
  },
  { name: '군위_관외사전투표', rate: 3.10,
    votes: { absentee: { rate: 3.10, count: 80 } }
  },

  { name: '군위읍', rate: 1.17,
    votes: {
      early: { rate: 1.17, count: 44 },
      polling: { rate: 1.06, count: 37 }
    }
  },

  { name: '소보면', rate: 1.33,
    votes: {
      early: { rate: 1.33, count: 11 },
      polling: { rate: 0.94, count: 8 }
    }
  },

  { name: '효령면', rate: 1.84,
    votes: {
      early: { rate: 1.84, count: 19 },
      polling: { rate: 1.26, count: 25 }
    }
  },

  { name: '부계면', rate: 1.18,
    votes: {
      early: { rate: 1.18, count: 4 },
      polling: { rate: 0.93, count: 13 }
    }
  },

  { name: '우보면', rate: 1.93,
    votes: {
      early: { rate: 1.93, count: 7 },
      polling: { rate: 2.50, count: 17 }
    }
  },

  { name: '의흥면', rate: 1.50,
    votes: {
      early: { rate: 1.50, count: 12 },
      polling: { rate: 1.18, count: 11 }
    }
  },

  { name: '산성면', rate: 1.33,
    votes: {
      early: { rate: 1.33, count: 4 },
      polling: { rate: 1.07, count: 7 }
    }
  },

  { name: '삼국유사면', rate: 0.47,
    votes: {
      early: { rate: 0.47, count: 1 },
      polling: { rate: 0.54, count: 3 }
    }
  },
{ name: '달성_관외사전투표', rate: 4.13,
    votes: { absentee: { rate: 4.13, count: 553 } }
  },

  { name: '화원읍', rate: 2.75,
    votes: {
      early: { rate: 2.75, count: 156 },
      polling: { rate: 2.55, count: 520 }
    }
  },

  { name: '논공읍', rate: 2.17,
    votes: {
      early: { rate: 2.17, count: 37 },
      polling: { rate: 1.65, count: 120 }
    }
  },

  { name: '다사읍', rate: 2.37,
    votes: {
      early: { rate: 2.37, count: 172 },
      polling: { rate: 2.16, count: 825 }
    }
  },

  { name: '유가읍', rate: 4.62,
    votes: {
      early: { rate: 4.62, count: 279 },
      polling: { rate: 4.45, count: 399 }
    }
  },

  { name: '옥포읍', rate: 2.15,
    votes: {
      early: { rate: 2.15, count: 54 },
      polling: { rate: 1.97, count: 195 }
    }
  },

  { name: '현풍읍', rate: 3.36,
    votes: {
      early: { rate: 3.36, count: 67 },
      polling: { rate: 3.31, count: 240 }
    }
  },

  { name: '가창면', rate: 2.09,
    votes: {
      early: { rate: 2.09, count: 23 },
      polling: { rate: 1.09, count: 54 }
    }
  },

  { name: '하빈면', rate: 1.93,
    votes: {
      early: { rate: 1.93, count: 27 },
      polling: { rate: 1.12, count: 13 }
    }
  },

  { name: '구지면', rate: 2.67,
    votes: {
      early: { rate: 2.67, count: 63 },
      polling: { rate: 1.87, count: 145 }
    }
  },
{ name: '달서_관외사전투표', rate: 4.77,
    votes: { absentee: { rate: 4.77, count: 1351 } }
  },

  { name: '성당동', rate: 1.88,
    votes: {
      early: { rate: 2.38, count: 40 },
      polling: { rate: 1.74, count: 133 }
    }
  },

  { name: '두류1,2동', rate: 2.15,
    votes: {
      early: { rate: 2.93, count: 46 },
      polling: { rate: 1.87, count: 112 }
    }
  },

  { name: '두류3동', rate: 2.74,
    votes: {
      early: { rate: 4.02, count: 54 },
      polling: { rate: 2.60, count: 80 }
    }
  },

  { name: '본리동', rate: 2.95,
    votes: {
      early: { rate: 3.41, count: 93 },
      polling: { rate: 2.12, count: 236 }
    }
  },

  { name: '감삼동', rate: 2.71,
    votes: {
      early: { rate: 3.03, count: 47 },
      polling: { rate: 2.42, count: 339 }
    }
  },

  { name: '죽전동', rate: 2.49,
    votes: {
      early: { rate: 3.04, count: 44 },
      polling: { rate: 2.37, count: 128 }
    }
  },

  { name: '장기동', rate: 2.74,
    votes: {
      early: { rate: 3.61, count: 63 },
      polling: { rate: 2.24, count: 153 }
    }
  },

  { name: '용산1동', rate: 2.82,
    votes: {
      early: { rate: 3.81, count: 126 },
      polling: { rate: 2.34, count: 286 }
    }
  },

  { name: '용산2동', rate: 3.05,
    votes: {
      early: { rate: 4.23, count: 94 },
      polling: { rate: 2.87, count: 301 }
    }
  },

  { name: '이곡1동', rate: 3.12,
    votes: {
      early: { rate: 4.03, count: 74 },
      polling: { rate: 2.90, count: 245 }
    }
  },

  { name: '이곡2동', rate: 3.00,
    votes: {
      early: { rate: 3.63, count: 93 },
      polling: { rate: 2.77, count: 156 }
    }
  },

  { name: '신당동', rate: 3.69,
    votes: {
      early: { rate: 4.43, count: 55 },
      polling: { rate: 3.52, count: 422 }
    }
  },

  { name: '월성1동', rate: 3.29,
    votes: {
      early: { rate: 3.98, count: 146 },
      polling: { rate: 3.00, count: 455 }
    }
  },

  { name: '월성2동', rate: 1.87,
    votes: {
      early: { rate: 2.46, count: 52 },
      polling: { rate: 1.79, count: 93 }
    }
  },

  { name: '진천동', rate: 2.75,
    votes: {
      early: { rate: 3.57, count: 146 },
      polling: { rate: 2.97, count: 520 }
    }
  },

  { name: '유천동', rate: 3.17,
    votes: {
      early: { rate: 3.78, count: 126 },
      polling: { rate: 2.88, count: 340 }
    }
  },

  { name: '상인1동', rate: 3.55,
    votes: {
      early: { rate: 4.54, count: 113 },
      polling: { rate: 3.25, count: 487 }
    }
  },

  { name: '상인2동', rate: 2.36,
    votes: {
      early: { rate: 2.98, count: 54 },
      polling: { rate: 2.10, count: 135 }
    }
  },

  { name: '상인3동', rate: 1.90,
    votes: {
      early: { rate: 2.26, count: 34 },
      polling: { rate: 1.86, count: 69 }
    }
  },

  { name: '도원동', rate: 2.55,
    votes: {
      early: { rate: 2.76, count: 99 },
      polling: { rate: 2.45, count: 345 }
    }
  },

  { name: '송현1동', rate: 2.00,
    votes: {
      early: { rate: 2.77, count: 45 },
      polling: { rate: 1.90, count: 109 }
    }
  },

  { name: '송현2동', rate: 2.14,
    votes: {
      early: { rate: 2.51, count: 36 },
      polling: { rate: 2.15, count: 149 }
    }
  },

  { name: '본동', rate: 2.58,
    votes: {
      early: { rate: 3.89, count: 35 },
      polling: { rate: 2.42, count: 122 }
    }
  }
    ]
  },
{ name: '울산', rate: 2.22, votes: 13114, seats: 0, type: '광역',
  districts: [
    { name: '중구', rate: 2.03, votes: 2320 },
    { name: '남구', rate: 3.09, votes: 5156 },
    { name: '동구', rate: 1.59, votes: 1267 },
    { name: '북구', rate: 1.81, votes: 2009 },
    { name: '울주군', rate: 1.99, votes: 2362 }
  ],
    neighborhoods:[
{ name: "중구_관외사전투표", rate: 3.82, votes: { absentee: { rate: 3.82, count: 385 } } },
    { name: "학성동", rate: 1.28, votes: { polling: { rate: 1.27, count: 63 }, early: { rate: 1.35, count: 14 } } },
    { name: "반구1동", rate: 1.48, votes: { polling: { rate: 1.34, count: 72 }, early: { rate: 2.09, count: 46 } } },
    { name: "반구2동", rate: 1.91, votes: { polling: { rate: 1.87, count: 54 }, early: { rate: 2.10, count: 26 } } },
    { name: "복산동", rate: 2.48, votes: { polling: { rate: 2.65, count: 197 }, early: { rate: 1.93, count: 38 } } },
    { name: "성안동", rate: 1.83, votes: { polling: { rate: 1.74, count: 109 }, early: { rate: 2.02, count: 69 } } },
    { name: "중앙동", rate: 2.52, votes: { polling: { rate: 2.37, count: 82 }, early: { rate: 3.01, count: 51 } } },
    { name: "우정동", rate: 1.81, votes: { polling: { rate: 1.99, count: 144 }, early: { rate: 1.40, count: 37 } } },
    { name: "태화동", rate: 2.21, votes: { polling: { rate: 2.32, count: 282 }, early: { rate: 2.04, count: 72 } } },
    { name: "다운동", rate: 1.60, votes: { polling: { rate: 1.63, count: 149 }, early: { rate: 1.47, count: 42 } } },
    { name: "병영1동", rate: 1.68, votes: { polling: { rate: 1.82, count: 136 }, early: { rate: 1.36, count: 48 } } },
    { name: "병영2동", rate: 1.79, votes: { polling: { rate: 1.78, count: 123 }, early: { rate: 1.81, count: 33 } } },
    { name: "약사동", rate: 2.19, votes: { polling: { rate: 2.29, count: 72 }, early: { rate: 2.09, count: 47 } } },
{ name: "남구_관외사전투표", rate: 3.28, votes: { absentee: { rate: 3.28, count: 559 } } },
    { name: "신정1동", rate: 1.86, votes: { polling: { rate: 1.57, count: 108 }, early: { rate: 2.65, count: 72 } } },
    { name: "신정2동", rate: 2.80, votes: { polling: { rate: 2.48, count: 233 }, early: { rate: 3.99, count: 98 } } },
    { name: "신정3동", rate: 2.25, votes: { polling: { rate: 1.85, count: 102 }, early: { rate: 3.22, count: 74 } } },
    { name: "신정4동", rate: 2.25, votes: { polling: { rate: 1.75, count: 120 }, early: { rate: 3.44, count: 98 } } },
    { name: "신정5동", rate: 1.66, votes: { polling: { rate: 1.13, count: 35 }, early: { rate: 2.74, count: 41 } } },
    { name: "달동", rate: 1.72, votes: { polling: { rate: 1.46, count: 141 }, early: { rate: 2.75, count: 67 } } },
    { name: "삼산동", rate: 2.52, votes: { polling: { rate: 2.17, count: 357 }, early: { rate: 3.61, count: 187 } } },
    { name: "삼호동", rate: 2.76, votes: { polling: { rate: 2.41, count: 180 }, early: { rate: 3.54, count: 122 } } },
    { name: "무거동", rate: 2.86, votes: { polling: { rate: 2.50, count: 306 }, early: { rate: 4.17, count: 142 } } },
    { name: "옥동", rate: 2.98, votes: { polling: { rate: 2.40, count: 236 }, early: { rate: 4.67, count: 158 } } },
    { name: "야음장생포동", rate: 2.03, votes: { polling: { rate: 1.57, count: 49 }, early: { rate: 3.62, count: 32 } } },
    { name: "대현동", rate: 2.27, votes: { polling: { rate: 1.89, count: 207 }, early: { rate: 3.19, count: 143 } } },
    { name: "수암동", rate: 2.50, votes: { polling: { rate: 2.18, count: 129 }, early: { rate: 3.25, count: 83 } } },
    { name: "선암동", rate: 1.95, votes: { polling: { rate: 1.83, count: 98 }, early: { rate: 2.60, count: 25 } } },
{ name: "동구_관외사전투표", rate: 2.62, votes: { absentee: { rate: 2.62, count: 149 } } },
    { name: "방어동", rate: 1.70, votes: { polling: { rate: 1.45, count: 172 }, early: { rate: 2.44, count: 107 } } },
    { name: "일산동", rate: 1.85, votes: { polling: { rate: 1.83, count: 31 }, early: { rate: 1.86, count: 18 } } },
    { name: "화정동", rate: 1.95, votes: { polling: { rate: 1.62, count: 98 }, early: { rate: 2.55, count: 70 } } },
    { name: "대송동", rate: 1.77, votes: { polling: { rate: 1.51, count: 50 }, early: { rate: 2.45, count: 46 } } },
    { name: "전하1동", rate: 2.42, votes: { polling: { rate: 1.81, count: 93 }, early: { rate: 3.78, count: 89 } } },
    { name: "전하2동", rate: 2.69, votes: { polling: { rate: 2.44, count: 168 }, early: { rate: 3.16, count: 123 } } },
    { name: "남목1동", rate: 1.21, votes: { polling: { rate: 1.20, count: 33 }, early: { rate: 1.22, count: 22 } } },
    { name: "남목2동", rate: 2.47, votes: { polling: { rate: 2.19, count: 190 }, early: { rate: 3.05, count: 128 } } },
    { name: "남목3동", rate: 1.90, votes: { polling: { rate: 1.36, count: 49 }, early: { rate: 2.82, count: 59 } } },
{ name: "북구_관외사전투표", rate: 2.69, votes: { absentee: { rate: 2.69, count: 291 } } },
    { name: "농소1동", rate: 1.61, votes: { polling: { rate: 1.68, count: 208 }, early: { rate: 1.30, count: 38 } } },
    { name: "농소2동", rate: 1.59, votes: { polling: { rate: 1.66, count: 232 }, early: { rate: 1.38, count: 68 } } },
    { name: "농소3동", rate: 1.69, votes: { polling: { rate: 1.75, count: 199 }, early: { rate: 1.55, count: 85 } } },
    { name: "강동동", rate: 1.56, votes: { polling: { rate: 1.66, count: 78 }, early: { rate: 1.37, count: 33 } } },
    { name: "효문동", rate: 1.69, votes: { polling: { rate: 1.70, count: 174 }, early: { rate: 1.66, count: 57 } } },
    { name: "송정동", rate: 1.92, votes: { polling: { rate: 2.11, count: 250 }, early: { rate: 1.57, count: 96 } } },
    { name: "양정동", rate: 2.11, votes: { polling: { rate: 2.55, count: 99 }, early: { rate: 1.31, count: 28 } } },
    { name: "염포동", rate: 1.25, votes: { polling: { rate: 1.27, count: 38 }, early: { rate: 1.23, count: 26 } } },
{ name: "울주군_관외사전투표", rate: 3.14, votes: { absentee: { rate: 3.14, count: 380 } } },
    { name: "범서읍", rate: 2.28, votes: { polling: { rate: 2.27, count: 548 }, early: { rate: 2.30, count: 219 } } },
    { name: "온산읍", rate: 1.58, votes: { polling: { rate: 1.70, count: 104 }, early: { rate: 1.30, count: 30 } } },
    { name: "언양읍", rate: 1.60, votes: { polling: { rate: 1.60, count: 166 }, early: { rate: 1.61, count: 85 } } },
    { name: "온양읍", rate: 1.47, votes: { polling: { rate: 1.46, count: 140 }, early: { rate: 1.51, count: 59 } } },
    { name: "청량읍", rate: 1.80, votes: { polling: { rate: 1.81, count: 145 }, early: { rate: 1.82, count: 51 } } },
    { name: "삼남읍", rate: 1.99, votes: { polling: { rate: 1.92, count: 141 }, early: { rate: 2.15, count: 63 } } },
    { name: "서생면", rate: 1.34, votes: { polling: { rate: 1.23, count: 39 }, early: { rate: 1.56, count: 16 } } },
    { name: "웅촌면", rate: 1.31, votes: { polling: { rate: 1.27, count: 37 }, early: { rate: 1.39, count: 18 } } },
    { name: "두동면", rate: 1.39, votes: { polling: { rate: 1.19, count: 18 }, early: { rate: 1.89, count: 12 } } },
    { name: "두서면", rate: 0.89, votes: { polling: { rate: 0.72, count: 8 }, early: { rate: 1.17, count: 8 } } },
    { name: "상북면", rate: 1.37, votes: { polling: { rate: 1.17, count: 33 }, early: { rate: 1.75, count: 29 } } },
    { name: "삼동면", rate: 1.58, votes: { polling: { rate: 1.59, count: 12 }, early: { rate: 1.55, count: 5 } } }
    ]
  },
  { name: '경기', rate: 3.65, votes: 346848, seats: 0, type: '광역',
  districts: [
    { name: '수원시장안구', rate: 3.80, votes: 4583 },
    { name: '수원시권선구', rate: 4.00, votes: 7633 },
    { name: '수원시팔달구', rate: 4.66, votes: 4706 },
    { name: '수원시영통구', rate: 5.99, votes: 11099 },
    { name: '성남시수정구', rate: 3.17, votes: 3953 },
    { name: '성남시중원구', rate: 2.73, votes: 2964 },
    { name: '성남시분당구', rate: 4.63, votes: 12160 },
    { name: '의정부시', rate: 2.58, votes: 5759 },
    { name: '안양시만안구', rate: 3.23, votes: 4030 },
    { name: '안양시동안구', rate: 4.63, votes: 8409 },
    { name: '부천시원미구', rate: 3.84, votes: 6684 },
    { name: '부천시소사구', rate: 3.17, votes: 4282 },
    { name: '부천시오정구', rate: 2.57, votes: 1838 },
    { name: '광명시', rate: 3.94, votes: 6597 },
    { name: '평택시', rate: 3.08, votes: 8384 },
    { name: '양주시', rate: 2.38, votes: 3268 },
    { name: '동두천시', rate: 1.82, votes: 782 },
    { name: '안산시상록구', rate: 2.93, votes: 4567 },
    { name: '안산시단원구', rate: 2.74, votes: 3885 },
    { name: '고양시덕양구', rate: 3.19, votes: 8589 },
    { name: '고양시일산동구', rate: 3.43, votes: 4740 },
    { name: '고양시일산서구', rate: 3.27, votes: 4331 },
    { name: '과천시', rate: 4.95, votes: 2322 },
    { name: '의왕시', rate: 3.97, votes: 3731 },
    { name: '구리시', rate: 3.16, votes: 3142 },
    { name: '남양주시', rate: 2.87, votes: 10088 },
    { name: '오산시', rate: 3.60, votes: 4157 },
    { name: '화성시만세구', rate: 3.50, votes: 4208 },
    { name: '화성시효행구', rate: 4.21, votes: 2368 },
    { name: '화성시병점구', rate: 6.03, votes: 5947 },
    { name: '화성시동탄구', rate: 13.12, votes: 23341 },
    { name: '시흥시', rate: 2.99, votes: 6682 },
    { name: '군포시', rate: 3.40, votes: 4688 },
    { name: '하남시', rate: 3.47, votes: 5941 },
    { name: '파주시', rate: 2.63, votes: 6329 },
    { name: '여주시', rate: 1.96, votes: 1165 },
    { name: '이천시', rate: 2.52, votes: 2687 },
    { name: '용인시처인구', rate: 2.88, votes: 3969 },
    { name: '용인시수지구', rate: 4.63, votes: 6573 },
    { name: '용인시기흥구', rate: 4.11, votes: 11752 },
    { name: '안성시', rate: 2.30, votes: 2178 },
    { name: '김포시', rate: 2.96, votes: 6774 },
    { name: '광주시', rate: 2.34, votes: 4412 },
    { name: '포천시', rate: 1.79, votes: 1327 },
    { name: '연천군', rate: 1.84, votes: 456 },
    { name: '양평군', rate: 2.12, votes: 1494 },
    { name: '가평군', rate: 1.93, votes: 666 }
  ],
    neighborhoods:[
{ name: '수원장안구_관외사전투표', rate: 5.53,
  votes: { absentee: { rate: 5.53, count: 673 } }
},
{ name: '파장동', rate: 3.12,
  votes: {
    early: { rate: 2.12, count: 66 },
    polling: { rate: 3.54, count: 306 }
  }
},
{ name: '정자1동', rate: 3.72,
  votes: {
    early: { rate: 3.01, count: 137 },
    polling: { rate: 3.98, count: 462 }
  }
},
{ name: '정자2동', rate: 3.84,
  votes: {
    early: { rate: 3.37, count: 103 },
    polling: { rate: 3.97, count: 512 }
  }
},
{ name: '정자3동', rate: 4.47,
  votes: {
    early: { rate: 4.20, count: 231 },
    polling: { rate: 4.59, count: 643 }
  }
},
{ name: '영화동', rate: 2.54,
  votes: {
    early: { rate: 1.98, count: 44 },
    polling: { rate: 2.78, count: 148 }
  }
},
{ name: '송죽동', rate: 2.93,
  votes: {
    early: { rate: 3.18, count: 75 },
    polling: { rate: 2.82, count: 155 }
  }
},
{ name: '조원1동', rate: 3.17,
  votes: {
    early: { rate: 3.06, count: 105 },
    polling: { rate: 3.24, count: 280 }
  }
},
{ name: '조원2동', rate: 4.06,
  votes: {
    early: { rate: 4.12, count: 155 },
    polling: { rate: 4.00, count: 226 }
  }
},
{ name: '연무동', rate: 3.20,
  votes: {
    early: { rate: 3.11, count: 53 },
    polling: { rate: 3.23, count: 198 }
  }
},
{ name: '수원권선구_관외사전투표', rate: 5.23,
  votes: { absentee: { rate: 5.23, count: 1056 } }
},
{ name: '세류2동', rate: 2.49,
  votes: {
    early: { rate: 2.55, count: 60 },
    polling: { rate: 2.47, count: 158 }
  }
},
{ name: '세류3동', rate: 2.41,
  votes: {
    early: { rate: 1.68, count: 36 },
    polling: { rate: 2.76, count: 124 }
  }
},
{ name: '평동', rate: 3.43,
  votes: {
    early: { rate: 3.23, count: 81 },
    polling: { rate: 3.46, count: 508 }
  }
},
{ name: '서둔동', rate: 3.41,
  votes: {
    early: { rate: 3.17, count: 122 },
    polling: { rate: 3.49, count: 383 }
  }
},
{ name: '구운동', rate: 3.34,
  votes: {
    early: { rate: 2.96, count: 76 },
    polling: { rate: 3.47, count: 255 }
  }
},
{ name: '금곡동', rate: 3.60,
  votes: {
    early: { rate: 3.56, count: 217 },
    polling: { rate: 3.61, count: 533 }
  }
},
{ name: '호매실동', rate: 3.33,
  votes: {
    early: { rate: 2.79, count: 180 },
    polling: { rate: 3.67, count: 441 }
  }
},
{ name: '권선1동', rate: 4.19,
  votes: {
    early: { rate: 4.15, count: 91 },
    polling: { rate: 4.21, count: 307 }
  }
},
{ name: '권선2동', rate: 4.31,
  votes: {
    early: { rate: 3.99, count: 204 },
    polling: { rate: 4.41, count: 721 }
  }
},
{ name: '곡선동', rate: 4.45,
  votes: {
    early: { rate: 3.25, count: 123 },
    polling: { rate: 4.86, count: 542 }
  }
},
{ name: '입북동', rate: 3.51,
  votes: {
    early: { rate: 2.77, count: 56 },
    polling: { rate: 3.73, count: 252 }
  }
},
{ name: '율천동', rate: 5.77,
  votes: {
    early: { rate: 6.53, count: 297 },
    polling: { rate: 5.53, count: 795 }
  }
},
{ name: '수원팔달구_관외사전투표', rate: 5.96,
  votes: { absentee: { rate: 5.96, count: 668 } }
},
{ name: '행궁동', rate: 2.77,
  votes: {
    early: { rate: 2.63, count: 28 },
    polling: { rate: 2.82, count: 74 }
  }
},
{ name: '매교동', rate: 5.21,
  votes: {
    early: { rate: 4.29, count: 86 },
    polling: { rate: 5.46, count: 409 }
  }
},
{ name: '매산동', rate: 4.20,
  votes: {
    early: { rate: 3.85, count: 45 },
    polling: { rate: 4.33, count: 135 }
  }
},
{ name: '고등동', rate: 4.74,
  votes: {
    early: { rate: 4.87, count: 160 },
    polling: { rate: 4.66, count: 254 }
  }
},
{ name: '화서1동', rate: 3.26,
  votes: {
    early: { rate: 3.41, count: 87 },
    polling: { rate: 3.21, count: 209 }
  }
},
{ name: '화서2동', rate: 5.51,
  votes: {
    early: { rate: 5.53, count: 193 },
    polling: { rate: 5.50, count: 466 }
  }
},
{ name: '지동', rate: 2.94,
  votes: {
    early: { rate: 3.12, count: 52 },
    polling: { rate: 2.86, count: 98 }
  }
},
{ name: '우만1동', rate: 3.50,
  votes: {
    early: { rate: 3.60, count: 74 },
    polling: { rate: 3.47, count: 198 }
  }
},
{ name: '우만2동', rate: 5.78,
  votes: {
    early: { rate: 5.76, count: 153 },
    polling: { rate: 5.80, count: 300 }
  }
},
{ name: '인계동', rate: 4.72,
  votes: {
    early: { rate: 4.81, count: 171 },
    polling: { rate: 4.70, count: 627 }
  }
},
{ name: '세류1동', rate: 4.57,
  votes: {
    early: { rate: 3.98, count: 63 },
    polling: { rate: 4.88, count: 152 }
  }
},
{ name: '수원영통구_관외사전투표', rate: 7.32,
  votes: { absentee: { rate: 7.32, count: 1464 } }
},
{ name: '매탄1동', rate: 4.72,
  votes: {
    early: { rate: 4.16, count: 60 },
    polling: { rate: 4.93, count: 172 }
  }
},
{ name: '매탄2동', rate: 3.79,
  votes: {
    early: { rate: 3.49, count: 63 },
    polling: { rate: 3.91, count: 169 }
  }
},
{ name: '매탄3동', rate: 4.88,
  votes: {
    early: { rate: 3.74, count: 167 },
    polling: { rate: 5.32, count: 583 }
  }
},
{ name: '매탄4동', rate: 3.93,
  votes: {
    early: { rate: 3.63, count: 89 },
    polling: { rate: 4.05, count: 253 }
  }
},
{ name: '원천동', rate: 5.98,
  votes: {
    early: { rate: 5.30, count: 181 },
    polling: { rate: 6.14, count: 899 }
  }
},
{ name: '광교1동', rate: 6.45,
  votes: {
    early: { rate: 6.39, count: 380 },
    polling: { rate: 6.47, count: 1261 }
  }
},
{ name: '광교2동', rate: 5.89,
  votes: {
    early: { rate: 5.39, count: 151 },
    polling: { rate: 6.03, count: 632 }
  }
},
{ name: '영통1동', rate: 5.41,
  votes: {
    early: { rate: 5.05, count: 226 },
    polling: { rate: 5.56, count: 608 }
  }
},
{ name: '영통2동', rate: 7.87,
  votes: {
    early: { rate: 7.94, count: 347 },
    polling: { rate: 7.83, count: 671 }
  }
},
{ name: '영통3동', rate: 6.69,
  votes: {
    early: { rate: 6.37, count: 236 },
    polling: { rate: 6.80, count: 745 }
  }
},
{ name: '망포1동', rate: 5.50,
  votes: {
    early: { rate: 5.00, count: 171 },
    polling: { rate: 5.68, count: 536 }
  }
},
{ name: '망포2동', rate: 5.92,
  votes: {
    early: { rate: 5.42, count: 282 },
    polling: { rate: 6.20, count: 733 }
  }
},
{ name: '성남수정구_관외사전투표', rate: 3.86,
  votes: { absentee: { rate: 3.86, count: 586 } }
},
{ name: '신흥1동', rate: 1.99,
  votes: {
    early: { rate: 1.99, count: 39 },
    polling: { rate: 2.01, count: 63 }
  }
},
{ name: '신흥2동', rate: 3.51,
  votes: {
    early: { rate: 2.69, count: 100 },
    polling: { rate: 3.78, count: 417 }
  }
},
{ name: '신흥3동', rate: 2.30,
  votes: {
    early: { rate: 2.06, count: 53 },
    polling: { rate: 2.47, count: 72 }
  }
},
{ name: '태평1동', rate: 2.77,
  votes: {
    early: { rate: 2.15, count: 48 },
    polling: { rate: 3.11, count: 128 }
  }
},
{ name: '태평2동', rate: 2.50,
  votes: {
    early: { rate: 2.02, count: 33 },
    polling: { rate: 2.69, count: 115 }
  }
},
{ name: '태평3동', rate: 2.32,
  votes: {
    early: { rate: 2.34, count: 54 },
    polling: { rate: 2.30, count: 79 }
  }
},
{ name: '태평4동', rate: 2.16,
  votes: {
    early: { rate: 2.12, count: 37 },
    polling: { rate: 2.19, count: 62 }
  }
},
{ name: '수진1동', rate: 1.68,
  votes: {
    early: { rate: 1.89, count: 34 },
    polling: { rate: 1.55, count: 49 }
  }
},
{ name: '수진2동', rate: 2.33,
  votes: {
    early: { rate: 1.85, count: 45 },
    polling: { rate: 2.59, count: 115 }
  }
},
{ name: '단대동', rate: 2.44,
  votes: {
    early: { rate: 1.82, count: 35 },
    polling: { rate: 2.70, count: 128 }
  }
},
{ name: '산성동', rate: 2.04,
  votes: {
    early: { rate: 1.88, count: 13 },
    polling: { rate: 2.10, count: 32 }
  }
},
{ name: '양지동', rate: 2.34,
  votes: {
    early: { rate: 2.09, count: 34 },
    polling: { rate: 2.49, count: 66 }
  }
},
{ name: '복정동', rate: 4.49,
  votes: {
    early: { rate: 2.86, count: 47 },
    polling: { rate: 5.12, count: 220 }
  }
},
{ name: '위례동', rate: 4.08,
  votes: {
    early: { rate: 3.39, count: 200 },
    polling: { rate: 4.34, count: 662 }
  }
},
{ name: '신촌동', rate: 3.82,
  votes: {
    early: { rate: 4.29, count: 21 },
    polling: { rate: 3.63, count: 46 }
  }
},
{ name: '고등동', rate: 4.25,
  votes: {
    early: { rate: 4.43, count: 90 },
    polling: { rate: 4.09, count: 163 }
  }
},
{ name: '시흥동', rate: 4.00,
  votes: {
    early: { rate: 4.23, count: 19 },
    polling: { rate: 4.00, count: 46 }
  }
},
{ name: '성남중원구_관외사전투표', rate: 3.75,
  votes: { absentee: { rate: 3.75, count: 494 } }
},
{ name: '성남동', rate: 2.94,
  votes: {
    early: { rate: 2.89, count: 123 },
    polling: { rate: 2.96, count: 309 }
  }
},
{ name: '중앙동', rate: 3.35,
  votes: {
    early: { rate: 2.52, count: 58 },
    polling: { rate: 3.70, count: 204 }
  }
},
{ name: '금광1동', rate: 3.63,
  votes: {
    early: { rate: 2.86, count: 93 },
    polling: { rate: 4.02, count: 253 }
  }
},
{ name: '금광2동', rate: 2.33,
  votes: {
    early: { rate: 1.49, count: 53 },
    polling: { rate: 2.75, count: 183 }
  }
},
{ name: '은행1동', rate: 2.65,
  votes: {
    early: { rate: 2.14, count: 37 },
    polling: { rate: 3.06, count: 83 }
  }
},
{ name: '은행2동', rate: 1.80,
  votes: {
    early: { rate: 1.51, count: 47 },
    polling: { rate: 1.97, count: 114 }
  }
},
{ name: '상대원1동', rate: 2.11,
  votes: {
    early: { rate: 1.74, count: 46 },
    polling: { rate: 2.23, count: 163 }
  }
},
{ name: '상대원2동', rate: 2.43,
  votes: {
    early: { rate: 2.43, count: 18 },
    polling: { rate: 2.44, count: 19 }
  }
},
{ name: '상대원3동', rate: 1.42,
  votes: {
    early: { rate: 1.64, count: 35 },
    polling: { rate: 1.27, count: 39 }
  }
},
{ name: '하대원동', rate: 2.33,
  votes: {
    early: { rate: 2.24, count: 79 },
    polling: { rate: 2.37, count: 157 }
  }
},
{ name: '도촌동', rate: 2.82,
  votes: {
    early: { rate: 2.20, count: 74 },
    polling: { rate: 3.05, count: 280 }
  }
},
// 분당구 개혁신당 득표율 데이터
{ name: '분당구_관외사전투표', rate: 5.55,
  votes: { absentee: { rate: 5.55, count: 1398 } }
},
{ name: '분당동', rate: 3.82,
  votes: {
    early: { rate: 3.55, count: 83 },
    polling: { rate: 3.89, count: 357 }
  }
},
{ name: '수내1동', rate: 5.16,
  votes: {
    early: { rate: 4.56, count: 113 },
    polling: { rate: 5.39, count: 357 }
  }
},
{ name: '수내2동', rate: 5.16,
  votes: {
    early: { rate: 5.76, count: 79 },
    polling: { rate: 4.93, count: 183 }
  }
},
{ name: '수내3동', rate: 4.17,
  votes: {
    early: { rate: 3.19, count: 68 },
    polling: { rate: 4.65, count: 204 }
  }
},
{ name: '정자동', rate: 5.25,
  votes: {
    early: { rate: 5.96, count: 73 },
    polling: { rate: 5.08, count: 270 }
  }
},
{ name: '정자1동', rate: 5.38,
  votes: {
    early: { rate: 6.36, count: 174 },
    polling: { rate: 5.15, count: 605 }
  }
},
{ name: '정자2동', rate: 4.21,
  votes: {
    early: { rate: 4.06, count: 71 },
    polling: { rate: 4.26, count: 218 }
  }
},
{ name: '정자3동', rate: 4.35,
  votes: {
    early: { rate: 3.94, count: 95 },
    polling: { rate: 4.51, count: 272 }
  }
},
{ name: '서현1동', rate: 4.87,
  votes: {
    early: { rate: 4.70, count: 203 },
    polling: { rate: 4.94, count: 525 }
  }
},
{ name: '서현2동', rate: 4.53,
  votes: {
    early: { rate: 4.60, count: 130 },
    polling: { rate: 4.50, count: 293 }
  }
},
{ name: '이매1동', rate: 4.73,
  votes: {
    early: { rate: 4.44, count: 119 },
    polling: { rate: 4.80, count: 487 }
  }
},
{ name: '이매2동', rate: 4.30,
  votes: {
    early: { rate: 3.99, count: 84 },
    polling: { rate: 4.43, count: 218 }
  }
},
{ name: '야탑1동', rate: 3.94,
  votes: {
    early: { rate: 3.89, count: 151 },
    polling: { rate: 3.97, count: 259 }
  }
},
{ name: '야탑2동', rate: 3.74,
  votes: {
    early: { rate: 3.91, count: 83 },
    polling: { rate: 3.69, count: 235 }
  }
},
{ name: '야탑3동', rate: 3.64,
  votes: {
    early: { rate: 2.62, count: 78 },
    polling: { rate: 3.95, count: 403 }
  }
},
{ name: '금곡동', rate: 4.35,
  votes: {
    early: { rate: 4.02, count: 113 },
    polling: { rate: 4.43, count: 482 }
  }
},
{ name: '구미동', rate: 3.69,
  votes: {
    early: { rate: 3.79, count: 115 },
    polling: { rate: 3.67, count: 416 }
  }
},
{ name: '구미1동', rate: 4.53,
  votes: {
    early: { rate: 4.62, count: 167 },
    polling: { rate: 4.48, count: 261 }
  }
},
{ name: '판교동', rate: 5.08,
  votes: {
    early: { rate: 4.05, count: 130 },
    polling: { rate: 5.41, count: 540 }
  }
},
{ name: '삼평동', rate: 4.70,
  votes: {
    early: { rate: 4.09, count: 130 },
    polling: { rate: 4.92, count: 420 }
  }
},
{ name: '백현동', rate: 4.88,
  votes: {
    early: { rate: 4.69, count: 168 },
    polling: { rate: 4.94, count: 486 }
  }
},
{ name: '운중동', rate: 4.39,
  votes: {
    early: { rate: 4.50, count: 182 },
    polling: { rate: 4.36, count: 645 }
  }
},
{ name: '의정부시_관외사전투표', rate: 3.37,
  votes: { absentee: { rate: 3.37, count: 739 } }
},
{ name: '의정부1동', rate: 2.53,
  votes: {
    early: { rate: 2.78, count: 92 },
    polling: { rate: 2.45, count: 252 }
  }
},
{ name: '의정부2동', rate: 2.13,
  votes: {
    early: { rate: 1.79, count: 47 },
    polling: { rate: 2.24, count: 197 }
  }
},
{ name: '호원1동', rate: 1.92,
  votes: {
    early: { rate: 1.80, count: 91 },
    polling: { rate: 1.97, count: 217 }
  }
},
{ name: '호원2동', rate: 2.38,
  votes: {
    early: { rate: 2.34, count: 144 },
    polling: { rate: 2.40, count: 251 }
  }
},
{ name: '장암동', rate: 2.63,
  votes: {
    early: { rate: 2.81, count: 86 },
    polling: { rate: 2.54, count: 165 }
  }
},
{ name: '신곡1동', rate: 1.98,
  votes: {
    early: { rate: 1.68, count: 73 },
    polling: { rate: 2.07, count: 296 }
  }
},
{ name: '신곡2동', rate: 2.54,
  votes: {
    early: { rate: 2.63, count: 155 },
    polling: { rate: 2.50, count: 382 }
  }
},
{ name: '송산1동', rate: 3.01,
  votes: {
    early: { rate: 2.78, count: 99 },
    polling: { rate: 3.10, count: 301 }
  }
},
{ name: '송산2동', rate: 2.81,
  votes: {
    early: { rate: 3.05, count: 153 },
    polling: { rate: 2.68, count: 250 }
  }
},
{ name: '송산3동', rate: 2.90,
  votes: {
    early: { rate: 2.32, count: 134 },
    polling: { rate: 3.16, count: 405 }
  }
},
{ name: '자금동', rate: 2.37,
  votes: {
    early: { rate: 1.80, count: 51 },
    polling: { rate: 2.55, count: 226 }
  }
},
{ name: '가능동', rate: 1.64,
  votes: {
    early: { rate: 1.50, count: 61 },
    polling: { rate: 1.72, count: 114 }
  }
},
{ name: '흥선동', rate: 2.01,
  votes: {
    early: { rate: 2.24, count: 56 },
    polling: { rate: 1.90, count: 91 }
  }
},
{ name: '녹양동', rate: 2.15,
  votes: {
    early: { rate: 2.41, count: 78 },
    polling: { rate: 2.01, count: 110 }
  }
},
{ name: '고산동', rate: 3.30,
  votes: {
    early: { rate: 3.11, count: 111 },
    polling: { rate: 3.37, count: 308 }
  }
},
{ name: '안양만안구_관외사전투표', rate: 4.28,
  votes: { absentee: { rate: 4.28, count: 523 } }
},
{ name: '안양1동', rate: 4.68,
  votes: {
    early: { rate: 4.54, count: 137 },
    polling: { rate: 4.74, count: 321 }
  }
},
{ name: '안양2동', rate: 2.92,
  votes: {
    early: { rate: 2.43, count: 65 },
    polling: { rate: 3.10, count: 229 }
  }
},
{ name: '안양3동', rate: 2.19,
  votes: {
    early: { rate: 2.22, count: 53 },
    polling: { rate: 2.17, count: 104 }
  }
},
{ name: '안양4동', rate: 2.61,
  votes: {
    early: { rate: 2.23, count: 34 },
    polling: { rate: 2.88, count: 60 }
  }
},
{ name: '안양5동', rate: 2.85,
  votes: {
    early: { rate: 2.75, count: 59 },
    polling: { rate: 2.89, count: 132 }
  }
},
{ name: '안양6동', rate: 3.36,
  votes: {
    early: { rate: 2.73, count: 88 },
    polling: { rate: 3.60, count: 311 }
  }
},
{ name: '안양7동', rate: 3.52,
  votes: {
    early: { rate: 3.69, count: 98 },
    polling: { rate: 3.42, count: 163 }
  }
},
{ name: '안양8동', rate: 2.40,
  votes: {
    early: { rate: 2.19, count: 31 },
    polling: { rate: 2.52, count: 61 }
  }
},
{ name: '안양9동', rate: 2.19,
  votes: {
    early: { rate: 1.46, count: 36 },
    polling: { rate: 2.55, count: 126 }
  }
},
{ name: '석수1동', rate: 3.58,
  votes: {
    early: { rate: 2.99, count: 80 },
    polling: { rate: 3.80, count: 271 }
  }
},
{ name: '석수2동', rate: 3.02,
  votes: {
    early: { rate: 3.00, count: 115 },
    polling: { rate: 3.03, count: 325 }
  }
},
{ name: '충훈동', rate: 2.86,
  votes: {
    early: { rate: 2.47, count: 52 },
    polling: { rate: 3.09, count: 111 }
  }
},
{ name: '박달동', rate: 1.88,
  votes: {
    early: { rate: 1.36, count: 33 },
    polling: { rate: 2.18, count: 92 }
  }
},
{ name: '호현동', rate: 3.23,
  votes: {
    early: { rate: 2.41, count: 69 },
    polling: { rate: 3.58, count: 241 }
  }
},
{ name: '안양동안구_관외사전투표', rate: 5.84,
  votes: { absentee: { rate: 5.84, count: 1069 } }
},
{ name: '비산1동', rate: 4.14,
  votes: {
    early: { rate: 3.56, count: 128 },
    polling: { rate: 4.33, count: 455 }
  }
},
{ name: '비산2동', rate: 4.36,
  votes: {
    early: { rate: 4.10, count: 126 },
    polling: { rate: 4.55, count: 205 }
  }
},
{ name: '비산3동', rate: 3.51,
  votes: {
    early: { rate: 3.10, count: 88 },
    polling: { rate: 3.71, count: 215 }
  }
},
{ name: '부흥동', rate: 4.36,
  votes: {
    early: { rate: 4.26, count: 119 },
    polling: { rate: 4.41, count: 240 }
  }
},
{ name: '달안동', rate: 4.26,
  votes: {
    early: { rate: 4.34, count: 73 },
    polling: { rate: 4.22, count: 148 }
  }
},
{ name: '관양동', rate: 3.82,
  votes: {
    early: { rate: 3.61, count: 144 },
    polling: { rate: 3.89, count: 456 }
  }
},
{ name: '인덕원동', rate: 4.27,
  votes: {
    early: { rate: 3.16, count: 80 },
    polling: { rate: 4.72, count: 300 }
  }
},
{ name: '부림동', rate: 5.07,
  votes: {
    early: { rate: 4.44, count: 176 },
    polling: { rate: 5.34, count: 475 }
  }
},
{ name: '평촌동', rate: 4.88,
  votes: {
    early: { rate: 4.86, count: 141 },
    polling: { rate: 4.89, count: 252 }
  }
},
{ name: '평안동', rate: 4.92,
  votes: {
    early: { rate: 4.05, count: 144 },
    polling: { rate: 5.33, count: 404 }
  }
},
{ name: '귀인동', rate: 4.83,
  votes: {
    early: { rate: 3.99, count: 85 },
    polling: { rate: 5.18, count: 276 }
  }
},
{ name: '호계1동', rate: 5.09,
  votes: {
    early: { rate: 4.62, count: 163 },
    polling: { rate: 5.26, count: 508 }
  }
},
{ name: '호계2동', rate: 4.35,
  votes: {
    early: { rate: 4.11, count: 147 },
    polling: { rate: 4.43, count: 428 }
  }
},
{ name: '호계3동', rate: 3.55,
  votes: {
    early: { rate: 2.85, count: 114 },
    polling: { rate: 3.91, count: 299 }
  }
},
{ name: '범계동', rate: 5.78,
  votes: {
    early: { rate: 4.74, count: 108 },
    polling: { rate: 6.24, count: 325 }
  }
},
{ name: '신촌동', rate: 4.38,
  votes: {
    early: { rate: 4.58, count: 103 },
    polling: { rate: 4.28, count: 179 }
  }
},
{ name: '갈산동', rate: 4.36,
  votes: {
    early: { rate: 4.35, count: 69 },
    polling: { rate: 4.37, count: 155 }
  }
},
{ name: '부천원미구_관외사전투표', rate: 4.84,
  votes: { absentee: { rate: 4.84, count: 902 } }
},
{ name: '심곡1동', rate: 2.68,
  votes: {
    early: { rate: 2.23, count: 34 },
    polling: { rate: 2.88, count: 97 }
  }
},
{ name: '심곡2동', rate: 2.87,
  votes: {
    early: { rate: 1.53, count: 34 },
    polling: { rate: 3.56, count: 154 }
  }
},
{ name: '심곡3동', rate: 2.20,
  votes: {
    early: { rate: 1.58, count: 22 },
    polling: { rate: 2.47, count: 78 }
  }
},
{ name: '원미1동', rate: 2.40,
  votes: {
    early: { rate: 1.95, count: 52 },
    polling: { rate: 2.65, count: 132 }
  }
},
{ name: '원미2동', rate: 2.18,
  votes: {
    early: { rate: 2.26, count: 38 },
    polling: { rate: 2.14, count: 74 }
  }
},
{ name: '춘의동', rate: 2.31,
  votes: {
    early: { rate: 1.80, count: 34 },
    polling: { rate: 2.53, count: 111 }
  }
},
{ name: '도당동', rate: 2.47,
  votes: {
    early: { rate: 2.09, count: 41 },
    polling: { rate: 2.60, count: 159 }
  }
},
{ name: '약대동', rate: 3.74,
  votes: {
    early: { rate: 3.66, count: 103 },
    polling: { rate: 3.79, count: 194 }
  }
},
{ name: '중동', rate: 3.54,
  votes: {
    early: { rate: 3.57, count: 89 },
    polling: { rate: 3.52, count: 233 }
  }
},
{ name: '중1동', rate: 4.62,
  votes: {
    early: { rate: 3.93, count: 190 },
    polling: { rate: 4.88, count: 620 }
  }
},
{ name: '중2동', rate: 4.25,
  votes: {
    early: { rate: 3.50, count: 58 },
    polling: { rate: 4.37, count: 436 }
  }
},
{ name: '중3동', rate: 4.44,
  votes: {
    early: { rate: 4.33, count: 136 },
    polling: { rate: 4.49, count: 348 }
  }
},
{ name: '중4동', rate: 4.81,
  votes: {
    early: { rate: 4.78, count: 224 },
    polling: { rate: 4.83, count: 267 }
  }
},
{ name: '상동', rate: 3.40,
  votes: {
    early: { rate: 2.78, count: 73 },
    polling: { rate: 3.68, count: 212 }
  }
},
{ name: '상1동', rate: 3.73,
  votes: {
    early: { rate: 3.68, count: 161 },
    polling: { rate: 3.76, count: 276 }
  }
},
{ name: '상2동', rate: 4.06,
  votes: {
    early: { rate: 3.61, count: 149 },
    polling: { rate: 4.31, count: 363 }
  }
},
{ name: '상3동', rate: 4.00,
  votes: {
    early: { rate: 3.76, count: 177 },
    polling: { rate: 4.12, count: 401 }
  }
},
{ name: '부천소사구_관외사전투표', rate: 4.04,
  votes: { absentee: { rate: 4.04, count: 519 } }
},
{ name: '심곡본1동', rate: 2.45,
  votes: {
    early: { rate: 2.46, count: 66 },
    polling: { rate: 2.44, count: 110 }
  }
},
{ name: '심곡본동', rate: 2.53,
  votes: {
    early: { rate: 3.04, count: 53 },
    polling: { rate: 2.33, count: 103 }
  }
},
{ name: '소사본동', rate: 2.61,
  votes: {
    early: { rate: 2.33, count: 71 },
    polling: { rate: 2.73, count: 215 }
  }
},
{ name: '소사본1동', rate: 3.02,
  votes: {
    early: { rate: 3.15, count: 136 },
    polling: { rate: 2.96, count: 279 }
  }
},
{ name: '범박동', rate: 3.75,
  votes: {
    early: { rate: 3.32, count: 147 },
    polling: { rate: 3.97, count: 341 }
  }
},
{ name: '옥길동', rate: 3.76,
  votes: {
    early: { rate: 3.89, count: 166 },
    polling: { rate: 3.71, count: 371 }
  }
},
{ name: '괴안동', rate: 3.06,
  votes: {
    early: { rate: 3.15, count: 91 },
    polling: { rate: 3.01, count: 154 }
  }
},
{ name: '역곡3동', rate: 3.06,
  votes: {
    early: { rate: 1.96, count: 70 },
    polling: { rate: 3.60, count: 263 }
  }
},
{ name: '송내1동', rate: 2.92,
  votes: {
    early: { rate: 2.54, count: 61 },
    polling: { rate: 3.05, count: 213 }
  }
},
{ name: '송내2동', rate: 2.95,
  votes: {
    early: { rate: 2.71, count: 102 },
    polling: { rate: 3.07, count: 238 }
  }
},
{ name: '역곡1동', rate: 2.83,
  votes: {
    early: { rate: 2.81, count: 85 },
    polling: { rate: 2.84, count: 143 }
  }
},
{ name: '역곡2동', rate: 2.73,
  votes: {
    early: { rate: 2.42, count: 79 },
    polling: { rate: 2.95, count: 138 }
  }
},
{ name: '소사동', rate: 2.01,
  votes: {
    early: { rate: 2.40, count: 26 },
    polling: { rate: 1.77, count: 31 }
  }
},
{ name: '부천오정구_관외사전투표', rate: 3.63,
  votes: { absentee: { rate: 3.63, count: 276 } }
},
{ name: '성곡동', rate: 2.59,
  votes: {
    early: { rate: 2.21, count: 106 },
    polling: { rate: 2.74, count: 333 }
  }
},
{ name: '원종1동', rate: 2.77,
  votes: {
    early: { rate: 2.43, count: 74 },
    polling: { rate: 2.92, count: 198 }
  }
},
{ name: '원종2동', rate: 2.10,
  votes: {
    early: { rate: 2.06, count: 38 },
    polling: { rate: 2.11, count: 112 }
  }
},
{ name: '고강본동', rate: 1.95,
  votes: {
    early: { rate: 1.72, count: 54 },
    polling: { rate: 2.05, count: 144 }
  }
},
{ name: '고강1동', rate: 2.16,
  votes: {
    early: { rate: 1.94, count: 43 },
    polling: { rate: 2.32, count: 76 }
  }
},
{ name: '오정동', rate: 2.66,
  votes: {
    early: { rate: 2.35, count: 64 },
    polling: { rate: 2.79, count: 175 }
  }
},
{ name: '신흥동', rate: 2.21,
  votes: {
    early: { rate: 1.93, count: 26 },
    polling: { rate: 2.28, count: 115 }
  }
},
{ name: '광명시_관외사전투표', rate: 5.00,
  votes: { absentee: { rate: 5.00, count: 748 } }
},
{ name: '광명1동', rate: 5.20,
  votes: {
    early: { rate: 5.88, count: 105 },
    polling: { rate: 5.00, count: 297 }
  }
},
{ name: '광명2동', rate: 4.14,
  votes: {
    early: { rate: 3.75, count: 62 },
    polling: { rate: 4.39, count: 112 }
  }
},
{ name: '광명3동', rate: 2.03,
  votes: {
    early: { rate: 2.15, count: 19 },
    polling: { rate: 1.99, count: 59 }
  }
},
{ name: '광명4동', rate: 2.70,
  votes: {
    early: { rate: 3.37, count: 55 },
    polling: { rate: 2.28, count: 60 }
  }
},
{ name: '광명5동', rate: 2.35,
  votes: {
    early: { rate: 1.93, count: 36 },
    polling: { rate: 2.58, count: 87 }
  }
},
{ name: '광명6동', rate: 3.10,
  votes: {
    early: { rate: 3.01, count: 65 },
    polling: { rate: 3.14, count: 129 }
  }
},
{ name: '광명7동', rate: 3.33,
  votes: {
    early: { rate: 2.56, count: 109 },
    polling: { rate: 3.72, count: 314 }
  }
},
{ name: '철산1동', rate: 4.06,
  votes: {
    early: { rate: 3.35, count: 66 },
    polling: { rate: 4.51, count: 138 }
  }
},
{ name: '철산2동', rate: 4.59,
  votes: {
    early: { rate: 4.06, count: 122 },
    polling: { rate: 4.84, count: 319 }
  }
},
{ name: '철산3동', rate: 4.40,
  votes: {
    early: { rate: 3.81, count: 180 },
    polling: { rate: 4.61, count: 627 }
  }
},
{ name: '철산4동', rate: 4.27,
  votes: {
    early: { rate: 4.10, count: 68 },
    polling: { rate: 4.36, count: 138 }
  }
},
{ name: '하안1동', rate: 3.72,
  votes: {
    early: { rate: 3.68, count: 117 },
    polling: { rate: 3.74, count: 325 }
  }
},
{ name: '하안2동', rate: 3.90,
  votes: {
    early: { rate: 3.47, count: 88 },
    polling: { rate: 4.18, count: 164 }
  }
},
{ name: '하안3동', rate: 3.22,
  votes: {
    early: { rate: 3.03, count: 101 },
    polling: { rate: 3.32, count: 216 }
  }
},
{ name: '하안4동', rate: 4.03,
  votes: {
    early: { rate: 4.42, count: 109 },
    polling: { rate: 3.77, count: 140 }
  }
},
{ name: '소하1동', rate: 3.35,
  votes: {
    early: { rate: 2.82, count: 118 },
    polling: { rate: 3.56, count: 365 }
  }
},
{ name: '소하2동', rate: 2.80,
  votes: {
    early: { rate: 3.31, count: 139 },
    polling: { rate: 2.55, count: 222 }
  }
},
{ name: '일직동', rate: 5.57,
  votes: {
    early: { rate: 6.87, count: 187 },
    polling: { rate: 5.07, count: 355 }
  }
},
{ name: '학온동', rate: 2.17,
  votes: {
    early: { rate: 0.81, count: 2 },
    polling: { rate: 2.70, count: 17 }
  }
},
{ name: '평택시_관외사전투표', rate: 4.10,
  votes: { absentee: { rate: 4.10, count: 1182 } }
},
{ name: '팽성읍', rate: 1.64,
  votes: {
    early: { rate: 1.81, count: 54 },
    polling: { rate: 1.58, count: 130 }
  }
},
{ name: '안중읍', rate: 2.04,
  votes: {
    early: { rate: 1.84, count: 100 },
    polling: { rate: 2.12, count: 261 }
  }
},
{ name: '포승읍', rate: 2.03,
  votes: {
    early: { rate: 1.82, count: 61 },
    polling: { rate: 2.15, count: 120 }
  }
},
{ name: '청북읍', rate: 2.12,
  votes: {
    early: { rate: 2.21, count: 51 },
    polling: { rate: 2.09, count: 160 }
  }
},
{ name: '진위면', rate: 2.35,
  votes: {
    early: { rate: 1.60, count: 22 },
    polling: { rate: 2.67, count: 85 }
  }
},
{ name: '서탄면', rate: 1.40,
  votes: {
    early: { rate: 1.20, count: 6 },
    polling: { rate: 1.50, count: 16 }
  }
},
{ name: '고덕면', rate: 2.91,
  votes: {
    early: { rate: 3.80, count: 97 },
    polling: { rate: 2.36, count: 99 }
  }
},
{ name: '오성면', rate: 1.70,
  votes: {
    early: { rate: 2.01, count: 22 },
    polling: { rate: 1.53, count: 31 }
  }
},
{ name: '현덕면', rate: 2.12,
  votes: {
    early: { rate: 1.85, count: 43 },
    polling: { rate: 2.25, count: 108 }
  }
},
{ name: '중앙동', rate: 3.11,
  votes: {
    early: { rate: 2.99, count: 112 },
    polling: { rate: 3.14, count: 463 }
  }
},
{ name: '서정동', rate: 2.30,
  votes: {
    early: { rate: 2.02, count: 49 },
    polling: { rate: 2.41, count: 156 }
  }
},
{ name: '송탄동', rate: 2.84,
  votes: {
    early: { rate: 2.07, count: 36 },
    polling: { rate: 3.02, count: 223 }
  }
},
{ name: '지산동', rate: 2.73,
  votes: {
    early: { rate: 2.73, count: 38 },
    polling: { rate: 2.73, count: 78 }
  }
},
{ name: '송북동', rate: 2.23,
  votes: {
    early: { rate: 1.88, count: 51 },
    polling: { rate: 2.40, count: 140 }
  }
},
{ name: '신장1동', rate: 2.06,
  votes: {
    early: { rate: 1.34, count: 10 },
    polling: { rate: 2.41, count: 37 }
  }
},
{ name: '신장2동', rate: 2.03,
  votes: {
    early: { rate: 1.82, count: 12 },
    polling: { rate: 2.14, count: 26 }
  }
},
{ name: '신평동', rate: 2.76,
  votes: {
    early: { rate: 2.60, count: 41 },
    polling: { rate: 2.81, count: 160 }
  }
},
{ name: '원평동', rate: 3.01,
  votes: {
    early: { rate: 3.19, count: 57 },
    polling: { rate: 2.91, count: 104 }
  }
},
{ name: '통복동', rate: 2.85,
  votes: {
    early: { rate: 2.85, count: 24 },
    polling: { rate: 2.84, count: 54 }
  }
},
{ name: '비전1동', rate: 3.05,
  votes: {
    early: { rate: 3.16, count: 146 },
    polling: { rate: 3.02, count: 462 }
  }
},
{ name: '비전2동', rate: 2.96,
  votes: {
    early: { rate: 2.95, count: 155 },
    polling: { rate: 2.96, count: 527 }
  }
},
{ name: '세교동', rate: 3.62,
  votes: {
    early: { rate: 3.15, count: 115 },
    polling: { rate: 3.70, count: 437 }
  }
},
{ name: '용이동', rate: 3.24,
  votes: {
    early: { rate: 2.85, count: 81 },
    polling: { rate: 3.38, count: 261 }
  }
},
{ name: '동삭동', rate: 4.53,
  votes: {
    early: { rate: 3.61, count: 121 },
    polling: { rate: 4.79, count: 583 }
  }
},
{ name: '고덕동', rate: 4.13,
  votes: {
    early: { rate: 3.82, count: 114 },
    polling: { rate: 4.18, count: 813 }
  }
},
{ name: '양주시_관외사전투표', rate: 3.35,
  votes: { absentee: { rate: 3.35, count: 501 } }
},
{ name: '백석읍', rate: 1.68,
  votes: {
    early: { rate: 1.40, count: 47 },
    polling: { rate: 1.79, count: 146 }
  }
},
{ name: '은현면', rate: 1.68,
  votes: {
    early: { rate: 1.76, count: 15 },
    polling: { rate: 1.64, count: 28 }
  }
},
{ name: '남면', rate: 1.33,
  votes: {
    early: { rate: 1.69, count: 15 },
    polling: { rate: 1.17, count: 22 }
  }
},
{ name: '광적면', rate: 1.66,
  votes: {
    early: { rate: 1.48, count: 37 },
    polling: { rate: 1.84, count: 49 }
  }
},
{ name: '장흥면', rate: 1.84,
  votes: {
    early: { rate: 1.98, count: 40 },
    polling: { rate: 1.77, count: 70 }
  }
},
{ name: '양주1동', rate: 1.96,
  votes: {
    early: { rate: 2.62, count: 18 },
    polling: { rate: 1.70, count: 29 }
  }
},
{ name: '양주2동', rate: 2.07,
  votes: {
    early: { rate: 1.80, count: 101 },
    polling: { rate: 2.17, count: 328 }
  }
},
{ name: '회천1동', rate: 2.13,
  votes: {
    early: { rate: 1.55, count: 24 },
    polling: { rate: 2.44, count: 72 }
  }
},
{ name: '회천2동', rate: 2.37,
  votes: {
    early: { rate: 1.90, count: 105 },
    polling: { rate: 2.57, count: 344 }
  }
},
{ name: '회천3동', rate: 2.21,
  votes: {
    early: { rate: 2.15, count: 80 },
    polling: { rate: 2.24, count: 159 }
  }
},
{ name: '옥정1동', rate: 2.71,
  votes: {
    early: { rate: 2.76, count: 110 },
    polling: { rate: 2.70, count: 323 }
  }
},
{ name: '옥정2동', rate: 2.67,
  votes: {
    early: { rate: 2.65, count: 151 },
    polling: { rate: 2.67, count: 436 }
  }
},
{ name: '동두천시_관외사전투표', rate: 3.27,
  votes: { absentee: { rate: 3.27, count: 133 } }
},
{ name: '생연1동', rate: 1.43,
  votes: {
    early: { rate: 1.70, count: 17 },
    polling: { rate: 1.26, count: 21 }
  }
},
{ name: '생연2동', rate: 1.42,
  votes: {
    early: { rate: 1.48, count: 32 },
    polling: { rate: 1.38, count: 44 }
  }
},
{ name: '중앙동', rate: 1.12,
  votes: {
    early: { rate: 1.29, count: 14 },
    polling: { rate: 0.96, count: 12 }
  }
},
{ name: '보산동', rate: 1.54,
  votes: {
    early: { rate: 1.73, count: 9 },
    polling: { rate: 1.40, count: 10 }
  }
},
{ name: '불현동', rate: 1.67,
  votes: {
    early: { rate: 1.49, count: 53 },
    polling: { rate: 1.75, count: 129 }
  }
},
{ name: '송내동', rate: 1.91,
  votes: {
    early: { rate: 2.08, count: 73 },
    polling: { rate: 1.83, count: 136 }
  }
},
{ name: '소요동', rate: 1.51,
  votes: {
    early: { rate: 1.39, count: 17 },
    polling: { rate: 1.57, count: 42 }
  }
},
{ name: '상패동', rate: 1.54,
  votes: {
    early: { rate: 1.57, count: 13 },
    polling: { rate: 1.52, count: 21 }
  }
},
{ name: '안산단원구_관외사전투표', rate: 3.99,
  votes: { absentee: { rate: 3.99, count: 573 } }
},
{ name: '일동', rate: 1.87,
  votes: {
    early: { rate: 1.95, count: 59 },
    polling: { rate: 1.84, count: 116 }
  }
},
{ name: '이동', rate: 2.89,
  votes: {
    early: { rate: 2.63, count: 52 },
    polling: { rate: 2.97, count: 199 }
  }
},
{ name: '사동', rate: 3.33,
  votes: {
    early: { rate: 3.55, count: 134 },
    polling: { rate: 3.25, count: 303 }
  }
},
{ name: '사이동', rate: 3.12,
  votes: {
    early: { rate: 3.00, count: 106 },
    polling: { rate: 3.17, count: 309 }
  }
},
{ name: '해양동', rate: 3.99,
  votes: {
    early: { rate: 3.70, count: 149 },
    polling: { rate: 4.07, count: 578 }
  }
},
{ name: '본오1동', rate: 2.31,
  votes: {
    early: { rate: 2.06, count: 71 },
    polling: { rate: 2.39, count: 226 }
  }
},
{ name: '본오2동', rate: 2.43,
  votes: {
    early: { rate: 2.05, count: 40 },
    polling: { rate: 2.52, count: 212 }
  }
},
{ name: '본오3동', rate: 3.04,
  votes: {
    early: { rate: 3.10, count: 86 },
    polling: { rate: 3.02, count: 175 }
  }
},
{ name: '부곡동', rate: 1.96,
  votes: {
    early: { rate: 1.88, count: 48 },
    polling: { rate: 2.01, count: 113 }
  }
},
{ name: '월피동', rate: 2.44,
  votes: {
    early: { rate: 1.99, count: 66 },
    polling: { rate: 2.57, count: 299 }
  }
},
{ name: '성포동', rate: 2.63,
  votes: {
    early: { rate: 2.19, count: 81 },
    polling: { rate: 2.81, count: 254 }
  }
},
{ name: '반월동', rate: 2.67,
  votes: {
    early: { rate: 2.60, count: 76 },
    polling: { rate: 2.70, count: 169 }
  }
},
{ name: '안산동', rate: 1.49,
  votes: {
    early: { rate: 1.61, count: 22 },
    polling: { rate: 1.42, count: 35 }
  }
},
{ name: '안산상록구_관외사전투표', rate: 3.67,
  votes: { absentee: { rate: 3.67, count: 501 } }
},
{ name: '와동', rate: 1.79,
  votes: {
    early: { rate: 0.99, count: 33 },
    polling: { rate: 2.07, count: 199 }
  }
},
{ name: '고잔동', rate: 2.51,
  votes: {
    early: { rate: 2.09, count: 55 },
    polling: { rate: 2.70, count: 165 }
  }
},
{ name: '중앙동', rate: 3.17,
  votes: {
    early: { rate: 2.42, count: 92 },
    polling: { rate: 3.57, count: 247 }
  }
},
{ name: '호수동', rate: 3.10,
  votes: {
    early: { rate: 2.49, count: 116 },
    polling: { rate: 3.28, count: 524 }
  }
},
{ name: '원곡동', rate: 1.20,
  votes: {
    early: { rate: 1.31, count: 10 },
    polling: { rate: 1.15, count: 16 }
  }
},
{ name: '백운동', rate: 2.96,
  votes: {
    early: { rate: 2.51, count: 100 },
    polling: { rate: 3.20, count: 237 }
  }
},
{ name: '신길동', rate: 2.13,
  votes: {
    early: { rate: 1.98, count: 52 },
    polling: { rate: 2.19, count: 148 }
  }
},
{ name: '초지동', rate: 2.87,
  votes: {
    early: { rate: 2.66, count: 145 },
    polling: { rate: 2.94, count: 451 }
  }
},
{ name: '선부1동', rate: 2.69,
  votes: {
    early: { rate: 2.35, count: 54 },
    polling: { rate: 2.83, count: 165 }
  }
},
{ name: '선부2동', rate: 2.28,
  votes: {
    early: { rate: 1.92, count: 39 },
    polling: { rate: 2.44, count: 116 }
  }
},
{ name: '선부3동', rate: 2.56,
  votes: {
    early: { rate: 1.95, count: 57 },
    polling: { rate: 2.72, count: 296 }
  }
},
{ name: '대부동', rate: 1.43,
  votes: {
    early: { rate: 1.80, count: 28 },
    polling: { rate: 1.23, count: 34 }
  }
},
{ name: '고양덕양구_관외사전투표', rate: 3.89,
  votes: { absentee: { rate: 3.89, count: 1153 } }
},
{ name: '주교동', rate: 2.00,
  votes: {
    early: { rate: 2.17, count: 38 },
    polling: { rate: 1.91, count: 57 }
  }
},
{ name: '원신동', rate: 2.45,
  votes: {
    early: { rate: 1.86, count: 29 },
    polling: { rate: 2.56, count: 202 }
  }
},
{ name: '흥도동', rate: 2.96,
  votes: {
    early: { rate: 2.60, count: 54 },
    polling: { rate: 3.02, count: 317 }
  }
},
{ name: '성사1동', rate: 3.02,
  votes: {
    early: { rate: 2.65, count: 95 },
    polling: { rate: 3.19, count: 251 }
  }
},
{ name: '성사2동', rate: 2.94,
  votes: {
    early: { rate: 2.26, count: 41 },
    polling: { rate: 3.27, count: 122 }
  }
},
{ name: '효자동', rate: 3.61,
  votes: {
    early: { rate: 3.62, count: 143 },
    polling: { rate: 3.60, count: 297 }
  }
},
{ name: '삼송1동', rate: 3.73,
  votes: {
    early: { rate: 3.66, count: 139 },
    polling: { rate: 3.77, count: 279 }
  }
},
{ name: '삼송2동', rate: 3.23,
  votes: {
    early: { rate: 2.97, count: 106 },
    polling: { rate: 3.34, count: 300 }
  }
},
{ name: '창릉동', rate: 3.75,
  votes: {
    early: { rate: 3.25, count: 83 },
    polling: { rate: 3.93, count: 277 }
  }
},
{ name: '고양동', rate: 2.13,
  votes: {
    early: { rate: 1.58, count: 66 },
    polling: { rate: 2.43, count: 184 }
  }
},
{ name: '관산동', rate: 1.61,
  votes: {
    early: { rate: 1.66, count: 54 },
    polling: { rate: 1.59, count: 163 }
  }
},
{ name: '능곡동', rate: 2.71,
  votes: {
    early: { rate: 2.59, count: 74 },
    polling: { rate: 2.77, count: 152 }
  }
},
{ name: '화정1동', rate: 3.43,
  votes: {
    early: { rate: 3.47, count: 208 },
    polling: { rate: 3.40, count: 404 }
  }
},
{ name: '화정2동', rate: 3.64,
  votes: {
    early: { rate: 2.58, count: 107 },
    polling: { rate: 4.04, count: 437 }
  }
},
{ name: '행주동', rate: 2.12,
  votes: {
    early: { rate: 2.43, count: 33 },
    polling: { rate: 2.00, count: 72 }
  }
},
{ name: '행신1동', rate: 3.27,
  votes: {
    early: { rate: 2.64, count: 76 },
    polling: { rate: 3.53, count: 250 }
  }
},
{ name: '행신2동', rate: 3.35,
  votes: {
    early: { rate: 2.93, count: 129 },
    polling: { rate: 3.53, count: 366 }
  }
},
{ name: '행신3동', rate: 3.27,
  votes: {
    early: { rate: 2.89, count: 104 },
    polling: { rate: 3.44, count: 275 }
  }
},
{ name: '행신4동', rate: 2.77,
  votes: {
    early: { rate: 2.73, count: 90 },
    polling: { rate: 2.79, count: 163 }
  }
},
{ name: '화전동', rate: 2.83,
  votes: {
    early: { rate: 2.21, count: 43 },
    polling: { rate: 2.95, count: 297 }
  }
},
{ name: '대덕동', rate: 3.54,
  votes: {
    early: { rate: 3.15, count: 54 },
    polling: { rate: 3.66, count: 198 }
  }
},
{ name: '식사동', rate: 3.52,
  votes: {
    early: { rate: 3.41, count: 142 },
    polling: { rate: 3.55, count: 447 }
  }
},
{ name: '고양일산동구_관외사전투표', rate: 4.11,
  votes: { absentee: { rate: 4.11, count: 722 } }
},
{ name: '중산1동', rate: 2.90,
  votes: {
    early: { rate: 2.60, count: 87 },
    polling: { rate: 3.07, count: 181 }
  }
},
{ name: '중산2동', rate: 3.18,
  votes: {
    early: { rate: 3.26, count: 92 },
    polling: { rate: 3.15, count: 234 }
  }
},
{ name: '정발산동', rate: 2.71,
  votes: {
    early: { rate: 2.40, count: 62 },
    polling: { rate: 2.82, count: 198 }
  }
},
{ name: '풍산동', rate: 2.97,
  votes: {
    early: { rate: 2.80, count: 119 },
    polling: { rate: 3.03, count: 408 }
  }
},
{ name: '백석1동', rate: 3.85,
  votes: {
    early: { rate: 4.50, count: 136 },
    polling: { rate: 3.65, count: 371 }
  }
},
{ name: '백석2동', rate: 3.18,
  votes: {
    early: { rate: 2.56, count: 73 },
    polling: { rate: 3.49, count: 202 }
  }
},
{ name: '마두1동', rate: 3.70,
  votes: {
    early: { rate: 3.04, count: 42 },
    polling: { rate: 3.80, count: 322 }
  }
},
{ name: '마두2동', rate: 3.95,
  votes: {
    early: { rate: 3.51, count: 129 },
    polling: { rate: 4.26, count: 221 }
  }
},
{ name: '장항1동', rate: 4.73,
  votes: {
    early: { rate: 4.21, count: 42 },
    polling: { rate: 4.81, count: 324 }
  }
},
{ name: '장항2동', rate: 3.43,
  votes: {
    early: { rate: 3.52, count: 89 },
    polling: { rate: 3.41, count: 244 }
  }
},
{ name: '고봉동', rate: 2.04,
  votes: {
    early: { rate: 1.22, count: 19 },
    polling: { rate: 2.26, count: 129 }
  }
},
{ name: '일산2동', rate: 2.91,
  votes: {
    early: { rate: 2.33, count: 76 },
    polling: { rate: 3.20, count: 205 }
  }
},
{ name: '고양일산서구_관외사전투표', rate: 3.98,
  votes: { absentee: { rate: 3.98, count: 554 } }
},
{ name: '일산1동', rate: 2.85,
  votes: {
    early: { rate: 2.28, count: 88 },
    polling: { rate: 3.14, count: 239 }
  }
},
{ name: '일산3동', rate: 3.67,
  votes: {
    early: { rate: 2.47, count: 104 },
    polling: { rate: 4.11, count: 462 }
  }
},
{ name: '탄현1동', rate: 2.94,
  votes: {
    early: { rate: 2.48, count: 96 },
    polling: { rate: 3.14, count: 298 }
  }
},
{ name: '탄현2동', rate: 2.70,
  votes: {
    early: { rate: 2.09, count: 64 },
    polling: { rate: 3.06, count: 162 }
  }
},
{ name: '주엽1동', rate: 3.47,
  votes: {
    early: { rate: 3.45, count: 123 },
    polling: { rate: 3.48, count: 335 }
  }
},
{ name: '주엽2동', rate: 3.40,
  votes: {
    early: { rate: 3.12, count: 96 },
    polling: { rate: 3.49, count: 325 }
  }
},
{ name: '대화동', rate: 3.49,
  votes: {
    early: { rate: 2.94, count: 87 },
    polling: { rate: 3.63, count: 431 }
  }
},
{ name: '송포동', rate: 3.24,
  votes: {
    early: { rate: 1.97, count: 53 },
    polling: { rate: 3.73, count: 258 }
  }
},
{ name: '덕이동', rate: 2.49,
  votes: {
    early: { rate: 2.35, count: 73 },
    polling: { rate: 2.54, count: 235 }
  }
},
{ name: '가좌동', rate: 2.73,
  votes: {
    early: { rate: 2.66, count: 76 },
    polling: { rate: 2.77, count: 160 }
  }
},
{ name: '과천시_관외사전투표', rate: 5.55,
  votes: { absentee: { rate: 5.55, count: 283 } }
},
{ name: '중앙동', rate: 5.07,
  votes: {
    early: { rate: 5.16, count: 114 },
    polling: { rate: 5.03, count: 227 }
  }
},
{ name: '원문동', rate: 5.45,
  votes: {
    early: { rate: 4.75, count: 110 },
    polling: { rate: 5.71, count: 364 }
  }
},
{ name: '갈현동', rate: 4.64,
  votes: {
    early: { rate: 4.71, count: 100 },
    polling: { rate: 4.62, count: 300 }
  }
},
{ name: '별양동', rate: 5.07,
  votes: {
    early: { rate: 4.59, count: 69 },
    polling: { rate: 5.22, count: 254 }
  }
},
{ name: '부림동', rate: 5.28,
  votes: {
    early: { rate: 5.99, count: 102 },
    polling: { rate: 4.92, count: 161 }
  }
},
{ name: '과천동', rate: 3.09,
  votes: {
    early: { rate: 2.99, count: 22 },
    polling: { rate: 3.12, count: 71 }
  }
},
{ name: '문원동', rate: 3.75,
  votes: {
    early: { rate: 2.82, count: 37 },
    polling: { rate: 4.24, count: 105 }
  }
},
{ name: '의왕시_관외사전투표', rate: 5.40,
  votes: { absentee: { rate: 5.40, count: 521 } }
},
{ name: '고천동', rate: 4.28,
  votes: {
    early: { rate: 4.05, count: 132 },
    polling: { rate: 4.39, count: 279 }
  }
},
{ name: '부곡동', rate: 3.11,
  votes: {
    early: { rate: 2.73, count: 132 },
    polling: { rate: 3.30, count: 327 }
  }
},
{ name: '오전동', rate: 3.25,
  votes: {
    early: { rate: 2.46, count: 90 },
    polling: { rate: 3.47, count: 452 }
  }
},
{ name: '내손1동', rate: 3.90,
  votes: {
    early: { rate: 3.19, count: 85 },
    polling: { rate: 4.16, count: 309 }
  }
},
{ name: '내손2동', rate: 4.46,
  votes: {
    early: { rate: 4.43, count: 193 },
    polling: { rate: 4.47, count: 455 }
  }
},
{ name: '청계동', rate: 3.78,
  votes: {
    early: { rate: 3.72, count: 161 },
    polling: { rate: 3.80, count: 583 }
  }
},
{ name: '구리시_관외사전투표', rate: 4.17,
  votes: { absentee: { rate: 4.17, count: 377 } }
},
{ name: '갈매동', rate: 3.00,
  votes: {
    early: { rate: 2.95, count: 149 },
    polling: { rate: 3.03, count: 272 }
  }
},
{ name: '동구동', rate: 3.32,
  votes: {
    early: { rate: 3.50, count: 149 },
    polling: { rate: 3.26, count: 461 }
  }
},
{ name: '인창동', rate: 3.30,
  votes: {
    early: { rate: 3.30, count: 110 },
    polling: { rate: 3.30, count: 292 }
  }
},
{ name: '교문1동', rate: 2.10,
  votes: {
    early: { rate: 2.07, count: 30 },
    polling: { rate: 2.11, count: 105 }
  }
},
{ name: '교문2동', rate: 3.93,
  votes: {
    early: { rate: 3.41, count: 75 },
    polling: { rate: 4.07, count: 317 }
  }
},
{ name: '수택1동', rate: 2.66,
  votes: {
    early: { rate: 2.37, count: 56 },
    polling: { rate: 2.77, count: 152 }
  }
},
{ name: '수택2동', rate: 2.17,
  votes: {
    early: { rate: 1.89, count: 52 },
    polling: { rate: 2.27, count: 186 }
  }
},
{ name: '수택3동', rate: 2.96,
  votes: {
    early: { rate: 2.86, count: 129 },
    polling: { rate: 3.03, count: 226 }
  }
},
{ name: '남양주시_관외사전투표', rate: 3.92,
  votes: { absentee: { rate: 3.92, count: 1374 } }
},
{ name: '와부읍', rate: 2.94,
  votes: {
    early: { rate: 2.74, count: 197 },
    polling: { rate: 3.00, count: 690 }
  }
},
{ name: '진접읍', rate: 2.22,
  votes: {
    early: { rate: 1.94, count: 175 },
    polling: { rate: 2.30, count: 675 }
  }
},
{ name: '화도읍', rate: 2.63,
  votes: {
    early: { rate: 2.46, count: 250 },
    polling: { rate: 2.69, count: 906 }
  }
},
{ name: '진건읍', rate: 1.89,
  votes: {
    early: { rate: 1.76, count: 48 },
    polling: { rate: 1.95, count: 130 }
  }
},
{ name: '오남읍', rate: 2.13,
  votes: {
    early: { rate: 1.79, count: 113 },
    polling: { rate: 2.28, count: 333 }
  }
},
{ name: '퇴계원읍', rate: 2.27,
  votes: {
    early: { rate: 2.21, count: 85 },
    polling: { rate: 2.29, count: 210 }
  }
},
{ name: '별내면', rate: 2.59,
  votes: {
    early: { rate: 2.52, count: 73 },
    polling: { rate: 2.63, count: 158 }
  }
},
{ name: '수동면', rate: 2.77,
  votes: {
    early: { rate: 2.66, count: 58 },
    polling: { rate: 2.87, count: 76 }
  }
},
{ name: '조안면', rate: 2.17,
  votes: {
    early: { rate: 2.22, count: 13 },
    polling: { rate: 2.14, count: 26 }
  }
},
{ name: '호평동', rate: 2.86,
  votes: {
    early: { rate: 2.49, count: 182 },
    polling: { rate: 3.02, count: 511 }
  }
},
{ name: '평내동', rate: 3.30,
  votes: {
    early: { rate: 3.37, count: 173 },
    polling: { rate: 3.27, count: 386 }
  }
},
{ name: '금곡동', rate: 1.79,
  votes: {
    early: { rate: 1.70, count: 36 },
    polling: { rate: 1.82, count: 108 }
  }
},
{ name: '양정동', rate: 2.76,
  votes: {
    early: { rate: 2.98, count: 13 },
    polling: { rate: 2.62, count: 18 }
  }
},
{ name: '다산1동', rate: 3.11,
  votes: {
    early: { rate: 2.72, count: 221 },
    polling: { rate: 3.20, count: 1183 }
  }
},
{ name: '다산2동', rate: 3.15,
  votes: {
    early: { rate: 3.23, count: 162 },
    polling: { rate: 3.12, count: 381 }
  }
},
{ name: '별내동', rate: 3.05,
  votes: {
    early: { rate: 2.63, count: 236 },
    polling: { rate: 3.19, count: 853 }
  }
},
{ name: '오산시_관외사전투표', rate: 4.90,
  votes: { absentee: { rate: 4.90, count: 570 } }
},
{ name: '중앙동', rate: 3.50,
  votes: {
    early: { rate: 2.77, count: 129 },
    polling: { rate: 3.81, count: 412 }
  }
},
{ name: '대원1동', rate: 3.27,
  votes: {
    early: { rate: 3.03, count: 163 },
    polling: { rate: 3.36, count: 446 }
  }
},
{ name: '대원2동', rate: 3.63,
  votes: {
    early: { rate: 3.75, count: 96 },
    polling: { rate: 3.59, count: 282 }
  }
},
{ name: '남촌동', rate: 3.24,
  votes: {
    early: { rate: 2.98, count: 67 },
    polling: { rate: 3.32, count: 262 }
  }
},
{ name: '신장1동', rate: 3.26,
  votes: {
    early: { rate: 2.58, count: 99 },
    polling: { rate: 3.51, count: 369 }
  }
},
{ name: '신장2동', rate: 3.10,
  votes: {
    early: { rate: 3.03, count: 76 },
    polling: { rate: 3.12, count: 228 }
  }
},
{ name: '세마동', rate: 3.90,
  votes: {
    early: { rate: 3.30, count: 113 },
    polling: { rate: 4.10, count: 434 }
  }
},
{ name: '초평동', rate: 3.22,
  votes: {
    early: { rate: 3.01, count: 128 },
    polling: { rate: 3.33, count: 272 }
  }
},
{ name: '화성만세구_관외사전투표', rate: 5.44,
  votes: { absentee: { rate: 5.44, count: 698 } }
},
{ name: '우정읍', rate: 2.60,
  votes: {
    early: { rate: 2.45, count: 69 },
    polling: { rate: 2.69, count: 124 }
  }
},
{ name: '향남읍', rate: 3.19,
  votes: {
    early: { rate: 3.09, count: 224 },
    polling: { rate: 3.22, count: 782 }
  }
},
{ name: '남양읍', rate: 3.99,
  votes: {
    early: { rate: 3.55, count: 255 },
    polling: { rate: 4.18, count: 675 }
  }
},
{ name: '마도면', rate: 2.40,
  votes: {
    early: { rate: 2.49, count: 36 },
    polling: { rate: 2.33, count: 41 }
  }
},
{ name: '송산면', rate: 2.56,
  votes: {
    early: { rate: 3.02, count: 49 },
    polling: { rate: 2.31, count: 68 }
  }
},
{ name: '서신면', rate: 2.21,
  votes: {
    early: { rate: 2.61, count: 34 },
    polling: { rate: 1.96, count: 40 }
  }
},
{ name: '팔탄면', rate: 2.58,
  votes: {
    early: { rate: 2.58, count: 37 },
    polling: { rate: 2.58, count: 67 }
  }
},
{ name: '장안면', rate: 2.28,
  votes: {
    early: { rate: 2.17, count: 23 },
    polling: { rate: 2.32, count: 61 }
  }
},
{ name: '양감면', rate: 2.33,
  votes: {
    early: { rate: 2.96, count: 32 },
    polling: { rate: 1.74, count: 20 }
  }
},
{ name: '새솔동', rate: 3.41,
  votes: {
    early: { rate: 3.04, count: 117 },
    polling: { rate: 3.61, count: 252 }
  }
},
{ name: '정남면', rate: 2.93,
  votes: {
    early: { rate: 3.50, count: 41 },
    polling: { rate: 2.72, count: 88 }
  }
},
{ name: '매송면', rate: 2.57,
  votes: {
    early: { rate: 2.35, count: 19 },
    polling: { rate: 2.65, count: 58 }
  }
},
{ name: '비봉면', rate: 3.93,
  votes: {
    early: { rate: 3.76, count: 80 },
    polling: { rate: 4.00, count: 205 }
  }
},
{ name: '화성효행구_관외사전투표', rate: 5.05,
  votes: { absentee: { rate: 5.05, count: 276 } }
},
{ name: '봉담읍', rate: 4.18,
  votes: {
    early: { rate: 3.65, count: 350 },
    polling: { rate: 4.34, count: 1437 }
  }
},
{ name: '기배동', rate: 3.51,
  votes: {
    early: { rate: 3.31, count: 141 },
    polling: { rate: 3.70, count: 159 }
  }
},
{ name: '화성병점구_관외사전투표', rate: 7.86,
  votes: { absentee: { rate: 7.86, count: 931 } }
},
{ name: '진안동', rate: 5.47,
  votes: {
    early: { rate: 4.64, count: 130 },
    polling: { rate: 5.62, count: 841 }
  }
},
{ name: '병점1동', rate: 5.19,
  votes: {
    early: { rate: 4.90, count: 229 },
    polling: { rate: 5.31, count: 585 }
  }
},
{ name: '병점2동', rate: 4.78,
  votes: {
    early: { rate: 4.32, count: 174 },
    polling: { rate: 5.06, count: 324 }
  }
},
{ name: '반월동', rate: 6.01,
  votes: {
    early: { rate: 4.64, count: 159 },
    polling: { rate: 6.43, count: 737 }
  }
},
{ name: '화산동', rate: 3.91,
  votes: {
    early: { rate: 3.54, count: 139 },
    polling: { rate: 4.07, count: 339 }
  }
},
{ name: '동탄3동', rate: 8.06,
  votes: {
    early: { rate: 7.25, count: 360 },
    polling: { rate: 8.40, count: 983 }
  }
},
{ name: '화성동탄구_관외사전투표', rate: 12.30,
  votes: { absentee: { rate: 12.30, count: 2322 } }
},
{ name: '동탄1동', rate: 10.52,
  votes: {
    early: { rate: 9.45, count: 530 },
    polling: { rate: 10.90, count: 1707 }
  }
},
{ name: '동탄2동', rate: 6.61,
  votes: {
    early: { rate: 6.33, count: 350 },
    polling: { rate: 6.76, count: 687 }
  }
},
{ name: '동탄4동', rate: 14.04,
  votes: {
    early: { rate: 12.22, count: 756 },
    polling: { rate: 14.72, count: 2533 }
  }
},
{ name: '동탄5동', rate: 10.56,
  votes: {
    early: { rate: 9.50, count: 470 },
    polling: { rate: 10.92, count: 1588 }
  }
},
{ name: '동탄6동', rate: 14.42,
  votes: {
    early: { rate: 11.07, count: 498 },
    polling: { rate: 15.55, count: 2069 }
  }
},
{ name: '동탄7동', rate: 14.13,
  votes: {
    early: { rate: 11.68, count: 681 },
    polling: { rate: 14.99, count: 2488 }
  }
},
{ name: '동탄8동', rate: 14.71,
  votes: {
    early: { rate: 12.16, count: 555 },
    polling: { rate: 15.72, count: 1810 }
  }
},
{ name: '동탄9동', rate: 17.72,
  votes: {
    early: { rate: 15.12, count: 937 },
    polling: { rate: 18.62, count: 3340 }
  }
},
{ name: '시흥시_관외사전투표', rate: 3.92,
  votes: { absentee: { rate: 3.92, count: 825 } }
},
{ name: '대야동', rate: 3.22,
  votes: {
    early: { rate: 2.76, count: 132 },
    polling: { rate: 3.37, count: 458 }
  }
},
{ name: '신천동', rate: 1.90,
  votes: {
    early: { rate: 1.61, count: 48 },
    polling: { rate: 1.99, count: 192 }
  }
},
{ name: '신현동', rate: 2.02,
  votes: {
    early: { rate: 1.89, count: 27 },
    polling: { rate: 2.09, count: 59 }
  }
},
{ name: '은행동', rate: 2.86,
  votes: {
    early: { rate: 2.55, count: 154 },
    polling: { rate: 2.96, count: 527 }
  }
},
{ name: '매화동', rate: 2.18,
  votes: {
    early: { rate: 2.33, count: 40 },
    polling: { rate: 2.10, count: 63 }
  }
},
{ name: '목감동', rate: 3.37,
  votes: {
    early: { rate: 3.11, count: 169 },
    polling: { rate: 3.49, count: 417 }
  }
},
{ name: '군자동', rate: 1.71,
  votes: {
    early: { rate: 1.50, count: 34 },
    polling: { rate: 1.79, count: 106 }
  }
},
{ name: '월곶동', rate: 2.78,
  votes: {
    early: { rate: 2.69, count: 61 },
    polling: { rate: 2.83, count: 130 }
  }
},
{ name: '정왕본동', rate: 2.60,
  votes: {
    early: { rate: 2.94, count: 49 },
    polling: { rate: 2.45, count: 93 }
  }
},
{ name: '정왕1동', rate: 3.35,
  votes: {
    early: { rate: 2.90, count: 60 },
    polling: { rate: 3.54, count: 178 }
  }
},
{ name: '정왕2동', rate: 2.35,
  votes: {
    early: { rate: 2.16, count: 65 },
    polling: { rate: 2.43, count: 173 }
  }
},
{ name: '정왕3동', rate: 2.48,
  votes: {
    early: { rate: 2.59, count: 70 },
    polling: { rate: 2.43, count: 134 }
  }
},
{ name: '정왕4동', rate: 3.01,
  votes: {
    early: { rate: 2.79, count: 85 },
    polling: { rate: 3.13, count: 169 }
  }
},
{ name: '거북섬동', rate: 3.55,
  votes: {
    early: { rate: 2.19, count: 28 },
    polling: { rate: 4.34, count: 95 }
  }
},
{ name: '배곧1동', rate: 3.07,
  votes: {
    early: { rate: 2.73, count: 113 },
    polling: { rate: 3.23, count: 310 }
  }
},
{ name: '배곧2동', rate: 3.50,
  votes: {
    early: { rate: 3.11, count: 92 },
    polling: { rate: 3.62, count: 334 }
  }
},
{ name: '과림동', rate: 1.61,
  votes: {
    early: { rate: 0.94, count: 3 },
    polling: { rate: 1.99, count: 11 }
  }
},
{ name: '연성동', rate: 2.90,
  votes: {
    early: { rate: 2.66, count: 73 },
    polling: { rate: 2.98, count: 230 }
  }
},
{ name: '능곡동', rate: 3.11,
  votes: {
    early: { rate: 2.49, count: 81 },
    polling: { rate: 3.38, count: 244 }
  }
},
{ name: '장곡동', rate: 2.95,
  votes: {
    early: { rate: 2.53, count: 144 },
    polling: { rate: 3.15, count: 382 }
  }
},
{ name: '군포시_관외사전투표', rate: 3.96,
  votes: { absentee: { rate: 3.96, count: 610 } }
},
{ name: '군포1동', rate: 3.11,
  votes: {
    early: { rate: 2.05, count: 55 },
    polling: { rate: 3.39, count: 348 }
  }
},
{ name: '군포2동', rate: 3.05,
  votes: {
    early: { rate: 2.82, count: 165 },
    polling: { rate: 3.14, count: 457 }
  }
},
{ name: '산본1동', rate: 2.52,
  votes: {
    early: { rate: 1.73, count: 35 },
    polling: { rate: 2.84, count: 140 }
  }
},
{ name: '산본2동', rate: 3.85,
  votes: {
    early: { rate: 3.98, count: 129 },
    polling: { rate: 3.80, count: 365 }
  }
},
{ name: '금정동', rate: 3.12,
  votes: {
    early: { rate: 2.05, count: 47 },
    polling: { rate: 3.52, count: 216 }
  }
},
{ name: '재궁동', rate: 3.49,
  votes: {
    early: { rate: 3.71, count: 99 },
    polling: { rate: 3.40, count: 203 }
  }
},
{ name: '오금동', rate: 3.46,
  votes: {
    early: { rate: 3.48, count: 107 },
    polling: { rate: 3.43, count: 247 }
  }
},
{ name: '수리동', rate: 2.93,
  votes: {
    early: { rate: 3.48, count: 71 },
    polling: { rate: 2.73, count: 151 }
  }
},
{ name: '궁내동', rate: 3.73,
  votes: {
    early: { rate: 3.15, count: 90 },
    polling: { rate: 3.98, count: 267 }
  }
},
{ name: '광정동', rate: 3.76,
  votes: {
    early: { rate: 3.86, count: 122 },
    polling: { rate: 3.72, count: 318 }
  }
},
{ name: '대야동', rate: 2.97,
  votes: {
    early: { rate: 2.35, count: 47 },
    polling: { rate: 3.39, count: 100 }
  }
},
{ name: '송부동', rate: 2.98,
  votes: {
    early: { rate: 2.84, count: 73 },
    polling: { rate: 3.03, count: 214 }
  }
},
{ name: '하남시_관외사전투표', rate: 4.09,
  votes: { absentee: { rate: 4.09, count: 951 } }
},
{ name: '천현동', rate: 2.03,
  votes: {
    early: { rate: 2.61, count: 23 },
    polling: { rate: 1.75, count: 32 }
  }
},
{ name: '신장1동', rate: 2.31,
  votes: {
    early: { rate: 2.59, count: 53 },
    polling: { rate: 2.04, count: 42 }
  }
},
{ name: '신장2동', rate: 2.97,
  votes: {
    early: { rate: 3.04, count: 186 },
    polling: { rate: 2.94, count: 487 }
  }
},
{ name: '덕풍1동', rate: 2.19,
  votes: {
    early: { rate: 2.08, count: 51 },
    polling: { rate: 2.24, count: 105 }
  }
},
{ name: '덕풍2동', rate: 2.37,
  votes: {
    early: { rate: 2.34, count: 63 },
    polling: { rate: 2.39, count: 135 }
  }
},
{ name: '덕풍3동', rate: 2.79,
  votes: {
    early: { rate: 2.77, count: 99 },
    polling: { rate: 2.80, count: 258 }
  }
},
{ name: '미사1동', rate: 3.96,
  votes: {
    early: { rate: 3.44, count: 184 },
    polling: { rate: 4.13, count: 680 }
  }
},
{ name: '미사2동', rate: 3.20,
  votes: {
    early: { rate: 2.99, count: 223 },
    polling: { rate: 3.30, count: 497 }
  }
},
{ name: '미사3동', rate: 3.47,
  votes: {
    early: { rate: 3.39, count: 87 },
    polling: { rate: 3.50, count: 317 }
  }
},
{ name: '감북동', rate: 2.76,
  votes: {
    early: { rate: 3.24, count: 21 },
    polling: { rate: 2.45, count: 25 }
  }
},
{ name: '감일동', rate: 3.77,
  votes: {
    early: { rate: 3.31, count: 198 },
    polling: { rate: 4.00, count: 470 }
  }
},
{ name: '위례동', rate: 4.72,
  votes: {
    early: { rate: 4.33, count: 158 },
    polling: { rate: 4.85, count: 541 }
  }
},
{ name: '춘궁동', rate: 2.72,
  votes: {
    early: { rate: 2.56, count: 4 },
    polling: { rate: 2.84, count: 6 }
  }
},
{ name: '초이동', rate: 2.75,
  votes: {
    early: { rate: 4.12, count: 17 },
    polling: { rate: 2.12, count: 19 }
  }
},
{ name: '파주시_관외사전투표', rate: 3.34,
  votes: { absentee: { rate: 3.34, count: 948 } }
},
{ name: '문산읍', rate: 1.97,
  votes: {
    early: { rate: 1.72, count: 88 },
    polling: { rate: 2.07, count: 279 }
  }
},
{ name: '조리읍', rate: 2.03,
  votes: {
    early: { rate: 1.88, count: 59 },
    polling: { rate: 2.08, count: 190 }
  }
},
{ name: '법원읍', rate: 1.56,
  votes: {
    early: { rate: 1.87, count: 23 },
    polling: { rate: 1.44, count: 43 }
  }
},
{ name: '파주읍', rate: 1.60,
  votes: {
    early: { rate: 1.62, count: 23 },
    polling: { rate: 1.60, count: 64 }
  }
},
{ name: '광탄면', rate: 1.78,
  votes: {
    early: { rate: 1.74, count: 24 },
    polling: { rate: 1.79, count: 56 }
  }
},
{ name: '탄현면', rate: 1.74,
  votes: {
    early: { rate: 1.21, count: 18 },
    polling: { rate: 1.92, count: 88 }
  }
},
{ name: '월롱면', rate: 2.90,
  votes: {
    early: { rate: 2.27, count: 21 },
    polling: { rate: 3.16, count: 70 }
  }
},
{ name: '적성면', rate: 2.21,
  votes: {
    early: { rate: 2.46, count: 19 },
    polling: { rate: 2.11, count: 44 }
  }
},
{ name: '파평면', rate: 1.86,
  votes: {
    early: { rate: 2.15, count: 10 },
    polling: { rate: 1.76, count: 24 }
  }
},
{ name: '장단면', rate: 0.90,
  votes: {
    early: { rate: 1.35, count: 2 },
    polling: { rate: 0.67, count: 2 }
  }
},
{ name: '교하동', rate: 2.34,
  votes: {
    early: { rate: 2.34, count: 15 },
    polling: { rate: 2.34, count: 50 }
  }
},
{ name: '운정1동', rate: 2.65,
  votes: {
    early: { rate: 1.88, count: 91 },
    polling: { rate: 2.85, count: 539 }
  }
},
{ name: '운정2동', rate: 3.01,
  votes: {
    early: { rate: 2.36, count: 70 },
    polling: { rate: 3.10, count: 630 }
  }
},
{ name: '운정3동', rate: 2.78,
  votes: {
    early: { rate: 2.12, count: 128 },
    polling: { rate: 3.01, count: 619 }
  }
},
{ name: '운정4동', rate: 1.69,
  votes: {
    early: { rate: 1.57, count: 45 },
    polling: { rate: 1.75, count: 102 }
  }
},
{ name: '운정5동', rate: 3.07,
  votes: {
    early: { rate: 2.49, count: 118 },
    polling: { rate: 3.23, count: 566 }
  }
},
{ name: '운정6동', rate: 3.23,
  votes: {
    early: { rate: 3.07, count: 108 },
    polling: { rate: 3.28, count: 349 }
  }
},
{ name: '금촌1동', rate: 2.33,
  votes: {
    early: { rate: 2.74, count: 73 },
    polling: { rate: 2.15, count: 136 }
  }
},
{ name: '금촌2동', rate: 2.44,
  votes: {
    early: { rate: 2.02, count: 93 },
    polling: { rate: 2.64, count: 249 }
  }
},
{ name: '금촌3동', rate: 2.14,
  votes: {
    early: { rate: 1.88, count: 61 },
    polling: { rate: 2.26, count: 153 }
  }
},
{ name: '여주시_관외사전투표', rate: 3.46,
  votes: { absentee: { rate: 3.46, count: 232 } }
},
{ name: '가남읍', rate: 1.57,
  votes: {
    early: { rate: 1.72, count: 34 },
    polling: { rate: 1.51, count: 69 }
  }
},
{ name: '점동면', rate: 1.69,
  votes: {
    early: { rate: 1.73, count: 18 },
    polling: { rate: 1.67, count: 29 }
  }
},
{ name: '세종대왕면', rate: 1.39,
  votes: {
    early: { rate: 1.47, count: 12 },
    polling: { rate: 1.36, count: 28 }
  }
},
{ name: '흥천면', rate: 1.81,
  votes: {
    early: { rate: 2.03, count: 15 },
    polling: { rate: 1.72, count: 30 }
  }
},
{ name: '금사면', rate: 1.07,
  votes: {
    early: { rate: 1.94, count: 11 },
    polling: { rate: 0.58, count: 6 }
  }
},
{ name: '산북면', rate: 2.01,
  votes: {
    early: { rate: 2.92, count: 14 },
    polling: { rate: 1.50, count: 13 }
  }
},
{ name: '대신면', rate: 2.17,
  votes: {
    early: { rate: 2.77, count: 28 },
    polling: { rate: 1.91, count: 45 }
  }
},
{ name: '북내면', rate: 1.67,
  votes: {
    early: { rate: 2.11, count: 17 },
    polling: { rate: 1.46, count: 24 }
  }
},
{ name: '강천면', rate: 1.94,
  votes: {
    early: { rate: 1.90, count: 14 },
    polling: { rate: 1.97, count: 31 }
  }
},
{ name: '여흥동', rate: 1.67,
  votes: {
    early: { rate: 1.54, count: 40 },
    polling: { rate: 1.72, count: 111 }
  }
},
{ name: '중앙동', rate: 1.71,
  votes: {
    early: { rate: 1.47, count: 44 },
    polling: { rate: 1.81, count: 138 }
  }
},
{ name: '오학동', rate: 1.87,
  votes: {
    early: { rate: 1.73, count: 60 },
    polling: { rate: 1.97, count: 94 }
  }
},
{ name: '이천시_관외사전투표', rate: 3.85,
  votes: { absentee: { rate: 3.85, count: 541 } }
},
{ name: '장호원읍', rate: 1.90,
  votes: {
    early: { rate: 2.25, count: 47 },
    polling: { rate: 1.72, count: 73 }
  }
},
{ name: '부발읍', rate: 2.73,
  votes: {
    early: { rate: 2.54, count: 82 },
    polling: { rate: 2.79, count: 314 }
  }
},
{ name: '신둔면', rate: 1.81,
  votes: {
    early: { rate: 2.12, count: 47 },
    polling: { rate: 1.64, count: 70 }
  }
},
{ name: '백사면', rate: 1.56,
  votes: {
    early: { rate: 1.74, count: 29 },
    polling: { rate: 1.49, count: 58 }
  }
},
{ name: '호법면', rate: 1.53,
  votes: {
    early: { rate: 1.65, count: 14 },
    polling: { rate: 1.47, count: 26 }
  }
},
{ name: '마장면', rate: 2.05,
  votes: {
    early: { rate: 1.96, count: 47 },
    polling: { rate: 2.10, count: 91 }
  }
},
{ name: '대월면', rate: 2.57,
  votes: {
    early: { rate: 2.94, count: 68 },
    polling: { rate: 2.36, count: 93 }
  }
},
{ name: '모가면', rate: 1.50,
  votes: {
    early: { rate: 1.90, count: 16 },
    polling: { rate: 1.25, count: 17 }
  }
},
{ name: '설성면', rate: 1.58,
  votes: {
    early: { rate: 2.65, count: 15 },
    polling: { rate: 1.17, count: 17 }
  }
},
{ name: '율면', rate: 1.32,
  votes: {
    early: { rate: 1.42, count: 9 },
    polling: { rate: 1.25, count: 10 }
  }
},
{ name: '창전동', rate: 2.20,
  votes: {
    early: { rate: 2.27, count: 37 },
    polling: { rate: 2.17, count: 94 }
  }
},
{ name: '증포동', rate: 2.31,
  votes: {
    early: { rate: 2.05, count: 120 },
    polling: { rate: 2.41, count: 381 }
  }
},
{ name: '중리동', rate: 3.26,
  votes: {
    early: { rate: 2.61, count: 61 },
    polling: { rate: 3.59, count: 174 }
  }
},
{ name: '관고동', rate: 2.40,
  votes: {
    early: { rate: 2.41, count: 51 },
    polling: { rate: 2.39, count: 70 }
  }
},
{ name: '용인처인구_관외사전투표', rate: 3.68,
  votes: { absentee: { rate: 3.68, count: 668 } }
},
{ name: '포곡읍', rate: 2.47,
  votes: {
    early: { rate: 2.46, count: 100 },
    polling: { rate: 2.47, count: 235 }
  }
},
{ name: '모현읍', rate: 2.56,
  votes: {
    early: { rate: 1.93, count: 73 },
    polling: { rate: 2.79, count: 291 }
  }
},
{ name: '이동읍', rate: 2.29,
  votes: {
    early: { rate: 3.10, count: 81 },
    polling: { rate: 1.90, count: 105 }
  }
},
{ name: '남사읍', rate: 2.57,
  votes: {
    early: { rate: 2.48, count: 50 },
    polling: { rate: 2.60, count: 204 }
  }
},
{ name: '원삼면', rate: 1.53,
  votes: {
    early: { rate: 1.47, count: 16 },
    polling: { rate: 1.56, count: 38 }
  }
},
{ name: '백암면', rate: 1.96,
  votes: {
    early: { rate: 2.31, count: 31 },
    polling: { rate: 1.76, count: 43 }
  }
},
{ name: '양지읍', rate: 2.69,
  votes: {
    early: { rate: 2.91, count: 89 },
    polling: { rate: 2.57, count: 156 }
  }
},
{ name: '중앙동', rate: 2.75,
  votes: {
    early: { rate: 2.75, count: 93 },
    polling: { rate: 2.75, count: 219 }
  }
},
{ name: '역북동', rate: 3.41,
  votes: {
    early: { rate: 3.16, count: 143 },
    polling: { rate: 3.53, count: 344 }
  }
},
{ name: '삼가동', rate: 3.42,
  votes: {
    early: { rate: 3.39, count: 58 },
    polling: { rate: 3.43, count: 196 }
  }
},
{ name: '유림1동', rate: 2.64,
  votes: {
    early: { rate: 2.25, count: 42 },
    polling: { rate: 2.83, count: 109 }
  }
},
{ name: '유림2동', rate: 2.86,
  votes: {
    early: { rate: 2.54, count: 86 },
    polling: { rate: 2.97, count: 332 }
  }
},
{ name: '동부동', rate: 2.57,
  votes: {
    early: { rate: 2.89, count: 56 },
    polling: { rate: 2.41, count: 93 }
  }
},
{ name: '용인수지구_관외사전투표', rate: 5.80,
  votes: { absentee: { rate: 5.80, count: 762 } }
},
{ name: '풍덕천1동', rate: 4.97,
  votes: {
    early: { rate: 4.73, count: 248 },
    polling: { rate: 5.09, count: 534 }
  }
},
{ name: '풍덕천2동', rate: 5.24,
  votes: {
    early: { rate: 5.18, count: 293 },
    polling: { rate: 5.26, count: 763 }
  }
},
{ name: '신봉동', rate: 3.73,
  votes: {
    early: { rate: 3.78, count: 198 },
    polling: { rate: 3.71, count: 567 }
  }
},
{ name: '동천동', rate: 4.54,
  votes: {
    early: { rate: 4.32, count: 304 },
    polling: { rate: 4.63, count: 811 }
  }
},
{ name: '상현1동', rate: 4.06,
  votes: {
    early: { rate: 3.13, count: 79 },
    polling: { rate: 4.39, count: 315 }
  }
},
{ name: '상현3동', rate: 5.30,
  votes: {
    early: { rate: 4.97, count: 203 },
    polling: { rate: 5.44, count: 497 }
  }
},
{ name: '성복동', rate: 3.79,
  votes: {
    early: { rate: 3.27, count: 181 },
    polling: { rate: 3.93, count: 806 }
  }
},
{ name: '용인기흥구_관외사전투표', rate: 5.26,
  votes: { absentee: { rate: 5.26, count: 1742 } }
},
{ name: '신갈동', rate: 3.91,
  votes: {
    early: { rate: 3.38, count: 139 },
    polling: { rate: 4.08, count: 534 }
  }
},
{ name: '영덕1동', rate: 4.73,
  votes: {
    early: { rate: 3.97, count: 189 },
    polling: { rate: 5.08, count: 518 }
  }
},
{ name: '영덕2동', rate: 3.61,
  votes: {
    early: { rate: 3.34, count: 91 },
    polling: { rate: 3.73, count: 226 }
  }
},
{ name: '구갈동', rate: 4.67,
  votes: {
    early: { rate: 4.94, count: 189 },
    polling: { rate: 4.59, count: 639 }
  }
},
{ name: '상갈동', rate: 4.44,
  votes: {
    early: { rate: 4.70, count: 113 },
    polling: { rate: 4.28, count: 170 }
  }
},
{ name: '보라동', rate: 3.24,
  votes: {
    early: { rate: 3.10, count: 139 },
    polling: { rate: 3.29, count: 352 }
  }
},
{ name: '기흥동', rate: 3.14,
  votes: {
    early: { rate: 3.72, count: 73 },
    polling: { rate: 2.96, count: 189 }
  }
},
{ name: '서농동', rate: 4.95,
  votes: {
    early: { rate: 4.60, count: 165 },
    polling: { rate: 5.13, count: 389 }
  }
},
{ name: '구성동', rate: 3.21,
  votes: {
    early: { rate: 3.51, count: 200 },
    polling: { rate: 3.10, count: 430 }
  }
},
{ name: '마북동', rate: 3.75,
  votes: {
    early: { rate: 3.15, count: 116 },
    polling: { rate: 3.92, count: 485 }
  }
},
{ name: '동백1동', rate: 3.13,
  votes: {
    early: { rate: 2.94, count: 125 },
    polling: { rate: 3.21, count: 321 }
  }
},
{ name: '동백2동', rate: 3.61,
  votes: {
    early: { rate: 2.75, count: 116 },
    polling: { rate: 4.05, count: 334 }
  }
},
{ name: '동백3동', rate: 3.16,
  votes: {
    early: { rate: 2.85, count: 107 },
    polling: { rate: 3.31, count: 289 }
  }
},
{ name: '상하동', rate: 3.13,
  votes: {
    early: { rate: 3.07, count: 95 },
    polling: { rate: 3.15, count: 253 }
  }
},
{ name: '보정동', rate: 4.33,
  votes: {
    early: { rate: 4.12, count: 246 },
    polling: { rate: 4.43, count: 549 }
  }
},
{ name: '죽전1동', rate: 4.02,
  votes: {
    early: { rate: 4.04, count: 217 },
    polling: { rate: 4.01, count: 406 }
  }
},
{ name: '죽전2동', rate: 5.07,
  votes: {
    early: { rate: 4.11, count: 68 },
    polling: { rate: 5.32, count: 333 }
  }
},
{ name: '죽전3동', rate: 4.68,
  votes: {
    early: { rate: 4.32, count: 112 },
    polling: { rate: 4.84, count: 415 }
  }
},
{ name: '상현2동', rate: 4.06,
  votes: {
    early: { rate: 3.90, count: 192 },
    polling: { rate: 4.13, count: 460 }
  }
},
{ name: '안성시_관외사전투표', rate: 3.23,
  votes: { absentee: { rate: 3.23, count: 369 } }
},
{ name: '공도읍', rate: 2.50,
  votes: {
    early: { rate: 2.62, count: 187 },
    polling: { rate: 2.46, count: 461 }
  }
},
{ name: '보개면', rate: 1.83,
  votes: {
    early: { rate: 1.84, count: 22 },
    polling: { rate: 1.82, count: 30 }
  }
},
{ name: '금광면', rate: 1.35,
  votes: {
    early: { rate: 1.13, count: 10 },
    polling: { rate: 1.43, count: 36 }
  }
},
{ name: '서운면', rate: 1.58,
  votes: {
    early: { rate: 1.25, count: 9 },
    polling: { rate: 1.84, count: 17 }
  }
},
{ name: '미양면', rate: 1.81,
  votes: {
    early: { rate: 1.69, count: 13 },
    polling: { rate: 1.86, count: 31 }
  }
},
{ name: '대덕면', rate: 2.29,
  votes: {
    early: { rate: 2.93, count: 46 },
    polling: { rate: 2.04, count: 82 }
  }
},
{ name: '양성면', rate: 1.70,
  votes: {
    early: { rate: 1.33, count: 11 },
    polling: { rate: 1.89, count: 30 }
  }
},
{ name: '원곡면', rate: 2.21,
  votes: {
    early: { rate: 2.47, count: 23 },
    polling: { rate: 2.08, count: 37 }
  }
},
{ name: '일죽면', rate: 1.47,
  votes: {
    early: { rate: 1.31, count: 16 },
    polling: { rate: 1.52, count: 33 }
  }
},
{ name: '죽산면', rate: 1.52,
  votes: {
    early: { rate: 1.88, count: 29 },
    polling: { rate: 1.20, count: 22 }
  }
},
{ name: '삼죽면', rate: 1.87,
  votes: {
    early: { rate: 2.28, count: 15 },
    polling: { rate: 1.62, count: 17 }
  }
},
{ name: '고삼면', rate: 1.64,
  votes: {
    early: { rate: 1.75, count: 9 },
    polling: { rate: 1.55, count: 10 }
  }
},
{ name: '안성1동', rate: 2.02,
  votes: {
    early: { rate: 1.76, count: 36 },
    polling: { rate: 2.15, count: 72 }
  }
},
{ name: '안성2동', rate: 2.39,
  votes: {
    early: { rate: 2.36, count: 77 },
    polling: { rate: 2.40, count: 166 }
  }
},
{ name: '안성3동', rate: 2.32,
  votes: {
    early: { rate: 1.97, count: 73 },
    polling: { rate: 2.49, count: 182 }
  }
},
{ name: '김포시_관외사전투표', rate: 4.12,
  votes: { absentee: { rate: 4.12, count: 901 } }
},
{ name: '통진읍', rate: 2.06,
  votes: {
    early: { rate: 2.10, count: 88 },
    polling: { rate: 2.04, count: 197 }
  }
},
{ name: '고촌읍', rate: 3.32,
  votes: {
    early: { rate: 2.57, count: 139 },
    polling: { rate: 3.55, count: 633 }
  }
},
{ name: '양촌읍', rate: 2.51,
  votes: {
    early: { rate: 2.44, count: 89 },
    polling: { rate: 2.53, count: 223 }
  }
},
{ name: '대곶면', rate: 1.80,
  votes: {
    early: { rate: 2.34, count: 24 },
    polling: { rate: 1.60, count: 45 }
  }
},
{ name: '월곶면', rate: 1.68,
  votes: {
    early: { rate: 2.10, count: 21 },
    polling: { rate: 1.41, count: 22 }
  }
},
{ name: '하성면', rate: 1.98,
  votes: {
    early: { rate: 1.74, count: 22 },
    polling: { rate: 2.09, count: 52 }
  }
},
{ name: '김포본동', rate: 2.72,
  votes: {
    early: { rate: 2.14, count: 89 },
    polling: { rate: 2.83, count: 594 }
  }
},
{ name: '장기본동', rate: 3.15,
  votes: {
    early: { rate: 2.82, count: 120 },
    polling: { rate: 3.27, count: 394 }
  }
},
{ name: '사우동', rate: 3.03,
  votes: {
    early: { rate: 2.84, count: 97 },
    polling: { rate: 3.13, count: 205 }
  }
},
{ name: '풍무동', rate: 2.89,
  votes: {
    early: { rate: 2.33, count: 133 },
    polling: { rate: 3.05, count: 634 }
  }
},
{ name: '장기동', rate: 2.84,
  votes: {
    early: { rate: 2.56, count: 114 },
    polling: { rate: 2.94, count: 365 }
  }
},
{ name: '구래동', rate: 2.98,
  votes: {
    early: { rate: 3.02, count: 142 },
    polling: { rate: 2.97, count: 364 }
  }
},
{ name: '마산동', rate: 2.37,
  votes: {
    early: { rate: 1.99, count: 71 },
    polling: { rate: 2.50, count: 264 }
  }
},
{ name: '운양동', rate: 3.44,
  votes: {
    early: { rate: 2.96, count: 161 },
    polling: { rate: 3.61, count: 545 }
  }
},
{ name: '포천시_관외사전투표', rate: 2.92,
  votes: { absentee: { rate: 2.92, count: 186 } }
},
{ name: '소흘읍', rate: 1.79,
  votes: {
    early: { rate: 1.60, count: 97 },
    polling: { rate: 1.88, count: 250 }
  }
},
{ name: '군내면', rate: 1.77,
  votes: {
    early: { rate: 2.05, count: 34 },
    polling: { rate: 1.60, count: 45 }
  }
},
{ name: '내촌면', rate: 1.28,
  votes: {
    early: { rate: 1.27, count: 11 },
    polling: { rate: 1.30, count: 17 }
  }
},
{ name: '가산면', rate: 1.67,
  votes: {
    early: { rate: 1.71, count: 24 },
    polling: { rate: 1.64, count: 39 }
  }
},
{ name: '신북면', rate: 1.13,
  votes: {
    early: { rate: 1.31, count: 19 },
    polling: { rate: 1.06, count: 37 }
  }
},
{ name: '창수면', rate: 1.02,
  votes: {
    early: { rate: 0.41, count: 2 },
    polling: { rate: 1.44, count: 10 }
  }
},
{ name: '영중면', rate: 1.37,
  votes: {
    early: { rate: 1.17, count: 11 },
    polling: { rate: 1.48, count: 23 }
  }
},
{ name: '일동면', rate: 1.92,
  votes: {
    early: { rate: 2.07, count: 31 },
    polling: { rate: 1.84, count: 52 }
  }
},
{ name: '이동면', rate: 1.90,
  votes: {
    early: { rate: 2.38, count: 16 },
    polling: { rate: 1.72, count: 32 }
  }
},
{ name: '영북면', rate: 2.28,
  votes: {
    early: { rate: 1.96, count: 24 },
    polling: { rate: 2.45, count: 57 }
  }
},
{ name: '관인면', rate: 1.16,
  votes: {
    early: { rate: 1.41, count: 7 },
    polling: { rate: 1.02, count: 9 }
  }
},
{ name: '화현면', rate: 1.97,
  votes: {
    early: { rate: 1.22, count: 5 },
    polling: { rate: 2.38, count: 18 }
  }
},
{ name: '포천동', rate: 1.87,
  votes: {
    early: { rate: 1.74, count: 71 },
    polling: { rate: 1.96, count: 116 }
  }
},
{ name: '선단동', rate: 1.31,
  votes: {
    early: { rate: 1.48, count: 32 },
    polling: { rate: 1.21, count: 47 }
  }
},
{ name: '연천군_관외사전투표', rate: 2.28,
  votes: { absentee: { rate: 2.28, count: 64 } }
},
{ name: '연천읍', rate: 2.14,
  votes: {
    early: { rate: 2.30, count: 34 },
    polling: { rate: 2.05, count: 52 }
  }
},
{ name: '전곡읍', rate: 1.85,
  votes: {
    early: { rate: 1.76, count: 56 },
    polling: { rate: 1.89, count: 113 }
  }
},
{ name: '군남면', rate: 0.88,
  votes: {
    early: { rate: 0.87, count: 3 },
    polling: { rate: 0.88, count: 11 }
  }
},
{ name: '청산면', rate: 1.63,
  votes: {
    early: { rate: 2.63, count: 16 },
    polling: { rate: 1.20, count: 17 }
  }
},
{ name: '백학면', rate: 1.79,
  votes: {
    early: { rate: 1.06, count: 5 },
    polling: { rate: 2.20, count: 19 }
  }
},
{ name: '미산면', rate: 1.69,
  votes: {
    early: { rate: 1.69, count: 6 },
    polling: { rate: 1.69, count: 9 }
  }
},
{ name: '왕징면', rate: 1.09,
  votes: {
    early: { rate: 1.33, count: 3 },
    polling: { rate: 0.96, count: 4 }
  }
},
{ name: '신서면', rate: 1.14,
  votes: {
    early: { rate: 0.94, count: 6 },
    polling: { rate: 1.30, count: 11 }
  }
},
{ name: '중면', rate: 5.08,
  votes: {
    early: { rate: 2.04, count: 1 },
    polling: { rate: 7.25, count: 5 }
  }
},
{ name: '장남면', rate: 3.15,
  votes: {
    early: { rate: 3.01, count: 5 },
    polling: { rate: 3.23, count: 10 }
  }
},
{ name: '양평군_관외사전투표', rate: 3.42,
  votes: { absentee: { rate: 3.42, count: 285 } }
},
{ name: '양평읍', rate: 2.27,
  votes: {
    early: { rate: 2.32, count: 132 },
    polling: { rate: 2.25, count: 253 }
  }
},
{ name: '강상면', rate: 1.50,
  votes: {
    early: { rate: 2.27, count: 41 },
    polling: { rate: 1.05, count: 33 }
  }
},
{ name: '강하면', rate: 1.80,
  votes: {
    early: { rate: 2.12, count: 18 },
    polling: { rate: 1.63, count: 26 }
  }
},
{ name: '양서면', rate: 2.01,
  votes: {
    early: { rate: 2.69, count: 53 },
    polling: { rate: 1.72, count: 82 }
  }
},
{ name: '옥천면', rate: 2.25,
  votes: {
    early: { rate: 2.19, count: 47 },
    polling: { rate: 2.31, count: 58 }
  }
},
{ name: '서종면', rate: 2.38,
  votes: {
    early: { rate: 1.94, count: 29 },
    polling: { rate: 2.58, count: 82 }
  }
},
{ name: '단월면', rate: 1.62,
  votes: {
    early: { rate: 1.70, count: 13 },
    polling: { rate: 1.57, count: 20 }
  }
},
{ name: '청운면', rate: 1.25,
  votes: {
    early: { rate: 0.97, count: 8 },
    polling: { rate: 1.44, count: 17 }
  }
},
{ name: '양동면', rate: 1.46,
  votes: {
    early: { rate: 1.57, count: 13 },
    polling: { rate: 1.40, count: 21 }
  }
},
{ name: '지평면', rate: 1.55,
  votes: {
    early: { rate: 1.38, count: 17 },
    polling: { rate: 1.64, count: 38 }
  }
},
{ name: '용문면', rate: 1.83,
  votes: {
    early: { rate: 1.91, count: 60 },
    polling: { rate: 1.78, count: 104 }
  }
},
{ name: '개군면', rate: 1.66,
  votes: {
    early: { rate: 2.42, count: 21 },
    polling: { rate: 1.29, count: 23 }
  }
},
{ name: '가평군_관외사전투표', rate: 3.45,
  votes: { absentee: { rate: 3.45, count: 117 } }
},
{ name: '가평읍', rate: 1.60,
  votes: {
    early: { rate: 1.53, count: 63 },
    polling: { rate: 1.65, count: 108 }
  }
},
{ name: '설악면', rate: 2.04,
  votes: {
    early: { rate: 1.62, count: 28 },
    polling: { rate: 2.27, count: 71 }
  }
},
{ name: '청평면', rate: 1.75,
  votes: {
    early: { rate: 1.63, count: 33 },
    polling: { rate: 1.81, count: 80 }
  }
},
{ name: '상면', rate: 1.58,
  votes: {
    early: { rate: 2.02, count: 16 },
    polling: { rate: 1.41, count: 28 }
  }
},
{ name: '조종면', rate: 1.92,
  votes: {
    early: { rate: 1.81, count: 27 },
    polling: { rate: 1.98, count: 54 }
  }
},
{ name: '북면', rate: 1.84,
  votes: {
    early: { rate: 3.05, count: 21 },
    polling: { rate: 1.10, count: 14 }
  }
},
{ name: '광주시_관외사전투표', rate: 3.09,
  votes: { absentee: { rate: 3.09, count: 666 } }
},
{ name: '초월읍', rate: 2.25,
  votes: {
    early: { rate: 1.92, count: 110 },
    polling: { rate: 2.36, count: 375 }
  }
},
{ name: '곤지암읍', rate: 1.88,
  votes: {
    early: { rate: 1.87, count: 56 },
    polling: { rate: 1.88, count: 121 }
  }
},
{ name: '도척면', rate: 1.64,
  votes: {
    early: { rate: 1.18, count: 17 },
    polling: { rate: 1.89, count: 49 }
  }
},
{ name: '퇴촌면', rate: 1.52,
  votes: {
    early: { rate: 1.50, count: 37 },
    polling: { rate: 1.53, count: 67 }
  }
},
{ name: '남종면', rate: 1.26,
  votes: {
    early: { rate: 1.88, count: 4 },
    polling: { rate: 1.04, count: 6 }
  }
},
{ name: '남한산성면', rate: 2.08,
  votes: {
    early: { rate: 3.15, count: 10 },
    polling: { rate: 1.66, count: 15 }
  }
},
{ name: '오포1동', rate: 2.01,
  votes: {
    early: { rate: 1.95, count: 66 },
    polling: { rate: 2.04, count: 179 }
  }
},
{ name: '오포2동', rate: 2.20,
  votes: {
    early: { rate: 1.84, count: 63 },
    polling: { rate: 2.34, count: 218 }
  }
},
{ name: '신현동', rate: 2.55,
  votes: {
    early: { rate: 2.62, count: 119 },
    polling: { rate: 2.51, count: 227 }
  }
},
{ name: '능평동', rate: 2.20,
  votes: {
    early: { rate: 2.05, count: 65 },
    polling: { rate: 2.28, count: 142 }
  }
},
{ name: '경안동', rate: 2.69,
  votes: {
    early: { rate: 2.63, count: 94 },
    polling: { rate: 2.71, count: 238 }
  }
},
{ name: '쌍령동', rate: 2.29,
  votes: {
    early: { rate: 2.18, count: 60 },
    polling: { rate: 2.36, count: 120 }
  }
},
{ name: '송정동', rate: 2.39,
  votes: {
    early: { rate: 1.95, count: 60 },
    polling: { rate: 2.59, count: 177 }
  }
},
{ name: '탄벌동', rate: 2.18,
  votes: {
    early: { rate: 2.06, count: 101 },
    polling: { rate: 2.23, count: 269 }
  }
},
{ name: '광남1동', rate: 2.18,
  votes: {
    early: { rate: 1.90, count: 103 },
    polling: { rate: 2.36, count: 197 }
  }
},
{ name: '광남2동', rate: 2.60,
  votes: {
    early: { rate: 1.93, count: 78 },
    polling: { rate: 2.88, count: 281 }
  }
}
    ]
  },
 { name: '경북', rate: 2.90, votes: 37912, seats: 0, type: '광역',
  districts: [
    { name: '포항시북구', rate: 3.46, votes: 4577 },
    { name: '포항시남구', rate: 3.18, votes: 3228 },
    { name: '울릉군', rate: 2.65, votes: 175 },
    { name: '경주시', rate: 2.46, votes: 2972 },
    { name: '김천시', rate: 2.76, votes: 1981 },
    { name: '안동시', rate: 2.83, votes: 2440 },
    { name: '구미시', rate: 3.31, votes: 5983 },
    { name: '영주시', rate: 2.59, votes: 1433 },
    { name: '영천시', rate: 2.52, votes: 1356 },
    { name: '상주시', rate: 2.66, votes: 1420 },
    { name: '문경시', rate: 2.65, votes: 1069 },
    { name: '예천군', rate: 3.03, votes: 941 },
    { name: '경산시', rate: 3.01, votes: 3755 },
    { name: '청도군', rate: 2.64, votes: 694 },
    { name: '고령군', rate: 2.46, votes: 438 },
    { name: '성주군', rate: 2.59, votes: 698 },
    { name: '칠곡군', rate: 3.14, votes: 1483 },
    { name: '의성군', rate: 2.03, votes: 648 },
    { name: '청송군', rate: 2.54, votes: 408 },
    { name: '영양군', rate: 2.81, votes: 322 },
    { name: '영덕군', rate: 2.20, votes: 459 },
    { name: '봉화군', rate: 2.73, votes: 506 },
    { name: '울진군', rate: 3.17, votes: 926 }
  ],
    neighborhoods:[
 { name: '포항시_북구_관외사전투표', rate: 4.88,
    votes: { absentee: { rate: 4.88, count: 733 } }
  },

  { name: '흥해읍', rate: 3.37,
    votes: {
      early: { rate: 3.85, count: 116 },
      polling: { rate: 3.01, count: 741 }
    }
  },

  { name: '신광면', rate: 2.50,
    votes: {
      early: { rate: 3.33, count: 12 },
      polling: { rate: 2.11, count: 24 }
    }
  },

  { name: '청하면', rate: 1.90,
    votes: {
      early: { rate: 3.16, count: 22 },
      polling: { rate: 1.36, count: 21 }
    }
  },

  { name: '송라면', rate: 1.19,
    votes: {
      early: { rate: 0.91, count: 4 },
      polling: { rate: 1.22, count: 10 }
    }
  },

  { name: '기계면', rate: 2.35,
    votes: {
      early: { rate: 1.98, count: 20 },
      polling: { rate: 2.71, count: 43 }
    }
  },

  { name: '죽장면', rate: 1.55,
    votes: {
      early: { rate: 2.96, count: 11 },
      polling: { rate: 1.28, count: 25 }
    }
  },

  { name: '기북면', rate: 1.12,
    votes: {
      early: { rate: 2.41, count: 6 },
      polling: { rate: 0.77, count: 7 }
    }
  },

  { name: '중앙동', rate: 2.44,
    votes: {
      early: { rate: 2.35, count: 24 },
      polling: { rate: 2.52, count: 131 }
    }
  },

  { name: '양학동', rate: 3.37,
    votes: {
      early: { rate: 3.26, count: 73 },
      polling: { rate: 2.96, count: 160 }
    }
  },

  { name: '죽도동', rate: 2.12,
    votes: {
      early: { rate: 2.18, count: 30 },
      polling: { rate: 2.05, count: 128 }
    }
  },

  { name: '용흥동', rate: 3.06,
    votes: {
      early: { rate: 3.37, count: 46 },
      polling: { rate: 2.92, count: 213 }
    }
  },

  { name: '우창동', rate: 3.21,
    votes: {
      early: { rate: 4.12, count: 107 },
      polling: { rate: 2.85, count: 300 }
    }
  },

  { name: '두호동', rate: 3.35,
    votes: {
      early: { rate: 3.54, count: 60 },
      polling: { rate: 3.15, count: 234 }
    }
  },

  { name: '장량동', rate: 4.15,
    votes: {
      early: { rate: 4.20, count: 188 },
      polling: { rate: 3.89, count: 960 }
    }
  },

  { name: '환여동', rate: 3.23,
    votes: {
      early: { rate: 4.57, count: 38 },
      polling: { rate: 2.87, count: 81 }
    }
  },
{ name: '포항시_남구_관외사전투표', rate: 5.17,
  votes: { absentee: { rate: 5.17, count: 458 } }
},
{ name: '구룡포읍', rate: 1.63,
  votes: {
    early: { rate: 1.76, count: 18 },
    polling: { rate: 1.58, count: 39 }
  }
},
{ name: '연일읍', rate: 3.07,
  votes: {
    early: { rate: 2.86, count: 69 },
    polling: { rate: 3.13, count: 291 }
  }
},
{ name: '오천읍', rate: 2.88,
  votes: {
    early: { rate: 2.59, count: 121 },
    polling: { rate: 2.96, count: 482 }
  }
},
{ name: '대송면', rate: 1.98,
  votes: {
    early: { rate: 2.34, count: 11 },
    polling: { rate: 1.84, count: 22 }
  }
},
{ name: '동해면', rate: 2.10,
  votes: {
    early: { rate: 2.09, count: 27 },
    polling: { rate: 2.10, count: 65 }
  }
},
{ name: '장기면', rate: 1.53,
  votes: {
    early: { rate: 1.44, count: 6 },
    polling: { rate: 1.55, count: 20 }
  }
},
{ name: '호미곶면', rate: 2.26,
  votes: {
    early: { rate: 1.96, count: 7 },
    polling: { rate: 2.45, count: 14 }
  }
},
{ name: '상대동', rate: 2.46,
  votes: {
    early: { rate: 2.27, count: 44 },
    polling: { rate: 2.51, count: 188 }
  }
},
{ name: '해도동', rate: 1.86,
  votes: {
    early: { rate: 2.21, count: 30 },
    polling: { rate: 1.72, count: 103 }
  }
},
{ name: '송도동', rate: 2.27,
  votes: {
    early: { rate: 2.35, count: 32 },
    polling: { rate: 2.25, count: 88 }
  }
},
{ name: '청림동', rate: 2.70,
  votes: {
    early: { rate: 4.49, count: 19 },
    polling: { rate: 2.15, count: 35 }
  }
},
{ name: '제철동', rate: 2.31,
  votes: {
    early: { rate: 1.27, count: 5 },
    polling: { rate: 2.91, count: 20 }
  }
},
{ name: '효곡동', rate: 4.73,
  votes: {
    early: { rate: 4.93, count: 154 },
    polling: { rate: 4.65, count: 444 }
  }
},
{ name: '대이동', rate: 4.18,
  votes: {
    early: { rate: 4.10, count: 108 },
    polling: { rate: 4.22, count: 301 }
  }
},
{ name: '울릉군_관외사전투표', rate: 3.33,
  votes: { absentee: { rate: 3.33, count: 43 } }
},
{ name: '울릉읍', rate: 2.55,
  votes: {
    early: { rate: 3.84, count: 54 },
    polling: { rate: 1.72, count: 38 }
  }
},
{ name: '서면', rate: 2.38,
  votes: {
    early: { rate: 4.14, count: 12 },
    polling: { rate: 1.52, count: 9 }
  }
},
{ name: '북면', rate: 2.07,
  votes: {
    early: { rate: 2.43, count: 7 },
    polling: { rate: 1.85, count: 9 }
  }
},
{ name: '경주시_관외사전투표', rate: 3.82,
  votes: { absentee: { rate: 3.82, count: 486 } }
},
{ name: '감포읍', rate: 1.95,
  votes: {
    early: { rate: 2.33, count: 12 },
    polling: { rate: 1.80, count: 25 }
  }
},
{ name: '안강읍', rate: 1.96,
  votes: {
    early: { rate: 2.06, count: 65 },
    polling: { rate: 1.91, count: 140 }
  }
},
{ name: '건천읍', rate: 2.32,
  votes: {
    early: { rate: 2.04, count: 32 },
    polling: { rate: 2.40, count: 120 }
  }
},
{ name: '외동읍', rate: 1.94,
  votes: {
    early: { rate: 2.41, count: 45 },
    polling: { rate: 1.82, count: 131 }
  }
},
{ name: '문무대왕면', rate: 4.05,
  votes: {
    early: { rate: 5.09, count: 33 },
    polling: { rate: 3.43, count: 37 }
  }
},
{ name: '양남면', rate: 2.23,
  votes: {
    early: { rate: 2.19, count: 21 },
    polling: { rate: 2.25, count: 41 }
  }
},
{ name: '내남면', rate: 1.67,
  votes: {
    early: { rate: 2.02, count: 14 },
    polling: { rate: 1.52, count: 24 }
  }
},
{ name: '산내면', rate: 1.38,
  votes: {
    early: { rate: 1.92, count: 10 },
    polling: { rate: 1.10, count: 11 }
  }
},
{ name: '서면', rate: 2.15,
  votes: {
    early: { rate: 3.75, count: 16 },
    polling: { rate: 1.54, count: 17 }
  }
},
{ name: '현곡면', rate: 2.96,
  votes: {
    early: { rate: 3.47, count: 67 },
    polling: { rate: 2.82, count: 208 }
  }
},
{ name: '강동면', rate: 1.86,
  votes: {
    early: { rate: 2.46, count: 22 },
    polling: { rate: 1.57, count: 29 }
  }
},
{ name: '천북면', rate: 1.78,
  votes: {
    early: { rate: 1.18, count: 9 },
    polling: { rate: 2.04, count: 37 }
  }
},
{ name: '황오동', rate: 1.24,
  votes: {
    early: { rate: 1.95, count: 21 },
    polling: { rate: 1.02, count: 37 }
  }
},
{ name: '성건동', rate: 2.09,
  votes: {
    early: { rate: 2.40, count: 30 },
    polling: { rate: 2.00, count: 82 }
  }
},
{ name: '황남동', rate: 2.33,
  votes: {
    early: { rate: 3.61, count: 19 },
    polling: { rate: 1.81, count: 23 }
  }
},
{ name: '월성동', rate: 1.94,
  votes: {
    early: { rate: 3.06, count: 13 },
    polling: { rate: 1.69, count: 32 }
  }
},
{ name: '선도동', rate: 2.56,
  votes: {
    early: { rate: 3.04, count: 53 },
    polling: { rate: 2.36, count: 100 }
  }
},
{ name: '용강동', rate: 2.70,
  votes: {
    early: { rate: 2.73, count: 46 },
    polling: { rate: 2.69, count: 202 }
  }
},
{ name: '황성동', rate: 2.82,
  votes: {
    early: { rate: 2.90, count: 101 },
    polling: { rate: 2.78, count: 232 }
  }
},
{ name: '동천동', rate: 2.19,
  votes: {
    early: { rate: 2.57, count: 50 },
    polling: { rate: 2.08, count: 142 }
  }
},
{ name: '불국동', rate: 2.34,
  votes: {
    early: { rate: 2.30, count: 38 },
    polling: { rate: 2.37, count: 68 }
  }
},
{ name: '보덕동', rate: 2.27,
  votes: {
    early: { rate: 2.84, count: 8 },
    polling: { rate: 1.97, count: 10 }
  }
},
{ name: '김천시_관외사전투표', rate: 3.52,
  votes: { absentee: { rate: 3.52, count: 316 } }
},
{ name: '아포읍', rate: 2.08,
  votes: {
    early: { rate: 2.96, count: 44 },
    polling: { rate: 1.56, count: 39 }
  }
},
{ name: '농소면', rate: 2.73,
  votes: {
    early: { rate: 3.96, count: 23 },
    polling: { rate: 2.02, count: 21 }
  }
},
{ name: '남면', rate: 1.85,
  votes: {
    early: { rate: 1.97, count: 10 },
    polling: { rate: 1.80, count: 17 }
  }
},
{ name: '개령면', rate: 2.44,
  votes: {
    early: { rate: 3.90, count: 17 },
    polling: { rate: 1.64, count: 13 }
  }
},
{ name: '감문면', rate: 2.02,
  votes: {
    early: { rate: 2.20, count: 17 },
    polling: { rate: 1.87, count: 18 }
  }
},
{ name: '어모면', rate: 1.89,
  votes: {
    early: { rate: 2.52, count: 17 },
    polling: { rate: 1.57, count: 21 }
  }
},
{ name: '봉산면', rate: 2.27,
  votes: {
    early: { rate: 2.80, count: 16 },
    polling: { rate: 1.97, count: 20 }
  }
},
{ name: '대항면', rate: 2.59,
  votes: {
    early: { rate: 2.19, count: 11 },
    polling: { rate: 2.74, count: 34 }
  }
},
{ name: '감천면', rate: 1.93,
  votes: {
    early: { rate: 1.74, count: 8 },
    polling: { rate: 2.07, count: 12 }
  }
},
{ name: '조마면', rate: 2.02,
  votes: {
    early: { rate: 1.85, count: 9 },
    polling: { rate: 2.16, count: 13 }
  }
},
{ name: '구성면', rate: 1.40,
  votes: {
    early: { rate: 1.90, count: 10 },
    polling: { rate: 1.10, count: 10 }
  }
},
{ name: '지례면', rate: 1.32,
  votes: {
    early: { rate: 0.56, count: 2 },
    polling: { rate: 1.83, count: 10 }
  }
},
{ name: '부항면', rate: 3.53,
  votes: {
    early: { rate: 3.90, count: 13 },
    polling: { rate: 3.17, count: 11 }
  }
},
{ name: '대덕면', rate: 2.34,
  votes: {
    early: { rate: 2.38, count: 11 },
    polling: { rate: 2.31, count: 14 }
  }
},
{ name: '증산면', rate: 3.36,
  votes: {
    early: { rate: 3.00, count: 10 },
    polling: { rate: 3.82, count: 10 }
  }
},
{ name: '자산동', rate: 1.62,
  votes: {
    early: { rate: 1.67, count: 15 },
    polling: { rate: 1.60, count: 33 }
  }
},
{ name: '평화남산동', rate: 1.96,
  votes: {
    early: { rate: 2.42, count: 20 },
    polling: { rate: 1.80, count: 42 }
  }
},
{ name: '양금동', rate: 1.86,
  votes: {
    early: { rate: 2.51, count: 15 },
    polling: { rate: 1.56, count: 20 }
  }
},
{ name: '대신동', rate: 2.93,
  votes: {
    early: { rate: 3.31, count: 93 },
    polling: { rate: 2.78, count: 199 }
  }
},
{ name: '대곡동', rate: 2.35,
  votes: {
    early: { rate: 2.07, count: 71 },
    polling: { rate: 2.51, count: 147 }
  }
},
{ name: '지좌동', rate: 2.31,
  votes: {
    early: { rate: 2.57, count: 38 },
    polling: { rate: 2.18, count: 62 }
  }
},
{ name: '율곡동', rate: 4.75,
  votes: {
    early: { rate: 4.88, count: 171 },
    polling: { rate: 4.67, count: 246 }
  }
},
{ name: '안동시_관외사전투표', rate: 4.18,
  votes: { absentee: { rate: 4.18, count: 519 } }
},
{ name: '풍산읍', rate: 2.54,
  votes: {
    early: { rate: 2.84, count: 31 },
    polling: { rate: 2.43, count: 74 }
  }
},
{ name: '와룡면', rate: 1.92,
  votes: {
    early: { rate: 1.78, count: 13 },
    polling: { rate: 2.00, count: 25 }
  }
},
{ name: '북후면', rate: 1.89,
  votes: {
    early: { rate: 1.89, count: 10 },
    polling: { rate: 1.89, count: 17 }
  }
},
{ name: '서후면', rate: 2.11,
  votes: {
    early: { rate: 2.52, count: 12 },
    polling: { rate: 1.96, count: 25 }
  }
},
{ name: '풍천면', rate: 4.11,
  votes: {
    early: { rate: 3.81, count: 30 },
    polling: { rate: 4.21, count: 98 }
  }
},
{ name: '일직면', rate: 1.81,
  votes: {
    early: { rate: 1.55, count: 9 },
    polling: { rate: 2.01, count: 15 }
  }
},
{ name: '남후면', rate: 2.09,
  votes: {
    early: { rate: 2.42, count: 8 },
    polling: { rate: 1.88, count: 10 }
  }
},
{ name: '남선면', rate: 1.56,
  votes: {
    early: { rate: 1.94, count: 5 },
    polling: { rate: 1.44, count: 12 }
  }
},
{ name: '임하면', rate: 3.06,
  votes: {
    early: { rate: 3.05, count: 17 },
    polling: { rate: 3.07, count: 24 }
  }
},
{ name: '길안면', rate: 2.52,
  votes: {
    early: { rate: 2.98, count: 15 },
    polling: { rate: 2.28, count: 22 }
  }
},
{ name: '임동면', rate: 1.35,
  votes: {
    early: { rate: 1.41, count: 5 },
    polling: { rate: 1.31, count: 7 }
  }
},
{ name: '예안면', rate: 2.20,
  votes: {
    early: { rate: 2.02, count: 8 },
    polling: { rate: 2.33, count: 13 }
  }
},
{ name: '도산면', rate: 1.02,
  votes: {
    early: { rate: 0.42, count: 1 },
    polling: { rate: 1.29, count: 7 }
  }
},
{ name: '녹전면', rate: 1.51,
  votes: {
    early: { rate: 1.02, count: 2 },
    polling: { rate: 1.66, count: 11 }
  }
},
{ name: '중구동', rate: 3.06,
  votes: {
    early: { rate: 4.29, count: 35 },
    polling: { rate: 2.46, count: 42 }
  }
},
{ name: '명륜동', rate: 1.66,
  votes: {
    early: { rate: 1.90, count: 17 },
    polling: { rate: 1.52, count: 24 }
  }
},
{ name: '용상동', rate: 3.26,
  votes: {
    early: { rate: 3.54, count: 131 },
    polling: { rate: 3.12, count: 236 }
  }
},
{ name: '서구동', rate: 2.60,
  votes: {
    early: { rate: 2.62, count: 23 },
    polling: { rate: 2.60, count: 79 }
  }
},
{ name: '태화동', rate: 1.89,
  votes: {
    early: { rate: 1.64, count: 26 },
    polling: { rate: 1.99, count: 77 }
  }
},
{ name: '평화동', rate: 2.73,
  votes: {
    early: { rate: 3.16, count: 30 },
    polling: { rate: 2.53, count: 55 }
  }
},
{ name: '안기동', rate: 2.05,
  votes: {
    early: { rate: 2.03, count: 22 },
    polling: { rate: 2.06, count: 41 }
  }
},
{ name: '옥동', rate: 2.65,
  votes: {
    early: { rate: 2.45, count: 56 },
    polling: { rate: 2.72, count: 164 }
  }
},
{ name: '송하동', rate: 2.59,
  votes: {
    early: { rate: 2.67, count: 67 },
    polling: { rate: 2.55, count: 107 }
  }
},
{ name: '강남동', rate: 3.29,
  votes: {
    early: { rate: 3.54, count: 63 },
    polling: { rate: 3.14, count: 91 }
  }
},
{ name: '구미시_관외사전투표', rate: 4.96,
  votes: { absentee: { rate: 4.96, count: 991 } }
},
{ name: '선산읍', rate: 1.96,
  votes: {
    early: { rate: 2.25, count: 43 },
    polling: { rate: 1.84, count: 85 }
  }
},
{ name: '고아읍', rate: 2.84,
  votes: {
    early: { rate: 2.96, count: 54 },
    polling: { rate: 2.82, count: 390 }
  }
},
{ name: '산동읍', rate: 3.36,
  votes: {
    early: { rate: 4.10, count: 119 },
    polling: { rate: 3.08, count: 232 }
  }
},
{ name: '무을면', rate: 1.50,
  votes: {
    early: { rate: 2.70, count: 8 },
    polling: { rate: 1.00, count: 7 }
  }
},
{ name: '옥성면', rate: 2.20,
  votes: {
    early: { rate: 3.73, count: 10 },
    polling: { rate: 1.56, count: 10 }
  }
},
{ name: '도개면', rate: 1.26,
  votes: {
    early: { rate: 1.68, count: 5 },
    polling: { rate: 1.08, count: 8 }
  }
},
{ name: '해평면', rate: 1.70,
  votes: {
    early: { rate: 2.43, count: 14 },
    polling: { rate: 1.39, count: 19 }
  }
},
{ name: '장천면', rate: 2.00,
  votes: {
    early: { rate: 3.51, count: 18 },
    polling: { rate: 1.25, count: 13 }
  }
},
{ name: '송정동', rate: 2.96,
  votes: {
    early: { rate: 3.31, count: 86 },
    polling: { rate: 2.84, count: 212 }
  }
},
{ name: '원평동', rate: 3.46,
  votes: {
    early: { rate: 4.18, count: 56 },
    polling: { rate: 3.11, count: 86 }
  }
},
{ name: '지산동', rate: 1.81,
  votes: {
    early: { rate: 4.53, count: 11 },
    polling: { rate: 0.93, count: 7 }
  }
},
{ name: '도량동', rate: 2.89,
  votes: {
    early: { rate: 3.11, count: 71 },
    polling: { rate: 2.83, count: 254 }
  }
},
{ name: '선주원남동', rate: 3.31,
  votes: {
    early: { rate: 3.59, count: 126 },
    polling: { rate: 3.22, count: 342 }
  }
},
{ name: '형곡1동', rate: 2.67,
  votes: {
    early: { rate: 2.69, count: 64 },
    polling: { rate: 2.65, count: 103 }
  }
},
{ name: '형곡2동', rate: 2.43,
  votes: {
    early: { rate: 2.76, count: 47 },
    polling: { rate: 2.31, count: 108 }
  }
},
{ name: '신평1동', rate: 4.07,
  votes: {
    early: { rate: 5.23, count: 36 },
    polling: { rate: 3.55, count: 56 }
  }
},
{ name: '신평2동', rate: 1.95,
  votes: {
    early: { rate: 3.56, count: 12 },
    polling: { rate: 1.31, count: 11 }
  }
},
{ name: '비산동', rate: 3.30,
  votes: {
    early: { rate: 3.75, count: 68 },
    polling: { rate: 3.08, count: 116 }
  }
},
{ name: '공단동', rate: 3.45,
  votes: {
    early: { rate: 4.04, count: 24 },
    polling: { rate: 3.14, count: 35 }
  }
},
{ name: '광평동', rate: 3.99,
  votes: {
    early: { rate: 4.68, count: 26 },
    polling: { rate: 3.66, count: 44 }
  }
},
{ name: '상모사곡동', rate: 3.35,
  votes: {
    early: { rate: 4.15, count: 123 },
    polling: { rate: 3.08, count: 276 }
  }
},
{ name: '임오동', rate: 3.37,
  votes: {
    early: { rate: 3.46, count: 48 },
    polling: { rate: 3.33, count: 164 }
  }
},
{ name: '인동동', rate: 3.50,
  votes: {
    early: { rate: 3.57, count: 110 },
    polling: { rate: 3.49, count: 425 }
  }
},
{ name: '진미동', rate: 3.62,
  votes: {
    early: { rate: 3.86, count: 71 },
    polling: { rate: 3.47, count: 99 }
  }
},
{ name: '양포동', rate: 3.66,
  votes: {
    early: { rate: 4.19, count: 170 },
    polling: { rate: 3.49, count: 450 }
  }
},
{ name: '영주시_관외사전투표', rate: 3.52,
  votes: { absentee: { rate: 3.52, count: 241 } }
},
{ name: '풍기읍', rate: 1.74,
  votes: {
    early: { rate: 2.19, count: 39 },
    polling: { rate: 1.53, count: 59 }
  }
},
{ name: '이산면', rate: 2.88,
  votes: {
    early: { rate: 3.65, count: 15 },
    polling: { rate: 2.47, count: 19 }
  }
},
{ name: '평은면', rate: 1.82,
  votes: {
    early: { rate: 1.57, count: 5 },
    polling: { rate: 1.99, count: 10 }
  }
},
{ name: '문수면', rate: 2.53,
  votes: {
    early: { rate: 2.72, count: 11 },
    polling: { rate: 2.39, count: 14 }
  }
},
{ name: '장수면', rate: 2.01,
  votes: {
    early: { rate: 1.66, count: 5 },
    polling: { rate: 2.15, count: 17 }
  }
},
{ name: '안정면', rate: 2.10,
  votes: {
    early: { rate: 1.83, count: 10 },
    polling: { rate: 2.24, count: 23 }
  }
},
{ name: '봉현면', rate: 2.10,
  votes: {
    early: { rate: 2.75, count: 10 },
    polling: { rate: 1.88, count: 21 }
  }
},
{ name: '순흥면', rate: 1.80,
  votes: {
    early: { rate: 3.23, count: 12 },
    polling: { rate: 1.13, count: 9 }
  }
},
{ name: '단산면', rate: 2.54,
  votes: {
    early: { rate: 2.24, count: 5 },
    polling: { rate: 2.63, count: 20 }
  }
},
{ name: '부석면', rate: 1.60,
  votes: {
    early: { rate: 2.35, count: 12 },
    polling: { rate: 1.26, count: 14 }
  }
},
{ name: '상망동', rate: 2.59,
  votes: {
    early: { rate: 2.51, count: 27 },
    polling: { rate: 2.63, count: 60 }
  }
},
{ name: '하망동', rate: 2.90,
  votes: {
    early: { rate: 3.65, count: 30 },
    polling: { rate: 2.59, count: 51 }
  }
},
{ name: '영주1동', rate: 2.41,
  votes: {
    early: { rate: 2.91, count: 16 },
    polling: { rate: 2.20, count: 28 }
  }
},
{ name: '영주2동', rate: 2.19,
  votes: {
    early: { rate: 3.00, count: 26 },
    polling: { rate: 1.76, count: 29 }
  }
},
{ name: '휴천1동', rate: 3.13,
  votes: {
    early: { rate: 3.20, count: 27 },
    polling: { rate: 3.10, count: 64 }
  }
},
{ name: '휴천2동', rate: 2.89,
  votes: {
    early: { rate: 2.69, count: 38 },
    polling: { rate: 2.97, count: 100 }
  }
},
{ name: '휴천3동', rate: 2.57,
  votes: {
    early: { rate: 3.51, count: 33 },
    polling: { rate: 2.21, count: 54 }
  }
},
{ name: '가흥1동', rate: 2.98,
  votes: {
    early: { rate: 2.40, count: 49 },
    polling: { rate: 3.28, count: 128 }
  }
},
{ name: '가흥2동', rate: 2.36,
  votes: {
    early: { rate: 2.42, count: 29 },
    polling: { rate: 2.34, count: 67 }
  }
},
{ name: '영천시_관외사전투표', rate: 3.93,
  votes: { absentee: { rate: 3.93, count: 258 } }
},
{ name: '금호읍', rate: 2.08,
  votes: {
    early: { rate: 2.01, count: 24 },
    polling: { rate: 2.10, count: 81 }
  }
},
{ name: '청통면', rate: 1.80,
  votes: {
    early: { rate: 1.16, count: 7 },
    polling: { rate: 2.09, count: 28 }
  }
},
{ name: '신녕면', rate: 1.92,
  votes: {
    early: { rate: 2.23, count: 16 },
    polling: { rate: 1.72, count: 19 }
  }
},
{ name: '화산면', rate: 1.75,
  votes: {
    early: { rate: 1.99, count: 11 },
    polling: { rate: 1.60, count: 14 }
  }
},
{ name: '화북면', rate: 1.94,
  votes: {
    early: { rate: 2.82, count: 9 },
    polling: { rate: 1.61, count: 14 }
  }
},
{ name: '화남면', rate: 2.43,
  votes: {
    early: { rate: 1.51, count: 7 },
    polling: { rate: 2.78, count: 34 }
  }
},
{ name: '자양면', rate: 1.49,
  votes: {
    early: { rate: 1.56, count: 2 },
    polling: { rate: 1.47, count: 6 }
  }
},
{ name: '임고면', rate: 2.17,
  votes: {
    early: { rate: 3.13, count: 17 },
    polling: { rate: 1.83, count: 28 }
  }
},
{ name: '고경면', rate: 2.20,
  votes: {
    early: { rate: 3.35, count: 17 },
    polling: { rate: 1.90, count: 38 }
  }
},
{ name: '북안면', rate: 2.13,
  votes: {
    early: { rate: 1.86, count: 14 },
    polling: { rate: 2.28, count: 31 }
  }
},
{ name: '대창면', rate: 2.37,
  votes: {
    early: { rate: 2.88, count: 15 },
    polling: { rate: 2.11, count: 22 }
  }
},
{ name: '동부동', rate: 2.46,
  votes: {
    early: { rate: 3.00, count: 62 },
    polling: { rate: 2.34, count: 219 }
  }
},
{ name: '중앙동', rate: 2.94,
  votes: {
    early: { rate: 3.34, count: 55 },
    polling: { rate: 2.72, count: 80 }
  }
},
{ name: '서부동', rate: 2.27,
  votes: {
    early: { rate: 2.85, count: 19 },
    polling: { rate: 2.03, count: 32 }
  }
},
{ name: '완산동', rate: 2.75,
  votes: {
    early: { rate: 2.84, count: 44 },
    polling: { rate: 2.70, count: 90 }
  }
},
{ name: '남부동', rate: 2.02,
  votes: {
    early: { rate: 3.38, count: 17 },
    polling: { rate: 1.48, count: 19 }
  }
},
{ name: '상주시_관외사전투표', rate: 4.30,
  votes: { absentee: { rate: 4.30, count: 260 } }
},
{ name: '함창읍', rate: 2.42,
  votes: {
    early: { rate: 3.21, count: 39 },
    polling: { rate: 1.94, count: 39 }
  }
},
{ name: '사벌국면', rate: 2.24,
  votes: {
    early: { rate: 2.04, count: 14 },
    polling: { rate: 2.36, count: 27 }
  }
},
{ name: '중동면', rate: 2.39,
  votes: {
    early: { rate: 2.72, count: 7 },
    polling: { rate: 2.20, count: 10 }
  }
},
{ name: '낙동면', rate: 1.95,
  votes: {
    early: { rate: 2.07, count: 13 },
    polling: { rate: 1.90, count: 25 }
  }
},
{ name: '청리면', rate: 2.20,
  votes: {
    early: { rate: 3.20, count: 13 },
    polling: { rate: 1.80, count: 18 }
  }
},
{ name: '공성면', rate: 1.30,
  votes: {
    early: { rate: 0.67, count: 5 },
    polling: { rate: 1.62, count: 24 }
  }
},
{ name: '외남면', rate: 3.01,
  votes: {
    early: { rate: 3.54, count: 11 },
    polling: { rate: 2.74, count: 17 }
  }
},
{ name: '내서면', rate: 2.23,
  votes: {
    early: { rate: 2.24, count: 8 },
    polling: { rate: 2.22, count: 15 }
  }
},
{ name: '모동면', rate: 2.04,
  votes: {
    early: { rate: 1.92, count: 9 },
    polling: { rate: 2.10, count: 19 }
  }
},
{ name: '모서면', rate: 1.85,
  votes: {
    early: { rate: 1.55, count: 6 },
    polling: { rate: 1.99, count: 17 }
  }
},
{ name: '화동면', rate: 1.75,
  votes: {
    early: { rate: 1.03, count: 4 },
    polling: { rate: 2.16, count: 15 }
  }
},
{ name: '화서면', rate: 1.34,
  votes: {
    early: { rate: 0.62, count: 3 },
    polling: { rate: 1.66, count: 18 }
  }
},
{ name: '화북면', rate: 1.33,
  votes: {
    early: { rate: 1.04, count: 3 },
    polling: { rate: 1.49, count: 8 }
  }
},
{ name: '외서면', rate: 1.66,
  votes: {
    early: { rate: 1.75, count: 5 },
    polling: { rate: 1.62, count: 12 }
  }
},
{ name: '은척면', rate: 2.51,
  votes: {
    early: { rate: 2.57, count: 7 },
    polling: { rate: 2.49, count: 15 }
  }
},
{ name: '공검면', rate: 2.34,
  votes: {
    early: { rate: 2.49, count: 11 },
    polling: { rate: 2.25, count: 15 }
  }
},
{ name: '이안면', rate: 2.17,
  votes: {
    early: { rate: 2.40, count: 10 },
    polling: { rate: 2.03, count: 14 }
  }
},
{ name: '화남면', rate: 3.15,
  votes: {
    early: { rate: 4.65, count: 6 },
    polling: { rate: 2.46, count: 7 }
  }
},
{ name: '남원동', rate: 3.13,
  votes: {
    early: { rate: 3.65, count: 69 },
    polling: { rate: 2.85, count: 101 }
  }
},
{ name: '북문동', rate: 2.68,
  votes: {
    early: { rate: 3.11, count: 51 },
    polling: { rate: 2.43, count: 68 }
  }
},
{ name: '계림동', rate: 2.82,
  votes: {
    early: { rate: 3.22, count: 51 },
    polling: { rate: 2.57, count: 65 }
  }
},
{ name: '동문동', rate: 2.96,
  votes: {
    early: { rate: 3.24, count: 42 },
    polling: { rate: 2.80, count: 62 }
  }
},
{ name: '동성동', rate: 2.37,
  votes: {
    early: { rate: 2.78, count: 14 },
    polling: { rate: 2.20, count: 27 }
  }
},
{ name: '신흥동', rate: 2.88,
  votes: {
    early: { rate: 2.91, count: 37 },
    polling: { rate: 2.87, count: 71 }
  }
},
{ name: '문경시_관외사전투표', rate: 4.31,
  votes: { absentee: { rate: 4.31, count: 206 } }
},
{ name: '문경읍', rate: 2.03,
  votes: {
    early: { rate: 2.25, count: 30 },
    polling: { rate: 1.91, count: 47 }
  }
},
{ name: '가은읍', rate: 2.26,
  votes: {
    early: { rate: 2.05, count: 23 },
    polling: { rate: 2.31, count: 28 }
  }
},
{ name: '영순면', rate: 1.48,
  votes: {
    early: { rate: 1.58, count: 10 },
    polling: { rate: 1.37, count: 8 }
  }
},
{ name: '산양면', rate: 1.77,
  votes: {
    early: { rate: 2.21, count: 17 },
    polling: { rate: 1.38, count: 12 }
  }
},
{ name: '호계면', rate: 2.10,
  votes: {
    early: { rate: 1.23, count: 7 },
    polling: { rate: 2.79, count: 20 }
  }
},
{ name: '산북면', rate: 1.63,
  votes: {
    early: { rate: 2.22, count: 15 },
    polling: { rate: 1.16, count: 10 }
  }
},
{ name: '동로면', rate: 2.74,
  votes: {
    early: { rate: 2.66, count: 14 },
    polling: { rate: 2.82, count: 15 }
  }
},
{ name: '마성면', rate: 2.43,
  votes: {
    early: { rate: 2.74, count: 22 },
    polling: { rate: 2.18, count: 22 }
  }
},
{ name: '농암면', rate: 2.66,
  votes: {
    early: { rate: 2.61, count: 16 },
    polling: { rate: 2.69, count: 22 }
  }
},
{ name: '점촌1동', rate: 2.66,
  votes: {
    early: { rate: 3.84, count: 51 },
    polling: { rate: 1.71, count: 28 }
  }
},
{ name: '점촌2동', rate: 2.01,
  votes: {
    early: { rate: 2.59, count: 34 },
    polling: { rate: 1.66, count: 36 }
  }
},
{ name: '점촌3동', rate: 2.35,
  votes: {
    early: { rate: 3.62, count: 49 },
    polling: { rate: 1.72, count: 47 }
  }
},
{ name: '점촌4동', rate: 2.56,
  votes: {
    early: { rate: 2.80, count: 15 },
    polling: { rate: 2.43, count: 24 }
  }
},
{ name: '점촌5동', rate: 3.27,
  votes: {
    early: { rate: 3.47, count: 103 },
    polling: { rate: 3.13, count: 130 }
  }
},
{ name: '예천군_관외사전투표', rate: 4.44,
  votes: { absentee: { rate: 4.44, count: 175 } }
},
{ name: '예천읍', rate: 2.39,
  votes: {
    early: { rate: 3.33, count: 83 },
    polling: { rate: 1.90, count: 91 }
  }
},
{ name: '호명읍', rate: 4.18,
  votes: {
    early: { rate: 4.76, count: 142 },
    polling: { rate: 3.86, count: 206 }
  }
},
{ name: '용문면', rate: 1.86,
  votes: {
    early: { rate: 1.93, count: 9 },
    polling: { rate: 1.82, count: 13 }
  }
},
{ name: '효자면', rate: 3.33,
  votes: {
    early: { rate: 3.80, count: 9 },
    polling: { rate: 3.07, count: 13 }
  }
},
{ name: '은풍면', rate: 2.24,
  votes: {
    early: { rate: 2.74, count: 9 },
    polling: { rate: 1.88, count: 9 }
  }
},
{ name: '감천면', rate: 1.78,
  votes: {
    early: { rate: 2.66, count: 14 },
    polling: { rate: 1.28, count: 12 }
  }
},
{ name: '보문면', rate: 1.76,
  votes: {
    early: { rate: 1.81, count: 7 },
    polling: { rate: 1.73, count: 8 }
  }
},
{ name: '유천면', rate: 2.31,
  votes: {
    early: { rate: 2.26, count: 9 },
    polling: { rate: 2.34, count: 20 }
  }
},
{ name: '용궁면', rate: 1.34,
  votes: {
    early: { rate: 1.73, count: 11 },
    polling: { rate: 0.99, count: 7 }
  }
},
{ name: '개포면', rate: 2.84,
  votes: {
    early: { rate: 3.82, count: 13 },
    polling: { rate: 2.17, count: 11 }
  }
},
{ name: '지보면', rate: 2.28,
  votes: {
    early: { rate: 2.20, count: 11 },
    polling: { rate: 2.32, count: 21 }
  }
},
{ name: '풍양면', rate: 2.16,
  votes: {
    early: { rate: 2.49, count: 13 },
    polling: { rate: 2.00, count: 21 }
  }
},
{ name: '경산시_관외사전투표', rate: 4.32,
  votes: { absentee: { rate: 4.32, count: 561 } }
},
{ name: '하양읍', rate: 3.08,
  votes: {
    early: { rate: 3.30, count: 110 },
    polling: { rate: 3.01, count: 318 }
  }
},
{ name: '진량읍', rate: 2.41,
  votes: {
    early: { rate: 2.45, count: 74 },
    polling: { rate: 2.40, count: 261 }
  }
},
{ name: '압량읍', rate: 2.53,
  votes: {
    early: { rate: 2.63, count: 54 },
    polling: { rate: 2.48, count: 158 }
  }
},
{ name: '와촌면', rate: 1.91,
  votes: {
    early: { rate: 2.03, count: 18 },
    polling: { rate: 1.85, count: 34 }
  }
},
{ name: '자인면', rate: 1.55,
  votes: {
    early: { rate: 1.80, count: 14 },
    polling: { rate: 1.45, count: 27 }
  }
},
{ name: '용성면', rate: 1.98,
  votes: {
    early: { rate: 2.41, count: 13 },
    polling: { rate: 1.79, count: 21 }
  }
},
{ name: '남산면', rate: 1.88,
  votes: {
    early: { rate: 2.09, count: 9 },
    polling: { rate: 1.80, count: 23 }
  }
},
{ name: '남천면', rate: 2.09,
  votes: {
    early: { rate: 3.35, count: 15 },
    polling: { rate: 1.53, count: 17 }
  }
},
{ name: '중앙동', rate: 2.47,
  votes: {
    early: { rate: 3.30, count: 27 },
    polling: { rate: 2.09, count: 40 }
  }
},
{ name: '동부동', rate: 2.70,
  votes: {
    early: { rate: 2.53, count: 67 },
    polling: { rate: 2.74, count: 315 }
  }
},
{ name: '서부1동', rate: 2.73,
  votes: {
    early: { rate: 2.86, count: 59 },
    polling: { rate: 2.70, count: 268 }
  }
},
{ name: '서부2동', rate: 3.71,
  votes: {
    early: { rate: 3.33, count: 110 },
    polling: { rate: 3.79, count: 551 }
  }
},
{ name: '남부동', rate: 2.64,
  votes: {
    early: { rate: 2.98, count: 55 },
    polling: { rate: 2.56, count: 148 }
  }
},
{ name: '북부동', rate: 4.04,
  votes: {
    early: { rate: 4.40, count: 43 },
    polling: { rate: 3.96, count: 185 }
  }
},
{ name: '중방동', rate: 3.09,
  votes: {
    early: { rate: 2.94, count: 36 },
    polling: { rate: 3.14, count: 118 }
  }
},
{ name: '청도군_관외사전투표', rate: 4.00,
  votes: { absentee: { rate: 4.00, count: 130 } }
},
{ name: '청도읍', rate: 2.32,
  votes: {
    early: { rate: 2.79, count: 55 },
    polling: { rate: 2.11, count: 91 }
  }
},
{ name: '화양읍', rate: 2.53,
  votes: {
    early: { rate: 2.77, count: 30 },
    polling: { rate: 2.43, count: 71 }
  }
},
{ name: '각남면', rate: 2.88,
  votes: {
    early: { rate: 3.53, count: 20 },
    polling: { rate: 2.39, count: 18 }
  }
},
{ name: '풍각면', rate: 1.94,
  votes: {
    early: { rate: 2.16, count: 21 },
    polling: { rate: 1.79, count: 24 }
  }
},
{ name: '각북면', rate: 1.93,
  votes: {
    early: { rate: 2.33, count: 11 },
    polling: { rate: 1.68, count: 13 }
  }
},
{ name: '이서면', rate: 2.88,
  votes: {
    early: { rate: 3.03, count: 25 },
    polling: { rate: 2.81, count: 48 }
  }
},
{ name: '운문면', rate: 2.15,
  votes: {
    early: { rate: 1.81, count: 7 },
    polling: { rate: 2.31, count: 18 }
  }
},
{ name: '금천면', rate: 2.69,
  votes: {
    early: { rate: 3.41, count: 24 },
    polling: { rate: 2.29, count: 29 }
  }
},
{ name: '매전면', rate: 2.63,
  votes: {
    early: { rate: 3.28, count: 17 },
    polling: { rate: 2.43, count: 37 }
  }
},
{ name: '고령군_관외사전투표', rate: 3.66,
  votes: { absentee: { rate: 3.66, count: 69 } }
},
{ name: '대가야읍', rate: 2.49,
  votes: {
    early: { rate: 3.05, count: 59 },
    polling: { rate: 2.10, count: 59 }
  }
},
{ name: '덕곡면', rate: 1.79,
  votes: {
    early: { rate: 2.78, count: 6 },
    polling: { rate: 1.38, count: 9 }
  }
},
{ name: '운수면', rate: 2.33,
  votes: {
    early: { rate: 1.83, count: 6 },
    polling: { rate: 2.57, count: 17 }
  }
},
{ name: '성산면', rate: 2.25,
  votes: {
    early: { rate: 2.66, count: 11 },
    polling: { rate: 2.05, count: 18 }
  }
},
{ name: '다산면', rate: 2.25,
  votes: {
    early: { rate: 2.70, count: 37 },
    polling: { rate: 2.05, count: 62 }
  }
},
{ name: '개진면', rate: 1.64,
  votes: {
    early: { rate: 2.13, count: 5 },
    polling: { rate: 1.49, count: 11 }
  }
},
{ name: '우곡면', rate: 2.46,
  votes: {
    early: { rate: 3.15, count: 8 },
    polling: { rate: 2.09, count: 14 }
  }
},
{ name: '쌍림면', rate: 2.33,
  votes: {
    early: { rate: 3.44, count: 15 },
    polling: { rate: 1.93, count: 23 }
  }
},
{ name: '성주군_관외사전투표', rate: 4.11,
  votes: { absentee: { rate: 4.11, count: 135 } }
},
{ name: '성주읍', rate: 2.51,
  votes: {
    early: { rate: 2.73, count: 77 },
    polling: { rate: 2.37, count: 103 }
  }
},
{ name: '선남면', rate: 2.39,
  votes: {
    early: { rate: 3.45, count: 45 },
    polling: { rate: 1.73, count: 36 }
  }
},
{ name: '용암면', rate: 2.28,
  votes: {
    early: { rate: 2.51, count: 21 },
    polling: { rate: 2.12, count: 27 }
  }
},
{ name: '수륜면', rate: 2.13,
  votes: {
    early: { rate: 2.63, count: 19 },
    polling: { rate: 1.78, count: 18 }
  }
},
{ name: '가천면', rate: 2.96,
  votes: {
    early: { rate: 4.46, count: 22 },
    polling: { rate: 1.77, count: 11 }
  }
},
{ name: '금수강산면', rate: 2.63,
  votes: {
    early: { rate: 2.19, count: 6 },
    polling: { rate: 2.95, count: 11 }
  }
},
{ name: '대가면', rate: 2.81,
  votes: {
    early: { rate: 2.72, count: 14 },
    polling: { rate: 2.87, count: 25 }
  }
},
{ name: '벽진면', rate: 2.31,
  votes: {
    early: { rate: 3.53, count: 25 },
    polling: { rate: 1.50, count: 16 }
  }
},
{ name: '초전면', rate: 1.90,
  votes: {
    early: { rate: 2.68, count: 25 },
    polling: { rate: 1.42, count: 21 }
  }
},
{ name: '월항면', rate: 2.18,
  votes: {
    early: { rate: 2.31, count: 16 },
    polling: { rate: 2.10, count: 23 }
  }
},
{ name: '칠곡군_관외사전투표', rate: 5.00,
  votes: { absentee: { rate: 5.00, count: 190 } }
},
{ name: '왜관읍', rate: 2.91,
  votes: {
    early: { rate: 3.06, count: 109 },
    polling: { rate: 2.86, count: 273 }
  }
},
{ name: '북삼읍', rate: 3.21,
  votes: {
    early: { rate: 4.09, count: 105 },
    polling: { rate: 2.86, count: 188 }
  }
},
{ name: '석적읍', rate: 3.40,
  votes: {
    early: { rate: 3.60, count: 90 },
    polling: { rate: 3.33, count: 239 }
  }
},
{ name: '지천면', rate: 2.92,
  votes: {
    early: { rate: 2.79, count: 14 },
    polling: { rate: 2.97, count: 38 }
  }
},
{ name: '동명면', rate: 2.74,
  votes: {
    early: { rate: 3.12, count: 20 },
    polling: { rate: 2.61, count: 48 }
  }
},
{ name: '가산면', rate: 2.39,
  votes: {
    early: { rate: 2.55, count: 8 },
    polling: { rate: 2.34, count: 27 }
  }
},
{ name: '약목면', rate: 2.35,
  votes: {
    early: { rate: 2.78, count: 34 },
    polling: { rate: 2.16, count: 62 }
  }
},
{ name: '기산면', rate: 2.30,
  votes: {
    early: { rate: 2.01, count: 10 },
    polling: { rate: 2.43, count: 25 }
  }
},
{ name: '의성군_관외사전투표', rate: 3.21,
  votes: { absentee: { rate: 3.21, count: 116 } }
},
{ name: '의성읍', rate: 2.01,
  votes: {
    early: { rate: 2.53, count: 63 },
    polling: { rate: 1.69, count: 67 }
  }
},
{ name: '단촌면', rate: 1.73,
  votes: {
    early: { rate: 2.21, count: 11 },
    polling: { rate: 1.34, count: 8 }
  }
},
{ name: '점곡면', rate: 3.00,
  votes: {
    early: { rate: 3.70, count: 14 },
    polling: { rate: 2.52, count: 14 }
  }
},
{ name: '옥산면', rate: 2.41,
  votes: {
    early: { rate: 2.33, count: 10 },
    polling: { rate: 2.46, count: 15 }
  }
},
{ name: '사곡면', rate: 1.65,
  votes: {
    early: { rate: 1.53, count: 6 },
    polling: { rate: 1.74, count: 9 }
  }
},
{ name: '춘산면', rate: 1.66,
  votes: {
    early: { rate: 1.51, count: 4 },
    polling: { rate: 1.73, count: 10 }
  }
},
{ name: '가음면', rate: 1.44,
  votes: {
    early: { rate: 1.62, count: 7 },
    polling: { rate: 1.30, count: 7 }
  }
},
{ name: '금성면', rate: 1.34,
  votes: {
    early: { rate: 1.41, count: 15 },
    polling: { rate: 1.29, count: 17 }
  }
},
{ name: '봉양면', rate: 1.92,
  votes: {
    early: { rate: 1.71, count: 15 },
    polling: { rate: 2.06, count: 27 }
  }
},
{ name: '비안면', rate: 2.01,
  votes: {
    early: { rate: 2.67, count: 17 },
    polling: { rate: 1.45, count: 11 }
  }
},
{ name: '구천면', rate: 1.97,
  votes: {
    early: { rate: 3.00, count: 13 },
    polling: { rate: 1.13, count: 6 }
  }
},
{ name: '단밀면', rate: 1.62,
  votes: {
    early: { rate: 1.59, count: 7 },
    polling: { rate: 1.65, count: 8 }
  }
},
{ name: '단북면', rate: 1.77,
  votes: {
    early: { rate: 1.52, count: 7 },
    polling: { rate: 1.99, count: 11 }
  }
},
{ name: '안계면', rate: 2.05,
  votes: {
    early: { rate: 2.27, count: 27 },
    polling: { rate: 1.86, count: 26 }
  }
},
{ name: '다인면', rate: 2.14,
  votes: {
    early: { rate: 1.96, count: 19 },
    polling: { rate: 2.06, count: 26 }
  }
},
{ name: '신평면', rate: 1.53,
  votes: {
    early: { rate: 1.45, count: 5 },
    polling: { rate: 1.68, count: 3 }
  }
},
{ name: '안평면', rate: 1.15,
  votes: {
    early: { rate: 1.30, count: 7 },
    polling: { rate: 1.03, count: 7 }
  }
},
{ name: '안사면', rate: 2.00,
  votes: {
    early: { rate: 0.99, count: 2 },
    polling: { rate: 2.68, count: 8 }
  }
},
{ name: '청송군_관외사전투표', rate: 5.44,
  votes: { absentee: { rate: 5.44, count: 68 } }
},
{ name: '청송읍', rate: 2.41,
  votes: {
    early: { rate: 2.54, count: 37 },
    polling: { rate: 2.28, count: 37 }
  }
},
{ name: '주왕산면', rate: 1.82,
  votes: {
    early: { rate: 0.88, count: 3 },
    polling: { rate: 2.28, count: 16 }
  }
},
{ name: '부남면', rate: 3.13,
  votes: {
    early: { rate: 3.45, count: 23 },
    polling: { rate: 2.91, count: 28 }
  }
},
{ name: '현동면', rate: 2.59,
  votes: {
    early: { rate: 3.55, count: 18 },
    polling: { rate: 1.96, count: 15 }
  }
},
{ name: '현서면', rate: 1.72,
  votes: {
    early: { rate: 2.18, count: 13 },
    polling: { rate: 1.40, count: 14 }
  }
},
{ name: '안덕면', rate: 2.20,
  votes: {
    early: { rate: 2.54, count: 15 },
    polling: { rate: 1.90, count: 18 }
  }
},
{ name: '파천면', rate: 1.33,
  votes: {
    early: { rate: 1.09, count: 4 },
    polling: { rate: 1.47, count: 10 }
  }
},
{ name: '진보면', rate: 2.40,
  votes: {
    early: { rate: 3.10, count: 47 },
    polling: { rate: 1.88, count: 38 }
  }
},
{ name: '영양군_관외사전투표', rate: 4.89,
  votes: { absentee: { rate: 4.89, count: 56 } }
},
{ name: '영양읍', rate: 2.82,
  votes: {
    early: { rate: 3.56, count: 76 },
    polling: { rate: 2.10, count: 46 }
  }
},
{ name: '입암면', rate: 2.29,
  votes: {
    early: { rate: 2.48, count: 14 },
    polling: { rate: 2.15, count: 17 }
  }
},
{ name: '청기면', rate: 3.17,
  votes: {
    early: { rate: 3.79, count: 13 },
    polling: { rate: 2.75, count: 20 }
  }
},
{ name: '일월면', rate: 2.80,
  votes: {
    early: { rate: 2.63, count: 14 },
    polling: { rate: 2.93, count: 18 }
  }
},
{ name: '수비면', rate: 2.49,
  votes: {
    early: { rate: 3.05, count: 14 },
    polling: { rate: 1.99, count: 13 }
  }
},
{ name: '석보면', rate: 1.53,
  votes: {
    early: { rate: 1.07, count: 6 },
    polling: { rate: 1.78, count: 14 }
  }
},
{ name: '영덕군_관외사전투표', rate: 3.69,
  votes: { absentee: { rate: 3.69, count: 61 } }
},
{ name: '영덕읍', rate: 2.25,
  votes: {
    early: { rate: 2.48, count: 70 },
    polling: { rate: 2.03, count: 62 }
  }
},
{ name: '강구면', rate: 1.39,
  votes: {
    early: { rate: 1.63, count: 19 },
    polling: { rate: 1.25, count: 24 }
  }
},
{ name: '남정면', rate: 2.74,
  votes: {
    early: { rate: 2.27, count: 10 },
    polling: { rate: 3.01, count: 23 }
  }
},
{ name: '달산면', rate: 1.87,
  votes: {
    early: { rate: 1.43, count: 4 },
    polling: { rate: 2.20, count: 8 }
  }
},
{ name: '지품면', rate: 1.89,
  votes: {
    early: { rate: 3.01, count: 11 },
    polling: { rate: 1.35, count: 10 }
  }
},
{ name: '축산면', rate: 1.51,
  votes: {
    early: { rate: 0.66, count: 5 },
    polling: { rate: 2.52, count: 16 }
  }
},
{ name: '영해면', rate: 2.32,
  votes: {
    early: { rate: 2.38, count: 35 },
    polling: { rate: 2.28, count: 44 }
  }
},
{ name: '병곡면', rate: 1.99,
  votes: {
    early: { rate: 1.69, count: 10 },
    polling: { rate: 2.22, count: 17 }
  }
},
{ name: '창수면', rate: 3.07,
  votes: {
    early: { rate: 3.39, count: 13 },
    polling: { rate: 2.85, count: 16 }
  }
},
{ name: '봉화군_관외사전투표', rate: 3.61,
  votes: { absentee: { rate: 3.61, count: 71 } }
},
{ name: '봉화읍', rate: 2.61,
  votes: {
    early: { rate: 2.98, count: 64 },
    polling: { rate: 2.33, count: 70 }
  }
},
{ name: '물야면', rate: 2.41,
  votes: {
    early: { rate: 3.03, count: 17 },
    polling: { rate: 2.09, count: 23 }
  }
},
{ name: '봉성면', rate: 3.31,
  votes: {
    early: { rate: 3.12, count: 15 },
    polling: { rate: 3.44, count: 22 }
  }
},
{ name: '법전면', rate: 2.80,
  votes: {
    early: { rate: 3.43, count: 11 },
    polling: { rate: 2.52, count: 18 }
  }
},
{ name: '춘양면', rate: 2.77,
  votes: {
    early: { rate: 2.57, count: 21 },
    polling: { rate: 2.86, count: 50 }
  }
},
{ name: '소천면', rate: 3.15,
  votes: {
    early: { rate: 3.33, count: 16 },
    polling: { rate: 3.02, count: 22 }
  }
},
{ name: '석포면', rate: 3.61,
  votes: {
    early: { rate: 3.14, count: 14 },
    polling: { rate: 4.03, count: 20 }
  }
},
{ name: '재산면', rate: 1.77,
  votes: {
    early: { rate: 2.01, count: 6 },
    polling: { rate: 1.56, count: 8 }
  }
},
{ name: '명호면', rate: 1.87,
  votes: {
    early: { rate: 1.33, count: 5 },
    polling: { rate: 2.17, count: 15 }
  }
},
{ name: '상운면', rate: 1.68,
  votes: {
    early: { rate: 0.60, count: 2 },
    polling: { rate: 2.27, count: 14 }
  }
},
{ name: '울진군_관외사전투표', rate: 3.77,
  votes: { absentee: { rate: 3.77, count: 113 } }
},
{ name: '울진읍', rate: 3.35,
  votes: {
    early: { rate: 4.00, count: 127 },
    polling: { rate: 2.79, count: 121 }
  }
},
{ name: '평해읍', rate: 1.81,
  votes: {
    early: { rate: 1.96, count: 16 },
    polling: { rate: 1.66, count: 13 }
  }
},
{ name: '북면', rate: 6.81,
  votes: {
    early: { rate: 6.44, count: 106 },
    polling: { rate: 6.86, count: 152 }
  }
},
{ name: '금강송면', rate: 1.46,
  votes: {
    early: { rate: 2.27, count: 8 },
    polling: { rate: 0.74, count: 3 }
  }
},
{ name: '근남면', rate: 2.44,
  votes: {
    early: { rate: 2.39, count: 18 },
    polling: { rate: 2.49, count: 22 }
  }
},
{ name: '매화면', rate: 3.02,
  votes: {
    early: { rate: 3.31, count: 17 },
    polling: { rate: 2.79, count: 17 }
  }
},
{ name: '기성면', rate: 2.09,
  votes: {
    early: { rate: 2.28, count: 15 },
    polling: { rate: 1.91, count: 13 }
  }
},
{ name: '온정면', rate: 1.72,
  votes: {
    early: { rate: 2.54, count: 10 },
    polling: { rate: 1.18, count: 7 }
  }
},
{ name: '죽변면', rate: 2.59,
  votes: {
    early: { rate: 2.60, count: 37 },
    polling: { rate: 2.59, count: 48 }
  }
},
{ name: '후포면', rate: 1.45,
  votes: {
    early: { rate: 1.44, count: 24 },
    polling: { rate: 1.45, count: 36 }
  }
}
    ]
  },
 { name: '경남', rate: 2.07, votes: 36555, seats: 0, type: '광역',
  districts: [
    { name: '창원시의창구', rate: 2.61, votes: 2992 },
    { name: '창원시성산구', rate: 3.25, votes: 4555 },
    { name: '창원시마산합포구', rate: 2.25, votes: 2193 },
    { name: '창원시마산회원구', rate: 2.32, votes: 2324 },
    { name: '창원시진해구', rate: 2.35, votes: 2160 },
    { name: '진주시', rate: 2.47, votes: 4641 },
    { name: '통영시', rate: 1.41, votes: 964 },
    { name: '고성군', rate: 1.25, votes: 378 },
    { name: '사천시', rate: 1.74, votes: 1059 },
    { name: '김해시', rate: 1.89, votes: 5127 },
    { name: '밀양시', rate: 1.54, votes: 877 },
    { name: '거제시', rate: 1.70, votes: 1931 },
    { name: '의령군', rate: 1.73, votes: 293 },
    { name: '함안군', rate: 1.59, votes: 547 },
    { name: '창녕군', rate: 1.19, votes: 388 },
    { name: '양산시', rate: 1.93, votes: 3516 },
    { name: '하동군', rate: 1.52, votes: 419 },
    { name: '남해군', rate: 1.94, votes: 536 },
    { name: '함양군', rate: 1.28, votes: 306 },
    { name: '산청군', rate: 1.58, votes: 360 },
    { name: '거창군', rate: 1.75, votes: 632 },
    { name: '합천군', rate: 1.34, votes: 357 }
  ],
    neighborhoods:[
{ name: '창원시_의창구_관외사전투표', rate: 3.54,
  votes: { absentee: { rate: 3.54, count: 407 } }
},
{ name: '동읍', rate: 2.47,
  votes: {
    early: { rate: 3.40, count: 90 },
    polling: { rate: 2.11, count: 144 }
  }
},
{ name: '북면', rate: 2.40,
  votes: {
    early: { rate: 3.49, count: 189 },
    polling: { rate: 1.99, count: 290 }
  }
},
{ name: '대산면', rate: 2.83,
  votes: {
    early: { rate: 4.04, count: 46 },
    polling: { rate: 2.23, count: 51 }
  }
},
{ name: '의창동', rate: 2.33,
  votes: {
    early: { rate: 2.99, count: 135 },
    polling: { rate: 2.17, count: 410 }
  }
},
{ name: '팔룡동', rate: 2.72,
  votes: {
    early: { rate: 3.03, count: 129 },
    polling: { rate: 2.03, count: 187 }
  }
},
{ name: '명곡동', rate: 2.07,
  votes: {
    early: { rate: 3.34, count: 170 },
    polling: { rate: 1.60, count: 225 }
  }
},
{ name: '봉림동', rate: 2.51,
  votes: {
    early: { rate: 3.45, count: 122 },
    polling: { rate: 2.18, count: 224 }
  }
},
{ name: '창원시_성산구_관외사전투표', rate: 4.58,
  votes: { absentee: { rate: 4.58, count: 666 } }
},
{ name: '반송동', rate: 2.97,
  votes: {
    early: { rate: 2.87, count: 162 },
    polling: { rate: 3.00, count: 373 }
  }
},
{ name: '중앙동', rate: 3.69,
  votes: {
    early: { rate: 3.35, count: 133 },
    polling: { rate: 3.78, count: 457 }
  }
},
{ name: '용지동', rate: 3.59,
  votes: {
    early: { rate: 3.67, count: 104 },
    polling: { rate: 3.56, count: 222 }
  }
},
{ name: '상남동', rate: 3.02,
  votes: {
    early: { rate: 3.14, count: 151 },
    polling: { rate: 2.95, count: 169 }
  }
},
{ name: '사파동', rate: 2.64,
  votes: {
    early: { rate: 2.58, count: 151 },
    polling: { rate: 2.66, count: 377 }
  }
},
{ name: '가음정동', rate: 2.84,
  votes: {
    early: { rate: 2.73, count: 155 },
    polling: { rate: 2.89, count: 308 }
  }
},
{ name: '성주동', rate: 3.18,
  votes: {
    early: { rate: 2.95, count: 96 },
    polling: { rate: 3.26, count: 292 }
  }
},
{ name: '웅남동', rate: 3.08,
  votes: {
    early: { rate: 3.11, count: 39 },
    polling: { rate: 3.01, count: 57 }
  }
},
{ name: '창원시_마산합포구_관외사전투표', rate: 3.40,
  votes: { absentee: { rate: 3.40, count: 294 } }
},
{ name: '구산면', rate: 1.11,
  votes: {
    early: { rate: 1.28, count: 6 },
    polling: { rate: 1.02, count: 16 }
  }
},
{ name: '진동면', rate: 1.61,
  votes: {
    early: { rate: 2.10, count: 42 },
    polling: { rate: 1.35, count: 51 }
  }
},
{ name: '진북면', rate: 1.36,
  votes: {
    early: { rate: 1.81, count: 8 },
    polling: { rate: 1.19, count: 14 }
  }
},
{ name: '진전면', rate: 1.32,
  votes: {
    early: { rate: 2.11, count: 12 },
    polling: { rate: 1.00, count: 14 }
  }
},
{ name: '현동', rate: 2.13,
  votes: {
    early: { rate: 2.18, count: 57 },
    polling: { rate: 2.10, count: 99 }
  }
},
{ name: '가포동', rate: 3.30,
  votes: {
    early: { rate: 4.61, count: 40 },
    polling: { rate: 2.67, count: 48 }
  }
},
{ name: '월영동', rate: 2.55,
  votes: {
    early: { rate: 2.45, count: 135 },
    polling: { rate: 2.57, count: 353 }
  }
},
{ name: '문화동', rate: 2.32,
  votes: {
    early: { rate: 2.56, count: 55 },
    polling: { rate: 2.15, count: 76 }
  }
},
{ name: '반월중앙동', rate: 1.99,
  votes: {
    early: { rate: 2.24, count: 42 },
    polling: { rate: 1.86, count: 94 }
  }
},
{ name: '완월동', rate: 2.02,
  votes: {
    early: { rate: 2.26, count: 33 },
    polling: { rate: 1.88, count: 54 }
  }
},
{ name: '자산동', rate: 1.53,
  votes: {
    early: { rate: 1.46, count: 20 },
    polling: { rate: 1.56, count: 49 }
  }
},
{ name: '오동동', rate: 2.19,
  votes: {
    early: { rate: 1.96, count: 35 },
    polling: { rate: 2.25, count: 146 }
  }
},
{ name: '교방동', rate: 2.45,
  votes: {
    early: { rate: 3.10, count: 80 },
    polling: { rate: 2.09, count: 145 }
  }
},
{ name: '합포동', rate: 1.69,
  votes: {
    early: { rate: 1.16, count: 16 },
    polling: { rate: 1.98, count: 41 }
  }
},
{ name: '산호동', rate: 1.96,
  votes: {
    early: { rate: 2.02, count: 32 },
    polling: { rate: 1.93, count: 77 }
  }
},
{ name: '창원시_마산회원구_관외사전투표', rate: 3.80,
  votes: { absentee: { rate: 3.80, count: 325 } }
},
{ name: '내서읍', rate: 2.14,
  votes: {
    early: { rate: 2.18, count: 141 },
    polling: { rate: 2.13, count: 489 }
  }
},
{ name: '회원1동', rate: 1.69,
  votes: {
    early: { rate: 2.20, count: 32 },
    polling: { rate: 1.48, count: 53 }
  }
},
{ name: '회원2동', rate: 1.66,
  votes: {
    early: { rate: 2.17, count: 28 },
    polling: { rate: 1.47, count: 51 }
  }
},
{ name: '석전동', rate: 2.11,
  votes: {
    early: { rate: 2.47, count: 50 },
    polling: { rate: 1.96, count: 120 }
  }
},
{ name: '회성동', rate: 1.48,
  votes: {
    early: { rate: 1.44, count: 13 },
    polling: { rate: 1.49, count: 28 }
  }
},
{ name: '양덕1동', rate: 1.70,
  votes: {
    early: { rate: 1.72, count: 27 },
    polling: { rate: 1.68, count: 56 }
  }
},
{ name: '양덕2동', rate: 2.99,
  votes: {
    early: { rate: 2.77, count: 109 },
    polling: { rate: 3.06, count: 404 }
  }
},
{ name: '합성1동', rate: 2.52,
  votes: {
    early: { rate: 2.61, count: 40 },
    polling: { rate: 2.46, count: 70 }
  }
},
{ name: '합성2동', rate: 1.95,
  votes: {
    early: { rate: 2.56, count: 38 },
    polling: { rate: 1.59, count: 47 }
  }
},
{ name: '구암1동', rate: 1.81,
  votes: {
    early: { rate: 2.44, count: 31 },
    polling: { rate: 1.54, count: 49 }
  }
},
{ name: '구암2동', rate: 2.04,
  votes: {
    early: { rate: 2.46, count: 28 },
    polling: { rate: 1.87, count: 63 }
  }
},
{ name: '봉암동', rate: 1.84,
  votes: {
    early: { rate: 2.21, count: 12 },
    polling: { rate: 2.42, count: 23 }
  }
},
{ name: '진해구_관외사전투표', rate: 3.73,
  votes: { absentee: { rate: 3.73, count: 287 } }
},
{ name: '충무동', rate: 2.58,
  votes: {
    early: { rate: 3.51, count: 72 },
    polling: { rate: 2.16, count: 103 }
  }
},
{ name: '여좌동', rate: 1.57,
  votes: {
    early: { rate: 1.83, count: 22 },
    polling: { rate: 1.43, count: 42 }
  }
},
{ name: '태백동', rate: 1.96,
  votes: {
    early: { rate: 2.05, count: 12 },
    polling: { rate: 1.88, count: 23 }
  }
},
{ name: '경화동', rate: 1.66,
  votes: {
    early: { rate: 1.57, count: 27 },
    polling: { rate: 1.71, count: 51 }
  }
},
{ name: '병암동', rate: 2.32,
  votes: {
    early: { rate: 2.47, count: 32 },
    polling: { rate: 2.22, count: 47 }
  }
},
{ name: '석동', rate: 2.58,
  votes: {
    early: { rate: 3.06, count: 66 },
    polling: { rate: 2.39, count: 132 }
  }
},
{ name: '이동', rate: 1.74,
  votes: {
    early: { rate: 1.41, count: 14 },
    polling: { rate: 1.82, count: 52 }
  }
},
{ name: '자은동', rate: 2.44,
  votes: {
    early: { rate: 2.49, count: 63 },
    polling: { rate: 2.42, count: 163 }
  }
},
{ name: '덕산동', rate: 2.06,
  votes: {
    early: { rate: 1.89, count: 29 },
    polling: { rate: 2.18, count: 59 }
  }
},
{ name: '풍호동', rate: 2.44,
  votes: {
    early: { rate: 2.71, count: 93 },
    polling: { rate: 2.27, count: 173 }
  }
},
{ name: '웅천동', rate: 2.12,
  votes: {
    early: { rate: 2.87, count: 57 },
    polling: { rate: 1.91, count: 73 }
  }
},
{ name: '웅동1동', rate: 1.77,
  votes: {
    early: { rate: 1.92, count: 24 },
    polling: { rate: 1.73, count: 39 }
  }
},
{ name: '웅동2동', rate: 2.07,
  votes: {
    early: { rate: 1.93, count: 93 },
    polling: { rate: 2.23, count: 247 }
  }
},
{ name: '진주시_관외사전투표', rate: 3.30,
  votes: { absentee: { rate: 3.30, count: 750 } }
},
{ name: '문산읍', rate: 2.06,
  votes: {
    early: { rate: 2.21, count: 38 },
    polling: { rate: 1.94, count: 49 }
  }
},
{ name: '내동면', rate: 1.94,
  votes: {
    early: { rate: 2.02, count: 18 },
    polling: { rate: 1.88, count: 24 }
  }
},
{ name: '정촌면', rate: 2.37,
  votes: {
    early: { rate: 2.55, count: 37 },
    polling: { rate: 2.28, count: 62 }
  }
},
{ name: '금곡면', rate: 1.34,
  votes: {
    early: { rate: 1.16, count: 4 },
    polling: { rate: 1.42, count: 11 }
  }
},
{ name: '진성면', rate: 2.18,
  votes: {
    early: { rate: 2.89, count: 11 },
    polling: { rate: 1.75, count: 11 }
  }
},
{ name: '일반성면', rate: 0.65,
  votes: {
    early: { rate: 0.58, count: 4 },
    polling: { rate: 0.70, count: 6 }
  }
},
{ name: '이반성면', rate: 0.82,
  votes: {
    early: { rate: 0.74, count: 2 },
    polling: { rate: 0.86, count: 5 }
  }
},
{ name: '사봉면', rate: 1.37,
  votes: {
    early: { rate: 1.40, count: 4 },
    polling: { rate: 1.34, count: 6 }
  }
},
{ name: '지수면', rate: 0.69,
  votes: {
    early: { rate: 0.00, count: 0 },
    polling: { rate: 1.13, count: 5 }
  }
},
{ name: '대곡면', rate: 1.08,
  votes: {
    early: { rate: 1.96, count: 10 },
    polling: { rate: 0.63, count: 7 }
  }
},
{ name: '금산면', rate: 1.94,
  votes: {
    early: { rate: 1.64, count: 52 },
    polling: { rate: 2.06, count: 130 }
  }
},
{ name: '집현면', rate: 1.73,
  votes: {
    early: { rate: 1.87, count: 16 },
    polling: { rate: 1.56, count: 20 }
  }
},
{ name: '미천면', rate: 2.19,
  votes: {
    early: { rate: 2.60, count: 7 },
    polling: { rate: 1.71, count: 8 }
  }
},
{ name: '명석면', rate: 1.57,
  votes: {
    early: { rate: 1.32, count: 11 },
    polling: { rate: 1.67, count: 21 }
  }
},
{ name: '대평면', rate: 0.72,
  votes: {
    early: { rate: 1.26, count: 3 },
    polling: { rate: 0.31, count: 1 }
  }
},
{ name: '수곡면', rate: 0.86,
  votes: {
    early: { rate: 1.13, count: 5 },
    polling: { rate: 0.66, count: 5 }
  }
},
{ name: '천전동', rate: 2.72,
  votes: {
    early: { rate: 2.93, count: 112 },
    polling: { rate: 2.63, count: 270 }
  }
},
{ name: '성북동', rate: 2.07,
  votes: {
    early: { rate: 2.78, count: 39 },
    polling: { rate: 1.65, count: 51 }
  }
},
{ name: '중앙동', rate: 1.28,
  votes: {
    early: { rate: 1.39, count: 16 },
    polling: { rate: 1.24, count: 47 }
  }
},
{ name: '상봉동', rate: 1.80,
  votes: {
    early: { rate: 1.75, count: 36 },
    polling: { rate: 1.81, count: 88 }
  }
},
{ name: '상대동', rate: 1.87,
  votes: {
    early: { rate: 1.68, count: 42 },
    polling: { rate: 1.89, count: 120 }
  }
},
{ name: '하대동', rate: 1.72,
  votes: {
    early: { rate: 1.96, count: 66 },
    polling: { rate: 1.61, count: 121 }
  }
},
{ name: '상평동', rate: 1.51,
  votes: {
    early: { rate: 1.50, count: 27 },
    polling: { rate: 1.51, count: 54 }
  }
},
{ name: '초장동', rate: 3.06,
  votes: {
    early: { rate: 3.43, count: 136 },
    polling: { rate: 2.89, count: 261 }
  }
},
{ name: '평거동', rate: 2.48,
  votes: {
    early: { rate: 2.18, count: 79 },
    polling: { rate: 2.62, count: 213 }
  }
},
{ name: '신안동', rate: 2.19,
  votes: {
    early: { rate: 2.41, count: 44 },
    polling: { rate: 2.05, count: 84 }
  }
},
{ name: '이현동', rate: 2.02,
  votes: {
    early: { rate: 2.15, count: 36 },
    polling: { rate: 1.94, count: 65 }
  }
},
{ name: '판문동', rate: 2.44,
  votes: {
    early: { rate: 2.69, count: 85 },
    polling: { rate: 2.31, count: 147 }
  }
},
{ name: '가호동', rate: 3.31,
  votes: {
    early: { rate: 3.27, count: 150 },
    polling: { rate: 3.29, count: 403 }
  }
},
{ name: '충무공동', rate: 3.39,
  votes: {
    early: { rate: 3.11, count: 148 },
    polling: { rate: 3.52, count: 351 }
  }
},
{ name: '통영시_관외사전투표', rate: 2.39,
  votes: { absentee: { rate: 2.39, count: 192 } }
},
{ name: '산양읍', rate: 0.76,
  votes: {
    early: { rate: 0.54, count: 4 },
    polling: { rate: 0.87, count: 13 }
  }
},
{ name: '용남면', rate: 1.27,
  votes: {
    early: { rate: 1.20, count: 25 },
    polling: { rate: 1.31, count: 46 }
  }
},
{ name: '도산면', rate: 0.98,
  votes: {
    early: { rate: 0.43, count: 3 },
    polling: { rate: 1.29, count: 14 }
  }
},
{ name: '광도면', rate: 1.68,
  votes: {
    early: { rate: 1.71, count: 86 },
    polling: { rate: 1.66, count: 161 }
  }
},
{ name: '욕지면', rate: 1.13,
  votes: {
    early: { rate: 1.67, count: 6 },
    polling: { rate: 0.85, count: 6 }
  }
},
{ name: '한산면', rate: 1.08,
  votes: {
    early: { rate: 2.43, count: 8 },
    polling: { rate: 0.34, count: 2 }
  }
},
{ name: '사량면', rate: 1.09,
  votes: {
    early: { rate: 1.42, count: 6 },
    polling: { rate: 0.74, count: 3 }
  }
},
{ name: '도천동', rate: 1.01,
  votes: {
    early: { rate: 0.95, count: 9 },
    polling: { rate: 1.04, count: 31 }
  }
},
{ name: '명정동', rate: 0.91,
  votes: {
    early: { rate: 0.44, count: 3 },
    polling: { rate: 1.20, count: 11 }
  }
},
{ name: '중앙동', rate: 0.63,
  votes: {
    early: { rate: 0.93, count: 5 },
    polling: { rate: 0.48, count: 6 }
  }
},
{ name: '정량동', rate: 0.64,
  votes: {
    early: { rate: 0.61, count: 6 },
    polling: { rate: 0.65, count: 18 }
  }
},
{ name: '북신동', rate: 1.36,
  votes: {
    early: { rate: 1.74, count: 31 },
    polling: { rate: 1.14, count: 43 }
  }
},
{ name: '무전동', rate: 1.50,
  votes: {
    early: { rate: 1.57, count: 37 },
    polling: { rate: 1.46, count: 63 }
  }
},
{ name: '미수동', rate: 1.19,
  votes: {
    early: { rate: 1.27, count: 24 },
    polling: { rate: 1.15, count: 37 }
  }
},
{ name: '봉평동', rate: 1.31,
  votes: {
    early: { rate: 1.63, count: 27 },
    polling: { rate: 1.14, count: 44 }
  }
},
{ name: '고성군_관외사전투표', rate: 2.10,
  votes: { absentee: { rate: 2.10, count: 74 } }
},
{ name: '고성읍', rate: 1.21,
  votes: {
    early: { rate: 1.16, count: 50 },
    polling: { rate: 1.25, count: 99 }
  }
},
{ name: '삼산면', rate: 0.74,
  votes: {
    early: { rate: 0.58, count: 2 },
    polling: { rate: 0.80, count: 5 }
  }
},
{ name: '하일면', rate: 0.98,
  votes: {
    early: { rate: 0.27, count: 1 },
    polling: { rate: 1.29, count: 9 }
  }
},
{ name: '하이면', rate: 1.36,
  votes: {
    early: { rate: 1.45, count: 9 },
    polling: { rate: 1.23, count: 11 }
  }
},
{ name: '상리면', rate: 1.01,
  votes: {
    early: { rate: 0.98, count: 3 },
    polling: { rate: 1.01, count: 6 }
  }
},
{ name: '대가면', rate: 0.95,
  votes: {
    early: { rate: 0.92, count: 3 },
    polling: { rate: 0.93, count: 6 }
  }
},
{ name: '영현면', rate: 0.60,
  votes: {
    early: { rate: 1.47, count: 3 },
    polling: { rate: 0.00, count: 0 }
  }
},
{ name: '영오면', rate: 1.43,
  votes: {
    early: { rate: 3.04, count: 8 },
    polling: { rate: 0.57, count: 3 }
  }
},
{ name: '개천면', rate: 0.92,
  votes: {
    early: { rate: 1.51, count: 3 },
    polling: { rate: 0.67, count: 3 }
  }
},
{ name: '구만면', rate: 1.34,
  votes: {
    early: { rate: 3.15, count: 7 },
    polling: { rate: 0.26, count: 1 }
  }
},
{ name: '회화면', rate: 1.10,
  votes: {
    early: { rate: 1.61, count: 13 },
    polling: { rate: 0.72, count: 9 }
  }
},
{ name: '마암면', rate: 0.88,
  votes: {
    early: { rate: 1.70, count: 7 },
    polling: { rate: 0.19, count: 1 }
  }
},
{ name: '동해면', rate: 1.28,
  votes: {
    early: { rate: 1.65, count: 9 },
    polling: { rate: 1.07, count: 10 }
  }
},
{ name: '거류면', rate: 0.92,
  votes: {
    early: { rate: 0.85, count: 7 },
    polling: { rate: 0.90, count: 14 }
  }
},
{ name: '김해시_관외사전투표', rate: 2.79,
  votes: { absentee: { rate: 2.79, count: 828 } }
},
{ name: '진영읍', rate: 1.52,
  votes: {
    early: { rate: 1.35, count: 107 },
    polling: { rate: 1.61, count: 253 }
  }
},
{ name: '주촌면', rate: 2.03,
  votes: {
    early: { rate: 2.00, count: 56 },
    polling: { rate: 2.03, count: 140 }
  }
},
{ name: '진례면', rate: 0.79,
  votes: {
    early: { rate: 0.97, count: 10 },
    polling: { rate: 0.69, count: 13 }
  }
},
{ name: '한림면', rate: 1.30,
  votes: {
    early: { rate: 1.61, count: 17 },
    polling: { rate: 1.15, count: 26 }
  }
},
{ name: '생림면', rate: 1.26,
  votes: {
    early: { rate: 1.92, count: 11 },
    polling: { rate: 0.95, count: 12 }
  }
},
{ name: '상동면', rate: 1.16,
  votes: {
    early: { rate: 1.48, count: 8 },
    polling: { rate: 0.99, count: 10 }
  }
},
{ name: '대동면', rate: 0.71,
  votes: {
    early: { rate: 0.85, count: 6 },
    polling: { rate: 0.67, count: 14 }
  }
},
{ name: '동상동', rate: 1.42,
  votes: {
    early: { rate: 1.58, count: 21 },
    polling: { rate: 1.33, count: 35 }
  }
},
{ name: '회현동', rate: 1.85,
  votes: {
    early: { rate: 2.05, count: 32 },
    polling: { rate: 1.74, count: 48 }
  }
},
{ name: '부원동', rate: 1.90,
  votes: {
    early: { rate: 2.13, count: 35 },
    polling: { rate: 1.75, count: 47 }
  }
},
{ name: '내외동', rate: 1.80,
  votes: {
    early: { rate: 1.96, count: 176 },
    polling: { rate: 1.73, count: 386 }
  }
},
{ name: '북부동', rate: 1.78,
  votes: {
    early: { rate: 1.60, count: 152 },
    polling: { rate: 1.84, count: 489 }
  }
},
{ name: '칠산서부동', rate: 0.99,
  votes: {
    early: { rate: 1.09, count: 16 },
    polling: { rate: 0.94, count: 27 }
  }
},
{ name: '활천동', rate: 1.62,
  votes: {
    early: { rate: 1.54, count: 63 },
    polling: { rate: 1.64, count: 185 }
  }
},
{ name: '삼안동', rate: 1.66,
  votes: {
    early: { rate: 1.49, count: 70 },
    polling: { rate: 1.72, count: 204 }
  }
},
{ name: '불암동', rate: 1.23,
  votes: {
    early: { rate: 1.64, count: 20 },
    polling: { rate: 1.00, count: 22 }
  }
},
{ name: '장유1동', rate: 1.90,
  votes: {
    early: { rate: 1.71, count: 137 },
    polling: { rate: 1.97, count: 433 }
  }
},
{ name: '장유2동', rate: 2.08,
  votes: {
    early: { rate: 2.18, count: 125 },
    polling: { rate: 2.02, count: 223 }
  }
},
{ name: '장유3동', rate: 2.08,
  votes: {
    early: { rate: 1.84, count: 149 },
    polling: { rate: 2.16, count: 498 }
  }
},
{ name: '사천시_관외사전투표', rate: 2.95,
  votes: { absentee: { rate: 2.95, count: 230 } }
},
{ name: '사천읍', rate: 1.79,
  votes: {
    early: { rate: 1.78, count: 46 },
    polling: { rate: 1.80, count: 89 }
  }
},
{ name: '정동면', rate: 1.83,
  votes: {
    early: { rate: 1.60, count: 19 },
    polling: { rate: 1.89, count: 79 }
  }
},
{ name: '사남면', rate: 2.29,
  votes: {
    early: { rate: 1.95, count: 65 },
    polling: { rate: 2.51, count: 129 }
  }
},
{ name: '용현면', rate: 1.44,
  votes: {
    early: { rate: 2.08, count: 32 },
    polling: { rate: 1.02, count: 24 }
  }
},
{ name: '축동면', rate: 1.24,
  votes: {
    early: { rate: 2.10, count: 8 },
    polling: { rate: 0.68, count: 4 }
  }
},
{ name: '곤양면', rate: 0.76,
  votes: {
    early: { rate: 0.78, count: 5 },
    polling: { rate: 0.75, count: 9 }
  }
},
{ name: '곤명면', rate: 1.91,
  votes: {
    early: { rate: 2.51, count: 14 },
    polling: { rate: 1.56, count: 15 }
  }
},
{ name: '서포면', rate: 0.85,
  votes: {
    early: { rate: 1.20, count: 9 },
    polling: { rate: 0.62, count: 7 }
  }
},
{ name: '동서동', rate: 0.59,
  votes: {
    early: { rate: 0.96, count: 9 },
    polling: { rate: 0.42, count: 9 }
  }
},
{ name: '선구동', rate: 0.87,
  votes: {
    early: { rate: 0.50, count: 4 },
    polling: { rate: 1.03, count: 18 }
  }
},
{ name: '동서금동', rate: 1.30,
  votes: {
    early: { rate: 1.28, count: 15 },
    polling: { rate: 1.31, count: 29 }
  }
},
{ name: '벌용동', rate: 1.37,
  votes: {
    early: { rate: 1.56, count: 37 },
    polling: { rate: 1.28, count: 65 }
  }
},
{ name: '향촌동', rate: 1.37,
  votes: {
    early: { rate: 1.57, count: 22 },
    polling: { rate: 1.24, count: 27 }
  }
},
{ name: '남양동', rate: 1.23,
  votes: {
    early: { rate: 1.13, count: 12 },
    polling: { rate: 1.30, count: 21 }
  }
},
{ name: '밀양시_관외사전투표', rate: 2.58,
  votes: { absentee: { rate: 2.58, count: 201 } }
},
{ name: '삼랑진읍', rate: 1.10,
  votes: {
    early: { rate: 1.13, count: 12 },
    polling: { rate: 1.08, count: 25 }
  }
},
{ name: '하남읍', rate: 0.96,
  votes: {
    early: { rate: 1.05, count: 14 },
    polling: { rate: 0.91, count: 22 }
  }
},
{ name: '부북면', rate: 1.36,
  votes: {
    early: { rate: 1.24, count: 9 },
    polling: { rate: 1.41, count: 27 }
  }
},
{ name: '상동면', rate: 0.76,
  votes: {
    early: { rate: 0.76, count: 5 },
    polling: { rate: 0.76, count: 8 }
  }
},
{ name: '산외면', rate: 1.13,
  votes: {
    early: { rate: 1.21, count: 7 },
    polling: { rate: 1.08, count: 11 }
  }
},
{ name: '산내면', rate: 1.13,
  votes: {
    early: { rate: 1.17, count: 7 },
    polling: { rate: 1.11, count: 16 }
  }
},
{ name: '단장면', rate: 1.09,
  votes: {
    early: { rate: 0.84, count: 6 },
    polling: { rate: 1.20, count: 19 }
  }
},
{ name: '상남면', rate: 1.19,
  votes: {
    early: { rate: 1.03, count: 9 },
    polling: { rate: 1.24, count: 37 }
  }
},
{ name: '초동면', rate: 1.11,
  votes: {
    early: { rate: 0.96, count: 7 },
    polling: { rate: 1.22, count: 12 }
  }
},
{ name: '무안면', rate: 0.76,
  votes: {
    early: { rate: 0.58, count: 6 },
    polling: { rate: 0.90, count: 13 }
  }
},
{ name: '청도면', rate: 0.73,
  votes: {
    early: { rate: 0.96, count: 4 },
    polling: { rate: 0.55, count: 3 }
  }
},
{ name: '내일동', rate: 1.34,
  votes: {
    early: { rate: 2.23, count: 9 },
    polling: { rate: 0.92, count: 8 }
  }
},
{ name: '내이동', rate: 1.79,
  votes: {
    early: { rate: 1.76, count: 31 },
    polling: { rate: 1.79, count: 92 }
  }
},
{ name: '교동', rate: 1.68,
  votes: {
    early: { rate: 2.33, count: 37 },
    polling: { rate: 1.09, count: 19 }
  }
},
{ name: '삼문동', rate: 1.74,
  votes: {
    early: { rate: 2.03, count: 53 },
    polling: { rate: 1.60, count: 92 }
  }
},
{ name: '가곡동', rate: 1.34,
  votes: {
    early: { rate: 1.62, count: 25 },
    polling: { rate: 1.16, count: 28 }
  }
},
{ name: '거제시_관외사전투표', rate: 2.51,
  votes: { absentee: { rate: 2.51, count: 305 } }
},
{ name: '일운면', rate: 1.15,
  votes: {
    early: { rate: 1.33, count: 23 },
    polling: { rate: 1.01, count: 23 }
  }
},
{ name: '동부면', rate: 0.67,
  votes: {
    early: { rate: 0.44, count: 3 },
    polling: { rate: 0.83, count: 8 }
  }
},
{ name: '남부면', rate: 0.92,
  votes: {
    early: { rate: 1.63, count: 4 },
    polling: { rate: 0.58, count: 3 }
  }
},
{ name: '거제면', rate: 1.11,
  votes: {
    early: { rate: 1.06, count: 15 },
    polling: { rate: 1.15, count: 25 }
  }
},
{ name: '둔덕면', rate: 1.12,
  votes: {
    early: { rate: 0.82, count: 5 },
    polling: { rate: 1.36, count: 12 }
  }
},
{ name: '사등면', rate: 0.94,
  votes: {
    early: { rate: 1.38, count: 20 },
    polling: { rate: 0.79, count: 28 }
  }
},
{ name: '연초면', rate: 1.64,
  votes: {
    early: { rate: 1.80, count: 23 },
    polling: { rate: 1.57, count: 41 }
  }
},
{ name: '하청면', rate: 0.84,
  votes: {
    early: { rate: 0.76, count: 6 },
    polling: { rate: 0.88, count: 12 }
  }
},
{ name: '장목면', rate: 1.32,
  votes: {
    early: { rate: 1.67, count: 10 },
    polling: { rate: 1.19, count: 18 }
  }
},
{ name: '장승포동', rate: 1.12,
  votes: {
    early: { rate: 0.81, count: 10 },
    polling: { rate: 1.41, count: 19 }
  }
},
{ name: '능포동', rate: 1.24,
  votes: {
    early: { rate: 1.08, count: 17 },
    polling: { rate: 1.34, count: 32 }
  }
},
{ name: '아주동', rate: 1.82,
  votes: {
    early: { rate: 1.71, count: 54 },
    polling: { rate: 1.87, count: 124 }
  }
},
{ name: '옥포1동', rate: 1.59,
  votes: {
    early: { rate: 1.64, count: 30 },
    polling: { rate: 1.54, count: 28 }
  }
},
{ name: '옥포2동', rate: 1.64,
  votes: {
    early: { rate: 1.39, count: 48 },
    polling: { rate: 1.77, count: 120 }
  }
},
{ name: '장평동', rate: 2.10,
  votes: {
    early: { rate: 1.80, count: 68 },
    polling: { rate: 2.33, count: 114 }
  }
},
{ name: '고현동', rate: 1.71,
  votes: {
    early: { rate: 1.63, count: 54 },
    polling: { rate: 1.73, count: 201 }
  }
},
{ name: '상문동', rate: 1.68,
  votes: {
    early: { rate: 1.56, count: 74 },
    polling: { rate: 1.74, count: 156 }
  }
},
{ name: '수양동', rate: 1.83,
  votes: {
    early: { rate: 1.48, count: 65 },
    polling: { rate: 2.09, count: 122 }
  }
},
{ name: '의령군_관외사전투표', rate: 2.64,
  votes: { absentee: { rate: 2.64, count: 63 } }
},
{ name: '의령읍', rate: 1.76,
  votes: {
    early: { rate: 2.10, count: 42 },
    polling: { rate: 1.54, count: 49 }
  }
},
{ name: '가례면', rate: 1.66,
  votes: {
    early: { rate: 2.27, count: 9 },
    polling: { rate: 1.24, count: 7 }
  }
},
{ name: '칠곡면', rate: 1.23,
  votes: {
    early: { rate: 1.42, count: 4 },
    polling: { rate: 1.12, count: 5 }
  }
},
{ name: '대의면', rate: 1.18,
  votes: {
    early: { rate: 0.60, count: 1 },
    polling: { rate: 1.41, count: 6 }
  }
},
{ name: '화정면', rate: 1.51,
  votes: {
    early: { rate: 2.30, count: 7 },
    polling: { rate: 1.07, count: 6 }
  }
},
{ name: '용덕면', rate: 2.13,
  votes: {
    early: { rate: 0.68, count: 2 },
    polling: { rate: 2.83, count: 17 }
  }
},
{ name: '정곡면', rate: 1.45,
  votes: {
    early: { rate: 1.47, count: 5 },
    polling: { rate: 1.44, count: 7 }
  }
},
{ name: '지정면', rate: 1.78,
  votes: {
    early: { rate: 1.82, count: 6 },
    polling: { rate: 1.76, count: 11 }
  }
},
{ name: '낙서면', rate: 1.28,
  votes: {
    early: { rate: 2.26, count: 3 },
    polling: { rate: 0.90, count: 3 }
  }
},
{ name: '부림면', rate: 1.14,
  votes: {
    early: { rate: 1.59, count: 12 },
    polling: { rate: 0.83, count: 9 }
  }
},
{ name: '봉수면', rate: 0.92,
  votes: {
    early: { rate: 1.94, count: 4 },
    polling: { rate: 0.30, count: 1 }
  }
},
{ name: '궁류면', rate: 0.59,
  votes: {
    early: { rate: 0.96, count: 3 },
    polling: { rate: 0.28, count: 1 }
  }
},
{ name: '유곡면', rate: 1.08,
  votes: {
    early: { rate: 1.63, count: 3 },
    polling: { rate: 0.86, count: 4 }
  }
},
{ name: '함안군_관외사전투표', rate: 2.63,
  votes: { absentee: { rate: 2.63, count: 108 } }
},
{ name: '가야읍', rate: 1.38,
  votes: {
    early: { rate: 1.37, count: 42 },
    polling: { rate: 1.38, count: 73 }
  }
},
{ name: '칠원읍', rate: 1.57,
  votes: {
    early: { rate: 1.46, count: 36 },
    polling: { rate: 1.61, count: 106 }
  }
},
{ name: '함안면', rate: 0.97,
  votes: {
    early: { rate: 0.68, count: 4 },
    polling: { rate: 1.16, count: 10 }
  }
},
{ name: '군북면', rate: 1.43,
  votes: {
    early: { rate: 1.29, count: 14 },
    polling: { rate: 1.52, count: 29 }
  }
},
{ name: '법수면', rate: 1.33,
  votes: {
    early: { rate: 2.43, count: 14 },
    polling: { rate: 0.65, count: 6 }
  }
},
{ name: '대산면', rate: 1.13,
  votes: {
    early: { rate: 1.10, count: 7 },
    polling: { rate: 1.15, count: 13 }
  }
},
{ name: '칠서면', rate: 1.50,
  votes: {
    early: { rate: 2.07, count: 12 },
    polling: { rate: 1.33, count: 25 }
  }
},
{ name: '칠북면', rate: 1.02,
  votes: {
    early: { rate: 1.21, count: 5 },
    polling: { rate: 0.92, count: 7 }
  }
},
{ name: '산인면', rate: 1.65,
  votes: {
    early: { rate: 1.42, count: 9 },
    polling: { rate: 1.81, count: 17 }
  }
},
{ name: '여항면', rate: 1.12,
  votes: {
    early: { rate: 1.51, count: 5 },
    polling: { rate: 0.68, count: 2 }
  }
},
{ name: '창녕군_관외사전투표', rate: 2.10,
  votes: { absentee: { rate: 2.10, count: 77 } }
},
{ name: '창녕읍', rate: 1.18,
  votes: {
    early: { rate: 1.29, count: 35 },
    polling: { rate: 1.12, count: 53 }
  }
},
{ name: '남지읍', rate: 0.79,
  votes: {
    early: { rate: 0.65, count: 15 },
    polling: { rate: 0.89, count: 32 }
  }
},
{ name: '고암면', rate: 1.42,
  votes: {
    early: { rate: 2.71, count: 11 },
    polling: { rate: 0.52, count: 3 }
  }
},
{ name: '성산면', rate: 0.63,
  votes: {
    early: { rate: 0.69, count: 2 },
    polling: { rate: 0.59, count: 3 }
  }
},
{ name: '대합면', rate: 0.90,
  votes: {
    early: { rate: 0.60, count: 4 },
    polling: { rate: 1.08, count: 12 }
  }
},
{ name: '이방면', rate: 0.69,
  votes: {
    early: { rate: 0.74, count: 3 },
    polling: { rate: 0.67, count: 5 }
  }
},
{ name: '유어면', rate: 1.51,
  votes: {
    early: { rate: 1.92, count: 8 },
    polling: { rate: 1.17, count: 6 }
  }
},
{ name: '대지면', rate: 1.31,
  votes: {
    early: { rate: 1.39, count: 10 },
    polling: { rate: 1.21, count: 8 }
  }
},
{ name: '계성면', rate: 1.20,
  votes: {
    early: { rate: 0.38, count: 2 },
    polling: { rate: 1.79, count: 13 }
  }
},
{ name: '영산면', rate: 0.83,
  votes: {
    early: { rate: 1.04, count: 11 },
    polling: { rate: 0.71, count: 12 }
  }
},
{ name: '장마면', rate: 1.24,
  votes: {
    early: { rate: 1.05, count: 4 },
    polling: { rate: 1.36, count: 8 }
  }
},
{ name: '도천면', rate: 0.93,
  votes: {
    early: { rate: 1.56, count: 10 },
    polling: { rate: 0.40, count: 3 }
  }
},
{ name: '길곡면', rate: 1.03,
  votes: {
    early: { rate: 0.35, count: 1 },
    polling: { rate: 1.36, count: 8 }
  }
},
{ name: '부곡면', rate: 1.33,
  votes: {
    early: { rate: 0.95, count: 8 },
    polling: { rate: 1.67, count: 18 }
  }
},
{ name: '양산시_관외사전투표', rate: 2.85,
  votes: { absentee: { rate: 2.85, count: 490 } }
},
{ name: '물금읍', rate: 2.17,
  votes: {
    early: { rate: 2.27, count: 195 },
    polling: { rate: 2.15, count: 913 }
  }
},
{ name: '동면', rate: 2.19,
  votes: {
    early: { rate: 2.58, count: 108 },
    polling: { rate: 2.11, count: 413 }
  }
},
{ name: '원동면', rate: 1.42,
  votes: {
    early: { rate: 1.71, count: 5 },
    polling: { rate: 1.35, count: 18 }
  }
},
{ name: '상북면', rate: 1.33,
  votes: {
    early: { rate: 1.12, count: 25 },
    polling: { rate: 1.42, count: 71 }
  }
},
{ name: '하북면', rate: 1.25,
  votes: {
    early: { rate: 2.05, count: 26 },
    polling: { rate: 0.88, count: 24 }
  }
},
{ name: '중앙동', rate: 1.30,
  votes: {
    early: { rate: 1.41, count: 23 },
    polling: { rate: 1.24, count: 42 }
  }
},
{ name: '양주동', rate: 1.55,
  votes: {
    early: { rate: 1.26, count: 58 },
    polling: { rate: 1.67, count: 182 }
  }
},
{ name: '삼성동', rate: 1.88,
  votes: {
    early: { rate: 1.89, count: 50 },
    polling: { rate: 1.87, count: 123 }
  }
},
{ name: '강서동', rate: 1.44,
  votes: {
    early: { rate: 1.39, count: 16 },
    polling: { rate: 1.46, count: 40 }
  }
},
{ name: '서창동', rate: 1.56,
  votes: {
    early: { rate: 1.57, count: 52 },
    polling: { rate: 1.55, count: 134 }
  }
},
{ name: '소주동', rate: 1.28,
  votes: {
    early: { rate: 1.33, count: 35 },
    polling: { rate: 1.26, count: 83 }
  }
},
{ name: '평산동', rate: 1.46,
  votes: {
    early: { rate: 1.52, count: 50 },
    polling: { rate: 1.44, count: 131 }
  }
},
{ name: '덕계동', rate: 1.74,
  votes: {
    early: { rate: 1.56, count: 58 },
    polling: { rate: 1.83, count: 133 }
  }
},
{ name: '하동군_관외사전투표', rate: 2.38,
  votes: { absentee: { rate: 2.38, count: 83 } }
},
{ name: '하동읍', rate: 1.74,
  votes: {
    early: { rate: 1.52, count: 39 },
    polling: { rate: 1.93, count: 56 }
  }
},
{ name: '화개면', rate: 1.29,
  votes: {
    early: { rate: 1.51, count: 13 },
    polling: { rate: 1.06, count: 9 }
  }
},
{ name: '악양면', rate: 1.41,
  votes: {
    early: { rate: 1.56, count: 15 },
    polling: { rate: 1.27, count: 13 }
  }
},
{ name: '적량면', rate: 1.39,
  votes: {
    early: { rate: 1.37, count: 7 },
    polling: { rate: 1.41, count: 8 }
  }
},
{ name: '횡천면', rate: 0.86,
  votes: {
    early: { rate: 0.90, count: 5 },
    polling: { rate: 0.81, count: 5 }
  }
},
{ name: '고전면', rate: 0.96,
  votes: {
    early: { rate: 1.07, count: 6 },
    polling: { rate: 0.85, count: 5 }
  }
},
{ name: '금남면', rate: 1.33,
  votes: {
    early: { rate: 0.53, count: 5 },
    polling: { rate: 2.22, count: 19 }
  }
},
{ name: '금성면', rate: 1.17,
  votes: {
    early: { rate: 1.79, count: 12 },
    polling: { rate: 0.69, count: 6 }
  }
},
{ name: '진교면', rate: 1.12,
  votes: {
    early: { rate: 0.99, count: 17 },
    polling: { rate: 1.26, count: 22 }
  }
},
{ name: '양보면', rate: 0.82,
  votes: {
    early: { rate: 0.51, count: 2 },
    polling: { rate: 1.02, count: 6 }
  }
},
{ name: '북천면', rate: 1.77,
  votes: {
    early: { rate: 1.76, count: 9 },
    polling: { rate: 1.77, count: 8 }
  }
},
{ name: '청암면', rate: 1.17,
  votes: {
    early: { rate: 1.24, count: 4 },
    polling: { rate: 1.12, count: 5 }
  }
},
{ name: '옥종면', rate: 1.46,
  votes: {
    early: { rate: 1.12, count: 12 },
    polling: { rate: 1.70, count: 26 }
  }
},
{ name: '남해군_관외사전투표', rate: 3.39,
  votes: { absentee: { rate: 3.39, count: 100 } }
},
{ name: '남해읍', rate: 2.43,
  votes: {
    early: { rate: 2.80, count: 100 },
    polling: { rate: 2.10, count: 84 }
  }
},
{ name: '이동면', rate: 1.56,
  votes: {
    early: { rate: 1.45, count: 11 },
    polling: { rate: 1.61, count: 24 }
  }
},
{ name: '상주면', rate: 1.35,
  votes: {
    early: { rate: 1.36, count: 6 },
    polling: { rate: 1.34, count: 7 }
  }
},
{ name: '삼동면', rate: 1.67,
  votes: {
    early: { rate: 2.18, count: 18 },
    polling: { rate: 1.38, count: 20 }
  }
},
{ name: '미조면', rate: 1.20,
  votes: {
    early: { rate: 1.58, count: 8 },
    polling: { rate: 0.96, count: 8 }
  }
},
{ name: '남면', rate: 1.45,
  votes: {
    early: { rate: 1.09, count: 12 },
    polling: { rate: 1.85, count: 18 }
  }
},
{ name: '서면', rate: 1.37,
  votes: {
    early: { rate: 1.86, count: 13 },
    polling: { rate: 0.99, count: 9 }
  }
},
{ name: '고현면', rate: 1.52,
  votes: {
    early: { rate: 0.95, count: 9 },
    polling: { rate: 2.02, count: 24 }
  }
},
{ name: '설천면', rate: 1.29,
  votes: {
    early: { rate: 1.82, count: 11 },
    polling: { rate: 0.99, count: 11 }
  }
},
{ name: '창선면', rate: 1.14,
  votes: {
    early: { rate: 1.33, count: 20 },
    polling: { rate: 0.99, count: 19 }
  }
},
{ name: '함양군_관외사전투표', rate: 2.26,
  votes: { absentee: { rate: 2.26, count: 62 } }
},
{ name: '함양읍', rate: 1.19,
  votes: {
    early: { rate: 1.13, count: 46 },
    polling: { rate: 1.22, count: 69 }
  }
},
{ name: '마천면', rate: 0.24,
  votes: {
    early: { rate: 0.17, count: 1 },
    polling: { rate: 0.29, count: 2 }
  }
},
{ name: '휴천면', rate: 0.35,
  votes: {
    early: { rate: 0.72, count: 3 },
    polling: { rate: 0.00, count: 0 }
  }
},
{ name: '유림면', rate: 0.85,
  votes: {
    early: { rate: 1.22, count: 4 },
    polling: { rate: 0.61, count: 3 }
  }
},
{ name: '수동면', rate: 0.68,
  votes: {
    early: { rate: 0.73, count: 4 },
    polling: { rate: 0.64, count: 5 }
  }
},
{ name: '지곡면', rate: 1.99,
  votes: {
    early: { rate: 2.20, count: 14 },
    polling: { rate: 1.77, count: 11 }
  }
},
{ name: '안의면', rate: 0.97,
  votes: {
    early: { rate: 1.02, count: 14 },
    polling: { rate: 0.93, count: 13 }
  }
},
{ name: '서하면', rate: 2.05,
  votes: {
    early: { rate: 1.44, count: 5 },
    polling: { rate: 2.49, count: 12 }
  }
},
{ name: '서상면', rate: 1.54,
  votes: {
    early: { rate: 2.03, count: 10 },
    polling: { rate: 1.19, count: 8 }
  }
},
{ name: '백전면', rate: 1.00,
  votes: {
    early: { rate: 0.23, count: 1 },
    polling: { rate: 1.61, count: 9 }
  }
},
{ name: '병곡면', rate: 0.95,
  votes: {
    early: { rate: 0.71, count: 4 },
    polling: { rate: 1.32, count: 5 }
  }
},
{ name: '산청군_관외사전투표', rate: 2.46,
  votes: { absentee: { rate: 2.46, count: 80 } }
},
{ name: '산청읍', rate: 1.73,
  votes: {
    early: { rate: 1.94, count: 30 },
    polling: { rate: 1.58, count: 33 }
  }
},
{ name: '차황면', rate: 0.72,
  votes: {
    early: { rate: 1.47, count: 5 },
    polling: { rate: 0.20, count: 1 }
  }
},
{ name: '오부면', rate: 0.83,
  votes: {
    early: { rate: 1.68, count: 4 },
    polling: { rate: 0.27, count: 1 }
  }
},
{ name: '생초면', rate: 1.08,
  votes: {
    early: { rate: 1.73, count: 8 },
    polling: { rate: 0.67, count: 5 }
  }
},
{ name: '금서면', rate: 0.86,
  votes: {
    early: { rate: 0.65, count: 4 },
    polling: { rate: 0.99, count: 10 }
  }
},
{ name: '삼장면', rate: 1.72,
  votes: {
    early: { rate: 1.94, count: 9 },
    polling: { rate: 1.57, count: 11 }
  }
},
{ name: '시천면', rate: 1.37,
  votes: {
    early: { rate: 1.54, count: 16 },
    polling: { rate: 1.26, count: 19 }
  }
},
{ name: '단성면', rate: 1.50,
  votes: {
    early: { rate: 1.25, count: 17 },
    polling: { rate: 1.68, count: 31 }
  }
},
{ name: '신안면', rate: 1.49,
  votes: {
    early: { rate: 1.58, count: 19 },
    polling: { rate: 1.44, count: 29 }
  }
},
{ name: '생비량면', rate: 0.83,
  votes: {
    early: { rate: 0.77, count: 2 },
    polling: { rate: 0.86, count: 4 }
  }
},
{ name: '신등면', rate: 1.36,
  votes: {
    early: { rate: 1.35, count: 8 },
    polling: { rate: 1.36, count: 10 }
  }
},
{ name: '거창군_관외사전투표', rate: 2.49,
  votes: { absentee: { rate: 2.49, count: 152 } }
},
{ name: '거창읍', rate: 1.72,
  votes: {
    early: { rate: 1.78, count: 92 },
    polling: { rate: 1.70, count: 236 }
  }
},
{ name: '주상면', rate: 1.64,
  votes: {
    early: { rate: 1.28, count: 6 },
    polling: { rate: 1.98, count: 10 }
  }
},
{ name: '웅양면', rate: 1.13,
  votes: {
    early: { rate: 1.18, count: 7 },
    polling: { rate: 1.07, count: 6 }
  }
},
{ name: '고제면', rate: 1.19,
  votes: {
    early: { rate: 0.77, count: 3 },
    polling: { rate: 1.55, count: 7 }
  }
},
{ name: '북상면', rate: 0.94,
  votes: {
    early: { rate: 0.39, count: 2 },
    polling: { rate: 1.59, count: 7 }
  }
},
{ name: '위천면', rate: 0.78,
  votes: {
    early: { rate: 1.30, count: 7 },
    polling: { rate: 0.33, count: 2 }
  }
},
{ name: '마리면', rate: 1.38,
  votes: {
    early: { rate: 1.85, count: 9 },
    polling: { rate: 1.04, count: 7 }
  }
},
{ name: '남상면', rate: 0.71,
  votes: {
    early: { rate: 0.98, count: 7 },
    polling: { rate: 0.43, count: 3 }
  }
},
{ name: '남하면', rate: 1.04,
  votes: {
    early: { rate: 0.24, count: 1 },
    polling: { rate: 1.78, count: 8 }
  }
},
{ name: '신원면', rate: 1.54,
  votes: {
    early: { rate: 1.26, count: 6 },
    polling: { rate: 1.85, count: 8 }
  }
},
{ name: '가조면', rate: 1.34,
  votes: {
    early: { rate: 1.15, count: 13 },
    polling: { rate: 1.51, count: 19 }
  }
},
{ name: '가북면', rate: 1.41,
  votes: {
    early: { rate: 2.05, count: 6 },
    polling: { rate: 1.03, count: 5 }
  }
},
{ name: '합천군_관외사전투표', rate: 2.01,
  votes: { absentee: { rate: 2.01, count: 59 } }
},
{ name: '합천읍', rate: 1.30,
  votes: {
    early: { rate: 1.44, count: 43 },
    polling: { rate: 1.18, count: 39 }
  }
},
{ name: '봉산면', rate: 0.90,
  votes: {
    early: { rate: 0.59, count: 2 },
    polling: { rate: 1.13, count: 5 }
  }
},
{ name: '묘산면', rate: 1.37,
  votes: {
    early: { rate: 0.95, count: 3 },
    polling: { rate: 1.61, count: 9 }
  }
},
{ name: '가야면', rate: 1.36,
  votes: {
    early: { rate: 0.72, count: 5 },
    polling: { rate: 1.61, count: 28 }
  }
},
{ name: '야로면', rate: 1.35,
  votes: {
    early: { rate: 1.28, count: 6 },
    polling: { rate: 1.39, count: 12 }
  }
},
{ name: '율곡면', rate: 1.03,
  votes: {
    early: { rate: 0.87, count: 5 },
    polling: { rate: 1.17, count: 8 }
  }
},
{ name: '초계면', rate: 0.78,
  votes: {
    early: { rate: 1.10, count: 6 },
    polling: { rate: 0.58, count: 5 }
  }
},
{ name: '쌍책면', rate: 0.64,
  votes: {
    early: { rate: 0.00, count: 0 },
    polling: { rate: 0.92, count: 5 }
  }
},
{ name: '덕곡면', rate: 1.16,
  votes: {
    early: { rate: 1.14, count: 2 },
    polling: { rate: 1.18, count: 4 }
  }
},
{ name: '청덕면', rate: 1.04,
  votes: {
    early: { rate: 1.37, count: 4 },
    polling: { rate: 0.87, count: 5 }
  }
},
{ name: '적중면', rate: 0.25,
  votes: {
    early: { rate: 0.35, count: 1 },
    polling: { rate: 0.19, count: 1 }
  }
},
{ name: '대양면', rate: 1.71,
  votes: {
    early: { rate: 1.69, count: 5 },
    polling: { rate: 1.73, count: 10 }
  }
},
{ name: '쌍백면', rate: 0.81,
  votes: {
    early: { rate: 0.49, count: 2 },
    polling: { rate: 1.03, count: 6 }
  }
},
{ name: '삼가면', rate: 1.56,
  votes: {
    early: { rate: 1.47, count: 10 },
    polling: { rate: 1.61, count: 19 }
  }
},
{ name: '가회면', rate: 0.83,
  votes: {
    early: { rate: 0.24, count: 1 },
    polling: { rate: 1.28, count: 7 }
  }
},
{ name: '대병면', rate: 1.21,
  votes: {
    early: { rate: 1.40, count: 7 },
    polling: { rate: 1.07, count: 7 }
  }
},
{ name: '용주면', rate: 0.86,
  votes: {
    early: { rate: 1.25, count: 8 },
    polling: { rate: 0.47, count: 3 }
  }
},
    ]
  },
 { name: '제주', rate: 3.00, votes: 9417, seats: 0, type: '광역',
  districts: [
    { name: '제주시', rate: 3.25, votes: 7230 },
    { name: '서귀포시', rate: 2.39, votes: 2187 }
  ],
    neighborhoods:[
{ name: "제주_관외사전투표", rate: 3.74, votes: { absentee: { rate: 3.74, count: 1388 } } },
    { name: "한림읍", rate: 3.30, votes: { polling: { rate: 3.38, count: 195 }, early: { rate: 3.09, count: 86 } } },
    { name: "애월읍", rate: 2.68, votes: { polling: { rate: 2.76, count: 316 }, early: { rate: 2.21, count: 54 } } },
    { name: "구좌읍", rate: 1.79, votes: { polling: { rate: 1.87, count: 96 }, early: { rate: 1.52, count: 30 } } },
    { name: "조천읍", rate: 2.56, votes: { polling: { rate: 2.70, count: 216 }, early: { rate: 2.14, count: 77 } } },
    { name: "한경면", rate: 2.38, votes: { polling: { rate: 2.75, count: 86 }, early: { rate: 1.76, count: 24 } } },
    { name: "추자면", rate: 4.34, votes: { polling: { rate: 4.60, count: 26 }, early: { rate: 3.63, count: 7 } } },
    { name: "우도면", rate: 1.84, votes: { polling: { rate: 1.88, count: 12 }, early: { rate: 1.56, count: 1 } } },
    { name: "일도1동", rate: 7.71, votes: { polling: { rate: 7.73, count: 47 }, early: { rate: 7.62, count: 14 } } },
    { name: "일도2동", rate: 2.65, votes: { polling: { rate: 2.92, count: 282 }, early: { rate: 1.87, count: 53 } } },
    { name: "이도1동", rate: 2.54, votes: { polling: { rate: 2.65, count: 54 }, early: { rate: 2.18, count: 16 } } },
    { name: "이도2동", rate: 3.35, votes: { polling: { rate: 3.40, count: 465 }, early: { rate: 3.19, count: 98 } } },
    { name: "삼도1동", rate: 2.86, votes: { polling: { rate: 3.08, count: 110 }, early: { rate: 2.32, count: 40 } } },
    { name: "삼도2동", rate: 2.61, votes: { polling: { rate: 2.56, count: 58 }, early: { rate: 2.81, count: 16 } } },
    { name: "용담1동", rate: 2.73, votes: { polling: { rate: 2.92, count: 50 }, early: { rate: 2.34, count: 21 } } },
    { name: "용담2동", rate: 2.41, votes: { polling: { rate: 2.82, count: 108 }, early: { rate: 1.57, count: 28 } } },
    { name: "건입동", rate: 2.15, votes: { polling: { rate: 2.25, count: 50 }, early: { rate: 1.87, count: 20 } } },
    { name: "화북동", rate: 2.38, votes: { polling: { rate: 2.57, count: 171 }, early: { rate: 1.87, count: 43 } } },
    { name: "삼양동", rate: 2.73, votes: { polling: { rate: 2.97, count: 195 }, early: { rate: 2.13, count: 70 } } },
    { name: "봉개동", rate: 2.95, votes: { polling: { rate: 3.12, count: 42 }, early: { rate: 2.61, count: 23 } } },
    { name: "아라동", rate: 3.65, votes: { polling: { rate: 3.75, count: 371 }, early: { rate: 3.46, count: 188 } } },
    { name: "오라동", rate: 2.99, votes: { polling: { rate: 3.15, count: 123 }, early: { rate: 2.55, count: 42 } } },
    { name: "연동", rate: 2.96, votes: { polling: { rate: 3.04, count: 335 }, early: { rate: 2.73, count: 104 } } },
    { name: "노형동", rate: 4.35, votes: { polling: { rate: 4.33, count: 655 }, early: { rate: 4.41, count: 221 } } },
    { name: "외도동", rate: 5.27, votes: { polling: { rate: 5.42, count: 316 }, early: { rate: 4.95, count: 140 } } },
    { name: "이호동", rate: 3.05, votes: { polling: { rate: 3.45, count: 40 }, early: { rate: 2.37, count: 15 } } },
    { name: "도두동", rate: 3.98, votes: { polling: { rate: 3.98, count: 37 }, early: { rate: 3.98, count: 14 } } },
{ name: "서귀포_관외사전투표", rate: 3.08, votes: { absentee: { rate: 3.08, count: 438 } } },
    { name: "대정읍", rate: 2.23, votes: { polling: { rate: 2.34, count: 144 }, early: { rate: 2.03, count: 51 } } },
    { name: "남원읍", rate: 2.29, votes: { polling: { rate: 2.33, count: 142 }, early: { rate: 2.16, count: 46 } } },
    { name: "성산읍", rate: 1.59, votes: { polling: { rate: 1.58, count: 78 }, early: { rate: 1.61, count: 43 } } },
    { name: "안덕면", rate: 2.21, votes: { polling: { rate: 2.24, count: 88 }, early: { rate: 2.15, count: 35 } } },
    { name: "표선면", rate: 1.97, votes: { polling: { rate: 1.89, count: 75 }, early: { rate: 2.11, count: 48 } } },
    { name: "송산동", rate: 2.13, votes: { polling: { rate: 2.16, count: 28 }, early: { rate: 2.04, count: 10 } } },
    { name: "정방동", rate: 2.45, votes: { polling: { rate: 2.46, count: 13 }, early: { rate: 2.44, count: 7 } } },
    { name: "중앙동", rate: 2.36, votes: { polling: { rate: 2.44, count: 21 }, early: { rate: 2.15, count: 12 } } },
    { name: "천지동", rate: 2.16, votes: { polling: { rate: 2.11, count: 21 }, early: { rate: 2.24, count: 16 } } },
    { name: "효돈동", rate: 1.65, votes: { polling: { rate: 1.72, count: 27 }, early: { rate: 1.57, count: 19 } } },
    { name: "영천동", rate: 2.28, votes: { polling: { rate: 2.35, count: 36 }, early: { rate: 2.16, count: 21 } } },
    { name: "동홍동", rate: 2.45, votes: { polling: { rate: 2.50, count: 145 }, early: { rate: 2.34, count: 71 } } },
    { name: "서홍동", rate: 2.38, votes: { polling: { rate: 2.43, count: 69 }, early: { rate: 2.29, count: 42 } } },
    { name: "대륜동", rate: 2.37, votes: { polling: { rate: 2.59, count: 113 }, early: { rate: 2.02, count: 49 } } },
    { name: "대천동", rate: 2.66, votes: { polling: { rate: 2.66, count: 94 }, early: { rate: 2.66, count: 24 } } },
    { name: "중문동", rate: 2.61, votes: { polling: { rate: 2.70, count: 85 }, early: { rate: 2.44, count: 42 } } },
    { name: "예래동", rate: 1.84, votes: { polling: { rate: 1.78, count: 18 }, early: { rate: 1.95, count: 12 } } }
    ]
  },
];

// 기초의원 비례
var BASIC = [
  { name:'서울 동작구', rate:7.19, seats:0, type:'기초',
    neighborhoods:[
      { "name": "동작구_관외사전투표", "rate": 8.08, "votes": { "absentee": { "rate": 8.08, "count": 2530 } } },
  { "name": "노량진제1동", "rate": 8.30, "votes": { "polling": { "rate": 8.35, "count": 1062 }, "early": { "rate": 8.05, "count": 207 } } },
  { "name": "노량진제2동", "rate": 7.99, "votes": { "polling": { "rate": 7.40, "count": 172 }, "early": { "rate": 8.72, "count": 165 } } },
  { "name": "상도제1동", "rate": 8.07, "votes": { "polling": { "rate": 8.10, "count": 1278 }, "early": { "rate": 7.99, "count": 503 } } },
  { "name": "상도제2동", "rate": 8.72, "votes": { "polling": { "rate": 8.86, "count": 812 }, "early": { "rate": 8.40, "count": 337 } } },
  { "name": "상도제3동", "rate": 6.13, "votes": { "polling": { "rate": 6.35, "count": 480 }, "early": { "rate": 5.81, "count": 289 } } },
  { "name": "상도제4동", "rate": 7.79, "votes": { "polling": { "rate": 7.84, "count": 669 }, "early": { "rate": 7.70, "count": 352 } } },
  { "name": "흑석동", "rate": 6.45, "votes": { "polling": { "rate": 6.34, "count": 686 }, "early": { "rate": 6.74, "count": 290 } } },
  { "name": "사당제1동", "rate": 6.03, "votes": { "polling": { "rate": 6.23, "count": 474 }, "early": { "rate": 5.46, "count": 145 } } },
  { "name": "사당제2동", "rate": 6.27, "votes": { "polling": { "rate": 6.56, "count": 650 }, "early": { "rate": 5.70, "count": 288 } } },
  { "name": "사당제3동", "rate": 5.99, "votes": { "polling": { "rate": 5.92, "count": 500 }, "early": { "rate": 6.18, "count": 187 } } },
  { "name": "사당제4동", "rate": 5.91, "votes": { "polling": { "rate": 5.67, "count": 260 }, "early": { "rate": 6.34, "count": 158 } } },
  { "name": "사당제5동", "rate": 7.07, "votes": { "polling": { "rate": 6.93, "count": 342 }, "early": { "rate": 7.36, "count": 172 } } },
  { "name": "대방동", "rate": 7.45, "votes": { "polling": { "rate": 7.53, "count": 847 }, "early": { "rate": 7.24, "count": 300 } } },
  { "name": "신대방제1동", "rate": 5.55, "votes": { "polling": { "rate": 5.59, "count": 467 }, "early": { "rate": 5.46, "count": 163 } } },
  { "name": "신대방제2동", "rate": 6.70, "votes": { "polling": { "rate": 6.81, "count": 511 }, "early": { "rate": 6.43, "count": 200 } } }
    ]
  },
  { name:'대구 수성구', rate:5.26, seats:0, type:'기초',
    neighborhoods:[
      { "name": "수성구_관외사전투표", "rate": 7.53, "votes": { "absentee": { "rate": 7.53, "count": 1712 } } },
  { "name": "범어1동", "rate": 6.14, "votes": { "polling": { "rate": 5.89, "count": 514 }, "early": { "rate": 7.52, "count": 122 } } },
  { "name": "범어2동", "rate": 5.33, "votes": { "polling": { "rate": 5.22, "count": 296 }, "early": { "rate": 6.05, "count": 52 } } },
  { "name": "범어3동", "rate": 4.70, "votes": { "polling": { "rate": 4.21, "count": 265 }, "early": { "rate": 6.31, "count": 123 } } },
  { "name": "범어4동", "rate": 6.99, "votes": { "polling": { "rate": 6.95, "count": 411 }, "early": { "rate": 7.09, "count": 141 } } },
  { "name": "만촌1동", "rate": 4.37, "votes": { "polling": { "rate": 4.03, "count": 327 }, "early": { "rate": 5.53, "count": 131 } } },
  { "name": "만촌2동", "rate": 4.69, "votes": { "polling": { "rate": 4.30, "count": 195 }, "early": { "rate": 5.91, "count": 86 } } },
  { "name": "만촌3동", "rate": 5.28, "votes": { "polling": { "rate": 5.12, "count": 364 }, "early": { "rate": 5.78, "count": 130 } } },
  { "name": "수성1가동", "rate": 4.31, "votes": { "polling": { "rate": 4.05, "count": 266 }, "early": { "rate": 5.07, "count": 113 } } },
  { "name": "수성2·3가동", "rate": 6.62, "votes": { "polling": { "rate": 6.19, "count": 229 }, "early": { "rate": 7.81, "count": 106 } } },
  { "name": "수성4가동", "rate": 5.49, "votes": { "polling": { "rate": 5.21, "count": 261 }, "early": { "rate": 6.20, "count": 124 } } },
  { "name": "황금1동", "rate": 6.27, "votes": { "polling": { "rate": 5.68, "count": 456 }, "early": { "rate": 8.21, "count": 198 } } },
  { "name": "황금2동", "rate": 3.99, "votes": { "polling": { "rate": 3.78, "count": 152 }, "early": { "rate": 4.52, "count": 70 } } },
  { "name": "중동", "rate": 4.40, "votes": { "polling": { "rate": 4.30, "count": 233 }, "early": { "rate": 4.81, "count": 65 } } },
  { "name": "상동", "rate": 4.05, "votes": { "polling": { "rate": 3.96, "count": 231 }, "early": { "rate": 4.53, "count": 50 } } },
  { "name": "파동", "rate": 3.24, "votes": { "polling": { "rate": 3.03, "count": 194 }, "early": { "rate": 3.84, "count": 85 } } },
  { "name": "두산동", "rate": 4.64, "votes": { "polling": { "rate": 4.53, "count": 249 }, "early": { "rate": 5.12, "count": 65 } } },
  { "name": "지산1동", "rate": 3.26, "votes": { "polling": { "rate": 2.95, "count": 223 }, "early": { "rate": 4.16, "count": 107 } } },
  { "name": "지산2동", "rate": 3.34, "votes": { "polling": { "rate": 3.11, "count": 219 }, "early": { "rate": 4.12, "count": 85 } } },
  { "name": "범물1동", "rate": 2.66, "votes": { "polling": { "rate": 2.67, "count": 109 }, "early": { "rate": 2.64, "count": 41 } } },
  { "name": "범물2동", "rate": 3.78, "votes": { "polling": { "rate": 3.33, "count": 209 }, "early": { "rate": 5.17, "count": 105 } } },
  { "name": "고산1동", "rate": 6.38, "votes": { "polling": { "rate": 6.24, "count": 732 }, "early": { "rate": 6.75, "count": 309 } } },
  { "name": "고산2동", "rate": 6.06, "votes": { "polling": { "rate": 6.04, "count": 615 }, "early": { "rate": 6.14, "count": 206 } } },
  { "name": "고산3동", "rate": 5.85, "votes": { "polling": { "rate": 5.66, "count": 654 }, "early": { "rate": 6.40, "count": 259 } } }
    ]
  },
  { name:'경기 화성시', rate:9.84, seats:0, type:'기초',
    neighborhoods:[
{ "name": "만세구_관외사전투표", "rate": 7.16, "votes": { "absentee": { "rate": 7.16, "count": 906 } } },
  { "name": "우정읍", "rate": 4.23, "votes": { "polling": { "rate": 4.40, "count": 193 }, "early": { "rate": 3.96, "count": 110 } } },
  { "name": "향남읍", "rate": 4.98, "votes": { "polling": { "rate": 4.89, "count": 1167 }, "early": { "rate": 5.26, "count": 376 } } },
  { "name": "남양읍", "rate": 5.59, "votes": { "polling": { "rate": 5.82, "count": 908 }, "early": { "rate": 5.06, "count": 359 } } },
  { "name": "마도면", "rate": 3.51, "votes": { "polling": { "rate": 2.71, "count": 46 }, "early": { "rate": 4.46, "count": 63 } } },
  { "name": "송산면", "rate": 4.10, "votes": { "polling": { "rate": 3.53, "count": 100 }, "early": { "rate": 5.13, "count": 81 } } },
  { "name": "서신면", "rate": 3.23, "votes": { "polling": { "rate": 2.88, "count": 57 }, "early": { "rate": 3.77, "count": 48 } } },
  { "name": "팔탄면", "rate": 3.56, "votes": { "polling": { "rate": 3.17, "count": 78 }, "early": { "rate": 4.22, "count": 60 } } },
  { "name": "장안면", "rate": 3.62, "votes": { "polling": { "rate": 3.70, "count": 93 }, "early": { "rate": 3.44, "count": 36 } } },
  { "name": "양감면", "rate": 3.86, "votes": { "polling": { "rate": 2.77, "count": 31 }, "early": { "rate": 5.00, "count": 53 } } },
  { "name": "새솔동", "rate": 5.13, "votes": { "polling": { "rate": 5.47, "count": 374 }, "early": { "rate": 4.53, "count": 173 } } },
  { "name": "정남면", "rate": 4.36, "votes": { "polling": { "rate": 4.12, "count": 131 }, "early": { "rate": 5.01, "count": 58 } } },
  { "name": "매송면", "rate": 3.59, "votes": { "polling": { "rate": 3.62, "count": 77 }, "early": { "rate": 3.51, "count": 28 } } },
  { "name": "비봉면", "rate": 5.38, "votes": { "polling": { "rate": 5.46, "count": 269 }, "early": { "rate": 5.20, "count": 109 } } },
{ "name": "효행구_관외사전투표", "rate": 6.79, "votes": { "absentee": { "rate": 6.79, "count": 366 } } },
  { "name": "봉담읍", "rate": 5.41, "votes": { "polling": { "rate": 5.55, "count": 1823 }, "early": { "rate": 4.91, "count": 465 } } },
  { "name": "기배동", "rate": 4.69, "votes": { "polling": { "rate": 4.75, "count": 202 }, "early": { "rate": 4.63, "count": 196 } } },
{ "name": "병점구_관외사전투표", "rate": 9.70, "votes": { "absentee": { "rate": 9.70, "count": 1133 } } },
  { "name": "진안동", "rate": 6.98, "votes": { "polling": { "rate": 7.09, "count": 1038 }, "early": { "rate": 6.43, "count": 178 } } },
  { "name": "병점1동", "rate": 6.77, "votes": { "polling": { "rate": 7.00, "count": 759 }, "early": { "rate": 6.23, "count": 288 } } },
  { "name": "병점2동", "rate": 6.25, "votes": { "polling": { "rate": 6.72, "count": 423 }, "early": { "rate": 5.51, "count": 220 } } },
  { "name": "반월동", "rate": 7.33, "votes": { "polling": { "rate": 7.65, "count": 860 }, "early": { "rate": 6.29, "count": 213 } } },
  { "name": "화산동", "rate": 5.46, "votes": { "polling": { "rate": 5.64, "count": 459 }, "early": { "rate": 5.09, "count": 197 } } },
  { "name": "동탄3동", "rate": 9.82, "votes": { "polling": { "rate": 10.14, "count": 1169 }, "early": { "rate": 9.08, "count": 448 } } },
{ "name": "동탄구_관외사전투표", "rate": 15.46, "votes": { "absentee": { "rate": 15.46, "count": 2882 } } },
  { "name": "동탄1동", "rate": 12.66, "votes": { "polling": { "rate": 13.06, "count": 2011 }, "early": { "rate": 11.55, "count": 643 } } },
  { "name": "동탄2동", "rate": 8.23, "votes": { "polling": { "rate": 8.33, "count": 837 }, "early": { "rate": 8.05, "count": 440 } } },
  { "name": "동탄4동", "rate": 16.72, "votes": { "polling": { "rate": 17.41, "count": 2970 }, "early": { "rate": 14.82, "count": 910 } } },
  { "name": "동탄5동", "rate": 12.88, "votes": { "polling": { "rate": 13.09, "count": 1873 }, "early": { "rate": 12.27, "count": 596 } } },
  { "name": "동탄6동", "rate": 17.70, "votes": { "polling": { "rate": 18.81, "count": 2478 }, "early": { "rate": 14.41, "count": 642 } } },
  { "name": "동탄7동", "rate": 16.74, "votes": { "polling": { "rate": 17.75, "count": 2917 }, "early": { "rate": 13.85, "count": 798 } } },
  { "name": "동탄8동", "rate": 17.90, "votes": { "polling": { "rate": 18.99, "count": 2161 }, "early": { "rate": 15.17, "count": 687 } } },
  { "name": "동탄9동", "rate": 21.04, "votes": { "polling": { "rate": 22.22, "count": 3918 }, "early": { "rate": 17.64, "count": 1084 } } }
    ]
  },
  { name:'경기 김포시', rate:4.11, seats:0, type:'기초',
    neighborhoods:[
      { "name": "김포시_관외사전투표", "rate": 5.40, "votes": { "absentee": { "rate": 5.40, "count": 1182 } } },
  { "name": "통진읍", "rate": 2.87, "votes": { "polling": { "rate": 2.85, "count": 271 }, "early": { "rate": 2.90, "count": 121 } } },
  { "name": "고촌읍", "rate": 4.59, "votes": { "polling": { "rate": 4.74, "count": 839 }, "early": { "rate": 4.10, "count": 222 } } },
  { "name": "양촌읍", "rate": 3.61, "votes": { "polling": { "rate": 3.67, "count": 317 }, "early": { "rate": 3.47, "count": 127 } } },
  { "name": "대곶면", "rate": 2.82, "votes": { "polling": { "rate": 2.49, "count": 69 }, "early": { "rate": 3.70, "count": 38 } } },
  { "name": "월곶면", "rate": 2.83, "votes": { "polling": { "rate": 2.66, "count": 41 }, "early": { "rate": 3.09, "count": 31 } } },
  { "name": "하성면", "rate": 2.80, "votes": { "polling": { "rate": 2.88, "count": 72 }, "early": { "rate": 2.64, "count": 33 } } },
  { "name": "김포본동", "rate": 3.94, "votes": { "polling": { "rate": 3.93, "count": 820 }, "early": { "rate": 3.98, "count": 166 } } },
  { "name": "장기본동", "rate": 4.19, "votes": { "polling": { "rate": 4.14, "count": 497 }, "early": { "rate": 4.31, "count": 183 } } },
  { "name": "사우동", "rate": 4.22, "votes": { "polling": { "rate": 4.41, "count": 285 }, "early": { "rate": 3.88, "count": 132 } } },
  { "name": "풍무동", "rate": 3.91, "votes": { "polling": { "rate": 4.10, "count": 843 }, "early": { "rate": 3.24, "count": 185 } } },
  { "name": "장기동", "rate": 4.14, "votes": { "polling": { "rate": 4.16, "count": 512 }, "early": { "rate": 4.08, "count": 181 } } },
  { "name": "구래동", "rate": 4.04, "votes": { "polling": { "rate": 4.20, "count": 513 }, "early": { "rate": 3.64, "count": 170 } } },
  { "name": "마산동", "rate": 3.48, "votes": { "polling": { "rate": 3.58, "count": 375 }, "early": { "rate": 3.18, "count": 113 } } },
  { "name": "운양동", "rate": 4.76, "votes": { "polling": { "rate": 4.76, "count": 711 }, "early": { "rate": 4.75, "count": 258 } } }
    ]
  },
  { name:'경남 창원시', rate:2.56, seats:0, type:'기초',
    neighborhoods:[
      { "name": "창원의창구_관외사전투표", "rate": 4.00, "votes": { "absentee": { "rate": 4.00, "count": 455 } } },
  { "name": "동읍", "rate": 1.95, "votes": { "polling": { "rate": 1.98, "count": 134 }, "early": { "rate": 1.87, "count": 49 } } },
  { "name": "북면", "rate": 2.01, "votes": { "polling": { "rate": 2.01, "count": 291 }, "early": { "rate": 2.02, "count": 108 } } },
  { "name": "대산면", "rate": 1.06, "votes": { "polling": { "rate": 1.15, "count": 26 }, "early": { "rate": 0.88, "count": 10 } } },
  { "name": "의창동", "rate": 2.82, "votes": { "polling": { "rate": 2.83, "count": 532 }, "early": { "rate": 2.81, "count": 126 } } },
  { "name": "팔룡동", "rate": 2.69, "votes": { "polling": { "rate": 2.70, "count": 247 }, "early": { "rate": 2.65, "count": 112 } } },
  { "name": "명곡동", "rate": 2.47, "votes": { "polling": { "rate": 2.37, "count": 330 }, "early": { "rate": 2.75, "count": 139 } } },
  { "name": "봉림동", "rate": 2.60, "votes": { "polling": { "rate": 2.64, "count": 270 }, "early": { "rate": 2.48, "count": 86 } } },
{ "name": "창원성산구_관외사전투표", "rate": 4.58, "votes": { "absentee": { "rate": 4.58, "count": 656 } } },
  { "name": "반송동", "rate": 2.90, "votes": { "polling": { "rate": 2.89, "count": 419 }, "early": { "rate": 2.93, "count": 163 } } },
  { "name": "중앙동", "rate": 3.67, "votes": { "polling": { "rate": 3.73, "count": 600 }, "early": { "rate": 3.45, "count": 137 } } },
  { "name": "용지동", "rate": 3.42, "votes": { "polling": { "rate": 3.36, "count": 312 }, "early": { "rate": 3.64, "count": 102 } } },
  { "name": "상남동", "rate": 3.00, "votes": { "polling": { "rate": 2.94, "count": 251 }, "early": { "rate": 3.10, "count": 148 } } },
  { "name": "사파동", "rate": 2.62, "votes": { "polling": { "rate": 2.56, "count": 406 }, "early": { "rate": 2.78, "count": 161 } } },
  { "name": "가음정동", "rate": 2.86, "votes": { "polling": { "rate": 2.94, "count": 423 }, "early": { "rate": 2.67, "count": 151 } } },
  { "name": "성주동", "rate": 3.11, "votes": { "polling": { "rate": 3.19, "count": 319 }, "early": { "rate": 2.87, "count": 93 } } },
  { "name": "웅남동", "rate": 2.79, "votes": { "polling": { "rate": 2.77, "count": 70 }, "early": { "rate": 2.82, "count": 35 } } },
{ "name": "마산합포구_관외사전투표", "rate": 3.31, "votes": { "absentee": { "rate": 3.31, "count": 286 } } },
  { "name": "구산면", "rate": 0.91, "votes": { "polling": { "rate": 0.79, "count": 12 }, "early": { "rate": 1.30, "count": 6 } } },
  { "name": "진동면", "rate": 1.59, "votes": { "polling": { "rate": 1.24, "count": 47 }, "early": { "rate": 2.26, "count": 45 } } },
  { "name": "진북면", "rate": 1.55, "votes": { "polling": { "rate": 1.53, "count": 18 }, "early": { "rate": 1.60, "count": 7 } } },
  { "name": "진전면", "rate": 1.07, "votes": { "polling": { "rate": 0.86, "count": 12 }, "early": { "rate": 1.60, "count": 9 } } },
  { "name": "현동", "rate": 2.15, "votes": { "polling": { "rate": 2.13, "count": 100 }, "early": { "rate": 2.21, "count": 57 } } },
  { "name": "가포동", "rate": 3.45, "votes": { "polling": { "rate": 2.73, "count": 49 }, "early": { "rate": 4.95, "count": 43 } } },
  { "name": "월영동", "rate": 2.47, "votes": { "polling": { "rate": 2.50, "count": 337 }, "early": { "rate": 2.41, "count": 131 } } },
  { "name": "문화동", "rate": 2.27, "votes": { "polling": { "rate": 2.10, "count": 72 }, "early": { "rate": 2.56, "count": 54 } } },
  { "name": "반월중앙동", "rate": 1.98, "votes": { "polling": { "rate": 1.91, "count": 94 }, "early": { "rate": 2.16, "count": 40 } } },
  { "name": "완월동", "rate": 2.04, "votes": { "polling": { "rate": 2.01, "count": 56 }, "early": { "rate": 2.10, "count": 30 } } },
  { "name": "자산동", "rate": 1.52, "votes": { "polling": { "rate": 1.50, "count": 47 }, "early": { "rate": 1.55, "count": 21 } } },
  { "name": "오동동", "rate": 1.90, "votes": { "polling": { "rate": 1.89, "count": 119 }, "early": { "rate": 1.93, "count": 34 } } },
  { "name": "교방동", "rate": 2.44, "votes": { "polling": { "rate": 2.18, "count": 142 }, "early": { "rate": 3.12, "count": 79 } } },
  { "name": "합포동", "rate": 1.71, "votes": { "polling": { "rate": 1.93, "count": 38 }, "early": { "rate": 1.39, "count": 19 } } },
  { "name": "산호동", "rate": 2.11, "votes": { "polling": { "rate": 2.10, "count": 82 }, "early": { "rate": 2.15, "count": 34 } } },
 { "name": "마산회원구_관외사전투표", "rate": 3.63, "votes": { "absentee": { "rate": 3.63, "count": 309 } } },
  { "name": "내서읍", "rate": 2.05, "votes": { "polling": { "rate": 2.01, "count": 460 }, "early": { "rate": 2.19, "count": 141 } } },
  { "name": "회원1동", "rate": 1.78, "votes": { "polling": { "rate": 1.63, "count": 58 }, "early": { "rate": 2.14, "count": 31 } } },
  { "name": "회원2동", "rate": 1.58, "votes": { "polling": { "rate": 1.41, "count": 47 }, "early": { "rate": 2.02, "count": 26 } } },
  { "name": "석전동", "rate": 2.09, "votes": { "polling": { "rate": 2.01, "count": 121 }, "early": { "rate": 2.32, "count": 47 } } },
  { "name": "회성동", "rate": 1.51, "votes": { "polling": { "rate": 1.54, "count": 29 }, "early": { "rate": 1.44, "count": 13 } } },
  { "name": "양덕1동", "rate": 1.66, "votes": { "polling": { "rate": 1.69, "count": 56 }, "early": { "rate": 1.59, "count": 25 } } },
  { "name": "양덕2동", "rate": 3.02, "votes": { "polling": { "rate": 3.11, "count": 408 }, "early": { "rate": 2.71, "count": 106 } } },
  { "name": "합성1동", "rate": 2.31, "votes": { "polling": { "rate": 2.10, "count": 59 }, "early": { "rate": 2.69, "count": 41 } } },
  { "name": "합성2동", "rate": 1.86, "votes": { "polling": { "rate": 1.63, "count": 47 }, "early": { "rate": 2.32, "count": 34 } } },
  { "name": "구암1동", "rate": 1.75, "votes": { "polling": { "rate": 1.59, "count": 50 }, "early": { "rate": 2.13, "count": 27 } } },
  { "name": "구암2동", "rate": 2.04, "votes": { "polling": { "rate": 1.91, "count": 64 }, "early": { "rate": 2.42, "count": 27 } } },
  { "name": "봉암동", "rate": 1.92, "votes": { "polling": { "rate": 1.74, "count": 16 }, "early": { "rate": 2.21, "count": 12 } } },
 { "name": "진해구_관외사전투표", "rate": 3.76, "votes": { "absentee": { "rate": 3.76, "count": 285 } } },
  { "name": "충무동", "rate": 2.30, "votes": { "polling": { "rate": 1.95, "count": 92 }, "early": { "rate": 3.12, "count": 62 } } },
  { "name": "여좌동", "rate": 1.48, "votes": { "polling": { "rate": 1.25, "count": 36 }, "early": { "rate": 2.05, "count": 24 } } },
  { "name": "태백동", "rate": 1.91, "votes": { "polling": { "rate": 1.68, "count": 20 }, "early": { "rate": 2.38, "count": 14 } } },
  { "name": "경화동", "rate": 1.67, "votes": { "polling": { "rate": 1.84, "count": 54 }, "early": { "rate": 1.39, "count": 24 } } },
  { "name": "병암동", "rate": 2.24, "votes": { "polling": { "rate": 1.90, "count": 40 }, "early": { "rate": 2.80, "count": 36 } } },
  { "name": "석동", "rate": 2.47, "votes": { "polling": { "rate": 2.37, "count": 128 }, "early": { "rate": 2.72, "count": 58 } } },
  { "name": "이동", "rate": 1.84, "votes": { "polling": { "rate": 2.02, "count": 56 }, "early": { "rate": 1.33, "count": 13 } } },
  { "name": "자은동", "rate": 2.29, "votes": { "polling": { "rate": 2.24, "count": 150 }, "early": { "rate": 2.43, "count": 61 } } },
  { "name": "덕산동", "rate": 2.00, "votes": { "polling": { "rate": 2.01, "count": 55 }, "early": { "rate": 1.98, "count": 30 } } },
  { "name": "풍호동", "rate": 2.41, "votes": { "polling": { "rate": 2.16, "count": 170 }, "early": { "rate": 2.99, "count": 101 } } },
  { "name": "웅천동", "rate": 2.10, "votes": { "polling": { "rate": 1.66, "count": 68 }, "early": { "rate": 3.03, "count": 59 } } },
  { "name": "웅동1동", "rate": 1.58, "votes": { "polling": { "rate": 1.59, "count": 35 }, "early": { "rate": 1.57, "count": 19 } } },
  { "name": "웅동2동", "rate": 1.88, "votes": { "polling": { "rate": 1.94, "count": 226 }, "early": { "rate": 1.73, "count": 82 } } }
    ]
  },
];

if (typeof window !== 'undefined') {
  window.REGIONAL = REGIONAL;
  window.BASIC    = BASIC;
}

// ── index.html 자동 머지 ──────────────────────────────────────────
// id 기준으로 CANDIDATES 배열에 결과 데이터를 덮어씁니다.
// rank · totalCandidates는 선거구(region)별 득표율 비교로 자동 산출합니다.
function applyResults() {
  const map = {};
  RESULTS.forEach(r => { map[r.id] = r; });

  const cands = window._CANDIDATES_FROM_CAN;
  if (!cands) return;

  // 1차: 결과값 덮어쓰기
  cands.forEach(c => {
    const r = map[c.id];
    if (!r) return;
    c.result      = r.result      ?? c.result;
    c.voteRate    = r.voteRate    ?? c.voteRate;
    c.totalVotes  = r.totalVotes  ?? c.totalVotes;
    c.quota       = r.quota       ?? 1;
    if (r.districts      && r.districts.length)      c.districts      = r.districts;
    if (r.neighborhoods  && r.neighborhoods.length)  c.neighborhoods  = r.neighborhoods;
  });

  // 2차: 선거구(region)별로 rank · totalCandidates 자동 계산
  const groups = {};
  cands.forEach(c => {
    if (!groups[c.region]) groups[c.region] = [];
    groups[c.region].push(c);
  });
  Object.values(groups).forEach(group => {
    const total = group.length;
    const sorted = [...group].sort((a, b) => b.voteRate - a.voteRate);
    sorted.forEach((c, i) => {
      c.rank            = i + 1;
      c.totalCandidates = total;
    });
  });
}
// ※ 실행은 index.html의 _CANDIDATES_FROM_CAN 생성 직후에 호출됨
// ── 지연 로딩 대비 ──────────────────────────────────────────────────
// results.js가 인라인 스크립트보다 늦게 로딩된 경우 여기서 실행
if (typeof window !== 'undefined' && window._pendingApplyResults) {
  window._pendingApplyResults = false;
  applyResults();
  // 데이터 세팅 후 UI 갱신
  setTimeout(function() {
    if (window.REGIONAL && window.REGIONAL.length) { try { REGIONAL = window.REGIONAL; } catch(e) {} }
    if (window.BASIC    && window.BASIC.length)    { try { BASIC    = window.BASIC;    } catch(e) {} }
    if (typeof renderHomeStats      === 'function') renderHomeStats();
    if (typeof renderPropRecordsTab === 'function') renderPropRecordsTab();
    if (typeof renderRecords        === 'function') renderRecords();
    if (typeof renderTopHit         === 'function') renderTopHit();
    if (typeof runCountUps          === 'function') runCountUps();
    if (typeof activeTab !== 'undefined' && activeTab === 'proportional') {
      if (typeof renderProportional === 'function') renderProportional();
    }
  }, 0);
}
