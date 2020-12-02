// open and close
const navbar = document.querySelector('#navbar');
const mobileToggle = document.querySelector('.top-nav__mobile-toggle');
const navLinks = document.querySelectorAll('.top-nav__link');
const subMenuLinks = document.querySelectorAll('.sub-menu__link');
const body = document.querySelector('body');

mobileToggle.addEventListener('click', () => {
  navbar.classList.toggle('open');
  body.classList.toggle('freeze');
});

// close mobile menu after clicking link
for (let navLink of navLinks) {
  navLink.addEventListener('click', () => {
    if (navbar.classList.contains('open')) {
      if (!navLink.classList.contains('capabilities')) {
        navbar.classList.toggle('open');
      }
    }
  });
}
for (let subLink of subMenuLinks) {
  subLink.addEventListener('click', () => {
    navbar.classList.toggle('open');
    body.classList.toggle('freeze');
  });
}

let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos < 0) {
    // mobile overscroll
    return;
  }
  if (currentScrollPos === 0) {
    // top
    if (!dropdown.classList.contains('open')) {
      navbar.classList.remove('white');
    }
  } else if (prevScrollPos > currentScrollPos && currentScrollPos > 0) {
    // scroll up
    navbar.classList.remove('hide');
    navbar.classList.add('white');
    dropdown.classList.remove('open');
  } else if (prevScrollPos < currentScrollPos) {
    // scroll down
    if (!navbar.classList.contains('open')) {
      navbar.classList.add('hide');
      dropdown.classList.remove('open');
    }
  }
  prevScrollPos = currentScrollPos;
};

// dropdown menu
const about = navLinks[0];
const dropdown = document.querySelector('.dropdown-menu');
const chevron = document.querySelector('.chevron');
const capabilities = document.querySelector('.capabilities');

about.addEventListener('mouseenter', () => {
  if (!navbar.classList.contains('open')) {
    navbar.classList.add('white');
    dropdown.classList.add('open');
  }
});
chevron.addEventListener('mouseenter', () => {
  if (!navbar.classList.contains('open')) {
    navbar.classList.add('white');
    dropdown.classList.add('open');
  }
});
dropdown.addEventListener('mouseleave', () => {
  if (!navbar.classList.contains('open')) {
    if (window.pageYOffset === 0) {
      navbar.classList.remove('white');
    }
    dropdown.classList.remove('open');
  }
});
capabilities.addEventListener('click', () => {
  document.querySelector('.sub-menu').classList.toggle('open');
});
chevron.addEventListener('click', () => {
  if (navbar.classList.contains('open')) {
    document.querySelector('.sub-menu').classList.toggle('open');
  }
});
