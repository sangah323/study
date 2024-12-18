const contentBox = document.querySelector(".content-box");
const run = document.querySelector(
  "#content > .content-box > ul > li:nth-of-type(3)"
);

run.addEventListener("click", function colorChange() {
  run.innerHTML = "호다닥다ㅏㄱ닥ㄷ다갇";
  run.style.color = "red";
});

//
const runBtn = document.createElement("button");
runBtn.innerHTML = "과제 끝?";

runBtn.addEventListener("click", function textChange() {
  runBtn.innerHTML = "집으로 뛰어갓-!";
  runBtn.style.color = "red";
});

contentBox.append(runBtn);
