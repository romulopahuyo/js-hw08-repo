// 1. Start
// 2. Import the SimpleLightbox library
// 3. Import SimpleLightbox CSS styles
// 4. Import galleryItems array from 'gallery-items.js'

// 5. Select the element with class 'gallery' and store it in galleryList

// 6. Define function createGallery that takes an array of elements (el) as an argument
//     6.1 For each element in the array, map over it to transform each item into HTML string format
//         - Each item will include an 'li' element with class 'gallery__item'
//         - Within each 'li', include an 'a' element with class 'gallery__link' pointing to the original image
//         - Within each 'a', include an 'img' element with class 'gallery__image', src set to the preview image, data-source set to the original image, and alt set to the image description
//     6.2 Join all mapped strings into a single HTML string without separators
//     6.3 Return the resulting HTML string

// 7. Generate gallery markup by calling createGallery with galleryItems as the argument and store the result in photosMarkup

// 8. Insert photosMarkup into galleryList using insertAdjacentHTML at the 'beforeend' position

// 9. Initialize a new SimpleLightbox instance on all 'a' elements within '.gallery', with the following options:
//     - captionsData set to 'alt' to use the alt text of images as captions
//     - captionDelay set to 250 milliseconds to delay the appearance of captions
//     - captionPosition set to "bottom" to position captions at the bottom

// 10. End

// Described in documentation;
import SimpleLightbox from 'simplelightbox';
// Additional styles import

import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);
const galleryList = document.querySelector('.gallery');
const createGallery = el => {
  return el
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join('');
};
const photosMarkup = createGallery(galleryItems);
galleryList.insertAdjacentHTML('beforeend', photosMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
