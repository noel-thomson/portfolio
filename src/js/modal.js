const modal = document.querySelector('#modal');
const modalHeading = document.querySelector('.modal-heading');
const modalBody = document.querySelector('.modal-body');
const modalButtons = document.querySelectorAll('#modal .portfolio-button');
const modalClose = document.querySelector('.modal-close');
const portfolioLinks = document.querySelectorAll(
  '.card-face-back-links a:first-of-type'
);
const body = document.querySelector('body');
const navbar = document.querySelector('#navbar');

for (let link of portfolioLinks) {
  link.addEventListener('click', () => {
    modal.classList.toggle('reveal');
  });
}

for (let i = 0; i < portfolioLinks.length; i++) {
  portfolioLinks[i].addEventListener('click', () => {
    body.classList.add('freeze');
    navbar.classList.remove('open'); //
    modalHeading.innerHTML = modalCopy[i].title;
    modalBody.innerHTML = modalCopy[i].body;
    modalButtons[0].href = modalCopy[i].project;
    modalButtons[1].href = modalCopy[i].code;
  });
}

modalClose.addEventListener('click', () => {
  modal.classList.add('fade');
  body.classList.remove('freeze');
  setTimeout(() => {
    modal.classList.remove('fade');
    modal.classList.remove('reveal');
  }, 510);
});
