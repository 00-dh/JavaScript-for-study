const word = document.querySelector("h1");

const superEventHandler = {
  handleMouseEnter: function () {
    word.innerText = "The mouse is here!";
    word.style.color = "green";
  },
  handleMouseLeave: function () {
    word.innerText = "The mouse is gone!";
    word.style.color = "blue";
  },
  handleDbClick: function () {
    word.innerText = "That was a right click!";
    word.style.color = "orange";
  },

  handleResize: function () {
    word.innerText = "You just resized!";
    word.style.color = "purple";
  },
};

word.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
word.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
window.addEventListener("contextmenu", superEventHandler.handleDbClick);
window.addEventListener("resize", superEventHandler.handleResize);
