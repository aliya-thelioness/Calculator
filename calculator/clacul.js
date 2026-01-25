
//variables

const numbersBtn=document.getElementsByClassName("numbers");

const resultSrcn=document.getElementById("result");
const clearAll=document.getElementById("cleary");
const clearLast=document.getElementById("clearyLast");

const operators=document.querySelectorAll(".operators")
const endResult=document.getElementById("toShow");
const firstResult=document.getElementById("firstResult");
const dotSign=document.getElementById("dot");
const percent=document.querySelector("#percentage");
let typingNum1=true;
let typingNum2=false;
    let num2;
    
let num1;
let shouldResetScreen =false;
 let isNewCalculation = false;

//functions



    

for(let i=0;i<numbersBtn.length;i++){        
       
    numbersBtn[i].addEventListener("click",()=>{

      if(resultSrcn.innerText.length>=15){
//make the resultsrc stay put and not accept more buttons numbers
return;

  }
        if(isNewCalculation){
            firstResult.innerText="";
             isNewCalculation = false;
        }
   
  if(shouldResetScreen===true){
    //move num1 and the operator used to the top of the screen then start typin again
    resultSrcn.innerText = numbersBtn[i].innerText;  // ✅ REPLACE
    shouldResetScreen = false;   
      

  }else{


           if (resultSrcn.innerText==="0"){
                firstResult.innerText="";

              resultSrcn.innerText=numbersBtn[i].innerText;
             }
             
             else {
               resultSrcn.innerText+=numbersBtn[i].innerText;
                }
  }
     
   
    
    
     
maxlength();
        })
    
}




  clearLast.addEventListener("click",()=>{
    
         if(resultSrcn.innerText==="0"){
            resultSrcn.innerText="0";
           
        }
             
        
        else{
           resultSrcn.innerText=resultSrcn.innerText.slice(0,-1);

        }
        if(resultSrcn.innerText===""){
        resultSrcn.innerText=0;
        //remove the tetx written above the result 
         firstResult.innerText="";
       }
       
        })


clearAll.addEventListener("click",()=>{
    resultSrcn.innerText="0";
    
    //the text abive becomes nothing.
    firstResult.innerText="";
    resultSrcn.style.fontSize="100px";
      num1 = undefined;
  num2 = undefined;
  operatorToUse = undefined;

  typingNum1 = true;
  typingNum2 = false;
  shouldResetScreen = false;
  isNewCalculation = false;
    
})


 
let operatorToUse;

 operators.forEach((btn, index) =>{
    
//before the opertaors are pressed 


    
    btn.addEventListener("click",()=>{
       if(resultSrcn.innerText.endsWith(".")){

     let newString= resultSrcn.innerText.slice(0,-1);
        resultSrcn.innerText=newString;
       
    } 
        if(typingNum1===true&&typingNum2===false){
   num1=resultSrcn.innerText;
  }
 
                   typingNum1=false;
             typingNum2=true;
             shouldResetScreen=true;
             

         switch(index){
        case 0:
            operatorToUse="/";
            break;
        case 1:
            operatorToUse="*";
            break;
        case 2:
            operatorToUse="-";
            break;
        case 3:
            operatorToUse="+";
            break;
        
        
    }
       firstResult.innerText =  `${num1} ${operatorToUse}`;

    })

}) 
//once the true and false is used whatever is typed after is num2 



endResult.addEventListener("click",()=>{
 if(resultSrcn.innerText.endsWith(".")){

     let newString= resultSrcn.innerText.slice(0,-1);
        resultSrcn.innerText=newString;
       
    } 
num2=resultSrcn.innerText;


    //to find out if both  numbers are typed or if only 1 of them is typed or what?


if(num1===undefined&&num2!==undefined){

  resultSrcn.innerText=num2;
  firstResult.innerText=`${num2} =`


}
else if(num1!==undefined&&num2===undefined){
 resultSrcn.innerText=num1;
  firstResult.innerText=`${num1} =`

}
else if(num1===undefined&&num2===undefined){
 resultSrcn.innerText=0;
  firstResult.innerText=`0 =`
}
else{
  firstResult.innerText=`${num1} ${operatorToUse} ${num2} =`;

    let ResultToShow=`${num1} ${operatorToUse} ${num2}`;
    let finnally=eval(ResultToShow);
    resultSrcn.innerText=Number(finnally.toFixed(5));
    console.log(num1,num2);
}

    maxlength();


             shouldResetScreen=true;
             
typingNum1=true;
typingNum2=false;
 isNewCalculation = true;
})


 


function maxlength(){
const maxChars = 8;   // how many digits before shrinking
  const length = resultSrcn.innerText.length;


    if( resultSrcn.style.fontSize==="35px"&&length>maxChars){
    resultSrcn.style.fontSize="35px";
    return;
   }

if(length<=maxChars){
    resultSrcn.style.fontSize="100px";
  }  
 

 else if(length>maxChars){
    resultSrcn.style.fontSize=`${80-(length-maxChars)*5}px`;
  }
    

 //when the 35 px is attained the zero we get after clearAll is still in 35 px fix that

  
}


