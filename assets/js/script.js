let firstPlayerHealth = 100;
let secondPlayerTwoHealth = 100;
const newGameBtn = document.querySelector('.main_buttons-new');
const instructionsBtn = document.querySelector('.main_buttons-instructions');
const submitButton = document.getElementById('submit');
const firstPlayerName = document.querySelector('.game_first-player--name');
const secondPlayerName = document.querySelector('.game_second-player--name');
const startGame = document.querySelector('.game_mid-start');
const attacks = ['slap', 'punch', 'sword', 'axe', 'mace', 'spell'];

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
        console.log(attacks[randomNum1],attacks[randomNum2])
        if(attacks[randomNum1] === attacks[randomNum2]){
            playersAttackOptions();
        }
    }else if(document.querySelector('.game_second-player--buttons').classList.contains('hidden')){
        document.querySelector('.game_first-player1--attack').innerHTML = attacks[randomNum1];
        document.querySelector('.game_first-player2--attack').innerHTML = attacks[randomNum2];
        console.log(attacks[randomNum1],attacks[randomNum2])
        if(attacks[randomNum1] === attacks [randomNum2]){
            playersAttackOptions();
        }
    }
}

// attack sequence
function playersAttack(firstPlayer, secondPlayer){

}


// hide new game and instruction buttons and display form section
newGameBtn.addEventListener('click', function(){
    newGameBtn.classList.add('hidden');
    instructionsBtn.classList.add('hidden');
    document.querySelector('.main_title').classList.add('hidden')
    document.querySelector('.main_form').classList.remove('hidden');
});
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