$(document).ready(function() {

	$(window).on("load" ,function() {
		$(".header1").hide();
		$("#facebooklink").hide();
		$("#home").css("sepia","0.9")
    	$(".header1").fadeIn(2000);
	});    
	$(window).on("load" ,function() {
		$("#facebooklink").fadeIn(5000).delay(20000);
	});
	$(window).on("load" ,function() {
		$(".aboutus1").hide();
		$(".aboutus1").delay(3000).slideDown(2000).delay(10000).slideUp(2000);
	});
	$(window).on("load" ,function() {
		$(".aboutus2").hide();
		$(".aboutus2").delay(10000).slideDown(2000).delay(10000).slideUp(2000);
	});

});
