$(document).ready(function () {

  $('.popular-products-slider').slick(
    {
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button class="popular-products-slider-prev-btn"><img src="assets/images/arrow-black-left.svg" alt="arrow left"></button>',
      nextArrow: '<button class="popular-products-slider-next-btn"><img src="assets/images/arrow-black-right.svg" alt="arrow next"></button>',
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 2,
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrows: false,
          }
        }
      ]
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
    $($(this).parents('.mobile-wrapper').siblings().find('div')).removeClass('content-item-active');
    $(this).addClass('tab-active');
    $($(this).attr('href')).addClass('content-item-active');
    $('.slick-slider').slick('setPosition');
  });

  $('.favorite').on('click', function (e) {
    $(this).toggleClass('favorite-active');
  });

  $('.filter-style').styler();

  $('.filter-item-drop').on('click', function (e) {
    $(this).toggleClass('filter-item-drop-active');
    $(this).next().slideToggle();
  });

  $('.extra-options').on('click', function (e) {
    $(this).toggleClass('extra-options-active');
    $(this).next().slideToggle();
  });

  $('.catalog-filters-btn-grid').on('click', function (e) {
    $(this).addClass('catalog-filters-btn-active');
    $('.catalog-filters-btn-line').removeClass('catalog-filters-btn-active');
    $('.product-item-wrapper').removeClass('product-item-wrapper-list');
  });

  $('.catalog-filters-btn-line').on('click', function (e) {
    $(this).addClass('catalog-filters-btn-active');
    $('.catalog-filters-btn-grid').removeClass('catalog-filters-btn-active');
    $('.product-item-wrapper').addClass('product-item-wrapper-list');
  });

  $(".js-range-slider").ionRangeSlider({
    //hide_min_max: true,
    hide_from_to: true
  });

  $('.header-menu-button').on('click', function (e) {
    $('.mobile-menu-list').toggleClass('mobile-menu-list-active');
  });

  $(function () {
    $("#productCardRating").rateYo({
      ratedFill: "#1C62CD",
      normalFill: "#C4C4C4",
      spacing: "7px"
    });
  });

  $('.footer-top-title-drop').on('click', function (e) {
    $(this).next().slideToggle();
    $(this).toggleClass('footer-top-title-drop-active');
  });

  $('.aside-button').on('click', function (e) {
    $(this).next().slideToggle();
  });

});
