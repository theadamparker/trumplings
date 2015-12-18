$( document ).ready(function() {

    $('.steamer').animate({
		left: "0%"
	}, {
		duration: 1000,
		easing: "easeOutCubic"
	});

	// delay for a moment
    setTimeout(introduceTrumplings, 1500);

    function introduceTrumplings() {
	    $(".trumpling").each(function (i) {
			var $item = $(this); 
			setTimeout(function() { 
			$item.animate({"top": 0}, { 
				duration: 1000, 
				easing: "easeOutBounce"});
			}, 150*i);
		});
	}

	

	function doBounce(element, times, distance, speed) {
	    for(var i = 0; i < times; i++) {
	        element.animate({marginTop: '-='+distance}, speed)
	            .animate({marginTop: '+='+distance}, speed);
	    }        
	}	

	$(".trumpling").click(function(){
	    doBounce($(this), 2, '10px', 100);
	});
});