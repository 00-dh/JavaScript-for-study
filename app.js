const body = document.querySelector("body");
const WidthValue = document.querySelector(".width_value");

const colorEditor = {
  addBlue: function () {
    body.className = "";
    body.classList.add("blue");
  },
  addPurple: function () {
    body.className = "";
    body.classList.add("purple");
  },
  addYellow: function () {
    body.className = "";
    body.classList.add("yellow");
  },
  addTomato: function () {
    body.className = "";
    body.classList.add("tomato");
  },
};

function handleResize() {
  let bodyWidth = window.innerWidth;
  WidthValue.innerText = `You're Width length is now ${bodyWidth}`;
  if (bodyWidth >= 500 && bodyWidth < 813) {
    colorEditor.addBlue();
    return "blue";
  } else if (bodyWidth >= 813 && bodyWidth < 1126) {
    colorEditor.addPurple();
    return "purple";
  } else if (1126 <= bodyWidth) {
    colorEditor.addYellow();
    return "yellow";
  }
}

function handleOffWifi() {
  colorEditor.addTomato();
  alert("Your wifi is disconnected");
}

function handleOnWifi() {
  alert("Your wifi is connected");
}

handleResize();
window.addEventListener("offline", handleOffWifi);
window.addEventListener("online", handleOnWifi);
window.addEventListener("resize", handleResize);
