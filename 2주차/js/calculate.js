// HTML 요소 선택
const inputBtn = document.querySelector(".input-btn");
const numBtns = document.querySelectorAll(".num__btn");
const operatorBtns = document.querySelectorAll(".operator__btn");
const menuBtns = document.querySelectorAll(".menu__btn");
const equalsBtn = document.querySelector(".result__btn");

// 초기값 설정
let currentInput = "0";
let operator = "";
let operand1 = "";
let operand2 = "";

// 숫자 버튼을 눌렀을 때의 동작
numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (operator !== "" && currentInput === operand1) {
      currentInput = "";
    }
    if (currentInput == "0") {
      currentInput = btn.textContent;
    } else {
      currentInput += btn.textContent;
    }
    inputBtn.textContent = currentInput;
  });
});

// 백스페이스 기능 추가
document.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === "") {
      currentInput = "0";
    }
    inputBtn.textContent = currentInput;
  }
});

// 연산자 버튼을 눌렀을 때의 동작
operatorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (operator !== "" && operand1 !== "" && currentInput !== "") {
      operand2 = currentInput;
      currentInput = calculate(operand1, operator, operand2);
    }
    operator = btn.textContent;
    if (currentInput !== "") {
      operand1 = currentInput;
    }
  });
});


// 결과 버튼을 눌렀을 때의 동작
equalsBtn.addEventListener("click", () => {
  if (operator !== "" && operand1 !== "" && currentInput !== "") {
    operand2 = currentInput;
    currentInput = calculate(operand1, operator, operand2);
    inputBtn.textContent = currentInput;
    operator = "";
    operand1 = "";
  }
});

// 백스페이스 버튼이 클릭됐을 때의 동작
document.querySelector('.backspace__btn').addEventListener('click', () => {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === "") {
    currentInput = "0";
  }
  inputBtn.textContent = currentInput;
});

// 메뉴 버튼을 눌렀을 때의 동작
menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.textContent) {
      case "CE":
        currentInput = "0";
        operator = "";
        operand1 = "";
        operand2 = "";
        inputBtn.textContent = currentInput;
        break;
      case "%":
        currentInput = (parseFloat(currentInput) / 100).toString();
        inputBtn.textContent = currentInput;
        break;
      default:
        break;
    }
  });
});

// 연산 함수
function calculate(op1, operator, op2) {
  switch (operator) {
    case "+":
      return (parseFloat(op1) + parseFloat(op2)).toString();
    case "-":
      return (parseFloat(op1) - parseFloat(op2)).toString();
    case "x":
      return (parseFloat(op1) * parseFloat(op2)).toString();
    case "/":
      return (parseFloat(op1) / parseFloat(op2)).toString();
    default:
      return op1;
  }
}
