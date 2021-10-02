const ans = document.getElementById("counter");
var count = 0;
const btn = document.getElementById("click");
btn.addEventListener("click", function () {
  count++;
  console.log(count);
  ans.textContent = count;
});
