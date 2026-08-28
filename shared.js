/* 참가자 화면(index.html)과 관리자 화면(admin.html)이 공통으로 사용하는
 * 상수 / 다국어 사전 / 렌더링 함수 모음.
 * (일반 <script> 로 로드되는 classic script 입니다. type="module" 아님)
 */

// 방향(direction) 두 가지 고정값
window.DIRECTIONS = [
  { key: "toRange", label: "Grand City / Mercure → RANGE" },
  { key: "toCity", label: "RANGE → Grand City / Mercure" }
];

// 화면에 쓰이는 고정 문구(UI 라벨) 다국어 사전
window.I18N = {
  ko: {
    pageTitle: "창원 장애인 사격 세계 선수권 대회",
    adminEntry: "관리자 로그인",
    backToMain: "← 참가자 화면으로",
    adminTitle: "관리자 모드",
    loginBtn: "로그인",
    logoutBtn: "로그아웃",
    pwPlaceholder: "관리자 비밀번호",
    loginFail: "비밀번호가 올바르지 않습니다.",
    noticeEmpty: "",
    noticeSectionTitle: "공지사항",
    editTableTitle: "시간표 수정",
    editNoticeTitle: "공지사항 수정",
    addRow: "+ 날짜(행) 추가",
    removeRow: "이 날짜(행) 삭제",
    addBlock: "+ 칸 추가",
    removeBlock: "칸 삭제",
    saveBtn: "저장 (실시간 반영)",
    saved: "저장되었습니다.",
    saveFail: "저장에 실패했습니다.",
    loadSeedBtn: "샘플 시간표 불러오기 (최초 1회, 기존 데이터 덮어씀)",
    loadSeedConfirm: "현재 시간표 데이터를 사진 속 초기값으로 덮어씁니다. 계속할까요?",
    dateLabel: "날짜",
    noticeInputLabel: "공지사항 내용 (한글, 영문은 자동 번역됨)",
    title: "제목",
    time: "시간",
    tone: "색상",
    toneNormal: "기본",
    toneRed: "빨강 강조",
    toneBlue: "파랑 강조",
    loading: "불러오는 중...",
    langBtn: "ENG",
    menuSchedule: "셔틀버스 시간표",
    menuNotice: "공지사항",
    menuBoard: "게시판",
    backToHome: "← 홈으로",
    boardEmpty: "게시글이 없습니다.",
    editBoardTitle: "게시판 관리",
    postTitleLabel: "제목",
    postContentLabel: "내용",
    boardTabFree: "자유게시판",
    boardTabCS: "CS 게시판",
    writePostBtn: "+ 글쓰기",
    searchPlaceholder: "검색어를 입력하세요",
    postTitlePlaceholder: "제목을 입력하세요",
    postContentPlaceholder: "내용을 입력하세요",
    anonymousLabel: "익명",
    postNamePlaceholder: "이름",
    postCountryPlaceholder: "국가",
    postPasswordPlaceholder: "비밀번호 (삭제/열람 시 필요)",
    attachImageLabel: "사진 첨부 (선택)",
    removeImageBtn: "사진 제거",
    submitPostBtn: "등록",
    cancelBtn: "취소",
    backToListBtn: "← 목록으로",
    commentsTitle: "댓글",
    commentPlaceholder: "댓글을 입력하세요",
    addCommentBtn: "등록",
    noComments: "댓글이 없습니다.",
    secretPostLabel: "비밀글입니다. 비밀번호를 입력해주세요.",
    wrongPassword: "비밀번호가 일치하지 않습니다.",
    deletePostBtn: "삭제",
    deletePasswordPrompt: "삭제하려면 비밀번호를 입력하세요.",
    adminReplyTitle: "관리자 답변",
    adminReplyPlaceholder: "답변을 입력하세요",
    saveReplyBtn: "답변 저장",
    noReplyYet: "아직 답변이 없습니다.",
    requiredFieldsMsg: "제목, 내용, 비밀번호를 입력해주세요.",
    imageTooLargeMsg: "이미지 용량이 너무 큽니다. 다른 사진을 선택해주세요.",
    anonymousDisplay: "익명",
    secretLockLabel: "🔒 비밀글",
    searchNoResult: "검색 결과가 없습니다."
  },
  en: {
    pageTitle: "Changwon 2026 WSPS World Championships",
    adminEntry: "Admin Login",
    backToMain: "← Back to schedule",
    adminTitle: "Admin Mode",
    loginBtn: "Log in",
    logoutBtn: "Log out",
    pwPlaceholder: "Admin password",
    loginFail: "Incorrect password.",
    noticeEmpty: "",
    noticeSectionTitle: "Notice",
    editTableTitle: "Edit Schedule",
    editNoticeTitle: "Edit Notice",
    addRow: "+ Add date row",
    removeRow: "Remove this date row",
    addBlock: "+ Add cell",
    removeBlock: "Remove cell",
    saveBtn: "Save (updates live)",
    saved: "Saved.",
    saveFail: "Save failed.",
    loadSeedBtn: "Load sample schedule (one-time, overwrites current data)",
    loadSeedConfirm: "This will overwrite the current schedule with the initial photo data. Continue?",
    dateLabel: "Date",
    noticeInputLabel: "Notice content (Korean; English is auto-translated)",
    title: "Title",
    time: "Time",
    tone: "Color",
    toneNormal: "Normal",
    toneRed: "Red highlight",
    toneBlue: "Blue highlight",
    loading: "Loading...",
    langBtn: "KOR",
    menuSchedule: "Shuttle Bus Schedule",
    menuNotice: "Notice",
    menuBoard: "Board",
    backToHome: "← Back to home",
    boardEmpty: "No posts yet.",
    editBoardTitle: "Manage Board",
    postTitleLabel: "Title",
    postContentLabel: "Content",
    boardTabFree: "Free Board",
    boardTabCS: "CS Board",
    writePostBtn: "+ Write",
    searchPlaceholder: "Search posts",
    postTitlePlaceholder: "Enter a title",
    postContentPlaceholder: "Write your content",
    anonymousLabel: "Anonymous",
    postNamePlaceholder: "Name",
    postCountryPlaceholder: "Country",
    postPasswordPlaceholder: "Password (required to delete/view)",
    attachImageLabel: "Attach photo (optional)",
    removeImageBtn: "Remove photo",
    submitPostBtn: "Submit",
    cancelBtn: "Cancel",
    backToListBtn: "← Back to list",
    commentsTitle: "Comments",
    commentPlaceholder: "Write a comment",
    addCommentBtn: "Post",
    noComments: "No comments yet.",
    secretPostLabel: "This is a private post. Enter the password to view.",
    wrongPassword: "Incorrect password.",
    deletePostBtn: "Delete",
    deletePasswordPrompt: "Enter the password to delete this post.",
    adminReplyTitle: "Admin reply",
    adminReplyPlaceholder: "Write a reply",
    saveReplyBtn: "Save reply",
    noReplyYet: "No reply yet.",
    requiredFieldsMsg: "Please fill in title, content, and password.",
    imageTooLargeMsg: "The image is too large. Please choose another photo.",
    anonymousDisplay: "Anonymous",
    secretLockLabel: "🔒 Private",
    searchNoResult: "No matching posts."
  }
};

