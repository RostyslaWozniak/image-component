// import { data }  from '../main.js';
import data  from '../main.js';

export default function changeImageUsingArrows(imageID){
    const htmlImg = document.querySelector('.show-image-container img');
    const rightArrow = document.querySelector('.right-arrow');
    const leftArrow = document.querySelector('.left-arrow');

    const imagesUrlArray = data.map(el => el.url);
    let imageIndex = data.find(el => el.id === imageID).id - 1;
    
    hideArrows()
    // right arrow
    rightArrow.addEventListener('click', e => {
        e.stopPropagation()
        imageIndex++
        hideArrows()
        htmlImg.setAttribute('src', imagesUrlArray[imageIndex]);
    });
    //left arrow
    leftArrow.addEventListener('click', e => {
        e.stopPropagation()
        imageIndex--
        hideArrows()
        htmlImg.setAttribute('src', imagesUrlArray[imageIndex]);
    });
    //event on keydown
    document.addEventListener('keydown', e => {
        // right arrow
        if(e.key === 'ArrowRight'){ 
            if(imageIndex + 1 === imagesUrlArray.length) return;
            imageIndex++
            hideArrows();
            htmlImg.setAttribute('src', imagesUrlArray[imageIndex]);
            rightArrow.style.scale = '130%';
            rightArrow.style.rotate = '5deg';
            setTimeout(() => {
                rightArrow.style.scale = '100%';
                rightArrow.style.rotate = '0deg';

            }, 200);
        }
        // left arrow
        if(e.key === 'ArrowLeft'){
            if(imageIndex === 0) return;
            imageIndex--
            hideArrows()
            htmlImg.setAttribute('src', imagesUrlArray[imageIndex]);
            leftArrow.style.scale = '130%';
            leftArrow.style.rotate = '-5deg';
            setTimeout(() => {
                leftArrow.style.scale = '100%';
                leftArrow.style.rotate = '0deg';
            }, 200);
        }
    })
    
    //hide or show arrows
    function hideArrows(){
        imageIndex === 0 ? leftArrow.style.display = 'none' : leftArrow.style.display = 'block'
        imageIndex + 1 === imagesUrlArray.length ? rightArrow.style.display = 'none' : rightArrow.style.display = 'block'
    }
}