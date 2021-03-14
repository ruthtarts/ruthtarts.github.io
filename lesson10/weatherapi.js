const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c6de52252b8d907f2b675bd79cb5cd2b&units=imperial";
const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c6de52252b8d907f2b675bd79cb5cd2b&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('current-cond').textContent = jsObject.weather[0].description;
        document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('high-temp').textContent = Math.round(jsObject.main.temp_max);
        document.getElementById('wind-speed').textContent = Math.round(jsObject.wind.speed);
        document.getElementById('wind-chill').textContent = Math.round(jsObject.main.feels_like);
        document.getElementById('humid').textContent = Math.round(jsObject.main.humidity);
    });

    fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);

        //Display icon

        let img1 = 'https://openweathermap.org/img/w/' + jsObject.list[1].weather[0].icon + '.png';        
        let desc1 = jsObject.list[1].weather[0].description;        
        let img2 = 'https://openweathermap.org/img/w/' + jsObject.list[2].weather[0].icon + '.png';        
        let desc2 = jsObject.list[2].weather[0].description; 
        let img3 = 'https://openweathermap.org/img/w/' + jsObject.list[3].weather[0].icon + '.png';        
        let desc3 = jsObject.list[3].weather[0].description; 
        let img4 = 'https://openweathermap.org/img/w/' + jsObject.list[4].weather[0].icon + '.png';        
        let desc4 = jsObject.list[4].weather[0].description; 
        let img5 = 'https://openweathermap.org/img/w/' + jsObject.list[5].weather[0].icon + '.png';        
        let desc5 = jsObject.list[5].weather[0].description; 


        document.getElementById('icon1').setAttribute('src', img1);               
        document.getElementById('icon1').setAttribute('alt', desc1);   
        document.getElementById('icon2').setAttribute('src', img2);               
        document.getElementById('icon2').setAttribute('alt', desc2); 
        document.getElementById('icon3').setAttribute('src', img3);               
        document.getElementById('icon3').setAttribute('alt', desc3); 
        document.getElementById('icon4').setAttribute('src', img4);               
        document.getElementById('icon4').setAttribute('alt', desc4); 
        document.getElementById('icon5').setAttribute('src', img5);               
        document.getElementById('icon5').setAttribute('alt', desc5); 

      //Display days  

      const daylist = ["Sun", "Mon",  "Tue", "Wed", "Thu", "Fri", "Sat"];
      let date1 = new Date(jsObject.list[1].dt_txt);
      let date2 = new Date(jsObject.list[2].dt_txt);
      let date3 = new Date(jsObject.list[3].dt_txt);
      let date4 = new Date(jsObject.list[4].dt_txt);
      let date5 = new Date(jsObject.list[5].dt_txt);
      let day1 = date1.getDay();
      let day2 = date2.getDay();
      let day3 = date3.getDay();
      let day4 = date4.getDay();
      let day5 = date5.getDay();
  
          document.getElementById('day1').textContent = daylist[day1];
          document.getElementById('day2').textContent = daylist[day2];
          document.getElementById('day3').textContent = daylist[day3];
          document.getElementById('day4').textContent = daylist[day4];
          document.getElementById('day5').textContent = daylist[day5];

        //Display temp

        document.getElementById('temp1').textContent = Math.round(jsObject.list[1].main.temp);
        document.getElementById('temp2').textContent = Math.round(jsObject.list[2].main.temp);
        document.getElementById('temp3').textContent = Math.round(jsObject.list[3].main.temp);
        document.getElementById('temp4').textContent = Math.round(jsObject.list[4].main.temp);
        document.getElementById('temp5').textContent = Math.round(jsObject.list[5].main.temp);



        });
   