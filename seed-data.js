/* 첨부 사진 속 셔틀버스 시간표 초기값. 관리자 화면의 "샘플 시간표 불러오기" 버튼에서 사용됩니다.
 * 이후에는 관리자가 화면에서 자유롭게 수정하면 됩니다. */

function block(titleKo, titleEn, timeKo, timeEn, tone) {
  return { titleKo: titleKo, titleEn: titleEn, timeKo: timeKo, timeEn: timeEn, tone: tone || "normal" };
}

const DATES_9_04_TO_15 = ["09.04","09.05","09.06","09.07","09.08","09.09","09.10","09.11","09.12","09.13","09.14","09.15"];

const TO_RANGE_BLOCKS = [
  ["Mercure", "7:30"], ["Grand City", "8:00"],
  ["Mercure", "8:30"], ["Grand City", "9:00"],
  ["Mercure", "11:00"], ["Grand City", "11:30"]
];

const TO_CITY_TIMES = {
  "09.04": ["14:00", "16:00", "17:30"],
  "09.05": ["14:00", "16:00", "17:30"],
  "09.06": ["14:00", "16:00", "17:30"],
  "09.07": ["14:00", "16:00", "17:30"],
  "09.08": ["14:00", "16:00", "18:00"],
  "09.10": ["14:00", "16:00", "18:00"],
  "09.11": ["14:00", "16:00", "17:00"],
  "09.12": ["14:00", "16:00", "18:00"],
  "09.13": ["14:00", "16:00", "17:30"],
  "09.14": ["14:00", "16:00", "17:00"],
  "09.15": ["14:00", "16:00", "-"]
};

window.SEED_DATA = {
  toRange: {
    rows: DATES_9_04_TO_15.map(function (d) {
      return {
        date: d,
        blocks: TO_RANGE_BLOCKS.map(function (pair) {
          return block(pair[0], pair[0], pair[1], pair[1]);
        })
      };
    })
  },
  toCity: {
    rows: DATES_9_04_TO_15.map(function (d) {
      if (d === "09.09") {
        return {
          date: d,
          blocks: [
            block("Grand City / Mercure", "Grand City / Mercure", "14:00 (for Technical Meeting, Opening Ceremony) - Mercure", "14:00 (for Technical Meeting, Opening Ceremony) - Mercure", "red"),
            block("Grand City / Mercure", "Grand City / Mercure", "15:00", "15:00", "blue")
          ]
        };
      }
      return {
        date: d,
        blocks: TO_CITY_TIMES[d].map(function (time) {
          return block("Grand City / Mercure", "Grand City / Mercure", time, time);
        })
      };
    })
  }
};
