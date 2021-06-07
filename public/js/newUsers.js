const signupFormHandler = async (event) => {
  console.log(signupFormHandler, "\n -------------------------------");
  event.preventDefault();
  console.log(event, "\n -------------------------------");
  const user_name = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const character_name = document
    .querySelector("#character-signup")
    .value.trim();
  console.log(
    user_name,
    email,
    password,
    character_name,
    "\n -------------------------------"
  );
  if (user_name && password && email && character_name) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ user_name, email, password, character_name }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("Server response to user creation: " + response);

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};
document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
