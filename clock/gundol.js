const milTime = document.querySelector(".military_time");
const enlist = milTime.querySelector(".enlist");
const disCharge = milTime.querySelector(".discharge");
const milPercent = milTime.querySelector(".mil__percent");
const milD_day = milTime.querySelector(".mil__D-day");

function sayHello(event) {
  event.preventDefault();
  let milDday = (disCharge.valueAsNumber - Date.now()) / (1000 * 60 * 60 * 24);
  if (Math.ceil(milDday) <= 0) {
    milD_day.innerText = "전역을 축하합니다.";
  } else {
    milDday = Math.ceil(milDday);
    milD_day.innerText = `${milDday}`;
  }
  if (enlist.valueAsNumber > disCharge.valueAsNumber) {
    return console.log("error");
  }
  setInterval(count, 100);
}

function count() {
  const total_mil =
    (disCharge.valueAsNumber - enlist.valueAsNumber) / (1000 * 60 * 60 * 24);
  const now_mil = (Date.now() - enlist.valueAsNumber) / (1000 * 60 * 60 * 24);
  let percentMil = (now_mil / total_mil) * 100;
  if (percentMil >= 100) {
    percentMil = 100;
  } else if (percentMil <= 0) {
    percentMil = 0;
  }
  milPercent.innerText = `${percentMil.toFixed(5)}%`;
}

milTime.addEventListener("submit", sayHello);
