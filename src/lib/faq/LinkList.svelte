<script lang="ts">
  //@ts-ignore
  import * as animateScroll from "svelte-scrollto";
  import type { Collection } from "./FaqDefs";

  export let collections: Collection[];
</script>

<div class="border-l-4 border-rose-700 my-5 py-2 bg-rose-50 w-auto">
  <h2 class="mx-3 text-2xl font-bold">カテゴリーを見る</h2>
  <div class="md:grid grid-cols-2">
    {#each collections as collection}
      <button
        class="flex items-center ml-5 transition-all hover:-translate-y-1 hover:scale-105"
        on:click={() =>
          animateScroll.scrollTo({
            element: "#id" + collection.id,
            duration: 400,
            offset: -80,
          })}
      >
        <img
          src="/Icons/link.svg"
          alt=""
          class="h-[20px] rounded-full bg-rose-700"
        />
        <p class="block my-2 ml-2 underline">{collection.title}</p>
      </button>
    {/each}
  </div>
</div>
