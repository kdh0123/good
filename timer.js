let intervalId = null;
let remaining = 0;

const display = document.getElementById('display');
const input = document.getElementById('seconds');

// 카운트다운 반복 실행 함수
const runTimer = () => {
  intervalId = setInterval(() => {
    remaining -= 1;
    display.textContent = `${remaining}초 남음`;

    if (remaining <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      // 시간 종료 시 완료 페이지로 이동
      location.href = 'timerdone.html';
    }
  }, 1000);
};

// [시작] 버튼
document.getElementById('start').addEventListener('click', () => {
  if (intervalId) return; // 이미 실행 중이면 중복 실행 방지
  
  remaining = parseInt(input.value, 10);
  if (isNaN(remaining) || remaining <= 0) {
    alert('양의 정수를 입력하세요.');
    return;
  }

  display.textContent = `${remaining}초 남음`;
  runTimer();
});

// [일시정지] 버튼
document.getElementById('pause').addEventListener('click', () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    display.textContent = `${remaining}초에서 일시정지됨`;
  }
});

// [재개] 버튼
document.getElementById('resume').addEventListener('click', () => {
  if (!intervalId && remaining > 0) {
    display.textContent = `${remaining}초 남음`;
    runTimer();
  }
});

// [초기화] 버튼
document.getElementById('reset').addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  remaining = 0;
  input.value = '';
  display.textContent = '대기 중';
});