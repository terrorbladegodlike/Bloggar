const navToggle = document.querySelector('.nav__toggle'),
   navMenu = document.querySelector('.nav__menu');



navToggle.addEventListener('click', () => {
   navMenu.classList.toggle('show__menu');
   navToggle.classList.toggle('active');
});