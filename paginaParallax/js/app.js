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


