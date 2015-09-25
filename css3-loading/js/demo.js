// 演示一
$(document).ready(function() {
	$('#progress').removeClass('running');

	$('.trigger').click(function() {
		$('#progress').removeClass('running').delay(10).queue(function(next) {
			$(this).addClass('running');

			next();
		});

		return false;
	});
});

// 演示二
$(document).ready(function() {
	$('#content').removeClass('fullwidth');

	$('.triggerFull').click(function() {
		$('#content').removeClass('fullwidth').delay(10).queue(function(next) {
			$(this).addClass('fullwidth');

			next();
		});

		return false;
	});
});

// 演示三
$(document).ready(function() {
	$('#loadbar').removeClass('ins');

	$('.triggerBar').click(function() {
		$('#loadbar').removeClass('ins').delay(10).queue(function(next) {
			$(this).addClass('ins');

			next();
		});
		return false;
	});
});