let pusher = 0;
// GET ELEMENTS
if (containers_add > container_width) {
  // GET BREAK POINT
  for (var i = 0; i < list_width.length; i++){
    if(i != new_element){
      pusher += list_width[i] + 15;
    }else{
      // PUSH

      if ((containers_add - container_width + list_width[0]) > pusher || index == 0 && new_element == (list_width.length - 1)) {
        if (index == 0 && new_element == (list_width.length - 1)) {
          $('.nav-container nav').css('transform','translateX(-'+ (pusher - (list_width[5] + list_width[4] + 2)) +'px)');
        }else{
          $('.nav-container nav').css('transform','translateX(-'+pusher+'px)');
        }
        break;
      }
    }
  }
}
    
// FINAL

let list = $('.nav-container a');
let container_width = 0;
let elements_add = 0;
let grid_gap = 15;
let pusher = 0;

(function(){
	elements_add = 0;
	container_width = $('div.nav-container').outerWidth();

	for (var i = 0; i < list.length; i++) {
		if (i > 0){
			elements_add += $(list[i]).outerWidth() + grid_gap;
		}else{
			elements_add += $(list[i]).outerWidth();
		}
	}

	for (var i = 0; i < list.length; i++){
		let current_width = $(list[i]).width();
		$(list[i]).attr('data-push',pusher);
		// UPDATE PUSH
		if ((elements_add - container_width) > pusher) {
			pusher += (current_width + grid_gap);
		}
	}
})();
