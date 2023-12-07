function add(char) {
  let display = document.getElementById("display");
  if (display.innerText.length < 7) {
    //if (char == '%') {
      //percentBase = parseFloat(display.innerText);
      //display.innerText = '0';
    //} else {
      if (display.innerText == '0') {
        display.innerText = char;
      } else {
        display.innerText += char;
      }
    //}
  } else {
    alert('최대 7자리까지 입력 가능합니다.');
  }
}

function clearDisplay() {
  let display = document.getElementById("display");
  display.innerText = '0';
}

function percent() {
  let display = document.getElementById("display");
  display.innerText = parseFloat(display.innerText) / 100;
}

function calculate() {
  let display = document.getElementById("display");
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = 'Error';
  }
}

function backSpace() {
  let display = document.getElementById("display");
  display.innerText = display.innerText.slice(0,-1);

  if (display.innerText.length <= 1) {
    display.innerText = '0';
  } else {
    display.innerText = display.innerText.slice(display.length-1);
  }
}