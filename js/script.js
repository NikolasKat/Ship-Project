$(document).ready(function(){
    $('.slider__inner').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-curs.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right-curs.svg"></button>'
    });
    $('.header__burger').click(function(event){
        $('header__burger,.header__list').toggleClass('active');
    });
  });

// console.log('Hello World');