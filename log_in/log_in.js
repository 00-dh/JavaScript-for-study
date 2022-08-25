const logInForm = document.querySelector(".log_in");
const logOutForm = document.querySelector(".log_out");
const Id = logInForm.querySelector(".id");
const passWord = logInForm.querySelector(".pw");

const greeting = document.querySelector(".hello_user");

const CLASSNAME_HIDDEN = "hidden";

function sayHello(event) {
  event.preventDefault();
  userId = Id.value;
  Id.value = "";
  passWord.value = "";
  greeting.innerText = `hello. ${userId}`;
  logInForm.classList.add(CLASSNAME_HIDDEN);
  logOutForm.classList.remove(CLASSNAME_HIDDEN);
}

function logOut() {
  logInForm.classList.remove(CLASSNAME_HIDDEN);
  logOutForm.classList.add(CLASSNAME_HIDDEN);
  greeting.innerText = "";
}

logInForm.addEventListener("submit", sayHello);
logOutForm.addEventListener("submit", logOut);
