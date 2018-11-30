$(document).ready(function() {
  $(".mySlider").slick({
	vertical: true,
	verticalSwiping: true,
	arrows: false,
	dots: true,
	accessibility: true,
    speed: 1000,
	adaptiveHeight:true
  });
});


$(document).ready(function() {
  $(".instructionsSlider").slick({
	arrows: true,
	dots: true,
	autoplay: true,
	autoplaySpeed: 7000,
	accessibility: true,
	adaptiveHeight:true,
	speed: 1000
  });
});