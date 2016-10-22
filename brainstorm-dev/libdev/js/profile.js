'use strict';

$('.profile-container').on('click', 'img.edit', function () {
    $('.edit-info, .profile-container').addClass('active');
    $('.user-info').addClass('inactive');
});
$('.profile-container').on('click', 'img.save', function () {
    $('form').submit();
    $('.edit-info, .profile-container').removeClass('active');
    $('.user-info').removeClass('inactive');
});
$('header').on('click', 'a', function () {
    $('a').removeClass('active');
    $(this).addClass('active');
});
//# sourceMappingURL=profile.js.map
