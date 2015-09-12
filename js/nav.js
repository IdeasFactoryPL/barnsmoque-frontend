$(document).ready(function() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height() - $('nav').height() && $(window).width() > 900) {
      $('nav').addClass('navbar-fixed');
      $('#o_restauracji').addClass('add_margin_to_section');
    }
    if ($(window).scrollTop() < $(window).height() - $('nav').height() + 1) {
      $('nav').removeClass('navbar-fixed');
      $('#o_restauracji').removeClass('add_margin_to_section');
    }
  });
});