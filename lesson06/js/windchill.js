var t = parseFloat(document.getElementById("temperature").textContent);
console.log(t);
var s = parseFloat(document.getElementById("windspeed").textContent);
console.log(s);
var f = windChill(t, s);
document.getElementById("windchill").innerHTML = f;


function windChill(t, s) {
    if(t <= 50 && s > 3) {
    var f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16)); 
    return f.toFixed(0) + "°F";
    }
    else {
        var f = "N/A"
        return f;
    }
}