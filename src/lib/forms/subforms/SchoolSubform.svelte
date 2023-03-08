<script lang="ts">
  import { campus, level, course, mtm } from "$lib/store/schoolSubform";

  import { fly, slide } from "svelte/transition";

  import SelectInput from "$lib/forms/input/SelectInput.svelte";
  import ImageSelect from "$lib/forms/input/ImageSelect.svelte";

  import FormSectionHeading from "../text/FormSectionHeading.svelte";

  import {
    campusSelector,
    levelSelector,
    courseSelector,
    mtmSelector,
  } from "$lib/forms/subforms/SchoolSubformData";

  import { campuses } from "$lib/forms/ApplicationData";
  import type { CampusOfferings } from "$lib/forms/ApplicationData";

  type Nullable<T> = T | undefined;
  type SchoolSubformData = {
    campus: string;
    level: string;
    course: string;
    mtm: string;
  };

  export let id: string;
  export let percentValid: number;
  export let selfHeight: number;
  export let data: Nullable<SchoolSubformData>;

  let allLevels = ["初級", "初中級", "中級", "上級"];

  let forcedCourse: string = "";
  let forcedLevel: string = "";
  let focredMtm: string = "";

  let forcedCourseMsg: string;
  let forcedLevelMsg: string;
  let forcedMtmMsg: string;

  let campusIsValid = false;
  let levelIsValid = false;
  let courseIsValid = false;
  let mtmIsValid = false;

  function handleCourseName(course: string) {
    if (course === "MTM") {
      return "マンツーマンレッスン";
    } else if (course === "GROUP") {
      return "グループレッスン";
    }
  }

  function updateCampus(choice: string) {
    if (choice) {
      $course = "";
      $level = "";
      $mtm = "";
      campuses.forEach((campus) => {
        if (campus.name === choice) {
          //@ts-ignore
          courseSelector.options = campus.courses.map((course) =>
            handleCourseName(course)
          );
          levelSelector.options = campus.levels;
        }
      });
    }
  }

  function updateLevel(choice: string) {
    if (choice) {
      if (choice === "マンツーマンレッスン") {
        levelSelector.options = allLevels;
      } else if (choice === "グループレッスン") {
        campuses.forEach((campus) => {
          if (campus.name === $campus) {
            //@ts-ignore
            courseSelector.options = campus.courses.map((course) =>
              handleCourseName(course)
            );
            levelSelector.options = campus.levels;
          }
        });
      }
      $level = "";
    }
  }

  function calculatePercentValid(
    campus: boolean,
    level: boolean,
    course: boolean,
    mtm: boolean
  ) {
    let toValidate = 3;
    let validTotal = 0;
    if (campus) {
      validTotal++;
    }

    if (course) {
      validTotal++;
    }

    if (mtm || level) {
      validTotal++;
    }

    console.log(validTotal);

    return (validTotal / toValidate) * 100;
  }


  if (testMe) {
    updateCampus($campus);
    testMe = false;
  }

  $: if (data?.campus === "オンライン") {
    forcedCourse = "マンツーマンレッスン";
    data.course = "マンツーマンレッスン";
    forcedCourseMsg = "オンラインレッスンにはマンツーマンレッスンのみ選べます";
  } else if (data?.campus !== "オンライン") {
    forcedCourse = "";
  }

  $: percentValid = calculatePercentValid(
    Boolean($campus),
    Boolean($level),
    Boolean($course),
    Boolean($mtm)
  );

  // $: updateCampus($campus);

  $: updateLevel($course);

  $: console.log($level);
</script>

<div
  bind:clientHeight={selfHeight}
  transition:slide
  class="my-20 bg-white shadow-md px-5 row-span-full col-span-full top-0 inset-x-0"
>
  <ImageSelect
    bind:isValid={campusIsValid}
    data={campusSelector}
    bind:value={$campus}
    on:select(() => {testMe = true;})
  >
    <FormSectionHeading>キャンパスを選択してください</FormSectionHeading>
  </ImageSelect>

  <div class="w-full h-[20px]" />
  {#if $campus}
    <SelectInput
      bind:isValid={courseIsValid}
      bind:value={$course}
      data={courseSelector}
    >
      <FormSectionHeading>受講スタイルを選択してください</FormSectionHeading>
    </SelectInput>
    {#if $course}
      <SelectInput
        bind:isValid={levelIsValid}
        data={levelSelector}
        bind:value={$level}
      >
        <FormSectionHeading>受講コースを選択してください</FormSectionHeading>
      </SelectInput>
    {/if}
  {/if}
</div>
