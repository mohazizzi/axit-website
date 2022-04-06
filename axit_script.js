

const menuTogller = document.querySelector('[data-menu-toggler]');
const navbar = document.querySelector('[data-navbar]');


menuTogller.addEventListener('click', ()=>{
    menuTogller.classList.toggle('active');
    navbar.classList.toggle('open');
})