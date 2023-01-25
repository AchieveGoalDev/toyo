<script lang="ts">
  import Pip from "$lib/hero/Pip.svelte";

  export let imgPaths: any;
  export let index: number;
</script>

<div class="flex w-full absolute -bottom-[30px] place-content-around">
  {#each imgPaths as img}
    <Pip {imgPaths} {index} {img}/>
  {/each}
</div>
