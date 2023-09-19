<script lang="ts">
  import { PUBLIC_BUCKET_URL } from "$env/static/public";

  import Hero from "$lib/hero.svelte";
  import MobileHero from "$lib/hero/MobileHero.svelte";
  import Cards from "$lib/cards/threeCardContainer.svelte";
  import BlueCTA from "$lib/buttons/blueCtaButton.svelte";
  import RedCTA from "$lib/buttons/redCtaButton.svelte";
  import MediaWrapper from "$lib/wrappers/media-wrapper.svelte";
  import SectionWrapper from "$lib/wrappers/SectionWrapper.svelte";
  import Testimonial from "$lib/testimonials/Testimonial.svelte";
  import ApplicationProcess from "$lib/homepage/ApplicationProcess.svelte";
  import TextWrapper from "$lib/wrappers/TextWrapper.svelte";
  import { windowWidth } from "$lib/store/windowData";

  let width: number;

  windowWidth.subscribe((v) => {
    width = v;
  });
</script>

<head />

{#if width > 1200}
  <div class="h-[720px]">
    <Hero isMobile={false} />
  </div>
{:else if width > 500 && width <= 1400}
  <MobileHero isMobile={true} />
{:else if width <= 500}
  <MobileHero isMobile={true} />
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
          class="w-[full] sm:w-auto sm:h-[300px] rounded-md ml-10"
        />
      </MediaWrapper>
      <p class="text-2xl mb-5 mx-auto">
        Toyo Achieve Englishとは、東洋大学で勤務する<span
          class="text-3xl font-bold text-rose-700">優しくて明るい</span
        >経験豊富なフィリピン人講師が、東洋大学の学生様や職員様、そして地域の皆様に楽しく
        <span class="text-3xl font-bold text-rose-700">英語を上達できる</span
        >レッスンを提供するプログラムです。
      </p>
      <p class="text-2xl my-1 mx-auto">
        とくに会話力向上コースでは、東洋大学の学生様・職員様が、<span
          class="text-3xl font-bold text-rose-700">授業の空きコマ</span
        >にグループまたはマンツーマンで英会話レッスンを受け、「英語で会話できるようになる」コースです。レッスン品質が高いのはもちろん、価格も駅前英会話の半額以下で受けられる<span
          class="text-3xl font-bold text-rose-700">コスパ最強</span
        >コースで、8年間大好評をいただいております。
      </p>
    </div>
    <div
      class="flex flex-col mx-5 sm:mx-0 sm:flex-row place-content-around align-items-center"
    >
      <BlueCTA href="/university/about" text="詳細はこちら" />
      <RedCTA href="/university/apply" text="今すぐお問い合わせ" />
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
  <!-- <SectionWrapper
    themeColor="red"
    titleData={{ pretext: "申し込みの", highlight: "流れ", posttext: "" }}
  >
    <ApplicationProcess />
  </SectionWrapper> -->
  <SectionWrapper
    themeColor="red"
    titleData={{ pretext: "学生の", highlight: "声", posttext: "" }}
  >
    <TextWrapper>
      Toyo Achieve Englishの受講生の方に、講座についてインタビュー！
      英語学習のことや、この講座を受講した後の目標など、
      この講座を受講して英語力が<strong class="text-rose-800">ぐんぐん</strong
      >上がった方の声をご紹介します
    </TextWrapper>
    <Testimonial />
  </SectionWrapper>
</div>
