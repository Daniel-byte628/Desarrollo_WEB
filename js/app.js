$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.slider-prev'),
        nextArrow: $('.slider-next'),
    });

    $('.card').hover(function() {
        $(this).toggleClass('expanded');
    });
});

// Script para cambiar la clase de la barra de navegación
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".menu");
    if (window.scrollY > 0) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  });
  
// Script para cambiar la clase de la barra de navegación
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".menu");
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
});


document.getElementById('nextcomida').onclick = function(){
    let lists = document.querySelectorAll('.itemcomida');
    document.getElementById('slidecomida').appendChild(lists[0]);
}
document.getElementById('prevcomida').onclick = function(){
    let lists = document.querySelectorAll('.itemcomida');
    document.getElementById('slidecomida').prepend(lists[lists.length - 1]);
}


document.querySelector('.arrow-link').addEventListener('click', function (e) {
    // Prevenir el comportamiento predeterminado del enlace
    e.preventDefault();

    // Obtiene el valor del atributo "href" del enlace
    const target = this.getAttribute('href');

    // Obtiene la posición (offsetTop) de la sección objetivo
    const targetPosition = document.querySelector(target).offsetTop;

    // Duración del desplazamiento en milisegundos
    const duration = 10000000; // Puedes ajustar esta duración según tu preferencia

    // Realiza el desplazamiento suave utilizando animaciones
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // Crea un efecto de desplazamiento suave
    });
});
window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})


