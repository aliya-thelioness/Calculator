//api key=> 4bc17c349c75f53b989b1c95ec66b02f
//4bc17c349c75f53b989b1c95ec66b02f

//whatever country is typed and then search button is pressed then the country should be put in the cityName variable and then the api can be run and then whatever weather realted details we needwe can just use normal api with the city name enetered for all the details.


//variables

const countryEntered=document.getElementById("citySearch");
const btnSubmit=document.getElementById("icon");
const main2=document.getElementById("main2");
const mainDiv=document.getElementById("main");
let cityName="";
const body=document.getElementsByTagName("body")
const mainMain=document.getElementById("mainmain");

//function

async function finalResulty (){
    
  try{

        const dataCountries=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4bc17c349c75f53b989b1c95ec66b02f`);

        const fixedDataCountreis= await dataCountries.json();

        if(fixedDataCountreis.cod==="404" ){
          mainMain.innerHTML=`
    <img src="search-city.png" alt="Searching" width="300px" height="180px" id="imager">
    <h3 id="h3"> Search City</h3>
    <p id="para">Find out the weather conditions of the sky</p>
    </div>`
const welcomePgImg=document.getElementById("imager");

welcomePgImg.removeAttribute("src");
welcomePgImg.setAttribute("src","not-found.png")
return;


}

const today = new Date();
let dateString = today.toDateString()

        //city name and date shown at top
        const main3=document.createElement("div");
        mainMain.append(main3);
        const newH3=document.createElement("p");

        newH3.innerText= `   ${fixedDataCountreis.name}`;
        newH3.classList.add("newh3")
        main3.append(newH3);
        
const imgCountry=document.createElement("span");
    imgCountry.classList.add("material-symbols-outlined")

        imgCountry.innerText=`location_on`;
      
  newH3.prepend(imgCountry);

        const newh4=document.createElement("p");
        newh4.innerText=dateString;
        main3.append(newh4);

        main3.classList.add("main3Div");
       
      
       
   
        //image
        const main4=document.createElement("div");
        mainMain.append(main4);
        

        let icon=fixedDataCountreis.weather[0].icon;
        const newWeatherimg=document.createElement("img");
        newWeatherimg.setAttribute("src",`https://openweathermap.org/img/wn/${icon}@2x.png`)
        newWeatherimg.setAttribute("width",`200px`)
        main4.append(newWeatherimg);

        //temp
        const mainChild4=document.createElement("div");
        main4.append(mainChild4);
        const newspan=document.createElement("span")
        newspan.innerText=`${Math.round(fixedDataCountreis.main.temp-273.15  )} °C`
        mainChild4.append(newspan)
        mainChild4.classList.add("mainChild4")
        main4.classList.add("main4Div");
    
        //main weather description
        const weatheris=document.createElement("span")
        mainChild4.append(weatheris)
        weatheris.innerText=fixedDataCountreis.weather[0].main;



        //humidity
        const main5=document.createElement("div");
        mainMain.append(main5);
main5.classList.add("main5Div")
        const mainChild5=document.createElement("div");
        main5.append(mainChild5);
        
        const imgHumid=document.createElement("span");
        imgHumid.classList.add("material-symbols-outlined")
        imgHumid.innerText=`water_drop`
        mainChild5.append(imgHumid);

        const humidity=document.createElement("span");
        humidity.innerText="Humidity";
        const percentData=document.createElement("span");
        percentData.innerText=`${fixedDataCountreis.main.humidity}% `;

        mainChild5.append(humidity);
        mainChild5.append(percentData);
        mainChild5.classList.add("mainChild5")

        //wind speed
          const mainChild25=document.createElement("div");
          mainChild25.classList.add("mainChild25")
          main5.append(mainChild25)

const imgWind=document.createElement("span");
imgWind.classList.add("material-symbols-outlined")
        imgWind.innerText=`air`;
        mainChild25.append(imgWind);

        const windSpeed=document.createElement("span");
        windSpeed.innerText=`Wind Speed`;
          const windSppedData=document.createElement("span");
        windSppedData.innerText=` ${fixedDataCountreis.wind.speed} M/s`;
        mainChild25.append(windSpeed);
        mainChild25.append(windSppedData);
       
      
       
  }
  catch(err){
console.log("there is an error",err)
  }
}


//click event


    let oldCityName;

btnSubmit.addEventListener("click",()=>{



 if(countryEntered.value!==""){
        
    cityName=countryEntered.value;
        if(oldCityName===cityName){
        return;
        }


    mainMain.innerHTML="";
    finalResulty();
    oldCityName=cityName;
    return;
}
else{
    return;
  }

 
})



