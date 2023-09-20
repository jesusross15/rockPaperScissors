
// Start with a function that randomly gets the computer choice
// Choices are Rock Paper or Scissors
// Choose Rock Paper or Scissors at random
function computerPlay() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

// Function that plays a single round of RPS
// Function has 2 parameters playerSelection and computerSelection
// If (here we have the different possible outcomes of the game)
// Keep in mind that rock beats scissors, paper beats rock, and scissors beats paper 
// Returns string that declares winner of the round
// When a player wins a round they gain a point
// You win! 
// You lose! 

function playRound(playerSelection, computerSelection) {
    let playerPoint = 0

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock"))
    {
        playerPoint = 1
        console.log("You win! " + playerSelection + " beats " + computerSelection)
    }
    else {
        console.log("You lose! " + computerSelection + " beats " + playerSelection)
    }

    return playerPoint
}


// Function that takes the function above to play 5 rounds of Rock Paper Scissors
// We'll first start off with the scores of the player and computer. In the beginning they both start at 0

// I've had some experience with while loops so I used one here that loops around 5 times
// While the rounds played is less than the rounds total
// Using prompt function so we can get a response from the user to know what they want to choose
// Remembering to make sure that the input from the playerSelection is case INsensitive
// Also remembering that if they use anything else that's not rock paper or scissors the 
// computer will continue to prompt them until they do use one of those 3 choices

// If the player selection and computer selection are the same let them know it's a tie
// If round result includes the word lose increase the computer score by one

// Best out of 5
// If the player score is greater than the rounds played divided by 2 the player has won
// If player score is equals the amount of rounds played divided by 2 the player has tied
// Else the player has lost and the computer has won

function game(roundsTotal = 5) {
    let roundsPlayed = 0
    let playerScore = 0

    while (roundsPlayed < roundsTotal) {
        let playerSelection = prompt("Let's play Rock Paper Scissors! Enter your choice (Rock/Paper/Scissors):")
        
        playerSelection = playerSelection.toLowerCase();
        
        if ((playerSelection != "rock") &&
            (playerSelection != "raper") &&
            (playerSelection != "scissors"))
        { continue }

        let computerSelection = computerPlay()
        if (playerSelection == computerSelection) {
            console.log("It's a tie. You both chose " + playerSelection)
            continue
        }

        playerScore += playRound(playerSelection, computerSelection)
        roundsPlayed++
    }

    if (playerScore > (roundsPlayed / 2)) {
        console.log("You won " + playerScore + " out of " + roundsPlayed + " rounds. You win!")
    }
    else if (playerScore == (roundsPlayed / 2)) {
        console.log("You won " + playerScore + " out of " + roundsPlayed + " rounds. You tied.")
    }
    else {
        console.log("You won " + playerScore + " out of " + roundsPlayed + " rounds. You lost!")
    }
}

// run game
// game()