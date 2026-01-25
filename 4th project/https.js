// to make a stopwatch
//
//every time the document.getEementById(restart).addEventListener("click",var1.innerText="00:00")&& every time document.getelementbyid("start").addeventlistener("click",()+> function to make the time static or not moving  )


// variables

const time=document.querySelector("#time");
const stopButton=document.querySelector("#start");
const resetButton=document.querySelector("#restart");

let seconds=0;
let minutes=0;
let hours=0;

let leadingHours=0;
let leadingSeconds=0;
let leadingMinutes=0;

let current="stopped";
let timerStatus=null;

//functions

function stopWatch(){
 seconds++;
 if(seconds/60===1){
    seconds=0;
    minutes++;
 }
 if(minutes/60===1){
    minutes=0;
    hours++;
 }

if(seconds<10){
    leadingSeconds="0"+seconds.toString();
    
}
else{
        leadingSeconds=seconds;
    }
if(minutes<10){
    leadingMinutes="0"+minutes.toString();
}
else{
    leadingMinutes=minutes;
}
if(hours<10){
    leadingHours="0"+hours.toString();
}
else{
    leadingHours=hours;
}
resetButton.addEventListener("click",()=> {
    hours=0;
    seconds=-1;
    minutes=0;
})

 

time.innerText=leadingHours+":"+leadingMinutes+":"+leadingSeconds;

}





stopButton.addEventListener("click",()=>{

      if( current==="stopped"){
       timerStatus=window.setInterval(stopWatch,1000);
       document.getElementById("start").innerHTML="<i  id='hello'  class= 'fa-solid fa-pause' ></i>"
       current="start";
       document.getElementById("start").style.backgroundColor="yellow";

      }else{
        clearInterval(timerStatus);
        document.getElementById("start").innerHTML="<i class='fa-solid fa-play'></i>"
        current="stopped";
               document.getElementById("start").style.backgroundColor="green";

      }
})