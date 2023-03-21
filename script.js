

const speedSpan = document.querySelector("span.speed"),
      speedWrapper =document.querySelector('div.speed')

      speedWrapper.style.display = 'none'


function getSpeed() {
  speedWrapper.classList.add('loader')
  var imageAddr =
    "https://upload.wikimedia.org/wikipedia/commons/2/2d/Snake_River_%285mb%29.jpg";
  var downloadSize = 5000000,
    start,
    end,
    dwnSrc = new Image();
  start = new Date().getTime();
  var cache = "?nn=" + start;
  dwnSrc.src = imageAddr + cache;
  dwnSrc.onload = () => {
    end = new Date().getTime();
    var duration = (end - start) / 1000;
    const loadedBytes = downloadSize * 8;
    const speed = loadedBytes / duration / 1024 / 1024;
    console.log(speed);
    speedSpan.innerHTML = financial(speed) + " Mb/s";
  speedWrapper.classList.remove('loader');
  speedWrapper.style.display = 'flex'

  if(speed< 3){
    document.querySelector('div.progress').style.background = 'red'
  } else if(speed < 10){
    document.querySelector('div.progress').style.background = 'yellow'
  } else{
    document.querySelector('div.progress').style.background = 'green'
  }

  };
}

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}










// initBattery();

// function initBattery() {
//   const liquid = document.querySelector(".Bliquid");
//   const status = document.querySelector("p.Bstatus");
//   const percentage = document.querySelector("h1.Bpercentage");

//   navigator.getBattery().then((Batt) => {
//     updateBattery = () => {
//       let level = Math.floor(Batt.level * 100);
//       percentage.innerHTML = level + "%";
//       liquid.style.height = `${parseInt(Batt.level * 100)}%`;
//       if (level == 100) {
//         status.innerHTML = `Battery Full <i class='ri-battery-2-fill green-color'></i>`;
//         liquid.style.height = "103%";
//       } else if ((level <= 20) & !Batt.charging) {
//         status.innerHTML = `Low Charge <i class="ri-plug-line animated-red"></i>`;
//       } else if (Batt.charging) {
//         status.innerHTML = `Charging... <i class="ri-flashlight-line animated-green"></i>`;
//       } else {
//         status.innerHTML = "";
//       }

//       if(level <= 20){
//         liquid.classList.add('gradientRed')
//         liquid.classList.remove('gradientGreen','gradientyellow', 'gradientOrange' )
//       } else if(level <= 49){
//         liquid.classList.add('gradientOrange')
//         liquid.classList.remove('gradientGreen','gradientyellow', 'gradientRed' )
//       } else if(level <=80 ){
//         liquid.classList.add('gradientyellow')
//         liquid.classList.remove('gradientGreen','gradientOrange', 'gradientRed' ) 
//       } else {
//         liquid.classList.add('gradientGreen')
//         liquid.classList.remove('gradientOrange','gradientyellow', 'gradientRed' )
//       }
//     };
//     updateBattery();
//     Batt.addEventListener('chargingchange', ()=>{updateBattery()})
//     Batt.addEventListener('levelchange', ()=>{updateBattery()})
//   });
// }

