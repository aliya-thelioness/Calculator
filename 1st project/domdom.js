
const br=document.querySelector("br");

const para=document.querySelector("#pp");

const newQuotes=['"The journey of a thousand miles begins with one step"  <br><br><br>  -LAO TZU','"The best way to find yourself is to lose yourself in the service of others"   <br> <br><br>  -MAHATMA GANDHI','" At his best, man is the noblest of all animals, seperated from law and justice he is the worst."   <br><br>  <br>   -ARISTOTLE','"Remember sometimes not getting what you want is the best stroke of luck" <br> <br><br>  - DALAI LAMA', '"If you want to live a happy life, tie it to the goal, not the people or things"  <br><br> <br>  - ALBERT EINSTEIN','“Be yourself; everyone else is already taken.” <br><br><br>― Oscar Wilde','“So many books, so little time.”<br><br><br>― Frank Zappa','“You only live once, but if you do it right, once is enough.”<br><br><br>― Mae West' ,'“In three words I can sum up everything I have learned about life: it goes on.”<br><br><br>― Robert Frost','"All that glitters is not gold."<br><br><br>	-William Shakespeare', '"If you want to shine like a sun, first burn like a sun."<br><br><br>- A. P. J. Abdul Kalam','"A Hindu is interested in the welfare of all: not merely humans, but all living beings."  <br<br><br> -Yogi Adityanath']



const newQuotesFunction=function(){

const randomQuote=Math.floor(Math.random()*newQuotes.length)
para.innerHTML=newQuotes[randomQuote];}


console.log(newQuotes[11]);


document.querySelector("#button").addEventListener("click",newQuotesFunction);

