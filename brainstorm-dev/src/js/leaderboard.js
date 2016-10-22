$(document).ready(function() {

$('header').on('click', 'a', function() {
  $('a').removeClass('active');
  $(this).addClass('active');
});

});
