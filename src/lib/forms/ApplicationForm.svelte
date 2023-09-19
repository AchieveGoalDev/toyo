<script lang="ts">
  import { slide } from "svelte/transition";
  import { dataCheck, basicData } from "$lib/store/basicPersonalSubform";
  import Subform from "./subforms/Subform.svelte";
  import CheckIsStudent from "./subforms/CheckIsStudent.svelte";
  import ProgressBar from "./ProgressBar.svelte";

  let modes = ["campus", "basic", "schedule", "contact", "agree"];
  let isStudent: null | boolean = null;

  let currentIndex = 0;

  function handleMode() {}
  $: $dataCheck.campus = $dataCheck.campus;

  $: if ($dataCheck.campus) {
    $dataCheck.campus.calculateValid();
  }

  function handleSubmitCampus() {
    if ($dataCheck.campus.meta.allValid) {
      ++currentIndex;
    }
  }

  function handleNext() {
    ++currentIndex;
  }

  function handlePrevious() {
    --currentIndex;
  }

  $: currentMode = modes[currentIndex];
  $: console.log(currentMode);
  $: console.log(currentIndex);
</script>

<div class="flex flex-col mx-auto grow-0 mt-[50px]">
  {#if isStudent === null}
    <CheckIsStudent bind:isStudent />
  {/if}

  {#if isStudent !== null}
    {#if currentMode === "campus"}
      <!-- <ProgressBar subformData={$dataCheck.campus} /> -->
      <Subform bind:subformData={$dataCheck.campus} />
    {/if}

    {#if currentMode === "basic"}
      <!-- <ProgressBar subformData={$basicData.personal} /> -->
      <Subform bind:subformData={$basicData.personal} />
    {/if}

    <!-- {#if currentMode === "campus"}
    <div transition:slide class="flex flex-row place-content-center">
      <button
        on:click={handleSubmitCampus}
        class="place-content-center p-5 font-bold bg-blue-700 text-white rounded-md transition-all hover:bg-blue-500"
      >
        情報を確認
      </button>
    </div>
  {:else}
    <div class="flex flex-row place-content-between">
      <button
        on:click={handlePrevious}
        class="p-5 font-bold bg-blue-700 text-white rounded-md transition-all hover:bg-blue-500"
      >
        前へ
      </button>
      <button
        on:click={handleNext}
        class="p-5 font-bold bg-blue-700 text-white rounded-md transition-all hover:bg-blue-500"
      >
        次へ
      </button>
    </div>
  {/if} -->
  {/if}
</div>
