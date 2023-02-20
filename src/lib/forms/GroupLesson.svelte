<script lang="ts">
  import TextInput from "$lib/forms/TextInput.svelte";

  let 学籍番号: string;
</script>

<div class="flex flex-col">
  <fieldset>
    <legend>2022年度 通年受講生 <span>(必要)</span></legend>
    <label for="はい">はい</label>
    <input type="radio" name="はい" />
    <label for="いいえ">いいえ</label>
    <input type="radio" name="はい" />
  </fieldset>

  <fieldset>
    <legend>第４クォーターでの 時間割変更の有無 <span>(必要)</span></legend>
    <label for="はい">はい</label>
    <input type="radio" name="はい" />
    <label for="いいえ">いいえ</label>
    <input type="radio" name="はい" />
  </fieldset>

  <TextInput
    label={"学籍番号"}
    isNecessary={true}
    desc={"アルファベット入力の際は大文字で入力してください。学籍番号がアルファベットから始まることはありません。"}
    bind:inputVal={学籍番号}
    alt={"学籍番号の入力"}
    placeholder=""
  />
</div>
