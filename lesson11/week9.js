const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) { // temporary checking for valid response and data parsing
            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {


            let areas = document.createElement('section');
            let townName = document.createElement('h2');
            let photo = document.createElement('img');
            let townMotto = document.createElement('h4');
            let yearFounded = document.createElement('div');
            let currentPopulation = document.createElement('div');
            let averageRainfall = document.createElement('div');

            townName.textContent = towns[i].name;
            townMotto.textContent = towns[i].motto;
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
            averageRainfall.textContent = 'Average Rain Fall: ' + towns[i].averageRainfall;
            
            photo.setAttribute('src', towns[i].photo);
            photo.setAttribute('alt', towns[i].name);

            areas.appendChild(townName);
            areas.appendChild(townMotto);
            areas.appendChild(yearFounded);
            areas.appendChild(currentPopulation);
            areas.appendChild(averageRainfall);
            areas.appendChild(photo);

            document.querySelector('div.areas').appendChild(areas);


                }        }

    });