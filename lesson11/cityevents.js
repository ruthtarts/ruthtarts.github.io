const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const towns = jsonObject["towns"];

        for (let i = 0; i < towns.length; i++) { // temporary checking for valid response and data parsing
            if (towns[i].name == "Preston") {

                let place = document.createElement('section');
                let prestonEvents = document.createElement('div');

                for (let j = 0; j < towns[i].events.length; j++) {


                    prestonEvents.append(towns[i].events[j]);
                    if (j < towns[i].events.length - 1) {
                        prestonEvents.append("  ⚫  ");
                    }

                }

                place.appendChild(prestonEvents);


                document.querySelector('div.prestonEvents').appendChild(place);


            }
        }

    });
