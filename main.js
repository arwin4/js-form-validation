const form = document.querySelector('form');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');
const formError = document.querySelector('form + span.error');

function showError() {
  if (email.validity.typeMismatch || email.validity.valueMissing) {
    emailError.textContent = 'Please enter a valid email address';
  }
}

// Perform first check when user exits the input
email.addEventListener('focusout', () => {
  if (!email.validity.valid) {
    email.classList.add('invalid');
    showError();
  }
});

// Remove invalid message and style as soon as the input is valid
email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.textContent = '';
    email.classList.remove('invalid');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.validity.valid) formError.textContent = 'You did it 🙌';
});
