const starsele=document.querySelectorAll(".fa-star")
const emojisele=document.querySelectorAll(".far")
const colors=["red","orange","lightblue","lightgreen","green"];
updateRating(0);
starsele.forEach((starele,index) =>{
    starele.addEventListener("click",()=>{
        updateRating(index);
    });
});

function updateRating(index){
    starsele.forEach((starele,idx)=>{
        if(idx<index+1){
            starele.classList.add("active")

        }else{
            starele.classList.remove("active");
        }

    });
    emojisele.forEach(emojiele=>{
        emojiele.style.transform=`translateX(-${index * 50}px)`;
        emojiele.style.color=colors[index];
    });


}