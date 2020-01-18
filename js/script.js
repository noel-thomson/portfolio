const mobileToggle = document.querySelector(".top-nav__mobile-toggle");
const header = document.querySelector("header");
const filters = document.querySelectorAll(".filter");

let currentFilter = document.querySelector(".filter.current");

// var lastScrollTop = 0;

mobileToggle.addEventListener("click", function() {
  header.classList.toggle("open");
});

for (const el of filters) {
  el.addEventListener("click", function() {
    currentFilter.classList.remove("current");
    this.classList.add("current");
    currentFilter = this;
  });
}

$(window).load(function() {});

$(function() {
  $(".portfolio__items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });

  $("#filter__buttons a").click(function() {
    let selector = $(this).attr("data-filter");

    $(".portfolio__items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false
      }
    });

    return false;
  });
});
