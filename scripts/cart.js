let added_plan_to_cart = JSON.parse(localStorage.getItem("added_plan_to_cart"))
const GetById = (id) => {
    return document.getElementById(id)
}
const Number_of_team_members_butt_1 = GetById("Number_of_team_members_butt_1")
const Number_of_team_members_butt_2 = GetById("Number_of_team_members_butt_2")
let Number_of_team_members = GetById("Number_of_team_members")

const add_vat_number = GetById("Add_vat_number")
const Adding_vat_number = GetById("Adding_vat_number")

const upgrade_butt = GetById("upgrade_butt")

const acc_email = GetById("acc")
const bill_cycle = GetById("bill_cycle")
const no_of_licenses = GetById("no_of_licenses")
const price_plan = GetById("price_plan")
const VAT_percentage = GetById("VAT_percentage")
const total_bill = GetById("total_bill")
const cart_which_plan = GetById("cart_which_plan")

const [signupKey] = JSON.parse(localStorage.getItem("signupKey"))

Number_of_team_members.value = 1

// let details_string = `You're now upgrading to ${plan_name} and will be charged $${plan_cost} + VAT annually until you cancel your subscription.`
add_vat_number.addEventListener("click", () => {
    add_vat_number.style.display = "none"
    Adding_vat_number.style.display = "block"
})
Adding_vat_number.addEventListener("click", () => {
    add_vat_number.style.display = "block"
    Adding_vat_number.style.display = "none"
})
acc_email.innerText = signupKey.oEmail
bill_cycle.innerText = added_plan_to_cart.bill_cycle
no_of_licenses.innerText = Number_of_team_members.value
price_plan.innerText = `$${added_plan_to_cart.price}`
VAT_percentage.innerText = "0%"
if (added_plan_to_cart.bill_cycle != "monthly") {
    total_bill.innerText = `$${Number(Number_of_team_members.value) * Number(added_plan_to_cart.price) * 12}`
} else {
    total_bill.innerText = `$${Number(Number_of_team_members.value) * Number(added_plan_to_cart.price)}`
}
cart_which_plan.innerText = `You're now upgrading to ${added_plan_to_cart.plan} and will be charged $${Number(Number_of_team_members.value) * Number(added_plan_to_cart.price)} + VAT annually until you cancel your subscription.`


Number_of_team_members_butt_1.addEventListener("click", () => {
    Number_of_team_members.value = Number_of_team_members.value - 1

    if (Number_of_team_members.value < 0) {
        Number_of_team_members.value = 0
    }
    no_of_licenses.innerText = Number_of_team_members.value
    total_bill.innerText = `$${Number(Number_of_team_members.value) * Number(added_plan_to_cart.price)}`
})
Number_of_team_members_butt_2.addEventListener("click", () => {
    Number_of_team_members.value = Number(Number_of_team_members.value) + 1
    if (Number_of_team_members.value == 0) {
        Number_of_team_members.value = 1
    }
    if (Number_of_team_members.value == "") {
        Number_of_team_members.value = 1
    }
    if (Number_of_team_members.value == null) {
        Number_of_team_members.value = 1
    }
    no_of_licenses.innerText = Number_of_team_members.value
    total_bill.innerText = `$${Number(Number_of_team_members.value) * Number(added_plan_to_cart.price)}`

})
Number_of_team_members.onkeypress = () => {
    console.log("n")
}
let oninput_Number_of_team_members = () => {
    console.log("hello")
}
let input_true = () => {
    console.log(Number_of_team_members)
    if (Number_of_team_members.value[0] == "-" || Number_of_team_members.value[Number_of_team_members.value.length] == "-") {
        Number_of_team_members.value = 0
    }
}
const Back_to_home = GetById("Back_to_home")
Back_to_home.addEventListener("click", () => {
    window.location.assign("index.html")
})
upgrade_butt.addEventListener("click", () => {
    const card_number = GetById("card_number").value
    const expiration_date = GetById("expiration_date").value
    const cvv = GetById("cvv").value
    if (String(card_number.length) == 16 && String(expiration_date.length) == 4 && String(cvv.length) == 3) {
        setTimeout(() => {
            GetById("cart_om_layer").style.display = "none"
            GetById("success_payment").style.display = "block"
        }, 1000 * 2.5)
    } else {
        alert("Enter correct input")
    }
})