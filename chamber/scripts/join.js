// Create a new date object called myDate
let myDate = new Date();

// populate date field on join page
document.querySelector("#date").value = myDate;

// test output to the console
console.log(document.querySelector("#date").value)

// display the lastmod date and time
document.getElementById("lastmod").textContent = `Last Modified: ${document.lastModified}`;