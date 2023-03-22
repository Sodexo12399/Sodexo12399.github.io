const options2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1a9457084emsh7f3365372f2bf96p1227c6jsn1af01cf125ed",
    "X-RapidAPI-Host": "forecast9.p.rapidapi.com",
  },
};

const temp = document.querySelector("h1.temp"),
  imge = document.querySelector("img.wt"),
  rap = document.querySelector("div.weather");
rap.style.display = 'none'
async function getData() {
  const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=casablanca&appid=ec5d4dcb3e5182ec2cebc5a3cb03cf86`
    ),
    data = await res.json();
  const tempo = Math.floor(data.main.temp - 273, 15);

  temp.innerHTML = `${tempo} <span>°C</span>`;

}


