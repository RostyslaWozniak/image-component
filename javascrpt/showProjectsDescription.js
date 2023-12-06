export default function showProjectsDescription(){
    const projects = document.querySelectorAll('.image-box');
    projects.forEach(project => project.addEventListener('mouseover', () => {
        project.classList.add('active-image-box');
    }))
    projects.forEach(project => project.addEventListener('mouseout', () => {
        project.classList.remove('active-image-box');
    }))
}