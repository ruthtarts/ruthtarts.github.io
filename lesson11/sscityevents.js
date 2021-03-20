const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const towns = jsonObject["towns"];

        for (let i = 0; i < towns.length; i++) { // temporary checking for valid response and data parsing
            if (towns[i].name == "Soda Springs") {

                let place = document.createElement('section');
                let ssEvents = document.createElement('div');

                for (let j = 0; j < towns[i].events.length; j++) {


                    ssEvents.append(towns[i].events[j]);
                    if (j < towns[i].events.length - 1) {
                        ssEvents.append("  ⚫  ");
                    }

                }

                place.appendChild(ssEvents);


                document.querySelector('div.ssEvents').appendChild(place);


            }
        }

    });
