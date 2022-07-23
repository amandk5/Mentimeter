// import navbar from "./components/navbar.js";
//   document.querySelector("body").innerHTML += navbar();

let signindata = localStorage.getItem("system") || [];
let signindataname = JSON.parse(localStorage.getItem("signupKey"));
console.log(signindataname);
for (let i = 0; i < signindataname.length; i++) {
  if (signindata == "online") {
    let signin = document.getElementById("menu2");
    signin.innerHTML = signindataname[i].oName;
    console.log(signin);
    signin.style.color = "blue";
  }
}
