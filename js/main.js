const id = (elementId) => document.getElementById(elementId);
const selector = (elementSelector) => document.querySelector(elementSelector);

const usernameInput = id("usernameInput");
const emailInput = id("emailInput");
const passwordInput = id("passwordInput");
const submitBtn = id("submitBtn");
const p = document.createElement("p");
const regex = {
  usernameRegex: /^[a-zA-Z0-9_]{3,20}$/,
  emailRegex: /^[^@]+@[^@]+\.[a-zA-Z]+$/,
  passwordRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,
};
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const response = validateInputs();
  p.textContent = response;
  p.classList.add("text-center", "w-75", "mx-auto");
  response == "success registered"
    ? (p.classList.remove("text-danger"),
      p.classList.add("text-success"),
      submitBtn.before(p),
      addUserToStorage())
    : (p.remove("text-success"),
      p.classList.add("text-danger"),
      submitBtn.before(p));
});

function addUserToStorage() {
  const user = {
    username: usernameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  localStorage.setItem(user.email, JSON.stringify(user));
  resetAllFields();
}
function resetAllFields() {
  usernameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

function validateInputs() {
  if (!regex.usernameRegex.test(usernameInput.value)) return "invalid username";
  else if (!regex.emailRegex.test(emailInput.value))
    return "invalid email address";
  else if (!regex.passwordRegex.test(passwordInput.value))
    return "password at least 8 charters with upper, lower case and special charters";
  else if (localStorage.getItem(emailInput.value))
    return "email already exists";
  else {
    return "success registered";
  }
}

/********************************Sign in page**********************************/


