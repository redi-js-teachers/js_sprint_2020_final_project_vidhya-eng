let date = new Date();
let n = date.toDateString();
let time = date.toLocaleTimeString();
document.getElementById('timeandDate').innerHTML = n + ' ,' + time;
document.getElementById('timeandDate').style.color = "white";
document.getElementById('timeandDate').style.marginTop = "400px";
document.getElementById('timeandDate').style.marginLeft = "200px";
document.getElementById('timeandDate').style.fontSize = "25px";

let temperatureCmp = document.getElementById("weatherTemperature");
let weatherHumidityCmp = document.getElementById("weatherHumidity");
let weatherCloudyCmp = document.getElementById("weatherCloudy");
let weatherWindCmp = document.getElementById("weatherWind");
let weatherSearchBar = document.getElementById("searchBar");
let searchBtnCmp = document.getElementById("searchBtn");

searchBtnCmp.addEventListener("click", function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + weatherSearchBar.value + '&units=metric&appid=08a09c29086a3f06cd37337b12b1711f')
        .then(response => response.json())
        .then(data => {
            let currentTemperature = data.main.temp;
            let humidityValue = data.main.humidity;
            let windyValue = data.wind.speed;
            let cloudValue = data.weather[0].description;

            temperatureCmp.innerHTML = currentTemperature;
            weatherHumidityCmp.innerHtml = humidityValue;
            weatherWindCmp.innerHTML = windyValue;
            weatherCloudyCmp.innerHTML = cloudValue;

        })
        .catch(error => alert("Wrong City Name"))
});