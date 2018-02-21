

var userChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var userWins = 0;
var guessesLeft = 12;

var tries = "<h1> There are" + guessesLeft + "</h1>";

document.querySelector("#tries").innerHTML = guessesLeft;

var words = "stoopid";


for (var i = 0; i < words.length; i++) {
    var blankBox = document.createElement("div");
    blankBox.classList.add("blanks");
    blankBox.setAttribute("data-blankbox", words[i]);
    document.getElementById("empty").appendChild(blankBox);
};


// need to create a condition that only continues if the userGuess = userChoices
  

document.onkeyup = function(event) {
    var userGuess = event.key;


// ---------trying to create a function that will loop through each letter of var words and check it against the user guess. Right now what I have is correct for just the first letter of the word.

    //   function correctWord(words) {

//   for (var j = 0; j < words.length; j++) {
//       correctWord(words[j]);
//   }

//   }
//   correctWord(words);



        if (userGuess === (words.charAt(0))) {

            var correctGuess = document.createElement("h3");
            var guessText = document.createTextNode(words.charAt(0));
            correctGuess.classList.add("correct");
            correctGuess.appendChild(guessText);
            document.getElementById("guessed").appendChild(correctGuess);
        }
        else if (userGuess !== (words.charAt(0))) {
            wrongGuess = document.createTextNode(userGuess);
            document.getElementById("wrongletters").appendChild(wrongGuess); {
            }
        }
    
    };


    // if the userGuess is wrong var guessesLeft is decreased by 1 and when the guessesLeft = 0 the game ends. 
    // once all of the correct guesses = the length of var words the wins increases by 1






   