<script lang="ts">
  import { PUBLIC_BUCKET_URL } from "$env/static/public";
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";

  import HeroText from "$lib/hero/HeroText.svelte";
  import HeroTextScroller from "$lib/hero/HeroTextScroller.svelte";
  import HeroImageCarousel from "$lib/hero/HeroImageCarousel.svelte";
  import HeroTitle from "$lib/hero/HeroTitle.svelte";
  import HeroScroller from "$lib/hero/HeroScroller.svelte";

  import CTA from "$lib/buttons/redCtaButton.svelte";

  let url = PUBLIC_BUCKET_URL;
  let s3 = PUBLIC_IMAGE_BUCKET_URL;

  let scrollWords = [
    "全キャンパスで",
    "オンラインでも",
    "毎日にも",
    "受講スタイル",
    "お得な値段で",
  ];

  let scrollText = [
    "Test text one, I will try to keep it under sixty characters",
    "Test text two, I will try to keep it under sixty characters",
    "Test text three, I will try to keep it under sixty characters",
    "Test text four, I will try to keep it under sixty characters",
    "Test text five, I will try to keep it under sixty characters",
  ];

  let imgData = [
    {
      path: s3 + "images/hero/Everyday1080.webp",
      alt: "毎日",
      size: "h-2/3",
    },
    {
      path: s3 + "images/hero/Everyday1080.webp",
      alt: "毎日",
      size: "h-2/3",
    },
    {
      path: s3 + "images/hero/Everyday1080.webp",
      alt: "毎日",
      size: "h-2/3",
    },
    {
      path: s3 + "images/hero/OnlineHero1080.webp",
      alt: "joy",
      size: "h-5/6",
    },
    { path: url + "people/teach-cutout.png", alt: "teach", size: "h-5/6" },
  ];

  let display = true;
  $: index = 0;
  $: imgPaths = [
    url + "people/michelle-cutout.png",
    url + "people/joy-cutout.png",
    url + "people/teach-cutout.png",
  ];

  const cycler = () => {
    display = false;

    if (index >= scrollWords.length - 1) {
      index = 0;
    } else index++;

    setTimeout(() => (display = true), 750);
  };

  function resetInterval(toReset: number) {
    clearInterval(toReset);
    return setInterval(cycler, 7500);
  }

  let interval: any;
  $: interval = resetInterval(interval);
</script>

<div class="mx-auto relative w-[90%]">
  <div class="h-[20px] w-[full]" />
  <HeroScroller
    direction={"left"}
    {interval}
    {resetInterval}
    bind:display
    bind:cycleIndex={index}
    arraySize={imgData.length}
  />
  <HeroScroller
    direction={"right"}
    bind:interval
    {resetInterval}
    bind:display
    bind:cycleIndex={index}
    arraySize={imgData.length}
  />
  <div
    class="flex flex-row bg-logo bg-center bg-no-repeat h-screen px-32 mx-auto z-10"
  >
    <div class="flex flex-col w-1/2 h-full justify-center contents-center">
      <div
        class="my-auto flex flex-col justify-center contents-center p-10 rounded-md"
      >
        <h1
          class="xl:text-7xl lg:text-6xl md:text-5xl text-slate-700 text-center font-black mx-auto mb-10 drop-shadow"
        >
          Achieve English <span class="text-rose-800">Excellence</span>
        </h1>
        <HeroTextScroller {display}>
          <HeroTitle {scrollWords} cycleIndex={index} />
          <HeroText cycleIndex={index} {scrollText} />
        </HeroTextScroller>
        <div class="mx-auto">
          <CTA text="今すぐ受講" href="/apply" />
        </div>
      </div>
    </div>
    <HeroImageCarousel cycleIndex={index} imgPaths={imgData} {display} />
  </div>
</div>
