import { writable } from "svelte/store";

export const campus = writable("");
export const level = writable("");
export const course = writable("");
export const mtm = writable("");

export const triggerCampusUpdate = writable(false);
export const triggerCourseUpdate = writable(false);

function handleCampusUpdate() {}

function handleCourseUpdate() {}
