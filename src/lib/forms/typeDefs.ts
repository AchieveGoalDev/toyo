export type SingleInputValidator = (inputOne: string) => string[];
export type DoubleInputValidator = (inputOne: string, inputTwo: string) => string[];
export type InputSize = "short" | "medium" | "long"

/* eslint-disable  @typescript-eslint/no-explicit-any */
export class SingleTextInput {
    [key: string]: any;
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
        label: string,
        validator: SingleInputValidator,
        description: string[] = [],
        altText = "",
        placeholder = "",
        length = 0,
        trailText = "",
        isRequired = false,
        size: InputSize = "short",
        isUpper = false
    ) {
        this.label = label
        this.validator = validator;
        this.size = size;
        this.altText = altText;
        this.placeholder = placeholder
        this.length = length;
        this.trailText = trailText;
        this.description = description;
        this.isRequired = isRequired;
        this.isValid = false;
        this.isUpper = isUpper;
        this.value = "";
        this.errors = [];
    }

    validate() {
        const validatorData = this.validator(this.value);

        console.log(validatorData)

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