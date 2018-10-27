$(document).ready(function() {

	$(window).on("load" ,function() {/*Home page events styling*/
		$(".header1").hide();
		$("#facebooklink").hide();
    	$(".header1").fadeIn(3000);
	});    
	$(window).on("load" ,function() {
		$("#facebooklink").delay(3000).fadeIn(5000);
	});

	$(window).on("load" ,function() {/*about page events styling*/
		$(".aboutus1").hide();
		$(".aboutus1").delay(1000).slideDown(2000);
	});
	$(window).on("load" ,function() {
		$(".aboutus2").hide();
		$(".aboutus2").delay(7000).slideDown(2000);
	});

	$(window).on("load" ,function() {/*encouragement to look at the media page*/
		$(".aboutmedia").hide();
		$(".aboutmedia").delay(10000).fadeIn(3000);
	});
	$(window).on("load" ,function() {
		$(".container").hide();
		$(".eventsmapcontainer").hide();
		$(".eventsmapcontainer").delay(3000).fadeIn(2000);
		$(".container").delay(1000).fadeIn(3000);
		
	});
	$(window).on("load" ,function () {
		$(".container").hide();
		$(".contactus").hide();
		$(".contactus").delay(3000).fadeIn(2000);
		$(".container").delay(1000).fadeIn(3000);

	});
	/*$(window).on("load" ,function() {/*Home page sepia effect for background*/ 
	/*	$("#events").addClass("sepia");*/
	/*	$("#events").removeClass("sepia").addClass("sepia1");*/
	/*	$("#events").removeClass("sepia1").addClass("sepia2");*/
	/*	$("#events").removeClass("sepia2").addClass("sepia3");*/
	/*	$("#events").removeClass("sepia3").addClass("sepia4");*/
	/*	$("#events").removeClass("sepia4").addClass("sepia5");*/
	/*	$("#events").removeClass("sepia5").addClass("sepia6");*/
	/*	$("#events").removeClass("sepia6").addClass("sepia7");*/
	/*	$("#events").removeClass("sepia7").addClass("sepia8");*/
	/*	$("#events").removeClass("sepia7").addClass("sepia8");*/
	

	});
/*});*/
