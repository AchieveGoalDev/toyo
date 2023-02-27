<script lang="ts">
  import { fly } from "svelte/transition";
  import SelectInput from "$lib/forms/input/SelectInput.svelte";

  export let selfHeight: number;

  export let percentValid = 0;
  export let data = {
    test1: "",
    test2: "",
    test3: "",
  };

  let testOneIsValid = false;
  let testTwoIsValid = false;
  let testThreeIsValid = false;

  function validateSelect(value: string) {
    if (value !== "") {
      return true;
    } else {
      return false;
    }
  }

  function calculatePercentValid(inputsAreValid: boolean[]) {
    let validCount = 0;
    inputsAreValid.forEach((inputIsValid) => {
      if (inputIsValid) {
        validCount++;
      }
    });

    if (validCount) {
      console.log(validCount);
      return (validCount / inputsAreValid.length) * 100;
    } else {
      console.log(validCount);
      return 0;
    }
  }

  let testSelector1Value: string = "";
  let testSelector2Value: string = "";
  let testSelector3Value: string = "";

  const testSelector1 = {
    placeholder: "--Test1--",
    options: ["Option1", "Option2", "Option3"],
  };

  const testSelector2 = {
    placeholder: "--Test2--",
    options: ["Option1", "Option2", "Option3"],
  };

  const testSelector3 = {
    placeholder: "--Test3--",
    options: ["Option1", "Option2", "Option3"],
  };

  let forced = "";
  let forcedMessage = "";

  $: inputsValid = [
    validateSelect(testSelector1Value),
    validateSelect(testSelector2Value),
    validateSelect(testSelector3Value),
  ];

  $: percentValid = calculatePercentValid(inputsValid);

  $: data = {
    test1: testSelector1Value,
    test2: testSelector2Value,
    test3: testSelector3Value,
  };
</script>

<div
  bind:clientHeight={selfHeight}
  in:fly={{ x: 200, opacity: 0 }}
  out:fly={{ x: -200, opacity: 0 }}
  class="my-20 bg-white shadow-md px-5 absolute top-0 inset-x-0"
>
  <SelectInput
    bind:value={testSelector1Value}
    data={testSelector1}
    {forced}
    {forcedMessage}
  />
  <SelectInput
    bind:value={testSelector2Value}
    data={testSelector2}
    {forced}
    {forcedMessage}
  />
  <SelectInput
    bind:value={testSelector3Value}
    data={testSelector3}
    {forced}
    {forcedMessage}
  />
</div>
