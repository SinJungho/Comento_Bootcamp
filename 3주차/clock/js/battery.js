let battery = document.getElementById("battery-text");
let maxBattery = 100;

function useBattery() {
  setInterval(function(){
    console.log(maxBattery--);
    battery.innerText = maxBattery-- + "%";

    if (maxBattery == 0) {
      maxBattery = 100;
    }
  }, 1000);
}

useBattery();