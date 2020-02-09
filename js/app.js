///////////////////// CONSTANTS /////////////////////////////////////

const winnningConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

///////////////////// APP STATE (VARIABLES) /////////////////////////

var board;

///////////////////// CACHED ELEMENT REFERENCES /////////////////////

const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");
const humanPlayer = 'O';
const computerPlayer = 'X';
const cells = document.querySelectorAll('.square');
startGame();

///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = startGame;

///////////////////// FUNCTIONS /////////////////////////////////////

function startGame() {
	document.querySelector(".endgame").style.display = "none";
	board = Array.from(Array(9).keys());
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerText = '';
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', takeTurn, false);
	}
}
