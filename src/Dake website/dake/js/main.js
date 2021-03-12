//Selectors
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

// window.addEventListener('scroll', function() {
//     header.classList.toggle('active', windowPosition)
// })

hamburgerMenu.addEventListener('click', function(){
    console.log('clicked menu');
    header.classList.toggle('menu-open');
})