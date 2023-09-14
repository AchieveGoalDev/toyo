<script lang="ts">
    import { subformHeight } from "$lib/store/applicationForm";
    import { slide, fly } from "svelte/transition";
</script>

<!-- bind:clientHeight={$subformHeight} -->
<form
    in:slide
    out:fly={{ x: -200, opacity: 0 }}
    class="my-20 bg-white shadow-md px-5 col-span-full row-span-full top-0 inset-x-0"
>
    <slot />
</form>
