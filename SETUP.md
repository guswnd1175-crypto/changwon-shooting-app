# 창원 장애인사격대회 셔틀버스 시간표 - 설정 & 배포 가이드

빌드 과정이 필요 없는 순수 HTML/CSS/JS 사이트입니다. Firebase(무료)로 실시간 데이터 저장을, Vercel(무료)로 호스팅을 합니다.

## 1. Firebase 프로젝트 만들기 (무료, 5분)

1. https://console.firebase.google.com 접속 후 구글 계정으로 로그인
2. "프로젝트 추가" → 이름 입력 (예: changwon-shooting) → 애널리틱스는 꺼도 됨 → 만들기
3. 왼쪽 메뉴 **Firestore Database** → "데이터베이스 만들기" → 위치는 `asia-northeast3(서울)` 선택 → **테스트 모드 말고, 아래 3번에서 알려주는 보안 규칙을 붙여넣을 예정이므로 아무 모드나 선택 후 진행**
4. 왼쪽 메뉴 **Authentication** → "시작하기" → 로그인 방법에서 **이메일/비밀번호** 사용 설정
5. **Authentication > Users(사용자)** 탭 → "사용자 추가"
   - 이메일: `admin@changwon-shooting.local` (원하면 다른 값으로 바꿔도 되는데, 바꾸면 `firebase-config.js`의 `ADMIN_EMAIL`도 똑같이 바꿔야 함)
   - 비밀번호: 관리자들이 실제로 입력할 비밀번호 (참가자 오접근 방지용이므로 간단해도 무방)
6. 왼쪽 메뉴 **프로젝트 설정(⚙️) > 일반** → 아래로 스크롤 "내 앱" → `</>` (웹) 아이콘 클릭 → 앱 닉네임 아무거나 입력 → 등록
7. 화면에 나오는 `firebaseConfig` 객체 값을 복사해서, 이 프로젝트의 `firebase-config.js` 파일 안 `window.FIREBASE_CONFIG` 값에 그대로 붙여넣기

## 2. Firestore 보안 규칙 적용

1. Firebase 콘솔 **Firestore Database > 규칙(Rules)** 탭
2. 이 프로젝트의 `firestore.rules` 파일 내용을 그대로 복사해서 붙여넣고 "게시(Publish)"

이 규칙의 의미: 시간표/공지사항은 **누구나 읽기 가능**(참가자용), **수정은 로그인한 관리자만 가능**.

## 3. 로고 이미지 준비

`로고.ai`는 브라우저에서 바로 못 씁니다. Illustrator에서 다음과 같이 내보내주세요.

- Illustrator에서 `로고.ai` 열기 → **파일 > 내보내기 > 내보내기 형식** → PNG (배경 투명, 해상도 2배 이상) 또는 SVG로 저장
- 저장한 파일 이름을 `logo.png` (또는 `logo.svg`)로 바꿔서 이 프로젝트의 `assets` 폴더에 넣기
  - `assets/logo.svg`로 저장했다면 `index.html`, `admin.html`의 `<img class="logo" src="assets/logo.png">` 두 곳을 `assets/logo.svg`로 수정

## 4. 초기 시간표 데이터 넣기

1. 브라우저에서 `admin.html` 열기 (로컬이면 더블클릭, 배포 후면 `내사이트주소/admin.html`)
2. 5번에서 만든 비밀번호로 로그인
3. 맨 아래 **"샘플 시간표 불러오기"** 버튼 클릭 → 확인
   - 첨부해주신 사진 속 09.04~09.15 시간표가 그대로 Firestore에 저장됩니다. 이후엔 화면에서 자유롭게 수정하세요.

## 5. GitHub + Vercel로 무료 배포

로컬에 Node.js가 없어도 됩니다. Vercel이 서버에서 처리합니다.

1. GitHub(무료 계정)에 새 저장소 생성 후, 이 프로젝트 폴더(`changwon-shooting-app`) 전체를 업로드 (웹에서 파일 드래그 앤 드롭으로도 가능)
2. https://vercel.com 접속 → 깃허브 계정으로 로그인 → "Add New… > Project" → 방금 만든 저장소 선택
3. Framework Preset은 **Other** 선택, Build Command/Output Directory는 비워둔 채로 그대로 "Deploy"
4. 배포 완료되면 `https://프로젝트이름.vercel.app` 링크가 생성됨 → 이 링크를 참가자들에게 공유
5. 관리자 페이지는 `https://프로젝트이름.vercel.app/admin.html`

## 6. 대회 종료 후

- Vercel 대시보드에서 프로젝트 삭제 (또는 Firebase 콘솔에서 프로젝트 삭제) 하면 바로 내려갑니다.

## 데이터 구조 참고

- `schedules/toRange`, `schedules/toCity` 문서: 표 데이터 (header + 날짜별 rows, 각 row는 여러 개의 block으로 구성. block = 한글/영문 텍스트 + 칸 너비(span) + 색상(tone))
- `meta/notice` 문서: 공지사항 (한글/영문)
- 관리자 화면에서 칸(block) 단위로 텍스트/너비/색상을 자유롭게 추가·삭제·수정 가능 (09.09처럼 특수 안내가 필요한 날짜도 색상 강조 + 너비 조정으로 표현 가능)
