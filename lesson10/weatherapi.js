const apikey = "81c66e61c9cb1da912c69a94429db736"

fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks,AL,US" 
    + "&appid=" + apikey + "&units=imperial"
  )
  .then((res) => res.json())
 
  .then((data) => {

    var desc = data["weather"]["0"]["description"];
    var temp = Math.round(data["main"]["temp"]);
    var wind = Math.round(data["wind"]["speed"]);
    var chill = Math.round(35.74 + (0.6215 * temp) - (35.75*Math.pow(wind,0.16)) + (0.4275 * temp * Math.pow(wind,0.16)));
    var icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    document.getElementById("description").innerHTML = desc;
    document.getElementById("temperature").innerHTML = "The current temperature in Fairbanks, Alaska is " + temp + "&deg; F";
    document.getElementById("windspeed").innerHTML = "Wind Speed: " + wind + " MPH";

    if (temp < 50 && wind > 3) {
        document.getElementById("windchill").innerHTML = "Wind Chill: " + chill + "&deg; F";
    } else {
        document.getElementById("windchill").innerHTML = "Wind Chill: N/A";
    }

    document.getElementById("weather-icon").setAttribute("src", icon);
    document.getElementById("weather-icon").setAttribute("alt", desc);
  })