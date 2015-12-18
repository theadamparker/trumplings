// on load
$( document ).ready(function() {

 //    $('.trumpling').animate({
	// 	top: "0%"
	// }, {
	// 	duration: 1000,
	// 	easing: "easeOutBounce"
	// });

$(".trumpling").each(function (i) {
    // store the item around for use in the 'timeout' function
    var $item = $(this); 
    // execute this function sometime later:
    setTimeout(function() { 
      $item.animate({"top": 0}, { duration: 1000, easing: "easeOutBounce"});
    }, 150*i);
    // each element should animate half a second after the last one.
  });



});




