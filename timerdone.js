// 페이지 로드 후 실행되는 비동기 로직
document.addEventListener('DOMContentLoaded', async () => {
  console.log("타이머 완료 페이지에 접속했습니다.");

  // Promise를 활용한 지연 함수
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // 비동기적으로 콘솔에 단계별 메시지 출력
  await wait(500);
  console.log("결과 데이터를 확인 중입니다...");
  
  await wait(1000);
  console.log("모든 프로세스가 안전하게 종료되었습니다.");
});