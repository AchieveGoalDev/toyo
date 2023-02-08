<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";
  import { page } from "$app/stores";
  import { buildTween } from "$lib/tweens/buildTween.js";

  import Link from "$lib/navbar/NavButton.svelte";
  import LogoWrapper from "$lib/media-wrappers/LogoWrapper.svelte";
  import { scrollHeight } from "$lib/store/windowData";
  import type { NavbarContent } from "./LinkDefs";

  export let data: NavbarContent;

  const s3 = PUBLIC_IMAGE_BUCKET_URL;

  let yShiftValue: any;
  let tweenColors: any;
  let tweenHeights = [64, 80];

  let blueTween: any = ["rgb(255,255,255)", "rgb(30,58,138)"];
  let redTween: any = ["rgb(255,255,255)", "rgb(190,18,60)"];

  if (data.color === "red") {
    tweenColors = redTween;
  }

  if (data.color === "blue") {
    tweenColors = blueTween;
  }

  let barShift = buildTween(tweenColors, 250);
  let yShift = buildTween(tweenHeights, 250);

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
        <LogoWrapper
          height={yShiftValue - 10}
          source={s3 + "images/TAENavLogo.svg"}
        />
        {#if scrolled}
          <div
            class="flex-col ml-5 font-bold content-center items-center justify-center sm:text-lg lg:text-xl xl:text-2xl text-center text-white whitespace-nowrap md:mr-3 lg:mr-0"
          >
            <h2>Toyo Achieve English</h2>
            <h2>{data.navText}</h2>
          </div>
        {:else}
          <div
            class="flex-col ml-5 font-bold content-center items-center justify-center sm:text-lg lg:text-xl xl:text-2xl text-center text-slate-800 whitespace-nowrap"
          >
            <h2 class="break-keep">Toyo Achieve English</h2>
            <h2>英語講座</h2>
          </div>
        {/if}
      </div>
      <div class="flex flex-row mx-auto lg:pr-[50px] xl:pr-[200px]">
        {#each data.links as link}
          <Link {navbarData} linkData={link} color={data.color} />
        {/each}
      </div>
    </div>
  </div>
</nav>
