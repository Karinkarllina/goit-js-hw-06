const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryListEl = document.querySelector('.gallery');

const makeGalleryEl = ({ url, alt, }) =>
  `<li>
    <img class = "gallery-item" src = "${url}" alt = "${alt}">
  </li>`;

const markup = images.map(img => 
  makeGalleryEl(img)).join('');

galleryListEl.insertAdjacentHTML('afterbegin', markup);

console.log(galleryListEl);





// const galleryImgEl = images.map(img => {
//   `<li>
//     <img class = "gallery-item" src = "${img.url}" alt = "${img.alt}"></img>
//   </li>`
// });

// galleryListEl.insertAdjacentElement('afterbegin', galleryImgEl);
