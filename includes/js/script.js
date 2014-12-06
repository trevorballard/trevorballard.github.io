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
});