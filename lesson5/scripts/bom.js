// define default varialbes
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

// button function
button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  // create HTML elements
  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  // add myItem to the list
  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = '❌';
  list.appendChild(listItem);

  // delete button functionality
  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  // retun focus
  input.focus();
});