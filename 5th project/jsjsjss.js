
// when we press the add button the text that is written in the para id box has to be added to anohter div and it should have 2 buttons the tick mark button and the delete button

// if the btnCheck is clicked then draw a line across  all the text and if the btnRemove if clicked then the div display:none

//if no task is entered then an alert of pls enter task will show


//variables

const addBtn=document.querySelector("#plus");
const paragraph=document.querySelector("#para");
let newText="";
const parent=document.querySelector("#div");



//function

function tasks(){




if(paragraph.value===""){
    alert("PLEASE ENTER TASK");

}else{
newText=paragraph.value;

//make a new div with the innewText aka the newText

const newy= document.createElement("div");
parent.append(newy);
newy.innerText=newText;

newy.classList.add("classList");

//creating the buttons for the checkboxes 
const btnRemove=document.createElement("button");
const btnCheck=document.createElement("button");

btnCheck.innerHTML="<i class='fa-solid fa-check'></i>";
btnRemove.innerHTML="<i class='fa-solid fa-trash-can'></i>"

newy.append(btnCheck);
newy.append(btnRemove);

btnCheck.classList.add("btnCheck");
btnRemove.classList.add("btnRemove");

btnCheck.addEventListener("click",()=>{
    //draw a line through the text shown
    newy.style.textDecoration="line-through";
})

btnRemove.addEventListener("click",()=>{
    //display:none
newy.remove();
})
}

paragraph.value="";

}



addBtn.addEventListener("click",tasks)




