let running = true;
const TIME = document.querySelector('#counter');
const PLUS = document.querySelector('#plus');
const MINUS = document.querySelector('#minus');
const LIKE = document.querySelector('#like');
const LIKES = document.querySelector('#likes');
const PAUSE = document.querySelector('#pause');
const ALLBUTTONS = document.querySelectorAll('button');
const COMMENTS = document.querySelector('#list-of-comments');
const COMMENT = document.querySelector('#input');

// increments the timer
function manualIncrement() {
	TIME.innerHTML = parseInt(TIME.innerHTML) + 1;
}

// decrmeents the timer
function manualDecrement() {
	if (parseInt(TIME.innerHTML) > 0)
	TIME.innerHTML = parseInt(TIME.innerHTML) - 1;
}

// timer that stops and starts depending on whether its paused or not
const TIMER = setInterval(fn => {
	if (running) {
		manualIncrement();
	}
}, 1000);

// pluralizes seconds when needed
function second(time) {
	if (time > 1 || time < 1) {
		return "seconds"
	}
	else
		return "second"
}

//adds a like at a certain time
function addLike(time) {
	LIKES.innerHTML += `<li>You hit like at ${time} ${second(time)}.</li>`
}

// pauses the whole app and disables any funcitonality besides resume and visa versa
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
});

// adds a comment
function addComment() {
	COMMENTS.innerHTML += `<li>${COMMENT.value} @ ${TIME.innerHTML} ${second(parseInt(TIME.innerHTML))}.</li>`
}

// listens for submit of comment
document.addEventListener("submit", event => {
	event.preventDefault();
	addComment();
});