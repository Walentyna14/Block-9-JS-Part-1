var main = function(){
	var NavY = $('nav').offset().top;
	var stickyNav = function(){
		var ScrollY = $(window).scrollTop();
		if (ScrollY > NavY) { 
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky'); 
		}
	};
	$(window).scroll(function() {
		stickyNav();
	});
	
	
	$('h4').click(function() {
		if($(this).siblings(".books").hasClass('show')== false)
		{
			$('.books').removeClass('show');
			$(this).siblings(".books").addClass('show');
		}else 
		{
			$('.books').removeClass('show');
		}
	});
	
	$('#content').click(function() {
		$(".books").removeClass('show');
	});
	
	$('.opis').click(function() {
		$('.recenzje').hide();
		$('.opisy').show();
		$(this).addClass('black');
		$('.recenzja').removeClass('black');
	});
	
	$('.recenzja').click(function() {
		$('.opisy').hide();
		$('.recenzje').show();
		$(this).addClass('black');
		$('.opis').removeClass('black');
	});
}

$(document).ready(main);