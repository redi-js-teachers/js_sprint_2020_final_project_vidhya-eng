 const date = new Date();
 const n = date.toDateString();
 const time = date.toLocaleTimeString();
 document.getElementById('timeandDate').innerHTML = n + ' ,' + time;
 document.getElementById('timeandDate').style.color = "white";
 document.getElementById('timeandDate').style.marginTop = "350px";
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
 const mondayCmp = document.getElementById("selectMonday");
 const daysList = document.getElementById("getDaysList");
 const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
 const nextDays = 4;

 function createDays() {
     let today = new Date();
     let daysSorted = [];
     for (let i = 0; i < nextDays; i++) {
         let newDate = new Date(today.setDate(today.getDate() + 1));
         daysSorted.push(days[newDate.getDay()]);
     }
     for (let i = 0; i < daysSorted.length; i++) {
         let newLiElement = document.createElement("li");
         newLiElement.textContent = daysSorted[i];
         daysList.appendChild(newLiElement);
     }
     daysList.style.color = "white";
     daysList.style.listStyle = "none";
     daysList.style.padding = "15px";
 };
 createDays();

 function generateFiveDayForecast() {
     const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Munich&units=metric&appid=08a09c29086a3f06cd37337b12b1711f";
     fetch(apiUrl)
         .then(response => response.json())
         .then(data => {
             let firstDayNewTemp = document.createElement("span");
             firstDayNewTemp.innerHTML = data.list[1].main.temp;
             document.querySelectorAll("ul > li")[0].appendChild(firstDayNewTemp);
             firstDayNewTemp.style.marginLeft = "70px";
             let firstDayIcon = data.list[0].weather[0].icon;
             let firstImageUrl = "http://openweathermap.org/img/wn/" + firstDayIcon + "@2x.png";
             let firstNewIcon = document.createElement("span");
             firstNewIcon.innerHTML = "<img src=" + firstImageUrl + ">";
             document.querySelectorAll("ul > li")[0].appendChild(firstNewIcon);
             firstNewIcon.style.marginLeft = "30px";
             let secondDayNewTemp = document.createElement("span");
             secondDayNewTemp.innerHTML = data.list[2].main.temp;
             document.querySelectorAll("ul > li")[1].appendChild(secondDayNewTemp);
             secondDayNewTemp.style.marginLeft = "70px";
             let secondDayIcon = data.list[2].weather[0].icon;
             let secondImageUrl = "http://openweathermap.org/img/wn/" + secondDayIcon + "@2x.png";
             let secondNewIcon = document.createElement("span");
             secondNewIcon.innerHTML = "<img src=" + secondImageUrl + ">";
             document.querySelectorAll("ul > li")[1].appendChild(secondNewIcon);
             secondNewIcon.style.marginLeft = "30px";
             let thirdDayNewTemp = document.createElement("span");
             thirdDayNewTemp.innerHTML = data.list[10].main.temp;
             document.querySelectorAll("ul > li")[2].appendChild(thirdDayNewTemp);
             thirdDayNewTemp.style.marginLeft = "70px";
             let thirdDayIcon = data.list[10].weather[0].icon;
             let thirdImageUrl = "http://openweathermap.org/img/wn/" + thirdDayIcon + "@2x.png";
             let thirdNewIcon = document.createElement("span");
             thirdNewIcon.innerHTML = "<img src=" + thirdImageUrl + ">";
             document.querySelectorAll("ul > li")[2].appendChild(thirdNewIcon);
             thirdNewIcon.style.marginLeft = "30px";
             let fourthDayNewTemp = document.createElement("span");
             fourthDayNewTemp.innerHTML = data.list[18].main.temp;
             document.querySelectorAll("ul > li")[3].appendChild(fourthDayNewTemp);
             fourthDayNewTemp.style.marginLeft = "70px";
             let fourthDayIcon = data.list[18].weather[0].icon;
             let fourthImageUrl = "http://openweathermap.org/img/wn/" + fourthDayIcon + "@2x.png";
             let fourthNewIcon = document.createElement("span");
             fourthNewIcon.innerHTML = "<img src=" + fourthImageUrl + ">";
             document.querySelectorAll("ul > li")[3].appendChild(fourthNewIcon);
             fourthNewIcon.style.marginLeft = "30px";
         });
 }
 generateFiveDayForecast();