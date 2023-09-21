import { writable } from "svelte/store"
import { personal, campus, contact } from "$lib/forms/data/basicDefs"


export const dataCheck = writable({ campus })

export const basicData = writable({ personal, campus, contact })

