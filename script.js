const starBtn = document.querySelector("#start-button");
const questiondiv = document.querySelector(".questiondiv");
const answers = document.querySelector(".answersdiv");
const scoreEl = document.querySelector(".scoreDisplay")
const timerDisplay = document.querySelector(".timerDisplay")
const endGame = document.querySelector(".record-score");
const endBtn = document.querySelector(".recordBtn")
var score = 0;
var initials;
var scoreboard = [];
var currentQ = 0;
var secondsLeft = 60;
var thisCQ;

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
    answer: "0"
}, {
    title: "4????",
    choices: ["ans1", "ans2", "ans3"],
    answer: "1"
}, {
    title: "5????",
    choices: ["ans1", "ans2", "ans3"],
    answer: "2"
}];


answers.addEventListener("click", getQ)
questiondiv.style.display = "none";
answers.style.display = "none";
endGame.style.display = "none";



starBtn.addEventListener("click", function () {
    starBtn.style.display = "none";
    timer();
    getQ();

});

// code for timer
function timer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerDisplay.textContent = secondsLeft;

        if (secondsLeft === 0) {
            alert("GAME OVER");
            clearInterval(timerInterval);
            answers.style.display = "none";
            questiondiv.style.display = "none";

            endGame.style.display = "block";
        }

    }, 1000);
}

// }

// questions[currentQ]
function getQ() {
    questiondiv.style.display = "block";
    answers.style.display = "block";
    answers.removeChild

    // }

    // inner html, reveal nxt question/mult choice
    thisCQ = questions[currentQ]
    questiondiv.innerHTML = "";
    questiondiv.textContent = thisCQ.title;
    answers.innerHTML = "";
    for (i = 0; i < thisCQ.choices.length; i++) {
        var button = document.createElement("button");
        button.innerHTML = thisCQ.choices[i]
        answers.appendChild(button);
        // eventlistn recording btn clik for ans
        button.addEventListener("click", function () {
            // check ans func

            var checkScore = event.target.textContent
            if (checkScore == questions[currentQ].choices[questions[currentQ].answer]) {

            } else {
                console.log(555);
                // consequence for failing to get the right ans
            }
            // Here I'll be calling for a function that stops outputting questions and answers, for the end of the game.
            currentQ++
        })
    }
}



// show user entry/score
// this func doesn't work yet...>>>>
function gameOver() {

    endGame.value.trim();

    if (user === "") {
        alert("Name cannot be blank!")
    }
    // 
    console.log(namezz);
    console.log(endBtn, "dddd");
}
// check ans function/reveal score
// event target/ if statement to ver if it's right or wrong

// local storage/ act 20s