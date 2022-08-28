const D_day = document.querySelector(".d-day_1");
const D_day2 = document.querySelector(".d-day_2");
const form = document.querySelector(".d-day__calculate");
const result_d_day = document.querySelector(".final_d-day");

function calculator(event) {
  event.preventDefault();
  const firstD_day = D_day.valueAsNumber;
  const secondD_day = D_day2.valueAsNumber;
  const finalD_day = (secondD_day - firstD_day) / (1000 * 60 * 60 * 24);
  let string = "";
  if (finalD_day > 0) {
    string = " 남았습니다.";
  } else if (finalD_day < 0) {
    string = " 지났습니다.";
  }
  result_d_day.innerText = `${Math.abs(finalD_day)}일 ${string}`;
}

form.addEventListener("submit", calculator);
