// initialize display elements for number of smoothies
const smoothies = document.querySelector("#smoothies_created");

// get the stored value in localStorage for number of smoothies
let smoothieCounter = Number(window.localStorage.getItem("smoothies"));

// determine if this is the first time
if (smoothieCounter !== 0) {
	smoothies.innerHTML = `Total number of Smoothies: <strong>${smoothieCounter}</strong>`;
} else {
	smoothies.textContent = `No Smoothies yet!`;
}