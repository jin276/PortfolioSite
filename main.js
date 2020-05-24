'use strict';

$(function() {
  $('.header-image').parallax({imageSrc: 'books.jpg'});
  $('.wrapper').parallax({imageSrc: "01.jpg"});

  let threshold = 300;
  let $topLocation = $('.scroll-top');
  $topLocation.css("bottom", "-100px");

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > threshold) {
      $topLocation.stop().css({"bottom": "30px"}, 2000);
    } else {
      $topLocation.stop().css({"bottom": "-100px"}, 2000);
    }
  });
  $topLocation.on('click', function() {
    $('body,html').animate({scrollTop: 0}, 300);
    // return false;
  });

  let value = location.hash;
  if (value) {
    $('body, html').stop().scrollTop(0);
    setTimeout(function() {
      let target = $(value);
      let position = target.offset().top;
      $('body, html').stop().animate({scrollTop: position}, 500);
    }, 100);
  } 
  
  $('a[href*="#"].link').on('click', function() {
      let speed = 400,
          href = $(this).attr('href'),
          target = $(href == "#" || href == "" ? "html" : href),
          position = target.offset().top;
          $('body, html').animate({scrollTop: position}, speed, "swing");
      return false;
  });

  //--- Sidebar ---//
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