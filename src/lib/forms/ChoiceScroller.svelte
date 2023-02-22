<script lang="ts">
  import { fly } from "svelte/transition";
  import type { ImageArray } from "$lib/forms/ApplicationData";

  export let selection: string;
  export let images: ImageArray;

  let index = 0;

  function handleIndex(currentSelection: string) {
    console.log("Current selection:", currentSelection);
    if (currentSelection) {
      images.forEach((image) => {
        console.log(image.name, currentSelection);
        console.log(image.name === currentSelection);
        if (image.name === currentSelection) {
          index = images.indexOf(image);
        }
      });
    }
    if (!currentSelection) {
      console.log("fired");
      index = 0;
    }
  }

  $: handleIndex(selection);
</script>

<div class="relative w-full h-[180px] bg-rose-50">
  {#each [images[index]] as src (index)}
    <img
      transition:fly
      src={src.img}
      alt=""
      class="absolute z-1 bottom-0 shrink-0 h-auto w-auto"
    />
    {#if src.text}
      <div
        transition:fly
        class="flex h-[30px] absolute inset-x-0 bottom-0 w-full z-30"
      >
        <div
          class="pl-4 bg-rose-800 h-full opacity-100 color-white text-center text-white font-bold text-2xl w-1/4"
        >
          <p>{src.text}</p>
        </div>
        <div
          class="bg-gradient-to-r from-rose-800 to-transparent h-full w-full"
        />
      </div>
    {/if}
  {/each}
</div>
