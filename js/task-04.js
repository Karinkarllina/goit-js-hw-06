const btnDecrementEl = document.querySelector('button[data-action="decrement"]');

const btnIncrementtEl = document.querySelector('button[data-action="increment"]');

const valueEl = document.querySelector('#value');

btnDecrementEl.addEventListener('click', () => {

    valueEl.textContent -= 1;
});

btnIncrementtEl.addEventListener('click', () => {
    let counterValue = parseInt(valueEl.textContent);
    valueEl.textContent = counterValue + 1;
});