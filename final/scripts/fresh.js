const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";
const test = document.querySelector("#test");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const fruits = jsonObject["fruits"];

    // fruits.forEach(displayFruits);
  });

// // displayfruits function
// function displayfruits(fruit) {
//     let card = document.createElement("section");
//     let h2 = document.createElement("h2");
//     let portrait = document.createElement("img");
//     let birth = document.createElement("p");
  
//     // Change the textContent property of the h2 element to contain the fruit's full name
//     h2.textContent = `${fruit.name} ${fruit.lastname}`;
  
//     // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
//     portrait.setAttribute("src", fruit.imageurl);
//     portrait.setAttribute("alt", `Portait of ${fruit.name} ${fruit.lastname}`);
//     portrait.setAttribute("loading", "lazy");
    
//     // birth place and birth date
//     birth.textContent = `Born in ${fruit.birthplace} on ${fruit.birthdate}`;
  
//     // Add/append the section(card) with the h2 element
//     card.appendChild(h2);
//     card.appendChild(portrait);
//     card.appendChild(birth);
  
//     // Add/append the existing HTML div with the cards class with the section(card)
//     document.querySelector('div.cards').appendChild(card);
//   }