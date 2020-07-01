const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
      return response.json();
  })
  .then(function (jsonObject) {
      console.log(jsonObject);
      const towns = jsonObject["towns"];
      for (let i = 0; i < towns.length; i++) {
          if(towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
              let card = document.createElement('section');
              let cardCopy = document.createElement('div')
              cardCopy.setAttribute('class', 'card-copy');
              let name = document.createElement('h2');
              let motto = document.createElement('h5');
              let founding = document.createElement('p');
              let population = document.createElement('p');
              let precipitation = document.createElement('p');
              let image = document.createElement('img');              

              name.textContent = towns[i].name;
              motto.textContent = towns[i].motto;
              founding.textContent = "Year Founded: " + towns[i].yearFounded;
              population.textContent = "Population: " + towns[i].currentPopulation;
              precipitation.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
              image.setAttribute('src', "images/" + towns[i].photo);
              image.setAttribute('alt', `Picture of ${towns[i].name}`);              

              card.appendChild(cardCopy);
              cardCopy.appendChild(name);
              cardCopy.appendChild(motto);
              cardCopy.appendChild(founding);
              cardCopy.appendChild(population);
              cardCopy.appendChild(precipitation);
              card.appendChild(image);              

              document.querySelector('div.cards').appendChild(card);
          }
      }
  })
