<script lang="ts">
  import { fly } from "svelte/transition";

  import {
    受講に関して,
    受講Short,
    AgreeInput,
  } from "$lib/forms/subforms/AgreeSubformData";

  import FormSectionHeading from "../text/FormSectionHeading.svelte";
  import CheckboxInput from "$lib/forms/input/CheckboxInput.svelte";

  type Nullable<T> = T | undefined;
  type AgreeSubformData = {
    受講1: boolean;
    受講2: boolean;
    受講3: boolean;
    受講4: boolean;
    受講5: boolean;
    受講6: boolean;
    受講7: boolean;
    受講8: boolean;
    受講9: boolean;
    受講10: boolean;
  };

  export let id: string;
  export let percentValid: number;
  export let selfHeight: number;
  export let data: Nullable<AgreeSubformData>;

  let 受講1: boolean;
  let 受講2: boolean;
  let 受講3: boolean;
  let 受講4: boolean;
  let 受講5: boolean;
  let 受講6: boolean;
  let 受講7: boolean;
  let 受講8: boolean;
  let 受講9: boolean;
  let 受講10: boolean;

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

  $: data = {};

  $: percentValid = calculatePercentValid([]);

  // $: checkCache(data);
</script>

{#if data}
  <div
    bind:clientHeight={selfHeight}
    in:fly={{ x: 200, opacity: 0 }}
    out:fly={{ x: -200, opacity: 0 }}
    class="my-20 bg-white shadow-md px-5 absolute top-0 inset-x-0"
  >
    <FormSectionHeading>承諾事項</FormSectionHeading>

    <FormSectionHeading>受講に関して</FormSectionHeading>
    <hr />
    <FormSectionHeading>キャンセルポリシー</FormSectionHeading>
  </div>
{:else}
  <p>フォームデータを読み込み中</p>
{/if}
