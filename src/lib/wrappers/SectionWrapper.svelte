<script lang="ts">
  import HighlightTitle from "$lib/headers/HighlightTitle.svelte";

  export let titleData: {
    pretext: string;
    highlight: string;
    posttext: string;
  };

  export let themeColor: string;
</script>

<section
  class="flex flex-col my-20 px-5 w-[50] md:w-[700px] lg:w-[1000px]  xl:w-[1200px] md:mx-auto"
>
  <div class="mb-5">
    <HighlightTitle
      pretext={titleData.pretext}
      highlight={titleData.highlight}
      posttext={titleData.posttext}
      {themeColor}
    />
  </div>
  <slot />
</section>
