<script lang="ts">
  //@ts-nocheck
  import { slide } from "svelte/transition";
  import YesNoRadioInput from "../input/YesNoRadioInput.svelte";
  import TextWrapper from "$lib/wrappers/TextWrapper.svelte";

  export let isStudent: boolean | null = null;
  let selectionData = { yes: false, no: false };
  let isValid: boolean = false;

  function checkSelection(selectionData: { yes: boolean; no: boolean }) {
    console.log(selectionData);
    if (selectionData.yes || selectionData.no) {
      isValid = true;
    }
  }

  function confirmSelection(isValid) {
    if (isValid) {
      if (selectionData.yes) {
        isStudent = true;
      }

      if (selectionData.no) {
        isStudent = false;
      }
    }
  }

  $: selectionData = selectionData;
  $: checkSelection(selectionData);
  $: console.log(isValid);
</script>

<div transition:slide class="shadow-md w-1/3 mx-auto">
  <TextWrapper>
    <p class="font-bold">既にTAEで受講したことがありますか？</p>
  </TextWrapper>
  <YesNoRadioInput bind:data={selectionData} />
  <div class="flex flex-row place-content-center items-center">
    <button
      on:click={confirmSelection}
      disabled={!isValid}
      class=" transition-all disabled:bg-gray-700 disabled:cursor-not-allowed disabled:text-gray-200 text-2xl mb-2 p-3  bg-rose-600 text-white font-bold rounded-md"
      >確定</button
    >
  </div>
</div>
