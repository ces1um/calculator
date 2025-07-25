const calculatorDisplay = document.querySelector("input[name='display']");
const calculatorButtons = document.querySelectorAll("button");

let firstNum = "";
let secondNum = "";
let isSecondNum = false;
let result = 0;
let operator = "";

function changeTheme() {
  const element = document.querySelector("html");
  const classElement = element.classList.toggle("dark");
}

calculatorButtons.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.id == "theme") {
      return;
    }

    let content = button.textContent;

    if (button.classList.contains("calculator__num")) {
      if (!isSecondNum) {
        firstNum += content;
        calculatorDisplay.value = firstNum;
      } else {
        secondNum += content;
        calculatorDisplay.value = secondNum;
      }
    }

    if (button.classList.contains("calculator__operation")) {
      if (content === "C") {
        resetAll();
      } else if (content === "=") {
        calculate();
      } else if (content === "CE") {
        resetElement();
      } else if (content === ".") {
        floatNum();
      } else if (content === "+/-") {
        changeNumberSign();
      } else {
        isSecondNum = true;
        operator = content;
        calculatorDisplay.value = operator;
      }
    }

    function calculate() {
      const num1 = parseFloat(firstNum);
      const num2 = parseFloat(secondNum);

      switch (operator) {
        case "+":
          result = num1 + num2;
          firstNum = result;
          calculatorDisplay.value = firstNum;
          secondNum = "";
          break;
        case "-":
          result = num1 - num2;
          firstNum = result;
          calculatorDisplay.value = firstNum;
          secondNum = "";
          break;
        case "×":
          result = num1 * num2;
          firstNum = result;
          calculatorDisplay.value = firstNum;
          secondNum = "";
          break;
        case "%":
          result = (num2 * num1) / 100;
          firstNum = result;
          calculatorDisplay.value = firstNum;
          secondNum = "";
          break;
        case "÷":
          if (secondNum !== "0") {
            result = num1 / num2;
            firstNum = result;
            calculatorDisplay.value = firstNum;
            secondNum = "";
            break;
          } else {
            calculatorDisplay.value = "На ноль делить нельзя!";
            firstNum = "";
            secondNum = "";
            isSecondNum = false;
            operator = "";
            result = 0;
            break;
          }
      }
    }

    function floatNum() {
      if (!isSecondNum) {
        firstNum += ".";
        calculatorDisplay.value = firstNum;
      } else {
        secondNum += ".";
        calculatorDisplay.value = secondNum;
      }
    }

    function changeNumberSign() {
      if (!isSecondNum) {
        firstNum = parseFloat((firstNum * -1).toString());
        calculatorDisplay.value = firstNum;
      } else {
        secondNum = parseFloat((secondNum * -1).toString());
        calculatorDisplay.value = secondNum;
      }
    }

    function resetElement() {
      if (!isSecondNum) {
        firstNum = firstNum.slice(0, -1);
        calculatorDisplay.value = firstNum;
      } else {
        secondNum = secondNum.slice(0, -1);
        calculatorDisplay.value = secondNum;
      }
    }

    function resetAll() {
      calculatorDisplay.value = 0;
      firstNum = "";
      secondNum = "";
      result = 0;
      operator = "";
      isSecondNum = false;
    }

    console.log("firstNum: " + firstNum);
    console.log("operator: " + operator);
    console.log("secondNum: " + secondNum);
  })
);
