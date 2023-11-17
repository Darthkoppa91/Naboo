const btn = document.querySelector('button');
const timer = document.querySelector('.timer');
const resetBtn = document.querySelector('.reset');
const msg = document.querySelector('.message');
const body = document.querySelector('body');
const heartIcon = document.querySelector('.lds-heart')

let seconds = 2;
let interval;


function startTimer() {

    interval = setInterval(() => {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        heartIcon.classList.remove('d-none')
        if(seconds === 0){
            clearInterval(interval)

            msg.innerHTML = "Srecna Slava Lazare!";

            msg.classList.remove('d-none')
            body.classList.add( 'lazar-bg')
        
        }
            
    }, 1000)
    
}

function resetTimer(){
    clearInterval(interval);
    seconds = 3;
    timer.innerHTML = seconds;
    body.classList.remove('lazar-bg')
    msg.classList.add('d-none')
    heartIcon.classList.add('d-none')
}


btn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer)





