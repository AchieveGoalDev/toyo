<script lang="ts">
  import ImageSelect from "$lib/forms/input/ImageSelect.svelte";
  import SelectInput from "$lib/forms/input/SelectInput.svelte";
  import RadioInput from "$lib/forms/input/RadioInput.svelte";
  import SubHeading from "$lib/headers/SubHeading.svelte";

  import {
    campusSelector,
    levelSelector,
    courseSelector,
    mtmSelector,
    prevSemester,
  } from "$lib/forms/ApplicationData";

  let campus: string;
  let level: string;
  let course: string;
  let mtm: string;

  export let data: {
    campus: string;
    level: string;
    course: string;
    mtm: string;
  };

  let forcedCourse: string = "";
  let forcedLevel: string = "";
  let focredMtm: string = "";

  let forcedCourseMsg: string;
  let forcedLevelMsg: string;
  let forcedMtmMsg: string;

  export let isValid;

  $: if (campus === "オンライン") {
    forcedCourse = "マンツーマンレッスン";
    course = "マンツーマンレッスン";
    forcedCourseMsg = "オンラインレッスンにはマンツーマンレッスンのみ選べます";
  } else if (campus !== "オンライン") {
    (forcedCourse = ""), (course = "");
  }

  $: if (campus && course && (level || mtm)) {
    isValid = true;
  } else {
    isValid = false;
  }

  $: data = {
    campus,
    course,
    level,
    mtm,
  };

  $: console.log(campus);
</script>

<div class="my-10 bg-white shadow-md px-5">
  <ImageSelect data={campusSelector} bind:value={campus}>
    <SubHeading>キャンパスを選択してください</SubHeading>
  </ImageSelect>

  <div class="w-full h-[20px]" />
  {#if campus}
    <SelectInput
      data={courseSelector}
      bind:value={course}
      forced={forcedCourse}
      forcedMessage={forcedCourseMsg}
    >
      <SubHeading>受講スタイルを選択してください</SubHeading>
    </SelectInput>
    {#if course === "グループレッスン"}
      <SelectInput
        data={levelSelector}
        bind:value={level}
        forced={forcedLevel}
        forcedMessage={forcedLevelMsg}
      >
        <SubHeading>受講コースを選択してください</SubHeading>
      </SelectInput>
    {:else if course === "マンツーマンレッスン"}
      <SelectInput
        data={mtmSelector}
        bind:value={mtm}
        forced={focredMtm}
        forcedMessage={forcedMtmMsg}
      >
        <SubHeading>受講コースを選択してください</SubHeading>
      </SelectInput>
    {/if}
    <RadioInput data={prevSemester} />
  {/if}
</div>
