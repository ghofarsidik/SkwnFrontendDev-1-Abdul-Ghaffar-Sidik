$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    centerMode: false, // Disable center mode
    onInit: function(slick) {
      $('.slick-slide').eq(0).addClass('slick-current');
    },
    onAfterChange: function(event, slick, currentSlide) {
      $('.slick-current').removeClass('slick-current');
      $('.slick-slide').eq(currentSlide).addClass('slick-current');
    }
  });
});
