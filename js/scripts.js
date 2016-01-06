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
		$(".trumpling").box2d({'y-velocity':10});

		$("#addtrumpling").click(function() {
			$('<img class="trumpling" src="/img/trumpling.png" alt="trumpling" />').appendTo(".steamwrap").box2d({'y-velocity':10});
		});
	}
	
});