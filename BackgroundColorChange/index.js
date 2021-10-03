const btn = document.getElementById("clicked");
let arr = ["blue", "green", "orange", "black", "yellow", "saffron"];
btn.addEventListener("click", function () {
  let color = arr[Math.floor(Math.random() * arr.length)];
  document.body.style.background = color;
});
