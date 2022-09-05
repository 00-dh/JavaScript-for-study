const calPeriod = document.querySelector(".calculate");
const enlist = document.querySelector(".enlist");
const discharge = document.querySelector(".discharge");
const htmlD_day = document.querySelector(".D-day");
const home = document.querySelector(".home_image");
const htmlpercentage = document.querySelector(".percentage");
const percentageValue = document.querySelector(".percent__percentage__value");
const dischargeDay = document.querySelector(".discahrge_day");
const periodTotal = document.querySelector(".period_mil_info_total");
const periodNow = document.querySelector(".period_mil_info_now");
const periodRemain = document.querySelector(".period_mil_info_remain");

const date = new Date();

function gundol(event) {
  event.preventDefault();
  dischargeDay.innerText = discharge.value;
  const D_day = (discharge.valueAsNumber - Date.now()) / (1000 * 60 * 60 * 24);
  if (Math.ceil(D_day) <= 0) {
    htmlD_day.innerText = `🎉 전역을 축하합니다`;
    home.classList.add("hidden");
  } else {
    htmlD_day.innerText = `D-${Math.ceil(D_day)}`;
    home.classList.remove("hidden");
  }
  periodTotal.innerText =
    (discharge.valueAsNumber - enlist.valueAsNumber) / (1000 * 60 * 60 * 24) +
    1;
  periodNow.innerText = Math.ceil(
    (Date.now() - enlist.valueAsNumber) / (1000 * 60 * 60 * 24)
  );
  periodRemain.innerText = Math.ceil(
    (discharge.valueAsNumber - Date.now()) / (1000 * 60 * 60 * 24)
  );
  setInterval(percent, 100);
}

function percent() {
  const per =
    (Date.now() - enlist.valueAsNumber) /
    (discharge.valueAsNumber - enlist.valueAsNumber);

  if (per * 100 >= 100) {
    htmlpercentage.innerText = `100%`;
    htmlpercentage.style.left = "100%";
    document.querySelector(".percent__percentage__value").style.width = "100%";
  } else {
    htmlpercentage.innerText = `${(per * 100).toFixed(7)}%`;
    htmlpercentage.style.left = (per * 100).toFixed(7) + "%";
    document.querySelector(".percent__percentage__value").style.width =
      (per * 100).toFixed(7) + "%";
  }
}

calPeriod.addEventListener("submit", gundol);
