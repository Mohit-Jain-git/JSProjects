let btn = document.querySelectorAll("button");
let show = document.getElementById("take");
let ans = "";
for (item of btn) {
  item.addEventListener("click", (e) => {
    text = e.target.innerText;
    console.log("Button text is :", text);
    if (text == "X") {
      text = "*";
      ans += text;
      show.value = ans;
    } else if (text == "C") {
      ans = "";
      show.value = ans;
    } else if (text == "=") {
      show.value = eval(ans);
    } else {
      ans += text;
      show.value = ans;
    }
  });
}
