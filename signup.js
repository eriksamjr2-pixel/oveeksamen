const SUPABASE_URL = "https://yspuscgzfxrhvpnsaofz.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzcHVzY2d6ZnhyaHZwbnNhb2Z6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NjIzNDY4NSwiZXhwIjoyMDkxODEwNjg1fQ.FmhnMWUdFeDfZ8uGFJEBIpYOllQaTH_zHJaDt4B1C10";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const signupForm = document.getElementById("signup-form");
const signupMessage = document.getElementById("signup-message");

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    signupMessage.textContent = "Passordene stemmer ikke overens.";
    return;
  }

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
  });

  if (error) {
    signupMessage.textContent = error.message;
    return;
  }

  signupMessage.textContent =
    "Registrering vellykket! Sjekk e-posten din for bekreftelse.";
  // Optionally redirect or clear form
});
