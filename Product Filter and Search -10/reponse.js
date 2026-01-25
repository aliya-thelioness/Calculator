//clothes
let products={
    data:[{
        price:"100",
        name: "Pink Sweater" ,
        category:"Sweaters",
        image:"istockphoto-1212499343-612x612.jpg"
    },
    {
        price:"200",
        name: "Black Top" ,
        category:"TopWear",
        image:"istockphoto-1750809582-612x612.jpg"
    },
    {
        price:"1000",
        name: "Blue Blazer" ,
        category:"Blazers",
        image:"istockphoto-1092378606-612x612.jpg"
    },
    {
        price:"500",
        name: "Black Shimmery Dress" ,
        category:"Dresses",
        image:"istockphoto-961849932-612x612.jpg"
    },
    {
        price:"600",
        name: "Red polka dots dress" ,
        category:"Dresses",
        image:"istockphoto-518355482-612x612.jpg"
    },
    {
        price:"500",
        name: "Yellow summer dress" ,
        category:"Dresses",
        image:"istockphoto-178851955-612x612.jpg"
    },
    {
        price:"200",
        name: "Fairy tiara" ,
        category:"Tiaras",
        image:"istockphoto-172419936-612x612.jpg"
    },
    {
        price:"600",
        name: "Brown overcoat" ,
        category:"Overcoats",
        image:"download.jpg"
    },


]
}
 const body=document.getElementById("clothes");
// function for clothes to be seen


// now the search bar

const submitBtn=document.getElementById("submit");
const inputBtn=document.getElementById("searchBar");


submitBtn.addEventListener("click",()=>{
body.style.display="block"

    let inputBtnToLower=inputBtn.value.toLowerCase();

    for(let a=0;a<products.data.length;a++){
         let cardy = body.children[a];
         

         
 if(products.data[a].name.toLowerCase().includes(inputBtnToLower))
{
    for(let w=0;w<buttons.length;w++){
          buttons[w].classList.remove("active");
    }
        cardy.style.display="block";

 }else{
    cardy.style.display="none";
}
    }
   
           
   
})



for(let i=0;i<products.data.length;i++ ){

 //main card
    const card=document.createElement("div");
//one holding the images
    const images=document.createElement("div");
//one with the product detials
    const details=document.createElement("div");

card.classList.add("card");
card.classList.add(products.data[i].category);

const image=document.createElement("img");
image.setAttribute("src", products.data[i].image);
images.classList.add("image-photo")
image.classList.add("main-image")
images.appendChild(image);
card.appendChild(images);

const productNames=document.createElement("h5");
const productPrices=document.createElement("h6");
 productNames.innerText=products.data[i].name;
 productPrices.innerText="$"+products.data[i].price;

 details.appendChild(productNames);
details.appendChild(productPrices);
details.classList.add("details")
 card.appendChild(details);

 body.appendChild(card);
}



//buttons clicked remains purple

const buttons=document.getElementsByClassName("buttonValue");
  
for(let k=0;k<buttons.length;k++){
    
    buttons[k].addEventListener("click",()=>{
          
           for(let j=0;j<buttons.length;j++){
              buttons[j].classList.remove("active");
           }
         
           inputBtn.value="";
            buttons[k].classList.add("active");

            //when all is pressed the clothes all of them should show 
            
         if(k===0){
body.style.display="block"
for (let i = 0; i < body.children.length; i++) {
    body.children[i].style.display = "block";
} } 

else{for(let m=0;m<products.data.length;m++){
    let cardy = body.children[m];
    if(buttons[k].innerText.toLowerCase().replace(/\s/g, "") ===
  products.data[m].category.toLowerCase().replace(/\s/g, "")){
 body.style.display="block"
 cardy.style.display="block";
}
 else{
    
    cardy.style.display="none";} 
    
}
 
        } } )}

  /*
        <<<<PROBLEMS IN THIS PAGE>>>>

        1.WHEN THE OAGE JUST LOADED AND THE ALL IS NOT YET PRESSED THE SEARCH BUTTON ALSO DOESNT WORK=>done

        2.THE BUTTONS EXCEPT ALL DONT WORK =>done

        3.The other buttons before the all is pressed, if there are pressed it should show=>done

        4.when we type a specific category the highlight of the button should also go on that.=>didnt do that but removed highlight from all buttons when anything is typed.-

        5.when we open a specific button after typing the value of the searchBar should become empty again.=>done


        */