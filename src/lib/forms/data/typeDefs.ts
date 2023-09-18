/* eslint-disable  @typescript-eslint/no-explicit-any */
import { validateRadio, validateVoid, validateSelect } from "./validatorDefs";

export type SelectValidator = (input: string, defaultChoice: string) => string[]
export type SingleInputValidator = (inputOne: string) => string[];
export type DoubleInputValidator = (inputOne: string, inputTwo: string) => string[];

export type InputSize = "short" | "medium" | "long";
export type FormInput = SingleTextInput | DoubleTextInput | RadioInput | ImageSelectInput



/*** PARAMETER DEFINITIONS ***/
export type TextInputParams = {
    size: InputSize;
    length: number;
    label: string;
    description: string[];
    altText: string;
    placeholder: string;
    trailText: string;
    isUpper: boolean;
    isRequired: boolean;
}

export type RadioInputParams = {
    label: string;
    altText: string;
    trailText: string;
    choices: string[];
    description: string[];
    isRequired: boolean;
}

export type ImageSelectChoiceParams = {
    bottomText: string;
    imageUrl: string;
    imageAlt: string;
    isDefault: boolean;
    value: string;
}

export type ImageSelectInputParams = {
    label: string;
    altText: string;
    choices: ImageSelectChoice[];
    default: ImageSelectChoice;
    description: string[];
    isRequired: boolean;
}

/*** END PARAMETER DEFINITIONS ***/


//***END INPUT DEFINITIONS***/
export class SingleTextInput {
    [key: string]: any;
    inputType: "text"
    size: InputSize;
    label: string;
    description: string[];
    altText: string;
    placeholder: string;
    length: number;
    trailText: string;
    validator: SingleInputValidator;
    isValid: boolean;
    isRequired: boolean;
    value: string;
    errors: string[];

    constructor(
        validator: SingleInputValidator,
        params: TextInputParams
    ) {
        this.inputType = "text"
        this.label = params.label
        this.validator = validator;
        this.size = params.size;
        this.altText = params.altText;
        this.placeholder = params.placeholder
        this.length = params.length;
        this.trailText = params.trailText;
        this.description = params.description;
        this.isRequired = params.isRequired;
        this.isUpper = params.isUpper;
        this.isValid = false;
        this.value = "";
        this.errors = [];
    }

    validate() {
        const validatorData = this.validator(this.value);

        if (validatorData.length === 0) {
            this.clearErrors()
            this.isValid = true
        } else {
            this.errors = validatorData
            this.isValid = false
        }
    }

    clearErrors() {
        this.errors = []
    }
}

export class DoubleTextInput {
    [key: string]: any;
    inputType: "double-text";
    size: InputSize;
    label: string;
    description: string[];
    altText: string;
    placeholder: string;
    length: number;
    trailText: string;
    validator: DoubleInputValidator;
    isValid: boolean;
    isRequired: boolean;
    valueOne: string;
    valueTwo: string;
    errors: string[];

    constructor(
        validator: DoubleInputValidator,
        params: TextInputParams
    ) {
        this.inputType = "double-text";
        this.label = params.label
        this.validator = validator;
        this.size = params.size;
        this.altText = params.altText;
        this.placeholder = params.placeholder
        this.length = params.length;
        this.trailText = params.trailText;
        this.description = params.description;
        this.isRequired = params.isRequired;
        this.isUpper = params.isUpper;
        this.isValid = false;
        this.value = "";
        this.errors = [];
    }

    validate() {
        const validatorData = this.validator(this.valueOne, this.valueTwo);

        console.log("validating")

        if (validatorData.length === 0) {
            this.clearErrors()
            this.isValid = true
        } else {
            this.errors = validatorData
            this.isValid = false
        }
    }

    clearErrors() {
        this.errors = []
    }
}

export class RadioInput {
    [key: string]: any;
    inputType: "radio";
    label: string;
    description: string[];
    altText: string;
    trailText: string;
    choices: string[];
    validator: SingleInputValidator
    isValid: boolean;
    isRequired: boolean;
    value: string;
    errors: string[];

    constructor(
        params: RadioInputParams
    ) {
        this.inputType = "radio"
        this.label = params.label
        this.altText = params.altText;
        this.trailText = params.trailText;
        this.choices = params.choices;
        this.description = params.description;
        this.isRequired = params.isRequired;
        this.isValid = false;
        this.value = "";
        this.errors = [];

        if (params.isRequired) {
            this.validator = validateRadio
        } else {
            this.validator = validateVoid
        }
    }


    validate() {
        const validatorData = this.validator(this.value);

        if (validatorData?.length === 0) {
            this.clearErrors()
            this.isValid = true
        } else {
            this.errors = validatorData
            this.isValid = false
        }
    }

    clearErrors() {
        this.errors = []
    }
}

export class CheckboxInput {

}

export class ImageSelectInput {
    [key: string]: any;
    inputType: "image-select";
    validator: SelectValidator
    label: string;
    altText: string;
    choices: ImageSelectChoice[];
    default: ImageSelectChoice;
    description: string[];
    isRequired: boolean;
    isValid: boolean;
    value: string;
    errors: string[];

    constructor(params: ImageSelectInputParams) {
        this.inputType = "image-select";
        this.label = params.label;
        this.altText = params.altText;
        this.choices = params.choices;
        this.default = params.default;
        this.description = params.description;
        this.isRequired = params.isRequired;
        this.isValid = false;
        this.value = params.default.value;
        this.errors = []

        if (params.isRequired) {
            this.validator = validateSelect
        } else {
            this.validator = validateVoid
        }
    }

    clearErrors() {
        this.errors = []
    }

    validate() {
        const validatorData = this.validator(this.value, this.default.value);

        if (validatorData?.length === 0) {
            this.clearErrors()
            this.isValid = true
        } else {
            this.errors = validatorData
            this.isValid = false
        }
    }
}


export class ImageSelectChoice {
    imageUrl: string;
    imageAlt: string;
    value: string;
    bottomText: string;
    isDefault: boolean;


    constructor(params: ImageSelectChoiceParams) {
        this.imageUrl = params.imageUrl;
        this.imageAlt = params.imageAlt;
        this.bottomText = params.bottomText
        this.value = params.value;
        this.isDefault = params.isDefault;
    }
}
//***END INPUT DEFINITIONS***/

//***FORM DEFINITIONS***/
export class SubformData {
    meta: {
        percentComplete: number,
        allValid: boolean,
    };
    data: {
        [key: string]: FormInput
    }

    constructor(data: { [key: string]: FormInput }) {
        this.meta = {
            percentComplete: 0,
            allValid: false
        };
        this.data = data
    }

    calculateValid() {
        const dataKeys: string[] = Object.keys(this.data)
        let validCount = 0;

        dataKeys.forEach(key => {
            if (this.data[key].isValid === true) {
                console.log(this.data[key].value, "is valid")
                validCount++
            }
        })

        if (validCount / dataKeys.length === 1) {
            this.meta.allValid = true
        }

        this.meta.percentComplete = validCount / dataKeys.length;
    }


}
//*** END FORM DEFINITIONS***/

