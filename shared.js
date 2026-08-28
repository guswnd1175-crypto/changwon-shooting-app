/* 참가자 화면(index.html)과 관리자 화면(admin.html)이 공통으로 사용하는
 * 상수 / 다국어 사전 / 렌더링 함수 모음.
 * (일반 <script> 로 로드되는 classic script 입니다. type="module" 아님)
 */

// 총 컬럼 수 (표 한 줄이 채울 수 있는 최대 폭의 기준값. block.span 계산에 사용)
window.TOTAL_COLS = 6;

// 방향(direction) 두 가지 고정값
window.DIRECTIONS = [
  { key: "toRange", label: "Grand City / Mercure → RANGE" },
  { key: "toCity", label: "RANGE → Grand City / Mercure" }
];

// 화면에 쓰이는 고정 문구(UI 라벨) 다국어 사전
window.I18N = {
  ko: {
    pageTitle: "창원 장애인사격대회 셔틀버스 시간표",
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
    textKo: "한글 텍스트",
    textEn: "영문 텍스트",
    span: "칸 너비",
    tone: "색상",
    toneNormal: "기본",
    toneRed: "빨강 강조",
    toneBlue: "파랑 강조",
    loading: "불러오는 중...",
    langBtn: "ENG"
  },
  en: {
    pageTitle: "Changwon Para Shooting Championship - Shuttle Bus Schedule",
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
    textKo: "Korean text",
    textEn: "English text",
    span: "Cell width",
    tone: "Color",
    toneNormal: "Normal",
    toneRed: "Red highlight",
    toneBlue: "Blue highlight",
    loading: "Loading...",
    langBtn: "KOR"
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
 * 표 데이터(header + rows)를 컨테이너에 렌더링.
 * tableData = { header: Block[], rows: [{ date: "09.04", blocks: Block[] }, ...] }
 * Block = { ko: "7:30", en: "7:30", span: 1, tone: "normal" }
 * lang = "ko" | "en"
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

  // 헤더의 각 칸(span 만큼)을 컬럼 슬롯 배열로 펼쳐서, 본문 블록의 span 위치와 매칭시킴
  var headerSlots = [];
  (tableData.header || []).forEach(function (block) {
    var span = block.span || 1;
    var label = (lang === "en" ? block.en : block.ko) || "";
    for (var i = 0; i < span; i++) headerSlots.push(label);
  });

  var list = document.createElement("div");
  list.className = "schedule-list";
  var offset = 0;
  (row.blocks || []).forEach(function (block) {
    var span = block.span || 1;
    var covered = headerSlots.slice(offset, offset + span);
    offset += span;
    var seen = [];
    covered.forEach(function (v) { if (v && seen.indexOf(v) === -1) seen.push(v); });
    list.appendChild(makeItem(seen.join(" / "), block, lang));
  });
  containerEl.appendChild(list);

  function makeItem(label, block, lang) {
    var item = document.createElement("div");
    item.className = "schedule-item " + window.toneClass(block.tone);
    var labelEl = document.createElement("div");
    labelEl.className = "item-label " + window.locationClass(label, block.tone);
    labelEl.textContent = label;
    var valueEl = document.createElement("div");
    valueEl.className = "item-value";
    valueEl.textContent = (lang === "en" ? block.en : block.ko) || "";
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
