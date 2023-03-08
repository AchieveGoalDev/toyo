<script lang="ts">
  import type {
    GroupTimeSlot,
    Level,
  } from "$lib/forms/subforms/ScheduleSubformData";

  import { fly, slide } from "svelte/transition";

  import { campus, mtm, level, course } from "$lib/store/schoolSubform";

  import {
    変更,
    テキスト,
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
  } from "$lib/store/scheduleSubform";

  import {
    変更Data,
    第1Data,
    第2Data,
    第3Data,
  } from "$lib/forms/subforms/ScheduleSubformData";

  import {
    白山Schedule,
    川越Schedule,
    板倉Schedule,
    INIADSchedule,
    WELLBSchedule,
  } from "$lib/forms/subforms/ScheduleSubformData";

  import RadioInput from "$lib/forms/input/RadioInput.svelte";
  import SelectInputWithLabel from "$lib/forms/input/SelectInputWithLabel.svelte";

  import FormSectionHeading from "../text/FormSectionHeading.svelte";

  type Nullable<T> = T | undefined;
  type ScheduleSubformData = {
    変更: string;
    テキスト: string;
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

  let テキストData: any;

  let 変更IsValid = false;
  let テキストIsValid = false;
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

  function calculatePercentValid(toCheck: boolean[]) {
    let modifiedCheck = toCheck;
    if ($course === "グループレッスン") {
      modifiedCheck = toCheck.slice(0, -1);
    }

    let toValidate = modifiedCheck.length;
    let validTotal = 0;

    toCheck.forEach((value) => value && validTotal++);

    return (validTotal / toValidate) * 100;
  }

  function parseSchedule(schedule: GroupTimeSlot[]) {
    let sortValue: Level;
    let filterArray: GroupTimeSlot[];
    let returnArray: string[];

    if ($mtm) {
      sortValue = "MTM";
    } else if ($level) {
      //@ts-ignore
      sortValue = $level;
    }

    filterArray = schedule.filter((slot) => {
      return slot.levels.includes(sortValue);
    });

    returnArray = filterArray.map((slot) => {
      return `${slot.start} - ${slot.end}`;
    });

    return returnArray;
  }

  function handleSchedule(campus: string) {
    switch (campus) {
      case "白山":
        第1Data.options = parseSchedule(白山Schedule);
        第2Data.options = parseSchedule(白山Schedule);
        第3Data.options = parseSchedule(白山Schedule);
        break;
      case "川越":
        第1Data.options = parseSchedule(川越Schedule);
        第2Data.options = parseSchedule(川越Schedule);
        第3Data.options = parseSchedule(川越Schedule);
        break;
      case "板倉":
        第1Data.options = parseSchedule(板倉Schedule);
        第2Data.options = parseSchedule(板倉Schedule);
        第3Data.options = parseSchedule(板倉Schedule);
        break;
      case "INIAD":
        第1Data.options = parseSchedule(INIADSchedule);
        第2Data.options = parseSchedule(INIADSchedule);
        第3Data.options = parseSchedule(INIADSchedule);
        break;
      case "WELLB":
        第1Data.options = parseSchedule(WELLBSchedule);
        第2Data.options = parseSchedule(WELLBSchedule);
        第3Data.options = parseSchedule(WELLBSchedule);
        break;
    }
  }

  function handleTextbook(level: string) {
    let returnData = {
      isNecessary: true,
      label: "使用テキスト",
      alt: "使用テキストの入力",
      placeholder: "--使用テキストを選択--",
      choices: [],
      desc: [
        "※前回と同じレベルを受講する場合は『②』『③』を選択下さい。",
        "※各レベルを初めて受講いただく場合は『①』を選択下さい。",
      ],
    };

    if (level === "初級") {
      returnData.options = ["初級①", "初級②"];
    } else if (level === "初中級") {
      returnData.options = ["初中級①", "初中級②"];
    } else if (level === "中級") {
      returnData.options = ["中級①", "中級②"];
    } else if (level === "上級") {
      returnData.options = ["上級①", "上級②", "上級③"];
    }

    return returnData;
  }

  function resetForm() {
    更新 = null;
    月第1 = "";
    月第2 = "";
    月第3 = "";
    火第1 = "";
    火第2 = "";
    火第3 = "";
    水第1 = "";
    水第2 = "";
    水第3 = "";
    木第1 = "";
    木第2 = "";
    木第3 = "";
    金第1 = "";
    金第2 = "";
    金第3 = "";
    テキスト = "";
  }

  $: テキストData = handleTextbook($level);

  $: if (data) {
    handleSchedule($campus);
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
    テキスト,
  };

  $: percentValid = calculatePercentValid([
    変更IsValid,
    テキストIsValid,
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

  $: console.log(data);
</script>

<div
  bind:clientHeight={selfHeight}
  in:slide
  out:fly={{ x: -200, opacity: 0 }}
  class="my-20 bg-white shadow-md px-5 row-span-full col-span-full top-0 inset-x-0"
>
  <FormSectionHeading>
    {#if $course === "マンツーマンレッスン"}
      使用テキスト・
    {/if}受講希望時間選択</FormSectionHeading
  >

  {#if テキストData.options && $course === "マンツーマンレッスン"}
    <SelectInputWithLabel
      bind:value={$テキスト}
      bind:isValid={テキストIsValid}
      data={テキストData}
    />
  {/if}

  <RadioInput bind:value={$変更} bind:isValid={変更IsValid} data={変更Data} />

  <FormSectionHeading>月曜日</FormSectionHeading>
  <SelectInputWithLabel
    bind:value={$月第1}
    bind:isValid={月第1IsValid}
    data={第1Data}
  />
  <SelectInputWithLabel
    bind:value={$月第2}
    bind:isValid={月第2IsValid}
    data={第2Data}
  />
  <SelectInputWithLabel
    bind:value={$月第3}
    bind:isValid={月第3IsValid}
    data={第3Data}
  />
  <FormSectionHeading>火曜日</FormSectionHeading>
  <SelectInputWithLabel
    bind:value={$火第1}
    bind:isValid={火第1IsValid}
    data={第1Data}
  />
  <SelectInputWithLabel
    bind:value={$火第2}
    bind:isValid={火第2IsValid}
    data={第2Data}
  />
  <SelectInputWithLabel
    bind:value={$火第3}
    bind:isValid={火第3IsValid}
    data={第3Data}
  />
  <FormSectionHeading>水曜日</FormSectionHeading>
  <SelectInputWithLabel
    bind:value={$水第1}
    bind:isValid={水第1IsValid}
    data={第1Data}
  />
  <SelectInputWithLabel
    bind:value={$水第2}
    bind:isValid={水第2IsValid}
    data={第2Data}
  />
  <SelectInputWithLabel
    bind:value={$水第3}
    bind:isValid={水第3IsValid}
    data={第3Data}
  />
  <FormSectionHeading>木曜日</FormSectionHeading>
  <SelectInputWithLabel
    bind:value={$木第1}
    bind:isValid={木第1IsValid}
    data={第1Data}
  />
  <SelectInputWithLabel
    bind:value={$木第2}
    bind:isValid={木第2IsValid}
    data={第2Data}
  />
  <SelectInputWithLabel
    bind:value={$木第3}
    bind:isValid={木第3IsValid}
    data={第3Data}
  />
  <FormSectionHeading>金曜日</FormSectionHeading>
  <SelectInputWithLabel
    bind:value={$金第1}
    bind:isValid={金第1IsValid}
    data={第1Data}
  />
  <SelectInputWithLabel
    bind:value={$金第2}
    bind:isValid={金第2IsValid}
    data={第2Data}
  />
  <SelectInputWithLabel
    bind:value={$金第3}
    bind:isValid={金第3IsValid}
    data={第3Data}
  />
</div>
