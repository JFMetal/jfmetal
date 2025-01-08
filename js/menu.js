
window.addEventListener('scroll', function() {
	var nav = document.querySelector('nav');
	nav.classList.toggle('menu__flotante', window.scrollY > 153);
});


/*
$(document).ready(function() {

	var altura = $('.header').offset().top;

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > altura) {
			$('.nav').addClass('menu__flotante');
		}
		else {
			$('.nav').removeClass('menu__flotante');
		}
	});
});
*/