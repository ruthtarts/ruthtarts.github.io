const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c6de52252b8d907f2b675bd79cb5cd2b&units=imperial";


fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);


        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let d1 = new Date(jsObject.list[6].dt * 1000);
        let d2 = new Date(jsObject.list[12].dt * 1000);
        let d3 = new Date(jsObject.list[18].dt * 1000);
        let d4 = new Date(jsObject.list[24].dt * 1000);
        let d5 = new Date(jsObject.list[30].dt * 1000);

        let dayName1 = days[d1.getDay()];
        let dayName2 = days[d2.getDay()];
        let dayName3 = days[d3.getDay()];
        let dayName4 = days[d4.getDay()];
        let dayName5 = days[d5.getDay()];

        document.getElementById('dayOfWeek1').textContent = dayName1;
        document.getElementById('dayOfWeek2').textContent = dayName2;
        document.getElementById('dayOfWeek3').textContent = dayName3;
        document.getElementById('dayOfWeek4').textContent = dayName4;
        document.getElementById('dayOfWeek5').textContent = dayName5;

        document.getElementById('temp1').textContent = jsObject.list[6].main.temp;
        document.getElementById('temp2').textContent = jsObject.list[12].main.temp;
        document.getElementById('temp3').textContent = jsObject.list[18].main.temp;
        document.getElementById('temp4').textContent = jsObject.list[24].main.temp;
        document.getElementById('temp5').textContent = jsObject.list[30].main.temp;


        const imagesrc1 = 'https://openweathermap.org/img/w/' + jsObject.list[6].weather[0].icon + '.png';
        const desc = jsObject.list[6].weather[0].main;

        const imagesrc2 = 'https://openweathermap.org/img/w/' + jsObject.list[7].weather[0].icon + '.png';
        const desc = jsObject.list[7].weather[0].main;

        const imagesrc3 = 'https://openweathermap.org/img/w/' + jsObject.list[8].weather[0].icon + '.png';
        const desc = jsObject.list[8].weather[0].main;

        const imagesrc4 = 'https://openweathermap.org/img/w/' + jsObject.list[9].weather[0].icon + '.png';
        const desc = jsObject.list[9].weather[0].main;

        const imagesrc5 = 'https://openweathermap.org/img/w/' + jsObject.list[10].weather[0].icon + '.png';
        const desc = jsObject.list[10].weather[0].main;


        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc); 

    });

