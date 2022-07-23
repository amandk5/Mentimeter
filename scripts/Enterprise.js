import nav from "../components/navbar.js"
import footer from "../components/footer.js"
document.querySelector("body").innerHTML = nav() + document.querySelector("body").innerHTML + footer() 