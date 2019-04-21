    var computerchoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0;
    var losses = 0;
    var guessesleft = 9;  
    
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var userguessText = document.getElementById("userguess-text");
    var computerGuessText = document.getElementById("computerguess-text");
    var guessesleftText = document.getElementById("guessesleft-text");


    
    document.onkeydown = function(event) {


        var userguess = event.key;
        
        var computerguess = computerchoice[Math.floor(Math.random() * computerchoice.length)];

        // if guessesleft = 0, end the game, add to losses, restart with new computer choice
        if (userguess === computerguess) {
            wins ++
        }
        //losses should increase with each game lost, not each wrong letter guessed
        else if (userguess !== computerchoice) {
            guessesleft --
        };

        if (guessesleft <= 0) {
            losses ++; guessesleft = 9;
        };

        userguessText.textContent += userguess + ", ";
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesleftText.textContent = "Number of Guesses Left: " + guessesleft;
    };
