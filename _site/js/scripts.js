$( document ).ready(function() {

	var babybear = window.matchMedia( "(max-width: 500px)" );

	// delay for a moment
    setTimeout(introduceTrumplings, 1500);

    function introduceTrumplings() {

  //   	var trumpling = new b2CircleDef();
		// trumpling.density = 1.0;
		// trumpling.radius = 20;
		// trumpling.restitution = 1.0;
		// trumpling.friction = 0;
		// var circleBd = new b2BodyDef();
		// circleBd.AddShape(trumpling);
		// circleBd.position.Set(x,y);
		// var circleBody = world.CreateBody(circleBd);

		$(".trumpling").box2d({'y-velocity':10 , 'shape':'circle'});

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

	$("#delete").click(function() {

		$(".trumpling").hide( "puff" , function() {
			$(this).remove();
		});

		// $(".trumpling").hide("puff", {}, 1000, function() {
		// 	// $(this).remove();
		// 	$(".trumpling").remove();
		// });
	});
	
});