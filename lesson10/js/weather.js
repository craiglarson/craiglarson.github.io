const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b2df84ca600590f5e0eb74b31fdf2289';
/*-----FORECAST URL---http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=b2df84ca600590f5e0eb74b31fdf2289*/

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
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