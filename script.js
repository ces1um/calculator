function changeTheme() {
  const element = document.querySelector("html");
  const classElement = element.classList.toggle("dark");
}

let display = document.querySelector("input[name='input-field']");
let buttons = document.querySelectorAll("button");

let firstNumber = "";
let secondNumber = "";
let result = 0;
let operation = "";

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    let content = button.textContent;

    if (button.id == "theme") {
      return;
    }

    if (button.className !== "operation") {
      if (firstNumber === "" && secondNumber === "") {
        firstNumber = Number(content);
        display.value += firstNumber;
      } else if (firstNumber !== "" && secondNumber === "") {
        secondNumber = Number(content);
        display.value += secondNumber;
      }
    }

    if (
      button.className === "operation" &&
      content !== "CE" &&
      content !== "C"
    ) {
      operation = content;
      display.value += operation;
    }

    if (firstNumber !== "" && operation !== "" && secondNumber !== "") {
      switch (operation) {
        case "+":
          result = firstNumber + secondNumber;
          display.value = result;
          break;
        case "-":
          result = firstNumber - secondNumber;
          display.value = result;
          break;
        case "×":
          result = firstNumber * secondNumber;
          display.value = result;
          break;
        case "÷":
          if (secondNumber === 0) {
            display.value = "Ошибка! На 0 не делят!";
          } else {
            result = firstNumber / secondNumber;
            display.value = result;
          }
      }
    }

    if (
      content === "(" ||
      content === ")" ||
      content === "." ||
      content === "CE" ||
      content === "="
    ) {
      alert("функционал дорабатывается!");
    }

    if (content == "C") {
      display.value = "";
      firstNumber = "";
      secondNumber = "";
      operation = "";
      result = 0;
    }
  })
);
