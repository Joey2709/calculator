var screen = document.getElementById("screen");
var operation = document.getElementById("operation");

/*Buttons Numbers*/
var screen = document.getElementById("screen");
var button0 = document.getElementById("zero");
var button1 = document.getElementById("one");
var button2 = document.getElementById("two");
var button3 = document.getElementById("three");
var button4 = document.getElementById("four");
var button5 = document.getElementById("five");
var button6 = document.getElementById("six");
var button7 = document.getElementById("seven");
var button8 = document.getElementById("eight");
var button9 = document.getElementById("nine");

/*Buttons Operations*/
var divideOpeartion = document.getElementById("divide");
var multiplyOpeartion = document.getElementById("multiply");
var subtractOpeartion = document.getElementById("subtract");
var addOpeartion = document.getElementById("add");
var point = document.getElementById("point");

var result = document.getElementById("result");
var deleteButton = document.getElementById("delete");
/*Default*/
var number1 = "";
var number2 = "";
var value = "";
var operate = null;

document.addEventListener("keydown", inputKey);

function inputKey(e) {
  const keyPress = e.key;
  const keyPressCode = e.keyCode;
  if (
    (keyPressCode >= 96 && keyPressCode <= 105) ||
    (keyPressCode >= 48 && keyPressCode <= 57) ||
    (keyPressCode == 110 &&
      screen.textContent.length > 0 &&
      !screen.textContent.includes(".")) ||
    (keyPressCode == 190 &&
      screen.textContent.length > 0 &&
      !screen.textContent.includes("."))
  ) {
    screen.textContent = value + keyPress;
    value = screen.textContent;
  }
  if (keyPressCode == 8) {
    deleteNumber();
  }
  if (keyPressCode == 13) {
    setResult();
  }
  if (keyPressCode == 111) {
    setDivide();
  }
  if (keyPressCode == 109) {
    setSubtract();
  }
  if (keyPressCode == 107) {
    setAdd();
  }
  if (keyPressCode == 106) {
    setMultiply();
  }
}

/*Functions Operations*/
function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  return Number(a) / Number(b);
}

function main() {
  /*Buttons Numbers*/
  button0.onclick = function () {
    if (screen.textContent.length > 0) {
      screen.textContent = value + "0";
      value = screen.textContent;
    }
  };
  button1.onclick = function () {
    screen.textContent = value + "1";
    value = screen.textContent;
  };
  button2.onclick = function () {
    screen.textContent = value + "2";
    value = screen.textContent;
  };
  button3.onclick = function () {
    screen.textContent = value + "3";
    value = screen.textContent;
  };
  button4.onclick = function () {
    screen.textContent = value + "4";
    value = screen.textContent;
  };
  button5.onclick = function () {
    screen.textContent = value + "5";
    value = screen.textContent;
  };
  button6.onclick = function () {
    screen.textContent = value + "6";
    value = screen.textContent;
  };
  button7.onclick = function () {
    screen.textContent = value + "7";
    value = screen.textContent;
  };
  button8.onclick = function () {
    screen.textContent = value + "8";
    value = screen.textContent;
  };
  button9.onclick = function () {
    screen.textContent = value + "9";
    value = screen.textContent;
  };
  point.onclick = function () {
    if (screen.textContent.length > 0 && !screen.textContent.includes(".")) {
      screen.textContent = value + ".";
      value = screen.textContent;
    }
  };
}

/*Event listener*/
result.addEventListener("click", setResult);
divideOpeartion.addEventListener("click", setDivide);
multiplyOpeartion.addEventListener("click", setMultiply);
subtractOpeartion.addEventListener("click", setSubtract);
addOpeartion.addEventListener("click", setAdd);

function setResult() {
  let Regex = /[0-9]+/;
  number1 = operation.textContent.match(Regex);
  number2 = screen.textContent.match(Regex);
  operation.textContent += number2;
  screen.textContent = operate(number1, number2);
  value = screen.textContent;
  result.disabled = true;
  deleteButton.disabled = true;
  operate = null;
}

function setDivide() {
  operate = divide;
  if (!screen.textContent.includes("/")) {
    operation.textContent = value + " / ";
    screen.textContent = "";
    value = screen.textContent;
  }
  result.disabled = false;
  deleteButton.disabled = false;
}

function setMultiply() {
  operate = multiply;
  if (!screen.textContent.includes("x")) {
    operation.textContent = value + " x ";
    screen.textContent = "";
    value = screen.textContent;
  }
  result.disabled = false;
  deleteButton.disabled = false;
}
function setSubtract() {
  operate = subtract;
  if (!screen.textContent.includes("-")) {
    operation.textContent = value + " - ";
    screen.textContent = "";
    value = screen.textContent;
  }
  result.disabled = false;
  deleteButton.disabled = false;
}
function setAdd() {
  operate = add;
  if (!screen.textContent.includes("+")) {
    operation.textContent = value + " + ";
    screen.textContent = "";
    value = screen.textContent;
  }
  result.disabled = false;
  deleteButton.disabled = false;
}

function reset() {
  screen.textContent = "";
  operation.textContent = "";
  value = "";
  number1 = "";
  number2 = "";
  operate = "";
  result.disabled = false;
}

function deleteNumber() {
  screen.textContent = value.substring(0, value.length - 1);
  value = screen.textContent;
}
