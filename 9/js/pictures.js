import { createPhotoDescriptions } from './data.js';
import { openBigPicture } from './bigPicture.js';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPictures = createPhotoDescriptions();

const similarListFragment = document.createDocumentFragment();

createPictures.forEach((photo) => {
  const { url, description, likes, comments } = photo;
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;
  similarListFragment.appendChild(picture);

  picture.addEventListener('click', () => {
    openBigPicture(photo);
  });
});

picturesList.appendChild(similarListFragment);
