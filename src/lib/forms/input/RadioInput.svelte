<script lang="ts">
  export let isNecessary: boolean;
  export let label: string;
  export let inputVal: string;
  export let placeholder: string;
  export let alt: string;
  export let desc: string[];
  export let validateInput: any;
  export let choices;

  let errorMessage: string[];

  export let isValid: boolean;
</script>

<fieldset>
  <legend>
    {#if isNecessary}
      <span class="text-red-500">*</span>
    {/if}
    {label}</legend
  >
  <label for="はい">はい</label>
  <input type="radio" name="はい" />
  <label for="いいえ">いいえ</label>
  <input type="radio" name="はい" />
</fieldset>
