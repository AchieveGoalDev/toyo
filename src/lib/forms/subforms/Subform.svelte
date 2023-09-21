<script lang="ts">
  //TODO fix the typescript errors
  //@ts-nocheck

  import type { SubformData } from "../data/typeDefs";
  import TextInput from "../input/TextInput.svelte";
  import EmailWithConfirmation from "../input/EmailWithConfirmation.svelte";
  import RadioInput from "../input/RadioInput.svelte";
  import ImageSelect from "../input/ImageSelect.svelte";
  import CheckboxInput from "../input/CheckboxInput.svelte";
  import { subformHeight } from "$lib/store/applicationForm";
  import { slide, fly } from "svelte/transition";

  export let subformData: SubformData;

  const subformKeys = Object.keys(subformData.inputs);
  $: subformData = subformData;
  $: subformData.calculateValid();
</script>

<form
  in:slide
  out:slide|local={{ x: -200, opacity: 0 }}
  class="bg-white col-span-full row-span-full top-0 inset-x-0"
>
  <div
    class="w-full flex flex-row place-content-center py-2 bg-rose-700 text-white font-bold text-3xl"
  >
    <h1>{subformData.format.heading}</h1>
  </div>
  <div class="font-bold text-xl my-5 pl-5">
    {#each subformData.format.description as line}
      <p>{line}</p>
    {/each}
    <p class="mt-5 text-lg italic font-thin">
      「<span class="text-red-500 font-bold">*</span>」の項目は必要項目です。
    </p>
  </div>
  {#each subformKeys as key}
    {#if subformData.inputs[key].inputType === "image-select"}
      <ImageSelect bind:data={subformData.inputs[key]} />
    {/if}
    {#if subformData.inputs[key].inputType === "text"}
      <TextInput bind:data={subformData.inputs[key]} />
    {/if}
    {#if subformData.inputs[key].inputType === "radio"}
      <RadioInput bind:data={subformData.inputs[key]} />
    {/if}
    {#if subformData.inputs[key].inputType === "double-text"}
      <EmailWithConfirmation bind:data={subformData.inputs[key]} />
    {/if}
    {#if subformData.inputs[key].inputType === "checkbox"}
      <CheckboxInput bind:data={subformData.inputs[key]} />
    {/if}
    <hr />
  {/each}
</form>
