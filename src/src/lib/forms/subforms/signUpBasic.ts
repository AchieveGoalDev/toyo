import type { SimpleInputData, TwoInputData } from "./inputDefs";

export type BasicInfo = {
  学籍番号: SimpleInputData;
  氏名: SimpleInputData;
  フリガナ: SimpleInputData;
  英字名First: SimpleInputData;
  英字名Last: SimpleInputData;
  学年: SimpleInputData;
  学部: SimpleInputData;
  学科: SimpleInputData;
  英検: SimpleInputData;
  TOEFL: SimpleInputData;
  IELTS: SimpleInputData;
  大学メール: TwoInputData;
  個人メール: TwoInputData;
  電話番号: SimpleInputData;
  住所: SimpleInputData;
  性別: SimpleInputData;
  種別: SimpleInputData;
};

export type TestInfo = {
  試験: SimpleInputData;
  その他: SimpleInputData;
};

export type Comment = {
  試験: SimpleInputData;
  TOEIC: SimpleInputData;
  備考: SimpleInputData;
  きっかけ: SimpleInputData;
};
