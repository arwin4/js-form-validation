const form = document.querySelector('form');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');
const formError = document.querySelector('form + span.error');

function showError() {
  if (email.validity.typeMismatch || email.value.length < 1) {
    emailError.textContent = 'Please enter a valid email address';
  }
}

email.addEventListener('focusout', () => {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else showError();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.validity.valid) formError.textContent = 'You did it 🙌';
});
