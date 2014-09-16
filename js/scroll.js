$('#about-link').click(function(e) {
    $('#about-container').ScrollTo({
        duration: 500,
        easing: 'linear'
    });
});

$('#services-link').click(function(e) {
    $('#services-container').ScrollTo({
    	duration: 500,
    	easing: 'linear'
    });
});

$('#pricing-link').click(function(e) {
    $('#pricing-container').ScrollTo({
    	duration: 500,
    	easing: 'linear'
    });
});

$('#gallery-link').click(function(e) {
    $('#gallery-container').ScrollTo({
    	duration: 500,
    	easing: 'linear'
    });
});

$('#gallery-link2').click(function(e) {
    $('#gallery-container').ScrollTo({
        duration: 500,
        easing: 'linear'
    });
});

$('#contact-link').click(function(e) {
    $('#contact-container').ScrollTo({
        duration: 500,
        easing: 'linear'
    });
});

$('#contact-link2').click(function(e) {
    $('#contact-container').ScrollTo({
        duration: 500,
        easing: 'linear'
    });
});

$('.nav a').on('click', function(){
    if($('.navbar-toggle').css('display') !='none'){
        $(".navbar-toggle").trigger( "click" );
    }
});