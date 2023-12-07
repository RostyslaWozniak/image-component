export default function changeImageUsingArrows(data, imageID){
    const htmlImg = document.querySelector('.show-image-container img');
    const rightArrow = document.querySelector('.right-arrow');
    const leftArrow = document.querySelector('.left-arrow');

    const imagesUrlArray = data.map(el => el.url);
    let imageIndex = data.findIndex(el => el.id === imageID);
    hideArrows()
    // right achange image
    rightArrow.addEventListener('click', e => {
        e.stopPropagation();
        //change image with animation
        changeImageWithAnimation('animation-change-image-right');
    });
    //left change image
    leftArrow.addEventListener('click', e => {
        e.stopPropagation();
        //change image with animation
        changeImageWithAnimation('animation-change-image-left');
    });
    //event on keydown
    document.addEventListener('keydown', e => {
        // right arrow
        if(e.key === 'ArrowRight'){ 
            if(imageIndex + 1 === imagesUrlArray.length) return;
            //arrow nimation
            rightArrow.classList.add('right-arrow-animation');
            setTimeout(() => {
                rightArrow.classList.remove('right-arrow-animation');
            }, 200);
            //change image with animation 
            changeImageWithAnimation('animation-change-image-right');
        }
        // left arrow
        if(e.key === 'ArrowLeft'){
            if(imageIndex === 0) return;
            //arrow nimation
            leftArrow.classList.add('.left-arrow-animation');
            setTimeout(() => {
                leftArrow.classList.remove('.left-arrow-animation')
            }, 200);
            //change image with animation
            changeImageWithAnimation('animation-change-image-left');
        }
    });

    //change image with animation
    function changeImageWithAnimation(animationClassName){
        htmlImg.classList.add(animationClassName)
        setTimeout(() => {
            animationClassName === 'animation-change-image-right' ? imageIndex++ : imageIndex--;
            hideArrows();
            htmlImg.setAttribute('src', imagesUrlArray[imageIndex]);
        }, 400);
        setTimeout(() => htmlImg.classList.remove(animationClassName), 1000);
    }

    //hide or show arrows
    function hideArrows(){
        imageIndex === 0 ? leftArrow.style.display = 'none' : leftArrow.style.display = 'block'
        imageIndex + 1 === imagesUrlArray.length ? rightArrow.style.display = 'none' : rightArrow.style.display = 'block'
    }
}