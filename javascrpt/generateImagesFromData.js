export default function generateImagesFromData(imageObj){
    const mainContainer = document.querySelector('.images-container');
    //BOX
    const imageBox = document.createElement('div');
    mainContainer.appendChild(imageBox);
    imageBox.classList.add('image-box');
    imageBox.style.backgroundImage = `url('${imageObj.url}'`;

    //brightness element
    const imageBrightnessElement = document.createElement('div');
    imageBrightnessElement.classList.add('image-brightness');
    imageBox.appendChild(imageBrightnessElement);
    
    //button
    const imageButton = document.createElement('button');
    imageButton.classList.add('image-button');
    imageBrightnessElement.appendChild(imageButton);
    imageButton.setAttribute('id', imageObj.id);
    imageButton.innerText = imageObj.name;
}

