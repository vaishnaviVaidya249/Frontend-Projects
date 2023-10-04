const containerele=document.querySelector(".container");
const leftele=document.querySelector(".left");
const rightele=document.querySelector(".right");


leftele.addEventListener("mouseover",()=>{
    containerele.classList.add("active-left");
})

leftele.addEventListener("mouseleave",()=>{
    containerele.classList.remove("active-left")
})
rightele.addEventListener("mouseover",()=>{
    containerele.classList.add("active-right");
})

rightele.addEventListener("mouseleave",()=>{
    containerele.classList.remove("active-right")
})