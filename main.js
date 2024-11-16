let time =30
const timer = document.getElementById('time');
const interval = setInterval(()=>{
    time--;
    timer.textContent = time
    if(time <=0){
        clearInterval(interval);
        window.location.href = 'https://myportcv.netlify.app';
    }
},1000)



function footerText(){
    let footer = document.getElementById('footer');
    footer.style.color = '#555';
    window.location.href = 'info.html';
}
function backText(){
    let footer = document.getElementById('footer');
    footer.style.color = '#555';
    window.location.href = 'index.html';
}
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page Loaded Successfully!");
  });