// const swiperTop = new Swiper('.top-slider-container', {
//     // Optional parameters
//     direction: 'vertical',
//     slidesPerView: 1,
//     // speed: 650,
//     loop: true,
//     // autoplay: true,
//     // effect: "flip",
//     // If we need pagination
//     // pagination: {
//     //   el: '.swiper-pagination',
//     // },
//   });

//   const swiperBottom = new Swiper('.bottom-slider-container', {
//     // Optional parameters
//     direction: 'vertical',
//     slidesPerView: 1,
//     // speed: 650,
//     loop: true,
//     // autoplay: true,
//     // effect: "flip",
//     // If we need pagination
//     // pagination: {
//     //   el: '.swiper-pagination',
//     // },
//   });


$(function () {

  var duration = 500;
  var slides = $(".slider .block").length;
  var i = 1;

    // $.each($('.slider .block'), function (i, el) {        
    //   $(el).addClass('active');
    // });

  // Slide the images

  function slide() {
    if (i <= slides) {

      var imagelocation = ".slider .block:nth-child(" + i + ") img";
      // var navlocation = ".nav a:nth-child(" + i + ")";

      $(imagelocation).siblings().removeClass("active animated flipInX");
      $(imagelocation).addClass("active animated flipInX");

      // $(navlocation).siblings().removeClass("navActive");
      // $(navlocation).addClass("navActive");

    }
    if (i == 0) {
      i = slides;
    }
    if (i < 0) {
      i = 0;
    }
  }

  // Add navigation blips

  // var blips = 0;

  // for (var nav = 0; nav < slides; nav++) {
  //   $(".nav").append('<a href="#"></a>');
  // }

  // $(".nav a:first-child").addClass("navActive");

  // Configure the next/prev buttons

  // $('.next').click(function () {

  //   clearInterval(timer);

  //   if (i == slides) {
  //     i = 1;
  //   } else {
  //     i++
  //   }

  //   slide();
  //   console.log(i);
  // })

  // $('.prev').click(function () {

  //   clearInterval(timer);

  //   if (i == 1) {
  //     i = slides;
  //   } else {
  //     i--
  //   }

  //   slide();
  //   console.log(i);
  // })

  // Autoplay

  timer = setInterval(function () {
    i++;

    if (i > slides) {
      i = 1;
    }
    slide();
  }, duration);
});

jQuery(document).ready(function($) {

  //Count nr. of square classes
  var countSquare = $('.front-to-right').length;
  var countSquare2 = $('.front-to-left').length;

  //For each Square found add BG image
  for (i = 0; i < countSquare; i++) {
    var firstImage1 = $('.front-to-right').eq([i]);
    var secondImage1 = $('.back-to-left').eq([i]);
    
    var getImage = firstImage1.attr('data-image');
    var getImage2 = secondImage1.attr('data-image');
    
    firstImage1.css('background-image', 'url(' + getImage + ')');
    secondImage1.css('background-image', 'url(' + getImage2 + ')');
  }
  
  for (i = 0; i < countSquare2; i++) {
    
    var firstImage2 = $('.front-to-left').eq([i]);
    var secondImage2 = $('.back-to-right').eq([i]);
    var getImage = firstImage2.attr('data-image');
    var getImage2 = secondImage2.attr('data-image');
    firstImage2.css('background-image', 'url(' + getImage + ')');
    secondImage2.css('background-image', 'url(' + getImage2 + ')');
  }
});


let cards = document.querySelectorAll('.square-flip');


for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('mouseenter', hoverHandler, false);
  cards[i].addEventListener('mouseleave', hoverHandler, false);
}

function hoverHandler(e) {
        for (var i = 0; i < cards.length; i++) {
          const elem = cards[i];

          if (e.type == "mouseenter"){
            elem.classList.add("active");
          } else {
            elem.classList.remove("active");
          }
        }
}