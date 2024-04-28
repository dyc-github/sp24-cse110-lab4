
function printCurrentTime(){
    let d = new Date()
    let time = d.toLocaleDateString();
    console.log(time);
}

setInterval(printCurrentTime, 1000);