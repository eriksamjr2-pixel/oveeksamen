const SUPABASE_URL = "https://yspuscgzfxrhvpnsaofz.supabase.co";
const SUPABASE_ANON_KEY = "DIN_ANON_KEY_HER";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    loginMessage.textContent = error.message;
    return;
  }

  loginMessage.textContent = "Innlogging vellykket!";
  window.location.href = "index.html";
});
