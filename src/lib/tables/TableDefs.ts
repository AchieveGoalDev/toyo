export type TableWrapper = {
  title: string;
  footer: string[];
  tables: Table[];
};

export type Table = {
  title: string;
  rows: RowData[];
};

export type RowData = {
  cells: CellData[];
};

export type CellData = {
  isBold: boolean;
  content: string;
};

export const LessonSchedule: TableWrapper = {
  title: "レッスンスケジュール",
  footer: [
    "後期(50回)：2022年10月13日(木) ～12月23日(金)",
    "※祝日により、回数が減る場合があります。",
    "全キャンパスで開催",
  ],
  tables: []
  }

let ScheduleOne: Table = {
    title: "開講プログラム"
    rows: [
        {
        cells:[ 
            {
                isBold: false,
                content: ""
            }
        ]
        },
        
    ],
}

