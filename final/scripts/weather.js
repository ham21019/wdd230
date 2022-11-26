// Current Weather HTML elements to edit
const temp = document.querySelector("#temp");
const mph = document.querySelector("#mph");
const weatherIcon = document.querySelector("#weather_icon");
const captionDesc = document.querySelector("#figcaption");

// tomorrow Weather HTML elements to edit
const tomorrow_temp = document.querySelector("#tomorrow_temp");
const tomorrow_mph = document.querySelector("#tomorrow_mph");
const tomorrow_weatherIcon = document.querySelector("#tomorrow_icon");
const tomorrow_captionDesc = document.querySelector("#tomorrow_figcaption");

// twoDays Weather HTML elements to edit
const twoDays_temp = document.querySelector("#twoDays_temp");
const twoDays_mph = document.querySelector("#twoDays_mph");
const twoDays_weatherIcon = document.querySelector("#twoDays_icon");
const twoDays_captionDesc = document.querySelector("#twoDays_figcaption");

// threeDays Weather HTML elements to edit
const threeDays_temp = document.querySelector("#threeDays_temp");
const threeDays_mph = document.querySelector("#threeDays_mph");
const threeDays_weatherIcon = document.querySelector("#threeDays_icon");
const threeDays_captionDesc = document.querySelector("#threeDays_figcaption");

// url variable for Carlsbad, CA
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&cnt=28&units=imperial&appid=209401470a99f981b833442b6de9857c";

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

apiFetch();

function  displayResults(weatherData) {
  // current weather icon
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@4x.png`;
  const desc = weatherData.list[0].weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  // tomorrow weather icon
  const tomorrow_iconsrc = `https://openweathermap.org/img/wn/${weatherData.list[7].weather[0].icon}@4x.png`;
  const tomorrow_desc = weatherData.list[7].weather[0].description;
  tomorrow_weatherIcon.setAttribute('src', tomorrow_iconsrc);
  tomorrow_weatherIcon.setAttribute('alt', tomorrow_desc);

  // twoDay weather icon
  const twoDays_iconsrc = `https://openweathermap.org/img/wn/${weatherData.list[15].weather[0].icon}@4x.png`;
  const twoDays_desc = weatherData.list[15].weather[0].description;
  twoDays_weatherIcon.setAttribute('src', twoDays_iconsrc);
  twoDays_weatherIcon.setAttribute('alt', twoDays_desc);

  // threeDay weather icon
  const threeDays_iconsrc = `https://openweathermap.org/img/wn/${weatherData.list[23].weather[0].icon}@4x.png`;
  const threeDays_desc = weatherData.list[23].weather[0].description;
  threeDays_weatherIcon.setAttribute('src', threeDays_iconsrc);
  threeDays_weatherIcon.setAttribute('alt', threeDays_desc);
  
  // current weather stats
  captionDesc.innerHTML = `<strong>Cloud Conditions:</strong> ${desc.toUpperCase()}`;
  mph.innerHTML = `<strong>Wind Speed:</strong> ${Math.round(weatherData.list[0].wind.speed)} mph`;
  temp.innerHTML = `<strong>Current Temp:</strong> ${weatherData.list[0].main.temp.toFixed(0)}° F`;
  
  // tomorrow weather stats
  tomorrow_captionDesc.innerHTML = `<strong>Cloud Conditions:</strong> ${tomorrow_desc.toUpperCase()}`;
  tomorrow_mph.innerHTML = `<strong>Wind Speed:</strong> ${Math.round(weatherData.list[7].wind.speed)} mph`;
  tomorrow_temp.innerHTML = `<strong>Current Temp:</strong> ${weatherData.list[7].main.temp.toFixed(0)}° F`;
  
  // twoDay weather stats
  twoDays_captionDesc.innerHTML = `<strong>Cloud Conditions:</strong> ${twoDays_desc.toUpperCase()}`;
  twoDays_mph.innerHTML = `<strong>Wind Speed:</strong> ${Math.round(weatherData.list[15].wind.speed)} mph`;
  twoDays_temp.innerHTML = `<strong>Current Temp:</strong> ${weatherData.list[15].main.temp.toFixed(0)}° F`;
  
  // threeDay weather stats
  threeDays_captionDesc.innerHTML = `<strong>Cloud Conditions:</strong> ${threeDays_desc.toUpperCase()}`;
  threeDays_mph.innerHTML = `<strong>Wind Speed:</strong> ${Math.round(weatherData.list[23].wind.speed)} mph`;
  threeDays_temp.innerHTML = `<strong>Current Temp:</strong> ${weatherData.list[23].main.temp.toFixed(0)}° F`;
}

// widget examples
/* <div id="openweathermap-widget-5"></div>
<script>
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
    window.myWidgetParam.push({id: 5,cityid: '5334223',appid: '209401470a99f981b833442b6de9857c',units: 'imperial',containerid: 'openweathermap-widget-5',  });
    (function() {var script = document.createElement('script');
    script.async = true;script.charset = "utf-8";
    script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);
    })();
</script>
<div id="openweathermap-widget-1"></div>
<script src='//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'></script>
<script>
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
    window.myWidgetParam.push({id: 1,cityid: '5334223',appid: '209401470a99f981b833442b6de9857c',units: 'imperial',containerid: 'openweathermap-widget-1',  });
    (function() {var script = document.createElement('script');
    script.async = true;
    script.charset = "utf-8";
    script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);
    })();
</script> */