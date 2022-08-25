const logInForm = document.querySelector(".log_in");
const Id = logInForm.querySelector(".id");
const passWord = logInForm.querySelector(".pw");

const greeting = document.querySelector(".hello_user");

function sayHello(event) {
  event.preventDefault();
  userId = Id.value;
  Id.value = "";
  passWord.value = "";
  greeting.innerText = `hello. ${userId}`;
}

logInForm.addEventListener("submit", sayHello);
