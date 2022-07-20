import nav from "../components/navbar.js"
document.querySelector("body").innerHTML = nav() + document.querySelector("body").innerHTML
let tick = document.getElementsByClassName("mid_con_tick")
let cross = document.getElementsByClassName("mid_con_cross")
console.log(tick)
for (const elem of tick) {
    elem.innerText = "✓"
}
for (const element of cross) {
    element.innerText = "✕"
}
let x = (id) => {
    return document.getElementById(id)
}
const button_1 = x("switch_buttons_1")
const button_2 = x("switch_buttons_2")
button_1.addEventListener("click", () => {
    button_1.style.backgroundColor = "blue"
    button_2.style.backgroundColor = "white"
    button_2.style.color = "black"
})
button_2.addEventListener("click", () => {
    button_1.style.backgroundColor = "white"
    button_2.style.backgroundColor = "blue"
    button_2.style.color = "white"
})

let media_1200 = window.matchMedia('(max-width: 1200px)')

const confirming_media = (x) => {
    if (x.matches) { // If media query matches
        document.getElementsByClassName("plans_h2").style.backgroundColor = "red";
    }
}
confirming_media(media_1200)

