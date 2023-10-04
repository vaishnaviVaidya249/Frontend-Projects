const dayele=document.getElementById("day");
const hourele=document.getElementById("hour");
const minele=document.getElementById("minute");
const secele=document.getElementById("second");

const newyearTime=new Date("Jan 1,2024 00:00:00").getTime();
updateCountdown();
function updateCountdown(){
    const now=new Date().getTime();
    const gap=newyearTime-now;

    const second=1000;
    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;

    const d=Math.floor(gap/day);
    const h=Math.floor((gap%day)/hour);
    const m=Math.floor((gap%hour)/minute);
    const s=Math.floor((gap%minute)/second);

    dayele.innerText=d;
    hourele.innerText=h;
    minele.innerText=m;
    secele.innerText=s;

    setTimeout(updateCountdown,1000);

    


}