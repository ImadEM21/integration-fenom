$(document).ready(function() {
    $('.variable-width').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: false,
        arrows: true,
        mobileFirts: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              centerMode: true,
              variableWidth: false,
              arrows: true,
              mobileFirts: true,
              prevArrow: $('.prev'),
              nextArrow: $('.next'),
            }
          }
        ]
      });
      $('.variable1-width').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: false,
        arrows: true,
        mobileFirts: true,
        prevArrow: $('.prev1'),
        nextArrow: $('.next1'),
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              centerMode: true,
              variableWidth: false,
              arrows: true,
              mobileFirts: true,
              prevArrow: $('.prev1'),
              nextArrow: $('.next1'),
            }
          }
        ]
      });
});