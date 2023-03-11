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
const getIp = async () => {
    const reso =  await fetch('https://api.ipify.org/?format=json'),
        data =  await reso.json()
        ip = data.ip
        console.log(ip)
}

getIp()

const options4 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1a9457084emsh7f3365372f2bf96p1227c6jsn1af01cf125ed',
		'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
	}
};

fetch('http://ip-api.com/json/?fields=61439')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



const options3 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1a9457084emsh7f3365372f2bf96p1227c6jsn1af01cf125ed',
		'X-RapidAPI-Host': 'spott.p.rapidapi.com'
	}
};






