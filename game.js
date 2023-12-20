const player0El = document.querySelector('.playerBoard_0');
const player1El = document.querySelector('.playerBoard_1');

const score0El = document.getElementById('score0');
const score1El = document.getElementById('score1');

const current0El = document.getElementById ('currentscore0');
const current1El = document.getElementById('currentscore1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

let scores, currentScore, activePlayer, playing;

//switch the player
 const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`currentscore${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    player0El.classList.toggle('playerActive');
    player1El.classList.toggle('playerActive');  
 };

 //btn roll event
 btnRoll.addEventListener('click', function () { 
    if (playing) {
    diceEl.classList.remove('hidden');

    // generate the random number
    const dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);

    //display random dice img
    diceEl.src = `dice-${dice}.png`;

    //check for dice number 1
    if (dice !== 1) {
    //display the score
    currentScore += dice;
    document.getElementById(`currentscore${activePlayer}`).textContent = currentScore;
    } else {
    switchPlayer();
    }
 } 
});

//btn hold event
btnHold.addEventListener('click', function () {
    if (playing) {
        //add the current score to the players score
        scores[activePlayer] += currentScore;

        //display the score to the current players scores
        document.getElementById(`score${activePlayer}`).textContent = 
        scores[activePlayer]; 

        if (scores[activePlayer] >= 20) {
            playing = false;
            diceEl.classList.add('hidden');

            document.getElementById(`score${activePlayer}`).textContent ='Win!';
            switchPlayer();
            document.getElementById(`score${activePlayer}`).textContent ='Lost!';

            document.querySelector('.playerBoard_' + activePlayer).classList.remove('playerActive');
            active = activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
            document.querySelector('.playerBoard_' + active).classList.add('playerWinner');
        } else {
            switchPlayer();
        }
    }
});  

// defining a function to initialize the whole game 
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
        
  score0El.textContent = 0;
  score1El.textContent = 0;      
  current0El.textContent = 0;
  current1El.textContent = 0;
        
  diceEl.classList.add('hidden');
  player0El.classList.remove('playerWinner');
  player1El.classList.remove('playerWinner');
  player0El.classList.add('playerActive');
  player1El.classList.remove('playerActive');
};

  init();

btnNew.addEventListener('click', init); 