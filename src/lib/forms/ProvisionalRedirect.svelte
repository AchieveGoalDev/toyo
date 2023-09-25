<script lang="ts">
  import ImageSelect from "./input/ImageSelect.svelte";
  import { fly } from "svelte/transition";

  import { ImageSelectInput } from "./data/typeDefs";

  import { campusImageSelectParams } from "./data/basicDefs";

  let select = new ImageSelectInput(campusImageSelectParams);

  let redirect = "http://old.achieve-english.jp/entry/cat/";
  let selected = "未選択";

  $: selected = select.value.toLowerCase();
</script>

<div>
  キャンパスを選択してください
  <ImageSelect bind:data={select} />
  {#if selected !== "未選択"}
    <a transition:fly href={redirect + selected}>選択</a>
  {/if}
</div>
