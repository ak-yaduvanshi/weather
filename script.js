"use strict";

const dayH = document.querySelector(".default_day");
const dateH = document.querySelector(".default_date");
const inputBox = document.querySelector(".input-box");

const dayInfo = document.querySelector(".day_info");
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
const times = document.querySelector(".time");
const content = document.querySelectorAll(".content");
// console.log(content);

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


let dayNext1 = days[new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + 1).getDay()].slice(0, 3);
// console.log(dayNext1);

let dayNext2 = days[new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + 2).getDay()].slice(0, 3);
// console.log(dayNext2);

let dayNext3 = days[new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + 3).getDay()].slice(0, 3);
// console.log(dayNext3);

let dayNext4 = days[new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + 4).getDay()].slice(0, 3);
// console.log(dayNext4);



day1.innerHTML = dayNext1;
day2.innerHTML = dayNext2;
day3.innerHTML = dayNext3;
day4.innerHTML = dayNext4;

// let dayNextA = dayNext1.slice(0,3);

// console.log(dayNext1, dayNext2, dayNext3, dayNext4);



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
            content.forEach(i => i.style.display = "none")
            document.querySelector(".error").style.display = "block";
            temperature.innerHTML = `0°C`;
            description.innerHTML = `Overcast Clouds`
            weather_img.src = "404.png";
            list.style.display = "none";
            return;
        }
        list.style.display = "block";
        document.querySelector(".error").style.display = "none";


        content.forEach(i => i.style.display = "flex")


        // console.log(data);


        let time = new Date().getHours();
        let minute = new Date().getMinutes();
        if (time < 10) {
            time = "0" + time;
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        times.innerHTML = `${time}:${minute}`
        // console.log(time, minute);

        temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
        description.innerHTML = `${data.weather[0].description}`;
        nameCity.innerHTML = `${data.name}`;
        humidity.innerHTML = `${data.main.humidity}%`;
        pressure.innerHTML = `${data.main.pressure} hPa`;
        wind_speed.innerHTML = `${data.wind.speed}Km/h`;

        weather_img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`




        const latitude = `${data.coord.lat}`;
        const longitude = `${data.coord.lon}`;
        // console.log(latitude);
        // console.log(longitude);
        function day_4(lat, lon) {

            // const url2 = `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${api_key}`;

            const url2 = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=d84e2ede8dfb4fa7ab2478082360658d&units=I&days=5`;
            fetch(url2).then(k => k.json()).then(data2 => {
                // console.table(data2);


                day_temp1.innerHTML = `${Math.round((data2.data[1].temp - 32) * 5 / 9)}°C`;
                day_temp2.innerHTML = `${Math.round((data2.data[2].temp - 32) * 5 / 9)}°C`;
                day_temp3.innerHTML = `${Math.round((data2.data[3].temp - 32) * 5 / 9)}°C`;
                day_temp4.innerHTML = `${Math.round((data2.data[4].temp - 32) * 5 / 9)}°C`;


                day_img1.src = `https://cdn.weatherbit.io/static/img/icons/${data2.data[1].weather.icon}.png`
                day_img2.src = `https://cdn.weatherbit.io/static/img/icons/${data2.data[2].weather.icon}.png`
                day_img3.src = `https://cdn.weatherbit.io/static/img/icons/${data2.data[3].weather.icon}.png`
                day_img4.src = `https://cdn.weatherbit.io/static/img/icons/${data2.data[4].weather.icon}.png`

            })
        }

        day_4(latitude, longitude);



    })

}


document.f1.addEventListener("submit", (e) => {
    e.preventDefault();
    checkWeather(inputBox.value);
})

