var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];

window.onload = function () {
    var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(computerLetter);
    console.log(computerGuess[0]);
}

document.onkeyup = function (event) {
    var userGuess = event.key;
    lettersGuessed.push(userGuess);
    console.log(computerGuess[0]);

    if ((userGuess === computerGuess[0]) && (guessesLeft > 0)) {
        wins++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(computerLetter);
        console.log(computerGuess[0]);

    }

    else if ((userGuess !== computerGuess[0]) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft - 1;
    }

    else {
        losses++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(computerLetter);
        console.log(computerGuess[0]);
    }

    var html =
        "<p>Wins: " + wins + "</p>" +
        "<br/>" +
        "<p>Losses: " + losses + "</p>" +
        "<br/>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<br/>" +
        "<p>Your guesses so far: " + lettersGuessed + "</p>";

    document.querySelector('#game').innerHTML = html;
}