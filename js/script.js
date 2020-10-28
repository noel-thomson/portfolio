const mobileToggle = document.querySelector('.top-nav__mobile-toggle');
const header = document.querySelector('header');
const filters = document.querySelectorAll('.filter');
const navLinks = document.querySelectorAll('.top-nav__link');

let currentFilter = document.querySelector('.filter.current');

// var lastScrollTop = 0;

mobileToggle.addEventListener('click', function () {
  header.classList.toggle('open');
});

for (const navLink of navLinks) {
  navLink.addEventListener('click', function () {
    if (header.classList.contains('open')) {
      header.classList.toggle('open');
    }
  });
}

for (const el of filters) {
  el.addEventListener('click', function () {
    currentFilter.classList.remove('current');
    this.classList.add('current');
    currentFilter = this;
  });
}

$(function () {
  $('.portfolio__items').isotope({
    filter: '*',
    layoutMode: 'fitRows',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      // queue: false
    },
  });

  $('#filter__buttons a').click(function () {
    let selector = $(this).attr('data-filter');

    $('.portfolio__items').isotope({
      filter: selector,
      layoutMode: 'fitRows',
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        // queue: false
      },
    });

    return false;
  });
});

$('.portfolio__items')
  .imagesLoaded()
  .progress(function () {
    $('.portfolio__items').isotope('layout');
  });
