
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let mili = document.getElementById("ms");



let mint = 0;
let second = 0;
let miliSec = 0;
let timer = false;



function start() {
    timer = true;
    starter()

}


function stop() {
    timer = false;
    starter()
}


function reset() {
    window.location.reload()
}



let getmili = miliSec;
let getmint = mint;
let getsec = second

function starter() {
    if (timer == true) {
        miliSec++
        console.log(miliSec)
        if (miliSec == 100) {
            second++;
            miliSec = 0;
        }
        if (second == 60) {
            mint++
            second = 0;
        }
       let getmint = mint;
       let getsec = second;
       if(second < 10){
        getsec = "0" + second;
       }
       if(mint < 10){
        getmint = "0" + mint
       }

            setTimeout("starter()",10)
        mili.innerHTML = miliSec;
        min.innerHTML = getmint;
        sec.innerHTML = getsec;

    }

}
 