const swiper = new Swiper('.advantages__slider', {
	// Optional parameters
	direction: 'horizontal',
	grabCursor: false,
	slidesPerView: 3,
	speed: 250,
	spaceBetween: 20,
	loop: true,
	autoplay: true,
	// If we need pagination
	pagination: {
		el: '.custom-pagination',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		920: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		1279: {
			slidesPerView: 3,
			spaceBetween: 20
		},
	}
});