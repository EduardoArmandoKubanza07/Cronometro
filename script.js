const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', start);

const pauseBtn = document.querySelector('#pause');
pauseBtn.addEventListener('click', pause);

const stopBtn = document.querySelector('#stop');
stopBtn.addEventListener('click', stop);

const display = document.querySelector('.display p');

let hour = 0;
let min = 0;
let seg = 0;
let cron;

function start() {
    cron = setInterval(cronometer, 1000);
}

function pause() {
    clearInterval(cron);
}

function stop() {
    clearInterval(cron);
    hour = 0;
    min = 0;
    seg = 0;

    display.innerHTML = '00:00:00';
}

function cronometer(){
    seg++;

    if(seg === 60){
        seg = 0;
        min++;        
    }
    
    if(min === 60){
        min = 0;
        hour++;
    }

    let format = ((hour < 10 ? '0'+hour : hour) +':'+(min < 10 ? '0'+min : min) + ':' +(seg < 10 ? '0'+seg : seg));
    
    display.innerHTML = format;    
}

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', exit);

function exit() {
    window.close();
}
