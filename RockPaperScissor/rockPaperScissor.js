const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0,
  draw: 0
};
let gameCount = 0

// Play game
function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

//In function play, setting the restart button style as inline block
//storing player choice and computer choice in getWinner function

// Get computers choice
function getComputerChoice() {
    //rand variable is used to generate computer AI result
  const rand = Math.random();
  if (rand < 0.34) {
    return 'rock';
  } else if (rand <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

//math.random function is used to randomly select rock, paper or scissors
//math.random function chooses from 0 to 1 exclusive 1 and inclusive 0
//If Statement: In If condition if rand value is less than 0.34, then rock is selected
//Else If: In else if condition paper is choosen when rand vale is less than or equal to 0.67 
//Else: In Else condition scissor is selected 


// Get game winner
function getWinner(p, c) {
    /*We write all possible scenarios of result*/
  if (p === c) {  //when player and computer choose either rock,paper or scisccor it's a draw game 
    return 'draw';
  } else if (p === 'rock') {
    if (c === 'paper') {
      return 'computer';  
    } else {
      return 'player';
    }
  } else if (p === 'paper') {
    if (c === 'scissors') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'scissors') {
    if (c === 'rock') {
      return 'computer';
    } else {
      return 'player';
    }
  }
}
/*In first else if statement: if player chooses rock then computer can choose between two choices either paper or scissor, 
  if com chooses paper then player loses, if computer chooses scissor then player wins
  
  In second else if statement: if player chooses paper the computer can choose between two chocies either rock or scissor,
  if computer chooses rock then player wins, if computer chooses scissor then player loses

   In third else if statement: if player chooses scissor the computer can choose between two chocies either rock or paper,
  if computer chooses rock then player loses, if computer chooses paper then player wins
  */


function showWinner(winner, computerChoice) {
//show winner function is used to display the result of the game
  if (winner === 'player') {
    // Inc player score
    scoreboard.player++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-win">You Win</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
  } else if (winner === 'computer') {
    // Inc computer score
    scoreboard.computer++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-lose">You Lose</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
  } else {
      scoreboard.draw++;
    result.innerHTML = `
      <h1>It's A Draw</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
  }

 


  /*In if statement: If condtion checks if player is winner and displays that YOU WIN and display the icon computer choose 
  
  In else if statement: Else if contion checks if computer is winner and displays YOU LOSE and display the icon computer choose

  In else statement: It displays IT"S A DRAW and displays the icon computer choose 
  */ 

  // Show score
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    <p>Draw: ${scoreboard.draw}</p>
    `;

  modal.style.display = 'block';
}

// Restart game
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  scoreboard.draw = 0;
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    <p>Draw: 0</p>
  `;
}

// Clear modal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
choices.forEach(choice => choice.addEventListener('click',function(){
    gameCount += 1
    document.getElementById('noofgames').innerHTML = ` <p id="noofgames" style="background-color: black; color: white; text-align: center; margin: auto; width: 200px;">Number of games played: ${gameCount}</p>` 
}))
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);

