let overlay = document.querySelector(".overlay");
let carousel = document.querySelector(".carousel");
let slides = document.querySelectorAll(".carousel .slide");
let images = document.querySelectorAll(".carousel .slide img");
let leftArrow = document.querySelector(".left-arrow");
let rigthArrow = document.querySelector(".rigth-arrow");
let couter = 0;

function loadSlides() {
  carousel.style.height = "90vh";
  let heightCarousel = carousel.offsetHeight;

  for (i = 0; i < images.length; i++) {
    if (images[i].offsetHeight < heightCarousel) {
      heightCarousel = images[i].offsetHeight;
    }
  }
  carousel.style.height = heightCarousel + "px";

  for (i = 0; i < slides.length; i++) {
    slides[i].style.left = carousel.offsetWidth * -i + "px";
  }
}

function openModal() {
  overlay.style.display = "block";
  carousel.style.display = "block";
  loadSlides();
}

function closeModal() {
  overlay.style.display = "none";
  carousel.style.display = "none";
}

function nextSlide() {
  updateArrowsState(1);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.left = slides[i].offsetLeft + carousel.offsetWidth + "px";
  }
}

function prevSlide() {
  updateArrowsState(-1);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.left = slides[i].offsetLeft - carousel.offsetWidth + "px";
  }
}

function updateArrowsState(e) {
  couter += e;
  if (couter !== 0) {
    leftArrow.style.display = "flex";
  } else {
    leftArrow.style.display = "none";
  }

  if (couter === slides.length - 1) {
    rigthArrow.style.display = "none";
  } else {
    rigthArrow.style.display = "flex";
  }

  rigthArrow.style.pointerEvents = "none";
  leftArrow.style.pointerEvents = "none";
  setTimeout(() => {
    rigthArrow.style.pointerEvents = "auto";
    leftArrow.style.pointerEvents = "auto";
  }, 900);
}
