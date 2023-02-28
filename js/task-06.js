const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onBlurInputColor);


function onBlurInputColor(event) {
    const inputLength = inputEl.dataset.length;
    const inputValueLength = inputEl.value.length; 
    if (inputLength == inputValueLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    else {
        inputEl.classList.add('invalid');
    }
}





























