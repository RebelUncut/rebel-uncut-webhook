// Homepage Landing Video

	// $('.landing-block').vide({
	// 	mp4: /static/files/showreel,
	// 	// webm: path/to/video2,
	// 	// ogv: path/to/video3,
	// 	poster: /static/files/showreel-poster
	// }

	$('.landing-block').vide({
		mp4: '/static/files/showreel',
		poster: '/static/files/showreel-poster'
	});

// Header

	$("header nav").height($("header a.logo").height());

// Hero
	
	$("#hero .wrapper").height($("#hero").height());

// Case Study

	$("#case .image").height(
		$(this).siblings(".content").height()
	);

	$("#case section > *").matchHeight(); 