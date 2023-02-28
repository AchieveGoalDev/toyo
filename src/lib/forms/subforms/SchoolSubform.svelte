<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { formData } from "$lib/store/sessionStorage";

  import SelectInput from "$lib/forms/input/SelectInput.svelte";
  import ImageSelect from "$lib/forms/input/ImageSelect.svelte";

  import FormSectionHeading from "../text/FormSectionHeading.svelte";

  import {
    campusSelector,
    levelSelector,
    courseSelector,
    mtmSelector,
  } from "$lib/forms/subforms/SchoolSubformData";

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

  let campus: string;
  let level: string;
  let course: string;
  let mtm: string;

  let mounted = false;

  onMount(() => {
    if ($formData) {
      let parsed = JSON.parse($formData);
      if (parsed[id]) {
        data = parsed[id];

        console.log("detected data:");
        console.log(data);

        if (data) {
          campus = data.campus;
          level = data.level;
          course = data.course;
          mtm = data.mtm;
        } else {
          console.log("reformatting data");
          campus = "";
          level = "";
          course = "";
          mtm = "";
        }
      }
    }
    mounted = true;
  });

  function cacheData(data: Nullable<SchoolSubformData>, id: string) {
    let updateData: {
      campus: string;
      level: string;
      course: string;
      mtm: string;
    };
    
    if (mounted && data) {
      let dataKeys = Object.keys(data);
      let dataValues = Object.values(data);

      for (let i = 0; i < dataKeys.length - 1; i++) {
        if (dataValues[i]) {
          let dataKey = dataKeys[i];
          updateData[dataKey] = dataValues[i];

          console.log("update values");
          console.log(updateData);
        }
      }

      if ($formData) {
        console.log("formData detected");
        let parsed = JSON.parse($formData);
        console.log(parsed);
        let updated = { ...parsed, [id]: updateData };
        console.log("caching");
        console.log(updated);
        console.log("cached");
        formData.set(JSON.stringify(updated));
      }
    } else {
      console.log("No formdata detected");
      formData.set(JSON.stringify({ [id]: { ...updateData } }));
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

    return (validTotal / toValidate) * 100;
  }

  $: if (data?.campus === "オンライン") {
    forcedCourse = "マンツーマンレッスン";
    data.course = "マンツーマンレッスン";
    forcedCourseMsg = "オンラインレッスンにはマンツーマンレッスンのみ選べます";
  } else if (data?.campus !== "オンライン") {
    forcedCourse = "";
  }

  $: if (campus) {
    course = "";
    mtm = "";
    level = "";
  }

  $: data = {
    campus: campus,
    course: course,
    level: level,
    mtm: mtm,
  };

  $: percentValid = calculatePercentValid(
    campusIsValid,
    levelIsValid,
    courseIsValid,
    mtmIsValid
  );

  $: cacheData(data, id);

  $: console.log(data);
</script>

{#if data}
  <div
    bind:clientHeight={selfHeight}
    in:fly={{ x: 200, opacity: 0 }}
    out:fly={{ x: -200, opacity: 0 }}
    class="my-20 bg-white shadow-md px-5 absolute top-0 inset-x-0"
  >
    <ImageSelect
      bind:isValid={campusIsValid}
      data={campusSelector}
      bind:value={campus}
    >
      <FormSectionHeading>キャンパスを選択してください</FormSectionHeading>
    </ImageSelect>

    <div class="w-full h-[20px]" />
    {#if data.campus}
      <SelectInput
        bind:isValid={courseIsValid}
        bind:value={course}
        data={courseSelector}
        forced={forcedCourse}
        forcedMessage={forcedCourseMsg}
      >
        <FormSectionHeading>受講スタイルを選択してください</FormSectionHeading>
      </SelectInput>
      {#if data.course === "グループレッスン"}
        <SelectInput
          bind:isValid={levelIsValid}
          data={levelSelector}
          bind:value={level}
          forced={forcedLevel}
          forcedMessage={forcedLevelMsg}
        >
          <FormSectionHeading>受講コースを選択してください</FormSectionHeading>
        </SelectInput>
      {:else if data.course === "マンツーマンレッスン"}
        <SelectInput
          bind:isValid={mtmIsValid}
          data={mtmSelector}
          bind:value={mtm}
          forced={focredMtm}
          forcedMessage={forcedMtmMsg}
        >
          <FormSectionHeading>受講コースを選択してください</FormSectionHeading>
        </SelectInput>
      {/if}
    {/if}
  </div>
{:else}
  <p>フォームデータを読み込み中</p>
{/if}
