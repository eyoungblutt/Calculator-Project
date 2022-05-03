let numbersArr = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
const numberButtons = document.getElementsByClassName("center-buttons");

let numberOne = "";
let numberTwo = "";

for (let i = 0; i < numbersArr.length; i++) {
  numberButtons[i].addEventListener("click", () => {
    numberOne += numbersArr[i];
    document.getElementById("number-display").innerText = numberOne;
    return numberOne;
  });
}

const operatorButtons = document.getElementsByClassName("white-buttons");
let operator = "";

let operatorArr = ["", "", "", "/", "x", "-", "+"];
for (let i = 0; i < operatorArr.length; i++) {
  operatorButtons[i].addEventListener("click", () => {
    operator = operatorArr[i];
    document.getElementById("number-display").innerText = operator;
    console.log(operator);
  });
}

// for (let i = 0; i < numbersArr.length; i++) {
//   numberButtons[i].addEventListener("click", () => {
//     numberOne += numbersArr[i];
//     document.getElementById("number-display").innerText = numberOne;
//     return numberOne;
//   });
// }

// we have the first number and operators showing up. now we need the second set of numbers to go to number 2...?

// numbers going over the 10 character screen limit?
// if (number > 10) {
//   return;
