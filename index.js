let date = new Date();
let n = date.toDateString();
let time = date.toLocaleTimeString();
document.getElementById('timeandDate').innerHTML = n + ' ,' + time;
document.getElementById('timeandDate').style.color = "white";
document.getElementById('timeandDate').style.marginTop = "350px";
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
let mondayCmp = document.getElementById("selectMonday");



let daysList = document.getElementById("getDaysList");
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
let nextDays = 4;

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
            let firstDayTempValue = data.list[1].main.temp;
            let firstDayNewTemp = document.createElement("span");
            firstDayNewTemp.innerHTML = firstDayTempValue;
            document.querySelectorAll("ul > li")[0].appendChild(firstDayNewTemp);
            firstDayNewTemp.style.marginLeft = "70px";
            let firstDayIcon = data.list[0].weather[0].icon;
            let firstImageUrl = "http://openweathermap.org/img/wn/" + firstDayIcon + "@2x.png";
            let firstNewIcon = document.createElement("span");
            firstNewIcon.innerHTML = "<img src=" + firstImageUrl + ">";
            document.querySelectorAll("ul > li")[0].appendChild(firstNewIcon);
            firstNewIcon.style.marginLeft = "30px";
            let secondDayTempValue = data.list[2].main.temp;
            let secondDayNewTemp = document.createElement("span");
            secondDayNewTemp.innerHTML = secondDayTempValue;
            document.querySelectorAll("ul > li")[1].appendChild(secondDayNewTemp);
            secondDayNewTemp.style.marginLeft = "70px";
            let secondDayIcon = data.list[2].weather[0].icon;
            let secondImageUrl = "http://openweathermap.org/img/wn/" + secondDayIcon + "@2x.png";
            let secondNewIcon = document.createElement("span");
            secondNewIcon.innerHTML = "<img src=" + secondImageUrl + ">";
            document.querySelectorAll("ul > li")[1].appendChild(secondNewIcon);
            secondNewIcon.style.marginLeft = "30px";
            let thirdDayTempValue = data.list[10].main.temp;
            let thirdDayNewTemp = document.createElement("span");
            thirdDayNewTemp.innerHTML = thirdDayTempValue;
            document.querySelectorAll("ul > li")[2].appendChild(thirdDayNewTemp);
            thirdDayNewTemp.style.marginLeft = "70px";
            let thirdDayIcon = data.list[10].weather[0].icon;
            let thirdImageUrl = "http://openweathermap.org/img/wn/" + thirdDayIcon + "@2x.png";
            let thirdNewIcon = document.createElement("span");
            thirdNewIcon.innerHTML = "<img src=" + thirdImageUrl + ">";
            document.querySelectorAll("ul > li")[2].appendChild(thirdNewIcon);
            thirdNewIcon.style.marginLeft = "30px";
            let fourthDayTempValue = data.list[18].main.temp;
            let fourthDayNewTemp = document.createElement("span");
            fourthDayNewTemp.innerHTML = fourthDayTempValue;
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