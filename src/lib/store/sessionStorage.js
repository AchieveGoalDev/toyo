import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const formData = writable(browser && sessionStorage.getItem("formdata"));

//@ts-expect-error Argument of type 'string | null' is not assignable to parameter of type 'string'
formData.subscribe((val) => browser && sessionStorage.setItem("formdata", val));
