const playEvent = document.querySelector("form");
const GenerateNumber = document.querySelector(".generate_nb input");
const GuessNumber = document.querySelector(".guess_nb input");
const resultMessage = document.querySelector(".message");
const winOrLose = document.querySelector(".win_or_lose");
const count = document.querySelector(".win_or_lose__count");

let winCount = 0;
let loseCount = 0;

function handleClickPlay(event) {
  event.preventDefault();
  const GuessValue = parseInt(GuessNumber.value, 10);
  const GenerateValue = parseInt(GenerateNumber.value, 10);
  const machineNumber = Math.round(Math.random() * GenerateValue);

  if (GuessValue > GenerateValue) {
    resultMessage.innerText =
      "⚠️please check your number.⚠️\n Isn't Guess number bigger than Generate number?";
    winOrLose.innerText = "";
    return 0;
  }
  resultMessage.innerText = `You chose: ${GuessValue}, the machine chose: ${machineNumber}`;
  if (parseInt(GuessValue, 10) === machineNumber) {
    winOrLose.innerText = "You win!";
    winCount += 1;
  } else {
    winOrLose.innerText = "You Lose!";
    loseCount += 1;
  }
  count.innerText = `win: ${winCount} times\n lose: ${loseCount} times`;
}

playEvent.addEventListener("submit", handleClickPlay);
