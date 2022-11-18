// select HTML elements to edit
const temp = document.querySelector("#temp");
const mph = document.querySelector("#mph");
const windChillOutput = document.querySelector("#windchill");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#figcaption");

// url variable for Queen Creek
const url = "https://api.openweathermap.org/data/2.5/weather?q=Queen%20Creek&units=imperial&appid=209401470a99f981b833442b6de9857c";

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
  temp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc.toUpperCase();
  
  mph.textContent = `Wind Speed: ${Math.round(weatherData.wind.speed)} mph`;
  temp.textContent = `Current Temp: ${weatherData.main.temp.toFixed(0)}° F`;
  windChillOutput.textContent = `Wind Chill: ${getWindChill(weatherData.wind.speed, weatherData.main.temp)}`;
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