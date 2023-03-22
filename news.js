//https://articles.sportslocalmedia.com/letudiant.json

const wra = document.querySelector("div.news");
wra.style.display = "none";

const news2 = async () => {
  let d = new Date();
  const res = await fetch("https://articles.sportslocalmedia.com/foot01.json"),
    data = await res.json();
  var i = Math.floor(Math.random() * 24) || 0
  console.log(data, i);
  const title = data[i].title;
  document.querySelector("img.new").src = data[i].imageUrl;
  document.querySelector("a.new").href = data[i].url;
  let postDate = Date.parse(data[i].publicationDate);
  let date = (Date.parse(d) - postDate)/1000;
  console.log(postDate, Date.parse(d), date);
  function format(date){
        if(date< 60)
        return 'now'

        else if(date < 3600)
        return `${Math.floor(date/60)} min. ago`

        else if(date < 86400)
        return `${Math.floor(date/3600)} hr. ago`

        else return `${Math.floor(date/(86400))} day. ago`
  }
  document.querySelector("h1.title").innerHTML =
    data[i].title + `<span class='time'>${format(date)}</span>`;
  wra.style.display = "flex";
};
const maghrib = async () => {
  let d = new Date()
  const res = await fetch("https://www.hespress.com/?weather_and_prayer"),
    data = await res.json();
    console.log(data, Date.parse(d), d);
    let magh = new Date(`${data.prayer[80].maghrib} GMT+0000 ${d.getDay()}/${d.getDate()}/${d.getFullYear()} (UTC)`)

        let diff = -(Date.parse(d) - Date.parse(magh))/1000
    console.log(magh);
    function format(date){
      if(date< 60)
      return 'now'

      else if(date < 3600)
      return `${Math.floor(date/60)} min.`

      else
      return `${Math.floor(date/3600)} Hr.`

}
  document.querySelector('div.maghrib h1').innerHTML = format(diff)
};

const Wydad = async () => {
  let d = new Date()
  const res = await fetch("https://api.wydadplus.com/api/latestarticles"),
    data = await res.json();
    console.log(data);

    function format(date){
      if(date< 60)
      return 'now'

      else if(date < 3600)
      return `${Math.floor(date/60)} min.`

      else
      return `${Math.floor(date/3600)} Hr.`

}
  document.querySelector('div.fan-zone h1').innerHTML = data[0].Title
};


Wydad()

if(navigator.onLine){
  news2();
  setInterval(news2, 15000)
  setInterval(maghrib, 15000)
  maghrib()
} else {
console.log('offline');
}
