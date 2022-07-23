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
let GetById_n = (id) => {
  return document.getElementById(id)
}
let nav_menuclick = () => {
  let pop_div = GetById_n("pop_div").style
  pop_div.display = "block"
  pop_div.position = "sticky"
  GetById_n("navbar_container_nav").style.display = "none"
}
GetById_n("nav_pop_up").addEventListener("click", () => {
  nav_menuclick()
})

