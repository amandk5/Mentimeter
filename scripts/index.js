

var img1= document.querySelector("#rTopimg1")
var img2= document.querySelector("#rTopimg2")
let r = document.querySelector("#rTop1")
let r2 = document.querySelector("#rTop2")
let rb = document.querySelector("#rBot1")
let rb2= document.querySelector("#rBot2")
let rb3= document.querySelector("#rBot3")
let botimg = document.querySelectorAll("#rBotimg1")

let botimg2 = document.querySelector("#rBotimg2")
let botimg3 =document.querySelector("#rBotimg3")

let n = document.querySelector("#rnech1")
let n2= document.querySelector("#rnech2")
let n3= document.querySelector("#rnech3")
let nechimg = document.querySelectorAll("#rnechimg1")

let nechimg2 = document.querySelector("#rnechimg2")
let nechimg3 =document.querySelector("#rnechimg3")



document.querySelector("#rTop1").addEventListener("mouseenter",function(){

    img1.src=""
    r.innerHTML=""
     r.style.backgroundColor="white"
    r.style.border="5px solid rgb(12, 56, 99)"
    let div = document.createElement("div")
    div.setAttribute("class","hoverdiv")
    let p = document.createElement("p")
  

    p.innerText="Let's start the new term with check in.Its a great time to reflect in the past and look froward to the future!"
     p.style.lineHeight="40px"
     p.style.paddingLeft="20px"
     p.style.paddingRight="20px"
     p.style.paddingTop="20px"

     btn1=document.createElement("button")
     btn1.innerText="Add Template"
     btn1.style.marginTop="180px"
     btn1.style.fontSize="22px"
     btn1.style.marginRight="22px"
     btn1.style.fontWeight="bold"
     btn1.style.backgroundColor="rgb(12, 56, 99)"
     btn1.style.color="white"
     btn1.style.border="0"
     btn1.style.padding="10px 10px 10px 10px"

     btn1.addEventListener("click",function(){

        addtemp1()
     })
     function addtemp1(){
         
        window.location.href="template.html"
    
     }

      

     
     
     btn2=document.createElement("button")
     btn2.innerText= "Preview"
     btn2.style.fontSize="22px"
     btn2.style.padding="10px 10px 10px 10px"
     btn1.style.marginLeft="22px"
     btn2.style.border="0"
     
     
    div.append(p,btn1,btn2)
    r.append(div)
})

document.querySelector("#rTop1").addEventListener("mouseleave",function(){
 
 window.location.reload()
})







document.querySelector("#rTop2").addEventListener("mouseenter",function(){

    img2.src=""
    r2.innerHTML=""

    r2.style.border="5px solid rgb(12, 56, 99)"
    r2.style.paddingBottom="20px"
    let div = document.createElement("div")
    div.setAttribute("class","hoverdiv")
    let p = document.createElement("p")
  

    p.innerText="Play with family and friends and keep those old board games in the cupboard and those arguments for another day."
     p.style.lineHeight="40px"
     p.style.paddingLeft="20px"
     p.style.paddingRight="20px"
     p.style.paddingTop="20px"

     btn1=document.createElement("button")
     btn1.innerText="Add Template"
     btn1.style.marginTop="200px"
     btn1.style.fontSize="22px"
     btn1.style.marginRight="22px"
     btn1.style.fontWeight="bold"
     btn1.style.backgroundColor="rgb(12, 56, 99)"
     btn1.style.color="white"
     btn1.style.border="0"
     btn1.style.padding="10px 10px 10px 10px"

     btn1.addEventListener("click",function(){

        addtemp2()
     })
     function addtemp2(){
         
        window.location.href="template.html"
    
     }
     
     btn2=document.createElement("button")
     btn2.innerText= "Preview"
     btn2.style.fontSize="22px"
     btn2.style.padding="10px 10px 10px 10px"
     btn1.style.marginLeft="22px"
     btn2.style.border="0"
     
     
    div.append(p,btn1,btn2)
    r2.append(div)
})

document.querySelector("#rTop2").addEventListener("mouseleave",function(){
 
 window.location.reload()
})






