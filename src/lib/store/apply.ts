import { writable } from "svelte/store"
import { personal, campus, contact } from "$lib/forms/data/basicDefs"
import type { SubformData } from "$lib/forms/data/typeDefs"

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
        console.log(this.currentForm.meta.allValid)

        if (this.currentForm.meta.allValid) {
            this.currentFormset[this.currentIndex].isAllValid = true;
            this.resetCurrentForm(this.currentIndex)
        } else {
            this.currentFormset[this.currentIndex].isAllValid = false;
            this.resetCurrentForm(this.currentIndex)
        }
    },

    resetCurrentForm(index: number) {
        console.log(index)
        this.currentForm = this.currentFormset[index].data
        this.canProgress = this.currentFormset[index].isAllValid
        this.currentIndex = index
        this.indexMax = this.currentFormset.length - 1
        console.log(this)
    }

}

export const parsedApplicationData = {

}

export const applicationData = writable({
    forms,
    meta,

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
    }
})