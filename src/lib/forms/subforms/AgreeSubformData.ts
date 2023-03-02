export const 受講に関して: string[] = [
  `サポートデスクからの連絡(大学メールアドレス宛)を必ず確認すること。
  Toyo Achieve English HPまたはメール（info@achieve-english.jp）でお知らせします。`,
  `全日程、可能な限り出席すること。
  やむを得ず欠席する場合には、必ずサポートデスクまで連絡すること。大学で認められる理由によって講座を欠席する場合は公欠届を提出すること。`,
  `振替授業(Make-up Lesson)は欠席した週内の振替授業枠でのみ出席可能です。
  その場合は出席率に反映されますが、講座終了後の補講授業(Extra Make up Lesson)は出席率に反映されません。`,
  `講座開始後のコース変更、時間割変更は原則受け付けません。
  講座開始一週間以内又は、クォーターが変わる際のみ、空席がある場合は時間割変更を承ります。`,
  `講座開始時、終了後にToyoNet-ACE内に設置する「Achievement Sheet」を提出すること。`,
  `講座終了後、ToyoNet-ACE内に設置する「振り返りレポート」を提出すること。`,
  `進捗を計るためにも学部等で行われているTOEICを受験されることを推奨します。`,
  `教材は初日レッスン時に担当講師より手渡しいたします。
  ただし、オンライン受講の場合はご登録いただいた住所宛へ郵送でのお渡しになります。
  ※受講料の着金確認ができ次第のお渡し、発送となります。`,
  `受講生と講師間の連絡先の交換、SNS等でつながる事は禁止としております。`,
  `今後の新型コロナウイルス感染症(COVID-19)の感染拡大状況により、講座に変更が生じる可能性がございます。`,
];

export const 受講Short: string[] = [
  "メール確認",
  "出席",
  "振り替え",
  "時間割変更",
  "講座開始時",
  "講座終了後",
  "TOEIC受験",
  "教材",
  "連絡先交換",
  "COVID-19",
];

export class AgreeInput {
  isNecessary: boolean;
  label: string;
  alt: string;
  choices: string[];
  desc: string[];

  constructor(label: string, short: string) {
    this.isNecessary = true;
    this.label = label;
    this.alt = short + "項目承諾の入力";
    this.choices = [short];
    this.desc = [""];
  }
}
