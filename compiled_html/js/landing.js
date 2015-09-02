$(document).ready(function() {
	$("div.card").click(function () {
		if ($(this).attr('data-destination')) {
			window.location = $(this).attr('data-destination');
		}
	});
});