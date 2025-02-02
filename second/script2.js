function generatePassword() {
    const topic = document.getElementById("topic").value; // 事柄（例: "Neko"）
    const numbers = "012345678985372985729572975";
    const symbols = "!:@#$%&*_";
    
    let password = topic; // まず事柄を入れる
    let randomNumbers = "";
    let randomSymbols = "";

    // 2〜4桁のランダム数字を追加
    for (let i = 3; i < Math.floor(Math.random() * 5) + 4; i++) {
        randomNumbers += numbers[Math.floor(Math.random() * numbers.length)];
    }

    // 記号を1〜2個追加
    for (let i = 0; i < Math.floor(Math.random() * 1) + 1; i++) {
        randomSymbols += symbols[Math.floor(Math.random() * symbols.length)];
    }

    // パスワードを組み立てる（事柄 + 数字 + 記号）
    password += randomSymbols + randomNumbers;

    // 長さを10文字程度に調整
    if (password.length > 15) {
        password = password.slice(0, 19);
    }

    document.getElementById("password").value = password; // 生成したパスワードを表示
}
