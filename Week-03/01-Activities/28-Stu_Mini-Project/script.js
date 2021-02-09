var userInput;
var computerInput;
var chooseInteger;
var winRate = 0;
var loseRate = 0;
var drawRate = 0;
var totalGames = 0;
var keepPlaying = true;
var rps = ['R', 'P', 'S'];


window.alert("Please make a seleciton: R = Rock, P = Paper, S = Scissors")

while (keepPlaying === true) {

    userInput = prompt('Please make your selection: ');
    userInput = userInput.toUpperCase();

    chooseInteger = Math.floor(Math.random() * 3);
    computerInput = rps[chooseInteger];

    // win
    if (userInput === 'R' && computerInput === 'S') {
        winRate++;
        totalGames++;
    } else if (userInput === 'S' && computerInput === 'P') {
        winRate++;
        totalGames++;
    } else if (userInput === 'P' && computerInput === 'R') {
        winRate++;
        totalGames++;
    }

    // lose
    if (userInput === 'S' && computerInput === 'R') {
        loseRate++;
        totalGames++;
    } else if (userInput === 'P' && computerInput === 'S') {
        loseRate++;
        totalGames++;
    } else if (userInput === 'R' && computerInput === 'P') {
        loseRate++;
        totalGames++;
    }

    // draw
    if (userInput === computerInput) {
        drawRate++;
        totalGames++;
    } 

    //scoreboard
    window.alert()

    keepPlaying = window.confirm("Keep Playing?");
}