// carousel index page
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
      autoplayTimeout:4000,
      autoplayHoverPause:true,
      margin: 10,
      navText : ['<i class="fa-solid fa-arrow-right"></i>','<i class="fa-solid fa-arrow-left"></i>'],
      navContainer: '.index-owl-nav',
    });
var btn_play=$('.btn-play')
var btn_stop=$('.btn-stop')
    $('.play').on('click',function(){
owl_animIndex.trigger('play.owl.autoplay',[4000]);
btn_play.hide();
btn_stop.fadeIn(500);
})
$('.stop').on('click',function(){
owl_animIndex.trigger('stop.owl.autoplay');
btn_stop.hide();
btn_play.fadeIn(500);
})
// owl center nonloop
$('.owl-center-nonloop').owlCarousel({
  // center: true,
  // stageOuter:'.owl-center-stage',
  loop: false,
  nav:true,
  rtl:true,
  dots:false,
  navText : ['<i class="fa-solid fa-arrow-right"></i>','<i class="fa-solid fa-arrow-left"></i>'],
      navContainer: '.index-owl-nav',
  margin: 10,
            responsive:{
    0:{
        items:2,
    },
    700:{
        items:4,
    },
    1000:{
        items:5
    }
}
});
  });

// validate for disabling form submissions if there are invalid fields
function validateForm() {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.newsletter-validation')
  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
  form.classList.add('was-validated')
    }, false)
  })
}

// scroll back to top
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});

// heart button like and dislike
$(".btn-heart").click(function() {
  if ( $(this).hasClass( "dislike" ) ) {
    $(this).removeClass("dislike")
    $(this).html('<i class="fa-solid fa-heart text-orange" aria-hidden="true"></i>');
  }
  if ( $(this).hasClass( "like" ) ) {
    $(this).addClass("dislike")
    $(this).html('<i class="fa-regular fa-heart" aria-hidden="true"></i>');
  }
  $(this).toggleClass("like");
});


