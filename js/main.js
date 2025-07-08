let signUpName = document.getElementById("signName");
let signUpEmail = document.getElementById("signEmail");
let signUpPassword = document.getElementById("signPassword");
let user = [];

if (localStorage.getItem("user") != null) {
  user = JSON.parse(localStorage.getItem("user"));
}

function add() {
  let message = document.getElementById("message");
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (
    signUpName.value.trim() === "" ||
    signUpEmail.value.trim() === "" ||
    signUpPassword.value.trim() === ""
  ) {
    message.innerHTML =
      "<p class='text-danger text-center'>All inputs are required</p>";
    return;
  }

  if (!emailPattern.test(signUpEmail.value.trim())) {
    message.innerHTML =
      "<p class='text-danger text-center'>Please enter a valid email address</p>";
    return;
  }

  let object = {
    name: signUpName.value.trim(),
    email: signUpEmail.value.trim(),
    password: signUpPassword.value.trim(),
  };

  user.push(object);
  localStorage.setItem("user", JSON.stringify(user));
  location.href = "Login/index.html";
}
