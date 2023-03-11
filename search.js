let input = document.querySelector("input#input"),
  yt = document.querySelector("input#youtube");

input.focus();
yt.focus();

input.onkeyup = async () => {
  if (input.value !== "") {
    await sleep(2)
    let put = input.value.replace(" ", "+");
    window.open(`https://www.google.com/search?q=${put}`, "_blank");
    input.value = "";
  }
};

async function sleep(seconds){
  return new Promise((res) => setTimeout(res, seconds*1000))
} 

yt.onkeyup = async () => {
  if (yt.value !== "") {
    await sleep(2)
    let put = yt.value.replace(" ", "+");
    window.open(`https://www.youtube.com/search?q=${put}`, "_blank");
    yt.value = "";
  }
};

