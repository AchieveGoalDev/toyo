<script>
    import { basicData } from "$lib/store/basicPersonalSubform";
    import TextInput from "../input/TextInput.svelte";
</script>

<div>
    <TextInput bind:data={$basicData.personal.data.英字名First} />
</div>
