//if the next arrow button is pressed it s=goes to te next image

//variables

const arrowPrev=document.querySelector("#arrowLeft");
const arrowNext=document.querySelector("#arrowRight");
const circ1=document.querySelector("#ccir");
const circ2=document.querySelector("#cccir");
const circ3=document.querySelector("#ccccir");
const circ4=document.querySelector("#cccccir");
const imager=document.querySelector("#images");
let i=1;
imager.src = imagesData[i];
const imagesData=["moonhoneytravel_hochalpenkopf_prags-5-1024x682.jpg","taj-mahal-main-view-on-260nw-2378053017.webp","images.jpg","eiffel-tower-paris.jpg"];

//addEventListener for the arrows
//nextArrow

arrowNext.addEventListener("click",()=>{
    i++;
if(i<imagesData.length){
imager.src=imagesData[i];

}else if(i===imagesData.length){
    i=0;
}

})

//previousArrow
// if the previous arrow is pressed then the photo goes to the previous one and if the i=0 then just make it not go more back 

arrowPrev.addEventListener("click",()=>{
   if(i!==0){imager.src=imagesData[i-1];} 
   else if(i===0){
imager.src=imagesData[0];
   }
})

//when the circle is clicked it should go to that image like if circ1 is clicked then it should go to imageData[1]and so on

circ1.addEventListener("click",
    ()=>{
    //go to imageDtat[0]
    i=0;
    imager.src=imagesData[i];
})
circ2.addEventListener("click",()=>{
    //go to imageDtat[1]
    i=1;
    imager.src=imagesData[i];
})
circ3.addEventListener("click",()=>{
    //go to imageDtat[2]
    i=2;
    imager.src=imagesData[i]
})
circ4.addEventListener("click",()=>{
    //go to imageDtat[2]
    i=3;
    imager.src=imagesData[i];
})




