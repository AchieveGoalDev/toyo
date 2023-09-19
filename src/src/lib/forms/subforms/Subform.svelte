<script lang="ts">
  //TODO fix the typescript errors
  //@ts-nocheck

  import type { SubformData } from "../data/typeDefs";
  import TextInput from "../input/TextInput.svelte";
  import EmailWithConfirmation from "../input/EmailWithConfirmation.svelte";
  import RadioInput from "../input/RadioInput.svelte";
  import ImageSelect from "../input/ImageSelect.svelte";
  import { subformHeight } from "$lib/store/applicationForm";
  import { slide, fly } from "svelte/transition";

  export let subformData: SubformData;

  const subformKeys = Object.keys(subformData.data);
  $: console.log(subformData);
</script>

<form
  in:slide
  out:slide|local={{ x: -200, opacity: 0 }}
  class="my-10 bg-white shadow-md px-5 col-span-full row-span-full top-0 inset-x-0"
>
  {#each subformKeys as key}
    {#if subformData.data[key].inputType === "image-select"}
      <ImageSelect bind:data={subformData.data[key]} />
    {/if}
    {#if subformData.data[key].inputType === "text"}
      <TextInput bind:data={subformData.data[key]} />
    {/if}
    {#if subformData.data[key].inputType === "radio"}
      <RadioInput bind:data={subformData.data[key]} />
    {/if}
    {#if subformData.data[key].inputType === "double-text"}
      <EmailWithConfirmation bind:data={subformData.data[key]} />
    {/if}
    <hr />
  {/each}
</form>
