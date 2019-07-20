let running = true;
const TIME = document.querySelector('#counter');
const PLUS = document.querySelector('#plus');
const MINUS = document.querySelector('#minus');
const LIKE = document.querySelector('#like');
const LIKES = document.querySelector('#likes');


function incrementTime() {
	if (running) {
		console.log(TIME);
		setInterval(event => {
			TIME.innerHTML = parseInt(TIME.innerHTML) + 1;
		}, 1000);
	}
}

// increments the timer
function manualIncrement() {
	TIME.innerHTML = parseInt(TIME.innerHTML) + 1;
}

// decrmeents the timer
function manualDecrement() {
	if (parseInt(TIME.innerHTML) > 0)
	TIME.innerHTML = parseInt(TIME.innerHTML) - 1;
}

function addLike(time) {
	let second = "second"
	if (time > 1 || time < 1) {
		second = "seconds"
	}
	LIKES.innerHTML += `<li>You hit like at ${time} ${second}.</li>`
}

// timer starts up on page load 
document.addEventListener("DOMContentLoaded", event => {
	incrementTime();
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
	else if (event.target == LIKE) {
		console.log(event.target)
		addLike(TIME.innerText);
	}

})