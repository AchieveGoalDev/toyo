<script lang="ts">
  //@ts-ignore
  import * as animateScroll from "svelte-scrollto";
  import type { Collection } from "./FaqDefs";
  export let collections: Collection[];
</script>

<div class="border-l-4 my-5 py-2">
  {#each collections as collection}
    <button
      class="block my-2"
      on:click={() =>
        animateScroll.scrollTo({
          element: "#id" + collection.id,
          duration: 400,
          offset: -80,
        })}>{collection.title}</button
    >
  {/each}
</div>
