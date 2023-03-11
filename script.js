const speedSpan = document.querySelector("span.speed"),
      speedWrapper =document.querySelector('div.speed')

navigator.connection.addEventListener("change", getSpeed);
navigator.connection.addEventListener("downlinkchange", getSpeed);
document.onload = getSpeed();
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
document.querySelector("span.mad").style.display = "none";
document.querySelector("div.mad").style.display = "none";

const Exchange = async () => {
  const res = await fetch(
      "https://api.currencyfreaks.com/latest?apikey=0ce380b45c794f10823d6f43a681887b"
    ),
    text = await res.json();

    if (text.success == false){
      document.querySelector("span.mad").style.display = "none";
document.querySelector("div.mad").style.display = "none";

    }
    else{
      const mad = await financial(text.rates.MAD);
      document.querySelector("span.mad").innerHTML = mad + "<span>&nbspMAD";
      document.querySelector("span.mad").style.display = "block";
      document.querySelector("div.mad").style.display = "block";

    }
      
};


const getLatestNews = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?category=sports&from=2023-03-09&country=ma&sortBy=popularity&apiKey=4846389196c140279cc768ca8aa5f0ce"
  );
  const data = await res.json();
  var i = Math.floor(Math.random() * data.articles.length);
  const news = data.articles[i].title;
  console.log(news);
};



initBattery();

function initBattery() {
  const liquid = document.querySelector(".Bliquid");
  const status = document.querySelector("p.Bstatus");
  const percentage = document.querySelector("h1.Bpercentage");

  navigator.getBattery().then((Batt) => {
    updateBattery = () => {
      let level = Math.floor(Batt.level * 100);
      percentage.innerHTML = level + "%";
      liquid.style.height = `${parseInt(Batt.level * 100)}%`;
      if (level == 100) {
        status.innerHTML = `Battery Full <i class='ri-battery-2-fill green-color'></i>`;
        liquid.style.height = "103%";
      } else if ((level <= 20) & !Batt.charging) {
        status.innerHTML = `Low Charge <i class="ri-plug-line animated-red"></i>`;
      } else if (Batt.charging) {
        status.innerHTML = `Charging... <i class="ri-flashlight-line animated-green"></i>`;
      } else {
        status.innerHTML = "";
      }

      if(level <= 20){
        liquid.classList.add('gradientRed')
        liquid.classList.remove('gradientGreen','gradientyellow', 'gradientOrange' )
      } else if(level <= 49){
        liquid.classList.add('gradientOrange')
        liquid.classList.remove('gradientGreen','gradientyellow', 'gradientRed' )
      } else if(level <=80 ){
        liquid.classList.add('gradientyellow')
        liquid.classList.remove('gradientGreen','gradientOrange', 'gradientRed' ) 
      } else {
        liquid.classList.add('gradientGreen')
        liquid.classList.remove('gradientOrange','gradientyellow', 'gradientRed' )
      }
    };
    updateBattery();
    Batt.addEventListener('chargingchange', ()=>{updateBattery()})
    Batt.addEventListener('levelchange', ()=>{updateBattery()})
  });
}

