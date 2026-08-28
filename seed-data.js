/* 첨부 사진 속 셔틀버스 시간표 초기값. 관리자 화면의 "샘플 시간표 불러오기" 버튼에서 사용됩니다.
 * 이후에는 관리자가 화면에서 자유롭게 수정하면 됩니다. */

function t(ko, span, tone) {
  return { ko: ko, en: ko, span: span || 1, tone: tone || "normal" };
}

const DATES_9_04_TO_15 = ["09.04","09.05","09.06","09.07","09.08","09.09","09.10","09.11","09.12","09.13","09.14","09.15"];

window.SEED_DATA = {
  toRange: {
    header: [
      t("Mercure", 1), t("Grand City", 1), t("Mercure", 1), t("Grand City", 1), t("Mercure", 1), t("Grand City", 1)
    ],
    rows: DATES_9_04_TO_15.map(function (d) {
      return {
        date: d,
        blocks: [t("7:30"), t("8:00"), t("8:30"), t("9:00"), t("11:00"), t("11:30")]
      };
    })
  },
  toCity: {
    header: [
      t("Grand City", 1), t("Mercure", 1), t("Grand City", 1), t("Mercure", 1), t("Grand City", 1), t("Mercure", 1)
    ],
    rows: [
      { date: "09.04", blocks: [t("14:00", 2), t("16:00", 2), t("17:30", 2)] },
      { date: "09.05", blocks: [t("14:00", 2), t("16:00", 2), t("17:30", 2)] },
      { date: "09.06", blocks: [t("14:00", 2), t("16:00", 2), t("17:30", 2)] },
      { date: "09.07", blocks: [t("14:00", 2), t("16:00", 2), t("17:30", 2)] },
      { date: "09.08", blocks: [t("14:00", 2), t("16:00", 2), t("18:00", 2)] },
      { date: "09.09", blocks: [
          t("14:00 (for Technical Meeting, Opening Ceremony) - Mercure", 4, "red"),
          t("15:00", 2, "blue")
        ] },
      { date: "09.10", blocks: [t("14:00", 2), t("16:00", 2), t("18:00", 2)] },
      { date: "09.11", blocks: [t("14:00", 2), t("16:00", 2), t("17:00", 2)] },
      { date: "09.12", blocks: [t("14:00", 2), t("16:00", 2), t("18:00", 2)] },
      { date: "09.13", blocks: [t("14:00", 2), t("16:00", 2), t("17:30", 2)] },
      { date: "09.14", blocks: [t("14:00", 2), t("16:00", 2), t("17:00", 2)] },
      { date: "09.15", blocks: [t("14:00", 2), t("16:00", 2), t("-", 2)] }
    ]
  }
};
