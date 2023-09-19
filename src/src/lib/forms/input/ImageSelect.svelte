<script lang="ts">
  import { slide } from "svelte/transition";
  import ChoiceScroller from "./ChoiceScroller.svelte";
  import type { ImageSelectInput } from "$lib/forms/data/typeDefs";

  export let data: ImageSelectInput;

  $: data = data;
  $: console.log(data);
  $: data.validate();
</script>

<h1 class="text-2xl font-bold mb-2">{data.label}</h1>
<div>
  <slot />
  <ChoiceScroller choices={data.choices} selection={data.value} />
  <div
    class="flex mb-s2 justify-center items-center w-full place-content-between px-3"
  >
    <div class="mr-3" />
    <select
      bind:value={data.value}
      class="w-[250px] sm:w-[300px] text-xl my-4 mx-auto shadow-md bg-sky-50 p-1"
    >
      {#each data.choices as choice}
        <option value={choice.value}>{choice.value}</option>
      {/each}
    </select>
    {#if !data.isValid}
      {#each data.errors as error}
        <p transition:slide|local class="text-red-600 my-1">{error}</p>
      {/each}
    {/if}
  </div>
</div>
