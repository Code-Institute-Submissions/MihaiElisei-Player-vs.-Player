const newGameBtn = document.querySelector('.main_buttons-new');
const instructionsBtn = document.querySelector('.main_buttons-instructions');

// hide new game and instruction buttons and display form section
newGameBtn.addEventListener('click', function(){
    newGameBtn.classList.add('hidden');
    instructionsBtn.classList.add('hidden');
    document.querySelector('.main_form').classList.remove('hidden');
});