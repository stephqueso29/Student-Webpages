function updateClock() {
    const now = new Date(); 
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
  
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}
document.getElementById("date").innerHTML = Date();
updateClock();
setInterval(updateClock, 1000);

function celsiusToFahrenheit(celsius) {
    return Math.round((celsius * 9/5) + 32);
}

function getWeather() {
    const apiKey = 'cc7ede99e2dc3852e98316ce5db8fcea';
    const city = document.getElementById('city').value;
  
    if (!city) {
        alert('Please enter a city');
        return;
    }

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data); 

        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('Error fetching current weather data. Please try again.');
        }); 

 fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            displayHourlyForecast(data.list); 

        })
        .catch(error => {
            console.error('Error fetching hourly forecast data:', error);
            alert('Error fetching hourly forecast data. Please try again.');
        });
}

function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

 if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`; 
      
    } else {
        const cityName = data.name;
        const tempCelsius = Math.round(data.main.temp - 273.15);
        const tempFahrenheit = celsiusToFahrenheit(tempCelsius);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
      
        const temperatureHTML = `<p>${tempCelsius}°C / ${tempFahrenheit}°F</p>`;
        const weatherHtml = `<p>${cityName}</p> <p>${description}</p>`;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();
    }
}

function displayHourlyForecast(hourlyData) {
    const hourlyForecastDiv = document.getElementById('hourly-forecast');
    hourlyForecastDiv.innerHTML = ''; // Clear previous results

    const next24Hours = hourlyData.slice(0, 8);
  
    next24Hours.forEach(item => {
        const dataTime = new Date(item.dt * 1000);
        let hour = dataTime.getHours();
        const meridiem = hour >= 12 ? "PM" : "AM";
        hour = hour % 12 || 12; 
        const tempCelsius = Math.round(item.main.temp - 273.15);
        const tempFahrenheit = celsiusToFahrenheit(tempCelsius);
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHtml = `
            <div class="hourly-item"> 
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hourly Weather Icon">
                <span>${tempCelsius}°C / ${tempFahrenheit}°F</span>
            </div>
        `;
        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    });
}

function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    let weatherContainer = document.getElementById("weather-container");

    function adjustWeatherContainerSize() {
        if (weatherContainer.scrollHeight > 250) {
            weatherContainer.style.maxHeight = "400px";
            weatherContainer.style.overflowY = "auto";
        } else {
            weatherContainer.style.overflowY = "hidden";
        }
    }
  
  adjustWeatherContainerSize();
    
    document.getElementById("weather-display").addEventListener("DOMSubtreeModified", adjustWeatherContainerSize);
});
