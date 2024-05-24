const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+\d{1,3} \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

const applicationForm = document.querySelector('.application-form');

const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const privacyPolicyCheckbox = document.getElementById('privacy-policy');

IMask(phoneInput, { mask: '+{7} (000) 000-00-00' });

const pristine  = new Pristine(applicationForm, {
  classTo: 'pristine-valide',
  errorTextParent: 'pristine-valide',
  errorTextClass: 'pristine-valide--error'
});

// Валидация телефона
const isValidPhone = (value) => PHONE_PATTERN.test(value);

// Валидация email
const isValidEmail = (value) => EMAIL_PATTERN.test(value);

// Проверка чекбокса
const isChecked = () => privacyPolicyCheckbox.checked;

pristine.addValidator(phoneInput, isValidPhone, 'Введен неверный формат телефона');
pristine.addValidator(emailInput, isValidEmail, 'Введен неверный формат email');
pristine.addValidator(privacyPolicyCheckbox, isChecked, 'Обязательно примите соглашения');


applicationForm.addEventListener('submit', (event) => {
  const isValid = pristine.validate();
  console.log(isValid)
  if (!isValid) {
    event.preventDefault();
  }
});
