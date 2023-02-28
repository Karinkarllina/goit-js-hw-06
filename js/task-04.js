const btnDecrementEl = document.querySelector('button[data-action="decrement"]');

const btnIncrementtEl = document.querySelector('button[data-action="increment"]');

const valueEl = document.querySelector('#value');

let counterValue = 0;

btnDecrementEl.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

btnIncrementtEl.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});