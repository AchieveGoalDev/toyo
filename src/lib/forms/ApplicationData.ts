export type Campus = {
  name: string;
  group: string[];
  mtm: string[];
};

export const 川越: Campus = {
  name: "川越",
  group: ["初級コース(TOEIC～350)", "初中級コース(TOEIC 350～450)"],
  mtm: [],
};

export const 板倉: Campus = {
  name: "板倉",
  group: ["初級コース(TOEIC～350)", "初中級コース(TOEIC 350～450)"],
  mtm: [],
};

export const WELLB: Campus = {
  name: "WELLB",
  group: [
    "初級コース(TOEIC～350)",
    "初中級コース(TOEIC 350～450)",
    "中級コース (TOEIC 450～)",
  ],
  mtm: [],
};

export const INIAD: Campus = {
  name: "INIAD",
  group: ["中級コース (TOEIC 450～)"],
  mtm: [],
};

export const 白山: Campus = {
  name: "白山",
  group: [
    "初級コース(TOEIC～350)",
    "初中級コース(TOEIC 350～450)",
    "中級コース (TOEIC 450～)",
  ],
  mtm: ["平日講座", "土曜日講座"],
};

export const オンライン: Campus = {
  name: "オンライン",
  group: [],
  mtm: ["平日講座", "土曜日講座"],
};

export const campuses: Campus[] = [川越, 板倉, WELLB, INIAD, 白山, オンライン];
