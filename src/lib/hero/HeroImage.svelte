<script lang="ts">
  import type { CarouselImage } from "$lib/hero/HeroDefs";
  import { fly } from "svelte/transition";

  export let imageProps: CarouselImage;
</script>

<img
  class={"h-full w-auto col-span-full row-span-full max-h-[550px]"}
  src={imageProps.url}
  alt={imageProps.alt}
  in:fly={imageProps.transitionIn}
  out:fly={imageProps.transitionOut}
/>
