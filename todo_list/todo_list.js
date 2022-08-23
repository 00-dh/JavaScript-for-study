const writeForm = document.querySelector(".write_list");
const writeInput = writeForm.querySelector("input");
const listIndex = document.querySelector(".list_index");

let list = [];

function saveList() {
  localStorage.setItem("list", JSON.stringify(list));
}

function handleSumbitList(event) {
  event.preventDefault();
  const inputList = writeInput.value;
  writeInput.value = "";
  const newList = {
    id: Date.now(),
    text: inputList,
  };
  paintList(newList);
  list.push(newList);
  saveList();
}

function paintList(content) {
  const li = document.createElement("li");
  li.id = content.id;
  listIndex.appendChild(li);
  const span = document.createElement("span");
  span.innerText = content.text;
  li.appendChild(span);
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(button);
  button.addEventListener("click", deleteList);
}

function deleteList(event) {
  const li = event.target.parentNode;
  list = list.filter((list) => list.id !== parseInt(li.id));
  li.remove();
  saveList();
}

const savedList = localStorage.getItem("list");

if (savedList !== null) {
  const parseList = JSON.parse(savedList);
  list = parseList;
  parseList.forEach((item) => paintList(item));
}

writeForm.addEventListener("submit", handleSumbitList);
