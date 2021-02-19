// need variables for:

// user input

// solved word
// win message
// lose message
var timer; 
var totalTime = 20;
var startGame = document.querySelector(".startGame");
var timerShow = document.querySelector(".timer");
var wordShow = document.querySelector("#word");
var wordDisplay = document.querySelector("#word");
var wordChosen;
var blankWord = [];
console.log(startGame);

// timer (using setInterval)
function setTime() {
    timer = setInterval(function () {
        totalTime--;
        timerShow.textContent = totalTime + " seconds left";

        if (totalTime === 0) {
            clearInterval(timer);
            // sendMesage();
        }
    }, 1000);
}

// select word and set word array to _
var wordList = ["JavaScript", "array", "object", "function", "method"];

function guessWord() {
    wordChosen = wordList[Math.floor(Math.random() * wordList.length)];
    blankWord = [];
    for (i = 0; i < wordChosen.length; i++) {
        blankWord[i] = "_";
    }
    blankWord = blankWord.join(" ");
    wordShow.textContent = blankWord;
}

// create loops to look through word an populate correct guesses


// track a user's guesses (key events, local storage)
wordDisplay.addEventListener("keydown", function(event) {
    event.preventDefault();
    var keyChosen = event.key;
    for (j = 0; j < wordChosen.length; j++) {
        if (keyChosen === wordChosen[j]) {
            blankword[j] = keyChosen;
            
        }
        document.getElementById("word").innerHTML = blankWord;
    }
    console.log(event);
})
// win/lose messages (window.alert)

// game initiates when button clicked (addEventListener)
startGame.addEventListener("click", setTime);

guessWord();