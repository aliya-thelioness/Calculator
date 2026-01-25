 
const numb01=document.getElementById("numberFirst");
const numb12=document.getElementById("numberSecond");


const resultSeen=document.getElementById("result");
 const buttons=document.querySelectorAll(".buttonsId");

 //buttons[0]=>num1+num2
 //buttons[1]=>num1*num2
 //buttons[2]=>num1/num2
 //buttons[3]=>num1-num2


 buttons.forEach((btn, index) => {
   

    btn.addEventListener("click",()=>{
        let answer;

let numb1=+numb01.value;
let numb2=+numb12.value; 
switch(index){
        case 0:
            answer=numb1+numb2;
            break;
        case 1:
            answer=numb1*numb2;
            break;
        case 2:
            answer=numb1/numb2;
            break;
        case 3:
        answer=numb1-numb2;
        break;
    }
    resultSeen.innerText=answer;
    })
    





});

 