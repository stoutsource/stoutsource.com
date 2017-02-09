// StoutSource
console.log('%cNu zdorovo!', 'font-size: 32pt');

var $root = $('html, body');

$('a').click(function () {
  $root.animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
  return false;
});
