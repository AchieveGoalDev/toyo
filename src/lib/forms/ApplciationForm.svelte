<script lang="ts">
  import { slide } from "svelte/transition";

  import SchoolDataSection from "./SchoolDataSection.svelte";
  import ProgressBar from "$lib/forms/input/ProgressBar.svelte";

  import type { Campus } from "$lib/forms/ApplicationData";

  import { campuses } from "$lib/forms/ApplicationData";

  let campus: string;

  let schoolData: string;

  function handleSelectCampus(name: string) {
    let returnVal: any;

    campuses.forEach((selected) => {
      if (selected.name === name) {
        returnVal = selected;
      }
    });

    return returnVal;
  }

  $: selectedCampus = handleSelectCampus(campus);
</script>

<form class="flex flex-col bg-slate-50 w-2/3 mx-auto grow-0 items-center">
  <ProgressBar />

  <SchoolDataSection bind:data={schoolData} />
</form>
//Campus Selector //Lesson Type Selector //Course Selector //Main
