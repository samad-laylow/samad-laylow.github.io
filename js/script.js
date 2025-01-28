const togglenav = () => {
  let navicon = document.getElementById('navicon');
  if (navicon.className === 'fa fa-bars') {
    navicon.className = 'fa fa-xmark';
  } else {
    navicon.className = 'fa fa-bars';
  }
  const nav = document.getElementById('nav');
  nav.classList.toggle('hidden');
};

window.addEventListener("keydown", function(event) {
  if ((event.key === 'm' && event.ctrlKey) || (event.key === 'M' && event.ctrlKey) || (event.key === 'Escape')) {
    togglenav();
  }

});


if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../service-worker.js")
      .then((registration) => {
        console.log("Service Worker enregistré avec succès:", registration);
      })
      .catch((error) => {
        console.error("Erreur lors de l'enregistrement du Service Worker:", error);
      });
  });
}


(function() {
  var script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-410HY4E7NS';
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-410HY4E7NS');
})();



