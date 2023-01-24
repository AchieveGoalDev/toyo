<script lang="ts">
  export let pretext: string;
  export let highlight: string;
  export let posttext: string;
</script>

<div class="mx-auto mb-30 px-5">
  <div>
    <h1 class="font-bold text-4xl font-['Noto_Sans_JP'] mb-2">
      {pretext}<span class="text-5xl font-black text-rose-700">{highlight}</span
      >{posttext}
    </h1>
  </div>
  <hr class="h-1.5 bg-rose-700" />
</div>
