// Single element by CSS selector
const inputByQS = document.querySelector('#task-input'); // Same as getElementById
console.log('inputByQS:', inputByQS); // Shows the input element

const firstTask = document.querySelector('.task'); // First element with class 'task'
console.log('firstTask:', firstTask); // Shows the first .task element

// Multiple elements by CSS selector
const allTasks = document.querySelectorAll('.task'); // NodeList of all elements with class 'task'
console.log('allTasks:', allTasks); // Shows NodeList of all .task elements

// By class name (HTMLCollection)
const tasksByClass = document.getElementsByClassName('task');
console.log('tasksByClass:', tasksByClass); // Shows HTMLCollection of .task elements

// By tag name (HTMLCollection)
const allListItems = document.getElementsByTagName('li');
console.log('allListItems:', allListItems); // Shows HTMLCollection of <li> elements

// By name attribute (NodeList)
const inputsByName = document.getElementsByName('task-input'); // Only works if input has name="task-input"
console.log('inputsByName:', inputsByName); // Shows NodeList of elements with name="task-input"

// --- End DOM Selection Examples ---
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

const content2 = document.getElementById('content2');
console.log(content2);

content2.textContent = "Helllooooo";


const image = document.getElementById('dog');

image.textContent = "awfaowhfawouawf";


    const element = document.getElementById('dog');
    const attributes = element.attributes;

    for (let i = 0; i < attributes.length; i++) {
        const attributeName = attributes[i].nodeName;
        const attributeValue = attributes[i].nodeValue;
        console.log(`${attributeName}: ${attributeValue}`);
    }

// Add Task Event

  
content2.innerHTML = '<p> hi <strong> BOLD </strong> hi </p>'


const newParagraph = document.createElement('p');
newParagraph.textContent = "Hellooo";
newParagraph.id = "special-paragraph"

content2.appendChild(newParagraph);

content2.removeChild(newParagraph)


const addButton = document.getElementById('add-button');
addButton.textContent = "Hiii";

addButton.addEventListener('click', function(event) {

  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  // Create new task elements
  const li = document.createElement('li');
  li.className = 'task';
  li.textContent = taskText;

  // Create Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';
  li.appendChild(deleteBtn);

  // Add to list
  taskList.appendChild(li);
  taskInput.value = '';
});

// Event Delegation for task actions
// Handles both delete and complete
// Only one listener for efficiency

taskList.addEventListener('click', function(event) {
  const target = event.target;
  console.log(target)
  if (target.classList.contains('delete-btn')) {
    // Delete button clicked
    target.parentElement.remove();
  } else if (target.classList.contains('task')) {
    // Task text clicked
    target.classList.toggle('completed');
  }
});

