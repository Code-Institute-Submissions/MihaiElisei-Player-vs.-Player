const newGameBtn = document.querySelector('.main_buttons-new');
const instructionsBtn = document.querySelector('.main_buttons-instructions');
const submitButton = document.getElementById('submit');
const firstPlayerName = document.querySelector('.game_first-player--name');
const secondPlayerName = document.querySelector('.game_second-player--name');

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

// hide new game and instruction buttons and display form section
newGameBtn.addEventListener('click', function(){
    newGameBtn.classList.add('hidden');
    instructionsBtn.classList.add('hidden');
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