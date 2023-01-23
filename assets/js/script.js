  function tabs(n)
{
  $('.tabs-nav a').removeClass('active');
  $('.tabs-nav a.t'+n).addClass('active');
  $('.tabs-block').fadeOut(0);
  $('.tabs-block.tab_'+n).fadeIn(111);
};

$(document).ready(function() {
  /*======Header__menu=============*/
  $(".header__burger").on("click", function() {
    $(".header-subnav").toggleClass('active');
    $("body").addClass("hidden");
  });

  $(".header-subnav__close").on("click", function() {
    $(".header-subnav").toggleClass('active');
    $("body").removeClass("hidden");
  });
  /*==========/header__menu=========*/

  /*======About-video (hide play)=============*/
  $(".about-video").on("click", function() {
    $(this).find(".about-video__icon").toggleClass("hide");
  });
  /*==========/about-video (hide play)=========*/

  /*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;
 
    $("html, body").animate ({
      scrollTop: blockOffset - 30
    }, 500);
  });
/*=========/smooth scroll=============*/

/*======Advantages (accordion)=============*/
  $(".advantages__name").on("click", function() {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
    $(".advantages__name").not(this).next().slideUp();
    $(".advantages__name").not(this).removeClass('active');
  });
  /*==========/advantages (accordion)=========*/
});

new Swiper('.certificates', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider-arrow_next',
    prevEl: '.slider-arrow_prev',
  },
  loop: true,
  breakpoints: {
    766: {
      slidesPerView: 1,
    },
    300: {
      slidesPerView: 1.6,
      spaceBetween: 40,
      centeredSlides: true,
    },
  },
});

new Swiper('.models__tab', {
  slidesPerView: 5,
  breakpoints: {
    991: {
      slidesPerView: 5,
    },
    766: {
      slidesPerView: 4,
    },
    300: {
      slidesPerView: 2.215,
      spaceBetween: 10,
    },
  },
});