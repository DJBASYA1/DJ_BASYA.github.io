$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
});

new WOW().init();



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
