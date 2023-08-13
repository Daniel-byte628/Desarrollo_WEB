const translations = {
    es: {
      welcome: "Bienvenidos",
      about: "Acerca de Nosotros"
    },
    en: {
      welcome: "Welcome",
      about: "About Us"
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