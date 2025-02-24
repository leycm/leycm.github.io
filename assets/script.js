const maxImageNumber = 5;

window.onload = function() {
  const randomImageIndex = Math.floor(Math.random() * maxImageNumber) + 1;

  const imgElement = document.querySelector(".header_img");
  if (imgElement) {
    imgElement.src = `assets/img/header/${randomImageIndex}.png`;
  }
};

document.addEventListener("DOMContentLoaded", function() {
  const cookieConsent = document.getElementById('cookie-consent');
  const acceptCookiesButton = document.getElementById('accept-cookies');
  const needCookiesElements = document.querySelectorAll('.needcookies');

  console.log("Cookie-Consent-Element:", cookieConsent);
  console.log("Accept-Cookies-Button:", acceptCookiesButton);

  console.log("Cookie vorhanden?", document.cookie.includes('cookies_accepted=true'));

  if (!document.cookie.includes('cookies_accepted=true')) {
    console.log("Cookie nicht vorhanden. Zeige Cookie-Banner.");
    if (cookieConsent) {
      cookieConsent.style.display = 'block';
    } else {
      console.error("Cookie-Consent-Element nicht gefunden!");
    }
    blockExternalResources();
  } else {
    console.log("Cookie vorhanden. Lade externe Ressourcen.");
    if (cookieConsent) {
      cookieConsent.style.display = 'none';
    }
    loadExternalResources();
    showNeedCookiesElements(); 
  }

  if (acceptCookiesButton) {
    acceptCookiesButton.addEventListener('click', function() {
      console.log("Cookie akzeptiert. Setze Cookie und lade Ressourcen.");
      document.cookie = 'cookies_accepted=true; path=/';
      if (cookieConsent) {
        cookieConsent.style.display = 'none';
      }
      loadExternalResources();
      showNeedCookiesElements();
    });
  } else {
    console.error("Accept-Cookies-Button nicht gefunden!");
  }

  function blockExternalResources() {
    console.log('Externe Ressourcen sind blockiert.');
  }

  function loadExternalResources() {
    console.log('Lade externe Ressourcen...');

    // Google Material Icons laden
    const materialIcons = document.createElement('link');
    materialIcons.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    materialIcons.rel = 'stylesheet';
    document.head.appendChild(materialIcons);

    // Font Awesome laden
    const fontAwesome = document.createElement('link');
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
    fontAwesome.rel = 'stylesheet';
    document.head.appendChild(fontAwesome);
  }

  function showNeedCookiesElements() {
    console.log('Zeige Elemente mit der Klasse "needcookies".');
    needCookiesElements.forEach(element => {
      element.style.removeProperty( 'display' );
    });
  }
});
