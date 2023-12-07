let printDate = document.getElementById("date");
let printTime = document.getElementById("time");
let dateInfo = new Date();

// date
function getDate() {
  let year = dateInfo.getFullYear();
  let month = dateInfo.getMonth();
  let date = String(dateInfo.getDate()).padStart(2,"0");

  printDate.innerHTML = `${year} - ${month} - ${date}`;
}

//timer
function getTime(params) {
  setInterval(function() {
    dateInfo = new Date(); //dateInfo가 실시간 업데이트를 못해서 다시 객체 참조
    let hour = String(dateInfo.getHours()).padStart(2, "0");
    let min = String(dateInfo.getMinutes()).padStart(2, "0");
    let sec = String(dateInfo.getSeconds()).padStart(2, "0");
  
    printTime.innerText = (`${hour} : ${min} : ${sec}`);
  }, 1000);
}

getDate();
getTime();