// data-i18n="key" 가 붙은 모든 엘리먼트의 텍스트를 언어에 맞게 교체
window.applyStaticI18n = function (lang) {
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    var dict = window.I18N[lang] || window.I18N.ko;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-placeholder");
    var dict = window.I18N[lang] || window.I18N.ko;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
};

// 시간표 날짜(MM.DD)의 요일을 계산할 때 기준으로 삼는 연도
window.EVENT_YEAR = 2026;

// "09.04" -> "09.04(금)" / "09.04(Fri)" 형태로 요일을 붙여줌
window.formatDateWithWeekday = function (dateStr, lang) {
  if (!dateStr) return dateStr;
  var parts = dateStr.split(".");
  if (parts.length < 2) return dateStr;
  var month = parseInt(parts[0], 10);
  var day = parseInt(parts[1], 10);
  if (!month || !day) return dateStr;
  var d = new Date(window.EVENT_YEAR, month - 1, day);
  if (isNaN(d.getTime())) return dateStr;
  var weekdays = lang === "en"
    ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    : ["일", "월", "화", "수", "목", "금", "토"];
  return dateStr + "(" + weekdays[d.getDay()] + ")";
};

// tone 값 -> css class 매핑
window.toneClass = function (tone) {
  if (tone === "red") return "tone-red";
  if (tone === "blue") return "tone-blue";
  return "tone-normal";
};

