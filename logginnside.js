// Supabase auth uses the hosted Postgres database behind the scenes;
// this page does not write manual SQL directly, it uses Supabase SDK methods.
const SUPABASE_URL = "https://yspuscgzfxrhvpnsaofz.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzcHVzY2d6ZnhyaHZwbnNhb2Z6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NjIzNDY4NSwiZXhwIjoyMDkxODEwNjg1fQ.FmhnMWUdFeDfZ8uGFJEBIpYOllQaTH_zHJaDt4B1C10";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    loginMessage.textContent = "Fyll inn både e-post og passord.";
    return;
  }

  loginMessage.textContent = "Logger inn...";

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    loginMessage.textContent = error.message;
    return;
  }

  if (data.session) {
    loginMessage.textContent = "Innlogging vellykket!";
    window.location.href = "index.html";
  } else {
    loginMessage.textContent = "Innlogging mislyktes. Prøv igjen.";
  }
});
