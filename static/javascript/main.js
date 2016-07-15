// Homepage Landing Video

	// $('.landing-block').vide({
	// 	mp4: /static/files/showreel,
	// 	// webm: path/to/video2,
	// 	// ogv: path/to/video3,
	// 	poster: /static/files/showreel-poster
	// }

// Header

	$("header nav").height($("header a.logo").height());

// Hero
	
	$("#hero .wrapper").height($("#hero").height());

	$(".volume-toggle i").click(function(){
		if($("video").prop('muted') == false) {
			$("video").prop('muted', true);
			$(this).removeClass("fa-volume-up");
			$(this).addClass("fa-volume-off");
		} else {
			$("video").prop('muted', false);
			$(this).removeClass("fa-volume-off");
			$(this).addClass("fa-volume-up");
		}
	});

// Case Study

	$("#case .image").height(
		$(this).siblings(".content").height()
	);

	$("#case section > *").matchHeight(); 