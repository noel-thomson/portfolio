"use strict";function _createForOfIteratorHelper(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,t=function(){};return{s:t,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){i=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var navbar=document.querySelector("#navbar"),mobileToggle=document.querySelector(".top-nav__mobile-toggle"),navLinks=document.querySelectorAll(".top-nav__link"),body=document.querySelector("body");mobileToggle.addEventListener("click",function(){navbar.classList.toggle("open"),body.classList.toggle("freeze")});var _iterator=_createForOfIteratorHelper(navLinks);try{var _loop=function(){var e=_step.value;e.addEventListener("click",function(){navbar.classList.contains("open")&&(e.classList.contains("capabilities")||navbar.classList.toggle("open"))})};for(_iterator.s();!(_step=_iterator.n()).done;)_loop()}catch(e){_iterator.e(e)}finally{_iterator.f()}var prevScrollPos=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;e<0||(0===e?navbar.classList.remove("white"):e<prevScrollPos&&0<e?(navbar.classList.remove("hide"),navbar.classList.add("white")):prevScrollPos<e&&(navbar.classList.contains("open")||navbar.classList.add("hide")),prevScrollPos=e)};var about=navLinks[0],dropdown=document.querySelector(".dropdown-menu"),chevron=document.querySelector(".chevron"),capabilities=document.querySelector(".capabilities");function _createForOfIteratorHelper(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,t=function(){};return{s:t,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){i=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}about.addEventListener("mouseenter",function(){navbar.classList.contains("open")||(navbar.classList.add("white"),dropdown.style.opacity="1")}),chevron.addEventListener("mouseenter",function(){navbar.classList.contains("open")||(navbar.classList.add("white"),dropdown.style.opacity="1")}),dropdown.addEventListener("mouseleave",function(){navbar.classList.contains("open")||(dropdown.style.opacity="0",0===window.pageYOffset&&navbar.classList.remove("white"))}),capabilities.addEventListener("click",function(){document.querySelector(".sub-menu").classList.toggle("open")}),chevron.addEventListener("click",function(){navbar.classList.contains("open")&&document.querySelector(".sub-menu").classList.toggle("open")});var mobileToggle=document.querySelector(".top-nav__mobile-toggle"),header=document.querySelector("header"),filters=document.querySelectorAll(".filter"),navLinks=document.querySelectorAll(".top-nav__link"),scroll=new SmoothScroll('a[href*="#"]',{speed:800,speedAsDuration:!0,easing:"easeInOutCubic"}),currentFilter=document.querySelector(".filter.current");mobileToggle.addEventListener("click",function(){header.classList.toggle("open")});var _step,_iterator=_createForOfIteratorHelper(navLinks);try{for(_iterator.s();!(_step=_iterator.n()).done;){var navLink=_step.value;navLink.addEventListener("click",function(){header.classList.contains("open")&&header.classList.toggle("open")})}}catch(e){_iterator.e(e)}finally{_iterator.f()}var _step2,_iterator2=_createForOfIteratorHelper(filters);try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var el=_step2.value;el.addEventListener("click",function(){currentFilter.classList.remove("current"),this.classList.add("current"),currentFilter=this})}}catch(e){_iterator2.e(e)}finally{_iterator2.f()}$(function(){$(".portfolio__items").isotope({filter:"*",layoutMode:"fitRows",animationOptions:{duration:1500,easing:"linear"}}),$("#filter__buttons a").click(function(){var e=$(this).attr("data-filter");return $(".portfolio__items").isotope({filter:e,layoutMode:"fitRows",animationOptions:{duration:1500,easing:"linear"}}),!1})}),$(".portfolio__items").imagesLoaded().progress(function(){$(".portfolio__items").isotope("layout")});