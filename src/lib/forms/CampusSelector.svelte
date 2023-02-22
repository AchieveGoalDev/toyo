<script lang="ts">
  import SubHeading from "$lib/headers/SubHeading.svelte";

  export let campus: any;
</script>

<div
  class="flex mb-s2 justify-center items-center w-full place-content-between bg-rose-50"
>
  <SubHeading>キャンパスを選択してください</SubHeading>
  <select bind:value={campus} class="w-[300px] text-xl my-4 mx-auto">
    <option value="">--キャンパス--</option>
    <option value="白山">白山キャンパス</option>
    <option value="川越">川越キャンパス</option>
    <option value="板倉">板倉キャンパス</option>
    <option value="INIAD">INIADキャンパス</option>
    <option value="WELLB">WELLBキャンパス</option>
    <option value="オンライン">オンラインレッスン</option>
  </select>
</div>
