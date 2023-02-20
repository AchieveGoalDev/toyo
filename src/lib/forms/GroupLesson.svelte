<script lang="ts">
  import TextInput from "$lib/forms/TextInput.svelte";

  let 学籍番号: string;
  let 学籍番号isValid: boolean;
  const validate学籍番号 = (stNumber: string) => {
    let errors: string[] = [];
    if (stNumber) {
      let stringArray = stNumber.split("");
      let hasFull: boolean = false;

      stringArray.forEach((letter) => {
        if (letter.match(/[^\x01-\x7E]/) || letter.match(/[^\uFF65-\uFF9F]/)) {
          hasFull = true;
        }
      });

      if (hasFull) {
        errors.push("半角文字で入力してください");
      }

      if (stringArray[0] && typeof parseInt(stringArray[0]) !== "number") {
        errors.push("学籍番号はアルファベットから始まることはありません");
      }

      if (stringArray.length < 10 && stringArray.length > 0) {
        errors.push("10文字以上にしてください");
      }

      if (stringArray.length === 0) {
        errors.push("必要項目です");
      }
    }
    return errors;
  };

  $: console.log(学籍番号);
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
    bind:inputVal={学籍番号}
    bind:isValid={学籍番号isValid}
    label={"学籍番号"}
    isNecessary={true}
    desc={[
      "アルファベット入力の際は大文字で入力してください。",
      "学籍番号がアルファベットから始まることはありません。",
    ]}
    alt={"学籍番号の入力"}
    placeholder="test"
    validateInput={validate学籍番号}
  />
</div>
