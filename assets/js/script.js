let firstPlayerHealth = 100;
let secondPlayerHealth = 100;
const newGameBtn = document.querySelector('.main_buttons-new');
const instructionsBtn = document.querySelector('.main_buttons-instructions');
const submitButton = document.getElementById('submit');
const firstPlayerName = document.querySelector('.game_first-player--name');
const secondPlayerName = document.querySelector('.game_second-player--name');
const startGame = document.querySelector('.game_mid-start');
const attacks = ['slap', 'punch', 'sword', 'axe', 'mace', 'spell'];
const attackBtns = document.querySelectorAll('.attack-btn');
let scoreFirstPlayer = parseInt(document.querySelector('.score-fplayer').innerHTML);
let scoreSecondPlayer = parseInt(document.querySelector('.score-splayer').innerHTML);

// function to prevent default behaviour of the form
function submitForm(event){
    event.preventDefault();
    submitButton.addEventListener('click', function(){
        document.querySelector('.main_form').classList.add('hidden');
        document.querySelector('.games_section').classList.remove('hidden');
        document.querySelector('.footer').classList.add('hidden');
    })
    playersNames();
}

// replace players names with form inputs
function playersNames(){
    const firstPlayer = document.getElementById('fplayer').value;
    const secondPlayer = document.getElementById('splayer').value;
    const firstPlayerNameScoreBox = document.querySelector('.score-box-fplayer');
    const secondPlayerNameScoreBox= document.querySelector('.score-box-splayer');
    firstPlayerName.innerHTML = firstPlayer;
    secondPlayerName.innerHTML = secondPlayer;
    firstPlayerNameScoreBox.innerHTML = firstPlayer + ":";
    secondPlayerNameScoreBox.innerHTML = secondPlayer + ":";
}

// play rock paper scissors to decide who start first
function choseWhoStart(){
    const firstPlayerName = document.getElementById('fplayer').value;
    const secondPlayerName = document.getElementById('splayer').value;
    // array with options
    let options = ["rock", "paper", "scissors"];
    // create 1 random num beetwen 0 and 2 for each player
    let randomNumFirstPlayer = Math.floor(Math.random() * 3);
    let randomNumSecondPlayer = Math.floor(Math.random() * 3);
    // select a element from array with the assigned num
    let firstPlayerCoice = options[randomNumFirstPlayer];
    let secondPlayerChoice = options[randomNumSecondPlayer];
    // display choice image
    let playerOneImage = document.querySelector('.rps_game-fplayer');
    let playerTwoImage = document.querySelector('.rps_game-splayer');
    let whoStart = document.querySelector('.rps_game-winner');
    let firstPlayer;
    let secondPlayer;
    // decide who wins
    if(firstPlayerCoice === "rock" && secondPlayerChoice === "scissors"){
        playerOneImage.style.backgroundImage = "url(assets/images/rock.png)"
        playerTwoImage.style.backgroundImage = "url(assets/images/scissors.png)"
        firstPlayer = "win";
        secondPlayer = "lose";
    }else if(firstPlayerCoice === "scissors" && secondPlayerChoice === "paper"){
        playerOneImage.style.backgroundImage = "url(assets/images/scissors.png)"
        playerTwoImage.style.backgroundImage = "url(assets/images/paper.png)"
        firstPlayer = "win";
        secondPlayer = "lose";
    }else if(firstPlayerCoice === "paper" && secondPlayerChoice === "rock"){
        playerOneImage.style.backgroundImage = "url(assets/images/paper.png)"
        playerTwoImage.style.backgroundImage = "url(assets/images/rock.png)"
        firstPlayer = "win";
        secondPlayer = "lose";
    }else if(firstPlayerCoice === "scissors" && secondPlayerChoice === "rock"){
        playerOneImage.style.backgroundImage = "url(assets/images/scissors.png)"
        playerTwoImage.style.backgroundImage = "url(assets/images/rock.png)"
        firstPlayer = "lose";
        secondPlayer = "win";
    }else if(firstPlayerCoice === "paper" && secondPlayerChoice === "scissors"){
        playerOneImage.style.backgroundImage = "url(assets/images/paper.png)"
        playerTwoImage.style.backgroundImage = "url(assets/images/scissors.png)"
        firstPlayer = "lose";
        secondPlayer = "win";
    }else if(firstPlayerCoice === "rock" && secondPlayerChoice === "paper"){
        playerOneImage.style.backgroundImage = "url(assets/images/rock.png)"
        playerTwoImage.style.backgroundImage = "url(assets/images/paper.png)"
        firstPlayer = "lose";
        secondPlayer = "win";
    // reply the game if it`s a tie
    }else if(firstPlayerCoice === secondPlayerChoice){
        choseWhoStart();
    }
    // Change the winner name and display the winner attack button
    if(firstPlayer === 'win'){
        whoStart.innerHTML = firstPlayerName;
        document.querySelector('.game_first-player--buttons').classList.remove('hidden');
        playersAttackOptions();
    }else if (secondPlayer === 'win'){
        whoStart.innerHTML = secondPlayerName;
        document.querySelector('.game_second-player--buttons').classList.remove('hidden');
        playersAttackOptions();
    }
    document.querySelector('.rps_game').classList.remove('hidden');
    
} 

