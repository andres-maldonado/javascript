var rightFrame = document.querySelector('a._3a693.coreSpriteRightPaginationArrow');
var likeInstagram = document.querySelector('span._soakw.coreSpriteHeartOpen');
var leftFrame = document.querySelector('a._qdy3e.coreSpriteLeftPaginationArrow');
var max_number = Math.round(Math.random()*(20)+30);
var i = 0;
var simulateClick = function (elem) {
    var evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    var canceled = !elem.dispatchEvent(evt);
};

function goLike() {
	if(rightFrame){
	var yesOrNot = (Math.floor(Math.random() * 2)); //boolean 0 or 1
	switch(yesOrNot){
		case 0:
			simulateClick(rightFrame);
			break;
		case 1:
			simulateClick(likeInstagram);
			simulateClick(rightFrame);
			i = i + 1;
			console.log("Current Like "+i);
			return i;
        }	
	}else{
		console.log("Broke whit "+i);
		alert("Broke whit "+i);
	}
}

(function loop() {
    var rand = Math.round(Math.random() * (3000 - 500)) + 2000;
    setTimeout(function() {
            goLike(i);
	    if(i==max_number){
		    console.log("End Loop whit "+max_number+" elements");
		    alert("End Loop whit "+max_number+" elements");
	    }else{
            loop();
		    }
    }, rand);
}());

//var nextFrame = document.querySelector('a._de018.coreSpriteRightPaginationArrow');
//var likeInstagram = document.querySelector('span._soakw.coreSpriteLikeHeartOpen');

//setInterval(function(){
//	simulateClick(nextFrame);
//	simulateClick(likeInstagram);
//}, 13000);
