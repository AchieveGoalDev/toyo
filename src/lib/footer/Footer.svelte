<script lang="ts">
  import LogoWrapper from "$lib/media-wrappers/LogoWrapper.svelte";

  export let themeColor: string;

  let bgColor = "black";

  if (themeColor === "blue") {
    bgColor = "bg-blue-900";
  }

  if (themeColor === "red") {
    bgColor = "bg-rose-700";
  }
</script>

<div class={`${bgColor} min-h-[300px]`}>
  <div
    class="flex flex-col md:flex-row px-3 mt-3 w-full place-content-around text-white md:items-center md:py-5"
  >
    <div class="flex flex-col text-center sm:text-left">
      <div class="flex items-center">
        <LogoWrapper height={50} source={"/TAENavLogo.svg"} />
        <h2 class="font-bold text-2xl sm:text-3xl mb-2 ml-3">
          Toyo Achieve English
        </h2>
      </div>
      <p>講座内容・お申込みにかんする</p>
      <button
        class="flex items-center place-content-center w-full bg-green-600 rounded-lg my-2 shadow-md h-[40px]"
      >
        <a href="tel:0353022239">
          <img src="/Icons/call.svg" class="h-[30px]" alt="電話ボタン" />
        </a>
      </button>
      <p>Tel: 03-5302-2239 (平日： 9:00～18:00)</p>
      <button
        class="flex items-center place-content-center w-full bg-sky-700 rounded-lg my-2 shadow-md h-[40px]"
      >
        <a href="mailto:info@achieve-english.jp">
          <img src="Icons/mail.svg" class="h-[30px]" alt="メールボタン" />
        </a>
      </button>
      <p>Mail：info@achieve-english.jp</p>
      <p class="mt-2">株式会社アチーブゴール</p>
      <p>キャンパス内留学サポートデスク</p>
    </div>
    <hr class="md:hidden my-5" />
    <div class="flex flex-row place-content-around">
      <div>
        <h3 class="font-bold text-md">サイトのナビゲーション</h3>
        <div class="ml-3 underline">
          <a href="/" class="block">トップページ</a>
          <a href="/news" class="block">新着情報</a>
          <a href="about" class="block">キャンパス内留学とは?</a>
          <a href="#" class="block">講座情報</a>
          <a href="#" class="block">オンライン申込み</a>
        </div>
      </div>
      <div>
        <h3 class="font-bold text-md">各キャンパスの申込みに</h3>
        <div class="ml-3 underline">
          <a href="#" class="block">白山キャンパス</a>
          <a href="#" class="block">川越キャンパス</a>
          <a href="#" class="block">板倉キャンパス</a>
          <a href="#" class="block">INIADキャンパス</a>
          <a href="#" class="block">WELLBキャンパス</a>
        </div>
      </div>
    </div>
    <hr class="md:hidden my-5" />
    <div class="flex flex-row place-content-around mb-5">
      <div class="flex flex-col place-content-around">
        <div class="ml-3 font-bold underline sm:mr-2">
          <h3 class="font-bold text-lg mb-2">公式SNS</h3>
          <a href="#" class="flex items-center"
            ><img src="icons8-facebook.svg" class="h-[30px]" />Facebook</a
          >
          <a href="#" class="flex items-center">
            <img src="icons8-twitter.svg" class="h-[30px] my-2" />
            Twitter
          </a>
          <a href="#" class="flex">
            <img src="icons8-youtube.svg" class="h-[30px]" />
            Youtube
          </a>
        </div>
      </div>
      <div class="flex flex-col my-auto">
        <img src="/images/tugs-banner.jpg" />
        <img src="images/toyo-banner.jpg" class="my-2" />
        <img src="images/tguj-banner.jpg" />
      </div>
    </div>
  </div>
</div>
