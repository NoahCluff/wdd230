const apikey = "81c66e61c9cb1da912c69a94429db736"

fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Portland,OR,US" 
    + "&appid=" + apikey + "&units=imperial"
  )
  .then((res) => res.json())
 
  .then((data) => {

    var desc = data["weather"]["0"]["description"];
    var temp = Math.round(data["main"]["temp"]);
    var hum = Math.round(data["main"]["humidity"]);
    var wind = Math.round(data["wind"]["speed"]);
    var icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    document.getElementById("weather-icon").setAttribute("src", icon);
    document.getElementById("weather-icon").setAttribute("alt", desc);
    document.getElementById("description").innerHTML = desc;
    document.getElementById("temperature").innerHTML = `${temp}&deg; F`;
    document.getElementById("humidity").innerHTML = `Humidity: ${hum}%`;

  })

