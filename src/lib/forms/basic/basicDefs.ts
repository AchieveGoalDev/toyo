import { SingleTextInput } from "../typeDefs"
import { validate英字名First } from "../validatorDefs"

//SingleText


export const personal = {
    meta: {
        percentComplete: 0,
        allValid: false,
    },
    data: {
        英字名First: new SingleTextInput("英字名 First name （名前）", validate英字名First, ["頭文字のみ大文字で入力してください。"], "英字名で名前の入力", "Taro", 30),
    },

    //TODO refactor me to work for any given object
    calculateValid: function () {
        const dataKeys: string[] = Object.keys(this.data)
        let validCount = 0;

        dataKeys.forEach(key => {
            //TODO fix me
            //@ts-expect-error: Define all keys at some point
            if (this.data[key].isValid === true) {
                validCount++
            }
        })

        if (validCount / dataKeys.length === 1) {
            this.meta.allValid = true
        }

        this.meta.percentComplete = validCount / dataKeys.length;
    }
}

const test = {

}

const comment = {

}



// 学籍番号 = writable("");
// 氏名 = writable("");
// フリガナ = writable("");
// 英字名First = writable("");
// 英字名Last = writable("");
// 学年 = writable("");
// 学部 = writable("");
// 学科 = writable("");
// 英検 = writable("");
// TOEFL = writable("");
// IELTS = writable("");
// きっかけ = writable("");
// 大学メール = writable("");
// 個人メール = writable("");
// 電話番号 = writable("");
// その他 = writable("");
// 備考 = writable("");
// 住所 = writable("");
// 性別 = writable("");
// 種別 = writable("");
// 試験 = writable(false);
// TOEIC = writable("");