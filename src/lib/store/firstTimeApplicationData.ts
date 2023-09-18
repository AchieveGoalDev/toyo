import { writable } from "svelte/store"
import { personal, agree } from "$lib/forms/data/basicDefs"

export const basicData = writable({ personal, agree })