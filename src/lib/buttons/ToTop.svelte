<script lang="ts">
  //@ts-ignore
  import * as animateScroll from "svelte-scrollto";
  import { scrollHeight } from "$lib/store/windowData";
  import { fly } from "svelte/transition";

  let scrolled: number;
  scrollHeight.subscribe((v) => (scrolled = v));
</script>

{#if scrolled > 100}
  <div class="relative">
    <button
      transition:fly={{ duration: 200, y: -30 }}
      on:click={() => animateScroll.scrollToTop({ duration: 500 })}
      class="shadow-lg fixed bottom-[50px] right-[50px] rounded-full text-white text-lg lg:text-xl font-bold bg-rose-600 p-4 lg:p-5"
    >
      ページTOPへ
    </button>
  </div>
{/if}
