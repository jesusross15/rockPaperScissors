let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('button')

// Start with a function that randomly gets the computer choice
// Choices are Rock Paper or Scissors
// Choose Rock Paper or Scissors at random
function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"]
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

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock"))
    {
        playerScore += 1
        result = ('You win this round! ' + playerSelection + ' beats ' + computerSelection + '!'
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>CONGRATULATIONS! You won the game! Reload the page to play again.'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie! You and the computer both chose ' + playerSelection + '.'
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection + '!'
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>You LOST! HAHAHAHA! Reload the page to play again, LOSER!'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.id)
    })
})

