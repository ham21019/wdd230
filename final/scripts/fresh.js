// const fetchJSON = async () => {
//     const jsonURL = "json/fruits.json";
//     const req = new Request(jsonURL);
//     const res = await fetch(req);
//     const jsonObject = await res.json();
//     const fruits = jsonObject["fruits"];
//     console.log(fruits)
//     // businesses.forEach(displayCards);
// };

// fetchJSON();

// const getData = () => {
//     sendHttpRequest('GET', "https://www.fruityvice.com/api/fruit/all").then(responseData => {
//       console.log(responseData);
//     });
//   };

//   getData()

// const url = "https://www.fruityvice.com/api/fruit/all";

// // apiFetch function to get JSON information
// async function apiFetch() {
//     const response = await fetch(url, {mode: "no-cors"});
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data); // test output in the console
//       // displayResults(data);
//     }
// }

// // run function to get API info
// apiFetch();

// function onGet() {
//   const url = https://www.fruityvice.com/api/fruit/all;
//   var headers = {}
  
//   fetch(url, {
//       method : "GET",
//       mode: 'no-cors',
//       headers: headers
//   })
//   .then((response) => {
//       if (!response.ok) {
//           throw new Error(response.error)
//       }
//       return response.json();
//   })
//   .then(data => {
//       document.getElementById('test').value = data.messages;
//   })
//   .catch(function(error) {
//       document.getElementById('test').value = error;
//   });
// }

const requestURL = "https://www.fruityvice.com/api/fruit/all";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const fruits = jsonObject["fruits"];

    fruits.forEach(displayFruits);
  });

function displayFruits(fruits) {
  document.querySelector("#test").textContent = hello;
}