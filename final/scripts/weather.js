// Current Weather HTML elements to edit
const temp = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
const weatherIcon = document.querySelector("#weather_icon");
const captionDesc = document.querySelector("#figcaption");

// tomorrow Weather HTML elements to edit
const tomorrow_temp = document.querySelector("#tomorrow_temp");

// twoDays Weather HTML elements to edit
const twoDays_temp = document.querySelector("#twoDays_temp");

// threeDays Weather HTML elements to edit
const threeDays_temp = document.querySelector("#threeDays_temp");

// url variable for Carlsbad, CA
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&cnt=25&units=imperial&appid=209401470a99f981b833442b6de9857c";

// apiFetch function to get JSON information
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // test output in the console
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

// run function to get API info
apiFetch();

// manipulate DOM to add weather information
function  displayResults(weatherData) {
  // current weather icon
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@4x.png`;
  const desc = weatherData.list[0].weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  
  // current weather stats
  captionDesc.innerHTML = `<strong>Cloud Conditions:</strong> ${desc.toUpperCase()}`;
  humidity.innerHTML = `<strong>Humidity:</strong> ${weatherData.list[0].main.humidity}%`;
  temp.innerHTML = `<strong>Current Temp:</strong> ${weatherData.list[0].main.temp.toFixed(0)}° F`;
  
  // tomorrow weather stats
  tomorrow_temp.innerHTML = `<strong>Temp:</strong> ${weatherData.list[8].main.temp.toFixed(0)}° F`;
  
  // twoDay weather stats
  twoDays_temp.innerHTML = `<strong>Temp:</strong> ${weatherData.list[16].main.temp.toFixed(0)}° F`;
  
  // threeDay weather stats
  threeDays_temp.innerHTML = `<strong>Temp:</strong> ${weatherData.list[24].main.temp.toFixed(0)}° F`;
}