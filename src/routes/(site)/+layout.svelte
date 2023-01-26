<script lang="ts">
  import "../../app.css";
  import Nav from "$lib/navbar/nav.svelte";
  import Hamburger from "$lib/navbar/mobile/Hamburger.svelte";
  import Social from "$lib/social-components/social.svelte";
  import Footer from "$lib/footer/Footer.svelte";
  import { windowWidth, scrollHeight } from "$lib/store/windowData";

  let width: number;
  let scroll: number;

  $: windowWidth.update((v) => {
    return width;
  });

  $: scrollHeight.update((v) => {
    return scroll;
  });
</script>

<svelte:window bind:innerWidth={width} bind:scrollY={scroll} />

{#if width > 900}
  <Nav />
{:else if width <= 900}
  <Hamburger />
{/if}
<main
  class="flex flex-col justify-center pb-5 w-2xl bg-white mx-auto px-3 shadow-md"
>
  <slot />
  <Social />
</main>
<footer class="w-full flex flex-col justify-center content-center">
  <div class="min-h-[300px] bg-rose-700">
    <Footer />
  </div>
  <div class="bg-slate-700 text-white w-full">
    <p class="mx-auto w-fit py-2">Copyright 2023 Achieve Goal</p>
  </div>
</footer>
