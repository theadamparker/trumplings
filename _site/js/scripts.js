$( document ).ready(function() {

	var babybear = window.matchMedia( "(max-width: 500px)" );

	$('.steamer img').on('dragstart', function(event) { event.preventDefault(); });

    setTimeout(introduceTrumplings, 10);

    function introduceTrumplings() {

		$(".trumpling").box2d({'shape':'circle','density':0.1, 'restitution':0.5, 'friction':0.4, 'y-velocity': 20});

		$("#addtrumpling").click(function(event) {

			event.preventDefault();

			var randomFace = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

			if (babybear.matches) {
				// window width is less than 500px
				var randomMargin = Math.floor(90 + (1-5-90)*Math.random()) + "%" ;
				var randomWidth = Math.floor(8 + (1+5-8)*Math.random()) + "rem" ;
				var randomRotation = Math.floor((-45) + (1+45-(-45))*Math.random()) + "deg" ;

			}
			else {
				var randomMargin = Math.floor(95 + (1-5-95)*Math.random()) + "%" ;
				var randomWidth = Math.floor(15 + (1+10-15)*Math.random()) + "rem" ;
				var randomRotation = Math.floor((-45) + (1+45-(-45))*Math.random()) + "deg" ;
			}
			

			$('<img class="trumpling" src="/img/trump-' + randomFace + '.gif" alt="trumpling" />')
			.appendTo(".steamwrap")
			.css({ left : randomMargin , width : randomWidth , rotate: randomRotation})
			.box2d({'shape':'circle','density':0.1, 'restitution':0.5, 'friction':0.4, 'y-velocity': 20});

			var randomAudio = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

			var audio = document.getElementById("audio" + randomAudio);
			audio.play();
		});
	}

	$("#delete").click(function(event) {

		event.preventDefault();

		$(".trumpling").hide( "puff" , function() {
			$(this).remove();
		});

		$(".paling").hide( "puff" , function() {
			$(this).remove();
		});

		var outtahere = document.getElementById("outtahere");

		outtahere.play();
	});


	$("#endorse").click(function(event) {

		event.preventDefault();

		if (babybear.matches) {
			// window width is less than 500px
			var randomMargin = Math.floor(90 + (1-5-90)*Math.random()) + "%" ;
			var randomWidth = Math.floor(4 + (1+2-4)*Math.random()) + "rem" ;
			var randomRotation = Math.floor((-45) + (1+45-(-45))*Math.random()) + "deg" ;

		}
		else {
			var randomMargin = Math.floor(95 + (1-5-95)*Math.random()) + "%" ;
			var randomWidth = Math.floor(5 + (1+3-5)*Math.random()) + "rem" ;
			var randomRotation = Math.floor((-45) + (1+45-(-45))*Math.random()) + "deg" ;
		}
		

		$('<img class="paling" src="/img/palin.png" alt="palin dumpling" />')
		.appendTo(".steamwrap")
		.css({ left : randomMargin , width : randomWidth , rotate: randomRotation})
		.box2d({'shape':'circle','density':0.1, 'restitution':0.5, 'friction':0.4, 'y-velocity': 20});

		var palinAudio = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

		var audio = document.getElementById("palin" + palinAudio);
		audio.play();
	});

	// MUTE BUTTON
	$("#mute").click(function (event) {

		event.preventDefault();
		
	    $("audio").prop('muted', !$("audio").prop('muted'));
	    $(this).find('img').toggle();
	});

	
});