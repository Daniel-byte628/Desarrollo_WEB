const translations = {
    es: {
        welcome: "Bienvenidos",
        to: "A",
        seccion1: "En WhiskerVet, velamos por el pleno bienestar de tu felino. Nuestro hospital veterinario especializado está a tu servicio las 24 horas del día, los 7 días de la semana. En nuestra institución, sostenemos firmemente la importancia de la medicina preventiva como pilar fundamental para prolongar la vida y la vitalidad de tu gato.Por ello, nos enfocamos en proporcionar asesoramiento experto y en disponer de tecnología de vanguardia, garantizando que tus adorados mininos gocen de una vida larga y saludable. Dirección: ",
        titletestimonios: "Testimonios de nuestros clientes",
        testimonio1:
    },
    en: {
        welcome: "Welcome",
        to: "To",
        seccion1: "At WhiskerVet, we ensure the full well-being of your cat. Our specialized veterinary hospital is at your service 24 hours a day, 7 days a week. At our institution, we firmly support the importance of preventive medicine as a fundamental pillar to prolong the life and vitality of your cat. For this reason, we focus on providing expert advice and having cutting-edge technology, ensuring that your beloved kitties enjoy a long and healthy life. Address:",
        titletestimonios:"Testimonials from our clients",
        testimonio1:
        testimonio2:
        testimonio3:
        testimonio4:
        testimonio5:
        testimonio6:
        seccion3title:
        seccion3parrafo:
        misionparrafo:
        visionparrafo:
        horarioparrafo:
        equipomedicoparrafo:
        intalacionesparrafo:
        contactoparrafo:
        footerservicios:
        footerurgencia:
        footertratamientos:
        footerveterinarias:
        footernosotros:
        footertestimonios:
        footerpreguntas:
        footerwhiskervet:
        
    
    }
};

function translatePage(language) {
    const elementsToTranslate = document.querySelectorAll("[data-translate]");
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute("data-translate");
        element.textContent = translations[language][key];
    });
}

const languageSelect = document.getElementById("language");
languageSelect.addEventListener("change", event => {
    const selectedLanguage = event.target.value;
    translatePage(selectedLanguage);
});

// Initial translation
translatePage(languageSelect.value);