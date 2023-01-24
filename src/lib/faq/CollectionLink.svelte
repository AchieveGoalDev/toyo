<script lang="ts">
  import { slide } from "svelte/transition";

  import type { Collection } from "./FaqDefs";
  import Question from "$lib/faq/Question.svelte";

  export let collection: Collection;

  let expanded = false;

  if (collection.id === "0") {
    expanded = true;
  }

  const closedClass =
    "bg-rose-700 text-white rounded-lg p-2 text-2xl md:text-3xl font-bold flex w-full items-center";
  const expandedClass =
    "bg-rose-600 text-white rounded-lg p-2 text-2xl md:text-3xl font-bold flex w-full items-center";
</script>

<div class="my-5 text-xl flex-col shadow-md">
  <button
    on:click={() => {
      expanded = !expanded;
    }}
    id={"id" + collection.id}
    class={expanded ? expandedClass : closedClass}
  >
    {#if expanded}
      <img src="/Icons/circleMinus.svg" class="h-[30px] mr-3" />
    {:else}
      <img src="/Icons/circlePlus.svg" class="h-[30px] mr-3" />
    {/if}
    {collection.title}
  </button>
  {#if expanded}
    <div
      transition:slide={{ duration: 500 }}
      class="bg-rose-50 py-3 px-2 rounded-md"
    >
      {#each collection.questions as question}
        <Question {question} />
      {/each}
    </div>
  {/if}
</div>
