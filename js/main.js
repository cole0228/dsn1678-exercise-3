var theButton = $('.sales');
var header = $('.sales__details');

var buttonClickHandler = function () {
	var currentState = header.attr('data-state');

	if (currentState == 'active') {
		header.attr('data-state', 'inactive');
	} else {
		header.attr('data-state', 'active');
	}
};

theButton.on('click', buttonClickHandler)
