<script lang="ts">
  import type { TestimonialProfile } from "$lib/testimonials/TestimonialData";
  export let data: TestimonialProfile;

  $: console.log(data);
</script>

<div>
  <div
    class="flex flex-row place-content-center bg-orange-50 border-2 border-rose-800"
  >
    <img src={data.img} alt={data.imgAlt} class="h-[150px] m-4" />
    <div class=" flex flex-col place-content-around  text-xl">
      <div>
        <span class="font-bold">氏名：</span><span>{data.name}</span>さん
      </div>
      <div>
        <span class="font-bold">学部：</span><span>経営学部２年</span>
      </div>
      <div>
        <span class="font-bold">受講コース：</span><span>{data.course}</span>
      </div>
      <div>
        <span class="font-bold">学習成果：</span><span
          >TOEICスコア495点=>850点</span
        >
      </div>
    </div>
  </div>
  <div class="text-xl p-5">
    <p class="mb-1">
      この講座を受講しようと思ったのは、英語でのコミュニケーション能力を向上させ、英語を話す機会が欲しかったからです。
    </p>
    <p class="mb-1">
      TOEICテストやTOEFLテストの点数が高くても、実際に使ってみると、言いたいことを思うように話せない人が多いのではないでしょうか？生活の中で、リスニングとスピーキングはリーディングとライティングよりも実用的だと思い、その能力を向上させたいと思いました。語学は他の教科とは違うと思います。
    </p>
    <p class="mb-1">
      高校でも、大学でも、勉強している科目が将来の仕事と必ずしも繋がれるとは限りませんが、語学を学ぶことは、将来どのような仕事に就いても必ず役に立つと思います。
    </p>
    <p class="mb-1">
      この講座は、楽しくリラックスした雰囲気の中で英語を学ぶことができ、<span
        class="font-bold">学習意欲が大幅に向上できると思います。</span
      >
    </p>
    <p class="mb-1">
      また、英語は私たちにとって外国語であるため、誰もが語彙や文法のミスがあります。このため、プレッシャーをほとんど感じずに、自分の言いたいことを言うことができるところがいいところです。
    </p>
    <p class="mb-1">
      この講座を受けて、スピーキングが一番大事ということをさらに確信しました。
    </p>
    <p>
      自分の将来は必ず自分で作らなければならないです。そのため、英語を学ぶことで将来の可能性を増やしましょう！！
    </p>
  </div>
</div>
