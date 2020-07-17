function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('hide');
}
//GOOGLE FONTS
WebFont.load({google: {families: ["Seaweed Script", "Architects Daughter", "Roboto"]}});

let d = new Date();
let months = ["January", "February", "March", "Arpil", "May", "June", "July", "August", "September", "October", "November", "December"];
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//Footer Date
document.getElementById("footerDate").innerHTML = `${day[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

//Last Modified
document.getElementById("footerModified").innerHTML = document.lastModified;

//Current Weather
var lat = 20.5083;
var long = -86.9458;
const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=b2df84ca600590f5e0eb74b31fdf2289`;

fetch(currentWeatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let image = document.getElementById("currentWeather-img");
        const imageSRC = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        image.setAttribute('src', imageSRC);
        let temp = jsObject.main.temp;
        let humidity = jsObject.main.humidity;
        let description = jsObject.weather[0].description;
        document.getElementById('currentTemp').innerHTML = `Temp: ${Math.round(temp)}&deg;F`;
        document.getElementById('currentHumidity').innerHTML = `Humidity: ${Math.round(humidity)}%`;
        document.getElementById('weatherDescription').innerHTML = description;        
    });

    //Five Day Forecast
const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=b2df84ca600590f5e0eb74b31fdf2289`;

fetch(fiveDayURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const list = jsObject['list'];
        const forecast = list.filter(i => (i.dt_txt.includes("12:00:00")));
        console.log(forecast);
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        //Build HTML Elements
        forecast.forEach(i => {
            let card = document.createElement('div');
            card.setAttribute('class', 'five-day-card');
            let day = document.createElement('h4');
            let d = new Date(i.dt_txt);
            let dayOfWeek = weekdays[d.getDay()];
            let image = document.createElement('img');
            let imageSRC = `https://openweathermap.org/img/w/${i.weather[0].icon}.png`;
            let temp = document.createElement('p');
            let temperature = i.main.temp;
            //Fill Elements with Content
            day.innerHTML = dayOfWeek;
            image.setAttribute('src', imageSRC);
            image.setAttribute('alt', i.weather[0].description);
            image.setAttribute('width', '75');
            temp.innerHTML = `${Math.round(temperature)}&deg;F`;

            card.appendChild(day);
            card.appendChild(image);
            card.appendChild(temp);

            document.querySelector('div.five-day-container').appendChild(card);
        });
    });

//RENTAL INFORMATION JSON
const rentalURL ='https://craiglarson.github.io/scoots/js/rentals.json';

fetch(rentalURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);
    const rentals = jsObject['rentals'];
    console.log(rentals);
    for (let i = 0; i < rentals.length; i++) {
        let rentalCard = document.createElement('div');
        rentalCard.setAttribute('class', 'rentalType-card');
        let image = document.createElement('img');
    };
    });