// 灰度效果
grayscale = function(pixels) {
	var d = pixels.data;

	for (var i = 0; i < d.length; i += 4) {
		var r = d[i],
			g = d[i + 1],
			b = d[i + 2];

		d[i] = d[i + 1] = d[i + 2] = (r + g + b) / 3;
	}

	return pixels;
}

// 复古效果
sepia = function(pixels) {
	var d = pixels.data;

	for (var i = 0; i < d.length; i += 4) {
		var r = d[i],
			g = d[i + 1],
			b = d[i + 2];

		d[i] = (r * 0.393) + (g * 0.769) + (b * 0.189); // red
		d[i + 1] = (r * 0.349) + (g * 0.686) + (b * 0.168); // green
		d[i + 2] = (r * 0.272) + (g * 0.534) + (b * 0.131); // blue
	}

	return pixels;
}

// 红色蒙版效果
red = function(pixels) {
	var d = pixels.data;

	for (var i = 0; i < d.length; i += 4) {
		var r = d[i],
			g = d[i + 1],
			b = d[i + 2];

		d[i] = (r + g + b) / 3; // 红色通道取平均值
		d[i + 1] = d[i + 2] = 0; // 绿色通道和蓝色通道都设为0
	}

	return pixels;
}

// 亮度效果
brightness = function(pixels, delta) {
	var d = pixels.data;

	for (var i = 0; i < d.length; i += 4) {
		d[i] += delta; // red
		d[i + 1] += delta; // green
		d[i + 2] += delta; // blue   
	}

	return pixels;
}

// 反转效果
invert = function(pixels) {
	var d = pixels.data;

	for (var i = 0; i < d.length; i += 4) {
		d[i] = 255 - d[i];
		d[i + 1] = 255 - d[i + 1];
		d[i + 2] = 255 - d[i + 2];
	}

	return pixels;
}