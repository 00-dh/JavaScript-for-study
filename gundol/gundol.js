const calPeriod = document.querySelector(".calculate");
const enlist = document.querySelector(".enlist");
const discharge = document.querySelector(".discharge");
const htmlD_day = document.querySelector(".D-day");
const home = document.querySelector(".home_image");
const htmlpercentage = document.querySelector(".percentage");

function gundol(event) {
  event.preventDefault();
  const D_day = (discharge.valueAsNumber - Date.now()) / (1000 * 60 * 60 * 24);
  if (Math.ceil(D_day) <= 0) {
    htmlD_day.innerText = `🎉 전역을 축하합니다`;
    home.classList.add("hidden");
  } else {
    htmlD_day.innerText = `D-${Math.ceil(D_day)}`;
    home.classList.remove("hidden");
  }
  setInterval(percent, 100);
}

function percent() {
  const per =
    (Date.now() - enlist.valueAsNumber) /
    (discharge.valueAsNumber - enlist.valueAsNumber);

  if (per >= 100) {
    htmlpercentage.innerText = `${(per * 100).toFixed(7)}%`;
  } else {
    htmlpercentage.innerText = `${(per * 100).toFixed(7)}%`;
  }
}

calPeriod.addEventListener("submit", gundol);
