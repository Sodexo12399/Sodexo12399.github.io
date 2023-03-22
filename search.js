


async function sleep(seconds) {
  return new Promise((res) => setTimeout(res, seconds * 1000));
}



window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

var recon = new window.SpeechRecognition();
  
  recon.onresult = (event)=>{
    divs.forEach(div => div.classList.remove('click'))
    divs.forEach(div => div.classList.remove('animate'))
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

const micro = document.querySelector('button#micro'),
      divs = document.querySelectorAll('div.star div')
  micro.onclick = ()=>{
    recon.start()
    divs.forEach(div => div.classList.add('click'))
    recon.onspeechstart = (e)=>{
      console.log(e);
      divs.forEach(div => div.classList.add('animate'))
    }
    recon.onspeechend = () =>{
      divs.forEach(div => div.classList.remove('animate'))
    }
  }

recon.onend= ()=>{
  divs.forEach(div => div.classList.remove('click', 'animate'))
}