// 출발지 라벨(Mercure / Grand City)에 따라 다른 색상 class를 부여 (빨강/파랑 강조 행은 건드리지 않음)
window.locationClass = function (label, tone) {
  if (tone === "red" || tone === "blue") return "";
  if (!label) return "";
  if (/mercure/i.test(label)) return "loc-mercure";
  if (/grand city/i.test(label)) return "loc-grandcity";
  return "";
};

/**
 * 예전 포맷들(① header+span 매칭, ② titleKo/titleEn/timeKo/timeEn 분리 포맷)로
 * 저장된 표 데이터를 현재 포맷으로 변환.
 * 현재 포맷: { rows: [{ date: "09.04", blocks: Block[] }, ...] }
 * Block = { title, time, tone } (제목/시간을 각 칸에 언어 구분 없이 직접 저장)
 */
window.normalizeTable = function (table) {
  if (!table) return null;
  var rows;
  if (table.header && table.header.length) {
    // 가장 오래된 포맷: header + span
    var headerSlotsKo = [];
    table.header.forEach(function (block) {
      var span = block.span || 1;
      for (var i = 0; i < span; i++) headerSlotsKo.push(block.ko || block.en || "");
    });
    function uniqueJoin(arr) {
      var seen = [];
      arr.forEach(function (v) { if (v && seen.indexOf(v) === -1) seen.push(v); });
      return seen.join(" / ");
    }
    rows = (table.rows || []).map(function (row) {
      var offset = 0;
      var newBlocks = (row.blocks || []).map(function (block) {
        var span = block.span || 1;
        var title = uniqueJoin(headerSlotsKo.slice(offset, offset + span));
        offset += span;
        return { title: title, time: block.ko || block.en || "", tone: block.tone || "normal" };
      });
      return { date: row.date, blocks: newBlocks };
    });
  } else {
    rows = table.rows || [];
  }

  // 두 번째 단계: 각 block을 { title, time, tone } 으로 통일 (중간 포맷인 titleKo/titleEn/timeKo/timeEn 지원)
  rows = rows.map(function (row) {
    var newBlocks = (row.blocks || []).map(function (block) {
      if (block.title !== undefined || block.time !== undefined) {
        return { title: block.title || "", time: block.time || "", tone: block.tone || "normal" };
      }
      return {
        title: block.titleKo || block.titleEn || "",
        time: block.timeKo || block.timeEn || "",
        tone: block.tone || "normal"
      };
    });
    return { date: row.date, blocks: newBlocks };
  });

  return { rows: rows };
};

// 번역 캐시 (같은 텍스트를 반복 번역 요청하지 않도록)
var _translateCache = {};
// 한글 텍스트를 영어로 자동 번역 (무료 MyMemory API 사용, 실패 시 원문 반환)
window.translateText = async function (koText) {
  if (!koText) return "";
  if (_translateCache[koText]) return _translateCache[koText];
  var stored = null;
  try { stored = localStorage.getItem("translateCache:" + koText); } catch (e) {}
  if (stored) { _translateCache[koText] = stored; return stored; }
  try {
    var url = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(koText) + "&langpair=ko|en";
    var res = await fetch(url);
    var data = await res.json();
    var translated = (data && data.responseData && data.responseData.translatedText) ? data.responseData.translatedText : koText;
    _translateCache[koText] = translated;
    try { localStorage.setItem("translateCache:" + koText, translated); } catch (e) {}
    return translated;
  } catch (e) {
    return koText;
  }
};

/**
 * 표 데이터를 컨테이너에 렌더링.
 * tableData = { rows: [{ date: "09.04", blocks: Block[] }, ...] }
 * Block = { title: "Mercure", time: "7:30", tone: "normal" }
 * lang = "ko" | "en" (표 내용 자체는 언어 구분 없이 그대로 표시)
 * selectedDate = 현재 선택된 날짜 라벨 (해당 행만 렌더링)
 */
window.renderScheduleRow = function (containerEl, tableData, lang, selectedDate) {
  containerEl.innerHTML = "";
  if (!tableData) return;

  var row = (tableData.rows || []).find(function (r) { return r.date === selectedDate; });
  if (!row) {
    var empty = document.createElement("div");
    empty.className = "table-empty";
    empty.textContent = lang === "en" ? "No data for this date." : "이 날짜의 데이터가 없습니다.";
    containerEl.appendChild(empty);
    return;
  }

  var list = document.createElement("div");
  list.className = "schedule-list";
  (row.blocks || []).forEach(function (block) {
    list.appendChild(makeItem(block.title || "", block.time || "", block.tone));
  });
  containerEl.appendChild(list);

  function makeItem(label, value, tone) {
    var item = document.createElement("div");
    item.className = "schedule-item " + window.toneClass(tone);
    var labelEl = document.createElement("div");
    labelEl.className = "item-label " + window.locationClass(label, tone);
    labelEl.textContent = label;
    var valueEl = document.createElement("div");
    valueEl.className = "item-value";
    valueEl.textContent = value;
    item.appendChild(labelEl);
    item.appendChild(valueEl);
    return item;
  }
};

