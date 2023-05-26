
  const resultDiv = document.getElementById('result')
  const handChoice = document.getElementById('hands')


// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **

function getComputerChoice() {

  const buttons = ['Rock', 'Scissors','Paper']
  let randomChoice = Math.floor(Math.random()*3)
  return buttons[randomChoice]
}


// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  // All situations where human draws, set `score` to 0
  let score ;
  if (playerChoice == computerChoice ){
   score=0
  
  // All situations where human wins, set `score` to 1
   }else if (playerChoice == 'Rock' && computerChoice == 'Scissors'){
    score = 1
   } else if ( playerChoice == 'Paper' && computerChoice == 'Rock'){
    score = 1
   } else if (playerChoice == 'Scissors' && computerChoice == 'Paper'){
    score = 1
   }
  // Otherwise human loses (set score to -1)
  else {
    score = -1
   }

  
  return score
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {

 
  handChoice.innerText = ` 👱- ${playerChoice} v/s 🤖- ${computerChoice}`
  if(score == 1){
    resultDiv.innerText = "You Win!"
  }else if (score == 0){
    resultDiv.innerText = "Its a tie"
  } else if (score== -1){
    resultDiv.innerText = "You Lose!"
  }
  return resultDiv
  

 
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {

let computerChoice = getComputerChoice()
let result = getResult(playerChoice,computerChoice)
showResult(result,playerChoice,computerChoice)


  
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  
const rpsButtons = document.querySelectorAll('.rpsButton')
 
 rpsButtons.forEach(rpsButton => rpsButton.onclick = () => onClickRPS(rpsButton.value))

  // Add a click listener to the end game button that runs the endGame() function on click

  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
  
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
 
  resultDiv.innerText = " "
  handChoice.innerText = " "
}

playGame()