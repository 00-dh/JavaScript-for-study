//fot addEventListener submit
const playEvent = document.querySelector("form");

//for get value of input
const GenerateNumber = document.querySelector(".generate_nb input");
const GuessNumber = document.querySelector(".guess_nb input");

//for Element.innerText
const resultMessage = document.querySelector(".message");
const winOrLose = document.querySelector(".win_or_lose");

function handleClickPlay(event) {
  const machineNumber = Math.round(Math.random() * GenerateNumber.value);
  event.preventDefault();
<<<<<<< HEAD
  if (GuessNumber.value > GenerateNumber.value) {
    resultMessage.innerText =
      "please check your number.\n Isn't Guess number bigger than Generate number?";
=======
  resultMessage.innerText = `You chose: ${GuessNumber.value}, the machine chose: ${machineNumber}`;
  if (parseInt(GuessNumber.value) === machineNumber) {
    winOrLose.innerText = "You win!";
>>>>>>> parent of 9dab24a (add caution text (if guess number bigger than generate number))
  } else {
    resultMessage.innerText = `You chose: ${GuessNumber.value}, the machine chose: ${machineNumber}`;
    if (parseInt(GuessNumber.value) === machineNumber) {
      winOrLose.innerText = "You win!";
    } else {
      winOrLose.innerText = "You Lose!";
    }
  }
}

playEvent.addEventListener("submit", handleClickPlay);
