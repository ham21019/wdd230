// select HTML elements to edit
const temp = document.querySelector("#temp");
const mph = document.querySelector("#mph");
const windChillOutput = document.querySelector("#windchill");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#figcaption");

// url variable for Queen Creek
const url = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=33.2486&lon=111.6377&cnt=3&units=imperial&appid=209401470a99f981b833442b6de9857c";

// apiFetch function to get JSON information
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data); // had to uncomment
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function  displayResults(weatherData) {
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  
  captionDesc.innerHTML = `<strong>Cloud Conditions:</strong> ${desc.toUpperCase()}`;
  mph.innerHTML = `<strong>Wind Speed:</strong> ${Math.round(weatherData.wind.speed)} mph`;
  temp.innerHTML = `<strong>Current Temp:</strong> ${weatherData.main.temp.toFixed(0)}° F`;
  windChillOutput.innerHTML = `<strong>Wind Chill:</strong> ${getWindChill(weatherData.wind.speed, weatherData.main.temp)}`;
}

// Calculate the Wind Chill Factor
function getWindChill(mphInput, tempInput) {
  // Set value of windChill to "N/A"
  let windChill = "N/A";

  // Only calculate wind chill if wind is strong enough and temp is low enough
  if (mphInput > 3 && tempInput <= 50) {
    windChill = (
      35.74 + 0.6215 * tempInput -
      35.75 * mphInput ** 0.16 +
      0.4275 * tempInput * mphInput ** 0.16
    ).toFixed(2);

    windChill = `${windChill} °F`;
  }
  return windChill;
}