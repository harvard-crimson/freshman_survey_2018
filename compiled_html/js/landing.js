$(document).ready(function() {
	$("div.card").click(function () {
		window.location = $(this).attr('data-destination');
	});
});