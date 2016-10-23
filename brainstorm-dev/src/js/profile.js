// click to edit profile information
$('.profile-container').on('click', 'img.edit', function() {
    $('.edit-info, .profile-container').addClass('active');
    $('.user-info').addClass('inactive');
});
// save new profile information
$('.profile-container').on('click', 'img.save', function() {
    $('form').submit();
    $('.edit-info, .profile-container').removeClass('active');
    $('.user-info').removeClass('inactive');
});
// nav and header event handlers 
$('nav.menu').on('click', 'a', function() {
  $('a').removeClass('active');
  $(this).addClass('active');
});
$('header').on('click', 'a.menu', function() {
  $(this).toggleClass('active');
  $('.drop-nav').toggleClass('active');
});
$('h1.logo').hover(
  function() {
  $('.lightning').css('display', 'block');
  $('.storm').css('display', 'none');
}, function() {
  $('.lightning').css('display', 'none');
  $('.storm').css('display', 'block');
});
