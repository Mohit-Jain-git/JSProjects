let flag = 0;

function control(x) {
  flag += x;
  slideshow(flag);
}
slideshow(flag);
function slideshow(x) {
  let slides = document.getElementsByClassName("slider");
  if (x == slides.length) {
    flag = 0;
    x = 0;
  }
  if (x < 0) {
    flag = slides.length - 1;
    x = slides.length - 1;
  }
  for (let y of slides) {
    y.style.display = "none";
  }
  slides[x].style.display = "block";
}
