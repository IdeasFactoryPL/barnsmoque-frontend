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
    }, 500);

    $('nav').css({
   		display: "block"
   		// position: "fixed"
    });
    $('body').animate({
    	left: "285px"
    }, 500);
    $('.menu_button').animate({
    	left: '-60px'
    });
    $.fn.animatescroll.defaults = {        
        easing:"swing",
        scrollSpeed:800,
        padding:0,
        element:"html,body"
    };
});
/* Then push them back */
$('.close_nav').click(function() {
    $('nav').animate({
    	left: "-285px"
    }, 500);
    $('nav').css({
    	display: "none"
    });
    $('body').animate({
    	left: "0px"
    }, 500);
    $('.navbar-fixed').css({
    	left: "0px"
    });
    $('.menu_button').animate({
    	left: '15px'
    });
});
$('li').click(function() {
	if($(window).width() <= 900){
	    $('nav').animate({
	    	left: "-285px"
	    }, 500);
	    $('body').animate({
	    	left: "0px"
	    }, 500);
	    $('.menu_button').animate({
	    	left: '15px'
	    });
	}
});

$(window).resize(function() {
	if($(window).width() > 900){
		$('nav').css({
	   		display: "block",
	   		position: "fixed",
	   		left: '0px'
	    });
	    $('.menu_button').animate({
			left: '-60px'
	    }, 500);
	    $('nav').addClass('navbar-fixed');
	    $.fn.animatescroll.defaults = {
	        easing:"swing",
	        scrollSpeed:800,
	        padding:61,
	        element:"html,body"
	    };
	}else{
		$('nav').css({
	   		display: "none",
	   		position: "fixed"
	    });
	    $('.menu_button').animate({
	    	left: '15px'
	    }, 500);
	    $('nav').removeClass('navbar-fixed');
        $.fn.animatescroll.defaults = {
	        easing:"swing",
	        scrollSpeed:800,
	        padding:0,
	        element:"html,body"
	    };
	}
});