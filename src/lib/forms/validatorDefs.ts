export function validate英字名First(name: string) {
    const errors: string[] = [];
    const letterRegex = new RegExp("^[a-zA-Z]+$");
    let isLetters = true;
    if (name) {
        const nameArray = name.split("");
        nameArray.forEach((letter) => {
            if (!letter.match(letterRegex)) {
                isLetters = false;
            }
        });
    }

    if (!isLetters) {
        errors.push("半角ロマジで入力してください");
    }

    if (!name) {
        errors.push("必要項目です");
    }
    return errors;
}