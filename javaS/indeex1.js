function bili() {
    window.location.replace("https://space.bilibili.com/1458294782?spm_id_from=333.1007.0.0")
}

document.addEventListener('DOMContentLoaded', function () {// 之后删除钢管时删除
    var audioPlayer = document.getElementById('audioPlayer');

    document.getElementById('word1').addEventListener('click', function () {
        audioPlayer.src = 'mp4/mp3/click.ogg'; // 替换为你的音频文件路径
        audioPlayer.play();
    });
});
