$(function () {

	var duration = 500;
	var slides = $(".slider .block").length;
	var i = 1;

	// Slide the images

	function slide() {
		if (i <= slides) {
			var imagelocation = ".slider .block:nth-child(" + i + ") img";

			$(imagelocation).siblings().removeClass("active animated flipInX");
			$(imagelocation).addClass("active animated flipInX");

		}
		if (i == 0) {
			i = slides;
		}
		if (i < 0) {
			i = 0;
		}
	}

	// Autoplay

	timer = setInterval(function () {
		i++;

		if (i > slides) {
			i = 1;
		}
		slide();
	}, duration);
});

jQuery(document).ready(function ($) {

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

		if (e.type == "mouseenter") {
			elem.classList.add("active");
		} else {
			elem.classList.remove("active");
		}
	}
}

// Slide checking and rotating

// Получаем нужный элемент
var element = document.querySelector('.block');
let block;

var Visible = function (target) {
	// Все позиции элемента
	var targetPosition = {
		top: window.pageYOffset + target.getBoundingClientRect().top,
		left: window.pageXOffset + target.getBoundingClientRect().left,
		right: window.pageXOffset + target.getBoundingClientRect().right,
		bottom: window.pageYOffset + target.getBoundingClientRect().bottom
	},
		// Получаем позиции окна
		windowPosition = {
			top: window.pageYOffset,
			left: window.pageXOffset,
			right: window.pageXOffset + document.documentElement.clientWidth,
			bottom: window.pageYOffset + document.documentElement.clientHeight
		};

	if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
		targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
		targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
		targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
		// Если элемент полностью видно, то запускаем следующий код
		console.clear();
		console.log('Вы видите элемент :)');

		rotateToBackSide('.square-flip');

	} else {
		// Если элемент не видно, то запускаем этот код
		console.clear();
	};

	// 1. Step
	function rotateToBackSide(selector) {
		block = document.querySelectorAll(selector);


		setTimeout(function () {
			block.forEach(el => {
				el.classList.add('active');
			});

			setTimeout(function () {
				rotateToDefault(block);
			}, 2000);

		}, 2000);
	}

	// 2. Step
	function rotateToDefault(selector) {
		selector.forEach(element => {
			element.classList.remove('active');
		});
	}
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
	Visible(element);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible(element);