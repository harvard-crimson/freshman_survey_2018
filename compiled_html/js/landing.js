$(document).ready(function() {
	$("div.card:not(.card-disabled)").hover(function() {
		$(this).stop().animate({boxShadow: '3px 3px 10px #aaaaaa'}).children('.cover').fadeIn();
	}, function() {
		$(this).stop().animate({boxShadow: 'none'}).children('.cover').fadeOut();
	});

	$("div.card").click(function () {
		window.location = $(this).attr('data-destination');
	});
});