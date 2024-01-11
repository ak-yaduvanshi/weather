const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector("#searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const pressure = document.querySelector("#pressure");
const wind_speed = document.querySelector("#wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");
const weather_box = document.querySelector("weather-box");
const weather_details = document.querySelector("weather-details");


function checkWeather(city) {
    let api_key = "1d8e4f39672cb9d6c0a14c6809b6562a";
    // const api_key = "70602a130db9bf25e559f71133eeaa44";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    // const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${api_key}`;

    fetch(url).then(i => i.json()).then(data => {



        if (data.cod === `404`) {
            location_not_found.style.display = "flex";
            weather_body.style.display = "none";
            temperature.innerHTML = "";
            description.innerHTML = "";
            humidity.innerHTML = "";
            pressure.innerHTML = "";
            wind_speed.innerHTML = "";

            return;
        }

        console.log(data);


        location_not_found.style.display = "none";
        weather_body.style.display = "flex";

        temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
        description.innerHTML = `${data.weather[0].description}`;
        humidity.innerHTML = `${data.main.humidity}%`;
        pressure.innerHTML = `${data.main.pressure}hPa`;
        wind_speed.innerHTML = `${data.wind.speed}Km/h`;




        switch (data.weather[0].main) {
            case "Clouds":
                weather_img.src = "cloud.png";
                break;
            case "Clear":
                weather_img.src = "clear.png";
                break;
            case "Rain":
                weather_img.src = "rain.png";
                break;
            case "Mist":
                weather_img.src = "mist.png";
                break;
            case "Snow":
                weather_img.src = "snow.png";
                break;
            case "Smoke":
                weather_img.src = "smoke.png";
                break;
            case "Haze":
                weather_img.src = "haze.png";
                break;
            case "Fog":
                weather_img.src = "fog.png";
                break;
            default:
                weather_img.src = "";
            // break;

        }




        const latitude = `${data.coord.lat}`;
        const longitude = `${data.coord.lon}`;
        // console.log(latitude);
        // console.log(longitude);
        // const url2 = `api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${api_key}`;
        // fetch(url2).then(k => k.json()).then(data2 => {
        //     console.log(data2);
        // })





    })

}


document.f1.addEventListener("submit", (e) => {
    e.preventDefault();
    checkWeather(inputBox.value);
})



