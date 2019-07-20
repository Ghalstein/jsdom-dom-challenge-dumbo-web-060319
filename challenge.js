let running = true;
const TIME = document.querySelector('#counter');
const PLUS = document.querySelector('#plus');
const MINUS = document.querySelector('#minus');
const LIKE = document.querySelector('#like');
const LIKES = document.querySelector('#likes');
const PAUSE = document.querySelector('#pause');
const ALLBUTTONS = document.querySelectorAll('button');

// increments the timer
function manualIncrement() {
	TIME.innerHTML = parseInt(TIME.innerHTML) + 1;
}

// decrmeents the timer
function manualDecrement() {
	if (parseInt(TIME.innerHTML) > 0)
	TIME.innerHTML = parseInt(TIME.innerHTML) - 1;
}

const TIMER = setInterval(fn => {
	if (running) {
		manualIncrement();
	}
}, 1000);

function addLike(time) {
	let second = "second"
	if (time > 1 || time < 1) {
		second = "seconds"
	}
	LIKES.innerHTML += `<li>You hit like at ${time} ${second}.</li>`
}

function pause() {
	ALLBUTTONS.forEach(button => {
		if (running && button.id !== 'pause') {
			button.disabled = true;
		}
		else {
			button.disabled = false;
		}
	});

	if (running) {
		PAUSE.innerText = "resume"
	}
	else {
		PAUSE.innerText = "pause"
	}
	running = !running;
}

// timer starts up on page load 
document.addEventListener("DOMContentLoaded", event => {
	TIMER;
});

// event listener for all of the buttons
document.addEventListener("click", event => {
	
	// specific for plus button
	if (event.target === PLUS) {
		//console.log(event.target);
		manualIncrement();
	}
	else if (event.target === MINUS) {
		manualDecrement();
	}
	else if (event.target === LIKE) {
		console.log(event.target)
		addLike(TIME.innerText);
	}
	else if (event.target === PAUSE) {
		pause();
	}

})