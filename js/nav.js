$(document).ready(function() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height() - $('nav').height() && $(window).width() > 900) {
      $('nav').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < $(window).height() - $('nav').height() + 1) {
      $('nav').removeClass('navbar-fixed');
    }
  });
});