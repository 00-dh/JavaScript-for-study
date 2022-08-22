const writeForm = document.querySelector(".todo_input");
const writeInput = document.querySelector(".todo_input input");
const todoList = document.querySelector(".todo_list");

const todos = [];

function inputValue(event) {
  event.preventDefault();
  const input_value = writeInput.value;
  todos.push(input_value);
  console.log(todos);
  writeInput.value = "";
  paintTodo(input_value);
  saveTodo();
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

function saveTodo() {
  localStorage.setItem("todo", JSON.stringify(todos));
}

const savedTodo = localStorage.getItem("todo");

if (savedTodo !== null) {
  const parseTodos = JSON.parse(savedTodo);
  parseTodos.forEach((item) => paintTodo(item));
}

writeForm.addEventListener("submit", inputValue);
