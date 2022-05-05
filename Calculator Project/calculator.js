let numbersArr = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
const numberButtons = document.getElementsByClassName("center-buttons");

let numberOne = "";
let numberTwo = "";

for (let i = 0; i < numbersArr.length; i++) {
  numberButtons[i].addEventListener("click", () => {
    numberOne += numbersArr[i];
    document.getElementById("number-display").innerText = numberOne;
  });
}

const operatorButtons = document.getElementsByClassName("white-buttons");
let operator = "";

let operatorArr = ["", "", "", "/", "x", "-", "+"];
for (let i = 0; i < operatorArr.length; i++) {
  operatorButtons[i].addEventListener("click", () => {
    operator = operatorArr[i];
    numberTwo = numberOne;
    numberOne = "";
    document.getElementById("number-display").innerText = operator;
    return operator;
  });
}

const equalButton = document.getElementById("button-equals");

equalButton.addEventListener("click", () => {
  if (operator === "+") {
    let plus = Number(numberTwo) + Number(numberOne);
    document.getElementById("number-display").innerText = plus;
  } else if (operator === "-") {
    let minus = numberTwo - numberOne;
    document.getElementById("number-display").innerText = minus;
  } else if (operator === "/") {
    let divide = numberTwo / numberOne;
    document.getElementById("number-display").innerText = divide;
  } else if (operator === "x") {
    let multiply = numberTwo * numberOne;
    document.getElementById("number-display").innerText = multiply;
  }
});
