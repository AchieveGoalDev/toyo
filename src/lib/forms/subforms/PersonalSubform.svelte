<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { formData } from "$lib/store/sessionStorage";

  import {
    学籍番号Data,
    氏名Data,
    フリガナData,
    英字名FirstData,
    英字名LastData,
    学年Data,
    学部Data,
    学科Data,
    英検Data,
    TOEFLData,
    IELTSData,
    きっかけData,
    大学メールData,
    個人メールData,
    電話番号Data,
  } from "./PersonalSubformData";

  import TextInput from "$lib/forms/input/TextInput.svelte";
  import EmailWithConfirmation from "$lib/forms/input/EmailWithConfirmation.svelte";
  import PhoneInput from "../input/PhoneInput.svelte";
  import SelectInput from "$lib/forms/input/SelectInput.svelte";
  import ImageSelect from "$lib/forms/input/ImageSelect.svelte";

  import FormSectionHeading from "../text/FormSectionHeading.svelte";

  type Nullable<T> = T | undefined;
  type PersonalSubformData = {
    学籍番号: string;
    氏名: string;
    フリガナ: string;
    英字名First: string;
    英字名Last: string;
    学年: string;
    学部: string;
    学科: string;
    英検: string;
    TOEFL: string;
    IELTS: string;
    きっかけ: string;
    大学メール: string;
    個人メール: string;
    電話番号: string;
  };

  export let id: string;
  export let percentValid: number;
  export let selfHeight: number;
  export let data: Nullable<PersonalSubformData>;

  let 学籍番号IsValid = false;
  let 氏名IsValid = false;
  let フリガナIsValid = false;
  let 英字名FirstIsValid = false;
  let 英字名LastIsValid = false;
  let 学年IsValid = false;
  let 学部IsValid = false;
  let 学科IsValid = false;
  let 英検IsValid = false;
  let TOEFLIsValid = false;
  let IELTSIsValid = false;
  let きっかけIsValid = false;
  let 大学メールIsValid = false;
  let 個人メールIsValid = false;
  let 電話番号IsValid = false;

  let 学籍番号: string;
  let 氏名: string;
  let フリガナ: string;
  let 英字名First: string;
  let 英字名Last: string;
  let 学年: string;
  let 学部: string;
  let 学科: string;
  let 英検: string;
  let TOEFL: string;
  let IELTS: string;
  let きっかけ: string;
  let 大学メール: string;
  let 個人メール: string;
  let 電話番号: string;

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
    学籍番号,
    氏名,
    フリガナ,
    英字名First,
    英字名Last,
    学年,
    学部,
    学科,
    英検,
    TOEFL,
    IELTS,
    きっかけ,
    大学メール,
    個人メール,
    電話番号,
  };

  $: percentValid = calculatePercentValid([
    学籍番号IsValid,
    氏名IsValid,
    フリガナIsValid,
    英字名FirstIsValid,
    英字名LastIsValid,
    学年IsValid,
    学部IsValid,
    学科IsValid,
    きっかけIsValid,
    大学メールIsValid,
    電話番号IsValid,
  ]);

  // $: checkCache(data);
</script>

{#if data}
  <div
    bind:clientHeight={selfHeight}
    in:fly={{ x: 200, opacity: 0 }}
    out:fly={{ x: -200, opacity: 0 }}
    class="my-20 bg-white shadow-md px-5 absolute top-0 inset-x-0"
  >
    <FormSectionHeading>申込者情報</FormSectionHeading>
    <TextInput
      bind:value={学籍番号}
      bind:isValid={学籍番号IsValid}
      data={学籍番号Data}
      initialData={""}
    />
    <hr />
    <TextInput
      bind:value={氏名}
      bind:isValid={氏名IsValid}
      data={氏名Data}
      initialData={""}
    />
    <TextInput
      bind:value={フリガナ}
      bind:isValid={フリガナIsValid}
      data={フリガナData}
      initialData={""}
    />
    <TextInput
      bind:value={英字名First}
      bind:isValid={英字名FirstIsValid}
      data={英字名FirstData}
      initialData={""}
    />
    <TextInput
      bind:value={英字名Last}
      bind:isValid={英字名LastIsValid}
      data={英字名LastData}
      initialData={""}
    />
    <hr />
    <TextInput
      bind:value={学年}
      bind:isValid={学年IsValid}
      data={学年Data}
      initialData={""}
    />
    <TextInput
      bind:value={学部}
      bind:isValid={学部IsValid}
      data={学部Data}
      initialData={""}
    />
    <TextInput
      bind:value={学科}
      bind:isValid={学科IsValid}
      data={学科Data}
      initialData={""}
    />
    <hr />
    <TextInput
      bind:value={英検}
      bind:isValid={英検IsValid}
      data={英検Data}
      initialData={""}
    />
    <TextInput
      bind:value={TOEFL}
      bind:isValid={TOEFLIsValid}
      data={TOEFLData}
      initialData={""}
    />
    <TextInput
      bind:value={IELTS}
      bind:isValid={IELTSIsValid}
      data={IELTSData}
      initialData={""}
    />
    <hr />
    <TextInput
      bind:value={きっかけ}
      bind:isValid={きっかけIsValid}
      data={きっかけData}
      initialData={""}
    />
    <EmailWithConfirmation
      bind:value={大学メール}
      bind:isValid={大学メールIsValid}
      data={大学メールData}
      initialData={""}
    />
    <EmailWithConfirmation
      bind:value={個人メール}
      bind:isValid={個人メールIsValid}
      data={個人メールData}
      initialData={""}
    />
    <PhoneInput
      bind:value={電話番号}
      bind:isValid={電話番号IsValid}
      data={電話番号Data}
      initialData={""}
    />
  </div>
{:else}
  <p>フォームデータを読み込み中</p>
{/if}
