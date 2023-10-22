document.addEventListener('DOMContentLoaded', function() {
    // Toggle menu
    const hamburgerContainer = document.querySelector('.hamburger-container');
    const menu = document.querySelector('#menu');
    hamburgerContainer.addEventListener('click', function() {
        menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            menu.style.removeProperty('display');
        }
    });

    // Icon animation
    const topBar = document.querySelector('.hamburger li:nth-child(1)');
    const middleBar = document.querySelector('.hamburger li:nth-child(2)');
    const bottomBar = document.querySelector('.hamburger li:nth-child(3)');
    hamburgerContainer.addEventListener('click', function() {
        if (middleBar.classList.contains('rot-45deg')) {
            topBar.classList.remove('rot45deg');
            middleBar.classList.remove('rot-45deg');
            bottomBar.classList.remove('hidden');
        } else {
            bottomBar.classList.add('hidden');
            topBar.classList.add('rot45deg');
            middleBar.classList.add('rot-45deg');
        }
    });
});


// accordian

// Get the elements using querySelectorAll
const accordions = document.querySelectorAll(".accordion");
const panels = document.querySelectorAll(".panel");

// Use forEach to add event listeners
accordions.forEach((accordion, index) => {
  accordion.addEventListener("click", () => {
    // Close all panels
    panels.forEach((panel, panelIndex) => {
      if (panelIndex !== index) {
        panel.style.maxHeight = null;
        accordions[panelIndex].classList.remove("active");
      }
    });

    accordion.classList.toggle("active");
    const panel = accordion.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// Simulate a click event on the first accordion to open it by default
if (accordions.length > 0) {
  accordions[0].click();
}


  // Get the radio buttons and labels

  const buyOnceRadio = document.getElementById("buyOnce");

  const subscribeRadio = document.getElementById("subscribe");

  const buyOnceLabel = document.querySelector("label[for=buyOnce]");

  const subscribeLabel = document.querySelector("label[for=subscribe]");



  // Add event listeners to the radio buttons

  buyOnceRadio.addEventListener("change", function () {

      if (this.checked) {
          buyOnceLabel.classList.remove("label-gray");
          buyOnceLabel.classList.add("label-primary");
          subscribeLabel.classList.remove("label-primary");
          subscribeLabel.classList.add("label-gray");
      }
  });

  subscribeRadio.addEventListener("change", function () {

      if (this.checked) {
          subscribeLabel.classList.remove("label-gray");
          subscribeLabel.classList.add("label-primary");
          buyOnceLabel.classList.remove("label-primary");
          buyOnceLabel.classList.add("label-gray");

      }

  });


// product counter
// Store references that all functions can use.
const resultEl = document.querySelector(".resultSet");
const plusMinusWidgets = document.querySelectorAll(".v-counter");

// Attach event listeners to each plus-minus widget
plusMinusWidgets.forEach(widget => {
  widget.querySelector(".minusBtn").addEventListener("click", clickHandler);
  widget.querySelector(".plusBtn").addEventListener("click", clickHandler);
  widget.querySelector(".count").addEventListener("change", changeHandler); // Use the changeHandler function here
});

// Function to handle plus and minus button clicks
function clickHandler(event) {
  const countEl = event.target.closest(".v-counter").querySelector(".count");
  const changeValue = event.target.classList.contains("plusBtn") ? 1 : -1;
  const newValue = Number(countEl.value) + changeValue;

  // Ensure the count does not go below zero
  if (newValue >= 0) {
    countEl.value = newValue;
    triggerEvent(countEl, "change");
  }
}

// Function to handle changes in the count input
function changeHandler(event) {
}

// Function to trigger a custom event
function triggerEvent(el, type) {
  const event = new Event(type, { bubbles: true, cancelable: true });
  el.dispatchEvent(event);
}

// Initialize the total value by calling the changeHandler function
changeHandler();


// carousel product

$(document).ready(function () {
    $('.carousel').slick({
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      prevArrow: $('.custom-prev-arrow'), // Use custom prev arrow
      nextArrow: $('.custom-next-arrow'), // Use custom next arrow
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            // centerMode: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
  
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
          },
        },
      ],
    });
  });
  