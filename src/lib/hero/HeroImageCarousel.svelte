<script lang="ts">
  import { CarouselImage } from "$lib/hero/HeroDefs";
  import type { ImgObj } from "$lib/hero/HeroDefs";
  import PipBox from "$lib/hero/PipBox.svelte";
  import HeroImage from "$lib/hero/HeroImage.svelte";

  export let imgPaths: ImgObj[];
  export let cycleIndex: number;
  export let display: boolean;

  let imgData: CarouselImage[] = [];

  $: for (let i = 0; i < imgPaths.length; i++) {
    imgData.push(
      new CarouselImage(imgPaths[i].path, imgPaths[i].alt, imgPaths[i].size)
    );
  }
</script>

<!--TODO simplify nesting here-->
<div class="w-1/2 h-full">
  <div
    class="w-2/3 mx-auto flex flex-col justify-center contents-center relative h-full w-auto"
  >
    <div class="flex flex-col relative h-5/6 overflow-visible shrink">
      {#each imgData as img, i}
        {#if display && cycleIndex === i}
          <HeroImage imageProps={img} />
        {/if}
      {/each}
      <PipBox {imgPaths} index={cycleIndex} />
    </div>
  </div>
</div>