// players attack options
function playersAttackOptions (){
    let randomNum1 = Math.floor(Math.random() * 6);
    let randomNum2 = Math.floor(Math.random() * 6);
    if(document.querySelector('.game_first-player--buttons').classList.contains('hidden')){
        document.querySelector('.game_second-player1--attack').innerHTML = attacks[randomNum1];
        document.querySelector('.game_second-player2--attack').innerHTML = attacks[randomNum2];
        if(attacks[randomNum1] === attacks[randomNum2]){
            playersAttackOptions();
        }
    }else if(document.querySelector('.game_second-player--buttons').classList.contains('hidden')){
        document.querySelector('.game_first-player1--attack').innerHTML = attacks[randomNum1];
        document.querySelector('.game_first-player2--attack').innerHTML = attacks[randomNum2];
        if(attacks[randomNum1] === attacks[randomNum2]){
            playersAttackOptions();
        }
    }
}
/**
 * add event listener for attack buttons
 * add damage to each attack option
 * decrease health bar
 */
for(let i = 0; i < attackBtns.length; i++){
    attackBtns[i].addEventListener('click', function(){
        let damageDone;
        if(attackBtns[i].innerHTML === "slap"){
            damageDone = Math.floor(Math.random() * 5);
        }else if(attackBtns[i].innerHTML === "punch"){
            damageDone = Math.floor(Math.random() * 7 + 3);
        }else if(attackBtns[i].innerHTML === "sword"){
            damageDone = Math.floor(Math.random() * 10 + 5);
        }else if(attackBtns[i].innerHTML === "axe"){
            damageDone = Math.floor(Math.random() * 12 + 7);
        }else if(attackBtns[i].innerHTML === "mace"){
            damageDone = Math.floor(Math.random() * 15 + 10);
        }else if(attackBtns[i].innerHTML === "spell"){
            damageDone = Math.floor(Math.random() * 20 + 15);
        }
        document.querySelector('.rps_game').classList.add('hidden');
        document.querySelector('.game_mid-start').classList.add('hidden');
        document.querySelector('.game_mid-replay').classList.add('hidden');
        document.getElementById('display-damage').innerHTML = damageDone;
        // decrease health bar
        function health(firstPlayer,secondPlayer){
            firstPlayer = firstPlayerHealth;
            secondPlayer = secondPlayerHealth;
            if(!document.querySelector('.game_first-player--buttons').classList.contains('hidden')){
                let newHealth = secondPlayer - damageDone;
                secondPlayerHealth = newHealth;
                let healthBar = (newHealth / 100) * newHealth;
                document.getElementById('player-two-health').style.width = healthBar + '%';
            }else if(!document.querySelector('.game_second-player--buttons').classList.contains('hidden')){
                let newHealth = firstPlayer - damageDone;
                firstPlayerHealth = newHealth;
                let healthBar = (newHealth / 100) * newHealth;
                document.getElementById('player-one-health').style.width = healthBar + '%';
            }
        // increase score
            if(firstPlayerHealth <= 0){
                scoreSecondPlayer = scoreSecondPlayer + 1;
                document.querySelector('.score-splayer').innerHTML = scoreSecondPlayer;
                document.querySelector('.game_mid-replay').classList.remove('hidden');
                document.querySelector('.game_first-player--buttons').classList.add('hidden');
                document.querySelector('.game_second-player--buttons').classList.add('hidden');
                document.getElementById('player-one-health').style.width = 0;
            }else if(secondPlayerHealth <= 0){
                scoreFirstPlayer = scoreFirstPlayer + 1;
                document.querySelector('.score-fplayer').innerHTML = scoreFirstPlayer;
                document.querySelector('.game_mid-replay').classList.remove('hidden');
                document.querySelector('.game_first-player--buttons').classList.add('hidden');
                document.querySelector('.game_second-player--buttons').classList.add('hidden');
                document.getElementById('player-two-health').style.width = 0;
            }
         
        }
        health();
        // reset score when a player reach score = 3
        if(scoreFirstPlayer === 3 || scoreSecondPlayer === 3){
            // chage images when a player wins 
            if(scoreFirstPlayer === 3){
                document.querySelector('.game_first-player--image').src = 'assets/images/evil.gif';
                document.querySelector('.game_second-player--image').src = 'assets/images/rip.gif';
            }else if(scoreSecondPlayer === 3){
                document.querySelector('.game_second-player--image').src = 'assets/images/evil.gif';
                document.querySelector('.game_first-player--image').src = 'assets/images/rip.gif'
            }
            scoreFirstPlayer = 0;
            scoreSecondPlayer = 0;
            document.querySelector('.score-fplayer').innerHTML = scoreFirstPlayer;
            document.querySelector('.score-splayer').innerHTML = scoreSecondPlayer;
            resetGame()
        }
    })
}


