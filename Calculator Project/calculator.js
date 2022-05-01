let numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbersArr.length; i++) {
  const buttonNumber = numbersArr[i];
  const button = document.getElementById("button" + buttonNumber);
  document.addEventListener("click", () => inputNumberDisplay(button));
}

let number = "";
const inputNumberDisplay = (n) => {
  number += n;
  if (number.length > 10) return;
  return (document.getElementById("number-display").innerText = number);
};

// const numberDisplay0 = () => {
//   document.getElementById("number-display").innerText = 0;
// };
// document.getElementById("button-0").addEventListener("click", numberDisplay0);

// const numberDisplay1 = () => {
//   document.getElementById("number-display").innerText = 1;
// };
// document.getElementById("button-1").addEventListener("click", numberDisplay1);

// const numberDisplay2 = () => {
//   document.getElementById("number-display").innerText = 2;
// };
// document.getElementById("button-2").addEventListener("click", numberDisplay2);

// const numberDisplay3 = () => {
//   document.getElementById("number-display").innerText = 3;
// };
// document.getElementById("button-3").addEventListener("click", numberDisplay3);

// const numberDisplay4 = () => {
//   document.getElementById("number-display").innerText = 4;
// };
// document.getElementById("button-4").addEventListener("click", numberDisplay4);

// const numberDisplay5 = () => {
//   document.getElementById("number-display").innerText = 5;
// };
// document.getElementById("button-5").addEventListener("click", numberDisplay5);

// const numberDisplay6 = () => {
//   document.getElementById("number-display").innerText = 6;
// };
// document.getElementById("button-6").addEventListener("click", numberDisplay6);

// const numberDisplay8 = () => {
//   document.getElementById("number-display").innerText = 8;
// };
// document.getElementById("button-8").addEventListener("click", numberDisplay8);

// const numberDisplay9 = () => {
//   document.getElementById("number-display").innerText = 9;
// };
// document.getElementById("button-9").addEventListener("click", numberDisplay9);

// const numberDisplayPercentage = () => {
//   document.getElementById("number-display").innerText = "%";
// };
// document
//   .getElementById("percentage-button")
//   .addEventListener("click", numberDisplayPercentage);

// const numberDisplayMultiply = () => {
//   document.getElementById("number-display").innerText = "x";
// };
// document
//   .getElementById("button-multiply")
//   .addEventListener("click", numberDisplayMultiply);

// const numberDisplayMinus = () => {
//   document.getElementById("button-minus").innerText = "-";
// };
// document
//   .getElementById("button-minus")
//   .addEventListener("click", numberDisplayMinus);
// const numberDisplayPlus = () => {
//   document.getElementById("number-display").innerText = "+";
// };
// document
//   .getElementById("button-plus")
//   .addEventListener("click", numberDisplayPlus);
// const numberDisplayEquals = () => {
//   document.getElementById("number-display").innerText = "=";
// };
// document
//   .getElementById("button-equals")
//   .addEventListener("click", numberDisplayEquals);
// const numberDisplayClear = () => {
//   document.getElementById("number-display").innerText = "";
// };
// document
//   .getElementById("button-clear")
//   .addEventListener("click", numberDisplayClear);
// const numberDisplayDot = () => {
//   document.getElementById("number-display").innerText = ".";
// };
// document
//   .getElementById("button-dot")
//   .addEventListener("click", numberDisplayDot);
