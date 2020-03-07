// variables that store values from initials and scores
var initials = document.querySelector('input[type="text"]');
var submitBtn = document.querySelector('button[type="submit"]');
var scoreEl = document.querySelector('#your-score')
var scoreList = JSON.parse(localStorage.getItem('scores')) || [];
var finalScore = "";


//If else function that will display "Youve run out of time" if timer hits 0 and will show you your score
//If quiz is finished with time remaining it'll display "Well done!" and show you your score
function showScore() {
    score = localStorage.getItem('timer');
    console.log("score inside: ", score);
    if (parseInt(score) <= 0) {
        completeEl.textContent = "You've run out of time!"
        completeEl.setAttribute("text-align", "center");
        scoreEl.textContent = "Your score is: " + score +".";
        console.log(score);
    }
    else {
        completeEl.textContent = "Well done!"
        scoreEl.textContent = "Your score is: " + score +".";
        console.log(score);
    }
}
//console logging the scores
console.log("Final score " + score);


// Submits and stores the score value 
// brings you to the highscores.html page
submitBtn.addEventListener('click', function (event){
    console.log("submit score:"+ score);
    finalScore = initials.value + "-" + score;
    console.log("complete score:"+ finalScore);
    scoreList.push(finalScore);
    console.log(JSON.stringify(scoreList))
    localStorage.setItem('scores', JSON.stringify(scoreList));
    window.location.href = 'highscores.html';
});
 // calls function
showScore();