const inputId = document.querySelector("#floatingInput");
const inputPw = document.querySelector("#floatingPassword");

function idRule(value) {
  return inputId.value.length >= 4 && inputId.value.length <= 12;
}

function idAndPwStringOrNumber(str) {
  return /^[A-Za-z0-9][A-Za-z0-9]*$/.test(str);
}

function pwRule(str){
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}

function isEqual(password1, password2) {
  return password1 === password2;
}







