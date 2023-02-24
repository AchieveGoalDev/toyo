<script lang="ts">
  import { slide } from "svelte/transition";
  import type { SelectInput } from "$lib/forms/ApplicationData";

  export let value: string;
  export let data: SelectInput;
  export let forced: string;
  export let forcedMessage: string;

  let disabled: boolean;

  $: if (forced) {
    disabled = true;
    value = forced;
  } else if (!forced) {
    disabled = false;
  }
</script>

<div transition:slide>
  <slot />
  <div
    class="flex mb-2 justify-center items-center w-full place-content-between px-3"
  >
    <select
      bind:value
      class="w-[300px] text-xl my-4 mx-auto shadow-md transition-all ease-in disabled:bg-slate-400 bg-sky-50 disabled:shadow-none"
      {disabled}
    >
      <option value="" class="bg-sky-100">{data.placeholder}</option>
      {#each data.options as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
  </div>
  {#if forced}
    <div class="w-full">
      <p transition:slide class="text-blue-500 mx-auto text-center mb-2">
        ※{forcedMessage}
      </p>
    </div>
  {/if}
</div>
