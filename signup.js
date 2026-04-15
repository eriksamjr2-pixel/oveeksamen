const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-button");
const signupMessage = document.getElementById("signup-message");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

function checkFields() {
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (email && password && confirmPassword && password === confirmPassword) {
    signupButton.style.display = "block";
    signupButton.href = "index.html";
  } else {
    signupButton.style.display = "none";
  }
}

emailInput.addEventListener("input", checkFields);
passwordInput.addEventListener("input", checkFields);
confirmPasswordInput.addEventListener("input", checkFields);

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Simple validation
  if (
    emailInput.value.trim() &&
    passwordInput.value &&
    passwordInput.value === confirmPasswordInput.value
  ) {
    window.location.href = "index.html";
  } else {
    signupMessage.textContent =
      "Fyll ut alle feltene og sørg for at passordene matcher.";
  }
});
