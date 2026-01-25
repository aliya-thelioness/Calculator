
const var1= document.getElementsByClassName("hihi");

const var2=document.getElementsByClassName("ann"); 


 for(let i=0;i<var2.length;i++){
    
var2[i].addEventListener("click",()=>{
   if(var1[i].style.display==="none"){   var1[i].style.display="block";
}else {
       var1[i].style.display="none";

}

    }
    
    )   
 }


 