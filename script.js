"use strict";

const dayH = document.querySelector(".default_day");
const dateH = document.querySelector(".default_date");
const btn = document.querySelector(".btn_search");
const inputBox = document.querySelector(".input-box");

const icons = document.querySelector(".icons");
const dayInfo = document.querySelector(".day_info");
const listContent = document.querySelector(".list_content ul");
const temperature = document.querySelector(".weather_temp");
const description = document.querySelector(".description");
const nameCity = document.querySelector(".name");
const pressure = document.querySelector(".pressure");
const humidity = document.querySelector(".humidity");
const wind_speed = document.querySelector(".wind-speed");
const weather_img = document.querySelector(".default_info img");

const day_temp1 = document.querySelector(".day_temp1");
const day_temp2 = document.querySelector(".day_temp2");
const day_temp3 = document.querySelector(".day_temp3");
const day_temp4 = document.querySelector(".day_temp4");

const day_img1 = document.querySelector(".day_img1");
const day_img2 = document.querySelector(".day_img2");
const day_img3 = document.querySelector(".day_img3");
const day_img4 = document.querySelector(".day_img4");
const day_img = document.querySelector(".day_img");

const day1 = document.querySelector(".day1");
const day2 = document.querySelector(".day2");
const day3 = document.querySelector(".day3");
const day4 = document.querySelector(".day4");

const list = document.querySelector(".list_content");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dt = new Date();
const dayName = days[dt.getDay()];
// console.log(dayName);
dayH.innerHTML = dayName;

const dayNext1 = days[dt.getDay() + 1].slice(0,3);
const dayNext2 = days[dt.getDay() + 2].slice(0,3);
const dayNext3 = days[dt.getDay() + 3].slice(0,3);
const dayNext4 = days[dt.getDay() + 4].slice(0,3);

day1.innerHTML = dayNext1;
day2.innerHTML = dayNext2;
day3.innerHTML = dayNext3;
day4.innerHTML = dayNext4;

// let dayNextA = dayNext1.slice(0,3);

// console.log(dayNext1,dayNext2,dayNext3,dayNext4);



let month = dt.toLocaleString("default", { month: "long" });
let date = dt.getDate();
let year = dt.getFullYear();

dateH.innerHTML = `${date} ${month} ${year}`;


function checkWeather(city) {
    let api_key = "1d8e4f39672cb9d6c0a14c6809b6562a";
    // const api_key2 = "70602a130db9bf25e559f71133eeaa44";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    // const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${api_key}`;

    fetch(url).then(i => i.json()).then(data => {



        if (data.cod === `404`) {
            dayInfo.innerHTML = "Sorry' Location Not Found";
            dayInfo.style = "color:red;font-size:2rem;height:123px";
            temperature.innerHTML = `0°C`;
            description.innerHTML = `Overcast Clouds`
            weather_img.src = "404.png";
            list.style.opacity = "0";
            return;
        }

        console.log(data);


        

        temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
        description.innerHTML = `${data.weather[0].description}`;
        nameCity.innerHTML = `${data.name}`;
        humidity.innerHTML = `${data.main.humidity}%`;
        pressure.innerHTML = `${data.main.pressure} hPa`;
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
        console.log(latitude);
        console.log(longitude);
        function day_4 (lat,lon){

            const url2 = `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${api_key}`;
            fetch(url2).then(k => k.json()).then(data2 => {
                console.table(data2);


                day_temp1.innerHTML = `${Math.round(data2.list[2].main.temp - 273.15)}°C`;
                day_temp2.innerHTML = `${Math.round(data2.list[9].main.temp - 273.15)}°C`;
                day_temp3.innerHTML = `${Math.round(data2.list[17].main.temp - 273.15)}°C`;
                day_temp4.innerHTML = `${Math.round(data2.list[25].main.temp - 273.15)}°C`;
                switch (data2.list[2].weather[0].main) {
                    case "Clouds":
                        day_img1.src = "cloud.png";
                        break;
                    case "Clear":
                        day_img1.src = "clear.png";
                        break;
                    case "Rain":
                        day_img1.src = "rain.png";
                        break;
                    case "Mist":
                        day_img1.src = "mist.png";
                        break;
                    case "Snow":
                        day_img1.src = "snow.png";
                        break;
                    case "Smoke":
                        day_img1.src = "smoke.png";
                        break;
                    case "Haze":
                        day_img1.src = "haze.png";
                        break;
                    case "Fog":
                        day_img1.src = "fog.png";
                        break;
                    default:
                        day_img1.src = "";
        
                }
                switch (data2.list[9].weather[0].main) {
                    case "Clouds":
                        day_img2.src = "cloud.png";
                        break;
                    case "Clear":
                        day_img2.src = "clear.png";
                        break;
                    case "Rain":
                        day_img2.src = "rain.png";
                        break;
                    case "Mist":
                        day_img2.src = "mist.png";
                        break;
                    case "Snow":
                        day_img2.src = "snow.png";
                        break;
                    case "Smoke":
                        day_img2.src = "smoke.png";
                        break;
                    case "Haze":
                        day_img2.src = "haze.png";
                        break;
                    case "Fog":
                        day_img2.src = "fog.png";
                        break;
                    default:
                        day_img2.src = "";
        
                }
                switch (data2.list[17].weather[0].main) {
                    case "Clouds":
                        day_img3.src = "cloud.png";
                        break;
                    case "Clear":
                        day_img3.src = "clear.png";
                        break;
                    case "Rain":
                        day_img3.src = "rain.png";
                        break;
                    case "Mist":
                        day_img3.src = "mist.png";
                        break;
                    case "Snow":
                        day_img3.src = "snow.png";
                        break;
                    case "Smoke":
                        day_img3.src = "smoke.png";
                        break;
                    case "Haze":
                        day_img3.src = "haze.png";
                        break;
                    case "Fog":
                        day_img3.src = "fog.png";
                        break;
                    default:
                        day_img3.src = "";
        
                }
                switch (data2.list[25].weather[0].main) {
                    case "Clouds":
                        day_img4.src = "cloud.png";
                        break;
                    case "Clear":
                        day_img4.src = "clear.png";
                        break;
                    case "Rain":
                        day_img4.src = "rain.png";
                        break;
                    case "Mist":
                        day_img4.src = "mist.png";
                        break;
                    case "Snow":
                        day_img4.src = "snow.png";
                        break;
                    case "Smoke":
                        day_img4.src = "smoke.png";
                        break;
                    case "Haze":
                        day_img4.src = "haze.png";
                        break;
                    case "Fog":
                        day_img4.src = "fog.png";
                        break;
                    default:
                        day_img4.src = "";
        
                }
        

            })
        }

        day_4(latitude,longitude);



    })

}


document.f1.addEventListener("submit", (e) => {
    e.preventDefault();
    checkWeather(inputBox.value);
})
document.f2.addEventListener("submit", (e) => {
    e.preventDefault();
    checkWeather(inputBox.value);
})
