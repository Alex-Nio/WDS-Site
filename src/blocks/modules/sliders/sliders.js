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

// Slide checking and rotating by scroll tracking
let block,
	block_show = null;

function scrollTracking() {
	let wt = $(window).scrollTop();
	let wh = $(window).height();
	let et = $('.block').offset().top;
	let eh = $('.block').outerHeight();

	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
		if (block_show == null || block_show == false) {
			// console.log('Блок active в области видимости');
			rotateToBackSide('.square-flip');
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			// console.log('Блок active скрыт');
		}
		block_show = false;
	}
}

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

$(window).scroll(function () {
	scrollTracking();
});

$(document).ready(function () {
	scrollTracking();
});