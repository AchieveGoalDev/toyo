<script lang="ts">
  import { slide } from "svelte/transition";

  import CampusSelector from "$lib/forms/CampusSelector.svelte";
  import LevelSelector from "$lib/forms/LevelSelector.svelte";
  import CourseTypeSelector from "$lib/forms/CourseTypeSelector.svelte";
  import GroupLesson from "$lib/forms/GroupLesson.svelte";

  import type { Campus } from "$lib/forms/ApplicationData";
  import { campuses } from "$lib/forms/ApplicationData";

  let campus: string;

  let selectedCampus: Campus;
  let selectedCourseType: string;
  let selectedLevel: string;

  let levelValid: boolean;
  let courseTypeValid: boolean;

  function handleSelectCampus(name: string) {
    let returnVal: any;

    campuses.forEach((selected) => {
      if (selected.name === name) {
        console.log(selected);
        returnVal = selected;
      }
    });

    return returnVal;
  }

  $: selectedCampus = handleSelectCampus(campus);
</script>

<form class="flex flex-col bg-slate-50 w-2/3 mx-auto grow-0">
  <div>
    <CampusSelector bind:campus />
  </div>

  <div>
    {#if selectedCampus}
      <CourseTypeSelector
        bind:type={selectedCourseType}
        bind:isValid={courseTypeValid}
        data={selectedCampus}
      />
    {/if}
  </div>

  <div>
    {#if selectedCourseType}
      {#if selectedCourseType === "グループレッスン"}
        <LevelSelector
          data={selectedCampus?.group}
          bind:level={selectedLevel}
          bind:isValid={levelValid}
        />
      {:else if selectedCourseType === "マンツーマンレッスン"}
        <LevelSelector
          data={selectedCampus?.mtm}
          bind:level={selectedLevel}
          bind:isValid={levelValid}
        />
      {/if}
    {/if}
  </div>

  {#if levelValid && courseTypeValid}
    <GroupLesson />
  {/if}
</form>
//Campus Selector //Lesson Type Selector //Course Selector //Main
