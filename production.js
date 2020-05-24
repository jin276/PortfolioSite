$(function() {
  
  //--- sidebar ---//
  let $sideBar = $('.side-bar-menu');
  $('.button').on('click', function() {
    $(this).toggleClass('current');
    $sideBar.stop().toggleClass('current');
  });
  $sideBar.on('click', function() {
    $sideBar.stop().toggleClass('current');
    $('.button').toggleClass('current');
  });
  $('.side-bar-menu a').click(function() {
    $('.side-bar-menu').toggleClass('current');
    $('.button').toggleClass('current');
  });
});