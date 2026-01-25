//when any key is prssed then innertext of the div with id-#main is going to change to The Key Pressed Is \n the key that is pressed 

const mainy=document.getElementById("mainy");
const key=document.getElementById("keyWord");
const key2=document.getElementById("key");
const key3=document.getElementById("keyKey");
const section=document.getElementById("section");

document.addEventListener("keydown",(e)=>{
    section.style.display="block";
key.textContent="The key that was pressed:";
key2.textContent=e.key.toUpperCase();
key3.textContent=`Keycode:${e.keyCode}`
mainy.style.display="none";
    // main.innerHTML =`${key.textContent}  <br><BR> ${key2.textContent} <br><br>${key3.textContent}`


})