var mobileToggle = document.querySelector(".top-nav__mobile-toggle");
var header = document.querySelector("header");
var lastScrollTop = 0;

mobileToggle.addEventListener("click", function() {
  header.classList.toggle("open");
});
