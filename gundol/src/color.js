const palette = document.querySelector(".palette");
const colorD_day = document.querySelector(".d-day");

function handlePaletteClick() {
  colorD_day.classList.remove("");
  colorD_day.classList.add("");
}

palette.addEventListener("click", handlePaletteClick);
