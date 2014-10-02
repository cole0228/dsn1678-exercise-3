var salesLeft = $('.salesLeft');
var detailsLeft = $('.detailsLeft');

var buttonClickHandler = function () {
	var currentState = detailsLeft.attr('data-state');

	if (currentState == 'active') {
		detailsLeft.attr('data-state', 'inactive');
	} else {
		detailsLeft.attr('data-state', 'active');
	}
};

salesLeft.on('click', buttonClickHandler)


var salesRight = $('.salesRight');
var detailsRight = $('.detailsRight');

var buttonClickHandler = function () {
	var currentState = detailsRight.attr('data-state');

	if (currentState == 'active') {
		detailsRight.attr('data-state', 'inactive');
	} else {
		detailsRight.attr('data-state', 'active');
	}
};

salesRight.on('click', buttonClickHandler)
