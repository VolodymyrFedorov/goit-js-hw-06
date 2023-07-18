const validationInput = document.getElementById('validation-input');

const validLength = Number(validationInput.getAttribute('data-length'));

validationInput.addEventListener('blur', () => {
    const inputLength = validationInput.value.length;
    
  if (inputLength === validLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});
