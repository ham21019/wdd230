// Create a new date object called myDate
let myDate = new Date();

//Create a new array for days of the week called weekday
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

//Create a new array for months called month
let month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

// display the currentDate
document.getElementById("currentDate").textContent = `Today is ${
  weekday[myDate.getDay()]
}, ${myDate.getDate()} ${month[myDate.getMonth()]} ${myDate.getFullYear()}`;

// display the lastmod date and time
document.getElementById("lastmod").textContent = `Last Modified: ${document.lastModified}`;

// display copyright date
document.querySelector("#copyright").textContent = `©${myDate.getFullYear()}`;

// Create a variable for the meeting banner
const meetingBanner = document.querySelector(".meeting_banner");

// Add an event listener to run when the website has loaded
window.addEventListener("load", () => {
  // displays the banner on Monday's and Tuesday's
  if (myDate.getDay() < 3 && 
    myDate.getDay() > 0) {
    meetingBanner.style.display = "block";
  }
}, false);

// initialize display elements for number of visits and days since information
const visitsDisplay = document.querySelector("#visits");

// get the stored value in localStorage for number of visits
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = `Number of Visits: ${numVisits}`;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// Days Since Last Visit Section
const todayDate = new Date();
let dayBefore = localStorage.getItem('daysSince-ls');

localStorage.setItem('daysSince-ls', todayDate);

dayBefore = Date.parse(dayBefore);

const daysSinceVisit = (todayDate - dayBefore) / (1000 * 3600 * 24);

if (!daysSinceVisit) {
    document.querySelector("#days_since").textContent = `0 days since last visit`
}
else {
    document.querySelector("#days_since").textContent = `${daysSinceVisit.toFixed(0)} days since last visit`;
}