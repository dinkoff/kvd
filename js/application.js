$(document).ready(function(){  
  // Mobile Checkbox add class to the body
  $('#toggle_nav').change(function() {
    if ($(this).is(':checked')) {
      $('body').addClass('navi_open');
    } else {
      $('body').removeClass('navi_open');
    }
  });

  // Toggle popup

  /*

  */
  var $popup_close = $('.popup_wrap .close_btn');



   
  $popup_close.on('click', function () {
    $("li").removeClass('active');
    history.go(-1);


  });
 

	// fancy scroll button
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
		  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
          scrollTop: target.offset().top
          }, 1000);
          return false;
        }
		  }
		});
  });
  
  $(document).on("click", function(event){
    if ($(event.target).closest(".active_pop .popup_cont").length === 0 && $(event.target).closest(".popup_wrap.active_pop").length === 1) {
        $('.popup_wrap').removeClass('active_pop');
        $('body').css('overflow-y', '');
        $('html').css('overflow-y', '');
    }
  });
  
  //Fixed HomePage
  jQuery(document).ready(function() {
    jQuery('.sticky_part').theiaStickySidebar({
      // Settings
      'minWidth': 992,
      'updateSidebarHeight': true,
      'defaultPosition': 'relative',
    });
  });
});


$(document).ready(function(){
  var $mainSlider = $('.thumbnail_slider');
  var $videoElements = $mainSlider.find('video');
  var videoIndex = 0;
  var lastVideoIndex = 0;

  $mainSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){

      $videoElements[lastVideoIndex].pause();
      $videoElements[nextSlide].play();
      lastVideoIndex = nextSlide;
  });

  $('.thumbnail_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.main_slider'
  });
  $('.main_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.thumbnail_slider',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
});

});

$(window).scroll(function(){
  if ($(this).scrollTop() > 60) {
     $('#header, .header').addClass('sticky');
  } else {
     $('#header, .header').removeClass('sticky');
  }
});

$(window).scroll(function(){
  if ($(window).width() < 992) {
    if ($(this).scrollTop() > 60) {
     $('.home').addClass('visible');
    } else {
      $('.home').removeClass('visible');
    }
  } 
});


