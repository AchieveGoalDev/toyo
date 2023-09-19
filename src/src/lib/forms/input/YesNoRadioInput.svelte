<script lang="ts">
  export let data: { value1: boolean; value2: boolean };

  function handleToggleOne() {
    data.value1 = true;
    data.value2 = false;
  }

  function handleToggleTwo() {
    data.value1 = false;
    data.value2 = true;
  }

  let selected = "bg-blue-700 text-white font-bold";
  let unselected =
    "transition:all border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-bold";
</script>

<div class="flex flex-col">
  <button
    on:click={handleToggleOne}
    class={data.value1 ? selected : unselected}
  >
    はい
  </button>

  <button
    on:click={handleToggleTwo}
    class={data.value2 ? selected : unselected}
  >
    いいえ
  </button>
</div>
