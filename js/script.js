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
