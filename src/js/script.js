const mobileToggle = document.querySelector('.top-nav__mobile-toggle');
const filters = document.querySelectorAll('.filter');
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
  easing: 'easeInOutCubic',
});

let currentFilter = document.querySelector('.filter.current');

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
