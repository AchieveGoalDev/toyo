<script lang="ts">
  import { slide } from "svelte/transition";
  import type { RadioInput } from "$lib/forms/ApplicationData";

  export let data: RadioInput;

  export let isValid: boolean;
  export let selection: string;

  let errorMessage: string[] = [];

  $: if (!isValid) {
    errorMessage.push("必要項目です");
  } else {
    errorMessage = [];
  }

  $: if (!selection) {
    isValid = false;
  } else {
    isValid = true;
  }
</script>

<legend>
  {#if data.isNecessary}
    <span class="text-red-500">*</span>
  {/if}
  {data.label}</legend
>
<fieldset>
  {#each data.choices as choice}
    <label for={choice}>{choice}</label>
    <input
      bind:group={selection}
      value={choice}
      id={choice}
      type="radio"
      name={data.label}
    />
  {/each}
  {#if !isValid}
    {#each errorMessage as error}
      <p transition:slide class="text-red-500">{error}</p>
    {/each}
  {/if}
</fieldset>
