$(document).ready(function() {
  // preloader script
  $(window).on('load', function () {
    setTimeout(function() {
      $preloader = $('#load'),
        $loader = $preloader.find('div');
        $loader.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    },2500)
  });
  // end preloader script

  // smooth scroll and toTop button
  $('a[href^="#"').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({
       scrollTop:$(target).offset().top
    }, 1000);
    return false;
  });
  
  $(window).scroll(function() {
    if($(this).scrollTop() != 0)
       $('#toTop').fadeIn();
    else
       $('#toTop').fadeOut();
  });
  $('#toTop').click(function() {
    $('body, html').animate({
       scrollTop: 0
    }, 1000);
  });
  // end smooth scroll and toTop button

  // menu button
  
  // end menu button

  // skillBar script
  var target = $('.skillbar-wrap');
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;
  $(window).scroll(function() {
    var winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem) {
      $('.skillbar').each(function() {
        $(this).find('.skillbar-bar').animate({
          width:$(this).attr('data-percent')
        }, 4000)
      })
    }
  });
  // end skillBar script

  // WOW itinitialisation script
  new WOW().init();
  end WOW itinitialisation script
});