document.querySelector("#rBot1").addEventListener("mouseenter",function(){

    botimg.src=""
    rb.innerHTML=""

    rb.style.border="5px solid rgb(12, 56, 99)"
    rb.style.paddingBottom="20px"
    let div = document.createElement("div")
    div.setAttribute("class","hoverdiv")
    let p = document.createElement("p")
  

    p.innerText="Analyze and discuss your company's sustainability work with this workshop.."
     p.style.lineHeight="40px"
     p.style.paddingLeft="20px"
     p.style.paddingRight="20px"
     p.style.paddingTop="20px"

     btn1=document.createElement("button")
     btn1.innerText="Add Template"
     btn1.style.marginTop="150px"
     btn1.style.fontSize="22px"
     btn1.style.marginRight="22px"
     
     btn1.style.fontWeight="bold"
     btn1.style.backgroundColor="rgb(12, 56, 99)"
     btn1.style.color="white"
     btn1.style.border="0"
     btn1.style.padding="10px 10px 10px 10px"
     btn1.addEventListener("click",function(){

        addtemp()
     })
     function addtemp(){
         
        window.location.href="template.html"
    
     }
     
     btn2=document.createElement("button")
     btn2.innerText= "Preview"
     btn2.style.fontSize="22px"
     btn2.style.padding="10px 10px 10px 10px"
     btn1.style.marginLeft="22px"
     btn2.style.border="0"
     
     
    div.append(p,btn1,btn2)
    rb.append(div)
})

document.querySelector("#rBot1").addEventListener("mouseleave",function(){
 
 window.location.reload()
})



document.querySelector("#rBot2").addEventListener("mouseenter",function(){

    botimg2.src=""
    rb2.innerHTML=""

    rb2.style.border="5px solid rgb(12, 56, 99)"
    rb2.style.paddingBottom="20px"
    let div = document.createElement("div")
    div.setAttribute("class","hoverdiv")
    let p = document.createElement("p")
  

    p.innerText="Boost manager and team lead knowledge of Employee Engagement."
     p.style.lineHeight="40px"
     p.style.paddingLeft="20px"
     p.style.paddingRight="20px"
     p.style.paddingTop="20px"

     btn1=document.createElement("button")
     btn1.innerText="Add Template"
     btn1.style.marginTop="150px"
     btn1.style.fontSize="22px"
     btn1.style.marginRight="22px"
     
     btn1.style.fontWeight="bold"
     btn1.style.backgroundColor="rgb(12, 56, 99)"
     btn1.style.color="white"
     btn1.style.border="0"
     btn1.style.padding="10px 10px 10px 10px"
     
     btn2=document.createElement("button")
     btn2.innerText= "Preview"
     btn2.style.fontSize="22px"
     btn2.style.padding="10px 10px 10px 10px"
     btn1.style.marginLeft="22px"
     btn2.style.border="0"
     
     
    div.append(p,btn1,btn2)
    rb2.append(div)
})

document.querySelector("#rBot2").addEventListener("mouseleave",function(){
 
 window.location.reload()
})




document.querySelector("#rBot3").addEventListener("mouseenter",function(){

    botimg3.src=""
    rb3.innerHTML=""

    rb3.style.border="5px solid rgb(12, 56, 99)"
    rb3.style.paddingBottom="20px"
    let div = document.createElement("div")
    div.setAttribute("class","hoverdiv")
    let p = document.createElement("p")
  

    p.innerText="Introduce the concept of Employee Engagement to your organization with this template."
     p.style.lineHeight="40px"
     p.style.paddingLeft="20px"
     p.style.paddingRight="20px"
     p.style.paddingTop="20px"

     btn1=document.createElement("button")
     btn1.innerText="Add Template"
     btn1.style.marginTop="150px"
     btn1.style.fontSize="22px"
     btn1.style.marginRight="22px"
     
     btn1.style.fontWeight="bold"
     btn1.style.backgroundColor="rgb(12, 56, 99)"
     btn1.style.color="white"
     btn1.style.border="0"
     btn1.style.padding="10px 10px 10px 10px"
     
     btn2=document.createElement("button")
     btn2.innerText= "Preview"
     btn2.style.fontSize="22px"
     btn2.style.padding="10px 10px 10px 10px"
     btn1.style.marginLeft="22px"
     btn2.style.border="0"
     
     
    div.append(p,btn1,btn2)
    rb3.append(div)
})

document.querySelector("#rBot3").addEventListener("mouseleave",function(){
 
 window.location.reload()
})




