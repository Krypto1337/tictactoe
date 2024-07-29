//REWORK NOW!
const Game = (function () {
	const DOMElements = (function () {
		const board = document.getElementById("board");
		const cells = document.getElementsByClassName("cell");
		const endMessage = document.getElementById("endMessageText");
		const restartButton = document.getElementById("restartButton");
		return { board, cells, endMessage, restartButton };
	})();
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
	//Always start as Player One (X)
	let currentPlayerSign = players[0].sign;
	let currentPlayerName = players[0].name;

	DOMElements.endMessage.textContent = `${currentPlayerName}'s turn!`;

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

	const checkWinner = (function () {
		const hasWon = (PlayerSign) => {
			for (let i = 0; i < winning_combinations.length; i++) {
				const [a, b, c] = winning_combinations[i];
				if (
					DOMElements.cells[a].textContent.toUpperCase() ===
						currentPlayerSign &&
					DOMElements.cells[b].textContent.toUpperCase() ===
						currentPlayerSign &&
					DOMElements.cells[c].textContent.toUpperCase() === currentPlayerSign
				) {
					return true;
				}
			}
			return false;
		};
		return { hasWon };
	})();

	function checkTie() {
		for (let i = 0; i < DOMElements.cells.length; i++) {
			if (DOMElements.cells[i].textContent === "") {
				return false;
			}
		}
		return true;
	}

	function restartGame() {
		for (let i = 0; i < DOMElements.cells.length; i++) {
			DOMElements.cells[i].textContent = "";
		}
		DOMElements.endMessage.textContent = `${currentPlayerName}'s turn!`;
	}

	for (let i = 0; i < DOMElements.cells.length; i++) {
		DOMElements.cells[i].addEventListener("click", () => {
			if (DOMElements.cells[i].textContent !== "") return;
			DOMElements.cells[i].textContent = currentPlayerSign;
			if (checkWinner.hasWon(currentPlayerSign)) {
				DOMElements.endMessage.textContent = `Game over! ${currentPlayerName} wins!`;
				return;
			}
			if (checkTie()) {
				DOMElements.endMessage.textContent = "Game is tied!";
				return;
			}
			currentPlayerName =
				currentPlayerName === players[0].name
					? players[1].name
					: players[0].name;
			currentPlayerSign =
				currentPlayerSign === players[0].sign
					? players[1].sign
					: players[0].sign;
			if (currentPlayerSign == players[0].sign) {
				DOMElements.endMessage.textContent = `${players[0].name}'s turn!`;
			} else {
				DOMElements.endMessage.textContent = `${players[1].name}'s turn!`;
			}
		});
	}

	restartButton.addEventListener("click", () => {
		restartGame();
	});
})();

Game;
