const menuele=document.querySelector(".menu");
const menutextele=document.querySelector(".menu p");
const lieles=document.querySelectorAll(".social-lists li");
const sociallistsele=document.querySelector(".social-lists");
menuele.addEventListener("click",()=>{
    sociallistsele.classList.toggle("hide");
    menuele.classList.toggle("rotate");

});
lieles.forEach(liele=>{
    liele.addEventListener("click",()=>{
        menutextele.innerHTML=liele.innerHTML;
        sociallistsele.classList.add("hide");
        menuele.classList.toggle("rotate");
    })
})