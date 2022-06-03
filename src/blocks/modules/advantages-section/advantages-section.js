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
	}
});