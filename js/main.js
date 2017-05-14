$(document).ready(function(){
	 
	 //fixed scroll header 
	 $(window).scroll(function(){
	 	if ($(window).scrollTop() > 20) {
	 		$('.page-header').addClass('page-header-scroll');
	 	} else {
	 		$('.page-header').removeClass('page-header-scroll');	
	 	}
	 });

	// toggle menu button
	$(window).resize(function() {
		if ($('body, html').width() > 750 ) {
			$('.nav-list').removeAttr('style')
		}
	});
	$('.close-mobile-nav').click(function() {
		$('.mobile-nav-list').slideToggle();
	});
	$('.close-mobile-nav').click(function() {
		$('.nav-btn').toggleClass('nav-close');
	});
	$(window).resize(function() {
		if ($('body, html').width() < 768 ) {
			$('.nav-list').addClass('mobile-nav-list')
		} else {
	 		$('.nav-list').removeClass('mobile-nav-list');	
	 	}
	});

	// popup hire us
	$('.hire').click(function() {
		$('.popup-hire-us').fadeIn(300);
	}); 
	$('.close-hire-us').click(function() {
		$('.popup-hire-us').fadeOut(300);
	});

	// scroll to services
	$('.nav-services').click(function() {
		$('html, body').animate({ 
			scrollTop: $('.our-services').offset().top
		 }, 1500);
	});

	// scroll to our works
	$('.btn-our-works, .nav-works').click(function() {
		$('html, body').animate({ 
			scrollTop: $('.our-works').offset().top
		 }, 1500);
	});
	// scroll to our team
	$('.nav-team').click(function() {
		$('html, body').animate({ 
			scrollTop: $('.our-team').offset().top
		 }, 1500);
 	});
 	
 	// scroll to contact
 	$('.nav-contact').click(function() {
 		$('html, body').animate({ 
 			scrollTop: $('.contact').offset().top
 		 }, 1500);
 	});
	
	// service-item appearance
	$('.service-item').addClass('hidden').viewportChecker({
		classToAdd: 'visible animated bounceInUp',
		offset: 100
	});
	
	// work-item appearance
	$('.work-item').addClass('hidden').viewportChecker({
		classToAdd: 'visible animated fadeInUp',
		offset: 200
	});

	//  comments slider
	$('.comments-list').slick({
 		autoplay:true,
 		slidesToShow: 1,
 		autoplaySpeed: 2500,
 		speed: 1000,
 		arrows: true,
 		dots: false
 	});	  		
 	
 	// team-list slider
 	$('.team-list').slick({
 		autoplay:true,
 		slidesToShow: 4,
 		autoplaySpeed: 2000,
 		speed: 700,
 		arrows: false,
 		dots: true,
 		responsive: [{
    		breakpoint: 768,
    			settings: {
     				slidesToShow: 2,
     			}    
  		}]
 	});  		
});

