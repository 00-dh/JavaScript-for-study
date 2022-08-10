const clock = document.querySelector("#clock");

function nowTime() {
  const nowDate = new Date();
  const D_dayChristmas = new Date("12 / 25 / 2022");
  const nowDates = nowDate.getDate();
  const nowHours = nowDate.getHours();
  const nowMinutes = nowDate.getMinutes();
  const nowSeconds = nowDate.getSeconds();
  clock.innerText = `${nowDates}d ${nowHours}h ${nowMinutes}m ${nowSeconds}s`;
  const diffTime = D_dayChristmas - nowDate;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  const diffHours = (diffTime / (1000 * 60 * 60)) % 24;
  const diffMinutes = (diffTime / (1000 * 60)) % 60;
  const diffSeconds = (diffTime / 1000) % 60;
  clock.innerText = `${Math.floor(diffDays)}d ${Math.floor(
    diffHours
  )}h ${Math.floor(diffMinutes)}m ${Math.floor(diffSeconds)}s`;
}

nowTime();
setInterval(nowTime, 1000);
