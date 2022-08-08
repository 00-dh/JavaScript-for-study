const playEvent = document.querySelector("form");
const GenerateNumber = document.querySelector(".generate_nb input");
const GuessNumber = document.querySelector(".guess_nb input");
const resultMessage = document.querySelector(".message");
const winOrLose = document.querySelector(".win_or_lose");

function handleClickPlay(event) {
  const machineNumber = Math.round(Math.random() * GenerateNumber.value);
  event.preventDefault();
  if (GuessNumber.value > GenerateNumber.value) {
    resultMessage.innerText =
      "please check your number.\n Isn't Guess number bigger than Generate number?";
    return 0;
  }
  resultMessage.innerText = `You chose: ${GuessNumber.value}, the machine chose: ${machineNumber}`;
  if (parseInt(GuessNumber.value) === machineNumber) {
    winOrLose.innerText = "You win!";
  } else {
    winOrLose.innerText = "You Lose!";
  }
}

playEvent.addEventListener("submit", handleClickPlay);
