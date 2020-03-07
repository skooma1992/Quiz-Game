// variables for timer functionality 
var finishText = document.querySelector('.navbar-text');
var completeEl = document.querySelector('#complete');
var timeleft = (60);
var score;

finishText.textContent = timeleft;
// Decrement for the timer
// also sends you to input page if timer reaches 0 OR youve run out of questions
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

 
if (window.location.href.indexOf("quiz") > -1) {
    var downloadTimer = setInterval(decrement, 1000);   
}