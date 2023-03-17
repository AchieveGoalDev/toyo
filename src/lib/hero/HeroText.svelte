<script lang="ts">
  import { fly } from "svelte/transition";

  export let scrollText: string[];
  export let cycleIndex: number;
</script>

<p
  transition:fly
  class="col-span-full row-span-full rounded-md text-slate-700 text-2xl inline-block mx-auto mb-10 w-2/3 min-w-[200px]"
>
  {scrollText[cycleIndex]}
</p>
