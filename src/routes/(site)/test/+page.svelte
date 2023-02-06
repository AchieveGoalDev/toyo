<script lang="ts">
  let data: any;
  let hasError = false;
  let errorData: string;

  async function getData() {
    const response = await fetch(
      "https://dh63x6re274g0.cloudfront.net/article-data/test",
      {mode: "no-cors"}
    );

    console.log(response);
  }
  $: getData();
</script>

{#if !hasError}
  <h2>{JSON.stringify(data)}</h2>
{:else}
  <h2>Something went wrong: {errorData}</h2>
{/if}
