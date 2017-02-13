// StoutSource
console.log('%cNu zdorovo!', 'font-size: 32pt');

const $root = $('html, body');
const headerMenu = $('.header__menu');
const hamburgerIcon = $('.header__hamburger');

$('.header__link').click(function () {
  $root.animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);

  hamburgerIcon.removeClass('header__hamburger--active');
  headerMenu.removeClass('header__menu--mobile');
  return false;
});

$('.welcome__scroll').click(function () {
  $root.animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
  return false;
});

$('.welcome__btn').click(function () {
  $root.animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
  return false;
});

hamburgerIcon.click(function () {
  $(this).toggleClass('header__hamburger--active');
  headerMenu.toggleClass('header__menu--mobile');
});
