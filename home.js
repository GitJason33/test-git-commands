//  slider
let sliderImages = document.querySelectorAll('.slide-image');
let current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.opacity = 0;
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.opacity = 1;
}

// Show next
function slideRight() {
  reset();
  current++;
  if (current === sliderImages.length) {
    current = 0;
  }
  sliderImages[current].style.opacity = 1;
}

// Slide left
function slideLeft() {
  reset();
  current--;
  if (current < 0) {
    current = sliderImages.length - 1;
  }
  sliderImages[current].style.opacity = 1;
}

// Left arrow click
document.querySelector('.left').addEventListener('click', function() {
  slideLeft();
});

// Right arrow click
document.querySelector('.right').addEventListener('click', function() {
  slideRight();
});

startSlide();

// Start automatic slideshow
setInterval(slideRight, 5000);