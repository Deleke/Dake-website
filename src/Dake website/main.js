//Selectors
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

window.addEventListener('scroll', function () {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('active', window.scrollY > 0)
})

hamburgerMenu.addEventListener('click', function(){
    console.log('clicked menu');
    header.classList.toggle('menu-open');
});