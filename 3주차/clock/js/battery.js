let battery = document.getElementById("battery-text");
let timer = document.getElementById("timer");
let maxBattery = 100;

function useBattery() {
  setInterval(function(){
    if (maxBattery == 0) {
      // maxBattery = 100;
      timer.style.backgroundColor = "black";
      maxBattery = 100;
    } else if(maxBattery != 0){
      // maxBattery = 100;
      timer.style.backgroundColor = "white";
    }
    battery.innerText = maxBattery + "%";
    maxBattery--;    
  }, 1000);
}

useBattery();