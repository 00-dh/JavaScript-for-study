const h2 = document.querySelector("h2");
const body = document.querySelector("body");

function handleResize() {
  let bodyWidth = window.innerWidth;
  if (bodyWidth >= 500 && bodyWidth < 813) {
    body.classList.add("blue");
    body.classList.remove("purple");
    body.classList.remove("yellow");
  } else if (bodyWidth >= 813 && bodyWidth < 1126) {
    body.classList.add("purple");
    body.classList.remove("yellow");
    body.classList.remove("blue");
  } else if (1126 <= bodyWidth) {
    body.classList.add("yellow");
    body.classList.remove("purple");
    body.classList.remove("blue");
  }
}

handleResize();
window.addEventListener("resize", handleResize);
