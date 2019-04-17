$(document).ready(function(){
	$('#phone').mask("+7 (999) 999-99-99");
});

btn_start.onclick = function(){
	$('.slider').slick({
		arrows: false,
		dots: true,
	  	dotsClass: 'slider-circles'
	});

	$('.slider').slick('setPosition');
};