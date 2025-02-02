function startMadness() {
    document.querySelector('.start-button').remove();

    // 音を再生
    let audio1 = new Audio("https://files.catbox.moe/0o7f8h.mp3");
    let audio2 = new Audio("https://files.catbox.moe/o8l0hb.mp3");
    let audio3 = new Audio("https://files.catbox.moe/plawt9.mp3");
    let audio4 = new Audio("https://files.catbox.moe/btzu7v.mp3");
    let audio5 = new Audio("https://files.catbox.moe/7babct.mp3");
    audio1.loop = true; // ループ設定
    audio2.loop = true; // ループ設定
    audio3.loop = true; // ループ設定
    audio4.loop = true; // ループ設定
    audio5.loop = true; // ループ設定
    audio1.play();
    audio2.play();
    audio3.play();
    audio4.play();
    audio5.play();

    // 画像を大量に生成
    for (let i = 0; i < 50; i++) {
        let img = document.createElement("img");
        img.src = "https://i.postimg.cc/WbFVzn6S/Untitled.jpg"; // ネコ画像
        img.classList.add("image");
        document.body.appendChild(img);

        // ランダムな位置に配置
        img.style.left = Math.random() * window.innerWidth + "px";
        img.style.top = Math.random() * window.innerHeight + "px";

        // 画像を動かす
        setInterval(() => {
            img.style.left = Math.random() * window.innerWidth + "px";
            img.style.top = Math.random() * window.innerHeight + "px";
        }, 500);
    }
}
