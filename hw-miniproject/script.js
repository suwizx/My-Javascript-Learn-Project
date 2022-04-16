let timetext = ''
let clock = document.getElementById('ck')
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let reset = document.getElementById('reset')

let sec = 00
let min = 00


function stopclick(){
    hidestop()
    clearInterval(Timeradd)
}

function startclick(){
    hidestart()
    Timeradd = setInterval(timeadd, 1000)
    
}

function resetclick(){
    sec = 0
    min = 0
    stopclick()
    clock.innerHTML = '<h1>00:00</h1>'
}

function hidestart(){
    start.style.display = 'none';
    stop.style.display = 'block';
}
function hidestop(){
    stop.style.display = 'none';
    start.style.display = 'block';
}


function timeadd(){
    sec = sec + 1
    if (sec >= 60) {
        min = min+1
        sec = 0
    }
    
    let mins = '00'
    let secs = '00'
    if (min<10){
        mins = '0'+min
    }
    else{
        mins = min
    }
    if (sec<10){
        secs = '0'+sec
    }
    else{
        secs = sec
    }
    clock.innerHTML = '<h1>' + mins + ':' + secs + '</h1>'
}