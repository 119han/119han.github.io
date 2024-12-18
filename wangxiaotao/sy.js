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
});