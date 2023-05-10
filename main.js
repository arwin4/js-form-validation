const form = document.querySelector('form');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');
const formError = document.querySelector('form + span.error');

function showError() {
  if (email.validity.typeMismatch || email.value.length < 1) {
    emailError.textContent = 'Please enter a valid email address';
    email.className = 'invalid';
  }
}

// Perform first check when user exits the input
email.addEventListener('focusout', (e) => {
  if (email.validity.valid) {
    emailError.textContent = '';
    email.classList.remove('invalid');
  } else showError(e);
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
