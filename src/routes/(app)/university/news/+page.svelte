<script lang="ts">
  import { onMount } from "svelte";
  import { getArticles } from "$lib/api/getArticles";

  let data = "loading";

  onMount(async () => {
    //@ts-ignore
    data = await getArticles();
  });

  import HighlightTitle from "$lib/headers/HighlightTitle.svelte";

  $: data = data;
</script>

<HighlightTitle pretext="" highlight="最新情報" posttext="" themeColor="red" />
{#if data === "loading"}
  Fetching DataTransfer...
{:else}
  <pre>
    {JSON.stringify(data, null, 2)}
</pre>
{/if}
