export default function backgroundAnimation(){
    const bubbleContainer = document.createElement('div');
    document.body.appendChild(bubbleContainer);
    bubbleContainer.classList.add('buble-container');

    const bubble = document.createElement('img');
    bubble.classList.add('bubble');
    bubble.setAttribute('src', './images/svg/bubble.svg');
    bubbleContainer.appendChild(bubble);

    const animationDuration = Math.floor(Math.random() * (10 - 4 + 1) + 4);
    const bubbleSize = Math.floor(Math.random() * (300 - 50 + 1) + 50);
    const bubblePosition = Math.floor(Math.random() * window.innerWidth);

    bubbleContainer.style.left = `${bubblePosition}px`;

    bubble.style.animation = `goUpAndRotateElement ${animationDuration}s linear, inlineMove 3s alternate infinite`;
    bubble.style.width = `${bubbleSize}px`;
    setTimeout(() => bubbleContainer.remove(), animationDuration * 990);

    bubbleContainer.addEventListener('click', () => bubbleContainer.remove());




    
    // console.log(bubbleContainer.style.left)
    // // console.log(bubbleContainer.style.left - 100)
    // window.addEventListener('mousemove', e => {
    //     const bublePosition = parseInt(bubbleContainer.style.left.slice(0, -2));
    //     // console.log(bublePosition)
    //     if(bublePosition === e.clientY){
    //         bubbleContainer.style.left = `${bublePosition - 500}px`;
    //         console.log('hello')
    //     }
    //     // console.log(e.clientX, e.clientY) 
        
    //     // bubbleContainer.style.left = `${e.clientX}px`;
    //     // bubbleContainer.style.top = `${e.clientY}px`;
    // });

   
}