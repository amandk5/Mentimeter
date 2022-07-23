import nav from "../components/navbar.js"
document.querySelector("body").innerHTML = nav() + document.querySelector("body").innerHTML
let GetById = (id) => {
    return document.getElementById(id)

}
let tick = document.getElementsByClassName("mid_con_tick")
let cross = document.getElementsByClassName("mid_con_cross")
let year_or_month = false

const button_1 = GetById("switch_buttons_1")
const button_2 = GetById("switch_buttons_2")
{


    let prices_for_Education_1 = GetById("prices_for_Education_1")
    let prices_for_Education_2 = GetById("prices_for_Education_2")
    let prices_for_Education_3 = GetById("prices_for_Education_3")
    let prices_for_Education_4 = GetById("prices_for_Education_4")
    let prices_for_Education_5 = GetById("prices_for_Education_5")
    let plans_h2_bottom_1 = GetById("plans_h2_bottom_1")
    let plans_h2_bottom_2 = GetById("plans_h2_bottom_2")
    let plans_h2_bottom_3 = GetById("plans_h2_bottom_3")
    let plans_h2_bottom_4 = GetById("plans_h2_bottom_4")
    let plans_h2_custom = GetById("plans_h2_custom")
    let plans_pricing_basic = GetById("plans_pricing_basic")
    let plans_pricing_pro = GetById("plans_pricing_basic")
    let save_id = GetById("save_id")
    let Pricing_h1_mentimeter_1 = GetById("Pricing_h1_mentimeter_1")
    let Pricing_h1_mentimeter_2 = GetById("Pricing_h1_mentimeter_2")



}
for (const elem of tick) {
    elem.innerText = "✓"
}
for (const element of cross) {
    element.innerText = "✕"
}
class selected_plan {
    constructor(plan, plan_price, t) {
        this.plan = plan;
        this.price = plan_price
        if (t == true) {
            this.bill_cycle = "annual"

        } else {
            this.bill_cycle = "monthly"
        }
    }

}




