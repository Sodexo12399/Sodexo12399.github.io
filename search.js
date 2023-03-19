let input = document.querySelector("input#input"),
  yt = document.querySelector("input#youtube");

input.focus();
yt.focus();

input.onkeyup = async () => {
  if (input.value !== "") {
    await sleep(5);
    let put = input.value.replace(" ", "+");
    window.open(`https://www.google.com/search?q=${put}`, "_blank");
    input.value = "";
  }
};

async function sleep(seconds) {
  return new Promise((res) => setTimeout(res, seconds * 1000));
}

yt.onkeyup = async () => {
  if (yt.value !== "") {
    await sleep(5);
    let put = yt.value.replace(" ", "+");
    window.open(`https://www.youtube.com/search?q=${put}`, "_blank");
    yt.value = "";
  }
};

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

var recon = new window.SpeechRecognition();
  recon.lang = 'fr-FR'
  recon.onresult = (event)=>{
    let put = event.results[0][0].transcript.replace(" ", "+")
    let putto = event.results[0][0].transcript.replace(" ", "+").replace('YouTube', '')
    if(put.indexOf('YouTube') != -1){
    window.open(`https://www.youtube.com/search?q=${putto}`, "_blank");
    }else if(put.indexOf('.')!=-1){
      console.log(event.results[0][0].transcript);
    window.open(`https://${event.results[0][0].transcript}`, "_blank");
    }
    else{
    window.open(`https://www.google.com/search?q=${putto}`, "_blank");
    }
  }

const micro = document.querySelector('button#micro');
micro.onclick = () => {
  recon.start()
};

