//words for computer to guess from
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

//varible that enables and diables onkeyup functionality
var gameActive = true;

//these are my scoreboard divs  
var elementWord = document.getElementsByClassName("hangman-word");
var elementGuessesRemaining = document.getElementsByClassName("hangman-guesses-remaining");
var elementGuessedLetters = document.getElementsByClassName("hangman-guessed-letters");

//these are my notification divs
var elementNotifications = document.getElementsByClassName("notification");
var elementNotificationAlert = document.getElementsByClassName("notification-alert");
var elementNotificationWin = document.getElementsByClassName("notification-win");
var elementNotificationLose = document.getElementsByClassName("notification-lose"); 

//notificaiton helper functions
function notification(message, type) {
    clearNotifications();
    type[0].innerHTML = message;
}

function clearNotifications() {
    for (i=0; i < elementNotifications.length; i++){
        elementNotifications[i].innerHTML = "";
    }
}

//initializes the game. the core init function
function initGame() {
    wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];  //chooses a randome word from wordBank
    console.log("computer word " + wordChoice);
    wordLength = wordChoice.length;
    guessedWord = [];
    guessedLetters = [];

    for (var i = 0; i < wordLength; i++) {
        guessedWord.push("_");
    }   

    guessesRemaining = 15;
    guessedLetters = [];
    correctGuessedLetters = 0;

    //updates HTML
    console.log("guessed word b4: " + guessedWord);
    elementWord[0].innerHTML = guessedWord;
    elementGuessesRemaining[0].innerHTML = guessesRemaining;
    elementGuessedLetters[0].innerHTML = guessedLetters;
}

//first init
initGame();

//game action divs 
var actionRestartGame=document.getElementsByClassName("action-restart");

//attach click listener functionality (reset variables and activate game) to the restart button 
actionRestartGame[0].addEventListener("click", function() {
    initGame();
    notification("Let's Play Again", elementNotificationWin);
    gameActive = true;
});


//handle hangman guesses
document.onkeyup = function(event) {
    if (gameActive) {
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


            //compares letters and swaps out _ if the letter matches
            

            for (var i = 0; i < wordChoice.length; i++){
                wordChoice.charAt(i);
                if (wordChoice.charAt(i) == keyPressed) {
                    guessedWord[i] = keyPressed;
                    correctGuessedLetters++;
                    matchFound = true;
                }
            }

            if (matchFound && wordChoice.length == correctGuessedLetters) {
                notification("You Won", elementNotificationWin);
                gameActive = false;
            }

            //If they lose
            if (guessesRemaining == 0){
                notification("You Lost dude", elementNotificationLose);
                gameActive = false;
            }


                
              

                console.log("match found? " + matchFound);
                console.log("guessed word: " + guessedWord);
                console.log("word choice: " + wordChoice);


            // Updates the HTML
            // console.log("guessed word: " + guessedWord);
            elementWord[0].innerHTML = guessedWord;
            console.log("guessed word: " + guessedWord);


            console.log("guesses left" + guessesRemaining);
        } 
    }
 }

