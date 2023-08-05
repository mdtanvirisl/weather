const key = `1ac20d8dec188e0d2328f8e11adc42c3`;

const weatherUpdate = city => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        .then(response => response.json())
        .then(weather => displayWeather(weather, city));
}

//display data
const displayWeather = (weather, city) => {
    const found = document.getElementById('not-found');
    if (weather.cod === "404") {
        found.classList.remove('d-none');
        return;
    }
    else {
        found.classList.add('d-none');
    }
    const temp = weather.main.temp;
    const status = weather.weather[0].main;
    setInnerText('temperature', temp);
    setInnerText('city-name', city);
    setInnerText('status', status);
}

const setInnerText = (id, text) => {
    const getField = document.getElementById(id);
    getField.innerText = text;
}

//search using enter key
// document.getElementById('search-field').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         searchWeather();
//     }
// });

//Search using button click
const searchWeather = () => {
    const weather = document.getElementById('search-field');
    const cityName = weather.value;
    weatherUpdate(cityName);
}

weatherUpdate('dhaka');