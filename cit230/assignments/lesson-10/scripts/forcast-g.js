var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?zip=29601,us&appid=8928a9fd9cf320451b8f6d922f405929&units=imperial',true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('currentWind').innerHTML = weatherInfo.wind.speed;
    
    var iconcode = weatherInfo.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";   
    
document.getElementById('weather_ion').src = icon_path;
    
}
