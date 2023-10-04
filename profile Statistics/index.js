const counterele=document.querySelectorAll(".counter");
counterele.forEach(ele=>{
    ele.innerText="0";
    increment();

    function increment(){
        let curnum=+ele.innerText;
        const dataceil=ele.getAttribute("data-ceil");
        const increase=dataceil/15;
        curnum=Math.ceil(curnum+increase);
        ele.innerText=curnum;
        if(curnum<dataceil){
            ele.innerText=curnum
            setTimeout(increment,50)
        }else{
            ele.innerText=dataceil;
        }

    }
});