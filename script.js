let count = document.querySelector("#count");
let cnt = 10;
 let interval =setInterval(function(){
    if(cnt>=0){
        count.textContent = cnt;
        cnt--;

    }
    else clearInterval(interval);
    

},1000);