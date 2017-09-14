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
console.log("computer word " + wordChoice);

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
            elementGuessedLetters[0].innerHTML = guessedLetters; //displays letters guessed so far
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

                console.log("match found? " + matchFound);
    		}

    		// Updates the HTML
    		console.log(guessedWord);
            elementWord[0].innerHTML = guessedWord;



            console.log("guesses left" + guessesRemaining);

 
           if (guessesRemaining == 0) {
            console.log("out of guesses");
            alert("Out of guesses");
           }
    	} 

 }