// 날짜 탭 렌더링. onSelect(date) 콜백 호출
window.renderDateTabs = function (containerEl, dates, selectedDate, onSelect, lang) {
  containerEl.innerHTML = "";
  dates.forEach(function (d) {
    var tab = document.createElement("div");
    tab.className = "date-tab" + (d === selectedDate ? " active" : "");
    tab.textContent = window.formatDateWithWeekday(d, lang) || d;
    tab.addEventListener("click", function () { onSelect(d); });
    containerEl.appendChild(tab);
  });
};

// 09.04 ~ 09.15 날짜 목록을 뽑아냄 (rows 순서 그대로 사용)
window.getDateListFromTable = function (tableData) {
  if (!tableData || !tableData.rows) return [];
  return tableData.rows.map(function (r) { return r.date; });
};

// 홈 화면의 3가지 메뉴 = 각 하위 페이지의 소메뉴 탭 정의
window.SUB_PAGES = [
  { key: "schedule", href: "schedule.html", i18nKey: "menuSchedule" },
  { key: "notice", href: "notice.html", i18nKey: "menuNotice" },
  { key: "board", href: "board.html", i18nKey: "menuBoard" }
];

// 제목과 방향 탭(또는 본문) 사이에 들어가는 소메뉴 탭 렌더링
window.renderSubMenu = function (containerEl, activeKey, lang) {
  containerEl.innerHTML = "";
  var dict = window.I18N[lang] || window.I18N.ko;
  window.SUB_PAGES.forEach(function (p) {
    var tab = document.createElement("a");
    tab.className = "sub-menu-tab" + (p.key === activeKey ? " active" : "");
    tab.href = p.href;
    tab.textContent = dict[p.i18nKey] || p.key;
    containerEl.appendChild(tab);
  });
};

// 게시판 두 종류(자유게시판 / CS게시판)
window.BOARD_TYPES = [
  { key: "free", i18nKey: "boardTabFree" },
  { key: "cs", i18nKey: "boardTabCS" }
];

// 비밀번호(또는 임의 문자열)를 SHA-256 해시(hex)로 변환
window.sha256Hex = async function (text) {
  var enc = new TextEncoder().encode(text || "");
  var buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, "0"); }).join("");
};

// 이미지 파일을 캔버스로 리사이즈/압축해서 base64 data URL로 변환 (Firebase Storage 없이 Firestore에 바로 저장하기 위함)
window.compressImageToDataUrl = function (file, maxDim, quality) {
  maxDim = maxDim || 1000;
  quality = quality || 0.7;
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function () {
      var img = new Image();
      img.onload = function () {
        var w = img.width, h = img.height;
        if (w > h && w > maxDim) { h = Math.round(h * maxDim / w); w = maxDim; }
        else if (h > maxDim) { w = Math.round(w * maxDim / h); h = maxDim; }
        var canvas = document.createElement("canvas");
        canvas.width = w; canvas.height = h;
        canvas.getContext("2d").drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// 작성자 표시 이름: 익명이면 "익명"/"Anonymous", 아니면 "이름 (국가)"
window.formatAuthor = function (post, lang) {
  var dict = window.I18N[lang] || window.I18N.ko;
  if (post.anonymous || !post.name) return dict.anonymousDisplay;
  return post.country ? post.name + " (" + post.country + ")" : post.name;
};

// Firestore Timestamp(또는 없음) -> "YYYY.MM.DD HH:MM" 형태 문자열
window.formatPostDate = function (ts) {
  if (!ts || !ts.toDate) return "";
  var d = ts.toDate();
  function pad(n) { return String(n).padStart(2, "0"); }
  return d.getFullYear() + "." + pad(d.getMonth() + 1) + "." + pad(d.getDate()) + " " + pad(d.getHours()) + ":" + pad(d.getMinutes());
};
