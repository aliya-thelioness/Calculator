//final js code

//when the next Arrow is pressed then the image src changes and the image source which should be stored in an array moves to the next number.

//the previous arrow will move the i back by 1 and if i=0 then it wont move

//variables

const arrowPrev=document.querySelector("#arrowLeft");
const arrowNext=document.querySelector("#arrowRight");

const imager=document.querySelector("#image");

const srcCode=["moonhoneytravel_hochalpenkopf_prags-5-1024x682.jpg","taj-mahal-main-view-on-260nw-2378053017.webp","images.jpg","eiffel-tower-paris.jpg"];
const circ1=document.querySelector("#ccir");
const circ2=document.querySelector("#cccir");
const circ3=document.querySelector("#ccccir");
const circ4=document.querySelector("#cccccir");

const circles=[circ1,circ2,circ3,circ4];
let i=0;

imager.src = srcCode[i];
highlight();


//funtions 

function nextFun(){
    //if the next arrow s clicked then the src for the image===i++;
  
    i++;
    if(i>=srcCode.length){
        i=0;
      
    }
     imager.src=srcCode[i];
 highlight();
}





//every time we press the previous button the srcCode i goes back by 1 and if the i=0 then it just doesnt go back anymore
 function prevFun()
{
    
       i--;

    
     if(i<0){
        i=srcCode.length-1;
    }
           imager.src=srcCode[i];
 highlight();

}

arrowNext.addEventListener("click",nextFun);
arrowPrev.addEventListener("click",prevFun);


//now if 1 circle is coloured the other one should be in an outline

//neat code for the circle thingy

//everytime we run the code in a for loop the present i should have a purple color and a new class of fa-solid whereas the others shouldnt so we can set the code to reset eveytime then we can add a special class to the one slected 

function highlight(){
   

circles.forEach((o)=>{
    o.classList.remove("fa-solid");
    o.classList.add("fa-regular");
    o.style.color="black"
})

circles[i].classList.add("fa-solid");
circles[i].classList.remove("fa-regular");
circles[i].style.color="purple";
    }


//WHen the circle 1 is clicked it should go to the first image and when 2 is pressed it should go to the second image and so on...
for(let j=0; j<circles.length;j++){
    circles[j].addEventListener("click",()=>{
    //i is equal to the value of the circles[i] on the array
i=j;
     
    imager.src=srcCode[j];
highlight();

})
}
