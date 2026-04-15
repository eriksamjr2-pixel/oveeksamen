const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
const loginMessage = document.getElementById("login-message");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

function checkFields() {
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (email && password) {
    loginButton.style.display = "block";
    loginButton.href = "index.html";
  } else {
    loginButton.style.display = "none";
  }
}

emailInput.addEventListener("input", checkFields);
passwordInput.addEventListener("input", checkFields);

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Simple validation
  if (emailInput.value.trim() && passwordInput.value) {
    window.location.href = "index.html";
  } else {
    loginMessage.textContent = "Fyll ut alle feltene.";
  }
});
