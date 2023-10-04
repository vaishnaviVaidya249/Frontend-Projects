const imageContainerele=document.querySelector(".image-container");
const prevele=document.getElementById("prev");
const nextele=document.getElementById("next");
let x=0;
let timer;
prevele.addEventListener("click",()=>{
    x=x+45;
    clearTimeout(timer);
    updateGallery();

});

nextele.addEventListener("click",()=>{
    x=x-45;
    clearTimeout(timer);
    updateGallery();

});

function updateGallery(){
    imageContainerele.style.transform=
    `perspective(1000px) rotateY(${x}deg)`;
    timer=setTimeout(()=>{
        x=x-45;
        updateGallery();

    }, 3000);
}

updateGallery();

