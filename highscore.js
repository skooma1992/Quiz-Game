// Variables that stores scores and button clear
var scoreItems = document.querySelector('#score-list')
var buttonClear = document.querySelector('#clear-btn');
var returnClick = document.querySelector('#back-btn');
var storedScores = JSON.parse(localStorage.getItem("scores"));

//Calls renderScores function
renderScores();

//Clears text in the score list when hitting clear button and removes values from local storage
buttonClear.addEventListener("click", function () {
    localStorage.clear();
    scoreItems.style.visibility="hidden";
})
// Relocates back to intro page
returnClick.addEventListener('click', function () {
    window.location.href = 'index.html';
})

//Renders scores of values and assigns a new list element for each one
// it then appends from the previous submitted score
function renderScores() {
    console.log(storedScores);
    if (storedScores.length === null) {
        return;
    }
    else {
        for (i = 0; i < storedScores.length; i++) {
            var scoreItemValue = storedScores[i];
            var scoreItem = document.createElement('li');
            scoreItem.textContent = scoreItemValue;
            scoreItems.append(scoreItem);
        }
    }
}