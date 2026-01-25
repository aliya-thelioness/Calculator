//QUOTES GENERATOR
//quotes array storage


const newQuotes=['"The journey of a thousand miles begins with one step"  <br><br><br>  -LAO TZU','"The best way to find yourself is to lose yourself in the service of others"   <br> <br><br>  -MAHATMA GANDHI','" At his best, man is the noblest of all animals, seperated from law and justice he is the worst."   <br><br>  <br>   -ARISTOTLE','"Remember sometimes not getting what you want is the best stroke of luck" <br> <br><br>  - DALAI LAMA', '"If you want to live a happy life, tie it to the goal, not the people or things"  <br><br> <br>  - ALBERT EINSTEIN','“Be yourself; everyone else is already taken.” <br><br><br>― Oscar Wilde','“So many books, so little time.”<br><br><br>― Frank Zappa','“You only live once, but if you do it right, once is enough.”<br><br><br>― Mae West' ,'“In three words I can sum up everything I have learned about life: it goes on.”<br><br><br> ― Robert Frost','"All that glitters is not gold."<br><br><br>	-William Shakespeare', '"If you want to shine like a sun, first burn like a sun."<br><br><br>- A. P. J. Abdul Kalam','"A Hindu is interested in the welfare of all: not merely humans, but all living beings."  <BR><BR><br<br><br> -Yogi Adityanath']



//variables

const bodyy=document.body;
const newDiv=document.querySelector(".extraCont");
const closeBtn=document.getElementById("closed");
const containerDiv=document.getElementById("container");

//buttons
const newbuttoms=document.createElement("div");
const firstTwo=document.querySelector(".start");
const lastTwo=document.querySelector(".end");
const btnQuote=document.querySelector(".quote");
const btnMeme=document.querySelector(".meme");
const btnJoke=document.querySelector(".joke");
const btnRiddle=document.querySelector(".riddle");
const btnAll=document.querySelectorAll("button");

//designFunction

function designFunction(){
    containerDiv.style.alignItems="flex-start";
containerDiv.style.marginLeft="1rem"
newDiv.classList.add("newDesign");

}




//if closeBtn is pressed

closeBtn.addEventListener(
    "click",()=>{
newDiv.innerText="";
containerDiv.style.alignItems="center";
containerDiv.style.margin="0";
newDiv.classList.remove("newDesign");

    }
)


//to generate quotes

function newqQuotes(){
//to make a new quote show up every time

btnAll.forEach(btn=>{
    btn.style.margin=0;

})


let newQuotePara=document.createElement("p");
newQuotePara.classList.add("quoteGen")
newDiv.append(newQuotePara);

   
            newQuotePara.innerHTML=newQuotes[Math.floor(Math.random()*newQuotes.length)];
designFunction()
}



btnQuote.addEventListener("click",() =>{
newDiv.innerText="";
    newqQuotes()
  
   

} )



//meme GENERATOR

const memes=[
    "memes/download.jpg",
    "memes/hngbf.jpg",
    "memes/jnhbgfvd.jpg",
    "memes/mjnhbgfv.jpg",
    "memes/myuntybfd.jpg",
    "memes/nbgdf.jpg",
    "memes/tnbgf.jpg",
    "memes/yjutr.jpg"
];

//to generate memes

function newMemes(){
//to make a new quote show up every time
designFunction()
btnAll.forEach(btn=>{
    btn.style.margin=0;

})


let newMeme=document.createElement("img");
newMeme.classList.add("memesNewImg");
newMeme.style.height="13rem";
newMeme.setAttribute("src",memes[Math.floor(Math.random()*memes.length)])
newDiv.append(newMeme);

   

}



btnMeme.addEventListener("click",() =>{
newDiv.innerHTML="";
    newMemes()
} )



//JOKE GENERATOR

const jokes=[
   " Why don't scientists trust atoms? Because they make up everything!","I tried to sue the airport for misplacing my luggage. I lost my case.","I found a lion in my closet the other day! When I asked what it was doing there, it said “Narnia business.”","Why was six afraid of seven? Because 7-8-9.","How do you organize a space party? You planet.","Where do young trees go to learn? Elementree school.","Why wasn’t the cactus invited to hang out with the mushrooms? He wasn’t a fungi.","President Lincoln was approached by a woman after a political speech… If you were my husband I would poison your tea. Lincoln replied...if you are my wife I’ll gladly drink it.","My friend thinks he is smart. He told me an onion is the only food that makes you cry, so I threw a coconut at his face."
]


//to generate jokes.

function newJokes(){
//to make a new quote show up every time
designFunction()
btnAll.forEach(btn=>{
    btn.style.margin=0;

})


let newJoke=document.createElement("p");
newJoke.classList.add("newJokesTime");
newDiv.append(newJoke);
 newJoke.innerHTML=jokes[Math.floor(Math.random()*jokes.length)];

   

}



btnJoke.addEventListener("click",() =>{
newDiv.innerHTML="";
    newJokes()
} )


//riddle Geneartor
//to do=> then amke a div theta says when u hover over here it shows answer only after the riddle me is clied the div that can hobver will show to give answerrr....

const riddles=[
{Q: "I love to dance and twist. I shake my tail as I sail away. When I fly wingless into the sky. What am I?",
A: "A kite"},

{Q: "A man goes out for a walk during a storm with nothing to protect him from the rain. He doesn’t have a hat, a hood or an umbrella. But by the end of his walk, there isn’t a single wet hair on his head. Why doesn’t the man have wet hair?",
A: "He’s bald."},

{Q: "What goes through cities and fields, but never moves?",
A: "A road."},

{ Q: "In a bus, there is a 26-year-old pregnant lady, a 30-year-old policeman, a 52-year-old random woman, and the driver who is 65 years old. Who is the youngest?",
A: "The baby of the pregnant lady."
},

{ Q: "What invention lets you look right through a wall?",
 A: "A window."
},

{ Q: "Two girls were born to the same mother, on the same day, at the same time, in the same month and year, and yet they're not twins. How can this be?",
   A: "The two babies are two of a set of triplets."},

 {Q: "What do you buy to eat but never consume?",
    A: "Cutlery."}

]


//to generate riddles.

function newRiddles(){
//to make a new quote show up every time
designFunction()
btnAll.forEach(btn=>{
    btn.style.margin=0;

})

let randomVar=Math.floor(Math.random()*riddles.length);
let newRiddle=document.createElement("p");
newRiddle.classList.add("newRiddlesTime");
newDiv.append(newRiddle);
 newRiddle.innerHTML=riddles[randomVar].Q;

 let newBtnRiddle=document.createElement("button");
 newDiv.append(newBtnRiddle);
 newBtnRiddle.innerText="Click me to find the answer";
 newBtnRiddle.classList.add("newBtnRiddle");

 newBtnRiddle.addEventListener("click",()=>{
     newBtnRiddle.innerText="";
     newBtnRiddle.innerText=riddles[randomVar].A;

 })
   


}



btnRiddle.addEventListener("click",() =>{
newDiv.innerHTML="";
    newRiddles()
} )