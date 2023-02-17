<script lang="ts">
  import type { TestimonialProfile } from "$lib/testimonials/TestimonialData";

  export let data: TestimonialProfile;
</script>

<div
  class="flex flex-row items-center justify-items-center place-content-around py-2 px-[50px]"
>
  <figure class="flex flex-col items-center">
    <img
      src={data.img}
      alt={data.imgAlt}
      class="h-[200px] p-2 bg-yellow-50 rounded-full shadow-md"
    />
    <figcaption class="text-2xl"><strong>{data.name}</strong>さん</figcaption>
    <strong class="text-2xl text-rose-900">{"TOEICスコア" + data.scoreUp + "点アップ!"}</strong>
  </figure>
  <blockquote class="text-5xl text-rose-800 font-bold max-w-[75%]">
    {data.quote}
  </blockquote>
</div>
