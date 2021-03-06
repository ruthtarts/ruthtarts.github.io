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


            let area = document.createElement('section');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let photo = document.createElement('img');
            let townMotto = document.createElement('h4');
            let yearFounded = document.createElement('div');
            let currentPopulation = document.createElement('div');
            let averageRainfall = document.createElement('div');

            h2.textContent = towns[i].name;
            townMotto.textContent = towns[i].motto;
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
            averageRainfall.textContent = 'Average Rain Fall: ' + towns[i].averageRainfall;
            
            photo.setAttribute('src', towns[i].photo);
            photo.setAttribute('alt', towns[i].name);

            

            area.appendChild(h2);
            area.appendChild(p);
            area.appendChild(townMotto);
            area.appendChild(yearFounded);
            area.appendChild(currentPopulation);
            area.appendChild(averageRainfall);
            area.appendChild(photo);

            document.querySelector('div.areas').appendChild(area);


                }        }

    });