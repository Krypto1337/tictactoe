const board = document.getElementById("board");
const cells = document.getElementsByClassName("cell");
const endMessage = document.getElementById("endMessageText");
const players = [
	{
		name: "Player One",
		sign: "X",
	},
	{
		name: "Player Two",
		sign: "O",
	},
];
let currentPlayer = players[0].sign;

endMessage.textContent = `${players[0].name}'s turn!`;

const winning_combinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function checkWin(currentPlayer) {
	for (let i = 0; i < winning_combinations.length; i++) {
		const [a, b, c] = winning_combinations[i];
		if (
			cells[a].textContent.toUpperCase() === currentPlayer &&
			cells[b].textContent.toUpperCase() === currentPlayer &&
			cells[c].textContent.toUpperCase() === currentPlayer
		) {
			return true;
		}
	}
	return false;
}

console.log(checkWin(currentPlayer));
