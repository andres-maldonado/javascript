var simulateClick = function (elem) {
    // Create our event (with options)
    var evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    var canceled = !elem.dispatchEvent(evt);
};

var nextFrame = document.querySelector('a._de018.coreSpriteRightPaginationArrow');
var likeInstagram = document.querySelector('span._soakw.coreSpriteLikeHeartOpen');

function goLike() {
	var yesOrNot = (Math.floor(Math.random() * 2)); //boolean 0 or 1
	switch(yesOrNot){
		case 0:
			simulateClick(nextFrame);
			break;
		case 1:
			simulateClick(likeInstagram);
			simulateClick(nextFrame);		
			break;
        }	
}

(function loop() {
    var rand = Math.round(Math.random() * (3000 - 500)) + 2000;
    setTimeout(function() {
            goLike();
            loop();  
    }, rand);
}());

//var nextFrame = document.querySelector('a._de018.coreSpriteRightPaginationArrow');
//var likeInstagram = document.querySelector('span._soakw.coreSpriteLikeHeartOpen');

//setInterval(function(){
//	simulateClick(nextFrame);
//	simulateClick(likeInstagram);
//}, 13000);
