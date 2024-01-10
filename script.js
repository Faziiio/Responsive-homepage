const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
var flag = 0;
//Menu button functionality
var nav = document.querySelector("#home nav");
var overlay = document.querySelector(".menu");
var menuLines = document.querySelector(".part2 i");

menuLines.addEventListener("click", function () {
  if (flag === 0) {
    overlay.style.left = "0%";
    flag = 1;
  } else {
    overlay.style.left = "-50%";
    flag = 0;
  }
});
