const run = document.querySelector(
  "#content > .content-box > ul > li:nth-of-type(3)"
);

run.addEventListener("click", function colorChange() {
  run.innerHTML = "호다닥다ㅏㄱ닥ㄷ다갇";
  run.style.color = "red";
});
