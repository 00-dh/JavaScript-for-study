const milTime = document.querySelector(".military_time");
const enlist = milTime.querySelector(".enlist");
const disCharge = milTime.querySelector(".discharge");
const milD_day = milTime.querySelector(".mil__D-day");

function sayHello(event) {
  event.preventDefault();
  console.log(enlist.valueAsNumber / 1000);
  console.log(disCharge.valueAsDate);
  const date = new Date();
  const today = date.getDate();
  console.log(today.valueAsNumber);
}

milTime.addEventListener("submit", sayHello);
