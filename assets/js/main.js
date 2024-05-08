"use strict";

/* ::::::::::::::::::::
:: GLobal Javascript ::
::::::::::::::::::::::: */

// ==== Sticky Menu ====
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("scrolling", window.scrollY > 0);
});

// =========== Accordion =============
let accordions = document.querySelectorAll(".accordion-item");
accordions.forEach((item) => {
  let label = item.querySelector(".accordion-header");
  label.addEventListener("click", () => {
    accordions.forEach((accordionItem) => {
      accordionItem.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});

// =========== Search Bar =============
const toggleButton = document.getElementById("toggleButton");
const searchContainer = document.getElementById("searchContainer");

toggleButton.addEventListener("click", () => {
  searchContainer.classList.toggle("hidden");
});

/* :::::::::::::::::::::::::
::   Template Javascript   ::
:::::::::::::::::::::::::::: */

// =========== Home 3 - Hero Slider =============
const heroSlider3 = new Swiper(".hero-slider-3", {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: ".hero-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

// =========== Client Logo Slider =============
const clientSlider = new Swiper(".client-slider", {
  slidesPerView: 2,
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },
  },
});

// =========== Testimonial Slider - 1 =============
const testimonialSlider1 = new Swiper(".testimonial-slider-1", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".testimonial-progressbar",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".default-button-next",
    prevEl: ".default-button-prev",
  },
});

// =========== Testimonial Slider - 2 =============
const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
  spaceBetween: 30,
  pagination: {
    clickable: true,
    el: ".testimonial-pagination",
  },
});

// =========== Testimonial Slider - 3 =============
const testimonialSlider3 = new Swiper(".testimonial-slider-3", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    clickable: true,
    el: ".testimonial-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// =========== Testimonial Slider - 4 =============
const testimonialSlider4 = new Swiper(".testimonial-slider-4", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".default-button-next",
    prevEl: ".default-button-prev",
  },
});

// =========== Testimonial Slider - 4 =============
const testimonialSlider5 = new Swiper(".testimonial-slider-5", {
  slidesPerView: 1,
  pagination: {
    clickable: true,
    el: ".testimonial-pagination",
  },
});

// =========== Animate Interaction on Scroll =============
JOS.init({
  // disable: false, // Disable JOS gloabaly | Values :  'true', 'false'
  // debugMode: true, // Enable JOS debug mode | Values :  'true', 'false'
  passive: false, // Set the passive option for the scroll event listener | Values :  'true', 'false'

  once: true, // Disable JOS after first animation | Values :  'true', 'false' || Int : 0-1000
  animation: "fade-up", // JOS global animation type | Values :  'fade', 'slide', 'zoom', 'flip', 'fade-right', 'fade-left', 'fade-up', 'fade-down', 'zoom-in-right', 'zoom-in-left', 'zoom-in-up', 'zoom-in-down', 'zoom-out-right', 'zoom-out-left', 'zoom-out-up', 'zoom-out-down', 'flip-right', 'flip-left', 'flip-up', 'flip-down, spin, revolve, stretch, "my-custom-animation"
  // animationInverse: "static", // Set the animation type for the element when it is scrolled out of view | Values :  'fade', 'slide', 'zoom', 'flip', 'fade-right', 'fade-left', 'fade-up', 'fade-down', 'zoom-in-right', 'zoom-in-left', 'zoom-in-up', 'zoom-in-down', 'zoom-out-right', 'zoom-out-left', 'zoom-out-up', 'zoom-out-down', 'flip-right', 'flip-left', 'flip-up', 'flip-down, spin, revolve, stretch, "my-custom-animation"
  timingFunction: "ease", // JOS global timing function | Values :  'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'step-start', 'step-end', 'steps()', 'cubic-bezier()', 'my-custom-timing-function'
  //mirror : false, // Set whether the element should animate back when scrolled out of view | Values :  'true', 'false'
  threshold: 0, // Set gloabal the threshold for the element to be visible | Values :  0-1
  delay: 0.5, // Set global the delay for the animation to start | Values :  0,1,2,3,4,5
  duration: 0.7, // Set global the duration for the animation playback | Values :  flota : 0-1 & int : 0,1,2,3,4,5

  // startVisible: "true", // Set whether the element should animate when the page is loaded | Values :  'true', 'false' || MS : 0-10000
  scrollDirection: "down", // Set the scroll direction for the element to be visible | Values :  'up', 'down', 'none'
  //scrollProgressDisable: true // disable or enable scroll callback function | Values :  'true', 'false'
  // intersectionRatio: 0.4, // Set the intersection ratio between which the element should be visible | Values :  0-1 (automaticaly set)
  // rootMargin_top: "0%", // Set by which percent the element should animate out (Recommended value between 10% to -30%)
  // rootMargin_bottom: "-50%", // Set by which percent the element should animate out (Recommended value between -10% to -60%)
  rootMargin: "0% 0% 15% 0%", // Set the root margin for the element to be visible | Values :  _% _% _% _%  (automaticaly set)
});

// =========== Show Image On Hover =============
function showImage(event) {
  const projectItem = event.currentTarget;
  const projectImage = projectItem.querySelector(".project-image");
  const hoveredImage = document.getElementById("hoveredImage");

  // Set the hovered image source to the project image source
  hoveredImage.src = projectImage.src;

  // Show the hovered image
  hoveredImage.style.display = "block";

  // Move the hovered image with the cursor
  document.addEventListener("mousemove", moveImage);

  function moveImage(event) {
    const x = event.clientX;
    const y = event.clientY;

    hoveredImage.style.transform = `translate(${x}px, ${y}px)`;
  }

  // Hide the hovered image when mouse leaves the project item
  projectItem.onmouseleave = () => {
    hoveredImage.style.display = "none";
    document.removeEventListener("mousemove", moveImage);
  };
}

//=========== Progress Bar =============
// Find the element with the class 'progress-bar'
const progressBars = document.querySelectorAll(".progress-bar");

// Iterate over each progress bar element
progressBars.forEach((progressBar) => {
  // Get the value of the 'data-percentage-value' attribute for each progress bar
  const percentageValue = progressBar.getAttribute("data-percentage-value");
  progressBar.style.width = percentageValue + "%";
});
