const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=43.47804337724305&lon=-111.96364125055808&exclude=hourly,minutely&appid=c6de52252b8d907f2b675bd79cb5cd2b&units=imperial";


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('current-cond').textContent = jsObject.current.weather;
        document.getElementById('current-temp').textContent = Math.round(jsObject.current.temp);
        document.getElementById('humid').textContent = Math.round(jsObject.current.humidity);

        let zero = 0;
        for (let i = 0; zero < 3; i++) { // temporary checking for valid response and data parsing

            let daylist = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            let date = new Date(jsObject.daily.dt);
            let day = date.getDay();

            document.getElementById(`day` + zero).textContent = daylist[day];
            document.getElementById(`temp` + zero).textContent = Math.round(jsObject.daily[i].temp.day);
        }


    });