function resetGame(){
    firstPlayerHealth = 100;
    secondPlayerHealth = 100;
    document.querySelector('.game_mid-section').classList.add('hidden')
}

// replay game function
function replay(){
    firstPlayerHealth = 100;
    secondPlayerHealth = 100;
    document.getElementById('player-one-health').style.width = "100%";
    document.getElementById('player-two-health').style.width = "100%";
    choseWhoStart();
}

/**
 * Event Listeners
 */
// hide new game and instruction buttons and display form section
newGameBtn.addEventListener('click', function(){
    newGameBtn.classList.add('hidden');
    instructionsBtn.classList.add('hidden');
    document.querySelector('.main_title').classList.add('hidden')
    document.querySelector('.main_form').classList.remove('hidden');
});
// hide attacker buttons after each attack
for(let i = 0; i < attackBtns.length; i++){
    attackBtns[i].addEventListener('click', function(){
        if(!document.querySelector('.game_first-player--buttons').classList.contains('hidden')){
            document.querySelector('.game_first-player--buttons').classList.add('hidden');
            document.querySelector('.game_second-player--buttons').classList.remove('hidden');
            playersAttackOptions();
        }else if(!document.querySelector('.game_second-player--buttons').classList.contains('hidden')){
            document.querySelector('.game_second-player--buttons').classList.add('hidden');
            document.querySelector('.game_first-player--buttons').classList.remove('hidden');
            playersAttackOptions();
        }
    })
    }
// replay game
document.querySelector('.game_mid-replay').addEventListener('click', replay);
// open instructions modal
instructionsBtn.addEventListener('click', function(){
    document.querySelector('.main_instructions').classList.remove('hidden');
})
// close instructions modal
document.querySelector('.main_instructions-close').addEventListener('click', function(){
    document.querySelector('.main_instructions').classList.add('hidden');
})
// event listener for closing instructions modal when press esc key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !document.querySelector('.main_instructions').classList.contains('hidden')) {
        document.querySelector('.main_instructions').classList.add('hidden');
    }
});
// event listener for start game
startGame.addEventListener('click', choseWhoStart);