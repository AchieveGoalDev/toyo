<script lang="ts">
  import { buildTween } from "$lib/tweens/buildTween";

  let completed = false;
  let opacity = buildTween([0.5, 1], 200);

  function changeOpacity(completed: boolean) {
    if (completed) {
      return 1;
    } else return 0.5;
  }

  function toggle() {
    completed = !completed;
  }

  $: console.log(completed);
  $: opacity.set(changeOpacity(completed));
</script>

<button on:click|preventDefault={toggle}>toggle</button>

<div
  style:opacity={`${$opacity}`}
  class="text-2xl rounded-full transitions-all bg-rose-800 h-[80px] w-[80px]"
>
  <slot />
</div>
