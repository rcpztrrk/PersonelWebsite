let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Yemek slider için aynı fonksiyonların food versiyonları
let foodSlideIndex = 1;
showFoodSlides(foodSlideIndex);

// Next/previous controls
function plusFoodSlides(n) {
  showFoodSlides(foodSlideIndex += n);
}

// Thumbnail image controls
function currentFoodSlide(n) {
  showFoodSlides(foodSlideIndex = n);
}

function showFoodSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myFoodSlides");
  let dots = document.getElementsByClassName("food-dot");
  if (n > slides.length) {foodSlideIndex = 1}
  if (n < 1) {foodSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[foodSlideIndex-1].style.display = "block";
  dots[foodSlideIndex-1].className += " active";
}

// Sayfa yüklendiğinde her iki slider'ı da başlat
document.addEventListener('DOMContentLoaded', function() {
  showSlides(slideIndex);
  showFoodSlides(foodSlideIndex);
});