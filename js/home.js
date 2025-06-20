const params = new URLSearchParams(window.location.search);
const pageWelcome = document.createElement(`h1`);
pageWelcome.classList.add(
  "text-center",
  "display-3",
  "text-primary",
  "my-auto"
);
const headingContainer = document.getElementById("headingContainer");
const logoutBtn = document.getElementById("logoutBtn");

window.addEventListener("DOMContentLoaded", () => {
  const name = params.get("username");
  console.log(name);

  pageWelcome.textContent = `Welcome ${name}`;
  headingContainer.appendChild(pageWelcome);
});

logoutBtn.addEventListener("click", (_) => {
  window.location.replace("signin.html");
});
