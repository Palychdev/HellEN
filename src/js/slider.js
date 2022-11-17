new Swiper('.swiper-container', {

	navigation: {
		nextEl: '.right-arrow',
		prevEl: '.left-arrow'
	},

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		dynamicBullets: true,
		dynamicMainBullets: 3
	},

	loop: true,
	spaceBetween: 50,
	effect: 'coverflow',

});