//************CLASS DEFINITIONS  *****/

export class ImageArrayItem {
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

export type PhoneInput = {
  isNecessary: boolean;
  label: string;
  desc: string[];
};

export type AddressInput = {
  isNecessary: boolean;
  label: string;
  desc: string[];
};

export type LargeTextInput = {
  isNecessary: boolean;
  size: string;
  label: string;
  desc: string[];
  placeholder: string;
};

export type TextInput = {
  size: string;
  isNecessary: boolean;
  isUpper: boolean;
  label: string;
  placeholder: string;
  alt: string;
  desc: string[];
  validator: (input: string) => string[];
  length: number;
  trailText: string;
};

export type RadioInput = {
  isNecessary: boolean;
  label: string;
  alt: string;
  choices: string[];
  desc: string[];
};

export type CheckboxInput = {
  isNecessary: boolean;
  label: string;
  alt: string;
  choices: string[];
  desc: string[];
};

export type SelectInput = {
  placeholder: string;
  options: string[];
};

export type SelectInputWithLabel = {
  isNecessary: boolean;
  placeholder: string;
  alt: string;
  options: string[];
  label: string;
  desc: string[];
};

export type ImageArray = ImageArrayItem[];

export type ImageSelectInput = {
  isNecessary: boolean;
  placeholder: string;
  options: string[];
  images: ImageArray;
};

export type EmailInput = {
  isNecessary: boolean;
  alt: string;
  label: string;
  placeholder: string;
  desc: string[];
};

//**********FORM SECTION DATA **********/

// ************CAMPUS DATA ************/

//************************ RADIO INPUT DATA *************/

export const prevSemester: RadioInput = {
  isNecessary: true,
  label: "2022年度通年受講生 ",
  alt: "",
  choices: ["はい", "いいえ"],
  desc: [],
};
