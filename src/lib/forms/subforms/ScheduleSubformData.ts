import type {
  SelectInputWithLabel,
  RadioInput,
} from "$lib/forms/ApplicationData";

const 白山Times: string[] = [
  "10:40 - 11:20",
  "11:30 - 12:10",
  "12:15 - 12:55",
  "13:00 - 13:40",
  "13:50 - 14:30",
  "14:45 - 15:25",
  "15:35 - 16:15",
  "16:30 - 17:10",
  "18:15 - 18:55",
  "19:05 - 19:45",
];

export const 第1Data: SelectInputWithLabel = {
  isNecessary: true,
  label: "第1希望",
  alt: "第1希望の入力",
  placeholder: "--第1希望を選択--",
  options: 白山Times,
  desc: [],
};

export const 第2Data: SelectInputWithLabel = {
  isNecessary: true,
  label: "第2希望",
  alt: "第2希望の入力",
  placeholder: "--第2希望を選択--",
  options: 白山Times,
  desc: [],
};

export const 第3Data: SelectInputWithLabel = {
  isNecessary: true,
  label: "第3希望",
  alt: "第3希望の入力",
  placeholder: "--第3希望を選択--",
  options: 白山Times,
  desc: [],
};

export const 変更Data: RadioInput = {
  isNecessary: true,
  label: "第４クォーターでの時間割変更の有無",
  alt: "時間割変更の有無の入力",
  choices: ["あり", "なし"],
  desc: [],
};
