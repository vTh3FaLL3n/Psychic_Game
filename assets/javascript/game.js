var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"
];


var wins = 0;
var losses = 0;
var guessesLeft = 5;
var userGuesses = [];
var computerGuess = null;
var userGuess;

function guess() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(guess);
};
    guess();

function choice(userGuess) {

    userGuess = event.key;
    return userGuess;
};

function reset(gameScore) {
    userGuesses = [];
    guessesLeft = 5;
};

document.onkeyup = function (event) {
     var userGuess = choice();
    userGuesses.push(userGuess);
     if (userGuess === computerGuess) {
        wins++;
        reset(gameScore);
    } else if (guessesLeft < 1) {
        losses++;
        reset(gameScore);
    } else {
        guessesLeft--;}

   

    var gameScore =

        "<p> Guess what Letter I am thinking of? : </p>" +
        "<p> Wins : " + wins + "</p>" +
        "<p> Losses : " + losses + "</p>" +
        "<p> Guesses Left : " + guessesLeft + "</p>" +
        "<p> Your Guesses So Far : " + userGuesses + "</p>";


    document.getElementById("game").innerHTML = gameScore;


};