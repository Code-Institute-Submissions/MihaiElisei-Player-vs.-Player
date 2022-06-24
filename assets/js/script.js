const newGameBtn = document.querySelector('.main_buttons-new');
const instructionsBtn = document.querySelector('.main_buttons-instructions');
const submitButton = document.getElementById('submit');
// function to prevent default behaviour of the form
function submitForm(event){
    event.preventDefault();
    submitButton.addEventListener('click', function(){
        document.querySelector('.players-form').classList.add('hidden');
        document.querySelector('.game').classList.remove('hidden');
        document.querySelector('.footer').classList.add('hidden');
    })
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