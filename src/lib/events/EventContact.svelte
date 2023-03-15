<script lang="ts">
  import RedCtaButton from "$lib/buttons/redCtaButton.svelte";

  import SectionWrapper from "$lib/wrappers/SectionWrapper.svelte";
  import TextWrapper from "$lib/wrappers/TextWrapper.svelte";
</script>

<SectionWrapper
  titleData={{ pretext: "", highlight: "お問い合わせ", posttext: "" }}
  themeColor="blue"
>
  <slot />
  <TextWrapper>
    講座内容の詳細を知りたい方は、メールもしくはお電話でお問い合わせください。
    <div class="mx-auto">
      <RedCtaButton text="メールでのお問い合わせはこちら" href="" />
    </div>

    <div class="font-bold">
      <p>株式会社アチーブゴール</p>
      <p>Toyo Acheive Englishサポートデスク</p>
      <p>Tel:03-5302-2239</p>
    </div>
  </TextWrapper>
</SectionWrapper>
