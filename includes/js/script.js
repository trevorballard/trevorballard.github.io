$(function() {
	
	$('#alert-button').click(function(e) {
		
		e.preventDefault();
		
		$('#success-alert').slideDown();
	
	});

	$('[data-toggle="popover"]').popover();

	$('[data-toggle="tooltip"]').tooltip();

	// Allows the carousel to span screen width when browsing on small devices
	// 992 is min width for medium devices
	if($(window).width() < 768) {
		$('#carousel-col').removeClass('col-sm-12');
	}
	// Same as above, but works when resizing screen (otherwise need to refresh)
	$(window).on('resize', function() {
		var win = $(this); // this = window
		
		// If going from large to small
		if($(win).width() < 992) {
			$('#carousel-col').removeClass('col-sm-12');
		}

		// If going from small to large
		if($(win).width() >= 768) {
			$('#carousel-col').addClass('col-sm-12');
		}
	});
});