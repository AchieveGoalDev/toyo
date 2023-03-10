<script lang="ts">
  import { PUBLIC_BUCKET_URL } from "$env/static/public";
  import HeroImageCarousel from "$lib/hero/HeroImageCarousel.svelte";
  import HeroTitle from "$lib/hero/HeroTitle.svelte";
  import HeroScroller from "$lib/hero/HeroScroller.svelte";

  import CTA from "$lib/buttons/redCtaButton.svelte";

  let url = PUBLIC_BUCKET_URL;

  let scrollWords = ["各キャンパスで", "オンラインでも", "毎日にも"];
  let imgPaths = [
    url + "people/michelle-cutout.png",
    url + "people/joy-cutout.png",
    url + "people/teach-cutout.png",
  ];

  let imgData = [
    {
      path: url + "people/michelle-cutout.png",
      alt: "michelle",
      size: "h-full",
    },
    { path: url + "people/joy-cutout.png", alt: "joy", size: "h-5/6" },
    { path: url + "people/teach-cutout.png", alt: "teach", size: "h-[800px]" },
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

<div class="mx-auto relative w-[90%] mt-[100px]">
  <div class="h-[80px] w-[full]" />
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
          class="xl:text-9xl lg:text-7xl md:text-6xl text-slate-700 text-center font-black mx-auto mb-10 drop-shadow"
        >
          Achieve English Excellence
        </h1>
        <HeroTitle {scrollWords} cycleIndex={index} {display} />
        <p
          class="rounded-md text-slate-700 text-2xl inline-block mx-auto mb-10 w-2/3"
        >
          “English Only
          Policy”の環境だからこそできるスピーキング・リスニングに焦点を当てたレッスン内容になっています。英会話スクールに行く時間が確保できなくてもキャンパス内留学だからこそ空いている時間でレッスンに取り組むことができ、大学の授業や部活、バイトなどとも両立することができます！
        </p>
        <div class="mx-auto">
          <CTA text="今すぐ受講" />
        </div>
      </div>
    </div>
    <HeroImageCarousel cycleIndex={index} imgPaths={imgData} {display} />
  </div>
</div>
