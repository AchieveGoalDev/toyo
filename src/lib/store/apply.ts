import { writable } from "svelte/store"
import { personal, campus, contact } from "$lib/forms/data/basicDefs"
import type { SubformData, FormInput } from "$lib/forms/data/typeDefs"

export type FormSet = FormSetItem[]

export type FormSetItem = {
    label: string;
    data: SubformData
    isAllValid: boolean

}

const initialForms: FormSet = [
    {
        label: "campus",
        data: campus,
        isAllValid: false
    },
    {
        label: "personal",
        data: personal,
        isAllValid: false
    },
    {
        label: "contact",
        data: contact,
        isAllValid: false
    }
]

const scheduleForms: FormSet = [
    {
        label: "campus",
        data: campus,
        isAllValid: false
    },
    {
        label: "OTC",
        data: campus,
        isAllValid: false
    },
    {
        label: "schedule",
        data: campus,
        isAllValid: false
    },
    {
        label: "agree",
        data: campus,
        isAllValid: false
    },
]
//const initialForms: string[] = ["campus", "personal", "contact"];
//const scheduleForms: string[] = ["OTC", "schedule", "agree"];


export const forms = {
    personal, campus, contact
}

export const meta = {
    isInitial: null,
    formSets: {
        initialForms,
        scheduleForms
    },
    currentFormset: initialForms,
    currentForm: campus,
    currentIndex: 0,
    indexMax: 0,
    canSubmit: false,
    canProgress: false,

    setIndexData() {
        this.indexMax = this.currentFormset.length - 1;
    },

    setFormset(formSet: FormSet) {
        this.currentFormset = formSet
        this.currentForm = formSet[0].data
    },

    checkIsAllValid() {
        if (this.currentForm.meta.allValid) {
            this.currentFormset[this.currentIndex].isAllValid = true;
            this.resetCurrentForm(this.currentIndex)
        } else {
            this.currentFormset[this.currentIndex].isAllValid = false;
            this.resetCurrentForm(this.currentIndex)
        }
    },

    resetCurrentForm(index: number) {
        this.currentForm = this.currentFormset[index].data
        this.canProgress = this.currentFormset[index].isAllValid
        this.currentIndex = index
        this.indexMax = this.currentFormset.length - 1
    },

    checkCanSubmit() {
        let validCount = 0;

        this.currentFormset.forEach(form => {
            if (form.data.meta.allValid) {
                validCount++
            }
        })

        if (validCount / this.currentFormset.length === 1) {
            this.canSubmit = true
        } else {
            this.canSubmit = false
        }
    }
}

export const parsed = {

}

export const applicationData = writable({
    forms,
    meta,
    parsed,

    setCurrentForm(formLabel: string) {
        this.meta.currentForm = this.getFormData(formLabel, this.meta.currentFormset)
    },

    getFormData(formLabel: string, formSet: FormSet) {
        formSet.forEach((item) => {
            if (item.label === formLabel) {
                return item.data;
            }
        });
        return this.forms.campus;
    },

    parseInput(input: FormInput, keyString: string) {
        const value = input.value
        const parsedInput = { [keyString]: value }
        return parsedInput
    },

    parseSubForm(subform: SubformData) {
        let returnData = {}
        const keys = Object.keys(subform.inputs)

        keys.forEach(key => {
            const inputData = subform.inputs[key]
            const parsedInput = this.parseInput(inputData, key)
            returnData = { ...returnData, ...parsedInput }
        })

        return returnData
    },

    parseFormData() {
        let formData = {}

        this.meta.currentFormset.forEach(subform => {
            formData = { ...formData, ...this.parseSubForm(subform.data) }
        })

        this.parsed = formData
    },
})