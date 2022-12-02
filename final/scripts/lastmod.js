// Create a new date object called myDate
let myDate = new Date();

// display the lastmod date and time
document.querySelector("#lastmod").textContent = `©${myDate.getFullYear()} .:|:. Last Modified: ${document.lastModified}`;