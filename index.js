const date = new Date();
document.getElementById('timeandDate').innerHTML = document.getElementById('timeandDate').innerHTML = `${date.toDateString()}, ${date.toLocaleTimeString()}`;
document.getElementById('timeandDate').style.color = "white"; <<
<< << < HEAD
document.getElementById('timeandDate').style.marginTop = "200px"; ===
=== =
document.getElementById('timeandDate').style.marginTop = "350px"; >>>
>>> > 3 bf58c323df7793d7748949b499fb3d2db13f991
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
const daysList = document.getElementById("getDaysList");
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
const nextDays = 4;

function createDays() {
    let today = new Date();
    let daysSorted = [];
    for (let i = 0; i < nextDays; i++) {
        let newDate = new Date(today.setDate(today.getDate() + 1));
        daysSorted.push(days[newDate.getDay()]);
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
            let tempArray = [];
            tempArray.push(data.list[1].main.temp);
            tempArray.push(data.list[2].main.temp);
            tempArray.push(data.list[10].main.temp);
            tempArray.push(data.list[18].main.temp);

            function displayTemperature() {
                let listItem = document.querySelectorAll("ul > li");
                for (let i = 0; i < tempArray.length && i < listItem.length; i++) {
                    let newTempEle = document.createElement("span");
                    newTempEle.classList.add("temperatureStyle")
                    newTempEle.innerHTML = tempArray[i];
                    listItem[i].appendChild(newTempEle);
                }
            }
            displayTemperature();
            let iconArray = [];
            iconArray.push(data.list[0].weather[0].icon);
            iconArray.push(data.list[2].weather[0].icon);
            iconArray.push(data.list[10].weather[0].icon);
            iconArray.push(data.list[18].weather[0].icon);

            function createIcon() {
                let iconSet = document.querySelectorAll("ul > li");
                for (let i = 0; i < iconArray.length && i < iconSet.length; i++) {
                    let newIconEle = document.createElement("span");
                    newIconEle.classList.add("iconStyle");
                    let imageUrl = "http://openweathermap.org/img/wn/" + iconArray[i] + "@2x.png";
                    newIconEle.innerHTML = "<img src=" + imageUrl + ">";
                    iconSet[i].appendChild(newIconEle);
                }
            }
            createIcon();
        });
}
generateFiveDayForecast();