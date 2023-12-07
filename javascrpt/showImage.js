import changeImageUsingArrows from './changeImageUsingArrows.js';
import closeImage from './closeImage.js';

export default function showImage(data, imageID){
    //creating img with background
    const showImageContainer = document.createElement('div');
    document.body.appendChild(showImageContainer);
    showImageContainer.classList.add('show-image-container');
    //left arrow
    const leftArrow = document.createElement('span');
    showImageContainer.appendChild(leftArrow);
    leftArrow.classList.add('left-arrow');
    
    //img
    const htmlImg = document.createElement('img');
    showImageContainer.appendChild(htmlImg);
    const imageUrl = data.find(el => el.id === imageID).url;
    htmlImg.setAttribute('src', imageUrl);
    document.body.style.overflow = 'hidden';

    //right arrow
    const rightArrow = document.createElement('span');
    showImageContainer.appendChild(rightArrow);
    rightArrow.classList.add('right-arrow');

// change image functions 
    changeImageUsingArrows(data, imageID);

//close image
    closeImage();
}