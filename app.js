const h2 = document.querySelector("h2");
const body = document.querySelector("body");

function addAndRemoveEditor(color) {
  if (color === "blue") {
    body.classList.add("blue");
    body.classList.remove("purple");
    body.classList.remove("yellow");
  } else if (color === "purple") {
    body.classList.add("purple");
    body.classList.remove("yellow");
    body.classList.remove("blue");
  } else if (color === "yellow") {
    body.classList.add("yellow");
    body.classList.remove("purple");
    body.classList.remove("blue");
  }
}

function handleResize() {
  let bodyWidth = window.innerWidth;
  if (bodyWidth >= 500 && bodyWidth < 813) {
    addAndRemoveEditor("blue");
  } else if (bodyWidth >= 813 && bodyWidth < 1126) {
    addAndRemoveEditor("purple");
  } else if (1126 <= bodyWidth) {
    addAndRemoveEditor("yellow");
  }
}

handleResize();
window.addEventListener("resize", handleResize);
