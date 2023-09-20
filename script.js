// Start with a function that randomly gets computer choices
    // Choices are Rock Paper or Scissors
    // Choose Rock Paper or Scissors at random
    // Return the computer's choice which we'll then compare to the player's input choice later on
    function getComputerChoice() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Function that plays a single round of RPS
    // Function has 2 parameters playerSelection and computerSelection
    // If both player choice and computer choice are the same return "It's a tie!"
    // Else here are the different possible outcomes of the game
    // Keep in mind that rock beats scissors, paper beats rock, and scissors beats paper 
    // Returns string (use of template literal) that declares winner of the round
    // You win! 
    // You lose! 

    function playRound(playerSelection, computerSelection) {
        // Convert both selections to lowercase to ensure case-insensitive comparison
        // const playerChoice = playerSelection.toLowerCase();
        // const computerChoice = computerSelection.toLowerCase();
    
        if (playerSelection === computerSelection) {
            return "It's a tie!";
    
        } else if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}.`;

        } else {
            return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`;
        }
    }
    // Call function to check if the result is what we want (it is)
    // const playerSelection = "rock";
    // const computerSelection = getComputerChoice();
    // console.log(playRound(playerSelection, computerSelection));

    // Function that takes the function above to play 5 rounds of Rock Paper Scissors
    // We'll first start off with the scores of the player and computer. In the beginning they both start at 0

    // I've had some experience with for loops so I used one here that loops around 5 times
    // Using prompt function so we can get a response from the user to know what they want to choose
    // Print out the result of that round

    // If round result includes the word win increase the player score by one
    // If round result includes the word lose increase the computer score by one

    // If the player score is greater than the computer score at the end of the 5 rounds then print out "You win the game!"
    // If the computer score is greater than the player score at the end of the 5 rounds then print out "You lose the game!"
    function game() {
        let playerScore = 0;
        let computerScore = 0;
      
        for (let i = 0; i < 5; i++) {
          const playerChoice = prompt("Let's play Rock Paper Scissors! Enter your choice (Rock/Paper/Scissors):");
          const computerChoice = getComputerChoice();
          const roundResult = playRound(playerChoice, computerChoice);
          console.log(roundResult);
      
          if (roundResult.includes("Win")) {
            playerScore++;
          } else if (roundResult.includes("Lose")) {
            computerScore++;
          }
        }

        if (playerScore > computerScore) {
          console.log("You win the game!");
        } else if (computerScore > playerScore) {
          console.log("You lose the game.");
        } else {
          console.log("It's a tie! The game is a draw.");
        }
      }

    // Start the game
    // game();