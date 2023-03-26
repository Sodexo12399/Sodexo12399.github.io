//https://articles.sportslocalmedia.com/letudiant.json

const wra = document.querySelector("div.news");
wra.style.display = "none";

const news2 = async (i) => {
  let d = new Date();
  const res = await fetch("https://articles.sportslocalmedia.com/foot01.json"),
    data = await res.json();

  document.querySelector("img.new").src = data[i].imageUrl;
  document.querySelector("a.new").href = data[i].url;
  let postDate = Date.parse(data[i].publicationDate);
  let date = (d.getTime() - postDate) / 1000;
  function format(date) {
    if (date < 60) return "now";
    else if (date < 3600) return `${Math.floor(date / 60)} min. ago`;
    else if (date < 86400) return `${Math.floor(date / 3600)} hr. ago`;
    else return `${Math.floor(date / 86400)} day. ago`;
  }
  document.querySelector("h1.title").innerHTML =
    data[i].title + `<span class='time'>${format(date)}</span>`;
  wra.style.display = "flex";
};
const maghrib = async () => {
  let d = new Date(),
    tmsp = Date.parse(d);
  const res = await fetch("https://www.hespress.com/?weather_and_prayer"),
    data = await res.json();
  let magh = new Date(
    `${data.prayer[80].maghrib} ${
      d.getMonth() + 1
    }/${d.getDate()}/${d.getFullYear()}`
  );

  let diff = -(Date.parse(d) - Date.parse(magh)) / 1000;

  function format(date) {
    if (date < 60) return "now";
    else if (date < 3600) return `${Math.floor(date / 60)} min.`;
    else if (date < 3600 * 24) return `${Math.floor(date / 3600)}hr ${Math.floor(((date/3600) - Math.floor(date / 3600))*60)}min`;
    else {
      document.querySelector("div.maghrib").style.display = "none";
    }
  }
  document.querySelector("div.maghrib h1").innerHTML = format(diff);
};
document.querySelector("div.fan-zone").style.display = "none";

const Wydad = async () => {
  let d = new Date();
  const res = await fetch("https://api.wydadplus.com/api/latestarticles"),
    data = await res.json();
  document.querySelector("div.fan-zone").style.display = "flex";
  document.querySelector("div.fan-zone h1").innerHTML = data[0].Title;
};

if (navigator.onLine) {
  setInterval(function () {
    news2(0);
  }, 5000);
  setInterval(function () {
    var c = Math.floor(Math.random() * 10);
    news2(c);
  }, 10000);
  setInterval(maghrib, 1000);
  maghrib();
  Wydad();
} else {
  console.log("offline");
}

fetch('https://www.footmercato.net/live/931095467905835062/classement').then(res => res.type).then(console.log())