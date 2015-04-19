$(document).ready(function() {

	// Share
	var windowFeatures = function(width, height) {
		var leftPosition, topPosition;
		leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
		topPosition = (window.screen.height / 2) - ((height / 2) + 50);
		return "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
	}

	$(".share-button").click(function(e) {
		e.preventDefault();
		var href = $(e.target).attr('href');
		window.open(href, "share", windowFeatures(550, 300)); 
	});

});