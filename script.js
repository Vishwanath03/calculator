const audio = new Audio();
audio.src = "btnsound.mp3";

const song = new Audio();
song.src = "magic-fairy.mp3";

let answer = document.getElementById("answer");
let expression = "";

function clearDisplay() {
  expression = "";
  answer.innerHTML = "0";
}

function appendDigit(digit) {
  expression += digit;
  answer.innerHTML = expression;
}
function appendOperator(operator) {
  expression += appendOperator;
  answer.innerHTML = expression;
}
function appendDecimal() {
  expression += ".";
  answer.innerHTML = expression;
}
function evalexpr() {
  let result = eval(expression);
  answer.innerHTML = result;
  // let que = document.getElementById("question");
  // question.innerHTML = expression;
}
