const writeForm = document.querySelector(".todo_input");
const writeInput = document.querySelector(".todo_input input");

function inputValue(event) {
  event.preventDefault();
  console.log(writeInput.value);
}

writeForm.addEventListener("submit", inputValue);
