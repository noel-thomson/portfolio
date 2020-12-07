const modal = document.querySelector('#modal');
const modalContainer = document.querySelector('#modal .container');
const modalHeading = document.querySelector('.modal-heading');
const modalBody = document.querySelector('.modal-body');
const modalButtons = document.querySelectorAll('#modal .portfolio-button');
const modalX = document.querySelector('.modal-close');
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

// generate modal content
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

// close modal by clicking X
modalX.addEventListener('click', () => {
  modal.classList.add('fade');
  body.classList.remove('freeze');
  setTimeout(() => {
    modal.classList.remove('fade');
    modal.classList.remove('reveal');
  }, 510);
});

// click outside modal to close
modal.addEventListener('click', (e) => {
  let isClickInside = modalContainer.contains(e.target);
  if (modal.classList.contains('reveal')) {
    if (!isClickInside) {
      modal.classList.add('fade');
      body.classList.remove('freeze');
      setTimeout(() => {
        modal.classList.remove('fade');
        modal.classList.remove('reveal');
      }, 510);
    }
  }
});

// use escape key to close
document.addEventListener('keydown', (e) => {
  if (e.key == 'Escape') {
    modal.classList.add('fade');
    body.classList.remove('freeze');
    setTimeout(() => {
      modal.classList.remove('fade');
      modal.classList.remove('reveal');
    }, 510);
  }
});
