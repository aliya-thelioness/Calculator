//variables

let randomNo=Math.floor(Math.random()*100)+1;

const guessedNumber=document.getElementById("number");

const button=document.getElementById("Guess");

const noOfGuesses=document.getElementById("guessesNo");

const numbersGuessed=document.getElementById("GuessedNumb");

const inCaseOfWin=document.getElementById("secondOne");

const texty=document.getElementById("texty");

const firstOne=document.getElementById("firstOne");

const restartButoton=document.getElementById("restart");

let noOfGuessesAgain=0;

let noGuessedAgain=[];

console.log(randomNo);
 const newDiv=document.createElement("div");
  firstOne.append(newDiv);
//function





button.addEventListener("click",()=>{
   
     newDiv.style.display="block";

    if( Number(guessedNumber.value)===randomNo){
        
        //the screen chnages as in the other part of the div comes into display
        texty.innerHTML=`Congratulations! <br> The number was ${guessedNumber.value}<br>You guessed the number in ${noOfGuesses.innerText} tries.`;
firstOne.style.display="none";
        inCaseOfWin.style.display="block";
         noOfGuessesAgain=0;
    noGuessedAgain="None";
    noOfGuesses.innerText=noOfGuessesAgain;
numbersGuessed.innerText=noGuessedAgain;

    }

    else{


noOfGuessesAgain++;
//add the no guessed tothe array of already existing so later when we print it out the whole list prints 
noGuessedAgain.push(guessedNumber.value);

//mkae the band disappear when another band pops up
if(Number(guessedNumber.value)>randomNo){
  newDiv.innerText="";
   
    newDiv.innerText="Too High. Try again!"
    newDiv.style.backgroundColor="red";
    newDiv.style.padding="10px";


}else if(Number(guessedNumber.value)<randomNo){
    
     newDiv.innerText="";
         newDiv.innerText="Too Low. Try again!"
    newDiv.style.backgroundColor="red";
    newDiv.style.padding="10px";

   
    
}


//till here 

//print the no of guessses n the numers tried
noOfGuesses.innerText=noOfGuessesAgain;
numbersGuessed.innerText=noGuessedAgain;

 

}

    
})
restartButoton.addEventListener("click",()=>{

    noOfGuessesAgain=0;
noGuessedAgain=[];
inCaseOfWin.style.display="none";
firstOne.style.display="block";
randomNo=Math.floor(Math.random()*100)+1;
console.log(randomNo);
guessedNumber.value="";
     newDiv.style.display="none";


})


