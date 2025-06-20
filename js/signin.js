const id = (elementId) => document.getElementById(elementId);
const selector = (elementSelector) => document.querySelector(elementSelector);

const emailInput = id("emailInput");
const passwordInput = id("passwordInput");
const loginBtn = id("loginBtn");
const p = document.createElement("p");

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  login();
});

function login() {
  const user = getUserFromStorage();

  user ? window.location.replace(`home.html?username=${user.username}`) : null;
}

function getUserFromStorage() {
  const response = localStorage.getItem(emailInput.value);
  p.classList.add("text-center", "w-75", "mx-auto");
  if (response) {
    const user = JSON.parse(response);
    if (user.password === passwordInput.value) {
      p.textContent = "success login";
      p.classList.remove("text-danger");
      p.classList.add("text-success");

      loginBtn.before(p);
      return user;
    } else {
      p.textContent = "invalid password";
      p.classList.remove("text-success");
      p.classList.add("text-danger");
      loginBtn.before(p);
      return false;
    }
  } else {
    p.textContent = "invalid email address";
    p.classList.add("text-danger");
    loginBtn.before(p);
    return false;
  }
}
