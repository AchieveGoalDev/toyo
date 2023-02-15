<script lang="ts">
  import { slide, fade } from "svelte/transition";
  import Quote from "$lib/testimonials/Quote.svelte";
  import Profile from "$lib/testimonials/Profile.svelte";
  import { data } from "./TestimonialData";

  let index = 0;
  let expanded = false;

  function handleLeft(index, data) {}

  function handleRight(index, data) {}
</script>

<div class="w-full shadow-lg bg-slate-10 relative min-h-[250px]">
  <div>
    {#if !expanded}
      <button transition:fade class="absolute left-0 top-1/2 text-xl">〈</button
      >
      <button transition:fade class="absolute right-0 top-1/2 text-xl"
        >〉</button
      >
      <div class="mx-auto text-center shadow-lg" transition:slide>
        <Quote data={data[index]} />
      </div>
    {/if}
    <button
      on:click={() => (expanded = !expanded)}
      class="font-bold text-2xl pb-2 w-full bg-rose-800 text-white transition-all ease-in hover:bg-rose-700 hover:scale-[102%]"
      >{expanded ? "閉じる" : "詳細を見る"}</button
    >
    {#if expanded}
      <div transition:slide class="bg-orange-100">
        <Profile data={data[index]} />
      </div>
    {/if}
  </div>
</div>
