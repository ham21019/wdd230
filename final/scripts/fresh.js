// url variable for fruityvice api
const url = "https://www.fruityvice.com/api/fruit/all";

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

// run function to get API info
apiFetch();

// function httpGet(theUrl) {
//     let xmlHttpReq = new XMLHttpRequest();
//     xmlHttpReq.open("GET", theUrl, false); 
//     return xmlHttpReq.responseText;
//   }

//   console.log(httpGet(url));

// fetch(url)
//     .then(function (response) {
//     return response.json();
//     })
//     .then(function (jsonObject) {
//     console.table(jsonObject);
//     const fruits = jsonObject["fruits"];
//     console.log(fruits)
//     });