//dot 

dotSign.addEventListener("click",()=>{

   if(isNewCalculation){
       
      resultSrcn.innerText="0.";
      firstResult.innerText="";
      isNewCalculation=false;
      typingNum1=true;
      typingNum2=false;
      return;
   }

       if(typingNum2&&shouldResetScreen === true){
            resultSrcn.innerText="0.";
            typingNum2=false;
            shouldResetScreen=false;
            return;
   }
    if(resultSrcn.innerText.includes(".")){
    return;

    } 
     resultSrcn.innerText+=".";
    

})

 
//the percent clicker

percent.addEventListener("click",()=>{

  if(typingNum1===false&&typingNum2===true){
    num2=resultSrcn.innerText;
  }
  
    //For + and −, % means “percentage of the first number”

  if(operatorToUse==="+"||operatorToUse==="-"){

     num2=Number(((num2/100)*num1).toFixed(1));
     //num2 got changed 
     resultSrcn.innerText=num2;
    firstResult.innerText=`${num1} ${operatorToUse} ${num2}`;
    return;
  }

  //For × and ÷, % behaves like “divide by 100”

  else if(operatorToUse==="*"||operatorToUse==="/"){

    num2=Number((num2/100).toFixed(1));
     resultSrcn.innerText=num2;
    firstResult.innerText=`${num1} ${operatorToUse} ${num2}`;
    return;
  }


  else if(num1===undefined||num2===undefined){

     resultSrcn.innerText="0";
     firstResult.innerText="0";
  }

  typingNum1=true;
  typingNum2=false;


})







/*
PROBLEMS OF THIS PAGE=>
    1. when the digits of a number increase the whole calculators width increases=> done

    2. It works fine the first time, but after that it justs doesnt reset the first number and the 1st number just becomes 0 permanently=>done

    3. after we press the first number, the screen shows 0 then the second number but it should keep the first number and when we start typing the second number it should remove the first one and continue with the second one=>done

    4. the first number plus the operator when we start typing the second number should shift up for easier visiblity =>done

    5. make it good evn for moblie phones with viewport meta tags and all=>done
 
    6. after erasing all the numbers one by one when we use de and erase the last numb, the resultsrc become blank and the whole calculator shrinks =>done

    7.after the result is shown and we start typing again it should start fresh and shouldnt be continued=>done

    8.if we press a number and then an operator then enter without pressing the second number, it should just copy the second number and give the the answer as the second number should be the same first number itself.=>done(it already works)

    9. the first div should go away when we write the new first number in and should be replaced by nothing till we press the operators=>done

    10. The dots are faulty.....=>done

    11. the percentage is not working good as in if there is a %sign then when there is something like 89+15% then it calculates 15% of 89 then gives the result on the screen as soon as % is clicked then when later the addition sign is clicked then it shows the asnwer of 102.35=>done

    12.when we press AC after an calculation then the words written above the reuslt should be removed also when the DE becomes 0 then remove the tetx above.=>done

    13. if there is only 1 number entered and the = sign is pressed show"num=" and the result screen should show the number itself.=>done

    14. the whole screen becomes smaller when a number is pressed and then it doesnt come back to original size until another number is pressed so make the size like the width and height of the claucltor constant so it doesnt move at all and only the result div can shrink or grow whatever.=>done

    15.when the 35 px is attained the zero we get after clearAll is still in 35 px fix that.


   =====PROBLEM WITH THE DOTS====

    1.WHEN I JUTS TYPE A DOT THEN I WRITE THE NUMBER THE DOT ISNT TAKEN WITH THAT NO AND THE NUMBER IS SEPERATELY TAKEN. (HAPPENS WHEN I PRESS AC AFTER A FUNCTION IS OVER...)=>done

    2.WHEN I TYPE A DOT AND NOTHING AFTER THE DOT THEN THE DOT STILL SHOWS BUT IN REALITY IT SHOULDNT SHOW IF I DINT ENTER ANYTHING AFTER THE DOT.=>done

    3. after doing an calculation id i want to start with a dot i should be able to =>done

    4.the second number after doing any calculation.
    its not coming back to 0. =>done
     its not showubg a oproper 0.=>done

    ===PROBLEMS WITH THE PERCENTAGE SIGN===

  1.when an percentage sign is used it instantly updates the firstResult innertext and the resultsrcn innerText..

  and then it performes its normal function like for instance if 

  3+60%=
  3+1.8=
  4.8==>DONE


  2.if we type a number and then press the percentage sign it shows 0 both on the first result and the resultsrcn.=>done

  3.MAKE IT A MULTI CALCULATOR....


*/




/*

Flag	Question it answers
typingNum1	“Am I typing the first number?”
typingNum2	“Am I typing the second number?”
shouldResetScreen	“Should the next input clear the screen first?”
isNewCalculation	“Did I just finish a calculation?”
*/

























