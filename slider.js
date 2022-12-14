var slideIndex = 1;
showSlides(slideIndex, true);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex + n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(n);
}

function showSlides(n, firstFlag) {
  var i;
  var slides = document.getElementsByClassName("about_images");
  slideIndex = n;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";

  if (n+1 > slides.length)
    i = 1
  else
    i = n+1;

  if (firstFlag)
    setTimeout(showSlides, 4000, i, true); 

}