document.addEventListener('DOMContentLoaded', function() {
  var audioPlayer = document.getElementById('audioPlayer');

  document.getElementById('word1').addEventListener('click', function() {
      audioPlayer.src = 'wxt/kuyashi.mp3'; // 替换为你的音频文件路径
      audioPlayer.play();
  });

  document.getElementById('word2').addEventListener('click', function() {
      audioPlayer.src = 'wxt/omg.mp3'; // 替换为你的音频文件路径
      audioPlayer.play();
  });

  document.getElementById('word3').addEventListener('click', function() {
      audioPlayer.src = 'wxt/ngg.mp3'; // 替换为你的音频文件路径
      audioPlayer.play();
  });

  document.getElementById('word4').addEventListener('click', function() {
    audioPlayer.src = 'wxt/game.mp3'; // 替换为你的音频文件路径
    audioPlayer.play();
  });

  document.getElementById('word5').addEventListener('click', function() {
    audioPlayer.src = 'wxt/KU.mp3'; // 替换为你的音频文件路径
    audioPlayer.play();
});

document.getElementById('word6').addEventListener('click', function() {
  audioPlayer.src = 'wxt/wbhl.mp3'; // 替换为你的音频文件路径
  audioPlayer.play();
});

document.getElementById('word7').addEventListener('click', function() {
    audioPlayer.src = 'wxt/zbcf.mp3'; // 替换为你的音频文件路径
    audioPlayer.play();
  });
});