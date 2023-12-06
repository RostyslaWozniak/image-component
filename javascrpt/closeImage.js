export default function closeImage(){
    const showImageContainer = document.querySelector('.show-image-container');
    const htmlImg = document.querySelector('.show-image-container img');
    showImageContainer.addEventListener('click', () => {
        showImageContainer.remove()
        document.body.style.overflowY = 'scroll';
    });
    htmlImg.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('hello')
        showImageContainer.classList.toggle('zoom-project-image');
        showImageContainer.style.overflow = 'scroll';
    });
    document.addEventListener('keydown', e => {
        if(e.key === 'Escape'){
            showImageContainer.remove()
            document.body.style.overflowY = 'scroll';
        }
    });
}