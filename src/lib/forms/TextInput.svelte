<script lang="ts">
  import { slide } from "svelte/transition";

  export let isNecessary: boolean;
  export let label: string;
  export let inputVal: string;
  export let placeholder: string;
  export let alt: string;
  export let desc: string[];
  export let validateInput: any;

  let errorMessage: string[];

  export let isValid: boolean;

  $: errorMessage = validateInput(inputVal);
  $: console.log(errorMessage);
</script>

<div class="flex flex-col sm:flex-row my-3">
  <label class="font-bold mr-10" for={label}>
    {#if isNecessary}
      <span class="text-red-500">*</span>
    {/if}
    {label}
  </label>
  <div class="flex flex-col w-[200px]">
    <input
      name={alt}
      type="text"
      class="shadow-md 
        rounded-sm 
        transitions-all 
        ease-in 
        border-2 
        border-black 
        focus:outline-sky-500 
        focus:outline-2 
        bg-white 
        pl-2
        py-1
        my-2
        "
      {alt}
      {placeholder}
      bind:value={inputVal}
    />
    {#if !isValid}
      {#each errorMessage as error}
        <p transition:slide class="text-red-600">{error}</p>
      {/each}
    {/if}
    {#each desc as line}
      <p class="text-slate-600 text-sm my-1">
        {line}
      </p>
    {/each}
  </div>
</div>
