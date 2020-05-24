// $(function() {
//   $('.header-image').parallax({imageSrc: './img/books.jpg'});

//   //--- Scrolltop  https://designsupply-web.com/knowledgeside/2742/ ---//
//   let threshold = 300;
//   let $topLocation = $('.scroll-top');
//   $topLocation.css("bottom", "-100px");

//   $(window).on('scroll', function() {
//     if ($(this).scrollTop() > threshold) {
//       $topLocation.stop().css({"bottom": "30px"}, 500);
//     } else {
//       $topLocation.stop().css({"bottom": "-100px"}, 500);
//     }
//   });
//   $topLocation.on('click', function() {
//     $('body,html').animate({scrollTop: 0}, 500);
//     return false;
//   });

  
// });

$(function() {
  $('.header-image').parallax({imageSrc: './img/books.jpg'});

  $(window).scroll(function() {
    $('.scroll-top').each(function() {
      let elemPosi = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHei = $(window).height();
      if (scroll > elemPosi - windowHei + 100) {
        $(this).addClass('active');
      }
    });
  });
});