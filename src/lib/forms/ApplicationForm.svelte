<script lang="ts">
  import { slide } from "svelte/transition";
  import { onMount } from "svelte";
  import { applicationData } from "$lib/store/apply";
  import Subform from "./subforms/Subform.svelte";
  import CheckIsStudent from "./subforms/CheckIsStudent.svelte";
  import ProgressBar from "./ProgressBar.svelte";

  import type { FormSetItem, FormSet } from "$lib/store/apply";
  import type { SubformData } from "./data/typeDefs";

  // function handleMode() {}
  // $: $dataCheck.campus = $dataCheck.campus;

  // $: if ($dataCheck.campus) {
  //   $dataCheck.campus.calculateValid();
  // }

  // function handleSubmitCampus() {
  //   if ($dataCheck.campus.meta.allValid) {
  //     ++currentIndex;
  //   }
  // }

  function handleNext() {
    ++$applicationData.meta.currentIndex;
  }

  function handlePrevious() {
    --$applicationData.meta.currentIndex;
  }

  $: $applicationData = $applicationData;
  $: $applicationData.meta.checkIsAllValid();

  // $: currentMode = modes[currentIndex];
  // $: console.log(currentMode);
  // $: console.log(currentIndex);
</script>

<div class="flex flex-col mx-auto grow-0 mt-[50px] shadow-lg">
  <Subform bind:subformData={$applicationData.meta.currentForm} />
  <!--{#if isStudent === null}
    <CheckIsStudent bind:isStudent />
  {/if}

  {#if isStudent !== null}
  {#if currentMode === "campus"}

    {/if}

    {#if currentMode === "basic"}
      <ProgressBar subformData={$basicData.personal} />
      <Subform bind:subformData={$basicData.personal} />
    {/if}

    {#if currentMode === "campus"}
    <div transition:slide class="flex flex-row place-content-center">
      <button
        on:click={handleSubmitCampus}
        class="place-content-center p-5 font-bold bg-blue-700 text-white rounded-md transition-all hover:bg-blue-500"
      >
        情報を確認
      </button>
    </div>
  {:else}
  {/if}
  {/if} -->
  <div class="flex flex-row place-content-between px-4 py-5 bg-rose-500">
    <button
      style:visibility={$applicationData.meta.currentIndex === 0
        ? "hidden"
        : "visible"}
      on:click={handlePrevious}
      class="flex-shrink p-5 font-bold bg-blue-700 text-white rounded-md transition-all hover:bg-blue-500"
    >
      前へ
    </button>
    <button
      disabled={!$applicationData.meta.canSubmit}
      class="disabled:bg-gray-600 disabled:cursor-not-allowed disabled:text-gray-200 w-1/3 p-4 font-bold bg-blue-800 text-white rounded-md transition-all hover:bg-blue-500"
    >
      送信
    </button>
    <button
      disabled={!$applicationData.meta.canProgress}
      on:click={handleNext}
      class="disabled:bg-gray-600 disabled:cursor-not-allowed flex-shrink p-4 font-bold bg-blue-700 text-white rounded-md transition-all hover:bg-blue-500"
    >
      次へ
    </button>
  </div>
</div>
