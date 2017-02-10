// StoutSource
console.log('%cNu zdorovo!', 'font-size: 32pt');

var $root = $('html, body');

$('.header__link').click(function () {
  $root.animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);

  $('.header__hamburger').removeClass('header__hamburger--active');
  $('.header__menu').removeClass('header__menu--mobile');
  return false;
});

$('.welcome__scroll').click(function () {
  $root.animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
  return false;
});

$('.header__hamburger').click(function () {
  $(this).toggleClass('header__hamburger--active');
  $('.header__menu').toggleClass('header__menu--mobile');
});
