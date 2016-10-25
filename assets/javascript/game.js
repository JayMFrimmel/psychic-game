//set up list of options for the computer to pick
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//create an array that will hold the player's guessed letters
var lettersGuessed = [];

// this variable is assigned the random letter picked
var letterToGuess = null;

//these are the starting values of the countdown
var totalGuesses = 9;
var guessesLeft = 9;

//counter for wins and losses
var wins = 0;
var losses = 0;

//three functions to updateGuesses, updateGuessesLeft, updateGuessesSoFar
var updateGuessesLeft = function(){
	//now grab the HTML element and set it equal to the guesses left (guessesLeft will be displayed in HTML)
	document.querySelector('#guessesLeft').innerHTML = guessesLeft;
};

var updateLetterToGuess = function(){
	//here we get a random letterToGuess and assign it based on a random generator
	this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
};

var updateGuessesSoFar = function(){
	//take the guesses the player has tried and display them as letters separated by commas
	document.querySelector('#updateGuessesSoFar').innerHTML = guessedLetters.join(', ');
};

//function called when everything is reset
var reset = function(){
	totalGuesses = 9;
	guessesLeft = 9
	guessedLetters = [];
	updateLetterToGuess();
	updateGuessesLeft();
	updateGuessesSoFar();
}

updateLetterToGuess(); execute on page load
updateGuessesLeft();

//function to capture keyboard clicks
document.onkeyup = function(event) {
	//reduce guesses by one
	guessesLeft--;

	//lower case the letter
	var letter = String.fromCharCode(event.keyCode).toLowerCase();

	//then add the guess to the guessedLetters array
	guessedLetters.push(letter);

	//then run the update functions
	updateGuessesLeft();
	updateGuessesSoFar();

	//if guesses ar remaining..
	if (guessesLeft > 0){

		//check to se if there is a match
		if (letter == letterToGuess){

			//if there is a match then the player wins and the HTML will update the score
			wins++;
			document.querySelector('#wins').innerHTML = wins;

			//reset the game
			reset();
		}
		// if no more guesses
			}else if(guessesLeft == 0){

				//then player's loss and the loss is updated
				losses++;
				document.querySelector('#losses').innerHTML = losses;
				//then call the reset
				reset(); 
			}	
	}; 


