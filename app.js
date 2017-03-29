var main = function(){
	var NavY = $('nav').offset().top;
	var stickyNav = function(){
		var ScrollY = $(window).scrollTop();
		if (ScrollY >= NavY) { 
			$('nav').addClass('sticky');
		} else
		{
			$('nav').removeClass('sticky'); 
		}
	};
	$(window).scroll(function() {
		stickyNav();
	});
	
	
	$('.menu').click(function() {
		if($(this).siblings(".books").css('display')=='none')
		{
			$('.books').hide();
			$(this).siblings(".books").toggle();
		}else 
		{
			$('.books').hide();
		}
	});
	
	$('#content').click(function() {
		$(".books").hide();
	});
	
	$('button').click(function() {
		$('.recenzje').toggle();
		$('.opisy').toggle();
		$('button').toggleClass('black');
	});

}	

$(document).ready(main);