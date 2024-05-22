var locationElem = document.getElementById('location');
var tempElem = document.getElementById('temp');
var weatherDescElem = document.getElementById('weather-desc');
var humidityElem = document.getElementById('humidity');
var sunriseElem = document.getElementById('sunrise');
var sunsetElem = document.getElementById('sunset');
var precipitationElem = document.getElementById('rain');
var windElem = document.getElementById('wind');



function commenceWeatherCheck() {
    const cityNameElement = document.getElementById('search-id');
    const cityName = cityNameElement.value.trim();

    cityNameElement.value = '';

    if (cityName) {
        const cityNameStr = String(cityName);
        checkWeather(cityNameStr);
    } else {
        console.log('City name is empty');
    }

}


function setWeatherBg(weatherId, bodyElement) {
    bodyElement.classList = '';

    if (weatherId === 'Clear') {
        bodyElement.classList.add('bg-sunny-grad');
    } else if (weatherId === 'Clouds') {
        bodyElement.classList.add('bg-cloudy-grad');
    } else if (weatherId === 'Haze') {
        bodyElement.classList.add('bg-haze-grad');
    } else if (weatherId == 'Rain') {
        bodyElement.classList.add('bg-rainy-grad');
    } else if (weatherId === 'Thunderstorm') {
        bodyElement.classList.add('bg-thunderstorm-grad');
    } else if (weatherId == 'Smoke') {
        bodyElement.classList.add('bg-smoke-grad');
    } else if (weatherId === 'Mist') {
        bodyElement.classList.add('bg-mist-grad');
    }
}

async function checkWeather(city) {
    const apiKey = '0dcc20e2360937ef6479712681689681';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;
    const bodyElement = document.getElementById('body');

    
    try {
        const response = await fetch(apiUrl + `&appid=${apiKey}`);
        const data = await response.json();
        
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        const weatherId = data.weather[0].main;
    
        const weatherDescription = data.weather[0].description;
        let precipitation = '0mm';
    
        if (data.rain && data.rain['1h']) {
            precipitation = data.rain['1h'];
        }
    
        // Extract sunrise and sunset times
        const roundToNearestMinute = (timestamp) => {
            const date = new Date(timestamp * 1000);
            date.setSeconds(0, 0); 
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        };
    
        const sunrise = roundToNearestMinute(data.sys.sunrise);
        const sunset = roundToNearestMinute(data.sys.sunset);

        if (data.cod === '404') {
            alert('City not found.');
            return;
        }

        setWeatherBg(weatherId, bodyElement);

        locationElem.innerHTML = `${data.name}`;
        tempElem.innerHTML = `${temp} &deg;`;
        weatherDescElem.innerHTML = `${weatherDescription}`;
        humidityElem.innerHTML = `${humidity}%`;

        sunriseElem.innerHTML = `${sunrise}`;
        sunsetElem.innerHTML = `${sunset}`;
        precipitationElem.innerHTML = `${weatherDescription}`;
        windElem.innerHTML = `${wind} km/hr`;

        if (precipitation === '0mm') {
            precipitationElem.innerHTML = '0mm';
        } else {
            precipitationElem.innerHTML = `${weatherDescription}mm`;
        }
        
    } catch (error) {
        console.error('Error:', error);
    }
}