document.querySelector("#rnech1").addEventListener("mouseenter",function(){

    nechimg.src=""
    n.innerHTML=""

    n.style.border="5px solid rgb(12, 56, 99)"
    n.style.paddingBottom="20px"
    let div = document.createElement("div")
    div.setAttribute("class","hoverdiv")
    let p = document.createElement("p")
  

    p.innerText="Give your students a short break. See where the majority lands and spark some fun discussion points."
     p.style.lineHeight="40px"
     p.style.paddingLeft="20px"
     p.style.paddingRight="20px"
     p.style.paddingTop="20px"

     btn1=document.createElement("button")
     btn1.innerText="Add Template"
     btn1.style.marginTop="150px"
     btn1.style.fontSize="22px"
     btn1.style.marginRight="22px"
     
     btn1.style.fontWeight="bold"
     btn1.style.backgroundColor="rgb(12, 56, 99)"
     btn1.style.color="white"
     btn1.style.border="0"
     btn1.style.padding="10px 10px 10px 10px"
     
     btn2=document.createElement("button")
     btn2.innerText= "Preview"
     btn2.style.fontSize="22px"
     btn2.style.padding="10px 10px 10px 10px"
     btn1.style.marginLeft="22px"
     btn2.style.border="0"
     
     
    div.append(p,btn1,btn2)
    n.append(div)
})

document.querySelector("#rnech1").addEventListener("mouseleave",function(){
 
 window.location.reload()
})





document.querySelector("#rnech2").addEventListener("mouseenter",function(){

    nechimg2.src=""
    n2.innerHTML=""

    n2.style.border="5px solid rgb(12, 56, 99)"
    n2.style.paddingBottom="20px"
    let div = document.createElement("div")
    div.setAttribute("class","hoverdiv")
    let p = document.createElement("p")
  

    p.innerText="Wish anybody and everybody happy holidays with this festive template."
     p.style.lineHeight="40px"
     p.style.paddingLeft="20px"
     p.style.paddingRight="20px"
     p.style.paddingTop="20px"

     btn1=document.createElement("button")
     btn1.innerText="Add Template"
     btn1.style.marginTop="150px"
     btn1.style.fontSize="22px"
     btn1.style.marginRight="22px"
     
     btn1.style.fontWeight="bold"
     btn1.style.backgroundColor="rgb(12, 56, 99)"
     btn1.style.color="white"
     btn1.style.border="0"
     btn1.style.padding="10px 10px 10px 10px"
     
     btn2=document.createElement("button")
     btn2.innerText= "Preview"
     btn2.style.fontSize="22px"
     btn2.style.padding="10px 10px 10px 10px"
     btn1.style.marginLeft="22px"
     btn2.style.border="0"
     
     
    div.append(p,btn1,btn2)
    n2.append(div)
})

document.querySelector("#rnech2").addEventListener("mouseleave",function(){
 
 window.location.reload()
})




document.querySelector("#rnech3").addEventListener("mouseenter",function(){

    nechimg3.src=""
    n3.innerHTML=""

    n3.style.border="5px solid rgb(12, 56, 99)"
    n3.style.paddingBottom="20px"
    let div = document.createElement("div")
    div.setAttribute("class","hoverdiv")
    let p = document.createElement("p")
  

    p.innerText="So who in the office is the best dressed? Who is the funniest? Time to decide and hand out some awards!"
     p.style.lineHeight="40px"
     p.style.paddingLeft="20px"
     p.style.paddingRight="20px"
     p.style.paddingTop="20px"

     btn1=document.createElement("button")
     btn1.innerText="Add Template"
     btn1.style.marginTop="150px"
     btn1.style.fontSize="22px"
     btn1.style.marginRight="22px"
     
     btn1.style.fontWeight="bold"
     btn1.style.backgroundColor="rgb(12, 56, 99)"
     btn1.style.color="white"
     btn1.style.border="0"
     btn1.style.padding="10px 10px 10px 10px"
     
     btn2=document.createElement("button")
     btn2.innerText= "Preview"
     btn2.style.fontSize="22px"
     btn2.style.padding="10px 10px 10px 10px"
     btn1.style.marginLeft="22px"
     btn2.style.border="0"
     
     
    div.append(p,btn1,btn2)
    n3.append(div)
})

document.querySelector("#rnech3").addEventListener("mouseleave",function(){
 
 window.location.reload()
})