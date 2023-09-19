export class SimpleInputData {
  value: string;
  validate: (a: string) => boolean;
  isRequired: boolean;
  isValid: boolean;

  constructor(isReq: boolean, validator: (a: string) => boolean) {
    this.value = "";
    this.validate = validator;
    this.isRequired = isReq;
    this.isValid = false;
  }
}

export class TwoInputData {
  value: string;
  validate: (a: string, b: string) => boolean;
  isRequired: boolean;
  isValid: boolean;

  constructor(isReq: boolean, validator: (a: string) => boolean) {
    this.value = "";
    this.validate = validator;
    this.isRequired = isReq;
    this.isValid = false;
  }
}
