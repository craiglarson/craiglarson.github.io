const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b2df84ca600590f5e0eb74b31fdf2289';

//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={YOUR API KEY}


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
      document.getElementById('current-temp').innerHTML = jsObject.main.temp;
      const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; //note the concatenation
      const desc = jsObject.weather[0].description; //note how we reference the weather array
      document.getElementById('imagesrc').innerHTML = imagesrc; //informational specification only
      document.getElementById('icon').setAttribute('src', imagesrc); //focus on the setAttribute() method
      document.getElementById('icon').setAttribute('alt', desc);
      const temp = jsObject.main.temp;
      const speed = jsObject.wind.speed;
      var chill = windChill(temp, speed);
      document.getElementById('temperature').innerHTML = temp;
      document.getElementById('windSpeed').innerHTML = speed;
      document.getElementById('windChill').innerHTML = chill;
  });

  function windChill(t, s) {
    if (t <= 50 && s > 3) {
        var f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16)); 
    return f.toFixed(0)
  }
    else {
        var f = 'N/A'
        return f;
    }
}