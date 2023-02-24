<script lang="ts">
  import { buildTween } from "$lib/tweens/buildTween";

  let opacity = buildTween([0.5, 1], 200);
  let border = buildTween(["rgb(7,89,133)", "rgb(136,19,55)"], 200);
  let borderW = buildTween([0, 4], 200);

  export let progress: { current: number; status: string };
  export let number: number;

  function changeOpacity(progress: { current: number; status: string }) {
    if (progress.current < number) {
      return 0.5;
    } else {
      return 1;
    }
  }

  function changeBorder(progress: { current: number; status: string }) {
    if (progress.current === number) {
      return "rgb(7,89,133)";
    } else return "rgb(159,18,57)";
  }

  function changeBorderWidth(progress: { current: number; status: string }) {
    if (progress.current < number) {
      return 0;
    } else return 4;
  }

  $: opacity.set(changeOpacity(progress));
  $: borderW.set(changeBorderWidth(progress));
  $: border.set(changeBorder(progress));
</script>

<div class="flex flex-col items-center">
  <div
    style:border="solid"
    style:border-width={`${$borderW}px`}
    style:border-color={`${$border}`}
    style:opacity={`${$opacity}`}
    class="text-2xl rounded-full transitions-all bg-rose-800 h-[40px] w-[40px] flex flex-col justify-center items-center"
  >
    <slot name="number" />
  </div>
  <slot name="description" />
</div>
