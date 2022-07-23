let signinArr = JSON.parse(localStorage.getItem("signupKey")) || [];
document.querySelector("form").addEventListener("submit", myFunction);

function myFunction() {
  event.preventDefault();
  let EmailAdd = document.querySelector("#email").value;
  let Pass = document.querySelector("#password").value;

  let flag = false;
  signinArr.forEach(function (el) {
    if (EmailAdd == el.oEmail && Pass == el.oPassword) {
      return (flag = true);
    }
  });
  console.log(flag);

  if (flag) {
    alert("You Are Successfully Logged In.");
    localStorage.setItem("system", "online");
    window.location.href = "index.html";
  } else {
    alert("Wrong ID/Password");

    window.location.reload();
  }
}