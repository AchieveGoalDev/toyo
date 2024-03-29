export type Collection = { title: string; id: string; questions: Question[] };
export type Question = { q: string; a: string };

export const collections: Collection[] = [
  {
    title: "キャンパス内留学について",
    id: "",
    questions: [
      {
        q: "英会話初心者ですが受講できますか？",
        a: "毎年多くの初心者の方にご受講頂いております。また、申込前にプレイスメントテストを必ず受けて頂きご自身にあったコースを確認し申込いただけます。担当する講師はフィリピン人で英語を3年以上教えた経験のある、選抜された講師です。親しみやすい講師になりますので初心者の方でも楽しく英会話を学ぶことが出来ます。",
      },
      {
        q: "どのような授業内容ですか？",
        a: "スピーキングとリスニング能力を伸ばす会話型のレッスンを行います。レッスン中は常に英語を話すトレーニングをして頂きます。その中で、文法や発音、単語も学んで行きます。",
      },
      {
        q: "どのような受講方法ですか？",
        a: "基本的には各キャンパスの教室にて対面レッスンを行なっております。対面レッスンの参加が難しい場合やご自身の通われているキャンパスにて受講を希望するコース・レベルが開講していない場合は全キャンパス共通オンライン受講限定のコースにて受講いただけます。実際の使用教室は時間割確定の際に担当講師と共にご案内致します。",
      },
      {
        q: "英語資格試験対策はしていますか？",
        a: "英語でのコミュニケーション能力に重点を置いており、英語資格試験に直接役立つような英語を学んでいただくことは難しいですが、毎回のレッスン時にTOEIC Vocablaryを学び語彙力を補います。ただし、英語試験対策コースではございませんので予めご了承ください。",
      },
      {
        q: "東洋大学内で開講されている英語講座ですが、課外授業となりますので単位認定はされませんの",
        a: `で予めご了承ください。ですが、本講座は東洋グローバルリーダープログラムの認定要件の1つであるTGポイント対象のプログラムです。ポイント付与条件は出席率が８割以上かつ、講座終了時のアンケートに回答した学生です。`,
      },
      {
        q: "学部は関係ありますか？",
        a: "東洋大学に在籍されている全ての方を対象にキャンパス内留学「Toyo Achieve English」を提供しております。違う学部・学年の受講生とレッスンを受講いただきますので英会話を学習する新しい仲間と巡り合うことが出来ます。",
      },
      {
        q: "課題はありますか？",
        a: "課題が出る際は講師より授業時間内に指示をさせていただきます。",
      },
    ],
  },
  {
    title: "グループレッスンについて",
    id: "",
    questions: [
      {
        q: "所属キャンパス以外のキャンパスでの講座の受講は可能ですか？",
        a: "ご受講いただくキャンパスはINIADキャンパスを除き、自由に選んでお申込みいただけます。キャンパスによって開講するコース(レベル)が異なりますのでHPの講座概要にてご確認下さい。※INIADキャンパスは所属学生のみ入構が可能となりま",
      },
      {
        q: "どういった授業内容になりますか？",
        a: "1クラス最大4名までのレッスンとなります。各コース(レベル)別に時間割登録を行いますので、ご自身と同じような英語レベルの方と一緒に学んでいただきます。また、使用テキストは各レベルに沿った物を選定しております。",
      },
      {
        q: "予習・復習はしたほうがいいですか？",
        a: "予習と復習を両方していただくことをお薦めしておりますが、お忙しくて時間がとれない場合は、予習より復習することを心掛けて下さい。その日習った内容を繰り返し、復習することで知識の定着につながります。また、ToyoNet-ACEへ掲載させていただくWeekly Planの「SELF STUDY TIPS」を参考にして授業の予習、復習をされるとレッスン中も効率よく英会話学習をすることが出来ます。",
      },
    ],
  },
  {
    title: "マンツーマンレッスンについて",
    id: "",
    questions: [
      {
        q: "所属キャンパス以外のキャンパスでの講座の受講は可能ですか？",
        a: "ご受講いただくキャンパスはINIADキャンパスを除き、自由に選んでお申込みいただけます。土曜日は最大で週２コマ、平日は最大で週５コマのレッスンをお申込みいただけます。※1コマ目は白山キャンパス、2コマ目は川越キャンパスの様にキャンパスをまたいでの登録は出来かねます。",
      },
      {
        q: "どういった授業内容になりますか？",
        a: "グループレッスンとは違い、レベルは問いませんが申込時にご自身の英語レベルを選択いただきます。選択いただいた英語レベルのオリジナルテキストを元にレッスンを行なって参ります。講師と1対1のレッスンになりますので自分の苦手な部分や伸ばしたい部分にフォーカスしたレッスンをリクエストすることも出来ます。",
      },
      {
        q: "予習・復習はしたほうがいいですか？",
        a: "予習と復習を両方していただくことをお薦めしておりますが、お忙しくて時間がとれない場合は、予習より復習することを心掛けて下さい。その日習った内容を繰り返し、復習することで知識の定着につながります。",
      },
    ],
  },
  {
    title: "欠席・振替・祝日について",
    id: "",
    questions: [
      {
        q: "欠席する時はどこに連絡すればいいですか？",
        a: "正規授業や学校行事、実習、就職活動などで欠席される場合は、サポートデスクへ欠席する日程、理由を伝えてください。事前に欠席することがわかっている場合は、レッスンの際に講師へ直接伝えていただいても構いません。",
      },
      {
        q: "正規授業等で欠席した場合は公欠になりますか？",
        a: "大学で認められる理由によって講座を欠席する場合は欠席扱いとせず、公欠扱いでカウントいたします。必ず講座受講期間内に公欠届をToyoNet-ACEより提出頂き、東洋大学と協議の上、受理した場合のみ公欠扱いとさせて頂きます。Toyo Net-ACE内に申請方法を記載いたしますので確認してくだ際。【公欠が認められる理由】大学の正規授業（教育実習含む）に伴う活動、行事に参加するため。",
      },
      {
        q: "欠席したレッスンの振替は出来ますか？",
        a: "各講師、毎日1コマ以上の振替授業時間を設けております。事前予約は不要となり、レッスンを欠席された週内のみ参加が可能となります。詳細はToyo Net-ACEへ掲載致しますのでご確認いただき、ご参加ください。ただし、振替授業に参加される受講生数が4名以上のグループレッスンとなる場合がございますので予めご了承ください。また原則、振替授業の内容は振替授業に参加される当日のレッスン内容となります。後日、振替授業時間に参加される場合はご希望のレッスン内容ではない可能性がございますのでご注意ください。なお、振替レッスンへの参加は欠席された週内のみ可能です。",
      },
      {
        q: "祝日や休みは授業がありますか？",
        a: "大学のキャンパスカレンダーに合わせてレッスンを提供いたしますので、キャンパスで授業提供がされない日程はToyo Achieve Englishも休講となります。",
      },
    ],
  },
  {
    title: "受講コースについて",
    id: "",
    questions: [
      {
        q: "受講コースはどう決めればいいですか？",
        a: "本講座を初めて受講される方は、レベルチェックテストを受けていただき受講されるコースを決定してください。2022年前期に講座をご受講いただいた方は、前回の受講コースや『INDIVIDUAL EVALUATION』にて担当講師よりの受講を勧められたをレベルもとにコースを決定してください。レベルチェックテストを受けていただき受講されるコースを決定していただいても構いません。",
      },
      {
        q: "半期プログラムのグループレッスン上級コースは前期・後期併せて受講可能ですか？",
        a: "前期、後期と連続して受講いただくことは可能です。ですが半期プログラムの為、後期募集期間に再度お申込みをいただく必要がございます。",
      },
      {
        q: "前期・後期でレベルの変更はできますか？",
        a: "基本的にグループレッスンの通年プログラムである初級・初中級・中級は通年(前期・後期)で同じレベルでご受講いただきますので、レベル変更はお受けできません。予めご了承ください。ですが、前期講座終了後の8月頃に配布される『INDIVIDUAL EVALUATION』にて担当講師より別のレベルの受講を勧められた場合はレベル変更を承ることが可能となります。また、講座開始後のコース変更はお受け出来かねますので、ご了承ください。",
      },
    ],
  },
  {
    title: "講師について",
    id: "",
    questions: [
      {
        q: "講師はどこの国の人ですか？",
        a: "英会話講師として最低3年以上の経験を積んでいる厳選されたフィリピン人講師が担当します。フィリピンは英語を公用語とし、小学校～大学まで国語以外の授業を英語で行っております。",
      },
      {
        q: "講師は毎回変わるのですか？",
        a: "講座期間中は同じ講師が担当致します。ただし、前期と後期で担当講師が変更する場合がございます。また、白山キャンパスは登録時間割によって担当講師が最大2名となる場合がございます。",
      },
      {
        q: "講師は日本語が話せますか？",
        a: "挨拶程度の日本語を話せる講師もいますが、レッスンは母国語が禁止な「English Only Policy」となります。英語のみでコミュニケーションする場に身をおくことが、英会話を上達させるためにはとても重要です。キャンパス内で留学をしている気持ちでご参加ください。",
      },
    ],
  },
  {
    title: "時間割登録について",
    id: "",
    questions: [
      {
        q: "時間割はどのように決まるのでしょうか？",
        a: "レッスンを受けたい時間帯を第1希望から第3希望まで選択し申込みいただきます。皆さまの希望を考慮して、曜日ごとに一人ひとりにあった時間割を作成します。ただし、先着順での登録となりますので申込みが集中した場合はご希望に添えない場合がございますのでご了承ください。",
      },
      {
        q: "途中で時間割変更は出来ますか？",
        a: "一部の学部学科でのクォーター制の導入に伴い、クォーター毎に時間割の変更が可能となります。ただし、それ以外の期間での時間割変更は原則出来ませんので、予めご了承ください。",
      },
      {
        q: "前期と後期で大学の時間割が変わってしまった。変更はできますか？",
        a: "9月中旬に後期時間割登録期間がございますのでその期間に後期の時間割登録をしていただきます。前期に登録された時間割はリセットされますので必ず改めて時間割登録手続きをお願い致します。",
      },
      {
        q: "週3回、4回しか授業に出席が出来ません。それでも受講はできますか？",
        a: "受講することは可能ですが、毎日ご受講頂いている受講生の進捗に合わせて頂きます。また、授業内でフォローアップが出来ませんので出席できない日数分に関しましては、各講師が毎日1コマ以上の振替授業時間を設けております振替授業を利用し必ず週内にご受講ください。またToyoNet-ACEに掲載されるWeekly Planをご覧いただき予習復習をしていただければと存じます。",
      },
    ],
  },
  {
    title: "受講料・支払いについて",
    id: "",
    questions: [
      {
        q: "リピーター割引って何ですか？",
        a: `過去に本講座をご受講いただいた場合は、受講料が20％割引となります。
※申込時に受講歴を必ず選択いただく必要がございます。
※夏期・春期特別講座は対象外となります。`,
      },
      {
        q: "支払い先はどこですか？",
        a: `大学指定口座へお支払いいただきます。
時間割登録完了ールを受信後、３～４日以内に支払方法の案内をお送りいたします。
決済案内メール受領後、５日以内に時間割登録完了ールに記載の手順に沿ってお支払いください。
本講座の支払はペイジー決済となります。あらかじめコチラよりペイジー決済可能な金融機関をご確認いただくことをお勧めします。
支払い手続き画面から続けてネットバンキングにて決済を完了することが可能です。またATMより決済いただくことも可能です。`,
      },
      {
        q: "受講料の分割支払いはできますか？途中でやめることはできますか？",
        a: `受講料は一括でお支払いいただきます。いかなる理由があってもお申込み後の返金は承る事は出来かねます。ただし通年プログラム(グループレッスン：初級、初中級、中級)を受講いただいている場合は、下記事由において後期講座の退講を希望する場合は、大学が認めた場合に限り後期講座受講料を返還いたしますので、まずはサポートデスクへご相談ください。
ア. 後期講座の開講日以前より、半年以上の留学をする場合
イ. 前期終了後、卒業をする場合
ウ. 後期より休学をする場合
エ. 後期より退学をする場合
オ. 本人が死亡した場合
2022年度講座受講料の返還に関する確認事項`,
      },
      {
        q: "教材費はいつ支払いですか？教材はいつ受け取れますか？",
        a: `教材費は受講料と一緒にお支払いいただきます。
教材は講座初日に担当講師より配布させていただきます。オンライン受講の場合はご登録いただいた住所へ郵送させていただきます。`,
      },
    ],
  },
];

for (let i = 0; i < collections.length; i++) {
  collections[i].id = i.toString();
}
