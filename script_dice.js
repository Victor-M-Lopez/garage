// variables for player section for when it's their turn their side will light up
const player_1 = document.querySelector('.player1');
const player_2 = document.querySelector('.player2');

// variables to store and display overall score and current score
let playerScore = document.getElementById('player_score');
let currentScore = document.getElementById('score');

// buttons for rolling the dice, start a new game, or hold their current score
const newGameBtn = document.getElementById('new_game-btn');
const rollDiceBtn = document.getElementById('roll_dice-btn');
const holdBtn = document.getElementById('hold-btn');

let dice = document.getElementById('dice_img');
