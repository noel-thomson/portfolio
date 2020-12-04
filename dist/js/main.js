"use strict";var message=document.querySelector("#message"),email=document.querySelector("#email");function _createForOfIteratorHelper(e,t){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,n=!0,i=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return n=e.done,e},e:function(e){i=!0,a=e},f:function(){try{n||null==o.return||o.return()}finally{if(i)throw a}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}message.addEventListener("input",function(e){0<e.target.value.length?message.classList.add("focus"):message.classList.remove("focus")}),email.addEventListener("input",function(e){0<e.target.value.length?email.classList.add("focus"):(console.log("empty"),email.classList.remove("focus"))});var modal=document.querySelector("#modal"),modalHeading=document.querySelector(".modal-heading"),modalBody=document.querySelector(".modal-body"),modalButtons=document.querySelectorAll("#modal .portfolio-button"),modalClose=document.querySelector(".modal-close"),portfolioLinks=document.querySelectorAll(".card-face-back-links a:first-of-type"),body=document.querySelector("body"),navbar=document.querySelector("#navbar"),_iterator=_createForOfIteratorHelper(portfolioLinks);try{for(_iterator.s();!(_step=_iterator.n()).done;){var link=_step.value;link.addEventListener("click",function(){modal.classList.toggle("reveal")})}}catch(e){_iterator.e(e)}finally{_iterator.f()}for(var _loop=function(e){portfolioLinks[e].addEventListener("click",function(){body.classList.add("freeze"),navbar.classList.remove("open"),modalHeading.innerHTML=modalCopy[e].title,modalBody.innerHTML=modalCopy[e].body,modalButtons[0].href=modalCopy[e].project,modalButtons[1].href=modalCopy[e].code})},i=0;i<portfolioLinks.length;i++)_loop(i);modalClose.addEventListener("click",function(){modal.classList.add("fade"),body.classList.remove("freeze"),setTimeout(function(){modal.classList.remove("fade"),modal.classList.remove("reveal")},510)});var modalCopy=[{title:"Apple Landing Page",body:"After extracting the image assets for this webpage, I challenged myself to reproduce a pixel perfect replica as though I had been asked to convert the site from a photoshop file. Flexbox, absolute positioning, and media queries were essential for this task as unique images are inserted at different device screen sizes and the grid system is reordered.",project:"https://noel-thomson.github.io/apple-landing/",code:"https://github.com/noel-thomson/apple-landing/"},{title:"E-Commerce Design",body:"For this project, I set out to create a design that felt modern but looked classic. The contact form was hand coded from scratch with animations inspired by Google Material design. The Slick Slider library was customized to fit my needs and Google Maps was integrated at the bottom. The site is carefully optimized to maintain a sleek aesthetic across all devices.",project:"https://noel-thomson.github.io/business-template/",code:"https://github.com/noel-thomson/business-template/"},{title:"Digital Agency",body:"This project features a variety of page animations to showcase the modern design features that a digital agency can provide. A careful combination of transform, opacity, keyframe and set interval functions were combined to craft fluid hero and showcase section animations. JavaScript's scroll offset API is used to dynamically control the animation of the navigation menu, and AOS was incorporated for fade effects.",project:"https://noel-thomson.github.io/digital-agency/",code:"https://github.com/noel-thomson/digital-agency/"},{title:"Movie Search Database",body:"This project uses asynchronous JavaScript to access data from the OMDB API and dynamically render this data in the form of an intuitive user interface. Clicking on a movie takes the user to a details page displaying key movie information. Keyword input returns ten results and Twitter's CSS Bootstrap library was incorporated for layout and style.",project:"https://noel-thomson.github.io/movie-database-app/",code:"https://github.com/noel-thomson/movie-database-app/"},{title:"Blackjack",body:"This is a JavaScript focused project where game logic was constructed true to the rules of the game with an algorithm to adjust player scores based on the variable nature of the Ace, declare a winner, and incorporate dynamic animations and audio effects. Dom manipulation is used to display a history of each player's drawn cards.",project:"https://noel-thomson.github.io/blackjack-app/",code:"https://github.com/noel-thomson/blackjack-app/"},{title:"E-Commerce Store",body:"This project is a full-stack application build with ReactJS and ExpressJS connected to MongoDB's cloud-hosted database. Redux is incorporated for state management and Mongoose for database model schemas. Features including shopping cart management, user authentication and permissions are in the process of completion.",project:"https://mern-pro-shop.herokuapp.com/",code:"https://github.com/noel-thomson/mern-ecommerce-store"},{title:"Photography Generator",body:"This project uses asynchronous JavaScript to access HD photography data from the Pexels API and dynamically render it in a responsive grid format. Keywords return fifteen results, and suggested search terms below the search bar return API queries as well.",project:"https://noel-thomson.github.io/stock-photography-generator/",code:"https://github.com/noel-thomson/stock-photography-generator/"},{title:"React Calculator",body:"Modeled after Apple's calculator, this project uses ReactJS and JavaScript to parse keyboard or click input and calculate results to two decimal places.",project:"https://mystifying-jang-12ffda.netlify.app/",code:"https://github.com/noel-thomson/react-calculator"},{title:"Pomodoro Timer",body:"A popular time management tool, this timer uses React UseState and UseEffect Hooks to dynamically render the user interface, oscillating between user defined periods of focused work and short breaks.",project:"https://festive-blackwell-0f363b.netlify.app/",code:"https://github.com/noel-thomson/pomodoro-timer"}];function _createForOfIteratorHelper(e,t){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,n=!0,i=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return n=e.done,e},e:function(e){i=!0,a=e},f:function(){try{n||null==o.return||o.return()}finally{if(i)throw a}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}var navbar=document.querySelector("#navbar"),mobileToggle=document.querySelector(".top-nav__mobile-toggle"),navLinks=document.querySelectorAll(".top-nav__link"),subMenuLinks=document.querySelectorAll(".sub-menu__link"),body=document.querySelector("body");mobileToggle.addEventListener("click",function(){navbar.classList.toggle("open"),body.classList.toggle("freeze")});_iterator=_createForOfIteratorHelper(navLinks);try{_loop=function(){var e=_step.value;e.addEventListener("click",function(){navbar.classList.contains("open")&&(e.classList.contains("capabilities")||(navbar.classList.toggle("open"),body.classList.toggle("freeze")))})};for(_iterator.s();!(_step=_iterator.n()).done;)_loop()}catch(e){_iterator.e(e)}finally{_iterator.f()}var _step2,_iterator2=_createForOfIteratorHelper(subMenuLinks);try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var subLink=_step2.value;subLink.addEventListener("click",function(){navbar.classList.toggle("open"),body.classList.toggle("freeze")})}}catch(e){_iterator2.e(e)}finally{_iterator2.f()}var prevScrollPos=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;e<0||(0===e?dropdown.classList.contains("open")||navbar.classList.remove("white"):e<prevScrollPos&&0<e?(navbar.classList.remove("hide"),navbar.classList.add("white"),dropdown.classList.remove("open")):prevScrollPos<e&&(navbar.classList.contains("open")||(navbar.classList.add("hide"),dropdown.classList.remove("open"))),prevScrollPos=e)};var about=navLinks[0],dropdown=document.querySelector(".dropdown-menu"),chevron=document.querySelector(".chevron"),capabilities=document.querySelector(".capabilities");function _createForOfIteratorHelper(e,t){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,n=!0,i=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return n=e.done,e},e:function(e){i=!0,a=e},f:function(){try{n||null==o.return||o.return()}finally{if(i)throw a}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}about.addEventListener("mouseenter",function(){navbar.classList.contains("open")||(navbar.classList.add("white"),dropdown.classList.add("open"))}),chevron.addEventListener("mouseenter",function(){navbar.classList.contains("open")||(navbar.classList.add("white"),dropdown.classList.add("open"))}),dropdown.addEventListener("mouseleave",function(){navbar.classList.contains("open")||(0===window.pageYOffset&&navbar.classList.remove("white"),dropdown.classList.remove("open"))}),capabilities.addEventListener("click",function(){document.querySelector(".sub-menu").classList.toggle("open")}),chevron.addEventListener("click",function(){navbar.classList.contains("open")&&document.querySelector(".sub-menu").classList.toggle("open")});var _step,mobileToggle=document.querySelector(".top-nav__mobile-toggle"),filters=document.querySelectorAll(".filter"),scroll=new SmoothScroll('a[href*="#"]',{speed:800,speedAsDuration:!0,easing:"easeInOutCubic"}),currentFilter=document.querySelector(".filter.current"),_iterator=_createForOfIteratorHelper(filters);try{for(_iterator.s();!(_step=_iterator.n()).done;){var el=_step.value;el.addEventListener("click",function(){currentFilter.classList.remove("current"),this.classList.add("current"),currentFilter=this})}}catch(e){_iterator.e(e)}finally{_iterator.f()}$(function(){$(".portfolio__items").isotope({filter:"*",layoutMode:"fitRows",animationOptions:{duration:1500,easing:"linear"}}),$("#filter__buttons a").click(function(){var e=$(this).attr("data-filter");return $(".portfolio__items").isotope({filter:e,layoutMode:"fitRows",animationOptions:{duration:1500,easing:"linear"}}),!1})}),$(".portfolio__items").imagesLoaded().progress(function(){$(".portfolio__items").isotope("layout")});