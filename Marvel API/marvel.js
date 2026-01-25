//from the marvel api get all the character names and make them as options in the select dropdown to choose from then if any of them is clicked get their photo to show, their name to display and a paragraph to get info on them

//variables

const dropDown=document.getElementById("charcs");
const btnSbmit=document.getElementById("search");
//each indiviual character
const mainDiv=document.getElementById("main");
const detts=document.getElementById("dets");
const imageOfHero=document.getElementById("imager");
const textOfHero=document.getElementById("name");
const paraDetails=document.getElementById("detailsBoutChars");
    let characters=[];

async function characterNames (){
    try{
  const charNames= await fetch("https://api.disneyapi.dev/character")
   const newData=  await charNames.json();
        characters=newData.data;

   newData.data.forEach(i => {
      
    let dropdownOption=document.createElement("option");
    dropdownOption.innerText=i.name;
    dropDown.append(dropdownOption);
    dropdownOption.setAttribute("value",i.name);

   });

    }
    catch(err){
       console.log("there is an error",err)
    }

}

characterNames();

    function picDetailsFinder(){

for(let i=0;i<characters.length;i++){
    if( dropDown.value===characters[i].name){
imageOfHero.setAttribute("src",characters[i].imageUrl);
paraDetails.innerText= `its a amazing character who has done ${characters[i].films} ${characters[i].shortFilms} ${characters[i].tvShows}  ${characters[i].videoGames}`;
textOfHero.innerText=characters[i].name;
imageOfHero.setAttribute("width","200px")
imageOfHero.setAttribute("height","200px")
break;
    }
    
}
 }

btnSbmit.addEventListener("click",picDetailsFinder);

