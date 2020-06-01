
 const date = new Date();
 const n = date.toDateString();
 const time = date.toLocaleTimeString();
 document.getElementById('timeandDate').innerHTML = n + ' ,' + time;
 document.getElementById('timeandDate').style.color = "white";
 document.getElementById('timeandDate').style.marginTop = "200px";
 document.getElementById('timeandDate').style.marginLeft = "250px";
 document.getElementById('timeandDate').style.fontSize = "25px";

 const temperatureCmp = document.getElementById("weatherTemperature");
 const nameCmp = document.getElementById("name");
 const weatherMaxTempCmp = document.getElementById("weatherMaxTemp");
 const weatherCloudyCmp = document.getElementById("weatherCloudy");
 const weatherWindCmp = document.getElementById("weatherWind");
 const weatherSearchBar = document.getElementById("searchBar");
 const searchBtnCmp = document.getElementById("searchBtn");
 const weatherIconCmp = document.getElementById("weatherIcon");

 searchBtnCmp.addEventListener("click", function() {
     fetch('https://api.openweathermap.org/data/2.5/weather?q=' + weatherSearchBar.value + '&units=metric&appid=08a09c29086a3f06cd37337b12b1711f')
         .then(response => response.json())
         .then(data => {
             let iconNew = data.weather[0].icon;
             let imageUrl = "http://openweathermap.org/img/wn/" + iconNew + "@2x.png";
             weatherIconCmp.innerHTML = "<img src=" + imageUrl + ">";
             let newPlaceName = document.createElement("span");
             newPlaceName.innerHTML = data.name;
             nameCmp.appendChild(newPlaceName);
             let newWindVal = document.createElement("span");
             newWindVal.classList.add("windMarginAdjustment");
             let newCloudValue = document.createElement("span");
             newCloudValue.classList.add("cloudMarginAdjustment");
             let newMaxTempValue = document.createElement("span");
             newMaxTempValue.classList.add("tempMarginAdjustment");
             newMaxTempValue.innerHTML = data.main.temp_max;
             weatherMaxTempCmp.appendChild(newMaxTempValue);
             newCloudValue.innerHTML = data.weather[0].description;
             weatherCloudyCmp.appendChild(newCloudValue);
             temperatureCmp.innerHTML = data.main.temp;
             newWindVal.innerHTML = data.wind.speed;
             weatherWindCmp.appendChild(newWindVal);
         })
         .catch(error => alert("Wrong City Name"))
 });





