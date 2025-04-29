function bili() {
    window.location.replace("https://space.bilibili.com/1458294782?spm_id_from=333.1007.0.0")
}

function phira() {
    window.location.replace("/phirapifu.html")
}

function als() {
    window.location.replace("/alsbot/lt.html")
}

function wxt() {
    window.location.replace("/wangxiaotao/wxt.html")
}

function A439() {
    window.location.replace("https://a439-owo.github.io")
}

function yyq() {
    window.location.replace("/yyq.html")
}

document.addEventListener('DOMContentLoaded', function () {// 之后删除钢管时删除
    var audioPlayer = document.getElementById('audioPlayer');

    document.getElementById('word1').addEventListener('click', function () {
        audioPlayer.src = 'click.ogg'; // 替换为你的音频文件路径
        audioPlayer.play();
    });
});
