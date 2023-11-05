let question = document.getElementById("question");
let result = document.getElementById("answer");
let buttons = document.querySelectorAll("button");
let s = "";
let q = "";
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (b) => {
    if (b.target.innerHTML == "=") {
      var audio2 = new Audio("magic-fairy.mp3");
      audio2.play();
      q = s;
      question.value = q;
      s = eval(s);
      result.value = s;
    } else if (b.target.innerHTML == "AC") {
      var audio = new Audio("btnsound.mp3");
      audio.play();
      s = "";
      question.value = "Enter question...";
      result.value = s;
    } else if (b.target.innerHTML == "Del") {
      var audio = new Audio("btnsound.mp3");
      audio.play();
      s = s.substring(0, s.length - 1);
      result.value = s;
    } else if (b.target.innerHTML == "(") {
      var audio = new Audio("btnsound.mp3");
      audio.play();
      s = s + b.target.innerHTML;
      result.value = s;
    } else if (b.target.innerHTML == ")") {
      var audio = new Audio("btnsound.mp3");
      audio.play();
      s = s + b.target.innerHTML;
      result.value = s;
    } else if (b.target.innerHTML == "÷") {
      var audio = new Audio("btnsound.mp3");
      audio.play();
      s = s + "/";
      result.value = s;
    } else if (b.target.innerHTML == "–") {
      var audio = new Audio("btnsound.mp3");
      audio.play();
      s = s + "-";
      result.value = s;
    } else if (b.target.innerHTML == "×") {
      var audio = new Audio("btnsound.mp3");
      audio.play();
      s = s + "*";
      result.value = s;
    } else {
      var audio = new Audio("btnsound.mp3");
      audio.play();
      s = s + b.target.innerHTML;
      result.value = s;
    }
  });
});
