const span = document.querySelector('span.hour')
async function clock () {
    const audio = new Audio("tick.wav")
  const date = new Date();
  const hours = (((date.getHours() + 11) % 12) + 1)*30;
  const mn = (date.getMinutes())*6;
  const seconds = (date.getSeconds())*6;
   

  if((mn/6) >= 10){
    span.innerHTML = `${hours / 30} : ${mn/6}`
  }
  else{
    span.innerHTML = `${hours / 30} : 0${mn/6}`
  }

    
  document.querySelector('.heure').style.transform = `rotate(${hours}deg)`
  document.querySelector('.minute').style.transform = `rotate(${mn}deg)`
  document.querySelector('.seconde').style.transform = `rotate(${seconds}deg)`
  
}

setInterval(clock, 1000)









