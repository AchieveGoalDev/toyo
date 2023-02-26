<script lang="ts">
  import { buildTween } from "$lib/tweens/buildTween";

  let border = buildTween(["rgb(7,89,133)", "rgb(136,19,55)"], 200);
  let borderW = buildTween([0, 4], 200);
  let scale = buildTween([1, 1.3], 200);
  let toCurrent = buildTween(["rgb(87, 83, 78)", "rgb(239, 68, 68)"], 200);
  let backToCurrent = buildTween(["rgb(239, 68, 68)", "rgb(153, 27, 27)"], 200);

  //gray rgb(87, 83, 78)
  //light red rgb(239, 68, 68)
  //dark red rgb(153, 27, 27)

  type ProgressStatus = {
    current: number;
    max: number;
    status: string;
  };

  export let progress: ProgressStatus;
  export let number: number;

  function changeBorder(progress: ProgressStatus) {
    if (progress.current === number) {
      return "rgb(7,89,133)";
    } else return "rgb(159,18,57)";
  }

  function changeToCurrent(progress: ProgressStatus) {
    if (progress.current === number) {
      return "rgb(239, 68, 68)";
    } else {
      return "rgb(87, 83, 78)";
    }
  }

  function changeBackToCurrent(progress: ProgressStatus) {
    if (progress.current === number) {
      return "rgb(239, 68, 68)";
    } else {
      return "rgb(153, 27, 27)";
    }
  }

  function changeScale(progress: ProgressStatus) {
    if (progress.current === number) {
      return 1.3;
    } else {
      return 1;
    }
  }

  function changeBorderWidth(progress: ProgressStatus) {
    if (progress.current < number) {
      return 0;
    } else return 4;
  }

  function detectBackgroundColor(progress: ProgressStatus) {
    if (progress.max > number && progress.current !== number) {
      return $backToCurrent;
    } else return $toCurrent;
  }

  $: scale.set(changeScale(progress));
  $: borderW.set(changeBorderWidth(progress));
  $: border.set(changeBorder(progress));
  $: toCurrent.set(changeToCurrent(progress));
  $: backToCurrent.set(changeBackToCurrent(progress));
</script>

<div class="relative z-[5]">
  <slot name="description" />
  <div
    style:transform={`scale(${$scale})`}
    style:border="solid"
    style:border-width={`${$borderW}px`}
    style:border-color={`${$border}`}
    style:background-color={() => detectBackgroundColor(progress)}
    class="text-white text-2xl rounded-full transitions-all bg-rose-800 h-[40px] w-[40px] flex flex-col justify-center items-center shadow-md"
  >
    <slot name="number" />
  </div>
</div>
