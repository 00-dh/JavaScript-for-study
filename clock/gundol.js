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
  let percentMil = (now_mil / total_mil) * 100;
  if (percentMil >= 100) {
    percentMil = 100;
  }
  milD_day.innerText = `${percentMil}%`;
}

milTime.addEventListener("submit", sayHello);
