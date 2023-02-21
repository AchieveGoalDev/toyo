<script lang="ts">
  export let campus: any;
</script>

<select bind:value={campus} class="w-[300px] text-xl my-10 mx-auto">
  <option value="">--キャンパス--</option>
  <option value="白山">白山キャンパス</option>
  <option value="川越">川越キャンパス</option>
  <option value="板倉">板倉キャンパス</option>
  <option value="INIAD">INIADキャンパス</option>
  <option value="WELLB">WELLBキャンパス</option>
  <option value="オンライン">オンラインレッスン</option>
</select>
