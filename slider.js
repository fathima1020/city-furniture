var slider;
var leftArrow;
var rightArrow;

document.addEventListener("DOMContentLoaded", function () {
  slider = document.getElementById("categorySlider");
  leftArrow = document.querySelector(".arrow.left");
  rightArrow = document.querySelector(".arrow.right");
});

function scrollPrev() {
  slider.scrollLeft -= 300;
}

function scrollNext() {
  slider.scrollLeft += 300;
}
