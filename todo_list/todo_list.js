const writeForm = document.querySelector(".todo_input");
const writeInput = document.querySelector(".todo_input input");
const todoList = document.querySelector(".todo_list");

function inputValue(event) {
  event.preventDefault();
  const input_value = writeInput.value;
  paintTodo(input_value);
  writeInput.value = "";
}

function paintTodo(todo) {
  const li = document.createElement("li");
  todoList.appendChild(li);
  const span = document.createElement("span");
  span.innerText = todo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
}

function deleteTodo(event) {
  const li = event.target.parentNode;
  li.remove();
}

writeForm.addEventListener("submit", inputValue);
