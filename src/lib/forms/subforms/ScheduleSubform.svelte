<script lang="ts">
  import { fly, slide } from "svelte/transition";

  import {
    変更Data,
    第1Data,
    第2Data,
    第3Data,
  } from "$lib/forms/subforms/ScheduleSubformData";

  import RadioInput from "$lib/forms/input/RadioInput.svelte";
  import SelectInputWithLabel from "$lib/forms/input/SelectInputWithLabel.svelte";

  import FormSectionHeading from "../text/FormSectionHeading.svelte";

  type Nullable<T> = T | undefined;
  type ScheduleSubformData = {
    変更: string;
    月第1: string;
    月第2: string;
    月第3: string;
    火第1: string;
    火第2: string;
    火第3: string;
    水第1: string;
    水第2: string;
    水第3: string;
    木第1: string;
    木第2: string;
    木第3: string;
    金第1: string;
    金第2: string;
    金第3: string;
  };

  export let id: string;
  export let percentValid: number;
  export let selfHeight: number;
  export let data: Nullable<ScheduleSubformData>;

  let 変更IsValid = false;
  let 月第1IsValid = false;
  let 月第2IsValid = false;
  let 月第3IsValid = false;
  let 火第1IsValid = false;
  let 火第2IsValid = false;
  let 火第3IsValid = false;
  let 水第1IsValid = false;
  let 水第2IsValid = false;
  let 水第3IsValid = false;
  let 木第1IsValid = false;
  let 木第2IsValid = false;
  let 木第3IsValid = false;
  let 金第1IsValid = false;
  let 金第2IsValid = false;
  let 金第3IsValid = false;

  let 変更: string;
  let 月第1: string;
  let 月第2: string;
  let 月第3: string;
  let 火第1: string;
  let 火第2: string;
  let 火第3: string;
  let 水第1: string;
  let 水第2: string;
  let 水第3: string;
  let 木第1: string;
  let 木第2: string;
  let 木第3: string;
  let 金第1: string;
  let 金第2: string;
  let 金第3: string;

  let cacheready = false;

  // onMount(() => {
  // console.log("mounted");
  // if ($formData) {
  //   console.log("formdataDetected");
  //   console.log(JSON.parse($formData));
  // }

  // if (data && $formData) {
  //   let parsedData = JSON.parse($formData);

  //   if (parsedData.school) {
  //     let schoolData = parsedData.school;
  //     data.campus = schoolData.campus;
  //     data.level = schoolData.level;
  //     data.course = schoolData.course;
  //     data.mtm = schoolData.mtm;
  //   }
  // }
  // });

  // function checkCache(data: Nullable<SchoolSubformData>) {
  //   if (cacheready) {
  //     cacheData(data, id);
  //   }
  // }

  // function cacheData(data: Nullable<SchoolSubformData>, id: string) {
  //   let updateData = {
  //     campus: data?.campus,
  //     level: data?.level,
  //     course: data?.course,
  //     mtm: data?.mtm,
  //   };

  //   console.log(updateData);

  //   let parsedFormData: any;

  //   if ($formData) {
  //     parsedFormData = JSON.parse($formData);
  //   } else {
  //     parsedFormData = {};
  //   }

  //   parsedFormData = { ...parsedFormData, [id]: updateData };

  //   console.log("cached data");
  //   console.log(parsedFormData);
  //   parsedFormData = JSON.stringify(parsedFormData);
  //   formData.set(parsedFormData);
  //   console.log($formData);
  // }

  function calculatePercentValid(toCheck: boolean[]) {
    let toValidate = toCheck.length;
    let validTotal = 0;

    toCheck.forEach((value) => value && validTotal++);

    return (validTotal / toValidate) * 100;
  }

  $: data = {
    変更,
    月第1,
    月第2,
    月第3,
    火第1,
    火第2,
    火第3,
    水第1,
    水第2,
    水第3,
    木第1,
    木第2,
    木第3,
    金第1,
    金第2,
    金第3,
  };

  $: percentValid = calculatePercentValid([
    変更IsValid,
    月第1IsValid,
    月第2IsValid,
    月第3IsValid,
    火第1IsValid,
    火第2IsValid,
    火第3IsValid,
    水第1IsValid,
    水第2IsValid,
    水第3IsValid,
    木第1IsValid,
    木第2IsValid,
    木第3IsValid,
    金第1IsValid,
    金第2IsValid,
    金第3IsValid,
  ]);

  // $: checkCache(data);
</script>

{#if data}
  <div
    bind:clientHeight={selfHeight}
    in:slide
    out:fly={{ x: -200, opacity: 0 }}
    class="my-20 bg-white shadow-md px-5 row-span-full col-span-full top-0 inset-x-0"
  >
    <FormSectionHeading>受講希望時間選択</FormSectionHeading>

    <RadioInput bind:value={変更} bind:isValid={変更IsValid} data={変更Data} />

    <FormSectionHeading>月曜日</FormSectionHeading>
    <SelectInputWithLabel
      bind:value={月第1}
      bind:isValid={月第1IsValid}
      data={第1Data}
    />
    <SelectInputWithLabel
      bind:value={月第2}
      bind:isValid={月第2IsValid}
      data={第1Data}
    />
    <SelectInputWithLabel
      bind:value={月第3}
      bind:isValid={月第3IsValid}
      data={第3Data}
    />
    <FormSectionHeading>火曜日</FormSectionHeading>
    <SelectInputWithLabel
      bind:value={火第1}
      bind:isValid={火第1IsValid}
      data={第1Data}
    />
    <SelectInputWithLabel
      bind:value={火第2}
      bind:isValid={火第2IsValid}
      data={第2Data}
    />
    <SelectInputWithLabel
      bind:value={火第3}
      bind:isValid={火第3IsValid}
      data={第3Data}
    />
    <FormSectionHeading>水曜日</FormSectionHeading>
    <SelectInputWithLabel
      bind:value={水第1}
      bind:isValid={水第1IsValid}
      data={第1Data}
    />
    <SelectInputWithLabel
      bind:value={水第2}
      bind:isValid={水第2IsValid}
      data={第2Data}
    />
    <SelectInputWithLabel
      bind:value={水第3}
      bind:isValid={水第3IsValid}
      data={第3Data}
    />
    <FormSectionHeading>木曜日</FormSectionHeading>
    <SelectInputWithLabel
      bind:value={木第1}
      bind:isValid={木第1IsValid}
      data={第1Data}
    />
    <SelectInputWithLabel
      bind:value={木第2}
      bind:isValid={木第2IsValid}
      data={第2Data}
    />
    <SelectInputWithLabel
      bind:value={木第3}
      bind:isValid={木第3IsValid}
      data={第3Data}
    />
    <FormSectionHeading>金曜日</FormSectionHeading>
    <SelectInputWithLabel
      bind:value={金第1}
      bind:isValid={金第1IsValid}
      data={第1Data}
    />
    <SelectInputWithLabel
      bind:value={金第2}
      bind:isValid={金第2IsValid}
      data={第2Data}
    />
    <SelectInputWithLabel
      bind:value={金第3}
      bind:isValid={金第3IsValid}
      data={第3Data}
    />
  </div>
{:else}
  <p>フォームデータを読み込み中</p>
{/if}
