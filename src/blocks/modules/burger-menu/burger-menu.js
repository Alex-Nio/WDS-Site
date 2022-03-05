
let burgerBtn = document.querySelector('.burger-nav__btn'),
	mobileMenuBg = document.querySelector('.mobile-menu__bg');

burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('open-menu');
	mobileMenuBg.classList.toggle('absolute-bg');
});
