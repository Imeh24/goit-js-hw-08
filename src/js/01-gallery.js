import SimpleLightbox from "simplelightbox";
// Additional styles import

import "simplelightbox/dist/simple-lightbox.min.css";


import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const createGallery = (el) => {
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
    </li >

    `;
    })
    .join("");
};

const photosMarkup = createGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend", photosMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

lightbox.on("show.simpleLightbox");