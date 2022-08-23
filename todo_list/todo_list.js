const writeForm = document.querySelector(".write_list");
const writeInput = writeForm.querySelector("input");
const listIndex = document.querySelector(".list_index");

function handleSumbitList(event) {
  event.preventDefault();
  const inputList = writeInput.value;
  writeInput.value = "";
  paintList(inputList);
}

function paintList(content) {
  const li = document.createElement("li");
  listIndex.appendChild(li);
  const span = document.createElement("span");
  span.innerText = content;
  li.appendChild(span);
  const button = document.createElement("button");
  button.innerText = "X";
  li.appendChild(button);
  button.addEventListener("click", deleteList);
}

function deleteList(event) {
  const li = event.target.parentNode;
  li.remove();
}

writeForm.addEventListener("submit", handleSumbitList);
