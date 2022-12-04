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

// fetch and process json file
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    let optionOne;
    let optionTwo;
    let optionThree;

    // for loop found on: https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json
    for (let i = 0; i < jsonObject.length; i++) {
      optionOne = document.createElement("option");
      optionOne.text = jsonObject[i].name;
      dropdownOne.add(optionOne);

      optionTwo = document.createElement("option");
      optionTwo.text = jsonObject[i].name;
      dropdownTwo.add(optinoTwo);

      optionThree = document.createElement("option");
      optionThree.text = jsonObject[i].name;
      dropdownThree.add(optionThree);
    }
  });

// form submission handling found on: https://stackoverflow.com/questions/62326521/how-do-i-get-form-submit-event-listener-to-work-in-js
myForm = document.querySelector("form[name=myForm]");
myForm.querySelector("button").addEventListener('click', function() {
  myForm.requestSubmit();
})

myForm.addEventListener('submit', function(e) {
  e.preventDefault()
  console.log("Submitting form");
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

  let result = `
    Order Date: ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()},
    First Name: ${formName},
    Email: ${formEmail},
    Phone: ${formPhone},
    Fruit #1: ${formFruitOne},
    Fruit #2: ${formFruitTwo},
    Fruit #3: ${formFruitThree},
    Special Instructions: ${formSpecial}`;
  
  document.querySelector("#new_drink").textContent = result;

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