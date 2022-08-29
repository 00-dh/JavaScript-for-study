const milTime = document.querySelector(".military_time");
const enlist = milTime.querySelector(".enlist");
const disCharge = milTime.querySelector(".discharge");
const milD_day = milTime.querySelector(".mil__D-day");

function sayHello(event) {
  event.preventDefault();
  const milD_dayValue =
    (disCharge.valueAsNumber - enlist.valueAsNumber) / (1000 * 60 * 60 * 24);
  milD_day.innerText = milD_dayValue;
}

milTime.addEventListener("submit", sayHello);
