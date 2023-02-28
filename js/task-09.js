function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorEl = document.querySelector('.color');
const cangeColorEl = document.querySelector('.change-color');
const bodyEl = document.body;

cangeColorEl.addEventListener('click', onChangeColor);

function onChangeColor () {
  colorEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
  
}
