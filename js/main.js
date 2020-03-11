$(document).ready(function() {
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
  
  $('.menu-btn').on('click', function(e) {
      e.preventDefault;
      $(this).toggleClass('menu-btn_active');
  });
  
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
  
  new WOW().init();
});
