var simulateClick = function (elem) {
    // Create our event (with options)
    var evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    var canceled = !elem.dispatchEvent(evt);
};

setInterval(function(){
  var thisLike = document.querySelector('.UFILikeLink._4x9-._4x9_._48-k');
	simulateClick(thisLike);
}, 13000);
