$(function () {

  // var mixer = mixitup('.products__inner-box');

  if ($('.products__inner-box').length) {
    var mixer = mixitup('.products__inner-box');
  }

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });

  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  $('.icon-th-list').on('click', function () {
    $('.product__item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active');
  });
  $('.icon-th-large').on('click', function () {
    $('.product__item').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');
  });

  $('.product-one__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });


});