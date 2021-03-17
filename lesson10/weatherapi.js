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
        console.table(jsObject);


        const list = jsObject['list'];
        let zero = 0;

        for (let i = 0; zero < 5; i++) { // temporary checking for valid response and data parsing
            if (list[i].dt_txt.includes("18:00:00")) {
                zero++;

                let daylist = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                let date = new Date(list[i].dt_txt);
                let day = date.getDay();
                let image = 'https://openweathermap.org/img/w/' + list[i].weather[0].icon + '.png';
                let desc = list[i].weather[0].description; 
            
                document.getElementById(`day` + zero).textContent = daylist[day];
                document.getElementById(`temp` + zero).textContent = Math.round(list[i].main.temp);
                document.getElementById(`icon` + zero).setAttribute('src', image);
                document.getElementById(`icon` + zero).setAttribute('alt', desc);
              }
            }
    
    });