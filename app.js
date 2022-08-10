const clock = document.querySelector("#clock");

function nowTime() {
  const nowDate = new Date();
  const D_dayChristmas = new Date("12 / 25 / 2022");
  const diffTime = D_dayChristmas - nowDate;
  const diffDays = String(
    Math.floor(diffTime / (1000 * 60 * 60 * 24))
  ).padStart(2, "0");
  const diffHours = String(
    Math.floor((diffTime / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0");
  const diffMinutes = String(
    Math.floor((diffTime / (1000 * 60)) % 60)
  ).padStart(2, "0");
  const diffSeconds = String(Math.floor((diffTime / 1000) % 60)).padStart(
    2,
    "0"
  );
  clock.innerText = `${diffDays}d ${diffHours}h ${diffMinutes}m ${diffSeconds}s`;
}

nowTime();
setInterval(nowTime, 1000);
