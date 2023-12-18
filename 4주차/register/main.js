let inputId = document.querySelector("#floatingInput");
let inputPw = document.querySelector("#floatingPassword");

let users = ["admin", "jungho", "java"];

function idRule(value) {
  return inputId.value.length >= 4 && inputId.value.length <= 12;
}

function idAndPwStringOrNumber(str) {
  return /^[A-Za-z0-9@$!%*#?&]*$/.test(str);
}

function pwRule(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    str
  );
}

function isEqual(password1, password2) {
  return password1 === password2;
}

function checkDuplication(id) {
  if (users.includes(id)) {
    alert("이미 사용 중인 아이디입니다.");
  } else {
    alert("사용 가능한 아이디입니다.");
  }
}

function cliclkDoubleCheckId() {
  if (inputId.value.length !== 0) {
    if (idAndPwStringOrNumber(inputId.value) === false) {
      alert(`영어나 숫자만 가능합니다.`);
    } else if (idRule(inputId.value) === false) {
      alert(`아이디는 4 ~ 12 글자여야 합니다.`);
    } else if (idAndPwStringOrNumber(inputId.value) && idRule(inputId.value)) {
      checkDuplication(inputId.value); 
    } else  {
      alert(`입력하신 아이디를 다시 확인 해주세요.`);
    }
  }
}

function checkPw() {
  if (inputPw.value.length !== 0) {
    if (pwRule(inputPw.value)){
      alert(`성공`);
    } else {
      alert(`8글자 이상, 영문, 숫자, 특수 문자로 이뤄진 비밀번호를 입력하세요.`);
    }
  }
}


