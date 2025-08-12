// Interactive Forms Demo JS
// This file demonstrates how to work with forms and inputs using JavaScript

const form = document.getElementById('demo-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const favoriteInput = document.getElementById('favorite');
const output = document.getElementById('form-output');
const list = document.getElementById('form-list');


// Helper function to validate email format
function isValidEmail(email) {
  // Regex breakdown:
  // ^         : Start of string
  // [^@\s]+   : One or more characters that are NOT '@' or whitespace (local part)
  // @         : The '@' symbol
  // [^@\s]+   : One or more characters that are NOT '@' or whitespace (domain part)
  // \.        : A literal dot '.'
  // [^@\s]+   : One or more characters that are NOT '@' or whitespace (top-level domain)
  // $         : End of string
  // This matches basic emails like 'user@example.com', but does NOT cover all valid emails.
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

function simplerIsValidEmail(email) {
    if (!email) return false;
    if (!email.includes('@') || email.indexOf('.') < email.indexOf('@')) return false;
    return true;
}

// Simpler valid email check (checks for '@' and '.')
function isSimpleEmail(email) {
  // Checks if email contains '@' and '.' after '@'
  const atIndex = email.indexOf('@');
  const dotIndex = email.lastIndexOf('.');
  // '@' must exist, '.' must exist after '@', and neither can be at the start/end
  return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload
  output.textContent = '';

  // Get values from inputs
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const favorite = favoriteInput.value.trim();

  // Simple length validation
  if (name.length < 2) {
    output.textContent = 'Name must be at least 2 characters.';
    return;
  }

  // Email format validation
  if (!isValidEmail(email)) {
    output.textContent = 'Please enter a valid email address.';
    return;
  }

  // Show collected data
  const info = `Name: ${name}, Email: ${email}, Favorite Color: ${favorite || 'N/A'}`;
  output.textContent = 'Form submitted successfully!';

  // Add to list
  const li = document.createElement('li');
  li.textContent = info;
  list.appendChild(li);

  // Clear form fields
  form.reset();
});
