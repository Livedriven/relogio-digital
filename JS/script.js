const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

setInterval((){
    let dataToday = new Date()
    let hr = dataToday.getHours();
    let min = dataToday.getMinutes();
    let seg = dataToday.getSeconds();

    horas.textContent = hr < 10 ? '0' + hr : hr;
    minutos.textContent = min < 10 ? '0' + min: min;
    segundos.textContent = seg < 10 ? '0' + seg: seg;
}, 1000);
