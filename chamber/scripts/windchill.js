// select HTML elements to edit
const temp = document.querySelector("#temp");
const mph = document.querySelector("#mph");
const windChillOutput = document.querySelector("#windchill");

const mphInput = 12
const tempInput = 42

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

mph.textContent = `${mphInput}`;
temp.textContent = `${tempInput}`;
windChillOutput.textContent = getWindChill(mphInput,tempInput);