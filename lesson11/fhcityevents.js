const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const towns = jsonObject["towns"];

        for (let i = 0; i < towns.length; i++) { // temporary checking for valid response and data parsing
            if (towns[i].name == "Fish Haven") {

                let place = document.createElement('section');
                let fhEvents = document.createElement('div');

                for (let j = 0; j < towns[i].events.length; j++) {


                    fhEvents.append(towns[i].events[j]);
                    if (j < towns[i].events.length - 1) {
                        fhEvents.append("  ⚫  ");
                    }

                }

                place.appendChild(fhEvents);


                document.querySelector('div.fhEvents').appendChild(place);


            }

        }

    });
