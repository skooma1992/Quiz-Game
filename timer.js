var finishText = document.querySelector('.navbar-text');
var completeEl = document.querySelector('#complete');
var timeleft = (60);
var score;

finishText.textContent = timeleft;
// Timer that will send you to the input page if it reaches 0
function decrement() {
    timeleft--;
    finishText.textContent = timeleft;
    score = timeleft;

        console.log("score is: ", score);
        if (questionLength === 0 || timeleft <= 0) {
            localStorage.setItem('timer', timeleft)
            console.log("quiz end" + timeleft);
            window.location.href = 'input.html'
            clearInterval(downloadTimer);
        } 
}

;
if (window.location.href.indexOf("quiz") > -1) {
    var downloadTimer = setInterval(decrement, 1000);   
}