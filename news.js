//https://articles.sportslocalmedia.com/letudiant.json

const wra = document.querySelector('div.news')
wra.style.display = 'none'
const news = async () => {
    var i = Math.floor(Math.random()*10);
    console.log(i);
  const res = await fetch("https://twitter.com/i/api/1.1/hashflags.json"),
  data = await res.json()
  console.log(data);
  const title = data[i].title
  document.querySelector('img.new').src = data[i].imageUrl;
  document.querySelector('a.new').href = data[i].url;
  document.querySelector('h1.title').innerText = data[i].title;
  wra.style.display ='flex'
  if(title.includes('maroc') || title.includes('sport') || title.includes('PSG')|| title.includes('Macron')|| title.includes('sport')|| title.includes('sport')|| title.includes('sport')|| title.includes('sport')){

  }
};


const xhr = new XMLHttpRequest();

xhr.onreadystatechange = ()=>{
  if(xhr.readyState === 4 && xhr.status === 200){
    const text = xhr.response;
    console.log(text);
  }
}

xhr.open("GET", "", true)
