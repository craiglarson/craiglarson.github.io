//Dynamically Pull town info
let townInfo = document.getElementById('currentTown').innerHTML;
let townid;
console.log(townInfo);
if (townInfo == "Preston, Idaho") {
  townid = 5604473;
  townName = 'Preston';
}
else if (townInfo == "Soda Springs, Idaho") {
  townid = 5607916;
  townName = 'Soda Springs';
}
else if (townInfo == "Fish Haven, Idaho") {
  townid = 5585010;
  townName = 'Fish Haven';
}
console.log(townid);

//CURRENT WEATHER API
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${townid}&units=imperial&appid=b2df84ca600590f5e0eb74b31fdf2289`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      document.getElementById('weather-desc').innerHTML = jsObject.weather[0].description;
      document.getElementById('high-temp').innerHTML = `${jsObject.main.temp_max}&deg;F`;
      document.getElementById('current-temp').innerHTML = `${jsObject.main.temp}&deg;F`;
      document.getElementById('humidity').innerHTML = `${jsObject.main.humidity}%`;
      document.getElementById('windspeed').innerHTML = `${jsObject.wind.speed} mph`;
      const t = jsObject.main.temp;
      const s = jsObject.wind.speed;
      var chill = windChill(t, s);
      document.getElementById('windchill').innerHTML = chill;
  });

  //WindChill Calculation
  function windChill(t, s) {
      if (t <= 50 && s > 3) {
        var f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16)); 
        return f.toFixed(0) + '&deg;F';
      }
      else {
          var f = 'N/A'
          return f;
      }
    }

//FORECAST API
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${townid}&units=imperial&appid=b2df84ca600590f5e0eb74b31fdf2289`;

fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
      const list = jsObject['list'];
      const forecast = list.filter(i => (i.dt_txt.includes("18:00:00")));
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      forecast.forEach(i =>{
        let card = document.createElement('div');
        card.setAttribute('class', 'five-day');
        let day = document.createElement('h4');
        let d = new Date(i.dt_txt);
        let dayOfWeek = weekdays[d.getDay()];
        let image = document.createElement('img');
        const imageSRC = `https://openweathermap.org/img/w/${i.weather[0].icon}.png`;
        let temp = document.createElement('p');
        let temperature = i.main.temp;

        day.innerHTML = dayOfWeek;
        image.setAttribute('src', imageSRC);
        image.setAttribute('alt', i.weather[0].description);
        image.setAttribute('width', '75');
        temp.innerHTML = `${temperature.toFixed(0)}&deg;F`;

        card.appendChild(day);
        card.appendChild(image);
        card.appendChild(temp);

        document.querySelector('div.five-day-forecast').appendChild(card);
      });
      });

//----------TOWN EVENTS----------------
const townData = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(townData)
  .then((response) => response.json())
  .then((jsObject) => {
    const towns = jsObject['towns'];
    const preston = towns.filter(i => (i.name == `${townName}`));
    const events = preston[0].events;
    for (let i = 0; i < events.length; i++) {
      let event = document.createElement('p');
      event.innerHTML = events[i];
      document.querySelector('div.events-box').appendChild(event);    
    }
  });