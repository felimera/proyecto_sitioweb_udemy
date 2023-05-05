let overlay = document.querySelector(".overlay");
let carousel = document.querySelector(".carousel");
let slides = document.querySelectorAll(".carousel .slide");

function loadSlides() {
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
  for (i = 0; i < slides.length; i++) {
    slides[i].style.left = slides[i].offsetLeft + carousel.offsetWidth + "px";
  }
}
