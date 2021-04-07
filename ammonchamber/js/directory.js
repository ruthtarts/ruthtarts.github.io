const requestURL = '/ammonchamber/json/directory.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const companies = jsonObject['companies'];
        for (let i = 0; i < companies.length; i++) { // temporary checking for valid response and data parsing


            let card = document.createElement('section');
            let name = document.createElement('p');
            let image = document.createElement('img');
            let address = document.createElement('div');
            let phone = document.createElement('div');
            let website = document.createElement('a');


            name.textContent = companies[i].name;
            address.textContent = companies[i].address;
            phone.textContent = companies[i].phone;
            website.textContent = companies[i].website;
            
            image.setAttribute('src', companies[i].imageurl);
            image.setAttribute('alt', companies[i].name);
            website.setAttribute('a', companies[i].website);

            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(image);
            card.appendChild(website);

            document.querySelector('div.businesscards').appendChild(card);
        }

    });