button_1.addEventListener("click", () => {
    button_1.style.backgroundColor = "#196cff"
    button_2.style.backgroundColor = "white"
    button_1.style.color = "white"
    button_2.style.color = "black"
    year_or_month = true
    if (student_or_pro == false) {
        plans_pricing_basic.innerText = "$10"
        plans_pricing_pro.innerText = "$20"
    } else {
        plans_pricing_basic.innerText = "$7"
        plans_pricing_pro.innerText = "$12"
    }
})
button_2.addEventListener("click", () => {
    button_1.style.backgroundColor = "white"
    button_2.style.backgroundColor = "#196cff"
    button_2.style.color = "white"
    button_1.style.color = "black"
    year_or_month = false
    if (student_or_pro == false) {
        plans_pricing_basic.innerText = "$11"
        plans_pricing_pro.innerText = "$24"

    } else {
        plans_pricing_basic.innerText = "$8"
        plans_pricing_pro.innerText = "$14"

    }
})
let student_or_pro = false
plans_pricing_basic
let current_plan = GetById("button_prices_current_plan")
let basic_plan = GetById("button_prices_basic_plan")
let pro_plan = GetById("button_prices_pro_plan")
let custom_plan = GetById("button_prices_custom_plan")
let prices_for_Education = GetById("prices_for_Education")
prices_for_Education.addEventListener("click", () => {
    if (student_or_pro == false) {
        student_or_pro = true
        prices_for_Education_1.innerText = "Not a"
        prices_for_Education_3.innerText = "or "
        prices_for_Education_5.innerText = "? See Mentimeter "
        prices_for_Education.innerText = "for professional"
        plans_h2_bottom_1.innerText = "Try out Mentimeter to engage your audience."
        plans_h2_bottom_2.innerText = "The essentials for engaging your students."
        plans_h2_bottom_3.innerText = "All the power to customize your presentations."
        plans_h2_bottom_4.innerText = "An Enterprise solution tailored to your educational organization."
        plans_h2_custom.innerText = "Campus"
        save_id.style.display = "none"
        Pricing_h1_mentimeter_1.innerText = "Boost engagement in the classroom"
        Pricing_h1_mentimeter_2.innerText = "with the plan that’s right for you"
        if (year_or_month == false) {
            if (student_or_pro == false) {
                plans_pricing_basic.innerText = "$11"
                plans_pricing_pro.innerText = "$24"

            } else {
                plans_pricing_basic.innerText = "$8"
                plans_pricing_pro.innerText = "$14"

            }
        } else {
            if (student_or_pro == false) {
                plans_pricing_basic.innerText = "$10"
                plans_pricing_pro.innerText = "$20"
            } else {
                plans_pricing_basic.innerText = "$7"
                plans_pricing_pro.innerText = "$12"
            }
        }
    } else {
        student_or_pro = false
        prices_for_Education_1.innerText = "Are you a"
        prices_for_Education_3.innerText = "or a"
        prices_for_Education_5.innerText = "? Take a look at our "
        prices_for_Education.innerText = "for professional"
        plans_h2_bottom_1.innerText = "For anyone trying out Mentimeter."
        plans_h2_bottom_2.innerText = "All the essentials for interactive presentations."
        plans_h2_bottom_3.innerText = "Full access to all features for individuals or teams."
        plans_h2_bottom_4.innerText = "For using Mentimeter in your team or organization."
        plans_h2_custom.innerText = "Enterprise"

        save_id.style.display = "block"
        Pricing_h1_mentimeter_1.innerText = "Give everyone a voice"
        Pricing_h1_mentimeter_2.innerText = "with the plan that’s right for you"
        if (year_or_month == false) {
            if (student_or_pro == false) {
                plans_pricing_basic.innerText = "$11"
                plans_pricing_pro.innerText = "$24"

            } else {
                plans_pricing_basic.innerText = "$8"
                plans_pricing_pro.innerText = "$14"

            }
        } else {
            if (student_or_pro == false) {
                plans_pricing_basic.innerText = "$10"
                plans_pricing_pro.innerText = "$20"
            } else {
                plans_pricing_basic.innerText = "$7"
                plans_pricing_pro.innerText = "$12"
            }
        }
    }
})
let login = true
basic_plan.addEventListener("click", () => {
    if (login) {
        if (year_or_month == false) {
            if (student_or_pro == false) {
                let temp = new selected_plan("basic", 11.99, year_or_month)
                localStorage.setItem("added_plan_to_cart", JSON.stringify(temp))
                window.location.assign("cart.html")
            } else {
                let temp = new selected_plan("basic", 8.99, year_or_month)
                localStorage.setItem("added_plan_to_cart", JSON.stringify(temp))
                window.location.assign("cart.html")
            }
        }
        else {
            if (student_or_pro == false) {
                let temp = new selected_plan("basic", 10.99, year_or_month)
                localStorage.setItem("added_plan_to_cart", JSON.stringify(temp))
                window.location.assign("cart.html")
            } else {
                let temp = new selected_plan("basic", 7.99, year_or_month)
                localStorage.setItem("added_plan_to_cart", JSON.stringify(temp))
                window.location.assign("cart.html")
            }
        }

    } else {
        alert("Login to purchase")
    }
})
pro_plan.addEventListener("click", () => {
    if (login) {
        if (year_or_month == false) {
            if (student_or_pro == false) {
                let temp = new selected_plan("pro", 24.99, year_or_month)
                localStorage.setItem("added_plan_to_cart", JSON.stringify(temp))
                window.location.assign("cart.html")

            } else {
                let temp = new selected_plan("pro", 14.99, year_or_month)
                localStorage.setItem("added_plan_to_cart", JSON.stringify(temp))
                window.location.assign("cart.html")

            }
        } else {
            if (student_or_pro == false) {
                let temp = new selected_plan("pro", 20.99, year_or_month)
                localStorage.setItem("added_plan_to_cart", JSON.stringify(temp))
                window.location.assign("cart.html")

            } else {
                let temp = new selected_plan("pro", 12.99, year_or_month)
                localStorage.setItem("added_plan_to_cart", JSON.stringify(temp))
                window.location.assign("cart.html")

            }
        }

    } else {
        alert("Login to purchase")
    }

})
custom_plan.addEventListener("click", () => {
    window.location.assign("Enterprise.html")
})

let media_queries = () => {
}
window.addEventListener("load", () => {
    startQueries()
})
const startQueries = () => {
    const media_queries_1 = matchMedia("(min-width:1200px)")
    const ifMatcheschange = e => {
        if (e.matches) {
            let selected_butt = document.querySelectorAll(".button_prices_mentimeter")
            let change_butt = document.querySelectorAll(".media_change_butt")
            for (let i = 0; i < selected_butt.length; i++) {
                change_butt[i].append(selected_butt[i])
            }
        } else {
            let selected_div = document.querySelectorAll(".Diff_plans_mentimeter_plans")
            let selected_butt = document.querySelectorAll(".button_prices_mentimeter")
            for (let i = 0; i < selected_div.length; i++) {
                selected_div[i].append(selected_butt[i])
            }
        }
    }
    media_queries_1.addListener(ifMatcheschange)
    ifMatcheschange(media_queries_1)
}
window.addEventListener("scroll", () => {



    if (window.pageYOffset > 454 && window.pageYOffset < 2790) {
        let bottom_nav = document.getElementById("menti_meter_nav_bottom_absolute").style
        let upper_nav = document.getElementById("mentimeter_price_nav").style
        upper_nav.position = "sticky"
        upper_nav.top = 0
        upper_nav.backgroundColor
    } else {
        let upper_nav = document.getElementById("mentimeter_price_nav").style
        upper_nav.position = "none"
    }
})