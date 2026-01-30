var slider;
var leftArrow;
var rightArrow;

document.addEventListener("DOMContentLoaded", function () {
  slider = document.getElementById("categorySlider");
  leftArrow = document.querySelector(".arrow.left");
  rightArrow = document.querySelector(".arrow.right");

  updateArrows();
});

function scrollPrev() {
  slider.scrollLeft -= 300;
  updateArrows();
}

function scrollNext() {
  slider.scrollLeft += 300;
  updateArrows();
}

function updateArrows() {
  leftArrow.disabled = slider.scrollLeft <= 0;
  rightArrow.disabled =
    slider.scrollLeft + slider.clientWidth >= slider.scrollWidth;
}
