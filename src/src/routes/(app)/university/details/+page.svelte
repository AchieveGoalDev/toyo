<script lang="ts">
  import LeftColumnTitleTable from "$lib/tables/LeftColumnTitleTable.svelte";
  import { groupLesson, mtmLesson } from "$lib/tables/TableDefs";
  import SectionWrapper from "$lib/wrappers/SectionWrapper.svelte";
  import SubHeading from "$lib/headers/SubHeading.svelte";
  import TextWrapper from "$lib/wrappers/TextWrapper.svelte";
</script>

<SectionWrapper
  themeColor="red"
  titleData={{ pretext: "講座の", highlight: "概要", posttext: "" }}
>
  <TextWrapper>
    <SubHeading>申し込み期間</SubHeading>
    <p class="font-bold mt-3">2023年9月22日(金) 正午12:00 〜 10月５日(木)</p>
    <p class="text-red-600">※各クラス定員になり次第受付終了となります。</p>
  </TextWrapper>

  <TextWrapper>
    <SubHeading>受講対象者</SubHeading>
    <p class="mt-3">東洋大学在籍　学部生・大学院生・教職員</p>
  </TextWrapper>
</SectionWrapper>

<SectionWrapper
  themeColor="red"
  titleData={{ pretext: "申込の", highlight: "流れ", posttext: "" }}
>
  <TextWrapper>
    <SubHeading>①説明会参加（任意参加）</SubHeading>
    <p class="mt-3">
      事前予約は不要です。お時間になりましたら各開催場所にてご参加下さい。
      ※参加は必須ではございませんが、講座に関して理解した上でお申込いただきたいため、出来る限りの参加をお願い致します。
    </p>
  </TextWrapper>
  <TextWrapper>
    <SubHeading>②レベルチェックヒアリング（※全員必須）</SubHeading>
    <p class="mt-3">
      グループレッスンは初級、中級、上級の3レベル、マンツーマンレッスンは初級、初中級、中級、上級の4レベルにレベル分けを行っており、ご自身に合ったレベルでご受講頂けるよう、申込前の受験が必須となります。
      講師に推奨されたレベルを参考にご自身で受講レベルを決定してください。
    </p>
  </TextWrapper>
  <TextWrapper>
    <SubHeading>③トライアルレッスン受講（任意参加）</SubHeading>
    <p class="mt-3">
      トライアルレッスンは実際のレッスンの半分の時間とはなりますが、参加いただき、レッスンの雰囲気やレベルの確認をしてみてください。
    </p>
  </TextWrapper>
  <TextWrapper>
    <SubHeading>④申込</SubHeading>
    <p class="mt-3">
      受講コース決定後、HP上部の『ENTRY』を受講キャンパス、コースを選択し申込ください。
      申込を受け付け後、申込内容確認の自動返信メールが届きます。
      自動返信メールが確認できない場合は、メールアドレスに間違いがある可能性がございますので、まずは迷惑メールフォルダを確認していただき、迷惑メールフォルダにもメールが確認できない場合はメールアドレスを確認の上、再度お申込下さい
    </p>
  </TextWrapper>
  <TextWrapper>
    <SubHeading>⑤時間割登録、メール案内</SubHeading>
    <p class="mt-3">
      申込内容確認の自動返信メールとは別に時間割登録完了のメールをお送りさせていただきます。
      申込後、5日程経ってもサポートデスクからのメールを確認できない場合は、まず迷惑メールフォルダを確認下さい。迷惑メールフォルダにもメールが確認できない場合はサポートデスクまで申込・登録状況の確認のご連絡をお願いいたします。
    </p>
  </TextWrapper>
  <TextWrapper>
    <SubHeading>⑥決済案内メール受信、支払い手続き</SubHeading>
    <p class="mt-3">
      時間割登録完了メールを受信後、３～４営業日内に決済案内メールをお送りさせていただきます。
      時間割登録完了メールに記載の決済方法の案内を確認の上、支払い手続きをお願いいたします。
    </p>
  </TextWrapper>
  <TextWrapper>
    <SubHeading>⑦受講開始</SubHeading>
    <p class="mt-3">
      受講料支払の確認が取れましたら、正式に受講登録完了となります。
      講座初日になりましたら各コース・受講方法にてご受講開始となります。
    </p>
  </TextWrapper>
</SectionWrapper>

<SectionWrapper
  themeColor="red"
  titleData={{ pretext: "", highlight: "開講期間・受講料", posttext: "" }}
>
  <LeftColumnTitleTable tableData={groupLesson} />
  <div class="h-[30px]" />
  <LeftColumnTitleTable tableData={mtmLesson} />
</SectionWrapper>

<SectionWrapper
  themeColor="red"
  titleData={{ pretext: "受講料", highlight: "支払い方法", posttext: "" }}
>
  <TextWrapper>
    <SubHeading>申し込み期間</SubHeading>
    <p class="font-bold mt-3">2023年9月22日(金) 正午12:00 〜 10月５日(木)</p>
    <p class="text-red-600">※各クラス定員になり次第受付終了となります。</p>
  </TextWrapper>

  <TextWrapper>
    <SubHeading>受講対象者</SubHeading>
    <p class="mt-3">東洋大学在籍　学部生・大学院生・教職員</p>
  </TextWrapper>
</SectionWrapper>

<SectionWrapper
  themeColor="red"
  titleData={{ pretext: "その他の", highlight: "情報", posttext: "" }}
>
  <TextWrapper>
    <SubHeading>受講料 支払い方法</SubHeading>
    <p class=" mt-3">
      大学指定口座へお支払いいただきます。
      時間割登録完了ールを受信後、3～4営業日内に支払方法の案内をお送りいたしますので支払案内メール受領後、５日以内に時間割登録完了ールに記載の手順に沿ってお支払いください。
      本講座の支払はペイジー決済となります。あらかじめコチラよりペイジー決済可能な金融機関をご確認いただくことをお勧めします。
      支払い手続き画面から続けてネットバンキングにて決済を完了することが可能です。またATMより決済いただくことも可能です。
      原則、一度支払いを完了した費用の返金はお受けすることが出来ません。
      <strong class="block mt-1"
        >※入金確認は東洋大学グローバルサービス株式会社となりますので、
        　入金確認に一週間程お時間をいただく場合がございます。予めご了承ください。</strong
      >
    </p>
  </TextWrapper>

  <TextWrapper>
    <SubHeading>募集人数</SubHeading>
    <p class="mt-3">決まり次第、こちらのHPにてお知らせいたします。</p>
  </TextWrapper>
</SectionWrapper>
