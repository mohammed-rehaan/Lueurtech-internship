const btn = document.querySelector(".register");
const form = document.querySelector(".form");
btn.addEventListener("click", function (e) {
  e.preventDefault();

  const username = document.querySelector(".username").value;
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;

  //   checking empty fields
  if (!username || !email || !password) {
    alert("Please fill all the fields");
    return;
  }

  //   checking email validity
  if (!email.includes("@")) {
    alert("Enter valid email");
    return;
  }

  //   checking the length of the password
  if (password.length <= 5) {
    alert("Password should be atleast 6 characters");
    return;
  }

  form.innerHTML = "";
  form.insertAdjacentHTML(
    "afterbegin",
    "<h1> &check; Successfully Registered</h1>"
  );
});
