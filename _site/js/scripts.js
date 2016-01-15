$( document ).ready(function() {

	var babybear = window.matchMedia( "(max-width: 500px)" );

	// delay for a moment
    setTimeout(introduceTrumplings, 1500);

    function introduceTrumplings() {

		$(".trumpling").box2d({'y-velocity':10});

		$("#addtrumpling").click(function() {

			if (babybear.matches) {
				// window width is less than 500px
				var randomMargin = Math.floor(95 + (1-5-95)*Math.random()) + "%" ;
				var randomWidth = Math.floor(8 + (1+5-8)*Math.random()) + "rem" ;
				var randomRotation = Math.floor((-45) + (1+45-(-45))*Math.random()) + "deg" ;

			}
			else {
				var randomMargin = Math.floor(95 + (1-5-95)*Math.random()) + "%" ;
				var randomWidth = Math.floor(15 + (1+10-15)*Math.random()) + "rem" ;
				var randomRotation = Math.floor((-45) + (1+45-(-45))*Math.random()) + "deg" ;
			}
			

			$('<img class="trumpling" src="/img/trumpling.png" alt="trumpling" />')
			.appendTo(".steamwrap")
			.css({ left : randomMargin , width : randomWidth , rotate: randomRotation})
			.box2d({'y-velocity':10});
		});
	}
	
});