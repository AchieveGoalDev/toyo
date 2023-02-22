<script lang="ts">
  import SubHeading from "$lib/headers/SubHeading.svelte";
  import ChoiceScroller from "$lib/forms/ChoiceScroller.svelte";

  import type { ImageSelectInput } from "$lib/forms/ApplicationData";

  export let value: string;
  export let data: ImageSelectInput;
</script>

<div>
  <div
    class="flex mb-s2 justify-center items-center w-full place-content-between bg-rose-50 px-3"
  >
    <div class="mr-3">
      <SubHeading>キャンパスを選択してください</SubHeading>
    </div>
    <select bind:value class="w-[300px] text-xl my-4 mx-auto">
      <option value="">{data.placeholder}</option>
      {#each data.options as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
  </div>
  <ChoiceScroller selection={value} images={data.images} />
</div>
