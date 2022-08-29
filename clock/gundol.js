const milTime = document.querySelector(".military_time");
const enlist = milTime.querySelector(".enlist");
const disCharge = milTime.querySelector(".discharge");
const milD_day = milTime.querySelector(".mil__D-day");

function sayHello(event) {
  event.preventDefault();
  setInterval(count, 100);
}

function count() {
  const total_mil =
    (disCharge.valueAsNumber - enlist.valueAsNumber) / (1000 * 60 * 60 * 24);
  const now_mil = (Date.now() - enlist.valueAsNumber) / (1000 * 60 * 60 * 24);
  milD_day.innerText = `${(1 - now_mil / total_mil) * 100}%`;
}

milTime.addEventListener("submit", sayHello);
