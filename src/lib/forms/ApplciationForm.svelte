<script lang="ts">
  import { slide } from "svelte/transition";

  import SchoolDataSection from "./SchoolDataSection.svelte";
  import ProgressBar from "$lib/forms/input/ProgressBar.svelte";

  import { campuses } from "$lib/forms/ApplicationData";

  let campus: string;

  let schoolData: {
    campus: string;
    level: string;
    course: string;
    mtm: string;
  };

  let schoolDataIsValid: boolean;

  let progressData = {
    current: 1,
    status: "incomplete",
  };

  function handleSelectCampus(name: string) {
    let returnVal: any;

    campuses.forEach((selected) => {
      if (selected.name === name) {
        returnVal = selected;
      }
    });

    return returnVal;
  }

  function handleNext() {
    if (schoolDataIsValid) {
      progressData.current++;
      progressData.status = "incomplete";
    }
  }

  $: selectedCampus = handleSelectCampus(campus);
  $: console.log(schoolData, schoolDataIsValid);
  $: if (schoolDataIsValid) {
    progressData.status = "complete";
  }

  $: console.log(progressData);
</script>

<form class="flex flex-col bg-slate-50 w-2/3 mx-auto grow-0 items-center">
  <ProgressBar progress={progressData} />

  <SchoolDataSection bind:data={schoolData} bind:isValid={schoolDataIsValid} />
  <button
    on:click|preventDefault={handleNext}
    class="disabled:bg-slate-500 disabled:text-white: transition-all ease-in bg-sky-800 text-white rounded-md hover:bg-sky-600 p-2 text-xl"
    disabled={!schoolDataIsValid}>次へ</button
  >
</form>
//Campus Selector //Lesson Type Selector //Course Selector //Main
