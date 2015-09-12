$('#menu .wrapper div figure').hover(function(){
	$(this).children("img").addClass("figcaption_hover");
	$(this).children("figcaption").addClass("figcaption_hover");
}, function() {
	$(this).children("img").removeClass("figcaption_hover");
	$(this).children("figcaption").removeClass("figcaption_hover");
});

$('.menu_button').click(function() {
    $('nav').animate({
    	left: "0px"
    }, 200);
    $('body').animate({
    	left: "285px"
    }, 200);
    $.fn.animatescroll.defaults = {        
        easing:"swing",
        scrollSpeed:800,
        padding:0,
        element:"html,body"
    };
});
/* Then push them back */
$('.icon-close').click(function() {
    $('nav').animate({
    	left: "-285px"
    }, 200);
    $('body').animate({
    	left: "0px"
    }, 200);
});
$('li').click(function() {
    $('nav').animate({
    	left: "-285px"
    }, 200);
    $('body').animate({
    	left: "0px"
    }, 200);
});
