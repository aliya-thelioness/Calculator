/* 
//boolean
let myBoolean;
myBoolean=true;
console.log(myBoolean);

//string

let myString="hello world"
console.log(myString)

//3

var firstNumber=20;
console.log(firstNumber);

//4
let secondNumber=40;
console.log(secondNumber);

//5

secondNumber=80;
console.log(secondNumber);

//6
let myArray=[myBoolean,myString]
console.log(myArray);

//7
let myObject={
    firstProperty:myArray,
    sumProperty:firstNumber+secondNumber
};
//8
console.log(myObject);

//9
console.log(myObject.sumProperty);

//10
console.log(myObject.firstProperty[1])
var body=document.getElementsByTagName("body");
//challenge 2
let newP=document.createElement("p");

body[0].appendChild(newP);

newP.innerText=`1.the const name should not have spaces and if it does it should be in quotes 
2.we cant redefine const variables
3.the second one is missing the semi-colon .`

//challenge 3
let newPP=document.createElement("p");

body[0].appendChild(newPP);

newPP.innerText=`WE CANT ADD STRINGS AND NUMBERS SO THE ANS WILL BE UNDEFINED EHICH IS OF THE DATA TYPE undefined`

//challenge 4
let newPPP=document.createElement("p");

body[0].appendChild(newPPP);

newPPP.innerText=`ITS INVLAID BECAUSE OBJECT KEYS DONT HAVE A SEMICOLON TO SEPARET IT FROM OTHER PROPERTIES BUT INSTEAD IT HAS COMMAS`

//challenge 5
let newPPPP=document.createElement("p");

body[0].appendChild(newPPPP);

newPPPP.innerText=`ITS INVLAID BECAUSE THERE ARE ONLY 2 VALUES IN THE ARRAY AND THERE IS NO THIRD VALUE`
 */

//challenge 1
//cause there is a const so va,ue wont chnage and the result would be 3

//challenge 2
//ther are the exact smae and the result would be false

//challenge 3
//50,2 , false, false and true,

//challenge 4
//true 

//challenge 5
//true

/* function removeChar(str){
let x=str.split("");
  var result=x.splice(1,str.length-2).join("");
  return result;

};

console.log(removeChar("hiiii")); */
/* 
function isValidWalk(walk) {
    var x=0;
  var y=0;
   for(var i=0;i<walk.length;i++){
     //north or south
     if(walk[i]==="n"){
        y++;
     }else if(walk[i]==="s"){
       y--;
     }
     //west or east
     if(walk[i]==="w"){
       x++;
     }else if(walk[i]==="e"){
       x--;
     }
   }
  if(x==0&&y==0&&walk.length===10){
    return true 
  }else{
    return false;
  }
}

console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) */

/* function persistence(num) {

let count = 0;
//if its a single digit num
  if(num<10){
  return 0;
}  
  while(num>=10){
  var result=1;
let digit=num.toString();

   for(var i=0;i<digit.length;i++){
     result*=parseInt(digit[i]);  
 
     }
     num=result;
     count++;
  }
 
  return result;
  
}

console.log(persistence(22)); */

function validatePIN (pin) {

   //number form checking
  if((/abcdef/ig).test(pin)){
    return false;
  } 
  
 //for - sign and dots
  if(/[.-]/.test(pin)){
    return false;
  }
  
  
  //length checking
  var digitis=pin.toString();
  
  
  if(digitis.length===4||digitis.length===6){
    return true;
  }else{
    return false;
  }
  
}
console.log(validatePIN());