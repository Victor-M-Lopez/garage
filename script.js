// general
let gameBackground = document.querySelector('body');

// buttons
let tryAgainBtn = document.querySelector('.play_again');
let decreaseNumberBtn = document.querySelector('#arrow_down');
let increaseNumberBtn = document.querySelector('#arrow_up');
let checkInputBtn = document.querySelector('#check_number');

// user input
let numberInput = document.querySelector('#text_input');

// game text
let correctNumber = document.querySelector('#number');
let message = document.querySelector('#start_guessing');
let gameScore = document.querySelector('#game_score');
let gameHighScore = document.querySelector('#game_high-score');

correctNumber.value = Math.trunc(Math.random() * 20) + 1;
console.log(correctNumber.value);

increaseNumberBtn.addEventListener('click', function () {
	if (numberInput.value < 20) {
		numberInput.value++;
	}
});

decreaseNumberBtn.addEventListener('click', function () {
	if (numberInput.value > 1) {
		numberInput.value--;
	}
});

checkInputBtn.addEventListener('click', function () {
	if (numberInput.value == correctNumber.value) {
		message.textContent = 'Correct!';
		gameBackground.style.backgroundColor = 'green';
		correctNumber.textContent = `${correctNumber.value}`;
	} else if (numberInput.value < correctNumber.value) {
		message.textContent = 'Too Low!';
	} else {
		message.textContent = 'Too High!';
	}
});
