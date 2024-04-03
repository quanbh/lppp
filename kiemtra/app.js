document.addEventListener('DOMContentLoaded', function() {
    const clocks = document.querySelectorAll('.clock');
    const startBtns = document.querySelectorAll('.start-btn');
    const stopBtns = document.querySelectorAll('.stop-btn');
    const stopAllBtn = document.querySelector('.stop-all-btn');
    let timers = [];
  
    function startClock(clock) {
      const timeDisplay = clock.querySelector('.time');
      let seconds = 0;
  
      const timer = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timeDisplay.textContent = `${pad(minutes)}:${pad(remainingSeconds)}`;
      }, 1000);
  
      timers.push(timer);
    }
  
    function stopClock(clock) {
      clearInterval(timers.shift());
      clock.querySelector('.time').textContent = '00:00';
    }
  
    function pad(number) {
      return (number < 10) ? '0' + number : number;
    }
  
    startBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => startClock(clocks[index]));
    });
  
    stopBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => stopClock(clocks[index]));
    });
  
    stopAllBtn.addEventListener('click', () => {
      timers.forEach(timer => clearInterval(timer));
      clocks.forEach(clock => clock.querySelector('.time').textContent = '00:00');
      timers = [];
    });
  });
  