'use strict'
import dataFromJSON from './data.json' assert {type: 'json'};

import generateImagesFromData from './javascrpt/generateImagesFromData.js';
import showProjectsDescription from './javascrpt/showProjectsDescription.js';
import showProjectImage from './javascrpt/showProjectImage.js';
import backgroundAnimation from './javascrpt/backgroundAnimation.js';
import headerToggle from './javascrpt/headerToggle.js';


const data = [...dataFromJSON]

// const searchInput = document.querySelector('.search-input');
// const searchBtn = document.querySelector('.search-btn');
// searchBtn.addEventListener('click', () => {
   

//     data.forEach(image => {
//         if(image.name === searchInput.value){
//             generateImagesFromData(image)
//             console.log(image)
//         }
        
//     })
    
// })

export default data;





//start program
data.forEach(imageObj => generateImagesFromData(imageObj));

//showing img name while hovering
showProjectsDescription();

//enlarge the image on click
showProjectImage();

//background
setInterval(backgroundAnimation, 500);

// toggle header bar
headerToggle();

