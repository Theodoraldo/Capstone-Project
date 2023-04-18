const menu = document.getElementById('hamburger');
const closeMenu = document.querySelector('.links i');
const showMenu = document.querySelector('.showMenu');

menu.addEventListener('click', () => {
  showMenu.style.display = 'absolute';
  showMenu.style.left = '0';
});

closeMenu.addEventListener('click', () => {
  showMenu.style.display = 'absolute';
  showMenu.style.left = '-100%'
});