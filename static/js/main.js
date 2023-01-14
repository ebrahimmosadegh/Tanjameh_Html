jQuery(document).ready(function($) {
    var owl_animIndex = $('.animIndex');
    $('.animIndex').owlCarousel({
      items: 1,
      loop: false,
      nav:true,
      rtl:true,
      dots:false,
      animateOut: 'fadeOut',
      lazyLoad:true,
      mouseDrag:false,
      touchDrag:false,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      margin: 10,
      navText : ['<i class="fa-solid fa-arrow-right-long"></i>','<i class="fa-solid fa-arrow-left-long"></i>'],
      navContainer: '.index-owl-nav',
    });
var btn_play=$('.btn-play')
var btn_stop=$('.btn-stop')
    $('.play').on('click',function(){
owl_animIndex.trigger('play.owl.autoplay',[3000]);
btn_play.hide();
btn_stop.fadeIn(500);
})
$('.stop').on('click',function(){
owl_animIndex.trigger('stop.owl.autoplay');
btn_stop.hide();
btn_play.fadeIn(500);
})
  });