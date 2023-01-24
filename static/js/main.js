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
  loop: false,
  nav:true,
  rtl:true,
  lazyLoad:true,
  dots:false,
  navText : ['<i class="fa-solid fa-arrow-right"></i>','<i class="fa-solid fa-arrow-left"></i>'],
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
$('.owl-autowidth').owlCarousel({
  autoWidth:true,
  loop: false,
  nav:true,
  rtl:true,
  lazyLoad:true,
  dots:false,
  navText : ['<i class="fa-solid fa-arrow-right"></i>','<i class="fa-solid fa-arrow-left"></i>'],
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

// change button click brand follow
$(document).on('click', '.clike-follow', function() {
  if ( $(this).hasClass( "notfollow" ) ) {
    $(this).removeClass("notfollow")
    $(this).html('<i class="fa-solid fa-check me-2"></i><span>دنبال شده</span>');
    const toastLiveExample = document.getElementById('brandFollowToast')
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  }
  if ( $(this).hasClass( "follow" ) ) {
    $(this).addClass("notfollow")
    $(this).html('<i class="fa-solid fa-plus me-2"></i><span>دنبال کنید</span>');
  }
  $(this).toggleClass("follow");
});

// brand search autocomplete
function brand_search(){
  const search = document.getElementById('brand_search')
const matchList = document.getElementById('brand_match_list')
// Search and filter
const searchBrand = async searchText => {
    const brands = ["adidas","puma","nike","boss","jean","ALDO","ASICS"];
    // Get matches to current text input
    let matchs = brands.filter(user => {
        const regex = new RegExp(`^${searchText}`, 'gi')
        return user.match(regex)
    })
    if (searchText.length === 0) {
        matchs = []
        matchList.innerHTML = ''
    }
    // Output
    outputHtml(matchs);
}
const outputHtml = matchs => {
    if (matchs.length > 0) {
        const html = matchs.map(match => `
            <div class="ms-3 py-2 d-flex border-bottom align-items-center">
              <span class="">${match}</span>
              <button class="btn border-1 rounded-0 btn-outline-dark ms-auto d-flex align-items-center clike-follow notfollow"><i class="fa-solid fa-plus me-2"></i><span>دنبال کنید</span></button>
          </div>
        `).join('')
        matchList.innerHTML = html
    }
}
search.addEventListener('input', () => searchBrand(search.value))
}

// clear icon in input
$(".clearable").each(function() {
  const matchList = document.getElementById('brand_match_list')
  const $inp = $(this).find("input:text"),
  $cle = $(this).find(".clearable__clear");
  $inp.on("input", function(){
  $cle.toggle(!!this.value);
});
$cle.on("touchstart click", function(e) {
  e.preventDefault();
  $inp.val("").trigger("input");
  matchList.innerHTML = ''
  });
});