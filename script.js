const starBtn = document.querySelector("#start-button");
const questiondiv = document.querySelector(".questiondiv");
const answers = document.querySelector(".answersdiv");
const scoreEl = document.querySelector(".scoreDisplay")
const timerDisplay = document.querySelector(".timerDisplay")
const hideFunc = document.querySelector(".hide");
const endGame = document.querySelector(".record-score");
var score = 0;
var initials;
var scoreboard = [];
var currentQ = 0;
var secondsLeft = 60;
// const 


//questions
const questions = [{
    title: "1????",
    choices: ["ans1", "ans2", "ans3"],
    answer: "1"
}, {
    title: "2????",
    choices: ["ans1", "ans2", "ans3"],
    answer: "2"
}, {
    title: "3????",
    choices: ["ans1", "ans2", "ans3"],
    answer: "3"
}, {
    title: "4????",
    choices: ["ans1", "ans2", "ans3"],
    answer: "1"
}, {
    title: "5????",
    choices: ["ans1", "ans2", "ans3"],
    answer: "2"
}];


starBtn.addEventListener("click", function () {
    timer();
    getQ();

    if ("clicked" === true) {
        hide
    }


});


function endQuiz() {
    questions
    // show user entry/score
}

// define time, seconds left
// code for timer
function timer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerDisplay.textContent = secondsLeft;

        if (secondsLeft === 0) {
            alert("GAME OVER");
            clearInterval(timerInterval);


        }

    }, 1000);
}

// function stopTimer() {
//     clearInterval(timer)
// }

// questions[currentQ]
function getQ() {
    answers.removeChild
    for (i = 0; i < questions.length; i++) {
        questions.push[i];
    }
    // inner html, delete question/mult choice
    var thisCQ = questions[currentQ]
    questiondiv.innerHTML = thisCQ.title;
    for (i = 0; i < thisCQ.choices.length; i++) {
        var button = document.createElement("button");
        button.innerHTML = thisCQ.choices[i]
        answers.appendChild(button);
        // eventlistn recording btn clik for ans
    }
    currentQ++
    // potentail place for endQuiz
}
// check ans function/reveal score
// event target/ if statement to ver if it's right or wrong

// local storage/ act 20s