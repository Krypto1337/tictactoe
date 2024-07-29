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
let currentPlayerSign = players[0].sign;
let currentPlayerName = players[0].name;

endMessage.textContent = `${currentPlayerName}'s turn!`;

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
			cells[a].textContent.toUpperCase() === currentPlayerSign &&
			cells[b].textContent.toUpperCase() === currentPlayerSign &&
			cells[c].textContent.toUpperCase() === currentPlayerSign
		) {
			return true;
		}
	}
	return false;
}

function checkTie() {
	for (let i = 0; i < cells.length; i++) {
		if (cells[i].textContent === "") {
			return false;
		}
	}
	return true;
}

function restartButton() {
	for (let i = 0; i < cells.length; i++) {
		cells[i].textContent = "";
	}
	endMessage.textContent = `${currentPlayerName}'s turn!`;
}

for (let i = 0; i < cells.length; i++) {
	cells[i].addEventListener("click", () => {
		if (cells[i].textContent !== "") return;
		cells[i].textContent = currentPlayerSign;
		if (checkWin(currentPlayerSign)) {
			endMessage.textContent = `Game over! ${currentPlayerName} wins!`;
			return;
		}
		if (checkTie()) {
			endMessage.textContent = "Game is tied!";
			return;
		}
		currentPlayerSign =
			currentPlayerSign === players[0].sign ? players[1].sign : players[0].sign;
		if (currentPlayerSign == players[0].sign) {
			endMessage.textContent = `${players[0].name}'s turn!`;
		} else {
			endMessage.textContent = `${players[1].name}'s turn!`;
		}
	});
}
