const body = document.querySelector("body");
const WidthValue = document.querySelector(".width_value");

function colorEditor(colorName) {
  if (colorName === "blue") {
    body.classList.add("blue");
    body.classList.remove("purple");
    body.classList.remove("yellow");
  } else if (colorName === "purple") {
    body.classList.add("purple");
    body.classList.remove("yellow");
    body.classList.remove("blue");
  } else if (colorName === "yellow") {
    body.classList.add("yellow");
    body.classList.remove("purple");
    body.classList.remove("blue");
  }
}

function handleResize() {
  let bodyWidth = window.innerWidth;
  WidthValue.innerText = `You're Width length is now ${bodyWidth}`;
  if (bodyWidth >= 500 && bodyWidth < 813) {
    colorEditor("blue");
  } else if (bodyWidth >= 813 && bodyWidth < 1126) {
    colorEditor("purple");
  } else if (1126 <= bodyWidth) {
    colorEditor("yellow");
  }
}

handleResize();
window.addEventListener("resize", handleResize);
