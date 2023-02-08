<script lang="ts">
  import { PUBLIC_BUCKET_URL } from "$env/static/public";

  import Hero from "$lib/hero.svelte";
  import Cards from "$lib/cards/threeCardContainer.svelte";
  import BlueCTA from "$lib/buttons/blueCtaButton.svelte";
  import RedCTA from "$lib/buttons/redCtaButton.svelte";
  import MediaWrapper from "$lib/wrappers/media-wrapper.svelte";
  import SectionWrapper from "$lib/wrappers/SectionWrapper.svelte";
  import ApplicationProcess from "$lib/homepage/ApplicationProcess.svelte";
  import { windowWidth } from "$lib/store/windowData";

  let width: number;

  windowWidth.subscribe((v) => {
    width = v;
  });
</script>

{#if width > 1200}
  <Hero />
{:else if width > 500 && width <= 1400}
  <h1>Medium/Small Hero Placeholder</h1>
{:else if width <= 500}
  <h1>Mobile Hero Placeholder</h1>
{/if}
<div class="flex flex-col my-10 max-w-[1000px] mx-auto">
  <SectionWrapper
    themeColor="red"
    titleData={{
      pretext: "",
      highlight: "Toyo Achieve English",
      posttext: "とは",
    }}
  >
    <div class="mb-24">
      <MediaWrapper description="鶴ヶ島キャンパスの先生">
        <img
          slot="media"
          src={PUBLIC_BUCKET_URL + "people/teachers.jpg"}
          alt="東洋大学の先生４人"
          class="w-[full] sm:w-auto sm:h-[300px] rounded-md"
        />
      </MediaWrapper>
      <p class="text-2xl mb-5 mx-auto">
        <span class="text-4xl font-bold text-rose-700">Lorem ipsum</span> dolor sit,
        amet consectetur adipisicing elit. Nihil deserunt, magnam sapiente repudiandae
        similique impedit dolorem suscipit. Quibusdam nemo dolorem, ratione tempora
        eum dicta! Quisquam assumenda minima ex.
      </p>
      <p class="text-2xl my-1 mx-auto">
        Lorem ipsum dolor sit amet <span
          class="text-4xl font-bold text-rose-700">consectetur adipisicing</span
        > elit. Ipsum, quod. Non modi beatae laborum nostrum cum enim veritatis incidunt
        est.
      </p>
    </div>
    <div
      class="flex flex-col mx-5 sm:mx-0 sm:flex-row justify-around align-items-center mt-5 mb-24"
    >
      <BlueCTA text="詳細はこちら" />
      <RedCTA text="今すぐお問い合わせ" />
    </div>
  </SectionWrapper>
  <MediaWrapper description="東洋AchieveEnglishの紹介動画">
    <iframe
      class="w-[360px] h-[203px] sm:w-[560px] sm:h-[315px] md:w-[720px] md:h-[405px] flex"
      slot="media"
      src="https://www.youtube.com/embed/G1R3STXNDxs"
      title="Toyo Achieve English"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </MediaWrapper>
  <SectionWrapper
    themeColor="red"
    titleData={{
      pretext: "プログラムの",
      highlight: "3つ",
      posttext: "の魅力",
    }}
  >
    <Cards />
  </SectionWrapper>
  <SectionWrapper
    themeColor="red"
    titleData={{ pretext: "申し込みの", highlight: "流れ", posttext: "" }}
  >
    <ApplicationProcess />
  </SectionWrapper>
</div>
