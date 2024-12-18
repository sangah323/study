const run = document.querySelector(
  "#content > .content-box > ul > li:nth-of-type(3)"
);

run.addEventListener("click", function colorChange() {
  run.style.color = "red";
});
