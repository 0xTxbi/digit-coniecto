/* Players should guess a number between the minimum and maximum values

Player has a defined number of trials

Notify the player on the number of trials screenLeft

If the player loses, they should be notified on the correct answer

Let the player play again */



// Game values
let min = 1,
	max = 10,
	winningDig = 2,
	guessesLeft = 3;

// UI Elements

const game = document.querySelector('#game'),
	minDig = document.querySelector('.min-dig'),
	maxDig = document.querySelector('.max-dig'),
	guessBtn = document.querySelector('#guess-value'),
	guessInput = document.querySelector('#guess-input'),
	message = document.querySelector('.message');


// Assign minimum and maximum values

minDig.textContent = min;
maxDig.textContent = max;

// Listen for the guess button

guessBtn.addEventListener('click', function () {

	let guess = parseInt(guessInput.value);

	// Validate input

	if (isNaN(guess) || guess < min || guess > max) {

		setMessage(`Please enter a number between ${min} and ${max}`, 'red');

	} else {

	}

	// Check if player wins
	if (guess === winningDig) {

		gameOver(true, `You won! The random number was ${winningDig}`);

		// //Disable input field
		// guessInput.disabled = true;

		// //Change border colour
		// guessInput.style.borderColor = 'green';

		// // Player winning notification
		// setMessage(`You won! The random number was ${winningDig}`, 'green');

	} else {

		//Game over
		if (guessesLeft === 0) {

			gameOver(false, `Game over! You've lost. The correct number was ${winningDig}`);

		} else {

			// Game continues when answer is wrong

			//If guess is wrong
			guessesLeft -= 1;

			// Player losing notification
			setMessage(`${guess} is wrong! You have ${guessesLeft} chances left`, 'orange');





		}

	}

});


// Set Message function

function setMessage(msg, colour) {

	message.style.color = colour;
	message.textContent = msg;


}


// Game over function

function gameOver(won, msg) {

	let colour;
	won === true ? colour = 'green' : 'red';

	//Disable input field
	guessInput.disabled = true;

	//Change border colour
	guessInput.style.borderColor = colour;

	//Change message colour
	message.style.color = colour;

	// Player winning notification
	setMessage(msg);

}