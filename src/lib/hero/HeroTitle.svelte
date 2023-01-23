<script lang="ts">
    import  {fly} from 'svelte/transition'

    export let scrollWords: string[];
    export let cycleIndex: number;
    export let display: boolean; 

</script>

<div 
    style:display={"grid"}
    style:place-items={"center"}
    class="mx-autoplace">
    {#if display}
    <h2
        style:grid-row={"\about1"}
        style:grid-column={"1"}
        class={`
            whitespace-nowrap 
            heading-outline-white 
            text-8xl 
            font-black 
            mx-auto 
            text-rose-700 
            mb-10 
            drop-shadow-xl 
            bg-sky-400/[.4] 
            p-4
            rounded-full
            `}
            transition:fly={{y: 75, duration: 750}}
    >
            {scrollWords[cycleIndex]}
    </h2>
    {/if}
</div>