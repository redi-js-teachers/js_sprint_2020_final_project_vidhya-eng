 let date = new Date();
 let n = date.toDateString();
 let time = date.toLocaleTimeString();
 document.getElementById('timeandDate').innerHTML = n + ' ,' + time;
 document.getElementById('timeandDate').style.color = "white";
 document.getElementById('timeandDate').style.marginTop = "200px";
 document.getElementById('timeandDate').style.marginLeft = "250px";
 document.getElementById('timeandDate').style.fontSize = "25px";

 let temperatureCmp = document.getElementById("weatherTemperature");
 let nameCmp = document.getElementById("name");
 let weatherMaxTempCmp = document.getElementById("weatherMaxTemp");
 let weatherCloudyCmp = document.getElementById("weatherCloudy");
 let weatherWindCmp = document.getElementById("weatherWind");
 let weatherSearchBar = document.getElementById("searchBar");
 let searchBtnCmp = document.getElementById("searchBtn");
 let weatherIconCmp = document.getElementById("weatherIcon");

 searchBtnCmp.addEventListener("click", function() {
     fetch('https://api.openweathermap.org/data/2.5/weather?q=' + weatherSearchBar.value + '&units=metric&appid=08a09c29086a3f06cd37337b12b1711f')
         .then(response => response.json())
         .then(data => {
             let currentTemperature = data.main.temp;
             let maxTempValue = data.main.temp_max;
             let windyValue = data.wind.speed;
             let cloudValue = data.weather[0].description;
             let placeNameValue = data.name;
             let iconNew = data.weather[0].icon;
             let imageUrl = "http://openweathermap.org/img/wn/" + iconNew + "@2x.png";
             weatherIconCmp.innerHTML = "<img src=" + imageUrl + ">";
             let newPlaceName = document.createElement("span");
             newPlaceName.innerHTML = placeNameValue;
             nameCmp.appendChild(newPlaceName);
             let newWindVal = document.createElement("span");
             newWindVal.classList.add("windMarginAdjustment");
             let newCloudValue = document.createElement("span");
             newCloudValue.classList.add("cloudMarginAdjustment");
             let newMaxTempValue = document.createElement("span");
             newMaxTempValue.classList.add("tempMarginAdjustment");
             newMaxTempValue.innerHTML = maxTempValue;
             weatherMaxTempCmp.appendChild(newMaxTempValue);
             newCloudValue.innerHTML = cloudValue;
             weatherCloudyCmp.appendChild(newCloudValue);
             temperatureCmp.innerHTML = currentTemperature;
             newWindVal.innerHTML = windyValue;
             weatherWindCmp.appendChild(newWindVal);


         })
         .catch(error => alert("Wrong City Name"))
 });