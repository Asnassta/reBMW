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
      //scrollTop: blockOffset - 30
    }, 500);
  });
/*=========/smooth scroll=============*/

/*======Advantages (accordion)=============*/
  $(".advantages__name").on("click", function() {
    $(this).toggleClass("active");
    $(this).next().slideToggle(222);
    $(".advantages__name").not(this).next().slideUp();
    $(".advantages__name").not(this).removeClass('active');
  });
  /*==========/advantages (accordion)=========*/

/*======Price-box_roll (accordion)=============*/
  $(".price-box_roll .price-box__title").on("click", function() {
    $(this).next().slideToggle(111);
    $(this).parent().toggleClass("show");
  });
  /*==========/price-box_roll (accordion)=========*/

  /*======FAQ (accordion)=============*/
  $(".faq__question").on("click", function() {
    $(this).next().slideToggle(222);
    $(this).toggleClass("active");
  });
  /*==========/FAQ (accordion)=========*/

  /*======Calculator (check)=============*/
  $(".calculator-list__item").on("click", function() {
    $(this).toggleClass("checked");
  });
  /*==========/calculator (check)=========*/
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

new Swiper('.service__swiper', {
  enabled: false,
  slidesPerView: 'auto',
  breakpoints: {
      992: {
        enabled: false,
        slidesPerView: 'auto',
      },
      766: {
        enabled: true,
        slidesPerView: 2.3,
        spaceBetween: 15,
      },
      320: {
        enabled: true,
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
    },
});

new Swiper('.photogallery__slider', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  //observer: true,
  navigation: {
    nextEl: '.photogallery__arrow_next',
    prevEl: '.photogallery__arrow_prev',
  },
  breakpoints: {
    860: {
      slidesPerView: 3,
    },
    766: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1.15,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
  },
});

new Swiper('.footer-logos__inner', {
  slidesPerView: 'auto',
  spaceBetween: 79,
  breakpoints: {
    1100: {
      spaceBetween: 79,
    },
    860: {
      spaceBetween: 60,
    },
    300: {
      spaceBetween: 40,
    },
  },
});

new Swiper('.activity__inner', {
  enabled: false,
  slidesPerView: 'auto',
  breakpoints: {
      767: {
        enabled: false,
        slidesPerView: 'auto',
      },
      546: {
        enabled: true,
        loop: true,
        slidesPerView: 2,
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.slider-arrow_next',
          prevEl: '.slider-arrow_prev',
        },
      },
      300: {
        enabled: true,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.slider-arrow_next',
          prevEl: '.slider-arrow_prev',
        },
      },
    },
});

new Swiper('.info-slider__inner', {
  slidesPerView: 1,
  //autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider-arrow_next',
    prevEl: '.slider-arrow_prev',
  },
  loop: true,
});

new Swiper('.article-slider', {
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
});

new Swiper('.about-box__slider', {
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
});


