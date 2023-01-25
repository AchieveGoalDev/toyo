<script lang="ts">
  export let direction: string;
  export let resetInterval: any;
  export let display: boolean;
  export let cycleIndex: number;
  export let arraySize: number;
  export let interval: any;

  function handleScroller(direction: string) {
    display = false;
    switch (direction) {
      case "left":
        if (cycleIndex === 0) {
          cycleIndex = arraySize - 1;
        } else {
          --cycleIndex;
          interval = resetInterval(interval);
        }
        setTimeout(() => (display = true), 600);
        break;
      case "right":
        if (cycleIndex >= arraySize - 1) {
          cycleIndex = 0;
        } else {
          ++cycleIndex;
          interval = resetInterval(interval);
        }
        setTimeout(() => (display = true), 600);
        break;
    }
  }
</script>

<button
  on:click={() => {
    handleScroller(direction);
  }}
  tabindex="0"
  class={`
    select-none 
    absolute bottom-1/2
    top-1/2 
    ${direction === "left" ? "left-[-50px]" : "right-[-50px]"}
    text-9xl 
    z-[9] 
    transform 
    ease-in-out 
    h-[50px]
    w-[50px]
    rounded-full
    bg-slate-100
    transition
    ease-in-out
    p-1
    hover:cursor-pointer 
    hover:scale-150
    hover:bg-slate-200
    `}
>
  <img
    alt={direction === "left" ? "前へ" : "次へ"}
    src={direction === "left" ? "/chevron_left.svg" : "chevron_right.svg"}
  />
</button>
