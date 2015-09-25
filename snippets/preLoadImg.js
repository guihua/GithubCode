(function($) {
	var cache = [];

	$.preLoadImages = function() {
		var args_len = arguments.length;

		for (var i = args_len; i--; ) {
			var cacheImage = document.createElement('img');
			
			cacheImage.src = arguments[i];
			cache.push(cacheImage);
		}
	}
})(jQuery);

jQuery.preLoadImages("image1.gif", "/path/to/image2.png");