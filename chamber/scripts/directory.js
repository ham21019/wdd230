const cards = document.querySelector(".cards");

const fetchJSON = async () => {
    const jsonURL = "json/data.json";
    const req = new Request(jsonURL);
    const res = await fetch(req);
    const jsonObject = await res.json();
    const businesses = jsonObject["businesses"];

    businesses.forEach(displayCards);
};

fetchJSON();

const displayCards = (cardObj) => {
  let card = document.createElement("section");
  let name = document.createElement("h2");
  let category = document.createElement("h3");
  let addr = document.createElement("p");
  let phone = document.createElement("p");
  let url = document.createElement("a");
  let member = document.createElement("p");
  let logo = document.createElement("img");

  logo.setAttribute("src", cardObj.logo);
  logo.setAttribute("alt", `Logo image for ${cardObj.name}.`);
  logo.setAttribute("width", 160)
  logo.setAttribute("loading", "lazy");

  name.textContent = `${cardObj.name}`;
  name.className = "dir-name";

  category.textContent = `${cardObj.category}`;
  category.className = "dir-category";

  url.textContent = `${cardObj.url}`;
  url.className = "dir-url";
  url.href = `${cardObj.url}`;
  url.target = "_blank";
  url.rel = "noopener noreferrer";

  addr.textContent = `${cardObj.address}`;
  addr.className = "dir-addr";

  phone.textContent = `Phone: ${cardObj.phone}`;
  phone.className = "dir-phone";

  member.textContent = `${cardObj.member} member`;
  member.className = `dir-member ${cardObj.member.toLowerCase()}`;

  card.appendChild(name);
  card.appendChild(logo);
  card.appendChild(category);
  card.appendChild(url);
  card.appendChild(addr);
  card.appendChild(phone);
  card.appendChild(member);

  document.querySelector(".cards").appendChild(card);
};

const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");
const main = document.querySelector(".cards");

gridBtn.addEventListener("click", function () {
  main.classList.add("cards");
  main.classList.remove("list");
});

listBtn.addEventListener("click", function () {
  main.classList.add("list");
  main.classList.remove("cards");
});

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