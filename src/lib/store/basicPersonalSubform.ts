import { writable } from "svelte/store"
import { personal } from "$lib/forms/basic/basicDefs"

export const basicData = writable({ personal })