// define url for fetch request
const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";

// define dropdown variables
let dropdownOne = document.querySelector("#dropdown_one");
dropdownOne.length = 0;
let dropdownTwo = document.querySelector("#dropdown_two");
dropdownOne.length = 0;
let dropdownThree = document.querySelector("#dropdown_three");
dropdownOne.length = 0;

// define default option text
let defaultOptionOne = document.createElement("option");
defaultOptionOne.text = "Choose Your Fruit"
let defaultOptionTwo = document.createElement("option");
defaultOptionTwo.text = "Choose Your Fruit"
let defaultOptionThree = document.createElement("option");
defaultOptionThree.text = "Choose Your Fruit"


// add default option text to top of drop downs
dropdownOne.add(defaultOptionOne);
dropdownOne.selectedIndex = 0;
dropdownTwo.add(defaultOptionTwo);
dropdownTwo.selectedIndex = 0;
dropdownThree.add(defaultOptionThree);
dropdownThree.selectedIndex = 0;

// document.querySelector("#fruit_one_carbs").value = jsonObject[i].nutritions.carbohydrates;

// fetch and process json file
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    let optionOne;
    let optionTwo;
    let optionThree;
    fruits = jsonObject;
    console.log(fruits);

    // for loop found on: https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json
    for (let i = 0; i < jsonObject.length; i++) {
      optionOne = document.createElement("option");
      optionOne.text = jsonObject[i].name;
      dropdownOne.add(optionOne);
      
      optionTwo = document.createElement("option");
      optionTwo.text = jsonObject[i].name;
      dropdownTwo.add(optionTwo);
      
      optionThree = document.createElement("option");
      optionThree.text = jsonObject[i].name;
      dropdownThree.add(optionThree);
    }
    return fruits;
  });

// form submission handling found on: https://stackoverflow.com/questions/62326521/how-do-i-get-form-submit-event-listener-to-work-in-js
myForm = document.querySelector("form[name=myForm]");
myForm.querySelector("button").addEventListener('click', function() {
  myForm.requestSubmit();
})

myForm.addEventListener('submit', function(e) {
  e.preventDefault()
  // console.log("Submitting form");
  displayForm()
})

function displayForm() {
  // gather input information
  let formName = document.querySelector("#form_first").value;
  let formEmail = document.querySelector("#form_email").value;
  let formPhone = document.querySelector("#form_phone").value;
  let formFruitOne = document.querySelector("#dropdown_one").value;
  let formFruitTwo = document.querySelector("#dropdown_two").value;
  let formFruitThree = document.querySelector("#dropdown_three").value;
  let formSpecial = document.querySelector("#form_special").value;

  // create date variable for order date
  const date = new Date();

  // carb variables
  let fruitCarbOne = fruits.filter(function(fruit) {return fruit.name == document.querySelector("#dropdown_one").value ;});
  let fruitCarbTwo = fruits.filter(function(fruit) {return fruit.name == document.querySelector("#dropdown_two").value ;});
  let fruitCarbThree = fruits.filter(function(fruit) {return fruit.name == document.querySelector("#dropdown_three").value ;});
  let carbTotal = fruitCarbOne[0].nutritions.carbohydrates + fruitCarbTwo[0].nutritions.carbohydrates + fruitCarbThree[0].nutritions.carbohydrates;

  // protein variables
  let fruitProteinOne = fruits.filter(function(fruit) {return fruit.name == document.querySelector("#dropdown_one").value ;});
  let fruitProteinTwo = fruits.filter(function(fruit) {return fruit.name == document.querySelector("#dropdown_two").value ;});
  let fruitProteinThree = fruits.filter(function(fruit) {return fruit.name == document.querySelector("#dropdown_three").value ;});
  let proteinTotal = fruitProteinOne[0].nutritions.protein + fruitProteinTwo[0].nutritions.protein + fruitProteinThree[0].nutritions.protein;

  // fat variables
  let fruitFatOne = fruits.filter(function(fruit) {return fruit.name == document.querySelector("#dropdown_one").value ;});
  let fruitFatTwo = fruits.filter(function(fruit) {return fruit.name == document.querySelector("#dropdown_two").value ;});
  let fruitFatThree = fruits.filter(function(fruit) {return fruit.name == document.querySelector("#dropdown_three").value ;});
  let fatTotal = fruitFatOne[0].nutritions.fat + fruitFatTwo[0].nutritions.fat + fruitFatThree[0].nutritions.fat;

  // sugar variables
  let fruitSugarOne = fruits.filter(function(fruit) {return fruit.name == document.querySelector("#dropdown_one").value ;});
  let fruitSugarTwo = fruits.filter(function(fruit) {return fruit.name == document.querySelector("#dropdown_two").value ;});
  let fruitSugarThree = fruits.filter(function(fruit) {return fruit.name == document.querySelector("#dropdown_three").value ;});
  let sugarTotal = fruitSugarOne[0].nutritions.sugar + fruitSugarTwo[0].nutritions.sugar + fruitSugarThree[0].nutritions.sugar;
  
  let result = `
    <table>
      <caption>Your Order Information</caption>
      <tbody>
        <tr>
          <td>Order Date: </td>
          <td>${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}</td>
        </tr>
        <tr>
          <td>First Name: </td>
          <td>${formName}</td>
        </tr>
        <tr>
          <td>Email: </td>
          <td>${formEmail}</td>
        </tr>
        <tr>
          <td>Phone: </td>
          <td>${formPhone}</td>
        </tr>
        <tr>
          <td>Fruit #1: </td>
          <td>${formFruitOne}</td>
        </tr>
        <tr>
          <td>Fruit #2: </td>
          <td>${formFruitTwo}</td>
        </tr>
        <tr>
          <td>Fruit #3: </td>
          <td>${formFruitThree}</td>
        </tr>
        <tr>
          <td>Special Instructions: </td>
          <td>${formSpecial}</td>
        </tr>
        <tr>
          <td>Total Carbs: </td>
          <td>${carbTotal} grams</td>
        </tr>
        <tr>
          <td>Total Protein: </td>
          <td>${proteinTotal} grams</td>
        </tr>
        <tr>
          <td>Total Fat: </td>
          <td>${fatTotal} grams</td>
        </tr>
        <tr>
          <td>Total Sugar: </td>
          <td>${sugarTotal} grams</td>
        </tr>
    </table>`;
  
  document.querySelector("#new_drink").innerHTML = result;

  // reset form
  document.querySelector("#form_first").value = "";
  document.querySelector("#form_email").value = "";
  document.querySelector("#form_phone").value = "";
  document.querySelector("#dropdown_one").value = "";
  document.querySelector("#dropdown_two").value = "";
  document.querySelector("#dropdown_three").value = "";
  document.querySelector("#form_special").value = "";

  // set localStorage Value or increase by one
  let smoothieCounter = Number(window.localStorage.getItem("smoothies"));
  smoothieCounter++;
  localStorage.setItem("smoothies", smoothieCounter);
}