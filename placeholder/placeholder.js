$(document).ready(function() {
	var supportPlaceholder = 'placeholder'in document.createElement('input');

	if (!supportPlaceholder) {
		$("input[type=text], textarea").each(function() {
			var input = $(this),
				defaultValue = input.attr("placeholder");

			if (input.val() == '') {
				input.val(defaultValue);
			}
		});

		$("input[type=text], textarea").focus(function(event) {
			var input = $(this),
				defaultValue = input.attr("placeholder");

			if (input.val() == defaultValue) {
				input.val('');
			}
		}).blur(function() {
			var input = $(this),
				defaultValue = input.attr("placeholder");

			if (input.val() == '') {
				input.val(defaultValue);
			}
		});
	}
});