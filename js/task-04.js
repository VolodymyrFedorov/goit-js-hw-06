const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counterValue = document.getElementById('value');

let counter = 0;

decrementButton.addEventListener('click', () => {
  counter -= 1;
  counterValue.textContent = counter;
});

incrementButton.addEventListener('click', () => {
  counter += 1;
  counterValue.textContent = counter;
});
