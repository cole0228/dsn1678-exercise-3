var salesLeft = $('.sales');
var detailsLeft = $('.sales__details');

var buttonClickHandler = function () {
	var currentState = detailsLeft.attr('data-state');

	if (currentState == 'active') {
		detailsLeft.attr('data-state', 'inactive');
	} else {
		detailsLeft.attr('data-state', 'active');
	}
};

salesLeft.on('click', buttonClickHandler)


var salesRight = $('.sales');
var detailsRight = $('.sales__details');

var buttonClickHandler = function () {
	var currentState = detailsRight.attr('data-state');

	if (currentState == 'active') {
		detailsRight.attr('data-state', 'inactive');
	} else {
		detailsRight.attr('data-state', 'active');
	}
};

salesRight.on('click', buttonClickHandler)
