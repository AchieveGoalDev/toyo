<script lang="ts">
  export let isNecessary: boolean;
  export let label: string;
  export let inputVal: string;
  export let placeholder: string;
  export let alt: string;
  export let desc: string;
</script>

<div class="flex">
  <label class="font-bold mr-10">
    {#if isNecessary}
      <span class="text-red-500">*</span>
    {/if}
    {label}
  </label>
  <div class="flex flex-col w-[200px]">
    <input type="text" class="" {alt} {placeholder} bind:value={inputVal} />
    <p class="text-slate-600 text-sm">{desc}</p>
  </div>
</div>
