<script lang="ts">
  import SubHeading from "$lib/headers/SubHeading.svelte";
  import ChoiceScroller from "$lib/forms/ChoiceScroller.svelte";

  import type { ImageSelectInput } from "$lib/forms/ApplicationData";

  export let value: string;
  export let isValid: boolean;
  export let data: ImageSelectInput;

  $: if (!value) {
    isValid = false;
  } else {
    isValid = true;
  }

  $: value;
  $: console.log(value);
</script>

<div>
  <slot />
  <div
    class="flex mb-s2 justify-center items-center w-full place-content-between px-3"
  >
    <div class="mr-3" />
    <select
      bind:value
      class="w-[300px] text-xl my-4 mx-auto shadow-md bg-sky-50 p-1"
    >
      <option value="">{data.placeholder}</option>
      {#each data.options as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
  </div>
  <ChoiceScroller selection={value} images={data.images} />
</div>
