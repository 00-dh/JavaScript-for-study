const writeForm = document.querySelector(".todo_input");
const writeInput = document.querySelector(".todo_input input");
const todoList = document.querySelector(".todo_list");

let todos = [];

function inputValue(event) {
  event.preventDefault();
  const input_value = writeInput.value;
  writeInput.value = "";
  const newObj = {
    text: input_value,
    id: Date.now(),
  };
  todos.push(newObj);
  paintTodo(newObj);
  saveTodo();
}

function paintTodo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  todoList.appendChild(li);
  const span = document.createElement("span");
  span.innerText = todo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
}

function deleteTodo(event) {
  const li = event.target.parentNode;
  todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveTodo();
}

function saveTodo() {
  localStorage.setItem("todo", JSON.stringify(todos));
}

const savedTodo = localStorage.getItem("todo");

if (savedTodo !== null) {
  const parseTodos = JSON.parse(savedTodo);
  todos = parseTodos;
  parseTodos.forEach((item) => paintTodo(item));
}

writeForm.addEventListener("submit", inputValue);
