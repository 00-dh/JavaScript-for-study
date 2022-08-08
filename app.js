const playEvent = document.querySelector("form");
const GenerateNumber = document.querySelector(".generate_nb input");
const GuessNumber = document.querySelector(".guess_nb input");
const resultMessage = document.querySelector(".message");
const winOrLose = document.querySelector(".win_or_lose");

function handleClickPlay(event) {
  event.preventDefault();
  resultMessage.innerText = `You chose: ${
    GuessNumber.value
  }, the machine chose: ${Math.round(Math.random() * GenerateNumber.value)}`;
  if (
    parseInt(GuessNumber.value) ===
    Math.round(Math.random() * GenerateNumber.value)
  ) {
    winOrLose.innerText = "You win!";
  } else {
    winOrLose.innerText = "You Lose";
  }
}

playEvent.addEventListener("submit", handleClickPlay);
