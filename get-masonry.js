// GET MANSORY
let mainHeight = $('#main-home-mansory').outerHeight();
let mainWidth = $('#main-home-mansory').outerWidth();
let currentTop = [];
let mainCounterPosition = 0;
let masonryDone = false;

function GetMasonry(){
	if (mainWidth > 700) {
		$('#main-home-mansory');

		let columns = parseInt(mainWidth / 330);
		let gridGap = 30;
		let boxWidth = parseInt((mainWidth - (gridGap * (columns - 1))) / columns);

		if (currentTop.length == 0){
			for (var i = 0; i < columns; i++){
				currentTop[i] = 0;
			}
		}
		// MAIN MASONRY CALC
		$('#main-home-mansory .social-box').each(function(){
			if (columns == mainCounterPosition){mainCounterPosition = 0;}

			translateLeft = (mainCounterPosition * boxWidth) + (gridGap * mainCounterPosition);
			translateTop = parseInt(currentTop[mainCounterPosition]);

			$(this).css({'position':'absolute','width':boxWidth,'top': translateTop, 'left': translateLeft});

			currentTop[mainCounterPosition] = ($(this).height() + gridGap) + currentTop[mainCounterPosition];
			mainCounterPosition += 1;
		});
	}
	masonryDone = true;
}

if(masonryDone == true){$(window).resize(GetMasonry());}
$(document).ready(GetMasonry());
