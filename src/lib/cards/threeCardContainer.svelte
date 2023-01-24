<script>
  import Card from "$lib/cards/card.svelte";
  import Title from "$lib/highlightTitle.svelte";
</script>

<div>
  <Title pretext={"プログラムの"} highlight={"3つ"} posttext={"の魅力"} />
  <div
    class="flex flex-col sm:flex-row md:flex-nowrap sm:flex-wrap mx-auto place-content-around"
  >
    <Card
      imgPath="/cards/advantage_img1.jpg"
      heading="1. 毎日キャンパスで学べる"
    />
    <Card
      imgPath="/cards/advantage_img2.jpg"
      heading="2. English Only Policy"
    />
    <Card imgPath="/cards/advantage_img3.jpg" heading="3. お得な受講料" />
  </div>
</div>
