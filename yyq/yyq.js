const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const volumeSlider = document.getElementById('volumeSlider');

// 播放
playBtn.addEventListener('click', () => {
    audioPlayer.play();
});
 
// 暂停
pauseBtn.addEventListener('click', () => {
    audioPlayer.pause();
});
 
// 停止（需重置播放进度）
stopBtn.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    progressBar.value = 0;
    updateCurrentTime();
});

// 更新进度条
audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
    updateCurrentTime();
});
 
// 拖动进度条跳转
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
});
 
// 格式化时间显示（如0:30 → 00:30）
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
 
function updateCurrentTime() {
    currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
    if (!isNaN(audioPlayer.duration)) {
        durationDisplay.textContent = formatTime(audioPlayer.duration);
    }
}

volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value;
});