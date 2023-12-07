import showImage from './showImage.js'
export default function showProjectImage(data){
    const buttons = document.querySelectorAll('.image-button');
    
    buttons.forEach(btn => btn.addEventListener('click', function(e){
        
        const id = Number(btn.getAttribute('id'))
        const img =  data.find(element => element.id === id);
        e.stopPropagation();
        showImage(data, img.id)
        
    }))

}