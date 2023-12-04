let totalCount = 0;

function addAlarm() {
  if (totalCount >= 3) {
    alert("알람은 최대 3개까지만 가능합니다.");
    return;
  }
  let li = document.createElement("li");
  let hour = document.getElementById("inputHour").value;
  let min = document.getElementById("inputMin").value;
  let sec = document.getElementById("inputSec").value;

  if (hour == "" || min == "" || sec == "") {
      alert("시간을 채워주세요.");
  } else if (isNaN(hour) || isNaN(min) || isNaN(sec)) {
      alert("올바른 시간을 입력하세요.");
  } else if (hour.length > 2 || min.length > 2 || sec.length > 2) {
    alert("2자리를 넘어갈 수 없습니다.");
  } else if (hour > 24) {
    alert("'시'가 올바른 범위가 아닙니다.");
  } else if (min > 60) {
    alert("'분'이 올바른 범위가 아닙니다.");
  } else if(sec > 60){
    alert("'초'가 올바른 범위가 아닙니다.");
  } 
   else {
      let time = document.createTextNode(String(hour).padStart(2, "0") + ":" + String(min).padStart(2, "0") + ":" + String(sec).padStart(2,"0"));
      li.appendChild(time);

      let delBtn = createDeleteBtn();
      li.appendChild(delBtn);

      document.getElementById("result").appendChild(li);
      setAlarm(hour, min, sec);
  }

  totalCount++;
}

function setAlarm(hour, min, sec) {
  let now = new Date();
  let alarm = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, min, sec);

  if(now.getTime() > alarm.getTime()){
      alarm.setDate(alarm.getDate() + 1);
  }

  let timeOut = alarm.getTime() - now.getTime();

  setTimeout(function () {
      alert("ring ring");
  }, timeOut);
}

function deleteAlarm(btn) {
  btn.parentNode.remove();
  totalCount--;
}

function createDeleteBtn() {
  let delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", function () {
    deleteAlarm(this);

  if (delBtn > 3) {
    alert("")
  }
  });
  return delBtn;
}
