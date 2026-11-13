let count = document.querySelector("#count");
let cnt = 10;
 let interval =setInterval(function(){
    if(cnt>=1){
        cnt--;
        count.textContent = cnt;

    }
    else clearInterval(interval);
    

},1000);