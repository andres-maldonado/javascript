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

setInterval(function(){
	simulateClick(nextFrame);
	simulateClick(likeInstagram);
	
}, 13000);