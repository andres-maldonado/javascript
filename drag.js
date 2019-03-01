(function(){

let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

container.addEventListener('touchstart', dragStart, false);
container.addEventListener('touchend', dragEnd, false);
container.addEventListener('touchmove', drag, false);
container.addEventListener('mousedown', dragStart, false);
container.addEventListener('mouseup', dragEnd, false);
container.addEventListener('mousemove', drag, false);

function dragStart(e) {
	if (e.type === 'touchstart') {
		initialX = e.touches[0].clientX - xOffset;
	} else {
		initialX = e.clientX - xOffset;
	}
	if (e.target === touched_obj) {
		active = true;
	}
}

function drag(e) {
	if (active) {
		e.preventDefault();
		if (e.type === 'touchmove') {
			currentX = e.touches[0].clientX - initialX;
		} else {
			currentX = e.clientX - initialX;
			xOffset = currentX;
		}
		drag_obj.style.transform = "translateX(" + currentX + "px)";
	}
}

function dragEnd(e) {
	initialX = currentX;
	active = false;
}
})();
