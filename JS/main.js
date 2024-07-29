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
