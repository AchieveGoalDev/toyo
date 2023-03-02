<script lang="ts">
  import type { SelectInputWithLabel } from "$lib/forms/ApplicationData";
  import { slide } from "svelte/transition";

  export let value: string;
  export let data: SelectInputWithLabel;
  export let isValid: boolean;
  export let initialData: string;

  let disabled: boolean;

  let errorMessage: string[] = [];

  $: if (errorMessage.length !== 0) {
    isValid = false;
  } else {
    isValid = true;
  }

  $: if (!value && data.isNecessary) {
    errorMessage = [];
    errorMessage.push("必要項目です");
  } else if (value) {
    errorMessage = [];
  }
</script>

<div class="my-2 w-full grid grid-cols-12 gap-0">
  <label
    class="font-bold text-right col-span-3 border-r pr-4 w-full h-full"
    for={data.label}
  >
    {#if data.isNecessary}
      <span class="text-red-500">*</span>
    {/if}
    {data.label}
  </label>
  <div class="ml-4 w-full col-span-9">
    <select
      bind:value
      class="w-[300px] p-1 text-xl my-4 mx-auto shadow-md transition-all ease-in disabled:bg-slate-400 bg-sky-50 disabled:shadow-none"
      {disabled}
    >
      <option value="" class="bg-sky-100">{data.placeholder}</option>
      {#each data.options as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
    {#each data.desc as line}
      <p class="text-slate-600 text-sm my-1 w-full">
        {line}
      </p>
    {/each}
    {#if !isValid}
      {#each errorMessage as error}
        <p transition:slide|local class="text-red-600 my-1">{error}</p>
      {/each}
    {/if}
  </div>
</div>
