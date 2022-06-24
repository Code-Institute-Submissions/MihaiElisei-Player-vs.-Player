const newGameBtn = document.querySelector('.main_buttons-new');
const instructionsBtn = document.querySelector('.main_buttons-instructions');

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