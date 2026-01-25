const var4=document.querySelector("#idid")

const var1= document.getElementById("div");
document.getElementById("idid").addEventListener("click",()=>{var1.style.display="block";
    var1.style.top="50%";
}
);
const var3=document.querySelector("#para");
const var2=document.getElementById("pa");
var2.addEventListener("click",()=>{var1.style.display="none"});

// if we click anywhere also it closes the event listener 
// if e.target!== the element with the #para then the display won't show else the display with be block or inline whatever 

document.addEventListener("click",(e)=>{
    if(e.target!==var3&&e.target!==var4){
    var1.style.display="none";
    }
})