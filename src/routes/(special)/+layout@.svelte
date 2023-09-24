<script lang="ts">
  import "../../app.css";
  import PageTransition from "$lib/transitions/PageTransition.svelte";
  import Navbar from "$lib/navbar/Navbar.svelte";
  import Hamburger from "$lib/navbar/mobile/Hamburger.svelte";
  import Social from "$lib/social-components/social.svelte";
  import Footer from "$lib/footer/Footer.svelte";
  import { windowWidth, scrollHeight } from "$lib/store/windowData";

  import { specialNav } from "$lib/navbar/LinkDefs";

  let width: number;
  let scroll: number;

  export let data: any;

  $: windowWidth.update((v) => {
    return width;
  });

  $: scrollHeight.update((v) => {
    return scroll;
  });
</script>

<svelte:window bind:innerWidth={width} bind:scrollY={scroll} />

<!-- {#if width > 900}
  <Navbar data={specialNav} />
{:else if width <= 900}
  <Hamburger data={specialNav} />
{/if} -->

<PageTransition url={data.pathname}>
  <main
    id="special"
    class="flex flex-col justify-center pb-5 w-2xl bg-slate-50 mx-auto px-3 shadow-md"
  >
    <div class="text-2xl mx-auto h-[95vh]">
      <div class="flex flex-col h-full place-content-center justify-center">
        申し訳ございません。現在、こちらのページが開発中です。
        <span class="text-xl">
          <a
            class="underline text-blue-800 transition-all hover:text-blue-600"
            href="http://old.achieve-english.jp/special"
            target="_blank"
          >
            こちら
          </a>でご覧ください、または<a
            class="underline text-blue-800 transition-all hover:text-blue-600"
            href="https://www.achieve-english.jp">ホームページに</a
          >戻る。
        </span>
      </div>
    </div>
    <!-- <slot />
    <Social /> -->
  </main>
</PageTransition>
<footer class="w-full flex flex-col justify-center content-center">
  <!--TODO add footer data seperately <Footer themeColor={"blue"} />-->
  <div class="bg-slate-700 text-white w-full">
    <p class="mx-auto w-fit py-2">
      © Achievegoal Co.,Ltd. All rights reserved.
    </p>
  </div>
</footer>
