export default function headerToggle(){
    const header = document.querySelector('#header');
    let screenArray = [];
    window.addEventListener('scroll', e => {
        if(window.scrollY < 200) return;
        screenArray.push(window.scrollY);
        const maxNum = Math.max(...screenArray)
        if(maxNum > window.scrollY) {
            screenArray = []
            header.style.top = '0'
        }
        if(screenArray.length > 30){
            header.style.top = '-150px'
        }
    });
}