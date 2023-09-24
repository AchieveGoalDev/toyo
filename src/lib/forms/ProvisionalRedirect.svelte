<script lang="ts">
  import ImageSelect from "./input/ImageSelect.svelte";
  import { fly } from "svelte/transition";

  import { ImageSelectInput } from "./data/typeDefs";

  import { campusImageSelectParams } from "./data/basicDefs";

  let select = new ImageSelectInput(campusImageSelectParams);

  let redirect = "http://old.achieve-english.jp/entry/cat/";
  let selected = "未選択";

  function parseSelection(selection: string) {
    switch (selection) {
      case "白山":
        return "hakusan";
      case "INIAD":
        return "iniad";
      case "WELLB":
        return "wellb";
      case "川越":
        return "kawagoe";
      case "板倉":
        return "itakura";
      default:
        return "未選択";
    }
  }

  $: selected = parseSelection(select.value);
</script>

<div>
  キャンパスを選択してください
  <ImageSelect bind:data={select} />
  {#if selected !== "未選択"}
    <a transition:fly href={redirect + selected}>選択</a>
  {/if}
</div>
