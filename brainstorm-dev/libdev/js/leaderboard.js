'use strict';

$(document).ready(function () {

  $('nav.menu').on('click', 'a', function () {
    $('a').removeClass('active');
    $(this).addClass('active');
  });

  $('header').on('click', 'a.menu', function () {
    $(this).toggleClass('active');
    $('.drop-nav').toggleClass('active');
  });

  function getRank() {
    $('li.player:nth-child(1)').children('p.rank').text('1');
    $('li.player:nth-child(2)').children('p.rank').text('2');
    $('li.player:nth-child(3)').children('p.rank').text('3');
    $('li.player:nth-child(4)').children('p.rank').text('4');
    $('li.player:nth-child(5)').children('p.rank').text('5');
  }

  getRank();
});
//# sourceMappingURL=leaderboard.js.map
