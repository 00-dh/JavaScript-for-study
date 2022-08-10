const clock = document.querySelector("#clock");

function nowTime() {
  const nowDate = new Date();
  const D_dayChristmas = new Date("12 / 25 / 2022");
  const diffTime = D_dayChristmas - nowDate;
  const D_dayCal = {
    D_Date: function () {
      let D_Dates = String(
        Math.floor(diffTime / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");

      if (D_Dates <= 0) {
        D_Dates = "00";
      }
      return D_Dates;
    },

    D_Hours: function () {
      let D_Hours = String(
        Math.floor((diffTime / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0");

      if (D_Hours <= 0) {
        D_Hours = "00";
      }
      return D_Hours;
    },

    D_Minutes: function () {
      let D_Minutes = String(
        Math.floor((diffTime / (1000 * 60)) % 60)
      ).padStart(2, "0");

      if (D_Minutes <= 0) {
        D_Minutes = "00";
      }
      return D_Minutes;
    },

    D_Seconds: function () {
      let D_Seconds = String(Math.floor((diffTime / 1000) % 60)).padStart(
        2,
        "0"
      );

      if (D_Seconds <= 0) {
        D_Seconds = "00";
      }
      return D_Seconds;
    },
  };
  clock.innerText = `${D_dayCal.D_Date()}d ${D_dayCal.D_Hours()}h ${D_dayCal.D_Minutes()}m ${D_dayCal.D_Seconds()}s`;
}

nowTime();
setInterval(nowTime, 1000);
