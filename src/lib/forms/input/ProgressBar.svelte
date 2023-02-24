<script lang="ts">
  import ProgressIndicatorWrapper from "$lib/forms/ProgressIndicatorWrapper.svelte";

  export let progress: {
    current: number;
    status: string;
  };
</script>

<div class="flex w-full place-content-between items-center">
  <ProgressIndicatorWrapper {progress} number={1}>
    <div slot="number">1.</div>
    <strong slot="description">Thing</strong>
  </ProgressIndicatorWrapper>
  <div class="h-[10px] bg-rose-500 w-full rounded-md" />
  <ProgressIndicatorWrapper {progress} number={2}>
    <div slot="number">2.</div>
    <strong slot="description">Thing</strong>
  </ProgressIndicatorWrapper>
  <div class="h-[20px] bg-rose-500 w-full" />
  <ProgressIndicatorWrapper {progress} number={3}>
    <div slot="number">3.</div>
    <strong slot="description">Thing</strong>
  </ProgressIndicatorWrapper>
  <div class="h-[20px] bg-rose-500 w-full" />
  <ProgressIndicatorWrapper {progress} number={4}>
    <div slot="number">4.</div>
    <strong slot="description">Thing</strong>
  </ProgressIndicatorWrapper>
</div>
