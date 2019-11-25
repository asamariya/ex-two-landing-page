const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const line = document.querySelectorAll('.hamburger .line');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');

  line.forEach(l => l.classList.toggle('open'));
  links.forEach(link => {
    link.classList.toggle('fade');
  });
});
