// ⚠️ Firebase 콘솔에서 프로젝트를 만든 뒤, 아래 값들을 본인의 프로젝트 설정 값으로 교체하세요.
// (Firebase 콘솔 > 프로젝트 설정 > 일반 > "내 앱" > SDK 설정 및 구성 에서 복사)
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAqXSgOrsOh0DSEC1BWr7mjanH5W5PEOOo",
  authDomain: "changwon-shooting.firebaseapp.com",
  projectId: "changwon-shooting",
  storageBucket: "changwon-shooting.firebasestorage.app",
  messagingSenderId: "618429269488",
  appId: "1:618429269488:web:93680ca59debbe7af2c935"
};

// 관리자 로그인용 고정 이메일 (Firebase Authentication에 이 이메일로 계정을 1개 만들어두세요)
// 참가자에게는 노출되지 않고, 관리자 화면에서는 비밀번호만 입력하면 됩니다.
window.ADMIN_EMAIL = "admin@changwon-shooting.local";
