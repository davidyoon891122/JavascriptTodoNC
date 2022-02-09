const API_KEY = "767cd7ad6286d493b227a37032a0bcd6"

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const option = "metric"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=${option}`
    fetch(url).then(response => response.json()).then(data => {
        console.log(data.name, data.weather[0].main);
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        weather.innerText = data.name;;
        city.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

}

function onGeoError() {
    console.log("Cant find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
