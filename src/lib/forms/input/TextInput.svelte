<script lang="ts">
  import { slide } from "svelte/transition";

  import type { TextInput } from "$lib/forms/ApplicationData";

  export let data: TextInput;

  let errorMessage: string[];

  export let isValid: boolean;
  export let inputVal: string;

  $: errorMessage = data.validator(inputVal);
  $: if (data.isUpper && inputVal) {
    inputVal = inputVal.toUpperCase();
  }
  $: if (errorMessage.length > 0) {
    isValid = false;
  } else {
    isValid = true;
  }
</script>

<label class="font-bold mr-10 text-right w-20 col-span-4" for={data.label}>
  {#if data.isNecessary}
    <span class="text-red-500">*</span>
  {/if}
  {data.label}
</label>
<div class="flex flex-col my-2 col-span-8">
  <input
    name={data.alt}
    type="text"
    style:background-color={isValid ? "white" : "#fef2f2"}
    style:outline-color={isValid ? "" : "#b91c1c"}
    class={`shadow-md 
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
        w-[200px]
      `}
    alt={data.alt}
    placeholder={data.placeholder}
    bind:value={inputVal}
    maxlength={data.length}
  />
  {#if !isValid}
    {#each errorMessage as error}
      <p transition:slide class="text-red-600 my-2">{error}</p>
    {/each}
  {/if}
  {#each data.desc as line}
    <p class="text-slate-600 text-sm my-1">
      {line}
    </p>
  {/each}
</div>
