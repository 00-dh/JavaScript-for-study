const clock = document.querySelector(".clock");

function nowTime() {
  const date = new Date();
  const Hours = String(date.getHours()).padStart(2, "0");
  const Minutes = String(date.getMinutes()).padStart(2, "0");
  const Seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `현재시간: ${Hours}시 ${Minutes}분 ${Seconds}초`;
}

nowTime();
setInterval(nowTime, 1000);
