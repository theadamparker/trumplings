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
    	var randomMargin = Math.floor(95 + (1-5-95)*Math.random()) + "%" ;
		var randomWidth = Math.floor(15 + (1+10-15)*Math.random()) + "rem" ;
		var randomRotation = Math.floor((-45) + (1+45-(-45))*Math.random()) + "deg" ;

		$(".trumpling").box2d({'y-velocity':10});

		$("#addtrumpling").click(function() {
			$('<img class="trumpling" src="/img/trumpling.png" alt="trumpling" />')
			.appendTo(".steamwrap")
			.css({ left : randomMargin , width : randomWidth , rotate: randomRotation})
			.box2d({'y-velocity':10});
		});
	}
	
});