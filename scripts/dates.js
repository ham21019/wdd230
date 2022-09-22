// I learned this date format last semester in Bro. Blazzard's CSE121B class

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

// display the lastMod
document.getElementById("lastmod").textContent = document.lastModified;

// display copyright date
document.querySelector("#copyright").textContent = `${myDate.getFullYear()}`;