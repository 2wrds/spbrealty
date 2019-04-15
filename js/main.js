$(document).ready(function(){
	$('.slider').slick({
		arrows: false,
		dots: true,
	  	dotsClass: 'slider-circles'
	});
	
	$('#phone').mask("+7 (999) 999-99-99");
});