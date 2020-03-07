// Quiz questions stored in an object.
var questionsObj = [
    {
        title: "Comonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if/else statement is enclosed within _________.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store _________.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within _________ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    }
];





var questionEl = document.querySelector('#question-title');
var answers = document.querySelector('#answer-btn');
var grade = document.querySelector('#question-grade');
var questionIndex = 0;
var questionLength = questionsObj.length;
var scoreList = [];
//
// Displays questions 
function renderQuestions() {
    questionEl.textContent = questionsObj[questionIndex].title;
    console.log(questionEl.textContent);
    for (i = 0; i < questionsObj[questionIndex].choices.length; i++) {
       //Creates a new div and button for each question from the object.
        var choiceBtn = document.createElement('button');
        var choiceDiv = document.createElement('div');
        choiceBtn.textContent = questionsObj[questionIndex].choices[i];
        // Assigns bootstrap css to buttons
        choiceBtn.setAttribute('class', 'btn btn-dark');
        choiceBtn.setAttribute('data-index', i)
        choiceDiv.appendChild(choiceBtn);
        answers.appendChild(choiceDiv);
    }
}

// clears questions/answers
function removeButton() {
    var child = answers.lastElementChild;
    while (child) {
        answers.removeChild(child);
        child = answers.lastElementChild;
    }
}
// Function determining if the button clicked is the correct answer or not
// If the answer is incorrect it will subtract ten from the timer.
// if it is correct it will display "Correct!"
answers.addEventListener('click', function (event) {
    var element = event.target;
    if (element.matches('button') === true) {
        console.log(element);
        var answer = questionsObj[questionIndex].answer;
        if (element.textContent !== answer) {
            timeleft = timeleft - 10;
            grade.textContent = "Incorrect";
            questionIndex++;
            questionLength--;
            if (questionLength > 0){
                removeButton();
                renderQuestions();
            }
        }
        else {
            grade.textContent = "Correct!";
            questionIndex++;
            questionLength--;
            if (questionLength > 0){
                removeButton();
                renderQuestions();
            }
        }
    }
});

//calls function
renderQuestions();



