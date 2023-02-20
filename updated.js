const timeH = document.getElementById('timeDisplay');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const timerInput = document.getElementById('timerInput');
const alarm = document.getElementById('alarm');
const logList = document.getElementById('logList');

let timeSecond;
let timerInterval;
let startTime;

startBtn.addEventListener('click', () => {
  timeSecond = timerInput.value * 60;
  displaytime(timeSecond);
  startTime = Date.now();

  timerInterval = setInterval(() => {
    timeSecond--;
    displaytime(timeSecond);
    if (timeSecond <= 0 || timeSecond < 1) {
      endtime();
    }
  }, 1000);
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  timeSecond = 0;
  displaytime(timeSecond);
});

function displaytime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function endtime() {
  clearInterval(timerInterval);
  timeH.innerHTML = 'Well done!';
  alarm.play();
  const duration = (Date.now() - startTime) / 1000;
  const logItem = document.createElement('li');
  logItem.innerHTML = `Time: ${timeH.innerHTML}, Duration: ${duration} seconds`;
  logList.appendChild(logItem);
}
