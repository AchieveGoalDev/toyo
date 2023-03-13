<script lang="ts">
  import { fly } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  export let url: string;

  $: url = url;
</script>

{#if url}
  {#key url}
    <div
      in:fly={{ x: -50, duration: 250, delay: 300, easing: cubicInOut }}
      out:fly={{ x: 50, duration: 250, easing: cubicInOut }}
      class="grid grid-rows-1 grid-cols-1"
    >
      <slot />
    </div>
  {/key}
{/if}
