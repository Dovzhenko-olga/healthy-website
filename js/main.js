$(function () {
  $('.hero__movie').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.experts__movie-link').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.menu__burger-btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__burger-btn').toggleClass('active');
  });
});