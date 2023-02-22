//************CLASS DEFINITIONS  *****/

class ImageArrayItem {
  img: string;
  text: string;
  name: string;

  constructor(img: string, text: string, name: string) {
    this.img = img;
    this.text = text;
    this.name = name;
  }
}

//**********TYPE DATA ***************/

export type Campus = {
  name: string;
  group: string[];
  mtm: string[];
};

export type FormSection = {
  requiredInputs: number;
  name: string;
  inputs: [TextInput | SelectInput | RadioInput];
};

export type TextInput = {
  isNecessary: boolean;
  isUpper: boolean;
  label: string;
  placeholder: string;
  alt: string;
  desc: string[];
  validator: (input: string) => string[];
  length: number;
};

export type RadioInput = {
  thing: string;
};

export type SelectInput = {
  placeholder: string;
  options: string[];
};

export type ImageArray = ImageArrayItem[];

export type ImageSelectInput = {
  isNecessary: boolean;
  placeholder: string;
  options: string[];
  images: ImageArray;
};

//**********FORM SECTION DATA **********/

// ************CAMPUS DATA ************/

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

//*****************TEXT INPUT DATA **********/

export const 学籍番号Data: TextInput = {
  isNecessary: true,
  label: "学籍番号",
  desc: [
    "アルファベット入力の際は大文字で入力してください。",
    "学籍番号がアルファベットから始まることはありません。",
  ],
  alt: "学籍番号の入力",
  placeholder: "",
  length: 10,
  isUpper: true,
  validator: (stNumber: string) => {
    const letterRegex = new RegExp("^[a-zA-Z]+$");
    const fullSpaceRegex = new RegExp("^[^ -~｡-ﾟ]+$");

    const errors: string[] = [];
    if (stNumber) {
      const stringArray = stNumber.split("");
      let hasFull = false;

      stringArray.forEach((letter) => {
        if (letter.match(fullSpaceRegex)) {
          hasFull = true;
        }
      });

      if (hasFull) {
        errors.push("半角文字で入力してください");
      }

      if (stringArray[0].match(letterRegex)) {
        errors.push("学籍番号はアルファベットから始まることはありません");
      }

      if (stringArray.length < 10 && stringArray.length > 0) {
        errors.push("10文字以上にしてください");
      }
    } else if (!stNumber) {
      errors.push("必要項目です");
    }
    return errors;
  },
};

export const 氏名Data: TextInput = {
  isNecessary: true,
  label: "氏名",
  desc: [],
  alt: "氏名の入力",
  placeholder: "山田　太郎",
  length: 100,
  isUpper: false,
  validator: (name: string) => {
    const errors: string[] = [];
    if (!name) {
      errors.push("必要項目です");
    }

    return errors;
  },
};

export const フリガナData: TextInput = {
  isNecessary: true,
  label: "フリガナ",
  desc: [],
  alt: "フリガナの入力",
  placeholder: "ヤマダ　タロウ",
  length: 30,
  isUpper: false,
  validator: (name: string) => {
    const errors: string[] = [];
    const カタカナ = new RegExp("^[\u30A0-\u30FF]+$");
    const space = new RegExp("　+");
    let isKana = true;

    if (name) {
      const nameString = name.split("");

      nameString.forEach((letter) => {
        console.log(letter.match(カタカナ));
        console.log(letter.match(space));
        if (!letter.match(カタカナ) && !letter.match(space)) {
          isKana = false;
        }
      });
    }

    if (!isKana) {
      errors.push("全角カタカナで入力してください");
    }

    if (!name) {
      errors.push("必要項目です");
    }

    return errors;
  },
};

export const 英字名FirstData: TextInput = {
  isNecessary: true,
  label: "英字名 First Name (名前)",
  desc: ["頭文字のみ大文字で入力してください。"],
  alt: "英字名で名前の入力",
  placeholder: "Taro",
  length: 30,
  isUpper: false,
  validator: (name: string) => {
    const errors: string[] = [];
    const letterRegex = new RegExp("^[a-zA-Z]+$");
    let isLetters = true;

    if (name) {
      const nameArray = name.split("");
      nameArray.forEach((letter) => {
        if (!letter.match(letterRegex)) {
          isLetters = false;
        }
      });
    }

    if (!isLetters) {
      errors.push("半角ロマジで入力してください");
    }

    if (!name) {
      errors.push("必要項目です");
    }

    return errors;
  },
};

export const 英字名LastData: TextInput = {
  isNecessary: true,
  label: "英字名 Last Name (名字)",
  desc: [],
  alt: "英字名で名字の入力",
  placeholder: "YAMADA",
  length: 30,
  isUpper: true,
  validator: (name: string) => {
    const errors: string[] = [];
    const letterRegex = new RegExp("^[a-zA-Z]+$");
    let isLetters = true;

    if (name) {
      const nameArray = name.split("");
      nameArray.forEach((letter) => {
        if (!letter.match(letterRegex)) {
          isLetters = false;
        }
      });
    }

    if (!isLetters) {
      errors.push("半角ロマジで入力してください");
    }

    if (!name) {
      errors.push("必要項目です");
    }

    return errors;
  },
};

//********************SELECT INPUT DATA *********/
export const levelSelector: SelectInput = {
  placeholder: "--レベルを選択--",
  options: [
    "初級コース　（TOEIC～395）",
    "中級コース　（TOEIC 400～585）",
    "上級コース　（TOEIC 590～）",
  ],
};

export const courseSelector: SelectInput = {
  placeholder: "--講座スタイルを選択--",
  options: ["グループレッスン", "マンツーマンレッスン"],
};

export const mtmSelector: SelectInput = {
  placeholder: "--講座スタイルを選択--",
  options: [
    "平日講座　マンツーマンレッスン",
    "土曜日講座　マンツーマンレッスン",
  ],
};

//*********************IMAGE SELECT INPUT DATA *********/

export const campusSelector: ImageSelectInput = {
  placeholder: "--キャンパスを選択--",
  isNecessary: true,
  options: campuses.map((campus) => campus.name),
  images: [
    new ImageArrayItem("Unselected.webp", "", ""),
    new ImageArrayItem("/INIAD.webp", "INIAD", "INIAD"),
    new ImageArrayItem("/WELLB.webp", "WELLB", "WELLB"),
    new ImageArrayItem("/HAKUSAN.webp", "白山", "白山"),
    new ImageArrayItem("/ITAKURA.webp", "板倉", "板倉"),
    new ImageArrayItem("/ONLINE.webp", "オンライン", "オンライン"),
  ],
};
