import { writable } from "svelte/store"
import { personal, agree, campus, contact } from "$lib/forms/data/basicDefs"


export const dataCheck = writable({ campus })

export const basicData = writable({ personal, agree, campus, contact })

