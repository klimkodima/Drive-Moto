$(document).ready(function () {

  $('.popular-products-slider').slick(
    {
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button class="popular-products-slider-prev-btn"><img src="assets/images/arrow-black-left.svg" alt="arrow left"></button>',
      nextArrow: '<button class="popular-products-slider-next-btn"><img src="assets/images/arrow-black-right.svg" alt="arrow next"></button>',
    }
  );

  const swiper1 = new Swiper('.banner-section-slider', {
    direction: 'horizontal',
    //loop: true,
    pagination: {
      el: '.swiper-pagination1',
      //type: "progressbar",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  $('.tab').on('click', function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass('tab-active');
    $($(this).parent().siblings().find('div')).removeClass('content-item-active');
    $(this).addClass('tab-active');
    $($(this).attr('href')).addClass('content-item-active');
  });

  $('.favorite').on('click', function (e) {
    $(this).toggleClass('favorite-active');
  });

  $('.filter-style').styler();

  $('.filter-item-drop').on('click', function (e) {
    $(this).toggleClass('filter-item-drop-active');
    $(this).next().slideToggle();
  });

  $(".js-range-slider").ionRangeSlider({
    //hide_min_max: true,
    hide_from_to: true
 });

});
