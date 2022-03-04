// -----------------------------------------------
// -------------SVG FILL SCRIPT-------------------
// -----------------------------------------------

$(function() {
  $('img.img-svg').each(function(){
      var $img = $(this);
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');
      $.get(imgURL, function(data) {
      var $svg = $(data).find('svg');
      if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
      }, 'xml');
  });
});

// -----------------------------------------------
// ---------------HEADER SLIDER-------------------
// -----------------------------------------------

const swiper = new Swiper('.header-slider', {
    // Optional parameters
    direction: 'horizontal',
    grabCursor: true,
    slidesPerView: 1,
    speed: 1050,
    // loop: true,
    // autoplay: true,
    effect: "cube",
    cubeEffect: {
        shadow: false,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.8,
      },
    // If we need pagination
    pagination: {
      el: '.custom-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.action-elipse-next',
      prevEl: '.action-elipse-prev',
    }
  });
  
// -----------------------------------------------
// -----------HEADER NAV SCROLL-------------------
// -----------------------------------------------

(function() {

  'use strict';

  var m = document.querySelector(".header__content"),
    h = document.querySelector(".header__nav"),
    sidebarContent = document.querySelector(".social-bar__list"),
    hHeight;

  function onScroll() {

    window.addEventListener("scroll", callbackFunc, 200);

    function callbackFunc() {
      var y = window.pageYOffset;
      if (y > 50) {
        sidebarContent.style.cssText = `
        animation: fadeIn 0.8s linear;
        margin-top: 13px;
        transition: margin-top 0.8s linear;
        `;
        h.classList.add("on-scroll");
      } else {
        h.classList.remove("on-scroll");
        sidebarContent.style.cssText = `
        margin-top: 35px;
        transition: margin-top 0.8s linear;
        `;
      }
    }
  }

  window.onload = function() {
    onScroll();
  };
})();

// -----------------------------------------------
// -----------CIRCLE MAGIC ROTATION---------------
// -----------------------------------------------


let circleBtns = document.querySelectorAll('.circle-btn'),
    circleParent = document.querySelector('.circle-parent'),
    descrps = document.querySelectorAll('.descr-block');

circleBtns.forEach((btn, i) => {
  btn.addEventListener('click', function(e) {
    hideTabContent();
    setActiveDescr(i);

    // if (circleParent.getAttribute('style')) {
    //   circleParent.style.removeProperty('transform');
    //   circleParent.style.removeProperty('transition-duration');
    // } else {
    //   setCircleAnimation();
    // }
  });

  
  
});



function setActiveBtn(i) {
  circleBtns[i].classList.add('active');
}

function setActiveDescr(i) {
  descrps[i].classList.add('active');  
}

function hideTabContent() {
  descrps.forEach(descr => {
    descr.classList.remove('active');
  });

  circleBtns.forEach(btn => {
      btn.classList.remove('active');
  });
}

circleParent.addEventListener('click', function(e){
  activeClassReset();

  let target = e.target;

  targetSetActiveClass(target);
  setActiveIcon(target);

});


// Анимация родительского круга
function setCircleAnimation() {
  circleParent.style.cssText = `
    transform: rotate(360deg);
    transition-duration: 1s;
  `;

  setTimeout(clearStyle, 900);
}

// Сброс активной кнопки
function activeClassReset() {
  circleBtns.forEach(btn => {
    btn.classList.remove('active');
  });
}

// Вешаем активный класс на кнопку
function targetSetActiveClass(target) {
  if (target.classList.contains('circle-btn')) {
    target.classList.add('active');
  } else if (target.parentNode.className == 'circle-btn') {
    target.parentNode.classList.add('active');
  }
}

// Выводим новую центральную иконку
function setActiveIcon(target) {
  let activeBtn = document.querySelector('.circle-btn.active'),
      activeBtnIcon = activeBtn.querySelector('i').classList.value,
      parentCenteredIcon = circleParent.querySelector("[data-element]");

  parentCenteredIcon.classList.value = activeBtnIcon;
}

// Очищаем атрибут стилей
function clearStyle() {
  circleParent.removeAttribute("style");
}

