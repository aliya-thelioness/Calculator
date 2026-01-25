 //whenever someone types anything in the search bar the innertext of the search bar if it matches any word in the para that word or part of the word gets highlighted with a yellow color bright yellow bg.

//variables

const searchBar=document.getElementById("enter");
const submitBtn=document.getElementById("search");
const textPara=document.getElementById("mainText");

//functions

const originalText = textPara.innerText;

submitBtn.addEventListener("click",()=>{
 

const newWords=originalText.split(" ");

textPara.innerText="";
   

for(let i=0;i<newWords.length;i++){

    const newElement=document.createElement( "span");
textPara.append(newElement);
newElement.innerText=`${newWords[i]} `;

if(searchBar.value===""){
newElement.style.backgroundColor="white";

}
else{
    if(newWords[i].toLowerCase().includes(searchBar.value.toLowerCase())){


newElement.style.backgroundColor="yellow";

}else{

    newElement.style.backgroundColor="white";

}
}


}
})


