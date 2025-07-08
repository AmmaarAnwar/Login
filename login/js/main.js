let user = [];
user = JSON.parse(localStorage.getItem("user")) || [];

let signinEmail = document.getElementById("signEmail");
let signinPassword = document.getElementById("signPassword");

document.getElementById("login").addEventListener("click", function () {
  if (signinEmail.value.trim() === "" || signinPassword.value.trim() === "") {
    document.getElementById(
      "message"
    ).innerHTML = `<p class='text-danger text-center'>All inputs are required</p>`;
  } else {
    check();
  }
});

function check() {
  let found = false;

  for (let i = 0; i < user.length; i++) {
    if (
      signinEmail.value.trim() === user[i].email &&
      signinPassword.value === user[i].password
    ) {
      let x = user[i].name;
      localStorage.setItem("userName", x);
      location.href = "../home/index.html";
      found = true;
      break;
    }
  }

  if (!found) {
    document.getElementById(
      "message"
    ).innerHTML = `<p class='text-danger text-center'>Invalid email or password</p>`;
  }
}
