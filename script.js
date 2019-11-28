const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const line = document.querySelectorAll('.hamburger .line');
const contentTitle = document.querySelector('.content-text h3');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
  contentTitle.classList.toggle('open');

  line.forEach(l => l.classList.toggle('open'));
  links.forEach(link => {
    link.classList.toggle('fade');
  });
});
