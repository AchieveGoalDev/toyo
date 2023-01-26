<script lang="ts">
  import { page } from "$app/stores";
  import { buildTween } from "$lib/tweens/buildTween.js";

  import { links } from "$lib/navbar/LinkDefs";

  import Link from "$lib/navbar/nav-button.svelte";
  import LogoWrapper from "$lib/media-wrappers/LogoWrapper.svelte";
  import { scrollHeight } from "$lib/store/windowData";
  import type { NavbarData } from "./NavTypes.svelte";

  let yShiftValue: any;
  let tweenHeights = [64, 80];
  let tweenColors: any = ["rgb(255,255,255)", "rgb(190, 18, 60)"];
  let barShift = buildTween(tweenColors, 250);
  let yShift = buildTween(tweenHeights, 250);
  let navbarData: NavbarData;

  let index = 0;
  let scrolled: number;

  scrollHeight.subscribe((v) => {
    scrolled = v;
  });

  $: if (scrolled > 0) {
    index = 1;
  } else {
    index = 0;
  }

  $: barShift.set(tweenColors[index]);
  $: yShift.set(tweenHeights[index]);
  $: navbarData = {
    index,
    page,
    scrolled,
  };
  $: yShiftValue = $yShift;
</script>

<nav
  style:height={`${yShiftValue}px`}
  style:background-color={`${$barShift}`}
  class="backdrop-blur-lg
		flex 
		flex-row 
		justify-center 
		w-full 
		sticky 
		top-0 
		z-10 
		opacity-95
		{scrolled ? 'shadow-md' : ''}
		"
>
  <div
    class="flex flex-col w-full mx-auto content-center justify-center place-content-center"
  >
    <div class="flex flex-row h-full">
      <div
        class="h-full flex flex-row justify-center content-center items-center my-auto"
      >
        <LogoWrapper height={yShiftValue - 10} source={"/TAENavLogo.svg"} />
        {#if scrolled}
          <div
            class="flex-col ml-5 font-bold content-center items-center justify-center text-2xl text-center text-white"
          >
            <h2>Toyo Achieve English</h2>
            <h2>英語講座</h2>
          </div>
        {:else}
          <div
            class="flex-col ml-5 font-bold content-center items-center justify-center text-2xl text-center text-slate-800"
          >
            <h2>Toyo Achieve English</h2>
            <h2>英語講座</h2>
          </div>
        {/if}
      </div>
      <div class="flex flex-row mx-auto pr-[300px]">
        {#each links as link}
          <Link {navbarData} linkData={link} />
        {/each}
      </div>
    </div>
  </div>
</nav>
