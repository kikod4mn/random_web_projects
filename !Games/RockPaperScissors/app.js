const CHOICE_DATA   = {
	ROCK    : { name: 'rock', defeats: 'scissors' },
	PAPER   : { name: 'paper', defeats: 'rock' },
	SCISSORS: { name: 'scissors', defeats: 'paper' },
};
const choices       = [CHOICE_DATA.ROCK.name, CHOICE_DATA.PAPER.name, CHOICE_DATA.SCISSORS.name];
const rockBtn       = document.getElementById('rock');
const paperBtn      = document.getElementById('paper');
const scissorsBtn   = document.getElementById('scissors');
const tryAgainBtn   = document.getElementById('tryAgain');
const resetGameBtn  = document.getElementById('resetGame');
const playerScoreEl = document.getElementById('playerScore');
const cpuScoreEl    = document.getElementById('cpuScore');
const messageEl     = document.getElementById('message');
const controlsEl    = document.getElementById('controls');
let playerScore     = 0;
let cpuScore        = 0;

playerScoreEl.innerText = `${ playerScore }`;
cpuScoreEl.innerText    = `${ cpuScore }`;

const initGame = () => {
	resetGame();
};

const playGame = choice => {
	// show rolling animation of timer type with icons as computer "chooses"
	// win condition and scoring
	const playerChoice = CHOICE_DATA[`${ choice.toUpperCase() }`];
	const cpuChoice    = getCpuChoice();
	if (playerChoice.defeats === cpuChoice.name) {
		playerScore++;
	} else if (cpuChoice.defeats === playerChoice.name) {
		cpuScore++;
	} else {
		//draw??
	}
	
	animateCpuRolling();
	setTimeout(cancelCpuRollingAnimation, 2500);
	
	renderPlayerChoice(playerChoice);
	renderCpuChoice(cpuChoice);
	updateScores();
};

const renderPlayerChoice = choice => {};

const renderCpuChoice = cpuChoice => {};

const animateCpuRolling = () => {
	// hide all controls
	hideTryAgainAndReset();
	hideChoiceButtons();
	// show animation
};

const cancelCpuRollingAnimation = () => {
	// hide all controls
	hideTryAgainAndReset();
	hideChoiceButtons();
	// show to try again or to reset the entire game
	showTryAgainAndResetButtons();
};

const getCpuChoice = () => {
	return CHOICE_DATA[`${ choices[Math.floor(Math.random() * choices.length)].toUpperCase() }`];
};

const updateScores = () => {
	playerScoreEl.innerText = `${ playerScore }`;
	cpuScoreEl.innerText    = `${ cpuScore }`;
};

const showChoiceButtons = () => {
	rockBtn.classList.remove('hidden');
	paperBtn.classList.remove('hidden');
	scissorsBtn.classList.remove('hidden');
};

const showTryAgainAndResetButtons = () => {
	tryAgainBtn.classList.remove('hidden');
	resetGameBtn.classList.remove('hidden');
};

const resetGame = () => {
	// reset and redraw scores
	playerScore = 0;
	cpuScore    = 0;
	updateScores();
	// hide try again and reset and show choice buttons
	hideTryAgainAndReset();
	showChoiceButtons();
};

const hideChoiceButtons = () => {
	rockBtn.classList.add('hidden');
	paperBtn.classList.add('hidden');
	scissorsBtn.classList.add('hidden');
};

const hideTryAgainAndReset = () => {
	tryAgainBtn.classList.add('hidden');
	resetGameBtn.classList.add('hidden');
};

initGame();

rockBtn.addEventListener('click', () => playGame(CHOICE_DATA.ROCK.name));
paperBtn.addEventListener('click', () => playGame(CHOICE_DATA.PAPER.name));
scissorsBtn.addEventListener('click', () => playGame(CHOICE_DATA.SCISSORS.name));