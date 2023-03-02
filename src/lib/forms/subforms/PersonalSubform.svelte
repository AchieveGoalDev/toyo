<script lang="ts">
  import { fly, slide } from "svelte/transition";

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
    その他Data,
    備考Data,
    住所Data,
    性別Data,
    種別Data,
    試験Data,
    TOEICData,
  } from "./PersonalSubformData";

  import TextInput from "$lib/forms/input/TextInput.svelte";
  import EmailWithConfirmation from "$lib/forms/input/EmailWithConfirmation.svelte";
  import PhoneInput from "$lib/forms/input/PhoneInput.svelte";
  import LargeTextInput from "$lib/forms/input/LargeTextInput.svelte";
  import AddressInput from "$lib/forms/input/AddressInput.svelte";
  import RadioInput from "$lib/forms/input/RadioInput.svelte";
  import CheckboxInput from "$lib/forms/input/CheckboxInput.svelte";
  import SelectInputWithLabel from "$lib/forms/input/SelectInputWithLabel.svelte";

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
    その他: string;
    備考: string;
    住所: string;
    性別: string;
    種別: string;
    試験: boolean;
    TOEIC: string;
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
  let その他IsValid = false;
  let 備考IsValid = false;
  let 住所IsValid = false;
  let 性別IsValid = false;
  let 種別IsValid = false;
  let 試験IsValid = false;
  let TOEICIsValid = false;

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
  let その他: string;
  let 備考: string;
  let 住所: string;
  let 性別: string;
  let 種別: string;
  let 試験: boolean;
  let TOEIC: string;

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
    その他,
    備考,
    住所,
    性別,
    種別,
    試験,
    TOEIC,
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
    住所IsValid,
    性別IsValid,
    種別IsValid,
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
    <RadioInput
      bind:value={性別}
      bind:isValid={性別IsValid}
      data={性別Data}
      initialData={""}
    />
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
    <AddressInput
      bind:value={住所}
      bind:isValid={住所IsValid}
      data={住所Data}
      initialData=""
    />
    <hr />
    <RadioInput
      bind:value={種別}
      bind:isValid={種別IsValid}
      data={種別Data}
      initialData={""}
    />
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
    <hr />
    <CheckboxInput
      bind:value={試験}
      bind:isValid={試験IsValid}
      data={試験Data}
      initialData={""}
    />
    <hr />
    {#if !試験}
      <div transition:slide|local>
        <SelectInputWithLabel
          bind:value={TOEIC}
          bind:isValid={TOEICIsValid}
          data={TOEICData}
          initialData={""}
        />
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
        <LargeTextInput
          bind:value={その他}
          bind:isValid={その他IsValid}
          data={その他Data}
          initialData=""
        />
      </div>
    {/if}
    <hr />
    <TextInput
      bind:value={きっかけ}
      bind:isValid={きっかけIsValid}
      data={きっかけData}
      initialData={""}
    />
    <LargeTextInput
      bind:value={備考}
      bind:isValid={備考IsValid}
      data={備考Data}
      initialData=""
    />
  </div>
{:else}
  <p>フォームデータを読み込み中</p>
{/if}
