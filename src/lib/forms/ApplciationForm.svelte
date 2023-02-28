<script lang="ts">
  import TestSection from "./TestSection.svelte";
  import ProgressBar from "$lib/forms/input/ProgressBar.svelte";
  import SchoolSubform from "$lib/forms/subforms/SchoolSubform.svelte";

  let currentHeight: number;
  let indexHistory: number[] = [];
  let canProgress = false;

  let test1ValidPercent = 0;
  let test2ValidPercent = 0;
  let test3ValidPercent = 0;
  let test4ValidPercent = 0;

  let index = 0;
  let transitionsLocked = false;

  let test1Data;
  let test2Data;
  let test3Data;
  let test4Data;

  let testSectionData = [test1Data, test2Data, test3Data, test4Data];

  let testSections = ["school", true, true, true];

  let testSectionValidity = [
    test1ValidPercent,
    test2ValidPercent,
    test3ValidPercent,
    test4ValidPercent,
  ];

  let progressData: {
    current: number;
    latest: number;
    latestStatus: string;
    barwidth: number;
  };

  function handlePrevious() {
    if (index >= 0) {
      index--;
    }
  }

  function handleNext() {
    if (index <= testSectionData.length - 1) {
      index++;
    }
  }

  function handleLatest(indexArray: number[]) {
    console.log("indexarray", indexArray);
    let largest = 0;
    if (indexArray.length > 0) {
      indexArray.forEach((number) => {
        if (number > largest) {
          largest = number;
        }
      });
      return largest;
    } else {
      return 0;
    }
  }

  function handleProgressBarWidth(validityData: number[]) {
    const segmentWidth = (1 / (validityData.length - 1)) * 100;
    let totalWidth = 0;

    validityData.forEach((percentage, i) => {
      if (i < validityData.length - 1) {
        totalWidth += (percentage / 100) * segmentWidth;
      }
    });

    return totalWidth;
  }

  function detectReady(sectionValidity: number) {
    if (sectionValidity === 100) {
      return "ready";
    } else {
      return "incomplete";
    }
  }

  function canMove(validity: number[], index: number) {
    if (validity[index] !== 100) {
      return false;
    } else if (index === validity.length - 1) {
      console.log("max");
      return false;
    } else {
      return true;
    }
  }

  $: indexHistory = [...indexHistory, index];
  $: latest = handleLatest(indexHistory);
  $: progressData = {
    current: index,
    latest: latest,
    latestStatus: detectReady(testSectionValidity[latest]),
    barwidth: handleProgressBarWidth(testSectionValidity),
  };

  $: canProgress = canMove(testSectionValidity, index);
</script>

<form
  class="flex flex-col bg-slate-50 w-full sm:w-2/3 mx-auto grow-0 items-center relative"
>
  <ProgressBar progress={progressData} />

  <!--
    <SchoolDataSection bind:data={schoolData} bind:isValid={schoolDataIsValid} />
  -->

  <div style:height={`${currentHeight}px`} class="my-16">
    {#each [testSections[index]] as section (index)}
      {#if section === "school"}
        <SchoolSubform
          bind:percentValid={testSectionValidity[index]}
          bind:selfHeight={currentHeight}
          bind:data={testSectionData[index]}
          id={"school"}
        />
      {:else}
        <TestSection
          previousData={undefined}
          bind:selfHeight={currentHeight}
          bind:data={testSectionData[index]}
          bind:percentValid={testSectionValidity[index]}
          id={`test${index}`}
        />
      {/if}
    {/each}
  </div>

  <div class="flex w-full place-content-around absolute bottom-0">
    <button
      on:click|preventDefault={handlePrevious}
      class="disabled:bg-slate-500 disabled:text-white: transition-all ease-in bg-sky-800 text-white rounded-md hover:bg-sky-600 p-2 text-xl shadow-md"
      disabled={index === 0}>前へ</button
    >

    <button
      on:click|preventDefault={handleNext}
      class="disabled:bg-slate-500 disabled:text-white: transition-all ease-in bg-sky-800 text-white rounded-md hover:bg-sky-600 p-2 text-xl shadow-md"
      disabled={!canProgress}>次へ</button
    >
  </div>
</form>
