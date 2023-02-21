<script lang="ts">
  import ProgressIndicatorWrapper from "$lib/forms/ProgressIndicatorWrapper.svelte";
</script>

<div class="flex">
  <ProgressIndicatorWrapper>
    <div slot="number">1.</div>
    <strong slot="description">Thing</strong>
  </ProgressIndicatorWrapper>

  <ProgressIndicatorWrapper>
    <div slot="number">2.</div>
    <strong slot="description">Thing</strong>
  </ProgressIndicatorWrapper>

  <ProgressIndicatorWrapper>
    <div slot="number">3.</div>
    <strong slot="description">Thing</strong>
  </ProgressIndicatorWrapper>

  <ProgressIndicatorWrapper>
    <div slot="number">4.</div>
    <strong slot="description">Thing</strong>
  </ProgressIndicatorWrapper>
</div>
