const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
      return response.json();
  })
  .then(function (jsonObject) {
      const towns = jsonObject["towns"];
      console.table(jsonObject); //temporary checking for valid response and data parsing
      for (let i = 0; i < towns.length; i++) {
          if(towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
              let card = document.createElement('section');
              let name = document.createElement('h2');
              let motto = document.createElement('h4');
              let founding = document.createElement('p');
              let population = document.createElement('p');
              let precipitation = document.createElement('p');
              let image = document.createElement('img');              

              name.textContent = towns[i].name;
              motto.textContent = towns[i].motto;
              founding.textContent = "Year Founded: " + towns[i].yearFounded;
              population.textContent = "Population: " + towns[i].currentPopulation;
              precipitation.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
              image.setAttribute('src', towns[i].photo);              

              card.appendChild(name);
              card.appendChild(motto);
              card.appendChild(founding);
              card.appendChild(population);
              card.appendChild(precipitation);
              card.appendChild(image);              

              document.querySelector('div.cards').appendChild(card);
          }
      }
  })
