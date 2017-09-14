var wordBank = [
	"count", 
	"bank",
	"teller",
	"vault",
	"money",
	"coins",
	"interest",
	"loan"
];
var wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(wordChoice);

var elementWord = document.getElementsByClassName("hangman-word");
var elementGuessesRemaining = document.getElementsByClassName("hangman-guesses-remaining");
var elementGuessedLetters = document.getElementsByClassName("hangman-guessed-letters");

var wordLength = wordChoice.length;
var guessedWord = [];
for (var i = 0; i < wordLength; i++) {
	guessedWord.push("_");
}   

var guessesRemaining = 15;
var guessedLetters = [];


elementWord[0].innerHTML = guessedWord;
elementGuessesRemaining[0].innerHTML = guessesRemaining;

document.onkeyup = function(event) {
    	//Gets key pressed by user
    	console.log(event.key);
    	if (event.which >= 65 && event.which <= 90) {  //letters are in a keycode and makes sure only a letter is pressed. 
    		var keyPressed = event.key.toLowerCase();
    		console.log("good!");

    		if (guessedLetters.indexOf(keyPressed) !== -1) {  //means it found the letter. If letter has already been guessed it does nothing
    			return;
    		}


    		guessedLetters.push(keyPressed);
    		console.log(guessedLetters);
    		guessesRemaining--;
            elementGuessesRemaining[0].innerHTML = guessesRemaining; //display # of guesses to HTML
    		console.log(guessesRemaining);

    		var matchFound = false;

    		for (var i = 0; i < wordChoice.length; i++){
    			wordChoice.charAt(i);
    			if (wordChoice.charAt(i) == keyPressed) {
    				guessedWord[i] = keyPressed;
    				matchFound = true;
    			}
    		}

    		// Updates the HTML
    		console.log(guessedWord);
    		console.log(guessesRemaining);
    		console.log(guessedLetters);
    		elementWord.innerHTML = guessedWord;
			elementGuessesRemaining.innerHTML = guessesRemaining;
			elementGuessedLetters.innerHTML = guessedLetters;

    	} 

 }

