const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const btn = document.querySelector("button");

function change_color(event) {
  const randomValue1 = Math.floor(Math.random() * colors.length);
  const randomValue2 = Math.floor(Math.random() * colors.length);
  const randomColor1 = colors[randomValue1];
  const randomColor2 = colors[randomValue2];
  document.body.style.backgroundImage = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
  let pos = colors.indexOf(randomColor1);
}

btn.addEventListener("click", change_color);
