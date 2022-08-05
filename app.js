const body = document.querySelector("body");

function addAndRemoveEditor(colorName) {
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
