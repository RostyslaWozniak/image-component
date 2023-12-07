'use strict'
import dataFromJSON from './data.json' assert {type: 'json'};

import generateImagesFromData from './javascrpt/generateImagesFromData.js';
import showProjectsDescription from './javascrpt/showProjectsDescription.js';
import showProjectImage from './javascrpt/showProjectImage.js';
import backgroundAnimation from './javascrpt/backgroundAnimation.js';
import headerToggle from './javascrpt/headerToggle.js';


let data = [...dataFromJSON];

//start program
data.forEach(imageObj => {
    generateImagesFromData(imageObj)

});
//showing img name while hovering
showProjectsDescription();
        
//enlarge the image on click
showProjectImage(data);



//search
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('input', () => {
    
    const images = document.querySelectorAll('.image-box');
    data = [];
    images.forEach(image => image.remove());

    data = dataFromJSON.filter(el => searchInput.value.toLowerCase().split('').every(char => el.name.toLowerCase().includes(char)));
    data.forEach(imageObj => {
        generateImagesFromData(imageObj);
    });
    //showing img name while hovering
    showProjectsDescription();
            
    //enlarge the image on click
    showProjectImage(data);
});

export default data;







//background
setInterval(backgroundAnimation, 500);

// toggle header bar
headerToggle();
