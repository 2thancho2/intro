const PROJECTS = [
{
  id: "WelcometoPY", title: "WelcometoPY", subtitle: "Welcome to PY.", year: "Since 2025.03.21", color: "#ffd334", link: "https://welcometopy.netlify.app",
  content: [
    { type: "big", text: "WELCOME<br>TO PY." },
    { type: "stats", items: [{ label: "TYPE", value: "CLUB WEBSITE" }, { label: "STATUS", value: "LIVE" }, { label: "PLATFORM", value: "WEB" }] },
    { type: "title", text: "welcometopy" },
    { type: "text", html: `<strong>welcometopy</strong>는 치동중학교 코딩 동아리 <strong>'PY'</strong>의 부원 모집 및 신청을 위해 제작한 웹사이트입니다.<br><br>동아리 활동과 커리큘럼을 한곳에서 확인하고 <strong>편리하게 지원할 수 있는 것</strong>을 목표로 제작했습니다.` },
    { type: "marquee", text: "WELCOME TO PY — LEARN — CODE — BUILD — JOIN PY —" },
    { type: "split", image: "imagses/welcometopy/main.png", label: "01 / ABOUT", title: "Meet PY.", html: `PY가 어떤 동아리인지 쉽게 이해할 수 있도록 구성했습니다.<br><br><strong>PY에서 무엇을 배우고 어떤 활동을 하는지</strong> 확인할 수 있습니다.` },
    { type: "split", reverse: true, image: "imagses/welcometopy/about.png", label: "02 / CURRICULUM", title: "Learn. Code. Build.", html: `PY의 주요 활동과 <strong>커리큘럼</strong>을 웹사이트에서 미리 살펴볼 수 있습니다.` },
    { type: "split", image: "imagses/welcometopy/curriculum.png", label: "03 / APPLY", title: "Join PY.", html: `<strong>개인정보 이용 동의와 동아리 톡방 초대링크</strong>를 연결해 지원 과정을 최대한 간단하게 만들었습니다.` },
    { type: "number", value: "PY", label: "CHIDONG CODING CLUB" },
    { type: "tags", items: ["HTML", "CSS", "JavaScript", "Responsive Web", "Netlify"] },
    { type: "big", text: "START<br>WITH PY." },
    { type: "button", text: "VISIT WELCOME TO PY", url: "https://welcometopy.netlify.app" }
  ]
},
 
{
    id: "3than", title: "삼든이", subtitle: "Discord Multi-Function Bot", year: "Since 2026.03.01", color: "#5865F2", link: "https://discord.com/oauth2/authorize?client_id=1462335234832994508&permissions=8&integration_type=0&scope=bot",
    content: [
        { type: "big", text: "ONE BOT.<br>MORE FUN." },
        { type: "stats", items: [{ label: "TYPE", value: "BOT" }, { label: "STATUS", value: "Ongoing Support" }, { label: "PLATFORM", value: "DISCORD" }] },
        { type: "title", text: "삼든이" },
        { type: "text", html: `<strong>삼든이(3than)</strong>는 디스코드에서 사용할 수 있는 다기능 봇입니다.<br><br>기존 디스코드 봇을 사용하면서 원하는 기능을 한곳에서 모두 사용할 수 있는 봇을 찾기 어려워 <strong>직접 만들어 보기 시작한 프로젝트</strong>입니다.<br><br>서버 안에서 사용할 수 있는 경제 시스템부터 미니게임, 음악 재생, 학교 정보와 각종 편의 기능까지 하나의 봇에 담았습니다.` },
        { type: "imageFull", src: "imagses/3than/main.png", caption: "삼든이 — Discord Multi-Function Bot" },
        { type: "marquee", text: "ECONOMY — GAME — MUSIC — SCHOOL — UTILITY — 3THAN —" },
        { type: "split", image: "imagses/3than/economy.png", label: "01 / ECONOMY", title: "Make it. Spend it. Risk it.", html: `삼든이에는 서버 안에서 사용할 수 있는 <strong>자체 경제 시스템</strong>이 있습니다.<br><br>출석이나 미션 등을 통해 돈을 얻고, 다른 사용자에게 송금하거나 자신의 잔액과 순위를 확인할 수 있습니다.<br><br><strong>/돈줘 · /출첵 · /재난지원금 · /송금 · /잔액 · /내돈 · /랭킹 · /일일미션</strong>` },
        { type: "split", reverse: true, image: "imagses/3than/games.png", label: "02 / GAMES", title: "Take your chances.", html: `모은 돈을 활용하거나 친구들과 바로 즐길 수 있는 다양한 <strong>미니게임</strong>도 구현했습니다.<br><br>간단한 운 게임부터 여러 방식의 게임까지 디스코드 채팅 안에서 바로 플레이할 수 있습니다.<br><br><strong>/주사위 · /가위바위보 · /홀짝 · /슬롯 · /슬롯배팅 · /블랙잭 · /크래시 · /마인즈 · /경마 · /끝말잇기</strong>` },
        { type: "split", image: "imagses/3than/music.png", label: "03 / MUSIC", title: "Play it together.", html: `음성 채널에서는 삼든이를 이용해 <strong>음악을 재생하고 대기열을 관리</strong>할 수 있습니다.<br><br>음악을 추가하고 다음 곡으로 넘어가거나, 필요할 때 대기열을 초기화할 수 있도록 구성했습니다.<br><br><strong>/재생 · /대기열 · /스킵 · /대기열초기화</strong>` },
        { type: "split", reverse: true, image: "imagses/3than/school.png", label: "04 / SCHOOL", title: "School, inside Discord.", html: `디스코드를 사용하다가 학교 정보를 확인하기 위해 다른 서비스를 찾아갈 필요가 없도록 <strong>학교 관련 기능</strong>도 추가했습니다.<br><br>급식과 시간표를 확인하고 필요한 학교 정보를 디스코드 안에서 바로 조회할 수 있습니다.<br><br><strong>/급식 · /시간표 · /학교정보</strong>` },
        { type: "split", image: "imagses/3than/utility.png", label: "05 / UTILITY", title: "And more.", html: `핵심 기능 외에도 서버에서 유용하게 사용할 수 있는 여러 <strong>편의 기능</strong>을 함께 제공합니다.<br><br>투표를 만들고 마감하거나 TTS를 사용하고, 봇 초대와 기타 기능도 명령어 하나로 사용할 수 있습니다.<br><br><strong>/투표 · /투표마감 · /tts · /초대 · /삼든이 · /일든이</strong>` },
        { type: "quote", text: "Code what's missing.", author: "3than" },
        { type: "title", text: "Commands" },
        { type: "columns",
        left: `<strong>ECONOMY & GAME</strong><br><br>/돈줘<br>/출첵<br>/재난지원금<br>/주사위<br>/슬롯배팅<br>/가위바위보<br>/송금<br>/잔액<br>/내돈<br>/랭킹<br>/홀짝<br>/블랙잭<br>/크래시<br>/마인즈<br>/마인즈현금화<br>/경마<br>/파산선언<br>/일일미션`,
        right: `<strong>MUSIC & UTILITY</strong><br><br>/삼든이<br>/일든이<br>/재생<br>/대기열<br>/스킵<br>/대기열초기화<br>/초대<br>/투표마감<br>/투표<br>/끝말잇기<br>/슬롯<br>/급식<br>/시간표<br>/학교정보<br>/tts` },
        { type: "tags", items: ["Python", "discord.py", "Discord API", "yt-dlp", "FFmpeg"] },
        { type: "marquee", text: "PLAY — EARN — LISTEN — VOTE — COMPETE — TOGETHER —" },
        { type: "big", text: "ADD<br>3THAN." },
        { type: "button", text: "ADD TO DISCORD", url: "https://discord.com/oauth2/authorize?client_id=1462335234832994508&permissions=8&integration_type=0&scope=bot" }
    ]
},

{
  id: "beckio", title: "beck.io", subtitle: "FPS, directly in your browser.", year: "2026.05.30", icon: "fa-solid fa-crosshairs", color: "#00E676", link: "https://beckio.kro.kr",
  content: [
    { type: "big", text: "READY.<br>AIM. PLAY." },
    { type: "stats", items: [{ label: "TYPE", value: "3D FPS<br>GAME" }, { label: "PLATFORM", value: "WEB" }, { label: "GENRE", value: "FPS" }] },
    { type: "title", text: "beck.io" },
    { type: "text", html: `<strong>beck.io</strong>는 별도의 설치 없이 웹 브라우저에서 바로 플레이할 수 있도록 제작한 <strong>3D FPS 게임</strong>입니다.<br><br>웹이라는 환경에서도 FPS 특유의 빠른 움직임과 전투를 즐길 수 있도록 구현했으며, <strong>그래픽 표현과 전투 판정 로직</strong>을 중심으로 개발했습니다.` },
    { type: "imageFull", src: "imagses/beckio/main.png", caption: "beck.io — 3D FPS in your browser" },
    { type: "marquee", text: "RUN — AIM — SHOOT — RELOAD — SURVIVE — BECK.IO —" },
    { type: "split", image: "imagses/beckio/gameplay.png", label: "01 / GAMEPLAY", title: "FPS. On the web.", html: `다운로드나 별도의 프로그램 설치 없이 <strong>브라우저를 실행하는 것만으로 바로 플레이</strong>할 수 있습니다.<br><br>이동과 조준, 사격 등 FPS의 기본적인 플레이 요소를 웹 환경에서 직접 구현했습니다.` },
    { type: "split", reverse: true, image: "imagses/beckio/combat.png", label: "02 / COMBAT", title: "Aim. Shoot. Hit.", html: `FPS에서 중요한 <strong>사격과 판정 시스템</strong>을 구현하는 데 집중했습니다.<br><br>플레이어의 조준과 사격이 실제 게임 속 전투로 자연스럽게 이어질 수 있도록 판정 로직을 구성하고, 직접 플레이하며 동작을 조정했습니다.` },
    { type: "split", image: "imagses/beckio/ai.png", label: "03 / AI BATTLE", title: "Fight against AI.", html: `현재 버전에서는 플레이어가 <strong>AI 캐릭터들과 대전하는 방식</strong>으로 게임이 진행됩니다.<br><br>AI가 존재하는 전장에서 직접 이동하고 전투하며 FPS의 핵심 게임플레이를 즐길 수 있도록 구성했습니다.` },
    { type: "split", reverse: true, image: "imagses/beckio/future.png", label: "04 / NEXT", title: "From AI to players.", html: `초기 버전은 AI와 플레이어가 대전하는 형태로 제작했지만, 이후에는 <strong>플레이어끼리 직접 대전할 수 있는 멀티플레이</strong>로 확장하는 것을 목표로 했습니다.<br><br>지정된 ID를 통해 같은 게임에 접속하고, 웹에서 다른 플레이어와 함께 전투할 수 있는 형태로 발전시키는 것을 계획했습니다.` },
    { type: "quote", text: "start playing right on the web.", author: "beck.io" },
    { type: "tags", items: ["HTML", "CSS", "JavaScript", "3D", "Three.js", "FPS", "Web Game"] },
    { type: "marquee", text: "NO DOWNLOAD — NO INSTALL — JUST PLAY —" },
    { type: "big", text: "ENTER<br>THE GAME." },
    { type: "links", items: [
                { text: "PLAY BECK.IO", url: "https://beckio.kro.kr/" },
                { text: "GITHUB REPO", url: "https://github.com/2thancho2/Beck.io" }
            ]
    }
  ]
},

{
  id: "2than-online-judge", title: "2than Online Judge", subtitle: "Learn Python. Solve Problems.", year: "Since 2025.08.27", icon: "fa-solid fa-code", color: "#3776AB", link: "https://2than.kro.kr/",
  content: [
    { type: "big", text: "CODE.<br>SUBMIT. SOLVE." },
    { type: "stats", items: [{ label: "TYPE", value: "ONLINE JUDGE" }, { label: "FOR", value: "PYTHON" }, { label: "PLATFORM", value: "WEB" }] },
    { type: "title", text: "2than Online Judge" },
    { type: "text", html: `<strong>2than Online Judge</strong>는 PY 학생들을 위해 제작한 <strong>온라인 알고리즘 문제 풀이 및 채점 시스템</strong>입니다.<br><br>웹에서 문제를 확인하고 직접 코드를 작성해 제출하면, 웹에서 제출된 코드를 실행하고 <strong>테스트 케이스를 기준으로 결과를 판정</strong>합니다.<br><br>기초부터 단계별로 문제를 풀어나가며 파이썬 문법과 문제 해결 능력을 함께 연습할 수 있도록 구성했습니다.` },
    { type: "imageFull", src: "imagses/oj/main.png", caption: "2than Online Judge — Python Online Judge" },
    { type: "marquee", text: "THINK — CODE — SUBMIT — JUDGE — SOLVE —" },
    { type: "split", image: "imagses/oj/problems.png", label: "01 / PROBLEMS", title: "Start from the basics.", html: `파이썬을 처음 배우는 학생도 차근차근 문제를 해결할 수 있도록 <strong>단계별 문제 풀이 방식</strong>으로 구성했습니다.<br><br>문제의 조건을 읽고 직접 해결 방법을 생각한 뒤 코드를 작성하면서 파이썬과 알고리즘을 연습할 수 있습니다.` },
    { type: "split", reverse: true, image: "imagses/oj/editor.png", label: "02 / CODE", title: "Write your solution.", html: `문제를 확인한 뒤 자신의 해결 방법을 <strong>Python 코드로 작성하고 제출</strong>할 수 있습니다.<br><br>단순히 정답을 확인하는 것이 아니라, 직접 코드를 작성하고 실행 결과를 확인하는 과정을 통해 문제 해결 능력을 키우는 것을 목표로 했습니다.` },
    { type: "split", image: "imagses/oj/judge.png", label: "03 / JUDGE", title: "Submit. Then judge.", html: `작성한 코드를 제출하면 웹에서 코드를 실행하고, 각 문제에 설정된 <strong>테스트 케이스와 실행 결과를 비교</strong>합니다.<br><br>이를 통해 사용자가 제출한 코드가 문제의 조건을 올바르게 만족하는지 자동으로 판정할 수 있도록 채점 시스템을 구현했습니다.` },
    { type: "split", reverse: true, image: "imagses/oj/result.png", label: "04 / RESULT", title: "Accepted?", html: `채점이 끝나면 사용자는 자신의 제출 결과를 확인할 수 있습니다.<br><br>정답 여부를 확인하고 코드를 다시 수정해 제출하는 과정을 반복하며, <strong>스스로 문제를 해결하는 경험</strong>을 쌓을 수 있도록 구성했습니다.` },
    { type: "number", value: "PY", label: "BUILT FOR PYTHON LEARNERS" },
    { type: "title", text: "How it works." },
    { type: "columns",
      left: `<strong>01 — SOLVE</strong><br><br>문제 확인<br>↓<br>해결 방법 생각하기<br>↓<br>Python 코드 작성`,
      right: `<strong>02 — JUDGE</strong><br><br>코드 제출<br>↓<br>웹에서 실행<br>↓<br>테스트 케이스 비교<br>↓<br>채점 결과 반환` },
    { type: "quote", text: "Read, Think, Solve.", author: "2than Online Judge" },
    { type: "tags", items: ["Python", "Online Judge", "Algorithm", "Code Execution", "Web"] },
    { type: "marquee", text: "WRITE CODE — RUN — TEST — ACCEPTED — NEXT PROBLEM —" },
    { type: "big", text: "SOLVE<br>THE NEXT ONE." },
    { type: "links", items: [
                { text: "VISIT EOJ", url: "https://2than.kro.kr/" },
                { text: "GITHUB REPO", url: "https://github.com/2thancho2/eoj" }
            ]
    }
  ]
},

{
  id: "kim-korean-translator", title: "kim-korean translator", subtitle: "Korean, but a little different.", year: "Since 2026.04.28", icon: "fa-solid fa-language", color: "#f2b65a", link: "https://kimkorean.netlify.app/",
  content: [
    { type: "big", text: "KOREAN.<br>BUT KIM." },
    { type: "stats", items: [{ label: "TYPE", value: "TRANSLATOR" }, { label: "LANGUAGE", value: "KIM-KOREAN" }, { label: "PLATFORM", value: "WEB" }] },
    { type: "title", text: "김민종음 번역기" },
    { type: "text", html: `<strong>김민종음 번역기</strong>는 친구들과 재미있게 사용할 수 있도록 제작한 독창적인 <strong>언어 변환 웹 애플리케이션</strong>입니다.<br><br>입력한 한글 문장을 특정 규칙과 알고리즘에 따라 분석하고, 2026 치동중학교 전교회장 김민종 씨가 만든 <strong>'김민종음'</strong>으로 변환합니다.<br><br>친구들 사이에서 사용하던 독특한 표현 방식을 실제로 동작하는 웹 번역기로 구현한 프로젝트입니다.` },
    { type: "imageFull", src: "imagses/kim-korean/main.png", caption: "kim-korean translator — 김민종음 번역기" },
    { type: "marquee", text: "TYPE — TRANSLATE — KIM-KOREAN — TRANSLATE — REPEAT —" },
    { type: "split", image: "imagses/kim-korean/input.png", label: "01 / INPUT", title: "Type in Korean.", html: `사용법은 간단합니다.<br><br>번역하고 싶은 <strong>한글 문장</strong>을 입력하면 입력된 문자열을 분석하여 김민종음으로 변환할 준비를 합니다.<br><br>복잡한 설정 없이 웹에서 바로 사용할 수 있도록 간단한 인터페이스로 구성했습니다.` },
    { type: "split", reverse: true, image: "imagses/kim-korean/translate.png", label: "02 / TRANSLATE", title: "Korean becomes Kim.", html: `단순히 정해진 단어를 바꾸는 방식이 아니라, 입력된 한글을 <strong>김민종음의 변환 규칙에 따라 처리</strong>합니다.<br><br>정해진 규칙을 코드로 구현하여 다양한 한글 입력을 자동으로 변환할 수 있도록 만들었습니다.` },
    { type: "split", image: "imagses/kim-korean/result.png", label: "03 / RESULT", title: "Welcome to Kim-Korean.", html: `변환된 결과는 입력에 따라 바로 확인할 수 있습니다.<br><br>친구들끼리 사용하던 언어를 웹 서비스로 옮겨, 누구나 문장을 입력하고 <strong>김민종음으로 바꿔보는 재미</strong>를 느낄 수 있도록 제작했습니다.` },
    { type: "title", text: "How it works." },
    { type: "columns",
      left: `<strong>01 — INPUT</strong><br><br>한글 문장 입력<br>↓<br>입력 문자열 분석<br>↓<br>변환 규칙 적용`,
      right: `<strong>02 — OUTPUT</strong><br><br>김민종음으로 치환<br>↓<br>변환 결과 생성<br>↓<br>화면에 결과 표시` },
    { type: "quote", text: "Real TRANSLATOR", author: "kim-korean translator" },
    { type: "divider" },
    { type: "title", text: "Still translating." },
    { type: "text", html: `현재 번역 알고리즘을 계속 개선하고 있습니다.<br><br>특히 <strong>단일 자음이 포함된 입력의 번역 문제</strong>와 일부 <strong>받침 해석 과정에서 발생하는 오류</strong>를 수정하고 있으며, 다양한 형태의 한글 입력에서도 자연스럽게 동작하도록 변환 규칙을 보완하고 있습니다.` },
    { type: "tags", items: ["HTML", "CSS", "JavaScript", "Korean", "Algorithm", "Translator"] },
    { type: "marquee", text: "한글 — 김민종음 — 한글 — 김민종음 —" },
    { type: "big", text: "TRANSLATE<br>TO KIM-KOREAN." },
    { type: "links", items: [
                { text: "VISIT TRANSLATER", url: "https://kimkorean.netlify.app/" },
                { text: "GITHUB REPO", url: "https://github.com/2thancho2/kim-korean" }
            ]
    }
  ]
},

{
  id: "online-karaoke", title: "Online Karaoke", subtitle: "Sing anywhere, right in your browser.", year: "Since 2026.05.17", icon: "fa-solid fa-microphone", color: "#00F3FF", link: "https://onlinekaraoke.kro.kr/",
  content: [
    { type: "big", text: "SING.<br>ANYWHERE." },
    { type: "stats", items: [{ label: "TYPE", value: "KARAOKE" }, { label: "PLATFORM", value: "WEB" }, { label: "SCORE", value: "Ongoing Support" }] },
    { type: "title", text: "온라인 노래방" },
    { type: "text", html: `<strong>Online Karaoke</strong>는 코인노래방에 가지 않아도 웹에서 자유롭게 반주에 맞춰 노래를 부를 수 있도록 제작한 <strong>온라인 노래방 서비스</strong>입니다.<br><br>별도의 프로그램을 설치할 필요 없이 원하는 곡을 선택하고 바로 노래를 시작할 수 있도록 제작했습니다.<br><br>서비스에서 사용하는 <strong>노래방 영상을 직접 제작하여 업로드</strong>하고, 누구나 쉽게 접근해 즐길 수 있는 웹 노래방을 목표로 개발했습니다.` },
    { type: "imageFull", src: "imagses/karaoke/main.png", caption: "Online Karaoke — Sing directly from your browser" },
    { type: "marquee", text: "CHOOSE — PLAY — SING — SCORE — REPEAT —" },
    { type: "split", image: "imagses/karaoke/select.png", label: "01 / CHOOSE", title: "Choose your song.", html: `등록된 곡 중 원하는 노래를 골라 <strong>웹에서 바로 노래방을 시작</strong>할 수 있습니다.<br><br>누구나 어렵지 않게 원하는 곡을 찾고 바로 노래를 부를 수 있도록 간단한 사용 흐름을 중심으로 구성했습니다.` },
    { type: "split", reverse: true, image: "imagses/karaoke/player.png", label: "02 / SING", title: "Turn up the volume.", html: `곡을 선택하면 직접 제작한 <strong>노래방 반주 영상</strong>을 재생하며 노래를 부를 수 있습니다.<br><br>별도의 앱이나 프로그램 없이 브라우저만으로 노래방을 즐길 수 있도록 구현했습니다.` },
    { type: "split", image: "imagses/karaoke/score.png", label: "03 / SCORE", title: "How was your song?", html: `노래가 끝난 뒤에는 <strong>곡 점수</strong>를 확인할 수 있습니다.<br><br>현재 버전의 점수는 랜덤으로 표시되며, 실제 노래를 분석해 점수를 계산하는 <strong>AI 기반 점수 측정 기능</strong>을 개발하고 있습니다.` },
    { type: "title", text: "From video to karaoke." },
    { type: "columns",
      left: `<strong>01 — CONTENT</strong><br><br>노래 선정<br>↓<br>노래방 영상 직접 제작<br>↓<br>웹 서비스에 곡 등록`,
      right: `<strong>02 — PLAY</strong><br><br>원하는 곡 선택<br>↓<br>반주 영상 재생<br>↓<br>노래 부르기<br>↓<br>점수 확인` },
    { type: "quote", text: "Code what's missing.", author: "Online Karaoke" },
    { type: "divider" },
    { type: "title", text: "A smarter score." },
    { type: "text", html: `현재 제공되는 점수 시스템은 <strong>랜덤으로 점수를 표시하는 방식</strong>입니다.<br><br>앞으로는 사용자의 노래를 분석하여 실제 결과를 바탕으로 점수를 측정할 수 있도록 <strong>AI 점수 측정 기능</strong>을 개발하고 있습니다.` },
    { type: "tags", items: ["HTML", "CSS", "JavaScript", "Karaoke", "Video", "Web"] },
    { type: "marquee", text: "YOUR SONG — YOUR STAGE — ANYWHERE —" },
    { type: "big", text: "YOUR ROOM.<br>YOUR STAGE." },
    { type: "text", html: `원하는 곡이 아직 등록되어 있지 않다면 <strong>Instagram DM을 통해 곡 추가를 요청</strong>할 수 있습니다.` },
    { type: "links", items: [
                { text: "VISIT ONLINE-KARAOKE", url: "https://onlinekaraoke.kro.kr/" },
                { text: "GITHUB REPO", url: "https://github.com/2thancho2/sing" }
            ]
    }
  ]
},

{
  id: "duoshao", title: "DuoShao", subtitle: "DuoShao — Study for the perfect score.", year: "Since 2026.06.21", icon: "fa-solid fa-graduation-cap", color: "#58cc02", link: "https://duongoringo.kro.kr",
  content: [
    { type: "big", text: "STUDY.<br>REMEMBER. 100." },
    { type: "stats", items: [{ label: "TYPE", value: "STUDY TOOL" }, { label: "TARGET", value: "EXAM" }, { label: "PLATFORM", value: "WEB" }] },
    { type: "title", text: "듀오사오" },
    { type: "text", html: `<strong>듀오샤오(DuoShao / Duongoringo)</strong>는 학교 시험과 각종 테스트에서 만점을 목표로 하는 학생들을 위해 제작한 <strong>맞춤형 시험 대비 학습 사이트</strong>입니다.<br><br>단순히 내용을 읽는 것에서 끝나는 것이 아니라, 핵심 내용을 직접 확인하고 틀린 부분을 다시 학습하는 과정을 통해 <strong>효율적으로 암기하고 반복 학습</strong>할 수 있도록 제작했습니다.<br><br>특히 암기가 중요한 과목을 중심으로 시험 전 부족한 부분을 빠르게 찾아 집중적으로 공부할 수 있도록 구성했습니다.` },
    { type: "imageFull", src: "imagses/duongoringo/main.png", caption: "똥고링고 — 시험 대비 맞춤형 학습 도구" },
    { type: "marquee", text: "LEARN — CHECK — WRONG — REVIEW — REMEMBER — 100 —" },
    { type: "split", image: "imagses/duongoringo/subject.png", label: "01 / SUBJECT", title: "Choose what to study.", html: `시험을 준비할 <strong>교과서와 과목</strong>을 선택하고 필요한 학습 내용을 집중적으로 공부할 수 있습니다.<br><br>여러 내용을 무작정 반복하기보다, 시험 범위에 맞는 내용을 선택해 학습할 수 있도록 구성했습니다.` },
    { type: "split", reverse: true, image: "imagses/duongoringo/keyword.png", label: "02 / KEYWORD", title: "Remember what matters.", html: `암기가 중요한 내용에서는 <strong>핵심 키워드를 중심으로 기억하고 있는 내용을 확인</strong>할 수 있습니다.<br><br>시험에서 꼭 기억해야 할 내용을 반복해서 확인하면서 부족한 부분을 찾아낼 수 있도록 만들었습니다.` },
    { type: "split", image: "imagses/duongoringo/wrong.png", label: "03 / WRONG ANSWERS", title: "Wrong means one more chance.", html: `학습 과정에서 틀렸거나 제대로 기억하지 못한 내용은 <strong>오답 노트를 통해 다시 확인</strong>할 수 있습니다.<br><br>이미 알고 있는 내용보다 부족한 부분을 다시 학습하여 시험 전 복습 시간을 더욱 효율적으로 사용할 수 있도록 했습니다.` },
    { type: "split", reverse: true, image: "imagses/duongoringo/review.png", label: "04 / REPEAT", title: "Repeat until it sticks.", html: `한 번 보고 끝내는 학습이 아니라 <strong>확인과 반복을 통해 내용을 기억하는 학습 방식</strong>을 웹으로 구현했습니다.<br><br>학습하고, 기억을 확인하고, 틀린 내용을 다시 공부하는 과정을 반복하며 시험에 필요한 내용을 익힐 수 있습니다.` },
    { type: "title", text: "Study cycle." },
    { type: "columns",
      left: `<strong>01 — LEARN</strong><br><br>과목 선택<br>↓<br>시험 범위 학습<br>↓<br>핵심 키워드 암기`,
      right: `<strong>02 — REVIEW</strong><br><br>기억한 내용 확인<br>↓<br>부족한 내용 발견<br>↓<br>오답 노트 복습<br>↓<br>다시 도전` },
    { type: "quote", text: "Repeat and Repeat", author: "DuoShao" },
    { type: "divider" },
    { type: "title", text: "Built for the next exam." },
    { type: "text", html: `듀오샤오는 실제 시험 준비에 사용할 수 있도록 <strong>교과서와 과목별 학습 콘텐츠</strong>를 계속 추가하고 있습니다.<br><br>필요한 교과서 또는 과목의 추가를 원하는 경우 <strong>Instagram DM을 통해 요청</strong>할 수 있습니다.` },
    { type: "tags", items: ["Education", "Study", "Exam", "Memorization", "Wrong Note", "Web"] },
    { type: "marquee", text: "STUDY — TEST — REVIEW — REPEAT — PERFECT SCORE —" },
    { type: "big", text: "READY<br>FOR 100?" },
    { type: "links", items: [
                { text: "VISIT DUOSHAO", url: "https://duongoringo.kro.kr" },
                { text: "GITHUB REPO", url: "https://github.com/2thancho2/Duo" }
            ]
    }
  ]
},

{
  id: "bustyping", title: "BusTyping", subtitle: "Type your way through the city.", year: "Since 2026.07.19", icon: "fa-solid fa-bus", color: "#4f8cff", link: "https://2thancho2.github.io/bustyping/",
  content: [
    { type: "big", text: "TYPE.<br>RIDE. ARRIVE." },
    { type: "stats", items: [{ label: "TYPE", value: "TYPING GAME" }, { label: "THEME", value: "BUS" }, { label: "PLATFORM", value: "WEB" }] },
    { type: "title", text: "BusTyping" },
    { type: "text", html: `<strong>BusTyping</strong>은 버스를 타고 이동하는 경험과 타자 측정을 결합한 <strong>웹 타자 측정 사이트</strong>입니다.<br><br>화면에 나타나는 <strong>버스 정류장 이름을 순서대로 입력</strong>하면서 실제 버스 노선을 따라 여행하는 듯한 느낌과 함께 자신의 타자 실력을 확인할 수 있도록 제작했습니다.<br><br>Instagram의 한 개발자가 제작한 <strong>MetroTyping</strong>을 모티브로 제작했으며, 원작자의 동의를 얻어 수정한 뒤 배포했습니다.` },
    { type: "imageFull", src: "imagses/bustyping/main.png", caption: "BusTyping — Type your way through the bus route" },
    { type: "marquee", text: "TYPE — NEXT STOP — RIDE — TYPE — NEXT STOP —" },
    { type: "split", image: "imagses/bustyping/route.png", label: "01 / ROUTE", title: "Choose your route.", html: `원하는 <strong>버스 노선</strong>을 선택하면 해당 노선의 정류장들을 따라 타자 측정을 시작할 수 있습니다.<br><br>단순한 단어나 문장을 입력하는 대신, 실제 버스 노선과 정류장을 활용해 타자 연습에 새로운 재미를 더했습니다.` },
    { type: "split", reverse: true, image: "imagses/bustyping/typing.png", label: "02 / TYPE", title: "Type the next stop.", html: `화면에 표시되는 <strong>정류장 이름을 직접 입력</strong>하며 다음 정류장으로 이동합니다.<br><br>정류장을 하나씩 통과하는 흐름을 통해 단순한 타자 측정을 넘어 <strong>버스를 타고 이동하는 듯한 경험</strong>을 느낄 수 있도록 구성했습니다.` },
    { type: "split", image: "imagses/bustyping/result.png", label: "03 / RESULT", title: "How fast was the ride?", html: `입력 과정에서 사용자의 타자를 측정하여 자신의 기록을 확인할 수 있도록 구현했습니다.<br><br>현재 <strong>타수 측정 기능에서 일부 오류가 발생</strong>하고 있어 환경이나 입력에 따라 실제 타수가 정확하게 측정되지 않을 수 있으며, 해당 문제를 수정하고 있습니다.` },
    { type: "title", text: "From stop to stop." },
    { type: "columns",
      left: `<strong>01 — START</strong><br><br>버스 노선 선택<br>↓<br>타자 측정 시작<br>↓<br>다음 정류장 확인`,
      right: `<strong>02 — RIDE</strong><br><br>정류장 이름 입력<br>↓<br>다음 정류장으로 이동<br>↓<br>반복 입력<br>↓<br>타자 기록 확인` },
    { type: "quote", text: "A Small Trip by Bus", author: "BusTyping" },
    { type: "divider" },
    { type: "title", text: "Inspired by MetroTyping." },
    { type: "text", html: `BusTyping은 한 Instagram 사용자가 개발한 <strong>MetroTyping을 모티브</strong>로 시작한 프로젝트입니다.<br><br>지하철역을 활용한 원작의 아이디어에서 영감을 받아 <strong>버스 노선과 정류장을 활용하는 방식</strong>으로 수정했으며, 원작자의 동의를 얻은 뒤 배포했습니다.` },
    { type: "divider" },
    { type: "title", text: "More routes." },
    { type: "text", html: `다양한 지역과 노선에서 BusTyping을 즐길 수 있도록 버스 노선을 추가할 수 있습니다.<br><br>원하는 <strong>버스 노선 추가 요청은 Instagram DM</strong>을 통해 문의할 수 있습니다.` },
    { type: "tags", items: ["Typing", "Bus", "Web", "Game", "Transportation"] },
    { type: "marquee", text: "NEXT STOP — TYPE — NEXT STOP — TYPE —" },
    { type: "big", text: "NEXT STOP?<br>START TYPING." },
    { type: "links", items: [
                { text: "VISIT BUSTYPING", url: "https://2thancho2.github.io/bustyping/" },
                { text: "GITHUB REPO", url: "https://github.com/2thancho2/bus" }
            ]
    }
  ]
},

{
  id: "listen-to", title: "Listen to", subtitle: "Music, judged by listeners.", year: "Since 2026.08.09", icon: "fa-solid fa-headphones", color: "#B99A73", link: "https://listento.kro.kr",
  content: [
    { type: "big", text: "LISTEN.<br>DISCUSS. RATE." },
    { type: "stats", items: [{ label: "TYPE", value: "MUSIC REVIEW" }, { label: "REVIEW", value: "HUMAN" }, { label: "GENRE", value: "ALL" }] },
    { type: "title", text: "Listen to" },
    { type: "text", html: `<strong>Listen to</strong>는 장르를 가리지 않고 선발된 리스너들이 직접 음악을 듣고 토의하여 <strong>등급과 평가를 결정하는 음악 평가 사이트</strong>입니다.<br><br>단순한 알고리즘이나 자동화된 기준으로 음악을 분류하는 대신, 실제로 곡과 앨범을 끝까지 감상한 사람들의 <strong>논의와 판단을 바탕으로 평가</strong>합니다.<br><br>수치만으로는 놓치기 쉬운 음악의 맥락과 표현까지 사람의 귀로 듣고 이야기하는 것이 Listen to의 방식입니다.` },
    { type: "imageFull", src: "imagses/listento/main.png", caption: "Listen to — Music reviewed by real listeners" },
    { type: "marquee", text: "LISTEN — THINK — DISCUSS — RATE — REVIEW —" },
    { type: "split", image: "imagses/listento/music.png", label: "01 / LISTEN", title: "Listen first.", html: `평가는 음악을 <strong>직접 듣는 것</strong>에서 시작합니다.<br><br>장르나 인지도만으로 먼저 판단하지 않고, 리스너들이 실제 곡과 앨범을 감상한 뒤 각자의 의견과 평가를 정리합니다.` },
    { type: "split", reverse: true, image: "imagses/listento/discuss.png", label: "02 / DISCUSS", title: "More than one opinion.", html: `한 사람의 감상만으로 평가를 결정하지 않습니다.<br><br>선발된 리스너들이 음악에 대한 각자의 생각을 공유하고 <strong>서로 다른 관점과 의견을 토의</strong>하며 최종 평가를 만들어갑니다.` },
    { type: "split", image: "imagses/listento/rating.png", label: "03 / RATE", title: "Give it a grade.", html: `감상과 토의를 거친 음악은 리스너들의 판단을 바탕으로 <strong>등급과 평가</strong>가 결정됩니다.<br><br>단순히 숫자 하나를 매기는 것보다 음악이 가진 특징과 표현을 함께 살펴보고 그 결과를 하나의 평가로 정리합니다.` },
    { type: "split", reverse: true, image: "imagses/listento/review.png", label: "04 / REVIEW", title: "The story behind the score.", html: `Listen to에서는 평가 결과뿐만 아니라 음악을 어떻게 들었는지도 중요하게 다룹니다.<br><br>앨범과 곡에 대한 <strong>리스너들의 총평과 리뷰</strong>를 통해 왜 이러한 평가가 나왔는지 함께 확인할 수 있도록 구성했습니다.` },
    { type: "title", text: "How we rate." },
    { type: "columns",
      left: `<strong>01 — LISTEN</strong><br><br>평가할 음악 선정<br>↓<br>리스너 직접 감상<br>↓<br>각자의 의견 정리`,
      right: `<strong>02 — RATE</strong><br><br>리스너 토의<br>↓<br>의견과 평가 종합<br>↓<br>등급 결정<br>↓<br>리뷰 공개` },
    { type: "number", value: "100%", label: "HUMAN LISTENERS" },
    { type: "quote", text: "Listen and talk directly", author: "Listen to" },
    { type: "divider" },
    { type: "title", text: "Human ears, human judgment." },
    { type: "text", html: `자동화된 필터와 단순한 수치만으로는 음악의 모든 부분을 설명하기 어렵습니다.<br><br>Listen to는 음악 속의 미묘한 표현과 맥락, 앨범 전체에서 느껴지는 흐름까지 <strong>실제로 음악을 들은 사람들의 귀와 판단</strong>으로 살펴봅니다.<br><br>애매한 기준이 아닌, 실제 감상과 논의를 거친 음악 평가를 기록하는 것이 목표입니다.` },
    { type: "tags", items: ["Music", "Review", "Rating", "Album", "Listener", "Community"] },
    { type: "marquee", text: "NO ALGORITHM — JUST LISTENERS — JUST MUSIC —" },
    { type: "big", text: "JUST<br>LISTEN TO." },
    { type: "text", html: `Listen to에 대한 문의 또는 <strong>리스너 지원</strong>은 Instagram <strong>@listento._.official</strong>을 통해 받고 있습니다.` },
    { type: "links", items: [
                { text: "VISIT LISTEN-TO", url: "https://listento.kro.kr" },
                { text: "GITHUB REPO", url: "https://github.com/2thancho2/listento" },
                { text: "INSTAGRAM", url: "https://instagram.com/listento._.official" },   
            ]
    }
  ]
},

{
  id: "no-exit", title: "No Exit", subtitle: "Find the exit. Don't get caught.", year: "Since 2026.08.13", icon: "fa-solid fa-door-open", color: "#CFFF04", link: "https://2thancho2.github.io/NoExit/",
  content: [
    { type: "big", text: "RUN.<br>HIDE. ESCAPE." },
    { type: "stats", items: [{ label: "TYPE", value: "3D WEB GAME" }, { label: "GENRE", value: "MAZE" }, { label: "PLATFORM", value: "WEB" }] },
    { type: "title", text: "3D MAZE : No Exit" },
    { type: "text", html: `<strong>3D MAZE : No Exit</strong>는 별도의 설치 없이 웹 브라우저에서 바로 즐길 수 있는 <strong>3D 미로 탈출 게임</strong>입니다.<br><br>플레이어는 복잡한 미로를 탐색하면서 곳곳에서 추격해 오는 <strong>AI 술래들을 피해 출구를 찾아 탈출</strong>해야 합니다.<br><br>웹 환경에서도 몰입감 있는 플레이를 경험할 수 있도록 그래픽 표현과 이동, 충돌 및 판정 로직 구현에 집중했습니다.` },
    { type: "imageFull", src: "imagses/noexit/main.png", caption: "3D MAZE : No Exit — Find the exit before they find you" },
    { type: "marquee", text: "RUN — DON'T LOOK BACK — FIND THE EXIT — RUN —" },
    { type: "split", image: "imagses/noexit/maze.png", label: "01 / MAZE", title: "Find your way out.", html: `게임이 시작되면 플레이어는 <strong>3D로 구현된 미로 내부</strong>를 직접 이동하며 출구를 찾아야 합니다.<br><br>여러 갈림길을 탐색하고 길을 기억하면서 탈출 경로를 찾아가는 것이 게임의 기본 목표입니다.` },
    { type: "split", reverse: true, image: "imagses/noexit/ai.png", label: "02 / AI", title: "You're not alone.", html: `미로 안에는 플레이어만 존재하지 않습니다.<br><br><strong>AI 술래들이 미로를 돌아다니며 플레이어를 추격</strong>하고, 플레이어는 술래에게 잡히지 않도록 움직이면서 동시에 탈출구를 찾아야 합니다.` },
    { type: "split", image: "imagses/noexit/chase.png", label: "03 / CHASE", title: "Don't get caught.", html: `술래를 발견하면 빠르게 상황을 판단하고 다른 길로 이동해야 합니다.<br><br>미로 탐색과 추격을 결합하여 단순히 출구를 찾는 것에서 끝나지 않고 <strong>계속해서 주변을 경계해야 하는 플레이 경험</strong>을 만들었습니다.` },
    { type: "split", reverse: true, image: "imagses/noexit/escape.png", label: "04 / ESCAPE", title: "There is an exit.", html: `최종 목표는 단 하나, <strong>AI 술래에게 잡히기 전에 미로에서 탈출하는 것</strong>입니다.<br><br>미로를 탐색하며 기억한 경로와 순간적인 판단을 이용해 출구에 도착하면 게임을 클리어할 수 있습니다.` },
    { type: "title", text: "One simple rule." },
    { type: "columns",
      left: `<strong>01 — FIND</strong><br><br>미로 진입<br>↓<br>주변 탐색<br>↓<br>탈출 경로 찾기`,
      right: `<strong>02 — SURVIVE</strong><br><br>AI 술래 발견<br>↓<br>추격 피하기<br>↓<br>출구까지 이동<br>↓<br>탈출` },
    { type: "quote", text: "Escape without getting caught", author: "No Exit" },
    { type: "divider" },
    { type: "title", text: "Built for immersion." },
    { type: "text", html: `No Exit는 웹에서 실행되는 3D 게임에서도 자연스럽게 플레이할 수 있도록 <strong>그래픽 표현과 게임 판정 로직</strong>에 집중해 개발했습니다.<br><br>플레이어 이동, 미로 구조, AI와의 상호작용 등 게임을 구성하는 요소들이 자연스럽게 연결되어 몰입감 있는 미로 탈출 경험을 만드는 것을 목표로 했습니다.` },
    { type: "divider" },
    { type: "title", text: "Next: Multiplayer." },
    { type: "text", html: `현재 버전은 <strong>AI 술래들을 피해 탈출하는 방식</strong>으로 플레이할 수 있습니다.<br><br>추후에는 지정된 ID를 통해 플레이어들이 같은 게임에 접속하여 <strong>플레이어끼리 함께 즐길 수 있는 멀티플레이 방식</strong>으로 확장할 예정입니다.` },
    { type: "tags", items: ["3D", "Web Game", "Maze", "AI", "Game Logic", "JavaScript"] },
    { type: "marquee", text: "NO MAP — NO HELP — NO EXIT? — KEEP RUNNING —" },
    { type: "big", text: "CAN YOU<br>ESCAPE?" },
    { type: "links", items: [
                { text: "VISIT NO-EXIT", url: "https://2thancho2.github.io/NoExit/" },
                { text: "GITHUB REPO", url: "https://github.com/2thancho2/NoExit" }
            ]
    }
  ]
},

{
  id: "meme-ball", title: "Meme-Ball", subtitle: "Memes collide. One ball survives.", year: "Since 2026.08.13", icon: "fa-solid fa-circle", color: "#ffcc33", link: "https://2thancho2.github.io/Ballin/",
  content: [
    { type: "big", text: "BOUNCE.<br>FIGHT. SURVIVE." },
    { type: "stats", items: [{ label: "TYPE", value: "WEB GAME" }, { label: "GENRE", value: "PINBALL" }, { label: "THEME", value: "K-MEME" }, { label: "STATUS", value: "DEMO" }] },
    { type: "title", text: "Ball Game : Meme-Ball" },
    { type: "text", html: `<strong>Ball Game : Meme-Ball</strong>은 Instagram에서 공개된 핀볼 콘텐츠 <strong>'볼파이트코리아'</strong>를 모티브로 제작한 웹 기반 핀볼 게임입니다.<br><br>공들이 맵 안에서 움직이고 서로 경쟁하는 핀볼 방식에 다양한 <strong>한국 인터넷 밈</strong>을 결합하여 가볍고 유쾌하게 즐길 수 있도록 제작했습니다.<br><br>웹에서도 자연스러운 움직임과 게임 진행을 구현하기 위해 그래픽 표현과 충돌 및 판정 로직을 직접 구현했습니다.` },
    { type: "marquee", text: "BOUNCE — HIT — MEME — FIGHT — SURVIVE —" },
    { type: "title", text: "Let the balls fight." },
    { type: "text", html: `게임이 시작되면 여러 공이 맵 안을 움직이며 다양한 오브젝트와 다른 공에 충돌합니다.<br><br>계속해서 달라지는 움직임과 상황 속에서 어떤 결과가 만들어질지 지켜보는 <strong>핀볼 특유의 예측하기 어려운 재미</strong>에 한국 인터넷 밈을 결합했습니다.` },
    { type: "number", value: "VS", label: "AI OR PLAYER" },
    { type: "title", text: "Watch or join the fight." },
    { type: "text", html: `현재는 <strong>AI vs AI</strong> 방식으로 대전을 관전하거나 <strong>AI vs Player</strong> 방식으로 직접 게임에 참여할 수 있습니다.<br><br>AI들이 만들어내는 예상하기 어려운 상황을 지켜보거나 직접 플레이하면서 Meme-Ball을 두 가지 방식으로 즐길 수 있습니다.` },
    { type: "title", text: "How the battle works." },
    { type: "columns",
      left: `<strong>01 — START</strong><br><br>게임 모드 선택<br>↓<br>밈 캐릭터 등장<br>↓<br>핀볼 게임 시작`,
      right: `<strong>02 — BATTLE</strong><br><br>공 이동<br>↓<br>충돌 및 판정<br>↓<br>계속되는 대결<br>↓<br>결과 결정`
    },
    { type: "quote", text: "PINBALL with K-MEME", author: "Meme-Ball" },
    { type: "divider" },
    { type: "title", text: "Inspired by Ball Fight Korea." },
    { type: "text", html: `Meme-Ball은 Instagram에서 공개된 핀볼 콘텐츠 <strong>'볼파이트코리아'</strong>를 모티브로 시작했습니다.<br><br>원작의 아이디어에서 영감을 받아 웹에서 직접 즐길 수 있는 게임 형태로 수정했으며, <strong>원작자의 동의를 얻은 뒤 수정 및 배포</strong>했습니다.` },
    { type: "divider" },
    { type: "title", text: "Currently a DEMO." },
    { type: "text", html: `<strong>현재 공개된 Meme-Ball은 DEMO 버전입니다.</strong><br><br>아직 개발 및 테스트가 충분히 완료되지 않아 플레이 중 <strong>충돌 판정, 게임 진행, 그래픽 및 기타 기능에서 여러 오류와 버그가 발생할 수 있습니다.</strong><br><br>현재 버전은 완성된 게임보다는 Meme-Ball의 아이디어와 기본적인 플레이 방식을 직접 체험할 수 있는 데모에 가깝습니다.` },
    { type: "marquee", text: "DEMO — BUGS — TESTING — IMPROVING —" },
    { type: "title", text: "Next: Player vs Player." },
    { type: "text", html: `현재 Meme-Ball은 <strong>AI vs AI 또는 AI vs Player</strong> 방식으로 플레이할 수 있습니다.<br><br>추후에는 지정된 ID를 이용해 같은 게임에 접속하여 <strong>Player vs Player 방식으로 대전할 수 있는 멀티플레이 기능</strong>을 추가할 예정입니다.` },
    { type: "tags", items: ["Web Game", "Pinball", "Meme", "AI", "Game Logic", "Demo"] },
    { type: "big", text: "LET THE<br>BALLS FIGHT." },
    { type: "links", items: [
      { text: "PLAY DEMO", url: "https://2thancho2.github.io/Ballin/" },
      { text: "GITHUB REPO", url: "https://github.com/2thancho2/Ballin" }
    ]}
  ]
},

{
  id: "schoolife", title: "Schoolife", subtitle: "Everything for your school life.", year: "Since 2026.08.16", icon: "fa-solid fa-school", color: "#4f8cff", link: "https://schoolife.kro.kr/",
  content: [
    { type: "big", text: "STUDY.<br>TEACH. SCHOOLIFE." },
    { type: "stats", items: [{ label: "TYPE", value: "SCHOOL<br>TOOLS" }, { label: "FOR", value: "STUDENT<br>& TEACHER" }, { label: "PLATFORM", value: "WEB" }, { label: "STORAGE", value: "LOCAL" }] },
    { type: "title", text: "Schoolife" },
    { type: "text", html: `<strong>Schoolife</strong>는 학생과 선생님의 더 편리한 학교생활을 위해 제작한 <strong>올인원 학교생활 도우미 사이트</strong>입니다.<br><br>학생들을 위한 공부, 입시, 과제 준비, D-Day 관리 기능부터 선생님들의 원활한 수업 진행을 돕는 다양한 수업 도구까지, 학교에서 필요한 여러 기능을 하나의 웹사이트에 모았습니다.<br><br>여러 사이트를 오갈 필요 없이 <strong>학교생활에 필요한 도구를 한곳에서 사용할 수 있도록</strong> 만드는 것을 목표로 개발했습니다.` },
    { type: "imageFull", src: "imagses/schoolife/main.png", caption: "Schoolife — Everything you need for school" },
    { type: "marquee", text: "STUDY — PLAN — TEACH — ORGANIZE — SCHOOLIFE —" },
    { type: "split", image: "imagses/schoolife/student.png", label: "01 / STUDENT", title: "Made for students.", html: `학생들이 공부와 학교생활을 더욱 편리하게 관리할 수 있도록 <strong>다양한 학생용 기능</strong>을 제공합니다.<br><br>공부부터 입시 준비, 과제 관리까지 학교생활에서 자주 필요한 기능들을 웹에서 간편하게 사용할 수 있도록 구성했습니다.` },
    { type: "split", reverse: true, image: "imagses/schoolife/study.png", label: "02 / STUDY", title: "Plan. Study. Repeat.", html: `해야 할 공부와 과제를 정리하고 중요한 일정을 확인할 수 있는 <strong>학습 및 과제 준비 도구</strong>를 제공합니다.<br><br>여러 정보를 한곳에서 관리하여 학생이 자신의 학습과 학교 일정을 보다 편리하게 정리할 수 있도록 했습니다.` },
    { type: "split", image: "imagses/schoolife/dday.png", label: "03 / D-DAY", title: "Never miss the day.", html: `시험, 수행평가, 과제 제출일 등 중요한 학교 일정을 <strong>D-Day로 등록하고 확인</strong>할 수 있습니다.<br><br>남은 기간을 한눈에 확인하여 중요한 일정을 놓치지 않고 미리 준비할 수 있도록 구성했습니다.` },
    { type: "split", reverse: true, image: "imagses/schoolife/teacher.png", label: "04 / TEACHER", title: "Tools for the classroom.", html: `Schoolife는 학생뿐만 아니라 <strong>선생님을 위한 다양한 수업 도구</strong>도 제공합니다.<br><br>수업 중 필요한 기능을 빠르게 사용할 수 있도록 하여 보다 편리하고 원활하게 수업을 진행할 수 있도록 제작했습니다.` },
    { type: "title", text: "One site. Two sides." },
    { type: "columns",
      left: `<strong>FOR STUDENTS</strong><br><br>공부 도구<br>입시 준비<br>과제 준비<br>D-Day 관리<br>학교생활 도구`,
      right: `<strong>FOR TEACHERS</strong><br><br>수업 진행 도구<br>교실 활용 기능<br>수업 보조 기능<br>다양한 웹 도구` },
    { type: "quote", text: "ALL TOOLS, ONE SITE", author: "Schoolife" },
    { type: "divider" },
    { type: "title", text: "Your data stays with you." },
    { type: "text", html: `Schoolife에서 사용자가 저장한 정보는 <strong>서버로 전송되지 않습니다.</strong><br><br>저장한 정보는 사용자가 Schoolife를 이용한 <strong>해당 브라우저에서만 저장하고 확인</strong>할 수 있도록 구성했습니다.<br><br>개인적인 학습 일정이나 학교생활 정보를 별도의 서버에 저장하지 않고 사용할 수 있습니다.` },
    { type: "marquee", text: "YOUR SCHOOL — YOUR TOOLS — YOUR DATA —" },
    { type: "title", text: "More tools to come." },
    { type: "text", html: `더 다양한 상황에서 Schoolife를 활용할 수 있도록 학생과 선생님을 위한 기능을 계속 추가하고 있습니다.<br><br>Schoolife에 필요한 기능이나 새로운 도구에 대한 제안은 <strong>Instagram DM을 통해 문의</strong>할 수 있습니다.` },
    { type: "tags", items: ["Education", "School", "Study", "Productivity", "Local Storage", "Web"] },
    { type: "big", text: "YOUR SCHOOL.<br>ONE PLACE." },
    { type: "links", items: [
                { text: "VISIT SCHOOLIFE", url: "https://schoolife.kro.kr/" },
                { text: "GITHUB REPO", url: "https://github.com/2thancho2/sch" },
                { text: "THREAD", url: "https://www.threads.com/@2._.than/post/De3Wrj-EbLo?hl=ko" }
            ]
    }
  ]
},

{
  id: "capturedby", title: "CapturedBy", subtitle: "Capture it. Discover it. Collect it.", year: "Since 2026.10.06", icon: "fa-solid fa-camera", color: "#7c6cff", link: "https://capturedby.kro.kr/",
  content: [
    { type: "big", text: "CAPTURE.<br>DISCOVER. COLLECT." },
    { type: "stats", items: [{ label: "TYPE", value: "AI<br>ENCYCLOPEDIA" }, { label: "AI", value: "GEMINI" }, { label: "PLATFORM", value: "WEB" }] },
    { type: "title", text: "CapturedBy" },
    { type: "text", html: `<strong>CapturedBy</strong>는 Google Gemini의 무료 API를 활용하여 제작한 <strong>AI 기반 웹 도감 서비스</strong>입니다.<br><br>Gemini API를 이용해 정보를 분석하고, 발견한 대상을 하나씩 자신의 도감에 기록하며 <strong>나만의 컬렉션을 만들어갈 수 있도록</strong> 제작했습니다.<br><br>별도의 계정이나 서버 기반 저장소 없이 브라우저에서 간편하게 사용할 수 있도록 구성했습니다.` },
    { type: "imageFull", src: "imagses/capturedby/main.png", caption: "CapturedBy — AI-powered encyclopedia" },
    { type: "marquee", text: "CAPTURE — ANALYZE — DISCOVER — SAVE — COLLECT —" },
    { type: "split", image: "imagses/capturedby/capture.png", label: "01 / CAPTURE", title: "Capture something.", html: `궁금한 대상을 발견하면 CapturedBy를 통해 <strong>AI 분석을 시작</strong>할 수 있습니다.<br><br>복잡하게 정보를 직접 검색하는 대신, AI를 활용해 대상에 대한 정보를 확인하고 도감으로 기록하는 경험을 만들었습니다.` },
    { type: "split", reverse: true, image: "imagses/capturedby/result.png", label: "02 / DISCOVER", title: "Let AI identify it.", html: `CapturedBy는 <strong>Google Gemini API</strong>를 활용해 입력된 정보를 분석하고 도감에 필요한 결과를 생성합니다.<br><br>AI를 단순한 질문·답변 기능으로 사용하는 것이 아니라, 사용자가 발견한 대상을 알아보고 기록하는 <strong>도감 경험의 핵심 기능</strong>으로 활용했습니다.` },
    { type: "split", image: "imagses/capturedby/collection.png", label: "03 / COLLECTION", title: "Build your collection.", html: `확인한 대상은 자신의 도감에 추가하여 <strong>나만의 도감 목록</strong>을 만들어갈 수 있습니다.<br><br>하나씩 새로운 대상을 발견하고 기록하면서 도감이 채워지는 과정을 직접 확인할 수 있도록 구성했습니다.` },
    { type: "title", text: "From discovery to collection." },
    { type: "number", value: "AI", label: "POWERED BY GEMINI" },
    { type: "columns",
      left: `<strong>01 — DISCOVER</strong><br><br>대상 입력<br>↓<br>Gemini API 분석<br>↓<br>도감 정보 생성`,
      right: `<strong>02 — COLLECT</strong><br><br>분석 결과 확인<br>↓<br>내 도감에 추가<br>↓<br>브라우저에 저장<br>↓<br>컬렉션 완성` },
    { type: "quote", text: "DISCOVER, RESEARCH, RECORD", author: "CapturedBy" },
    { type: "divider" },
    { type: "title", text: "Stored in your browser." },
    { type: "text", html: `CapturedBy의 도감 목록과 설정 정보는 <strong>LocalStorage를 이용해 사용자의 브라우저에 저장</strong>됩니다.<br><br>별도의 CapturedBy 서버에 도감 목록이나 API 키를 저장하는 방식이 아니며, 저장된 정보는 사용 중인 브라우저에서 관리됩니다.` },
    { type: "marquee", text: "YOUR API KEY — YOUR COLLECTION — YOUR BROWSER —" },
    { type: "split", reverse: true, image: "imagses/capturedby/settings.png", label: "04 / API KEY", title: "Bring your own key.", html: `CapturedBy의 AI 기능을 사용하려면 사용자가 직접 <strong>Google Gemini API 키를 발급</strong>해야 합니다.<br><br>발급받은 API 키를 CapturedBy의 설정에 추가하면 Gemini API를 이용한 분석 기능을 사용할 수 있습니다.<br><br>입력한 API 키는 CapturedBy의 별도 서버에 저장하지 않고 브라우저의 LocalStorage를 이용해 관리합니다.` },
    { type: "tags", items: ["Gemini API", "AI", "Encyclopedia", "LocalStorage", "Collection", "Web"] },
    { type: "big", text: "WHAT WILL<br>YOU FIND?" },
    { type: "links", items: [
                { text: "VISIT CAPTURED-BY", url: "https://capturedby.kro.kr/" },
                { text: "GITHUB REPO", url: "https://github.com/2thancho2/CapturedBy" }
            ]
    }
  ]
},

{
  id: "writtenby", title: "WrittenBy", subtitle: "Write it. Share it. Keep it.", year: "Since 2026.10.09", icon: "fa-solid fa-pen-nib", color: "#8b7cf6", link: "http://http://writtenby.kro.kr/",
  content: [
    { type: "big", text: "WRITE.<br>SHARE. READ." },
    { type: "stats", items: [{ label: "TYPE", value: "COMMUNITY" }, { label: "CONTENT", value: "TEXT" }, { label: "BACKEND", value: "FIREBASE" }, { label: "PLATFORM", value: "WEB" }] },
    { type: "title", text: "WrittenBy" },
    { type: "text", html: `<strong>WrittenBy</strong>는 자신의 생각과 문장을 자유롭게 기록하고 공유할 수 있는 <strong>글 공유 커뮤니티 사이트</strong>입니다.<br><br>Instagram Threads와 같은 피드형 서비스를 바탕으로, 짧은 문장부터 직접 쓴 글까지 부담 없이 게시하고 다른 사람들이 작성한 콘텐츠를 읽을 수 있도록 제작했습니다.<br><br><strong>시, 명언, 글</strong> 세 가지 종류의 콘텐츠를 지원하며, 각자의 문장을 하나의 공간에서 발견하고 공유할 수 있습니다.` },
    { type: "imageFull", src: "imagses/writtenby/main.png", caption: "WrittenBy — A place for words" },
    { type: "marquee", text: "WRITE — POST — READ — SAVE — DISCOVER —" },
    { type: "split", image: "imagses/writtenby/feed.png", label: "01 / FEED", title: "Discover new words.", html: `메인 피드에서는 다른 사용자들이 작성한 <strong>다양한 글을 한곳에서 확인</strong>할 수 있습니다.<br><br>복잡한 구성보다 글 자체에 집중할 수 있도록 간결한 피드 형태의 인터페이스를 중심으로 구성했습니다.` },
    { type: "split", reverse: true, image: "imagses/writtenby/write.png", label: "02 / WRITE", title: "Write what you think.", html: `사용자는 자신의 생각이나 문장을 직접 작성해 WrittenBy에 공유할 수 있습니다.<br><br>작성하는 콘텐츠에 따라 <strong>시, 명언, 글</strong> 중 원하는 종류를 선택하여 다양한 형태의 글을 기록할 수 있도록 만들었습니다.` },
    { type: "split", image: "imagses/writtenby/post.png", label: "03 / SHARE", title: "Put your words out there.", html: `작성한 글을 게시하면 다른 사용자들도 피드에서 해당 콘텐츠를 읽고 발견할 수 있습니다.<br><br>혼자 기록하는 메모장이 아니라 <strong>자신의 글을 다른 사람과 공유하고 발견하는 공간</strong>을 만드는 것을 목표로 제작했습니다.` },
    { type: "split", reverse: true, image: "imagses/writtenby/saved.png", label: "04 / SAVE", title: "Keep what stays with you.", html: `다시 읽고 싶은 글은 <strong>저장 기능을 통해 따로 보관</strong>할 수 있습니다.<br><br>피드를 둘러보다 마음에 드는 시나 문장, 글을 발견하면 저장해 두었다가 나중에 다시 확인할 수 있도록 구성했습니다.` },
    { type: "title", text: "Three ways to write." },
    { type: "columns",
      left: `<strong>시 · POEM</strong><br><br>자유롭게 작성한 시와 감정, 생각을 담은 작품을 공유할 수 있습니다.<br><br><strong>명언 · QUOTE</strong><br><br>기억하고 싶은 문장과 짧은 메시지를 공유할 수 있습니다.`,
      right: `<strong>글 · WRITING</strong><br><br>짧은 이야기부터 자신의 생각을 담은 글까지 자유롭게 작성할 수 있습니다.` },
    { type: "quote", text: "Where one person's sentence reaches another.", author: "WrittenBy" },
    { type: "divider" },
    { type: "title", text: "Powered by Firebase." },
    { type: "text", html: `WrittenBy는 <strong>Google Firebase</strong>를 활용하여 사용자와 게시글 데이터를 관리하도록 구현했습니다.<br><br>웹에서 작성한 콘텐츠를 게시하고, 여러 사용자가 같은 공간에서 글을 공유할 수 있는 커뮤니티 기능을 구성했습니다.` },
    { type: "marquee", text: "POEM — QUOTE — WRITING — POEM — QUOTE — WRITING —" },
    { type: "title", text: "More ways to share." },
    { type: "text", html: `WrittenBy를 더욱 편리한 글 공유 공간으로 만들기 위해 새로운 기능을 계속 추가하고 있습니다.<br><br>필요한 기능이나 새로운 아이디어에 대한 제안은 <strong>Instagram DM을 통해 문의</strong>할 수 있습니다.` },
    { type: "tags", items: ["Firebase", "Firestore", "Community", "Writing", "Social", "Web"] },
    { type: "big", text: "WHAT WILL<br>YOU WRITE?" },
    { type: "links", items: [
                { text: "VISIT CAPTURED-BY", url: "http://writtenby.kro.kr/" },
                { text: "GITHUB REPO", url: "https://github.com/2thancho2/WrittenBy" }
            ]
    }
  ]
},

{
  id: "mypet", title: "MyPet", subtitle: "A little friend on your desktop.", year: "Since 2026.10.13", icon: "fa-solid fa-paw", color: "#008000", link: "https://mypet-install.kro.kr/",
  content: [
    { type: "big", text: "YOUR DESKTOP.<br>YOUR PET." },
    { type: "stats", items: [{ label: "TYPE", value: "DESKTOP<br>APPLICATION" }, { label: "SYSTEM", value: "OVERLAY" }, { label: "PLATFORM", value: "MAC<br>& WINDOWS" }, { label: "FEATURE", value: "LEVEL UP" }] },
    { type: "title", text: "MyPet" },
    { type: "text", html: `<strong>MyPet</strong>은 바쁜 컴퓨터 화면 위에서 나만의 귀여운 반려동물과 함께할 수 있는 <strong>데스크톱 오버레이 펫 프로그램</strong>입니다.<br><br>반려동물이 다른 프로그램 위를 자유롭게 돌아다니며, 사용자는 작업을 하면서도 언제든 자신의 펫을 확인하고 다양한 방식으로 상호작용할 수 있습니다.<br><br>단순히 화면 위를 움직이는 캐릭터를 넘어 <strong>먹이를 주고, 돌보고, 성장시키는 경험</strong>을 데스크톱 위에 구현했습니다.` },
    { type: "imageFull", src: "imagses/mypet/main.png", caption: "MyPet — Your little desktop companion" },
    { type: "marquee", text: "WALK — PLAY — FEED — CARE — GROW —" },
    { type: "split", image: "imagses/mypet/desktop.png", label: "01 / DESKTOP", title: "Always on your screen.", html: `MyPet은 일반적인 앱 창 안에서만 동작하지 않고, <strong>데스크톱 화면 위에 오버레이 형태로 표시</strong>됩니다.<br><br>다른 작업을 하는 동안에도 반려동물이 화면을 돌아다니며, 컴퓨터를 사용하는 일상 속에서 자연스럽게 함께할 수 있도록 제작했습니다.` },
    { type: "split", reverse: true, image: "imagses/mypet/interact.png", label: "02 / INTERACT", title: "Take care of your pet.", html: `화면 위의 반려동물을 단순히 바라보는 것뿐만 아니라 <strong>직접 상호작용</strong>할 수 있습니다.<br><br>먹이를 주거나 빗질하는 등 다양한 행동을 통해 반려동물을 직접 돌보는 느낌을 받을 수 있도록 여러 상호작용 기능을 구현했습니다.` },
    { type: "split", image: "imagses/mypet/level.png", label: "03 / GROW", title: "Grow together.", html: `반려동물과 계속 상호작용하면서 <strong>레벨을 올리고 성장</strong>시킬 수 있습니다.<br><br>한 번 실행하고 끝나는 프로그램이 아니라, 계속해서 펫을 돌보고 성장시키는 재미를 느낄 수 있도록 레벨업 시스템을 추가했습니다.` },
    { type: "split", reverse: true, image: "imagses/mypet/action.png", label: "04 / LIFE", title: "More than an animation.", html: `MyPet의 반려동물은 화면 위에서 움직이며 다양한 행동과 모습을 보여줍니다.<br><br>가볍게 실행해 두는 것만으로도 평범한 데스크톱에 작은 캐릭터가 함께하는 듯한 <strong>생동감 있는 경험</strong>을 만드는 것을 목표로 했습니다.` },
    { type: "title", text: "A pet on your desktop." },
    { type: "columns",
      left: `<strong>01 — LIVE</strong><br><br>MyPet 실행<br>↓<br>데스크톱 위에 등장<br>↓<br>화면을 자유롭게 이동`,
      right: `<strong>02 — CARE</strong><br><br>펫과 상호작용<br>↓<br>먹이 주기 · 빗질<br>↓<br>경험 쌓기<br>↓<br>레벨업` },
    { type: "quote", text: "Little friend on the desktop", author: "MyPet" },
    { type: "divider" },
    { type: "title", text: "Made for your computer." },
    { type: "text", html: `MyPet은 복잡한 조작 없이 사용할 수 있도록 <strong>가볍고 직관적인 인터페이스</strong>를 중심으로 제작했습니다.<br><br>특정 운영체제에서만 사용할 수 있는 프로그램이 아니라 <strong>macOS와 Windows 환경을 모두 지원</strong>하여 다양한 컴퓨터에서 자신의 반려동물과 함께할 수 있습니다.` },
    { type: "marquee", text: "MACOS — WINDOWS — ONE LITTLE FRIEND —" },
    { type: "title", text: "More ways to play." },
    { type: "text", html: `반려동물과 더욱 다양하게 상호작용할 수 있도록 MyPet의 기능을 계속 확장하고 있습니다.<br><br>새로운 상호작용이나 필요한 기능에 대한 제안은 <strong>Instagram DM을 통해 문의</strong>할 수 있습니다.` },
    { type: "tags", items: ["Desktop App", "Desktop Pet", "Overlay", "macOS", "Windows", "Interaction"] },
    { type: "big", text: "MEET YOUR<br>LITTLE FRIEND." },
    { type: "links", items: [
                { text: "GET MYPET", url: "https://mypet-install.kro.kr/" },
                { text: "GITHUB REPO", url: "https://github.com/2thancho2/MyPet" }
            ]
    }
  ]
},

{
  id: "customstudiopro", title: "Custom Studio Pro", subtitle: "Make every website yours.", year: "Since 2026.08.08", icon: "fa-solid fa-wand-magic-sparkles", color: "#8b5cf6", link: "/file/custom/Custom.zip",
  content: [
    { type: "big", text: "SELECT.<br>CHANGE. CUSTOMIZE." },
    { type: "stats", items: [{ label: "TYPE", value: "CHROME<br>EXTENSION" }, { label: "CUSTOMIZE", value: "IMAGE<br>& TEXT" }, { label: "TEXT", value: "CONTENT<br>& COLOR" }, { label: "PLATFORM", value: "CHROME" }] },
    { type: "title", text: "CustomStudioPro" },
    { type: "text", html: `<strong>CustomStudioPro</strong>는 웹사이트의 이미지와 텍스트를 원하는 모습으로 바꿀 수 있는 <strong>Chrome 확장 프로그램</strong>입니다.<br><br>사이트에 표시되는 이미지를 직접 선택한 이미지로 변경하거나, 원하는 글자를 선택해 <strong>내용과 색상을 자유롭게 수정</strong>할 수 있습니다.<br><br>기존 웹사이트를 직접 수정하지 않고도 브라우저에서 자신만의 모습으로 꾸며볼 수 있도록 제작했습니다.` },
    { type: "imageFull", src: "imagses/customstudiopro/main.png", caption: "CustomStudioPro — Make every website yours" },
    { type: "marquee", text: "SELECT — EDIT — REPLACE — COLOR — CUSTOMIZE —" },
    { type: "split", image: "imagses/customstudiopro/image.png", label: "01 / IMAGE", title: "Replace every image.", html: `웹사이트에 표시되는 이미지를 <strong>사용자가 원하는 이미지로 변경</strong>할 수 있습니다.<br><br>페이지의 기존 이미지를 새로운 이미지로 바꾸면서 익숙한 사이트를 전혀 다른 분위기로 꾸며볼 수 있습니다.` },
    { type: "split", reverse: true, image: "imagses/customstudiopro/color.png", label: "02 / TEXT", title: "Rewrite the page.", html: `변경하고 싶은 글자를 선택한 뒤 <strong>텍스트의 내용을 원하는 문장으로 수정</strong>할 수 있습니다.<br><br>텍스트의 내용뿐만 아니라 글자 색상도 원하는 색으로 변경하여 자신만의 스타일을 적용할 수 있습니다.` },
    { type: "title", text: "Pick it. Change it." },
    { type: "columns",
      left: `<strong>IMAGE</strong><br><br>사이트 이미지 선택<br>↓<br>새로운 이미지 입력<br>↓<br>이미지 교체`,
      right: `<strong>TEXT</strong><br><br>원하는 글자 선택<br>↓<br>내용 또는 색상 변경<br>↓<br>새로운 스타일 적용` },
    { type: "quote", text: "Custom Any Site You Want", author: "CustomStudioPro" },
    { type: "divider" },
    { type: "title", text: "Install on Chrome." },
    { type: "text", html: `CustomStudioPro는 Chrome 확장 프로그램으로 현재는 압축 파일을 직접 설치하는 방식으로 사용할 수 있습니다.<br><br>다운로드한 <strong>ZIP 파일의 압축을 해제</strong>한 뒤 <strong>chrome://extensions</strong>에서 개발자 모드를 활성화하고, <strong>압축해제된 확장 프로그램을 로드</strong>를 눌러 CustomStudioPro 폴더를 선택하면 설치할 수 있습니다.` },
    { type: "marquee", text: "DOWNLOAD — UNZIP — LOAD — CUSTOMIZE —" },
    { type: "tags", items: ["Chrome Extension", "Customization", "Image", "Text", "Browser", "Web"] },
    { type: "big", text: "MAKE THE WEB<br>YOURS." },
    { type: "button", text: "DOWNLOAD CUSTOMSTUDIOPRO", url: "/file/custom/Custom.zip" }
  ]
},

{
  id: "fourier-studio", title: "Fourier Studio", subtitle: "Turn imagses into mathematics.", year: "Since 2026.10.25", icon: "fa-solid fa-wave-square", color: "#6366f1", link: "https://2thancho2.github.io/FourierStudio/",
  content: [
    { type: "big", text: "IMAGE.<br>MATH. DRAW." },
    { type: "stats", items: [{ label: "TYPE", value: "MATH<br>VISUALIZER" }, { label: "METHOD", value: "3<br>MODES" }, { label: "CORE", value: "DFT<br>& EDGES" }, { label: "PROCESS", value: "100%<br>BROWSER" }] },
    { type: "title", text: "Fourier Studio" },
    { type: "text", html: `<strong>Fourier Studio</strong>는 사진을 입력하면 윤곽선을 추출하고, 이를 수학적인 방식으로 다시 그려주는 <strong>웹 기반 수학 시각화 프로그램</strong>입니다.<br><br>이미지를 점으로 이루어진 경로로 변환한 뒤 <strong>x·y 분리 푸리에 급수, 통합 복소 에피사이클, 좌표평면</strong>의 세 가지 방식으로 그림이 만들어지는 과정을 직접 확인할 수 있습니다.<br><br>사진은 별도의 서버에 업로드하지 않고 <strong>브라우저 안에서 직접 처리</strong>되도록 구현했습니다.` },
    { type: "imageFull", src: "imagses/fourier-studio/main.jpg", caption: "Fourier Studio — Draw imagses with mathematics" },
    { type: "marquee", text: "IMAGE — EDGE — PATH — DFT — CIRCLES — DRAW —" },
    { type: "split", image: "imagses/fourier-studio/edge.jpg", label: "01 / IMAGE TO PATH", title: "First, find the edges.", html: `사진 자체를 바로 푸리에 변환하는 대신 먼저 이미지를 <strong>점으로 이루어진 하나의 경로</strong>로 변환합니다.<br><br>이미지의 긴 변을 약 240px로 축소하고 흑백으로 변환한 뒤, <strong>Sobel 필터</strong>로 밝기가 급격하게 변하는 경계선을 찾습니다. 이후 경계를 얇게 만들고 점을 약 2,200개 이하로 줄인 뒤 가까운 점들을 연결해 푸리에 계산에 사용할 경로를 생성합니다.` },
    { type: "split", reverse: true, image: "imagses/fourier-studio/xy.png", label: "02 / X · Y FOURIER", title: "Two axes. Many circles.", html: `<strong>x·y 분리 방식</strong>은 펜의 x좌표와 y좌표 움직임을 각각 따로 DFT합니다.<br><br>각 주파수 성분에서 크기, 위상, 회전 속도를 구하고 이를 회전하는 원으로 표현합니다. 큰 성분부터 원을 추가하기 때문에 원의 수가 적을 때는 전체적인 형태가 나타나고, <strong>n값을 높일수록 작은 성분이 추가되며 원래 윤곽선에 가까워지는 과정</strong>을 확인할 수 있습니다.` },
    { type: "split", image: "imagses/fourier-studio/complex.png", label: "03 / EPICYCLES", title: "One chain of circles.", html: `<strong>통합 방식</strong>은 좌표 (x, y)를 복소수 <strong>x + iy</strong>로 표현하여 두 축을 하나의 DFT로 처리합니다.<br><br>각 성분의 크기는 원의 반지름이 되고 주파수는 회전 속도와 방향을 결정합니다. 여러 개의 원이 하나의 사슬처럼 연결되고 <strong>마지막 원의 끝점이 펜이 되어 윤곽선을 그립니다.</strong>` },
    { type: "split", reverse: true, image: "imagses/fourier-studio/coordinate.png", label: "04 / COORDINATE", title: "Draw it with equations.", html: `<strong>좌표평면 방식</strong>은 푸리에 급수 대신 사진의 윤곽선을 직선과 원의 방정식으로 변환합니다.<br><br>서로 떨어진 경로를 분리한 뒤 <strong>Ramer-Douglas-Peucker 알고리즘</strong>으로 불필요한 점을 줄이고, 직선에 가까운 부분은 <strong>y = mx + b</strong>, 원으로 인식된 윤곽선은 <strong>(x-a)² + (y-b)² = r²</strong> 형태로 표현해 순서대로 그립니다.` },
    { type: "title", text: "From pixels to mathematics." },
    { type: "columns",
      left: `<strong>01 — EXTRACT</strong><br><br>이미지 불러오기<br>↓<br>크기 축소 · 흑백 변환<br>↓<br>Sobel 경계 검출<br>↓<br>윤곽선 점 추출`,
      right: `<strong>02 — DRAW</strong><br><br>경로 생성 · 단순화<br>↓<br>그리기 방식 선택<br>↓<br>DFT 또는 방정식 계산<br>↓<br>실시간 시각화` },
    { type: "quote", text: "Photographs into Points, Points into Mathematics, and Mathematics back into mages.", author: "Fourier Studio" },
    { type: "divider" },
    { type: "title", text: "Control the detail." },
    { type: "text", html: `이미지마다 윤곽선의 복잡도가 다르기 때문에 사용자가 직접 <strong>윤곽 민감도와 표현 정밀도</strong>를 조절할 수 있도록 만들었습니다.<br><br>푸리에 방식에서는 사용하는 원의 수를 조절해 전체적인 형태에서 세밀한 윤곽까지 변화하는 과정을 확인할 수 있으며, 좌표평면 방식에서는 단순화 정도를 조절해 사용하는 직선과 그래프의 수를 변경할 수 있습니다.` },
    { type: "split", image: "imagses/fourier-studio/process.png", label: "05 / VISUALIZE", title: "Watch mathematics draw.", html: `Fourier Studio는 완성된 그림만 보여주는 것보다 <strong>수학을 통해 그림이 만들어지는 과정 자체를 보여주는 것</strong>에 중점을 두었습니다.<br><br>원의 개수를 늘리면서 윤곽선이 점점 정교해지는 모습과 회전하는 에피사이클, 좌표평면 위에 방정식이 그려지는 과정을 직접 관찰할 수 있습니다.` },
    { type: "title", text: "Processed in your browser." },
    { type: "text", html: `입력한 사진을 별도의 서버로 전송하여 처리하지 않습니다. 이미지 축소부터 경계 검출, 경로 생성과 계산까지 <strong>필요한 이미지 처리를 사용자의 브라우저 안에서 직접 수행</strong>하도록 구현했습니다.` },
    { type: "marquee", text: "SOBEL — DFT — EPICYCLE — RDP — EQUATION — FOURIER —" },
    { type: "tags", items: ["Fourier Series", "DFT", "Sobel Filter", "Epicycle", "RDP", "Mathematics", "Visualization", "Web"] },
    { type: "big", text: "WATCH MATH<br>DRAW." },
    { type: "links", items: [
                { text: "VISIT FOURIER STUDIO", url: "https://2thancho2.github.io/FourierStudio/" },
                { text: "GITHUB REPO", url: "https://github.com/2thancho2/FourierStudio/" },
                { text: "THREAD", url: "https://www.threads.com/@2._.than/post/De5tLONGKhb?hl=ko" }
            ]
    }
  ]
},

{
  id: "online-launchpad", title: "Online Launchpad", subtitle: "Make beats, right in your browser.", year: "IN DEVELOPMENT", icon: "fa-solid fa-drum", color: "#ff6b35", link: "#",
  content: [
    { type: "big", text: "PRESS.<br>PLAY. CREATE." },
    { type: "stats", items: [{ label: "TYPE", value: "MUSIC<br>TOOL" }, { label: "PLATFORM", value: "WEB" }, { label: "INPUT", value: "KEYBOARD" }, { label: "STATUS", value: "IN<br>DEVELOPMENT" }] },
    { type: "title", text: "Online Launchpad" },
    { type: "text", html: `<strong>Online Launchpad</strong>는 웹 브라우저에서 다양한 사운드를 직접 연주할 수 있는 <strong>웹 기반 음악 런치패드 서비스</strong>입니다.<br><br>별도의 프로그램 없이 브라우저에서 런치패드를 조작하며 여러 사운드를 조합하고 음악을 즐길 수 있는 서비스를 목표로 현재 기획 및 개발을 진행하고 있습니다.<br><br>특히 실제 연주에서 중요한 <strong>안정적인 사운드 재생과 정확한 키보드 입력 처리</strong>를 구현하는 데 집중하고 있습니다.` },
    { type: "marquee", text: "PRESS — SOUND — BEAT — PLAY — CREATE — REPEAT —" },
    { type: "title", text: "Designed for the browser." },
    { type: "text", html: `Online Launchpad는 현재 <strong>서비스의 구조와 사용 방식을 기획하고 설계하는 단계</strong>부터 차근차근 개발하고 있습니다.<br><br>웹에서도 직관적으로 패드를 조작하고 음악을 연주할 수 있는 인터페이스를 목표로 전체적인 사용 흐름을 구성하고 있습니다.` },
    { type: "number", value: "KEY", label: "YOUR KEYBOARD IS THE LAUNCHPAD" },
    { type: "title", text: "Every press matters." },
    { type: "text", html: `음악을 직접 연주하는 서비스인 만큼 입력과 동시에 사운드가 자연스럽게 재생되는 것이 중요합니다.<br><br>현재 여러 입력이 연속으로 이어지는 상황에서도 <strong>안정적으로 소리를 재생할 수 있는 구조</strong>를 구축하고 있습니다.` },
    { type: "title", text: "Play with your keyboard." },
    { type: "text", html: `화면의 패드뿐만 아니라 <strong>키보드를 이용해 빠르게 사운드를 재생</strong>할 수 있는 조작 방식을 개발하고 있습니다.<br><br>빠르고 연속적인 입력에서도 키를 정확하게 인식할 수 있도록 키보드 입력 처리와 반응성을 개선하는 데 집중하고 있습니다.` },
    { type: "title", text: "What we're building." },
    { type: "columns",
      left: `<strong>01 — EXPERIENCE</strong><br><br>웹 기반 런치패드<br>직관적인 패드 인터페이스<br>키보드를 이용한 연주<br>간편한 접근`,
      right: `<strong>02 — CORE</strong><br><br>안정적인 사운드 재생<br>빠른 입력 처리<br>정확한 키보드 인식<br>자연스러운 연주 경험`
    },
    { type: "quote", text: "Press key to start music", author: "Online Launchpad" },
    { type: "divider" },
    { type: "title", text: "Currently in development." },
    { type: "text", html: `Online Launchpad는 현재 <strong>기획 및 설계를 바탕으로 개발을 진행 중</strong>인 프로젝트입니다.<br><br>안정적인 사운드 재생과 높은 키보드 입력 인식률을 구현하는 것을 우선으로 개발하고 있으며, 기능과 사용성을 충분히 다듬은 뒤 공개할 예정입니다.<br><br><strong>조금만 기다려 주세요!</strong>` },
    { type: "marquee", text: "DESIGNING — BUILDING — TESTING — COMING SOON —" },
    { type: "tags", items: ["Music", "Launchpad", "Web Audio", "Keyboard", "Web", "WIP"] },
    { type: "big", text: "COMING<br>SOON." }
  ]
},

{
  id: "2chat", title: "2Chat", subtitle: "Talk. Connect. In real time.", year: "IN DEVELOPMENT", icon: "fa-solid fa-comments", color: "#5865f2", link: "#",
  content: [
    { type: "big", text: "TALK.<br>CONNECT. TOGETHER." },
    { type: "stats", items: [{ label: "TYPE", value: "CHAT<br>SERVICE" }, { label: "SYSTEM", value: "REAL-TIME" }, { label: "PLATFORM", value: "WEB" }, { label: "STATUS", value: "IN<br>DEVELOPMENT" }] },
    { type: "title", text: "2Chat" },
    { type: "text", html: `<strong>2Chat</strong>은 웹에서 사람들과 빠르고 편리하게 대화할 수 있도록 개발 중인 <strong>실시간 웹 채팅 서비스</strong>입니다.<br><br>메시지를 주고받는 기본적인 채팅 경험을 바탕으로, 사용자들이 안정적으로 연결되고 실시간으로 소통할 수 있는 서비스를 목표로 개발하고 있습니다.<br><br>현재 전체적인 서비스 기획과 함께 <strong>실시간 통신을 위한 백엔드 구조를 설계하고 구축</strong>하고 있습니다.` },
    { type: "marquee", text: "MESSAGE — SEND — RECEIVE — CONNECT — CHAT —" },
    { type: "title", text: "Built around conversation." },
    { type: "text", html: `2Chat은 누구나 어렵지 않게 사용할 수 있는 <strong>직관적인 채팅 경험</strong>을 목표로 설계하고 있습니다.<br><br>대화를 시작하고 메시지를 주고받는 과정에 집중할 수 있도록 서비스의 화면 구성과 전체적인 사용 흐름을 차근차근 만들어가고 있습니다.` },
    { type: "number", value: "LIVE", label: "REAL-TIME COMMUNICATION" },
    { type: "title", text: "Messages, in real time." },
    { type: "text", html: `2Chat의 핵심은 <strong>실시간으로 메시지를 주고받는 경험</strong>입니다.<br><br>메시지를 보내고 상대방에게 전달되는 과정이 자연스럽게 이어질 수 있도록 실시간 소통 기능을 중심으로 개발하고 있습니다.` },
    { type: "title", text: "Behind every message." },
    { type: "text", html: `화면에 보이는 채팅 기능뿐만 아니라 그 뒤에서 서비스를 안정적으로 동작시키는 <strong>백엔드 구조</strong>를 함께 설계하고 있습니다.<br><br>여러 사용자가 서비스를 이용하는 상황에서도 원활하게 메시지를 주고받을 수 있는 실시간 소통 인프라 구축을 목표로 하고 있습니다.` },
    { type: "title", text: "From message to message." },
    { type: "columns",
      left: `<strong>01 — CONNECT</strong><br><br>2Chat 접속<br>↓<br>사용자 연결<br>↓<br>대화 시작`,
      right: `<strong>02 — CHAT</strong><br><br>메시지 작성<br>↓<br>실시간 전송<br>↓<br>상대방에게 전달<br>↓<br>대화 계속`
    },
    { type: "quote", text: "For Quick Connection", author: "2Chat" },
    { type: "divider" },
    { type: "title", text: "Building the foundation." },
    { type: "text", html: `2Chat은 현재 서비스의 기반이 되는 <strong>기획 및 백엔드 설계 단계</strong>를 진행하고 있습니다.<br><br>단순히 채팅 화면을 구현하는 것에서 끝나지 않고, 실제 서비스에서 안정적으로 사용할 수 있는 실시간 소통 환경을 만드는 것을 목표로 개발하고 있습니다.` },
    { type: "marquee", text: "DESIGNING — CONNECTING — BUILDING — COMING SOON —" },
    { type: "tags", items: ["Chat", "Real-time", "Backend", "Firebase", "Web", "WIP"] },
    { type: "big", text: "LET'S<br>2CHAT." },
    { type: "text", html: `<strong>2Chat은 현재 개발 중입니다.</strong><br><br>안정적인 실시간 소통 인프라와 사용 환경을 구축한 뒤 정식으로 공개할 예정입니다.<br><br>조금만 기다려 주세요!` }
  ]
},

{
  id: "mychart", title: "MYChart", subtitle: "Find patterns. Analyze the past.", year: "IN DEVELOPMENT", icon: "fa-solid fa-chart-line", color: "#22c55e", link: "#",
  content: [
    { type: "big", text: "CHART.<br>PATTERN. ANALYSIS." },
    { type: "stats", items: [{ label: "TYPE", value: "CHART<br>ANALYZER" }, { label: "CORE", value: "PATTERN<br>MATCHING" }, { label: "ENGINE", value: "PYTHON" }, { label: "WEB", value: "PLANNED" }] },
    { type: "title", text: "MYChart" },
    { type: "text", html: `<strong>MYChart</strong>는 Python을 이용하여 주식 및 암호화폐의 과거 차트 데이터를 분석하고, <strong>현재와 비슷한 과거 차트 패턴을 자동으로 찾아주는 차트 분석 프로그램</strong>입니다.<br><br>단순히 차트의 모양만 비교하는 것이 아니라 가격, 거래량, 이동평균선, RSI, MACD, ATR 등 여러 데이터를 함께 분석하여 현재와 비슷한 시장 상태가 과거에 언제 나타났는지 찾습니다.<br><br>이후 해당 패턴 뒤에서 실제 가격이 어떻게 움직였는지 분석하여 <strong>과거의 유사한 상황에서 나타났던 결과를 통계적으로 확인</strong>할 수 있도록 제작했습니다.` },
    { type: "marquee", text: "DATA — INDICATORS — PATTERN — HISTORY — STATISTICS —" },
    { type: "title", text: "More than a chart." },
    { type: "text", html: `MYChart는 OHLCV 데이터를 기반으로 <strong>SMA, EMA, RSI, MACD, Bollinger Bands, ATR, Stochastic, Williams %R, ADX, OBV</strong> 등 다양한 기술적 지표를 계산합니다.<br><br>여기에 거래량, 변동성, 최근 고점과 저점, 캔들 형태, 연속 상승·하락 등의 정보를 함께 분석하여 현재 차트의 상태를 여러 관점에서 확인합니다.` },
    { type: "number", value: "40", label: "CANDLES IN CURRENT PATTERN" },
    { type: "title", text: "Search the past." },
    { type: "text", html: `MYChart의 핵심 기능은 <strong>현재 차트의 최근 40봉을 하나의 패턴으로 보고 과거 전체 데이터에서 비슷한 구간을 찾는 것</strong>입니다.<br><br>가격 모양뿐만 아니라 고가와 저가, 일일 수익률, 거래량, RSI, MACD, ATR 등의 특징을 함께 비교하여 단순히 모양만 닮은 차트가 아닌 <strong>여러 시장 상태가 비슷했던 과거 구간</strong>을 탐색합니다.` },
    { type: "number", value: "TOP 50", label: "SIMILAR HISTORICAL PATTERNS" },
    { type: "title", text: "What happened next?" },
    { type: "text", html: `현재와 유사한 과거 패턴을 찾는 것에서 분석을 끝내지 않습니다.<br><br>유사도가 높은 <strong>최대 50개의 과거 패턴</strong>을 선택한 뒤 각각의 패턴이 끝난 이후 <strong>5봉, 10봉, 20봉, 50봉 뒤의 실제 가격 변화</strong>를 분석합니다.<br><br>이를 통해 평균 및 중앙값 수익률, 상승·하락 비율, 최대 상승·하락, 표준편차 등 과거 결과의 분포를 통계적으로 확인할 수 있습니다.` },
    { type: "title", text: "Patterns inside patterns." },
    { type: "text", html: `유사도 분석과 함께 최근 캔들을 분석하여 <strong>Doji, Hammer, Shooting Star, Marubozu, Engulfing</strong> 등의 캔들 패턴을 자동으로 인식합니다.<br><br>또한 Double Top, Double Bottom, Triangle과 같은 차트 패턴을 탐색하고, 거래량 급증·감소 및 가격과 거래량의 움직임을 함께 분석하는 기능도 구현하고 있습니다.` },
    { type: "title", text: "Analyze from multiple windows." },
    { type: "text", html: `하나의 기간만 보고 판단하지 않도록 <strong>5봉, 20봉, 50봉, 100봉, 200봉</strong> 등 여러 범위에서 차트 상태를 분석합니다.<br><br>짧은 구간과 긴 구간을 함께 살펴보면서 현재 움직임을 서로 다른 시간 범위에서 확인할 수 있도록 구성했습니다.` },
    { type: "title", text: "How MYChart analyzes." },
    { type: "columns",
      left: `<strong>01 — ANALYZE</strong><br><br>종목 데이터 불러오기<br>↓<br>기술적 지표 계산<br>↓<br>현재 차트 특징 추출<br>↓<br>캔들·거래량·패턴 분석`,
      right: `<strong>02 — SEARCH</strong><br><br>과거 차트 전체 검색<br>↓<br>유사도 계산<br>↓<br>유사 패턴 TOP 50 선정<br>↓<br>이후 가격 변화 통계 분석`
    },
    { type: "quote", text: "What happened after similar patterns in the past?", author: "MYChart" },
    { type: "divider" },
    { type: "title", text: "Backtest the result." },
    { type: "text", html: `분석 결과가 실제 과거 데이터에서 어떤 성능을 보였는지 확인하기 위해 <strong>백테스트 기능</strong>도 포함하고 있습니다.<br><br>승률, 평균 수익률, 최대 손실과 상승, 손익비, 최악의 연속 패배 등을 계산하고 이를 바탕으로 패턴의 결과를 통계적으로 검토할 수 있도록 구성했습니다.` },
    { type: "title", text: "See why it matched." },
    { type: "text", html: `분석 결과는 숫자로만 보여주지 않고 차트와 함께 시각화합니다.<br><br>현재 가격 차트에는 이동평균선을 표시하고, <strong>현재 40봉 구간 위에 가장 유사한 과거 패턴 TOP 3를 겹쳐 표시</strong>하여 어떤 움직임이 비슷했는지 직접 비교할 수 있습니다.<br><br>또한 유사 패턴의 5봉·10봉 평균 변화율을 이용해 과거 통계가 보여주는 향후 흐름을 점선으로 시각화합니다.` },
    { type: "divider" },
    { type: "title", text: "Python first. Web next." },
    { type: "text", html: `현재 MYChart의 분석 시스템은 <strong>Python 기반 프로그램</strong>으로 개발하고 있습니다.<br><br>Python 버전의 분석 알고리즘과 기능을 충분히 개발한 뒤에는 이를 기반으로 <strong>브라우저에서 종목을 입력하고 분석 결과와 차트를 확인할 수 있는 MYChart 웹 버전</strong>을 제작할 예정입니다.<br><br>복잡한 분석 과정을 직접 Python 프로그램으로 실행하지 않아도 웹에서 보다 간편하게 사용할 수 있는 형태로 확장하는 것이 다음 목표입니다.` },
    { type: "marquee", text: "PYTHON — ANALYSIS — BACKTEST — WEB — BUILDING —" },
    { type: "title", text: "Statistics, not a prediction." },
    { type: "text", html: `<strong>MYChart는 미래 가격을 정확하게 예측하거나 상승·하락을 보장하는 프로그램이 아닙니다.</strong><br><br>현재와 비슷한 상황이 과거에 발생했을 때 이후 가격이 어떻게 움직였는지를 찾아 통계적으로 보여주는 분석 도구입니다.<br><br>과거 패턴과 현재 패턴이 비슷하더라도 실제 시장 상황은 달라질 수 있으므로 결과는 <strong>과거 데이터에 기반한 참고용 분석</strong>으로 해석해야 합니다.` },
    { type: "tags", items: ["Python", "Chart", "Pattern Analysis", "Technical Indicators", "Backtest", "Data Analysis", "Visualization", "Web"] },
    { type: "big", text: "FIND THE<br>PATTERN." }
  ]
},
];
