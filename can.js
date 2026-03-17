// can.js - 개혁신당 2026 지방선거 후보자 데이터

const regionPriority = {
    "서울특별시": 1, "부산광역시": 2, "대구광역시": 3, "인천광역시": 4,
    "전남광주통합특별시": 5, "대전광역시": 6, "울산광역시": 7, "세종특별자치시": 8,
    "경기도": 9, "강원특별자치도": 10, "충청북도": 11, "충청남도": 12,
    "전북특별자치도": 13, "경상북도": 14, "경상남도": 15,
    "제주특별자치도": 16
};

const candidates = [
    {
        name: "김정철",
        region: "서울특별시",
        category: "광역단체장",
        office: "서울특별시장",
        status: "공천확정",
        bio: [
            "개혁신당 최고위원",
            "법무법인 우리 대표변호사"
        ],
        photo: "https://img1.newsis.com/2025/11/25/NISI20251125_0021074114_web.jpg",
        sns: {
            fb: "https://www.facebook.com/gimjeongcheol.869066/",
            yt: "https://www.youtube.com/@%EA%B9%80%EC%A0%95%EC%B2%A0%EB%B3%80%ED%98%B8%EC%82%AC"
        },
        pledge: "#",
        decl: "https://daily.hankooki.com/news/articleView.html?idxno=1247318",
        dateAdded: "2025-11-25",
        coords: [
            37.5663,
            126.9779
        ]
    },
    {
        name: "정이한",
        region: "부산광역시",
        category: "광역단체장",
        office: "부산광역시장",
        age: 37,
        status: "예비후보",
        bio: [
            "전) 개혁신당 중앙당 대변인"
        ],
        photo: "https://cdn.seoulfn.com/news/photo/202511/612324_411809_430.jpg",
        sns: {
            fb: "https://www.facebook.com/jeong21official",
            ig: "https://www.instagram.com/jeong21_official",
            yt: "https://www.youtube.com/@jeong21tv"
        },
        pledge: "#",
        decl: "https://youtube.com/shorts/M88-dOI_Uz4?si=YjhleHQGtMmJBVPF",
        dateAdded: "2025-11-25",
        coords: [
            35.1798,
            129.075
        ]
    },
    {
        name: "이기붕",
        region: "인천광역시",
        category: "광역단체장",
        office: "인천광역시장",
        age: 63,
        status: "예비후보",
        preliminary: true,
        bio: [
            "인천시당 위원장"
        ],
        photo: "https://i.imgur.com/aNqvWiU.jpeg",
        sns: {
            fb: "https://www.facebook.com/keebung",
            ig: "https://www.instagram.com/keebung_lee/"
        },
        pledge: "#",
        decl: "https://www.youtube.com/watch?v=vB47J90zQ00",
        dateAdded: "2025-12-01",
        coords: [
            37.4563,
            126.7052
        ]
    },
    {
        name: "이수찬",
        region: "대구광역시",
        category: "광역단체장",
        office: "대구광역시장",
        age: 58,
        status: "예비후보",
        bio: [
            "대구시당 위원장"
        ],
        photo: "https://i.imgur.com/1FbAb5u.jpeg",
        sns: {
            fb: "https://www.facebook.com/profile.php?id=1000045002273835",
            ig: "https://www.instagram.com/i.isucan/"
        },
        pledge: "#",
        decl: "https://www.youtube.com/live/ixdTcenUjMw?si=62KazlMWdC6ciOpY",
        dateAdded: "2026-02-06",
        coords: [
            35.8714,
            128.6014
        ]
    },
    {
        name: "강희린",
        region: "대전광역시",
        category: "광역단체장",
        office: "대전광역시장",
        age: 29,
        status: "예비후보",
        bio: [
            "대전시당 위원장"
        ],
        photo: "https://i.imgur.com/fcEHXnS.png",
        cardFit: "cover",
        sns: {
            fb: "https://www.facebook.com/ganghuilin.2025/",
            ig: "https://www.instagram.com/korria1/",
            yt: "https://www.youtube.com/@%EA%B0%95%ED%9D%AC%EB%A6%B0-q8h",
            blog: "https://blog.naver.com/korria1/224142918612"
        },
        pledge: "#",
        decl: "https://www.cctoday.co.kr/news/articleView.html?idxno=2225440",
        dateAdded: "2026-01-17",
        coords: [
            36.3504,
            127.3845
        ]
    },
    {
        name: "최현수",
        region: "전남광주통합특별시",
        category: "광역단체장",
        office: "전남광주통합특별시장",
        status: "출마선언",
        bio: [
            "광주시당 위원장",
            "서구 을 당협위원장"
        ],
        photo: "https://i.imgur.com/mzd1dts.jpeg",
        sns: {
            fb: "https://www.facebook.com/profile.php?id=1000075888273756",
            ig: "https://www.instagram.com/hyun_soo_ch9/",
        },
        pledge: "#",
        decl: "https://www.youtube.com/live/zNKugaDviEM",
        dateAdded: "2025-12-01",
        coords: [
            35.1595,
            126.8526
        ]
    },
    {
        name: "하헌휘",
        region: "세종특별자치시",
        category: "광역단체장",
        office: "세종특별자치시장",
        status: "공천확정",
        bio: [
            "세종시당 창준위원장",
            "세종시 갑 당협위원장"
        ],
        photo: "https://image.dnews.co.kr/photo/photo/2024/11/21/202411211945335960037-2-565966.jpg",
        sns: {
            fb: "https://www.facebook.com/p/%ED%95%98%ED%97%8C%ED%9C%98-61562035792083/",
            ig: "https://www.instagram.com/reform_lawyer/",
            yt: "https://www.youtube.com/@%EC%84%B8%EC%A2%85%ED%95%98%ED%97%8C%ED%9C%98%EB%B3%80%ED%98%B8%EC%82%AC"
        },
        pledge: "#",
        decl: "https://www.youtube.com/watch?v=m4DTvulTDFk",
        dateAdded: "2025-12-05",
        coords: [
            36.4801,
            127.289
        ]
    },
    {
        name: "이은창",
        region: "충청남도",
        category: "광역단체장",
        office: "충청남도지사",
        status: "공천확정",
        bio: [
            "공주·부여·청양 당협위원장",
            "제6대 유성구의원",
            "제21대 대선 선대위 대변인"
        ],
        photo: "https://i.imgur.com/CUx0gAv.png",
        sns: {
            fb: "https://www.facebook.com/profile.php?id=100002081097533"
        },
        pledge: "#",
        decl: "https://www.youtube.com/live/ykvvk-37iws?si=iGJ3virBz9tVUHMO&t=288",
        dateAdded: "2026-02-12",
        coords: [
            36.6588,
            126.6728
        ]
    },
    {
        name: "이용우",
        region: "서울 강동구",
        metropolitan: "서울특별시",
        category: "기초단체장",
        office: "강동구청장",
        age: 39,
        status: "예비후보",
        bio: [
            "강동구 을 당협위원장",
            "서울시당 수석대변인",
            "제21대 대선 선대위 조직부본부장"
        ],
        photo: "https://i.imgur.com/9IVX879.jpeg",
        sns: {
            fb: "https://www.facebook.com/profile.php?id=61557084968016"
        },
        pledge: "#",
        decl: "https://www.facebook.com/share/p/1a1XZmBRh2/",
        dateAdded: "2026-01-26",
        coords: [
            37.5301,
            127.1238
        ]
    },
    {
        name: "정희윤",
        region: "경기 수원시",
        metropolitan: "경기도",
        category: "기초단체장",
        office: "수원시장",
        status: "공천확정",
        bio: [
            "수원시 갑 당협위원장",
            "경기도당 부위원장",
            "경기도당 미래희망위원장"
        ],
        photo: "https://i.imgur.com/OuiAd60.png",
        sns: {
            fb: "https://www.facebook.com/jungdison?_rdr",
            yt: "https://youtube.com/channel/UC3-CpPJnxTWi0oLAlNs7GRw?si=-YVfD0oAizDhXgxX"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-12",
        coords: [
            37.2636,
            127.0286
        ]
    },
    {
        name: "송진영",
        region: "경기 오산시",
        metropolitan: "경기도",
        category: "기초단체장",
        office: "오산시장",
        status: "공천확정",
        bio: [
            "제9대 오산시의원",
            "민주평화통일자문회의 자문위원"
        ],
        photo: "https://www.osancouncil.go.kr/attach/member/CT_9/172376d6ff7bcbc7a6a038add9585f95.jpg",
        sns: {
            fb: "https://www.facebook.com/osminjun/about/?_rdr"
        },
        pledge: "#",
        decl: "https://www.getnews.co.kr/news/articleView.html?idxno=670154",
        dateAdded: "2026-01-23",
        coords: [
            37.1499,
            127.0771
        ]
    },
    {
        name: "이혜숙",
        region: "서울 관악구",
        metropolitan: "서울특별시",
        category: "기초단체장",
        office: "관악구청장",
        gender: "f",
        status: "공천확정",
        bio: [
            "관악구 갑 당협위원장"
        ],
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQldYi95_jeH9ZscObQhU8SfeBkt7_id2CYecNX-bHuIl-NIOJ8r4XS_F4&s=10",
        sns: {
            fb: "https://www.facebook.com/yesleehaesuk",
            ig: "https://www.instagram.com/hyeasooklee/"
        },
        pledge: "#",
        decl: "https://youtu.be/b4ofl-SQGlU",
        dateAdded: "2026-01-01",
        coords: [
            37.4784,
            126.9516
        ]
    },
    {
        name: "전성균",
        region: "경기 화성시",
        metropolitan: "경기도",
        category: "기초단체장",
        office: "화성시장",
        status: "출마선언",
        bio: [
            "제9대 화성시의원",
            "경기도당 위원장",
            "전) 개혁신당 최고위원"
        ],
        photo: "https://i.imgur.com/iK8aR6Y.jpeg",
        sns: {
            fb: "https://www.facebook.com/seonggyun.jeon.7",
            ig: "https://www.instagram.com/jeonsk_reform/",
            yt: "https://www.youtube.com/@resetkorea_revolution"
        },
        pledge: "#",
        decl: "https://www.youtube.com/watch?v=MZHron4TMO4",
        dateAdded: "2026-01-05",
        coords: [
            37.1994,
            126.8317
        ]
    },
    {
        name: "송창훈",
        region: "경기 용인시",
        metropolitan: "경기도",
        category: "기초단체장",
        office: "용인시장",
        status: "공천확정",
        bio: [
            "용인시 정 당협위원장"
        ],
        photo: "https://i.imgur.com/xHTGUwg.jpeg",
        sns: {
            fb: "https://www.facebook.com/profile.php?id=100004103197128",
            ig: "https://www.instagram.com/song_c_h_/"
        },
        pledge: "#",
        decl: "https://www.youtube.com/watch?v=MZHron4TMO4",
        dateAdded: "2026-01-05",
        coords: [
            37.2411,
            127.1775
        ]
    },
    {
        name: "김형우",
        region: "강원 삼척시",
        metropolitan: "강원특별자치도",
        category: "기초단체장",
        office: "삼척시장",
        age: 69,
        status: "예비후보",
        bio: [
            "전) 산업통상자원부",
            "동해자유무역원 원장"
        ],
        photo: "https://cdn.kado.net/news/photo/201801/895272_365485_3640.jpg",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-12",
        coords: [
            37.4502,
            129.1653
        ]
    },
    {
        name: "김홍수",
        region: "강원 동해시",
        metropolitan: "강원특별자치도",
        category: "기초단체장",
        office: "동해시장",
        age: 68,
        status: "예비후보",
        bio: [
            "전) 민주평화통일자문회의 동해시협의회장",
            "해군사랑 바다사랑 회장"
        ],
        photo: "https://i.imgur.com/Caknmnk.jpeg",
        sns: {
            fb: "https://www.facebook.com/gimhongsu.426192/"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-19",
        coords: [
            37.5247,
            129.1142
        ]
    },
    {
        name: "유관곤",
        region: "충남 서산시",
        metropolitan: "충청남도",
        category: "기초단체장",
        office: "서산시장",
        status: "공천확정",
        bio: [
            "제5,6대 서산시의원"
        ],
        photo: "https://i.imgur.com/F4W51L5.jpeg",
        sns: {
            fb: ""
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-05",
        coords: [
            36.7845,
            126.4503
        ]
    },
    {
        name: "이유원",
        region: "서울 동작구",
        metropolitan: "서울특별시",
        category: "기초단체장",
        office: "동작구청장",
        gender: "f",
        status: "출마예정",
        bio: [
            "동작구 을 당협위원장",
            "21대대선 선대위 부대변인",
            "아트노바 대표"
        ],
        photo: "https://i.imgur.com/SI1e3zR.jpeg",
        sns: {
            fb: "https://www.facebook.com/radiostarlee",
            ig: "https://www.instagram.com/radiostarlee",
            yt: "https://www.youtube.com/@%EC%9D%B4%EC%9C%A0%EC%9B%90TV"
        },
        pledge: "#",
        decl: "https://www.facebook.com/share/p/19dY6YXKDQ/",
        dateAdded: "2026-03-10",
        coords: [
            37.5122,
            126.9393
        ]
    },
    {
        name: "서운교",
        region: "대구광역시",
        metropolitan: "대구광역시",
        shortMetro: "대구",
        district: "수성 3",
        constituencyFull: "대구광역시의회 수성구 제3선거구",
        category: "광역의원",
        office: "대구시의회",
        age: 33,
        status: "예비후보",
        subRegion: "고산1동, 고산2동, 고산3동",
        bio: [
            "공인노무사",
            "'더클래스 노무사' 대표 노무사"
        ],
        photo: "https://i.imgur.com/qu4U613.png",
        sns: {
            fb: "#",
            blog: "https://blog.naver.com/cpla1005"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-12",
        coords: [
            35.8495,
            128.6622
        ]
    },
    {
        name: "강인수",
        region: "서울특별시",
        metropolitan: "서울특별시",
        shortMetro: "서울",
        district: "강남 1",
        constituencyFull: "강남구 제1선거구",
        category: "광역의원",
        office: "서울시의원",
        status: "공천확정",
        subRegion: "신사동, 논현1동, 압구정동, 청담동",
        bio: [
            "서울시당 대변인"
        ],
        photo: "",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-09",
        coords: [
            37.5219,
            127.0209
        ]
    },
    {
        name: "최현석",
        region: "서울특별시",
        metropolitan: "서울특별시",
        shortMetro: "서울",
        district: "송파 2",
        constituencyFull: "송파구 제2선거구",
        category: "광역의원",
        office: "서울시의원",
        status: "공천확정",
        subRegion: "방이1동, 방이2동, 오륜동, 송파1동, 송파2동",
        bio: [
            "송파구 제2선거구 후보"
        ],
        photo: "",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-05",
        coords: [
            37.5122,
            127.104
        ]
    },
    {
        name: "주이삭",
        region: "서울특별시",
        metropolitan: "서울특별시",
        shortMetro: "서울",
        district: "서대문 1",
        constituencyFull: "서대문구 제1선거구",
        category: "광역의원",
        office: "서울시의원",
        status: "공천확정",
        subRegion: "충현동, 천연동, 북아현동, 신촌동",
        bio: [
            "제8, 9대 서대문구의원",
            "개혁신당 최고위원",
            "개혁신당 미래희망위원장",
            "서울시당 정책자문위원장"
        ],
        photo: "https://i.imgur.com/TSkZWyU.png",
        sns: {
            fb: "https://www.facebook.com/ju.isaac.9",
            ig: "https://www.instagram.com/isaactic_sdm",
            yt: "https://www.youtube.com/@isaactic_sdm"
        },
        pledge: "#",
        decl: "https://www.youtube.com/live/IAdVNF7Id1k?t=422s",
        dateAdded: "2026-02-16",
        coords: [
            37.5626,
            126.962
        ]
    },
    {
        name: "김순주",
        region: "세종특별자치시",
        metropolitan: "세종특별자치시",
        shortMetro: "세종",
        district: "4",
        constituencyFull: "세종특별자치시 제4선거구",
        category: "광역의원",
        office: "세종시의회",
        age: 53,
        gender: "f",
        status: "예비후보",
        subRegion: "연기면, 연동면, 연서면, 해밀동",
        bio: [
            "마을활동가",
            "현) 방송통신대 세종·공주 학생회장"
        ],
        photo: "https://i.imgur.com/wbdLG7a.png",
        sns: {
            fb: "https://www.facebook.com/gimsunju.64081/#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-09",
        coords: [
            36.5036,
            127.2543
        ]
    },
    {
        name: "이건우",
        region: "제주특별자치도",
        metropolitan: "제주특별자치도",
        shortMetro: "제주",
        district: "노형 을",
        constituencyFull: "제주시 노형동 을 선거구",
        category: "광역의원",
        office: "제주도의원",
        age: 33,
        status: "예비후보",
        subRegion: "제주시 노형동 을",
        bio: [
            "개혁신당 노형동 지역발전특별위원장",
            "부마정치연구소장"
        ],
        photo: "https://i.imgur.com/kvf3Ifn.png",
        sns: {
            fb: "#",
            ig: "https://www.instagram.com/gw_jeju/"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-05",
        coords: [
            33.4889,
            126.4784
        ]
    },
    {
        name: "양해두",
        region: "제주특별자치도",
        metropolitan: "제주특별자치도",
        shortMetro: "제주",
        district: "외도·이호·도두",
        category: "광역의원",
        office: "제주도의원",
        age: 49,
        status: "예비후보",
        subRegion: "제주시 외도동, 이호동, 도두동",
        bio: [
            "제주시 갑 당협위원장",
            "제21대 대선 선대위 홍보부본부장"
        ],
        photo: "https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202601/07/kbs/20260107150152592uwgk.jpg",
        sns: {
            fb: "https://www.facebook.com/profile.php?id=100007883867189#",
            ig: "https://www.instagram.com/haeduyang/"
        },
        pledge: "#",
        decl: "https://www.facebook.com/share/p/17qQErhuYr/",
        dateAdded: "2026-01-26",
        coords: [
            33.4976,
            126.4358
        ]
    },
    {
        name: "이규민",
        region: "서울 강남구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "강남구의원",
        status: "공천확정",
        subRegion: "개포제3동, 일원본동, 일원제1동",
        bio: [
            "서울시당 대변인",
            "<span style='letter-spacing:-0.12em;'>개혁신당 강남구 지역발전특위 부위원장</span>",
            "한국자동차연구원 연구원",
            "전) 소프트웨어/AI 강사"
        ],
        photo: "",
        district: "마",
        sns: {
            fb: "#",
            ig: "https://www.instagram.com/gm.lee_official/"
        },
        pledge: "#",
        decl: "https://www.instagram.com/p/DUll53qEl7Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        dateAdded: "2026-02-05",
        coords: [
            37.4813,
            127.0656
        ]
    },
    {
        name: "구성도",
        region: "서울 강남구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "강남구의원",
        age: 43,
        status: "예비후보",
        subRegion: "개포1동, 개포2동, 개포4동",
        bio: [
            "서울시당 대변인",
            "(주)제일기연 대표이사"
        ],
        photo: "",
        district: "라",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-09",
        coords: [
            37.4823,
            127.056
        ]
    },
    {
        name: "김동현",
        region: "서울 강남구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "강남구의원",
        age: 27,
        status: "예비후보",
        district: "자",
        subRegion: "삼성1동, 삼성2동, 대치2동",
        bio: [
            "서울시당 대변인",
            "건국대학교 캠퍼스 지부원"
        ],
        photo: "https://i.imgur.com/uzVK2Vj.jpeg",
        sns: {
            blog: "https://m.blog.naver.com/PostList.naver?blogId=uada5633"
        },
        pledge: "#",
        decl: "https://m.blog.naver.com/PostView.naver?blogId=uada5633&logNo=224121263655",
        focus: "photo-face-focus",
        dateAdded: "2025-12-01",
        coords: [
            37.5088,
            127.0571
        ]
    },
    {
        name: "김정훈",
        region: "서울 동대문구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "동대문구의원",
        age: 40,
        status: "예비후보",
        subRegion: "답십리2동, 장안1동, 장안2동",
        bio: [
            "서울시당 대변인",
            "<span style='letter-spacing:-0.14em;'>개혁신당 동대문구 지역발전특위 부위원장</span>",
            "전) 동대문구축구협회 사무국장"
        ],
        photo: "https://i.imgur.com/cH6JHd7.png",
        district: "바",
        sns: {
            fb: "#",
            ig: "https://www.instagram.com/orange.ddm/"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-05",
        coords: [
            37.572,
            127.0644
        ]
    },
    {
        name: "이도윤",
        region: "서울 동대문구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "동대문구의원",
        status: "출마선언",
        subRegion: "전농제1동, 전농제2동, 답십리제1동",
        bio: [
            "동대문구 마선거구 출마"
        ],
        photo: "",
        district: "마",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "https://rallypoint.kr/board/politics-free/224812",
        dateAdded: "2026-01-31",
        coords: [
            37.5757,
            127.0585
        ]
    },
    {
        name: "이호엽",
        region: "서울 성북구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "기초의원",
        age: 29,
        status: "예비후보",
        subRegion: "성북동, 삼선동, 동선동, 돈암제2동, 안암동, 보문동",
        bio: [
            "서울시당 대변인",
            "<span style='letter-spacing:-0.12em;'>개혁신당 성북구 지역발전특위 부위원장</span>"
        ],
        photo: "https://i.imgur.com/zZEqfNs.png",
        district: "가",
        sns: {
            fb: "#",
            ig: "https://www.instagram.com/hoyup97/",
            blog: "https://blog.naver.com/hyl005",
            site: "https://litt.ly/horang97"
        },
        pledge: "#",
        decl: "https://rallypoint.kr/board/politics-free/225837",
        dateAdded: "2026-02-12",
        coords: [
            37.5985,
            127.0007
        ]
    },
    {
        name: "김성우",
        region: "서울 서대문구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "기초의원",
        age: 40,
        status: "예비후보",
        subRegion: "북아현동, 신촌동, 천연동, 충현동",
        bio: [
            "<span style='letter-spacing:-0.14em;'>개혁신당 서대문구 지역발전특위 부위원장</span>",
            "우리부동산 공인중개사",
            "북아현살집연구소 소장"
        ],
        photo: "https://i.imgur.com/uVeuzZN.png",
        district: "가",
        sns: {
            blog: "https://blog.naver.com/manksw"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-06",
        coords: [
            37.5602,
            126.954
        ]
    },
    {
        name: "오상균",
        region: "서울 성동구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "성동구의원",
        age: 58,
        status: "예비후보",
        subRegion: "마장동, 사근동, 송정동, 용답동",
        bio: [
            "변리사",
            "전) 정보통신부 서기관"
        ],
        photo: "",
        district: "다",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-01-26",
        coords: [
            37.5636,
            127.0348
        ]
    },
    {
        name: "최성진",
        region: "서울 구로구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "구로구의원",
        age: 30,
        status: "예비후보",
        subRegion: "구로제3동, 구로제4동, 가리봉동",
        bio: [
            "서울시당 미래희망위원회 위원",
            "국제개발협력 NGO 근무",
            "WFK KOICA NGO 봉사단원 파견"
        ],
        photo: "https://secondteam-newways-feed.s3.ap-northeast-2.amazonaws.com/politicians/profiles/reformguro.webp",
        district: "바",
        sns: {
            fb: "#",
            blog: "https://blog.naver.com/reformguro"
        },
        pledge: "#",
        decl: "https://rallypoint.kr/board/politics-free/224459",
        dateAdded: "2026-01-24",
        coords: [
            37.4853,
            126.8868
        ]
    },
    {
        name: "고길주",
        region: "서울 영등포구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "기초의원",
        age: 32,
        status: "예비후보",
        subRegion: "신길 6동, 대림1동, 대림2동, 대림3동",
        bio: [
            "개혁신당 영등포구 지역발전특위 부위원장",
            "배우"
        ],
        photo: "https://i.imgur.com/Z1SVjJ8.png",
        district: "사",
        sns: {
            fb: "#",
            ig: "https://www.instagram.com/reform_kogilju/"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-05",
        coords: [
            37.491737,
            126.902382
        ]
    },
    {
        name: "서준호",
        region: "서울 용산구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "용산구의원",
        status: "공천확정",
        subRegion: "원효로제1동, 원효로제2동, 용문동",
        bio: [
            "용산구 나선거구 후보"
        ],
        photo: "",
        district: "나",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-05",
        coords: [
            37.5418,
            126.9723
        ]
    },
    {
        name: "정상필",
        region: "서울 중랑구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "기초의원",
        status: "공천확정",
        subRegion: "면목4동, 면목7동",
        bio: [
            "서울시당 대변인"
        ],
        photo: "",
        district: "나",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-05",
        coords: [
            37.573821,
            127.086842
        ]
    },
    {
        name: "박성진",
        region: "서울 노원구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "노원구의원",
        age: 43,
        status: "예비후보",
        subRegion: "상계2동, 상계3동, 상계4동, 상계5동",
        bio: [
            "<span style='letter-spacing:-0.12em;'>개혁신당 노원구 지역발전특위 부위원장</span>",
            "노동법률사무소 범아 대표(공인노무사)",
            "<span style='letter-spacing:-0.12em;'>법무부 한국법교육센터 법교육전문강사</span>"
        ],
        photo: "https://i.imgur.com/kgogVKy.png",
        district: "마",
        sns: {
            fb: "https://www.facebook.com/sungjin.park.524",
            blog: "https://blog.naver.com/beomalaw"
        },
        pledge: "#",
        decl: "https://rallypoint.kr/board/politics-free/225582",
        dateAdded: "2026-02-09",
        coords: [
            37.6565,
            127.064
        ]
    },
    {
        name: "주한송",
        region: "서울 도봉구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "도봉구의원",
        status: "공천확정",
        subRegion: "창1동, 창4동, 창5동",
        bio: [
            "도봉구 가선거구 후보"
        ],
        photo: "",
        district: "가",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-09",
        coords: [
            37.6614,
            127.0364
        ]
    },
    {
        name: "최제일",
        region: "서울 광진구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "광진구의원",
        status: "공천확정",
        subRegion: "능동, 구의2동, 광장동, 군자동",
        bio: [
            "서울시당 대변인",
            "출판사 '도서출판 문각' 대표",
            "<span style='letter-spacing:-0.12em;'>광진구 주민참여예산위 1분과 부위원장</span>",
            "<span style='letter-spacing:-0.12em;'>(사)철기이범석장군기념사업회 청년위원</span>"
        ],
        photo: "https://i.imgur.com/miiK7Cq.jpeg",
        district: "나",
        sns: {
            fb: "#",
            ig: "https://www.instagram.com/bestchoi__"
        },
        pledge: "#",
        decl: "https://rallypoint.kr/board/politics-free/225625/",
        dateAdded: "2026-02-09",
        coords: [
            37.5503,
            127.0866
        ]
    },
    {
        name: "김주연",
        region: "서울 광진구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "광진구의원",
        status: "공천확정",
        subRegion: "자양제1동, 자양제2동, 구의제1동, 구의제3동",
        bio: [
            "서울시당 대변인",
            "<span style='letter-spacing:-0.12em;'>개혁신당 광진구 지역발전특위 부위원장</span>",
            "<span style='letter-spacing:-0.12em;'>21대 대선 서울시 선대위 환경위 위원</span>",
            "<span style='letter-spacing:-0.18em;'>21대 대선 조직본부 강남캠프 자원봉사단원</span>"
        ],
        photo: "https://i.imgur.com/0cMZalE.jpeg",
        district: "다",
        sns: {
            fb: "https://facebook.com/leadingkim6"
        },
        pledge: "#",
        decl: "https://rallypoint.kr/best/225947",
        dateAdded: "2026-01-26",
        coords: [
            37.5372,
            127.0774
        ]
    },
    {
        name: "이진현",
        region: "서울 광진구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "기초의원",
        status: "공천확정",
        subRegion: "화양동, 자양제3동, 자양제4동",
        bio: [
            "서울시당 대변인",
            "<span style='letter-spacing:-0.12em;'>개혁신당 광진구 지역발전특위 부위원장</span>",
            "21대 대선 중앙당 홍보국 주임"
        ],
        photo: "https://i.imgur.com/1yup6y8.png",
        district: "라",
        sns: {
            fb: "https://www.facebook.com/profile.php?id=100004762395806",
            ig: "https://www.instagram.com/diff_politics/",
            yt: "https://www.youtube.com/@different-politics"
        },
        pledge: "#",
        decl: "https://rallypoint.kr/board/politics-free/227187",
        dateAdded: "2026-01-26",
        coords: [
            37.543,
            127.0702
        ]
    },
    {
        name: "박범근",
        region: "서울 관악구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "기초의원",
        status: "공천확정",
        subRegion: "신사동, 조원동, 미성동",
        bio: [
            "관악구 마선거구 후보"
        ],
        photo: "",
        district: "마",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-01-26",
        coords: [
            37.485507,
            126.918955
        ]
    },
    {
        name: "원동철",
        region: "서울 관악구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "관악구의원",
        age: 34,
        status: "예비후보",
        subRegion: "삼성동, 대학동",
        bio: [
            "배우",
            "오오더블유 대표"
        ],
        photo: "https://i.imgur.com/ltw22IP.jpeg",
        district: "아",
        sns: {
            fb: "#",
            ig: "https://www.instagram.com/_oneofwon"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-01-26",
        coords: [
            37.4683,
            126.9484
        ]
    },
    {
        name: "장성혁",
        region: "서울 송파구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "송파구의원 후보",
        age: 38,
        status: "예비후보",
        subRegion: "풍납1동, 풍납2동, 잠실4동, 잠실6동",
        bio: [
            "개혁신당 송파구 지역발전특위 부위원장"
        ],
        photo: "https://i.imgur.com/Gf4IEYo.jpeg",
        district: "가",
        sns: {
            ig: ""
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-19",
        coords: [
            37.5268,
            127.1201
        ]
    },
    {
        name: "김영민",
        region: "서울 강동구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "강동구의원",
        status: "공천확정",
        subRegion: "성내1·2·3동, 둔촌제1·2동",
        bio: [
            "서울시당 환경위원장"
        ],
        photo: "",
        district: "바",
        sns: {
            fb: "https://www.facebook.com/profile.php?id=61557084968016"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-15",
        coords: [
            37.5328,
            127.1295
        ]
    },
    {
        name: "조연우",
        region: "부산 기장군",
        metropolitan: "부산광역시",
        category: "기초의원",
        office: "기장군의원",
        status: "공천확정",
        subRegion: "정관읍, 장안읍",
        bio: [
            "기장군 다선거구 후보"
        ],
        photo: "",
        district: "다",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-05",
        coords: [
            35.3123,
            129.1854
        ]
    },
    {
        name: "백성민",
        region: "부산 남구",
        metropolitan: "부산광역시",
        category: "기초의원",
        office: "남구의원 후보",
        status: "공천확정",
        subRegion: "용호1동, 용호2동, 용호3동, 용호4동",
        bio: [
            "남구의회 마선거구 후보"
        ],
        photo: "",
        district: "마",
        sns: {
            ig: ""
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-19",
        coords: [
            35.1199,
            129.1059
        ]
    },
    {
        name: "박종길",
        region: "대구 달서구",
        metropolitan: "대구광역시",
        category: "기초의원",
        office: "달서구의원",
        age: 66,
        status: "예비후보",
        subRegion: "이곡1동, 이곡2동, 신당동",
        bio: [
            "제8, 9대 달서구의원 (재선)",
            "<span style='letter-spacing:-0.15em;'>전) 제9대 달서구의회 복지문화위원장</span>",
            "<span style='letter-spacing:-0.15em;'>전) 제8대 달서구의회 윤리특별위원장</span>"
        ],
        photo: "https://i.imgur.com/tDOB9Rh.jpeg",
        district: "나",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "https://www.youtube.com/live/ixdTcenUjMw?si=62KazlMWdC6ciOpY",
        dateAdded: "2026-02-12",
        coords: [
            35.8444,
            128.5161
        ]
    },
    {
        name: "우영훈",
        region: "대구 달성군",
        metropolitan: "대구광역시",
        category: "기초의원",
        office: "달성군의원",
        status: "공천확정",
        subRegion: "화원읍, 가창면",
        bio: [
            "<span style='letter-spacing:-0.15em;'>개혁신당 지역발전특위 부위원장</span>",
            "국제라이온스협회 특별위원장",
            "국제라이온스협회 분과위원장",
            "국제라이온스협회 영진L 14대 회장"
        ],
        photo: "https://i.imgur.com/amHTRAa.jpeg",
        district: "가",
        sns: {
            fb: "https://www.facebook.com/wooyounghoon",
            ig: "https://www.instagram.com/wooyounghoon"
        },
        pledge: "#",
        decl: "https://www.facebook.com/share/p/17tdaEkjL5/",
        dateAdded: "2026-01-26",
        coords: [
            35.8122,
            128.5012
        ]
    },
    {
        name: "우성원",
        region: "대구 달성군",
        metropolitan: "대구광역시",
        category: "기초의원",
        office: "달성군의원",
        status: "공천확정",
        subRegion: "유가읍, 현풍읍, 구지면",
        bio: [
            "달성군 당협위원장"
        ],
        photo: "https://i.imgur.com/NNtiJ53.jpeg",
        district: "다",
        sns: {
            fb: "https://www.facebook.com/seongwon.woo.3/",
            ig: "https://www.instagram.com/seongwon._.farm",
            yt: "https://www.youtube.com/channel/UCL2JP6XXtMkhrA9WG3U3XPA",
            site: "https://litt.ly/seongwon._.farm"
        },
        pledge: "#",
        decl: "https://www.facebook.com/share/p/1D9hTEiQjh/",
        dateAdded: "2026-01-26",
        coords: [
            35.7355,
            128.4486
        ]
    },
    {
        name: "박철현",
        region: "대구 동구",
        metropolitan: "대구광역시",
        category: "기초의원",
        office: "동구의원",
        age: 35,
        status: "예비후보",
        subRegion: "신천1·2동, 신천3동, 신천4동, 효목1동, 효목2동",
        bio: [
            "대구시당 인재위원장",
            "개혁신당 지역발전특별위 부위원장"
        ],
        photo: "",
        district: "다",
        sns: {
            ig: "https://www.instagram.com/park___cheol_hyeon/"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-01-26",
        coords: [
            35.8614,
            128.6082
        ]
    },
    {
        name: "오태훈",
        region: "대구 수성구",
        metropolitan: "대구광역시",
        category: "기초의원",
        office: "수성구의원",
        age: 32,
        status: "예비후보",
        subRegion: "고산1동, 고산2동, 고산3동",
        bio: [
            "대구시당 대변인"
        ],
        photo: "https://i.imgur.com/b5WsxIp.png",
        district: "라",
        sns: {
            fb: "https://www.facebook.com/profile.php?id=100022505341306",
            ig: "https://www.instagram.com/suseong_taehun",
            site: "https://litt.ly/ohtaehun"
        },
        pledge: "#",
        decl: "https://www.facebook.com/share/p/1BkSL7Bw2c/",
        dateAdded: "2026-01-26",
        coords: [
            35.8495,
            128.6622
        ]
    },
    {
        name: "최윤석",
        region: "대구 수성구",
        metropolitan: "대구광역시",
        category: "기초의원",
        office: "수성구의원",
        age: 42,
        status: "예비후보",
        district: "마",
        subRegion: "중동, 상동, 두산동, 수성1가동, 수성2.3가동, 수성4가동",
        bio: [
            "대구시당 정책위원장",
            "대한약사회 대외협력본부장"
        ],
        photo: "",
        sns: {
            fb: "https://www.facebook.com/yoonseok.choi.98",
            ig: "https://www.instagram.com/rapaellchoi/"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-09",
        coords: [
            35.8611,
            128.6332
        ]
    },
    {
        name: "성진영",
        region: "대구 중구",
        metropolitan: "대구광역시",
        category: "기초의원",
        office: "중구의원",
        age: 25,
        status: "예비후보",
        subRegion: "동인동, 삼덕동, 성내1동, 남산1동, 대봉1동, 대봉2동",
        bio: [
            "대구시당 미래희망위원회 위원",
            "캠퍼스지부 경북대학교 지부장"
        ],
        photo: "https://i.imgur.com/fHwNOji.png",
        district: "가",
        sns: {
            ig: "https://www.instagram.com/jyseong_gyeongsan/",
            blog: "https://blog.naver.com/gom_mal"
        },
        pledge: "#",
        decl: "https://rallypoint.kr/board/politics-free/222667",
        dateAdded: "2026-02-12",
        coords: [
            35.8727,
            128.5972
        ]
    },
    {
        name: "강신학",
        region: "인천 연수구",
        metropolitan: "인천광역시",
        category: "기초의원",
        office: "기초의원 후보",
        age: 57,
        status: "예비후보",
        subRegion: "송도2동, 송도4동, 송도5동",
        bio: [
            "인천시당 부위원장",
            "인천시당 소상공인·전략분과위원장"
        ],
        photo: "https://i.imgur.com/fd8NVNE.jpeg",
        district: "마",
        sns: {
            fb: "https://www.facebook.com/kangsh1"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-01-26",
        coords: [
            37.3914,
            126.6583
        ]
    },
    {
        name: "이성실",
        region: "인천 연수구",
        metropolitan: "인천광역시",
        category: "기초의원",
        office: "기초의원 후보",
        age: 31,
        status: "예비후보",
        subRegion: "송도1동, 송도3동",
        bio: [
            "개혁신당 연수구 지역발전특위 부위원장"
        ],
        photo: "https://i.imgur.com/iNFNRAu.jpeg",
        district: "라",
        sns: {
            fb: "#",
            ig: "https://www.instagram.com/yeonsu.lss/"
        },
        pledge: "#",
        decl: "https://www.instagram.com/p/DU-ZrFOkQ8k",
        dateAdded: "2026-02-05",
        coords: [
            37.3833,
            126.652
        ]
    },
    {
        name: "강민제",
        region: "인천 남동구",
        metropolitan: "인천광역시",
        category: "기초의원",
        office: "남동구의원",
        age: 41,
        status: "예비후보",
        subRegion: "구월3동, 간석1동, 간석4동",
        bio: [
            "개혁신당 남동구 지역발전특위 부위원장",
            "물리치료사"
        ],
        photo: "https://i.imgur.com/RXjG4uN.jpeg",
        district: "나",
        sns: {
            fb: "#",
            ig: "https://www.instagram.com/special.m.j/",
            blog: "https://blog.naver.com/kmj42"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-09",
        coords: [
            37.4519,
            126.7249
        ]
    },
    {
        name: "하용준",
        region: "대전 동구",
        metropolitan: "대전광역시",
        category: "기초의원",
        office: "기초의원",
        age: 29,
        status: "예비후보",
        subRegion: "판암1동, 판암2동, 대청동, 용운동, 대동, 자양동",
        bio: [
            "<span style='letter-spacing:-0.15em;'>개혁신당 대전동구 지역발전특위 부위원장</span>",
            "대전시당 자문위원"
        ],
        photo: "https://i.imgur.com/MxyJ2sm.jpeg",
        district: "나",
        sns: {
            fb: "#",
            ig: "https://www.instagram.com/official_yongjun"
        },
        pledge: "#",
        decl: "https://rallypoint.kr/board/politics-free/224918",
        dateAdded: "2026-01-31",
        coords: [
            36.3153,
            127.468
        ]
    },
    {
        name: "박현겸",
        region: "대전 동구",
        metropolitan: "대전광역시",
        category: "기초의원",
        office: "기초의원 후보",
        age: 24,
        status: "예비후보",
        subRegion: "중앙동, 효동, 삼성동, 홍도동, 삼성동, 산내동",
        bio: [
            "대전시당 미래희망위원장"
        ],
        photo: "https://i.imgur.com/TVxC1Kl.jpeg",
        district: "가",
        sns: {
            ig: "https://www.instagram.com/white46ant/"
        },
        pledge: "#",
        decl: "https://www.youtube.com/watch?v=uyHmrX9hypw",
        dateAdded: "2025-12-01",
        coords: [
            36.3504,
            127.4546
        ]
    },
    {
        name: "조동운",
        region: "대전 서구",
        metropolitan: "대전광역시",
        category: "기초의원",
        office: "서구의원",
        age: 64,
        status: "예비후보",
        subRegion: "가수원동, 관저1동, 관저2동, 기성동",
        bio: [
            "서구 을 당협위원장",
            "전) 경찰대학 경찰학과 교수",
            "한국경찰연구원 원장",
            "법학박사"
        ],
        photo: "https://i.imgur.com/q8Z5Mst.png",
        district: "다",
        sns: {
            fb: "https://www.facebook.com/c2716898",
            ig: "https://www.instagram.com/c2716898/"
        },
        pledge: "#",
        decl: "https://www.youtube.com/watch?v=uyHmrX9hypw",
        dateAdded: "2025-12-01",
        coords: [
            36.3321,
            127.3647
        ]
    },
    {
        name: "김영욱",
        region: "대전 서구",
        metropolitan: "대전광역시",
        category: "기초의원",
        office: "서구의원",
        age: 19,
        status: "예비후보",
        subRegion: "복수동, 도마1동, 도마2동, 정림동",
        bio: [
            "대전시당 자문위원"
        ],
        photo: "https://i.imgur.com/K0dT4FH.jpeg",
        district: "가",
        sns: {
            fb: "#",
            ig: "https://www.instagram.com/saveourdaejeon_97/"
        },
        pledge: "#",
        decl: "https://rallypoint.kr/board/politics-free/224817",
        dateAdded: "2026-01-30",
        coords: [
            36.3462,
            127.3926
        ]
    },
    {
        name: "윤서진",
        region: "대전 유성구",
        metropolitan: "대전광역시",
        category: "기초의원",
        office: "기초의원 후보",
        gender: "f",
        status: "공천확정",
        subRegion: "온천1동, 온천2동, 노은1동",
        bio: [
            "중앙당 미래희망위원회 위원",
            "대전시당 부위원장",
            "제35대 KAIST 총학생회장"
        ],
        photo: "https://i.imgur.com/N24OK0K.jpeg",
        district: "나",
        sns: {
            ig: "https://www.instagram.com/seojin_ys/"
        },
        pledge: "#",
        decl: "https://www.youtube.com/watch?v=YBVriZc5RQc",
        dateAdded: "2026-01-17",
        coords: [
            36.3659,
            127.3424
        ]
    },
    {
        name: "박진우",
        region: "광주 동구",
        metropolitan: "전남광주통합특별시",
        category: "기초의원",
        office: "동구의원",
        age: 32,
        status: "예비후보",
        subRegion: "충장동, 동명동, 계림1동, 계림2동, 산수1동, 산수2동",
        bio: [
            "<span style='letter-spacing:-0.15em;'>개혁신당 광주광역시 지역발전특위 위원장</span>",
            "전)동구·남구 을 당협위원장",
            "21대 대선 선대위 홍보부본부장"
        ],
        photo: "https://i.imgur.com/cah0vOW.png",
        district: "가",
        sns: {
            fb: "https://www.facebook.com/jinu.park.77/about",
            ig: "https://www.instagram.com/1jwpark/",
            yt: "https://www.youtube.com/@jinu_park"
        },
        dateAdded: "2026-01-26",
        coords: [
            35.148,
            126.9156
        ]
    },
    {
        name: "심재현",
        region: "경기 양주시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "기초의원 후보",
        age: 43,
        status: "예비후보",
        subRegion: "은현면, 남면, 옥정1동, 옥정2동, 은현면, 회천1동, 회천2동, 회천3동",
        bio: [
            "법원감정인",
            "양주시 공공건축가"
        ],
        photo: "",
        district: "다",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-05",
        coords: [
            37.8183,
            127.0031
        ]
    },
    {
        name: "김동광",
        region: "경기 수원시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "기초의원 후보",
        status: "공천확정",
        subRegion: "매탄1동, 매탄2동, 매탄3동, 매탄4동",
        bio: [
            "수원시 아선거구 후보"
        ],
        photo: "",
        district: "아",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-05",
        coords: [
            37.2592,
            127.0539
        ]
    },
    {
        name: "황승빈",
        region: "경기 수원시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "기초의원 후보",
        age: 25,
        status: "예비후보",
        subRegion: "영통구 영통2동, 영통3동, 망포1동, 망포2동",
        bio: [
            "<span style='letter-spacing:-0.12em;'>개혁신당 수원시 지역발전특위 부위원장</span>",
            "경기도당 수원시교통특별위 위원장"
        ],
        photo: "https://i.imgur.com/kMbaiCJ.jpeg",
        district: "파",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-01-26",
        coords: [
            37.2541,
            127.0686
        ]
    },
    {
        name: "오정대",
        region: "경기 성남시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "성남시의원",
        age: 38,
        status: "예비후보",
        subRegion: "분당구 이매1동, 이매2동, 삼평동",
        bio: [
            "<span style='letter-spacing:-0.12em;'>경기도당 성남시 스마트모빌리티 혁신위원장</span>",
            "도로교통사고감정사",
            "유튜브 '운전하는곰돌' 운영"
        ],
        photo: "https://i.imgur.com/KkRzwWU.jpeg",
        district: "아",
        sns: {
            yt: "https://www.youtube.com/@d_gomdol/featured",
            ig: "https://www.instagram.com/d_gomdol",
            site: "https://animated-panda-cb9b93.netlify.app"
        },
        pledge: "https://policy.reformparty.kr/map?region_code=41&election_type=local_council&district_code=41%3A%EC%84%B1%EB%82%A8%EC%8B%9C%EB%B6%84%EB%8B%B9%EA%B5%AC",
        decl: "#",
        dateAdded: "2026-01-31",
        coords: [
            37.3992,
            127.1297
        ]
    },
    {
        name: "김병진",
        region: "경기 성남시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "성남시의회",
        age: 31,
        status: "예비후보",
        district: "사",
        subRegion: "중앙동, 금광1동, 금광2동, 은행1동, 은행2동",
        bio: [
            "개혁신당 성남시 지역발전특위 부위원장"
        ],
        photo: "",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-09",
        coords: [
            37.4437,
            127.1376
        ]
    },
    {
        name: "홍승우",
        region: "경기 성남시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "성남시의원 후보",
        status: "공천확정",
        subRegion: "분당구 분당동, 수내3동, 정자2동, 정자3동, 구미동",
        bio: [
            "성남시의회 타선거구 후보"
        ],
        photo: "",
        district: "타",
        sns: {
            ig: ""
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-19",
        coords: [
            37.3737,
            127.115
        ]
    },
    {
        name: "김태수",
        region: "경기 부천시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "부천시의원",
        age: 33,
        status: "예비후보",
        subRegion: "원미구 중1동, 중2동, 중3동, 중4동, 약대동",
        bio: [
            "<span style='letter-spacing:-0.12em;'>개혁신당 부천시 지역발전특위 부위원장</span>",
            "<span style='letter-spacing:-0.12em;'>현 현대흥립통합재건축추준비위 위원장</span>",
            "전 에어아시아재팬 항공승무원"
        ],
        photo: "https://i.imgur.com/JROiWlJ.png",
        district: "마",
        sns: {
            fb: "https://www.facebook.com/share/1B6fqnbu3X/",
            ig: "https://www.instagram.com/bucheon_tezz/",
            yt: "https://www.youtube.com/@%EB%B6%80%EC%B2%9C%EA%B9%80%ED%83%9C%EC%88%98",
            blog: "https://blog.naver.com/bucheon_tezz"
        },
        pledge: "#",
        decl: "https://blog.naver.com/bucheon_tezz/224160408956",
        dateAdded: "2026-01-26",
        coords: [
            37.5046,
            126.762
        ]
    },
    {
        name: "조병찬",
        region: "경기 부천시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "부천시의원",
        status: "공천확정",
        subRegion: "소사구 범박동, 괴안동, 역곡3동, 옥길동",
        bio: [
            "구로 보스톤미치과 대표원장",
            "치과의사"
        ],
        photo: "",
        district: "아",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-01-26",
        coords: [
            37.4787,
            126.786
        ]
    },
    {
        name: "이승도",
        region: "경기 용인시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "용인시의원",
        status: "공천확정",
        subRegion: "상현1동, 상현3동",
        bio: [
            "용인시 사선거구 후보"
        ],
        photo: "",
        district: "사",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-01-26",
        coords: [
            37.301125,
            127.072028
        ]
    },
    {
        name: "박창현",
        region: "경기 용인시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "용인시의원 후보",
        status: "공천확정",
        subRegion: "기흥구 구성동, 마북동, 동백1동, 동백2동",
        bio: [
            "용인시의회 차선거구 후보"
        ],
        photo: "",
        district: "차",
        sns: {
            ig: ""
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-19",
        coords: [
            37.2641,
            127.1418
        ]
    },
    {
        name: "조현수",
        region: "경기 여주시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "기초의원",
        status: "공천확정",
        subRegion: "흥천면, 금사면, 산북면, 대신면, 중앙동, 오학동",
        bio: [
            "여주시 나선거구 후보"
        ],
        photo: "",
        district: "나",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-12",
        coords: [
            37.3327,
            127.6798
        ]
    },
    {
        name: "최종열",
        region: "경기 남양주시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "기초의원",
        age: 52,
        status: "예비후보",
        subRegion: "와부읍, 조안면, 금곡동, 진건읍, 퇴계원읍",
        bio: [
            "지엔에스파트너스 교육이사",
            "전)신한대 겸임조교수",
            "전)명지전문대 겸임조교수"
        ],
        photo: "",
        district: "사",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-12",
        coords: [
            37.6634,
            127.184
        ]
    },
    {
        name: "박윤옥",
        region: "경기 남양주시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "기초의원 후보",
        gender: "f",
        status: "공천확정",
        subRegion: "수동면, 화도읍",
        bio: [
            "제9대 남양주시의원",
            "남양주시의회 복지환경부위원장"
        ],
        photo: "https://i.imgur.com/HgnuJAp.png",
        district: "가",
        sns: {
            fb: "https://www.facebook.com/profile.php?id=100009520359078"
        },
        pledge: "#",
        decl: "https://www.gnnews.org/news/articleView.html?idxno=11383",
        dateAdded: "2026-02-05",
        coords: [
            37.6877,
            127.3012
        ]
    },
    {
        name: "김용인",
        region: "경기 남양주시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "남양주시의원 후보",
        age: 30,
        status: "예비후보",
        subRegion: "진접읍",
        bio: [
            "(전) 드림청년단 공동대표"
        ],
        photo: "",
        district: "다",
        sns: {
            ig: ""
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-19",
        coords: [
            37.7206,
            127.2034
        ]
    },
    {
        name: "박원길",
        region: "경기 안양시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "기초의원 후보",
        age: 66,
        status: "예비후보",
        subRegion: "동안구 호계1동, 호계2동, 호계3동, 신촌동",
        bio: [
            "안양시 아선거구 후보"
        ],
        photo: "",
        district: "아",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-01-26",
        coords: [
            37.3946,
            126.9735
        ]
    },
    {
        name: "이천은",
        region: "경기 안양시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "기초의원 후보",
        age: 39,
        status: "예비후보",
        district: "바",
        subRegion: "달안동, 부림동, 인덕원동, 관양동",
        bio: [
            "<span style='letter-spacing:-0.12em;'>개혁신당 안양시 지역발전특위 부위원장</span>",
            "<span style='letter-spacing:-0.12em;'>경기도당 안양시 AI미래전략특위 위원장</span>"
        ],
        photo: "https://i.imgur.com/FJsBrQ1.png",
        sns: {
            ig: "https://www.instagram.com/pyeongchonman?igsh=ZWY1dzBvZm1oYWVy"
        },
        pledge: "https://policy.reformparty.kr/map?region_code=41&election_type=local_council&district_code=41%3A%EC%95%88%EC%96%91%EC%8B%9C%EB%8F%99%EC%95%88%EA%B5%AC%3A%EC%95%88%EC%96%91%EC%8B%9C%EB%B0%94%EC%84%A0%EA%B1%B0%EA%B5%AC",
        decl: "https://www.instagram.com/p/DT9qrWckb3S/?igsh=MWtjcGlzOHk4MncxNg%3D%3D",
        dateAdded: "2025-12-01",
        coords: [
            37.3975,
            126.9553
        ]
    },
    {
        name: "양성혁",
        region: "경기 의왕시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "의왕시의회",
        status: "공천확정",
        district: "나",
        subRegion: "내손1동, 내손2동, 청계동",
        bio: [
            "의왕시 나선거구 후보"
        ],
        photo: "",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-09",
        coords: [
            37.3497,
            126.9681
        ]
    },
    {
        name: "양준모",
        region: "경기 파주시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "파주시의회",
        age: 32,
        status: "예비후보",
        district: "마",
        subRegion: "파주읍, 월룡면, 금촌1동, 금촌2동, 금촌3동",
        bio: [
            "<span style='letter-spacing:-0.12em;'>개혁신당 파주시 지역발전특위 부위원장</span>",
            "<span style='letter-spacing:-0.12em;'>한국애견미용학원연합회 회장</span>"
        ],
        photo: "",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-09",
        coords: [
            37.8288,
            126.7933
        ]
    },
    {
        name: "최진형",
        region: "경기 안산시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "기초의원 후보",
        age: 27,
        status: "예비후보",
        subRegion: "본오3동, 사동, 사이동, 해양동",
        bio: [
            "개혁신당 안산시 지역발전특위 부위원장"
        ],
        photo: "https://i.imgur.com/nihgF8a.png",
        district: "가",
        sns: {
            ig: "https://www.instagram.com/jhchoi_ansan4/"
        },
        pledge: "#",
        decl: "https://rallypoint.kr/board/politics-free/223063",
        dateAdded: "2026-01-26",
        coords: [
            37.3313,
            126.8237
        ]
    },
    {
        name: "심용진",
        region: "경기 화성시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "기초의원 후보",
        age: 61,
        status: "예비후보",
        subRegion: "우정읍, 남양읍, 매송면, 비봉면, 마도면, 송산면, 서신면, 장안면, 새솔동",
        bio: [
            "전) 매송면 원평1리 이장",
            "<span style='letter-spacing:-0.15em;'>경기도당 화성시 동서균형발전특위 위원장</span>",
            "현) 매송면 송전탑 지중화 추진위원장",
            "현) 한국해양소년단 경기연맹이사"
        ],
        photo: "https://i.imgur.com/XgGMe74.png",
        district: "나",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "http://www.hsnews.or.kr/news/view.html?section=1&no=49750",
        dateAdded: "2026-01-26",
        coords: [
            37.0817,
            126.8298
        ]
    },
    {
        name: "오태석",
        region: "경기 화성시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "기초의원 후보",
        age: 37,
        status: "예비후보",
        subRegion: "봉담읍, 기배동, 화산동",
        bio: [
            "민주평화통일자문회의 자문위원",
            "뉴케이팝댄스학원 원장"
        ],
        photo: "https://i.imgur.com/JztC0G2.jpeg",
        district: "바",
        sns: {
            fb: "#",
            blog: "https://blog.naver.com/01696265977",
            ig: "https://www.instagram.com/thinkingofts/"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-01-26",
        coords: [
            37.2175,
            126.9147
        ]
    },
    {
        name: "윤효석",
        region: "경기 화성시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "기초의원 후보",
        status: "공천확정",
        subRegion: "진안동, 병점1동, 병점2동",
        bio: [
            "화성시 사선거구 후보"
        ],
        photo: "",
        district: "사",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-01-26",
        coords: [
            37.1851,
            126.9796
        ]
    },
    {
        name: "전상현",
        region: "강원 원주시",
        metropolitan: "강원특별자치도",
        category: "기초의원",
        office: "춘천시의원",
        age: 33,
        status: "예비후보",
        subRegion: "문막읍, 지정면, 부론면, 귀래면",
        bio: [
            "원주시 가선거구 후보"
        ],
        photo: "https://i.imgur.com/VU1whW9.jpeg",
        district: "가",
        sns: {
            fb: "#",
            ig: "https://www.instagram.com/wonju_.sh"
        },
        pledge: "#",
        decl: "https://rallypoint.kr/board/politics-free/225573?searchType=0&currentPage=1",
        dateAdded: "2026-01-26",
        coords: [
            37.3009,
            127.8398
        ]
    },
    {
        name: "최태영",
        region: "강원 춘천시",
        metropolitan: "강원특별자치도",
        category: "기초의원",
        office: "춘천시의원",
        age: 25,
        status: "예비후보",
        subRegion: "효자2동, 석사동",
        bio: [
            "캠퍼스지부 강원스테이션 리더장",
            "캠퍼스지부 강원대학교 지부장"
        ],
        photo: "https://i.imgur.com/eeRt5rd.jpeg",
        cardPos: "center 15%",
        cardScale: "1.25",
        district: "라",
        sns: {
            fb: "https://www.facebook.com/choetaeyeong.979932/",
            ig: "https://www.instagram.com/taeyoung_choe/",
            blog: "https://blog.naver.com/taeyoung_choe"
        },
        pledge: "https://policy.reformparty.kr/map?region_code=42&election_type=local_council&district_code=42%3A%EC%B6%98%EC%B2%9C%EC%8B%9C",
        decl: "https://rallypoint.kr/board/politics-free/223910",
        dateAdded: "2026-02-05",
        coords: [
            37.8646,
            127.7361
        ]
    },
    {
        name: "이강민",
        region: "충남 천안시",
        metropolitan: "충청남도",
        category: "기초의원",
        office: "기초의원 후보",
        age: 39,
        status: "예비후보",
        subRegion: "불당1동, 불당2동",
        bio: [
            "개혁신당 지역발전특위 부위원장",
            "대전시당 자문위원",
            "21대 대선 충남 선대본부 위원",
            "충남개혁정책네트워크 대표"
        ],
        photo: "https://i.imgur.com/UtBP6ph.png",
        district: "라",
        cardFit: "cover",
        cardPos: "center 15%",
        sns: {
            fb: "https://www.facebook.com/leekangmin4473",
            blog: "https://blog.naver.com/buldang_leekangmin",
            yt: "https://www.youtube.com/channel/UCUC5ttFtQfNRCqANIffAalg",
            site: "https://litt.ly/leekangmin"
        },
        pledge: "#",
        decl: "https://rallypoint.kr/board/politics-free/223549",
        dateAdded: "2025-12-01",
        coords: [
            36.8319,
            127.1566
        ]
    },
    {
        name: "이해성",
        region: "충남 천안시",
        metropolitan: "충청남도",
        category: "기초의원",
        office: "기초의원 후보",
        age: 27,
        status: "예비후보",
        subRegion: "쌍용1동, 쌍용2동, 쌍용3동",
        bio: [
            "충남도당 사무처장",
            "21대 대선 충남선대위 상황실장"
        ],
        photo: "https://i.imgur.com/fqfARBT.png",
        cardFit: "contain",
        cardPos: "center 0%",
        cardScale: "1",
        district: "카",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-05",
        coords: [
            36.7972,
            127.1214
        ]
    },
    {
        name: "손승범",
        region: "충남 천안시",
        metropolitan: "충청남도",
        category: "기초의원",
        office: "천안시의원 후보",
        age: 22,
        status: "예비후보",
        subRegion: "봉명동, 성정1동, 성정2동, 문성동",
        bio: [
            "전) 충남도당 대학생 대변인"
        ],
        photo: "https://i.imgur.com/tgnxWFB.png",
        district: "다",
        sns: {
            ig: "https://www.instagram.com/sonseungbeom2004/",
            fb: "https://www.facebook.com/sonseungbeom2004"
        },
        pledge: "#",
        decl: "https://rallypoint.kr/board/politics-free/225934",
        dateAdded: "2026-02-15",
        coords: [
            36.8098,
            127.1458
        ]
    },
    {
        name: "황시현",
        region: "충남 천안시",
        metropolitan: "충청남도",
        category: "기초의원",
        office: "기초의원 후보",
        subRegion: "부성2동",
        bio: [
            "21대 대선 충남 선대본 홍보위원",
            "충남청년개발혁신회의 의장",
            "청년 커뮤니티 '청연' 대표"
        ],
        photo: "https://i.imgur.com/3yWK8BF.png",
        district: "사",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "https://rallypoint.kr/board/politics-free/223942",
        dateAdded: "2026-01-15",
        coords: [
            36.8418,
            127.135
        ]
    },
    {
        name: "고재윤",
        region: "충남 당진시",
        metropolitan: "충청남도",
        category: "기초의원",
        office: "당진시의원 후보",
        age: 19,
        status: "예비후보",
        subRegion: "고대면, 석문면, 당진1동, 당진3동",
        bio: [
            "대전시당 정책위원",
            "대전시당 자문위원",
            "21대 대선 충남 선대본부 위원",
            "자원봉사단체 청춘 대표"
        ],
        photo: "https://i.imgur.com/Fyk1Di8.png",
        district: "라",
        sns: {
            fb: "https://www.facebook.com/profile.php?id=100075309062913",
            ig: "https://www.instagram.com/yn._.jae/",
            blog: "https://m.blog.naver.com/kojy9402?tab=1",
            site: "https://litt.ly/gojaeyun"
        },
        pledge: "#",
        decl: "https://www.instagram.com/reel/DUaehbcAUci/?igsh=M2Y5aWdreGsxM2Zi",
        dateAdded: "2026-02-05",
        coords: [
            36.9782,
            126.6481
        ]
    },
    {
        name: "송원근",
        region: "충남 예산군",
        metropolitan: "충청남도",
        category: "기초의원",
        office: "예산군의원",
        status: "공천확정",
        subRegion: "덕산면, 봉산면, 고덕면, 신암면",
        bio: [
            "<span style='letter-spacing:-0.12em;'>개혁신당 예산군 지역발전특위 부위원장</span>"
        ],
        photo: "https://i.imgur.com/TAmoUh0.jpeg",
        district: "라",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-05",
        coords: [
            36.6747,
            126.6622
        ]
    },
    {
        name: "류태하",
        region: "경북 구미시",
        metropolitan: "경상북도",
        category: "기초의원",
        office: "기초의원 후보",
        age: 40,
        status: "예비후보",
        subRegion: "인동동, 진미동",
        bio: [
            "구미시 을 당협위원장",
            "제21대 대선 선대위 홍보부본부장"
        ],
        photo: "https://i.imgur.com/KD5O2X3.jpeg",
        district: "자",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-05",
        coords: [
            36.1055,
            128.4211
        ]
    },
    {
        name: "이동현",
        region: "경북 구미시",
        metropolitan: "경상북도",
        category: "기초의원",
        office: "구미시의회",
        status: "공천확정",
        district: "마",
        subRegion: "상모사곡동, 임오동",
        bio: [
            "구미시 마선거구 후보"
        ],
        photo: "",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-09",
        coords: [
            36.0978,
            128.4053
        ]
    },
    {
        name: "김성조",
        region: "경북 포항시",
        metropolitan: "경상북도",
        category: "기초의원",
        office: "포항시의회",
        status: "공천확정",
        district: "바",
        subRegion: "장량동",
        bio: [
            "제5-9대 포항시의회 의원 (5선)",
            "포항시 북구 당협위원장"
        ],
        photo: "https://i.imgur.com/fvcpYIy.png",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-09",
        coords: [
            36.0607,
            129.3654
        ]
    },
    {
        name: "김태근",
        region: "경북 포항시",
        metropolitan: "경상북도",
        category: "기초의원",
        office: "기초의원",
        age: 65,
        status: "예비후보",
        subRegion: "용흥동, 우창동",
        bio: [
            "전) 포항시 우창동 재향군인회 회장"
        ],
        photo: "",
        district: "다",
        sns: {
            fb: "https://www.facebook.com/profile.php?id=61587826521843"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-12",
        coords: [
            36.032,
            129.36
        ]
    },
    {
        name: "김태현",
        region: "경북 포항시",
        metropolitan: "경상북도",
        category: "기초의원",
        office: "기초의원",
        status: "공천확정",
        subRegion: "두호동, 양덕동, 환여동",
        bio: [
            "포항시 마선거구 후보"
        ],
        photo: "",
        district: "마",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-12",
        coords: [
            36.1042,
            129.3651
        ]
    },
    {
        name: "정진호",
        region: "경북 울진군",
        metropolitan: "경상북도",
        category: "기초의원",
        office: "기초의원 후보",
        status: "공천확정",
        subRegion: "북면, 죽변면",
        bio: [
            "울진군 나선거구 후보"
        ],
        photo: "",
        district: "나",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-01-26",
        coords: [
            37.0681,
            129.3836
        ]
    },
    {
        name: "이윤용",
        region: "인천 영종구",
        metropolitan: "인천광역시",
        category: "기초의원",
        office: "영종구의회",
        status: "공천확정",
        subRegion: "영종동, 영종1동, 운서동, 용유동",
        bio: [
            "영종구 *선거구 후보"
        ],
        photo: "",
        district: "",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-27",
        coords: [
            37.5034,
            126.4804
        ]
    },
    {
        name: "박현수",
        region: "경기 이천시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "이천시의회",
        status: "공천확정",
        subRegion: "증포동, 관고동, 신둔면, 백사면",
        bio: [
            "이천시 지역발전특별위 부위원장",
            "전) 공군 장교"
        ],
        photo: "",
        district: "가",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-27",
        coords: [
            37.2789,
            127.4431
        ]
    },
    {
        name: "황은재",
        region: "충북 청주시",
        metropolitan: "충청북도",
        category: "기초의원",
        office: "청주시의회",
        age: 25,
        status: "예비후보",
        subRegion: "가경동, 복대제2동",
        bio: [
            "개혁신당 흥덕구 지역발전특위 부위원장",
            "캠퍼스지부 충북대학교 지부장"
        ],
        photo: "",
        district: "차",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-27",
        coords: [
            36.6295,
            127.4619
        ]
    },
    {
        name: "김대성",
        region: "전북 익산시",
        metropolitan: "전북특별자치도",
        category: "기초의원",
        office: "익산시의회",
        status: "공천확정",
        subRegion: "남중동, 신동, 오산면",
        bio: [
            "익산시 다선거구 후보"
        ],
        photo: "",
        district: "다",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-02-27",
        coords: [
            35.9417,
            126.9491
        ]
    },
    {
        name: "고윤주",
        region: "서울 광진구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "광진구의회",
        status: "출마예정",
        subRegion: "중곡제1동, 중곡제2동, 중곡제3동, 중곡제4동",
        bio: [
            "광진구 가선거구 출마예정"
        ],
        photo: "",
        district: "가",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-02",
        coords: [
            37.5602,
            127.0826
        ]
    },
    {
        name: "강두현",
        region: "부산 동구",
        metropolitan: "부산광역시",
        category: "기초의원",
        office: "동구의회",
        status: "공천확정",
        subRegion: "초량제1동, 초량제2동, 초량제3동",
        bio: [
            "동구 가선거구 후보"
        ],
        photo: "",
        district: "가",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-05",
        coords: [
            35.1395,
            129.0439
        ]
    },
    {
        name: "강민수",
        region: "인천 제물포구",
        metropolitan: "인천광역시",
        category: "기초의원",
        office: "제물포구의회",
        age: 22,
        status: "예비후보",
        subRegion: "신포동, 연안동, 신흥동, 도원동, 율목동, 동인천동, 개항동",
        bio: [
            "법률사무소 송무직원"
        ],
        photo: "",
        district: "",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-05",
        coords: [
            37.4745,
            126.6177
        ]
    },
    {
        name: "박승민",
        region: "경기 평택시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "평택시의회",
        status: "공천확정",
        subRegion: "팽성읍, 고덕면, 신평동, 원평동, 고덕동",
        bio: [
            "평택시 사선거구 후보"
        ],
        photo: "",
        district: "사",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-05",
        coords: [
            36.9658,
            127.0861
        ]
    },
    {
        name: "김주우",
        region: "경기 시흥시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "시흥시의회",
        age: 41,
        status: "예비후보",
        subRegion: "대야동, 신천동, 은행동",
        bio: [
            "보드리봄 (주) 대표이사"
        ],
        photo: "",
        district: "가",
        sns: {
            fb: "https://www.facebook.com/JooWooKim",
            ig: "https://www.instagram.com/kimjoowoo/",
            blog: "https://blog.naver.com/kimjoowoo",
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-05",
        coords: [
            37.4069,
            126.8031
        ]
    },
    {
        name: "장준희",
        region: "경기 의정부시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "의정부시의회",
        status: "공천확정",
        subRegion: "의정부2동, 호원1동, 호원2동",
        bio: [
            "의정부시 라선거구 후보"
        ],
        photo: "",
        district: "라",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-05",
        coords: [
            37.7422,
            127.0445
        ]
    },
    {
        name: "김성준",
        region: "서울 강동구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "강동구의회",
        status: "공천확정",
        subRegion: "상일1동, 상일2동, 명일2동",
        bio: [
            "강동구 나선거구 후보"
        ],
        photo: "",
        district: "나",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-09",
        coords: [
            37.5527,
            127.1603
        ]
    },
    {
        name: "정민우",
        region: "서울 강동구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "강동구의회",
        status: "공천확정",
        subRegion: "천호1동, 천호3동",
        bio: [
            "서울시 대변인"
        ],
        photo: "",
        district: "라",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-09",
        coords: [
            37.5407,
            127.1295
        ]
    },
    {
        name: "유재우",
        region: "서울 성북구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "성북구의회",
        status: "공천확정",
        subRegion: "정릉1동, 정릉2동, 정릉3동, 정릉4동, 길음1동",
        bio: [
            "성북구 나선거구 후보"
        ],
        photo: "",
        district: "나",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-09",
        coords: [
            37.6082,
            127.0116
        ]
    },
    {
        name: "김민식",
        region: "인천 서해구",
        metropolitan: "인천광역시",
        category: "기초의원",
        office: "서해구의회",
        age: 37,
        status: "예비후보",
        subRegion: "가정1동, 가정2동, 가정3동, 신현원창동",
        bio: [
            "<span style='letter-spacing:-0.15em;'>현) 유비케어 산업안전보건위원회 근로자대표</span>",
            "루원호반베르디움 더 센트럴 동대표"
        ],
        photo: "https://i.imgur.com/Gy1fbgP.png",
        district: "다",
        sns: {
            fb: "#",
            ig: "https://www.instagram.com/minculcate_"
        },
        pledge: "https://policy.reformparty.kr/map?region_code=28&election_type=local_council&district_code=28%3A%EC%84%9C%EA%B5%AC%3A%EB%8B%A4%EC%84%A0%EA%B1%B0%EA%B5%AC",
        decl: "https://rallypoint.kr/board/politics-free/227363",
        dateAdded: "2026-03-09",
        coords: [
            37.5396,
            126.6718
        ]
    },
    {
        name: "이호민",
        region: "경기 고양시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "고양시의회",
        status: "공천확정",
        subRegion: "정발산동, 중산1동, 중산2동, 일산2동",
        bio: [
            "고양시 아선거구 후보"
        ],
        photo: "",
        district: "아",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-09",
        coords: [
            37.658,
            126.7824
        ]
    },

    {
        name: "이재범",
        region: "경기 평택시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "평택시의회",
        status: "공천확정",
        subRegion: "안중읍, 포승읍, 청북읍, 오성면, 현덕면",
        bio: [
            "평택시 바선거구 후보"
        ],
        photo: "",
        district: "바",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-09",
        coords: [
            36.998,
            126.8369
        ]
    },
    {
        name: "홍웅표",
        region: "경북 영주시",
        metropolitan: "경상북도",
        category: "기초의원",
        office: "영주시의회",
        status: "공천확정",
        subRegion: "휴천1동, 휴천2동",
        bio: [
            "영주시 마선거구 후보"
        ],
        photo: "",
        district: "마",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-09",
        coords: [
            36.8043,
            128.6178
        ]
    },
    {
        name: "양현성",
        region: "서울 강남구",
        metropolitan: "서울특별시",
        category: "기초의원",
        office: "강남구의회",
        age: 28,
        status: "예비후보",
        subRegion: "압구정동, 청담동",
        bio: [
            "개혁신당 강남구 지역발전특위 부위원장"
        ],
        photo: "",
        district: "나",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-12",
        coords: [
            37.5271,
            127.0355
        ]
    },
    {
        name: "권민찬",
        region: "부산 금정구",
        metropolitan: "부산광역시",
        category: "기초의원",
        office: "금정구의회",
        status: "공천확정",
        subRegion: "남산동, 구서2동",
        bio: [
            "금정구 라선거구 후보"
        ],
        photo: "",
        district: "라",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-12",
        coords: [
            35.2375,
            129.0927
        ]
    },
    {
        name: "박은강",
        region: "경기 과천시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "과천시의회",
        status: "공천확정",
        subRegion: "갈현동, 문원동, 부림동, 원문동",
        bio: [
            "과천시 나선거구 후보"
        ],
        photo: "",
        district: "나",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-12",
        coords: [
            37.4292,
            126.9879
        ]
    },
    {
        name: "정민재",
        region: "경기 고양시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "고양시의회",
        age: 26,
        status: "예비후보",
        subRegion: "일산1동, 탄현1동, 탄현2동",
        bio: [
            "개혁신당 고양시 지역발전특위 부위원장",
            "개혁신당 AI특위 위원장"
        ],
        photo: "",
        district: "차",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-12",
        coords: [
            37.665,
            126.7699
        ]
    },
    {
        name: "방서진",
        region: "경기 양평군",
        metropolitan: "경기도",
        category: "기초의원",
        office: "양평군의회",
        status: "공천확정",
        subRegion: "서종면, 양서면, 양평읍, 옥천면",
        bio: [
            "양평군 가선거구 후보"
        ],
        photo: "",
        district: "가",
        sns: {
            fb: "#"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-12",
        coords: [
            37.4914,
            127.4875
        ]
    },
    {
        name: "이세원",
        region: "경기 화성시",
        metropolitan: "경기도",
        category: "기초의원",
        office: "화성시의회",
        status: "출마예정",
        subRegion: "동탄7동, 동탄8동, 동탄9동",
        bio: [
            "화성시 마선거구 출마예정"
        ],
        photo: "",
        district: "마",
        sns: {
            fb: "#"
        },
        pledge: "https://policy.reformparty.kr/map?region_code=41&election_type=local_council&district_code=41%3A%ED%99%94%EC%84%B1%EC%8B%9C%3A%EB%A7%88%EC%84%A0%EA%B1%B0%EA%B5%AC",
        decl: "#",
        dateAdded: "2026-03-16",
        coords: [
            37.170497,
            127.102412
        ]
    },
    {
        name: "이왕국",
        region: "대구 중구",
        metropolitan: "대구광역시",
        category: "기초의원",
        office: "중구의원",
        status: "출마예정",
        district: "나",
        subRegion: "성내2동, 성내3동, 대신동, 남산2동, 남산3동, 남산4동",
        bio: [
            "중구 나선거구 출마예정"
        ],
        photo: "",
        sns: {
            fb: "#",
            ig: "https://www.instagram.com/leewanggug/"
        },
        pledge: "#",
        decl: "#",
        dateAdded: "2026-03-17",
        coords: [
            35.8687,
            128.5934
        ]
    },
];



window.candidates = candidates;


