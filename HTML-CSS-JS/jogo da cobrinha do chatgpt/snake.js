const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let num1 = "";
let num2 = "";
let operator = "";

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (value === "C") {
      num1 = "";
      num2 = "";
      operator = "";
      display.innerText = "0";
    } else if (value === "+" || value === "-" || value === "&times;" || value === "&divide;") {
      operator = value;
      display.innerText = "0";
    } else if (value === "=") {
      num2 = display.innerText;
      let result = 0;

      switch (operator) {
        case "+":
          result = parseFloat(num1) + parseFloat(num2);
          break;
        case "-":
          result = parseFloat(num1) - parseFloat(num2);