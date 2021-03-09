const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c6de52252b8d907f2b675bd79cb5cd2b&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('current').textContent = jsObject.weather.description;
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('high-temp').textContent = jsObject.main.temp_max;
        document.getElementById('wind-speed').textContent = jsObject.wind.speed;
        document.getElementById('wind-chill').textContent = jsObject.main.feels_like;
        document.getElementById('humid').textContent = jsObject.main.humidity;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'
        const desc = jsObject.weather[0].description;

        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);

    });