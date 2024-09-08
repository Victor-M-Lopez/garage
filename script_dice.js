// variables to target buttons
const restartBtn = document.getElementById('restart-btn');
const rollBtn = document.getElementById('roll-btn');
const holdBtn = document.getElementById('hold-btn');

// variables for targeting scores & variables for score values
let activePlayer = 0;
let currentScore = 0;
let scores = [0, 0];

let player0Score = document.getElementById('player0_score');
let player1Score = document.getElementById('player1_score');

let player0CurrentScore = document.getElementById('player0_current_score');
let player1CurrentScore = document.getElementById('player1_current_score');

let player1Side = document.getElementById('player1');
let player2Side = document.getElementById('player2');

let playerName = document.querySelectorAll('.player_name');

// variables for dice img
let diceImg = document.getElementById('dice_img');

let changePlayer = function () {
	currentScore = 0;
	document.getElementById(
		`player${activePlayer}_current_score`
	).textContent = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	player1Side.classList.toggle('active_player');
	player2Side.classList.toggle('active_player');
};

// when clicking on roll btn -> dice should appear, switch dice according to number, change numbers per click
rollBtn.addEventListener('click', function () {
	let dice = Math.trunc(Math.random() * 6) + 1;

	diceImg.classList.remove('hidden');
	diceImg.src = `assets/dice_${dice}.svg`;

	// if number is 1 -> current score is 0
	// otherwise the current score keeps adding up
	if (dice !== 1) {
		currentScore += dice;
		document.getElementById(`player${activePlayer}_current_score`).textContent =
			currentScore;
	} else {
		// switch player
		changePlayer();
	}
});

// if player chooses to hold their current score
// then add it to overall score and switch players
holdBtn.addEventListener('click', function () {
	scores[activePlayer] += currentScore;
	document.getElementById(`player${activePlayer}_score`).textContent =
		scores[activePlayer];
	if (scores[activePlayer] >= 100) {
		playerName[activePlayer].textContent = 'WINNER';
	} else {
		changePlayer();
	}
});

restartBtn.addEventListener('click', function () {
	diceImg.classList.add('hidden');
	activePlayer = 0;
	currentScore = 0;
	player0Score.textContent = 0;
	player1Score.textContent = 0;
	player1Side.classList.add('active_player');
	player2Side.classList.remove('active_player');
	scores = [0, 0];
});
