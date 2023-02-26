<script lang="ts">
    import SelectInput from "$lib/forms/input/SelectInput.svelte";

    let percentValid = 0;

    function validate1() {}

    function validate2() {}

    function validate2() {}

    let testSelector1Value: string = "";
    let testSelector2Value: string = "";
    let testSelector3Value: string = "";

    const testSelector1 = {
        placeholder: "--Test1--",
        options: ["Option1", "Option2", "Option3"],
    };

    const testSelector2 = {
        placeholder: "--Test2--",
        options: ["Option1", "Option2", "Option3"],
    };

    const testSelector3 = {
        placeholder: "--Test3--",
        options: ["Option1", "Option2", "Option3"],
    };

    let forced = "";
    let forcedMessage = "";
</script>

<div class="my-10 bg-white shadow-md px-5">
    <SelectInput
        bind:value={testSelector1Value}
        data={testSelector1}
        {forced}
        {forcedMessage}
    />
    <SelectInput
        bind:value={testSelector1Value}
        data={testSelector2}
        {forced}
        {forcedMessage}
    />
    <SelectInput
        bind:value={testSelector1Value}
        data={testSelector3}
        {forced}
        {forcedMessage}
    />
</div>
