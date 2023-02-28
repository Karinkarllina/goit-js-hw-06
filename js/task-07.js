const inputEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector('#text');


inputEl.addEventListener('input', onInputName);


function onInputName(event) {
    spanTextEl.style.fontSize = event.currentTarget.value + 'px';
}