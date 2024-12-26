// JavaScript for Interactive Vision Board

// Array of compliments
const compliments = [
  "Pretty and Perfect, that's you.",
  'Your voice melts me.',
  'Just wow.',
  'Sleepy babe.',
  'Snuggle bug hehe',
  'Crazy 4 u.',
  'Drown Me.',
];

// Variable to store the last compliment shown
let lastCompliment = '';

// Function to get a random compliment
function getRandomCompliment() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * compliments.length);
  } while (compliments[randomIndex] === lastCompliment);

  const selectedCompliment = compliments.splice(randomIndex, 1)[0];
  compliments.push(selectedCompliment); // Add the compliment back to the end
  lastCompliment = selectedCompliment; // Update the last shown compliment
  return selectedCompliment;
}

// Function to display a compliment
function showCompliment() {
  const complimentContainer = document.getElementById('compliment-container');
  const complimentText = getRandomCompliment();

  // Clear previous sticky notes
  complimentContainer.innerHTML = '';

  // Create a sticky note for the compliment
  const stickyNote = document.createElement('div');
  stickyNote.classList.add('compliment-note');
  stickyNote.innerHTML = `<p>${complimentText}</p>`;

  // Append the sticky note to the container
  complimentContainer.appendChild(stickyNote);
}

// Function to add a list item with edit and delete functionality
function addListItem(inputId, listSelector) {
  const input = document.getElementById(inputId);
  const list = document.querySelector(listSelector);

  if (input.value.trim() !== '') {
    const listItem = document.createElement('li');

    // Create the text span
    const textSpan = document.createElement('span');
    textSpan.textContent = input.value;
    textSpan.classList.add('list-item-text');

    // Create the edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('btn', 'btn-primary', 'ms-2');
    editButton.onclick = function () {
      const newValue = prompt('Edit your entry:', textSpan.textContent);
      if (newValue) {
        textSpan.textContent = newValue;
      }
    };

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'btn-danger', 'ms-2');
    deleteButton.onclick = function () {
      list.removeChild(listItem);
    };

    // Append elements to the list item
    listItem.appendChild(textSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // Append the list item to the list
    list.appendChild(listItem);
    input.value = ''; // Clear input field
  }
}

// Event bindings for each card
function addPlace() {
  addListItem('visit-input', '#places-to-visit ul');
}

function addExperience() {
  addListItem('bucket-input', '#bucket-list ul');
}

function addGrowthGoal() {
  addListItem('growth-input', '#personal-growth ul');
}

function addHobby() {
  addListItem('hobby-input', '#hobbies ul');
}

function addRainyDayActivity() {
  addListItem('rainy-input', '#rainy-day ul');
}

// Ensure the ul exists for Personal Growth
(function ensureGrowthListExists() {
  const section = document.querySelector('#personal-growth');
  if (!section.querySelector('ul')) {
    const growthList = document.createElement('ul');
    section.appendChild(growthList);
  }
})();
