let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    //Getting hour, min, sec from date

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let dd = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;33333333333333
    let sRotation = 6*ss;

    date = document.querySelector('.date');

    // var day = weekday[date.getDay()];
    // if (month < 9){
    //     month = "0" + month;
    // }

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
    // date.inner.HTML = date + "/" + month + "/" + year;



}

setInterval(displayTime,1000);