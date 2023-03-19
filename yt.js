const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1a9457084emsh7f3365372f2bf96p1227c6jsn1af01cf125ed",
    "X-RapidAPI-Host": "ytstream-download-youtube-videos.p.rapidapi.com",
  },
};

const btn = document.querySelector("button.dwn-btn");

function parser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

const download = document.querySelector("input#download");
btn.style.pointerEvents = "none";

var video = document.querySelector("video#video");
var source = document.createElement("source");

function FetchFile(url) {
  console.log(url);
}
btn.style.display = "none";
download.onpaste = async (e) => {
  if (e != "") {
    btn.innerHTML = "Loading";
    btn.style.display = "block";

    const link = e.clipboardData.getData("text");
    const id = parser(link);
    const response = await fetch(
      `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${id}`,
      options
    );
    const data = await response.json();
    console.log(data);
    const url = data.adaptiveFormats[3].url;
    btn.innerHTML = "Download";
    btn.style.pointerEvents = "all";
    btn.onclick = () => {
      open(url, "_blank");
    };
  }
};

// setInterval(() => {
//   const i = Math.floor(Math.random() * colorArray.length);
//   document.querySelector("body").style.background = colorArray[i];
//   console.log(i)
// }, 1000);

const options7 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1a9457084emsh7f3365372f2bf96p1227c6jsn1af01cf125ed",
    "X-RapidAPI-Host": "dicolink.p.rapidapi.com",
  },
};

const Def = async (word) => {
  const res = await fetch(
      `https://dicolink.p.rapidapi.com/mot/${word}/definitions`,
      options7
    ),
    data = await res.json();
  console.log(data);

  const def = data[0].definition,
    sourc = data[0].source;
  document.querySelector("span#def").innerHTML = def, sourc;
};

const inp = document.querySelector("input#def");
const button = document.querySelector("button#def");
button.onclick = () => {
  Def(`${inp.value}`);
};
