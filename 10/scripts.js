$(document).ready(function() {
	$('#main-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		adaptiveHeight: true
	});
	
	$('#main-slider-2').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  centerMode: true,
	  fade: true,
	  asNavFor: '#nav-slider',
	  adaptiveHeight: true,
	  infinite: true,
	});
	
	$('#nav-slider').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '#main-slider-2',
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true,
	  adaptiveHeight: true,
	  arrows: false,
	  adaptiveHeight: true
	});
	
	$('#show').avgrund({
		width: 380, // max is 640px
		height: 280, // max is 350px
		showClose: false, // switch to 'true' for enabling close button
		showCloseText: '', // type your text for close button
		closeByEscape: true, // enables closing popup by 'Esc'..
		closeByDocument: true, // ..and by clicking document itself
		holderClass: '', // lets you name custom class for popin holder..
		overlayClass: '', // ..and overlay block
		enableStackAnimation: false, // enables different type of popin's animation
		onBlurContainer: '', // enables blur filter for specified block
		openOnEvent: true, // set to 'false' to init on load
		setEvent: 'click', // use your event like 'mouseover', 'touchmove', etc.
		template: 'Your string content goes here..' // or function (elem) { ... }, or selector $('.content')
	});
});