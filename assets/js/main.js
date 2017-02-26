(function(){

	$(".video-modal").hide();



	$("#play").on('click', function(){

		$(".video-modal").fadeIn();
	});

	$("#esc").on('click', function(){

		$(".video-modal").fadeOut();
	});


})();
