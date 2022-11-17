(() => {
	const refs = {
		openMenuBtn: document.querySelector("[data-menu-btn-open]"),
		closeMenuBtn: document.querySelector("[data-menu-btn-close]"),
		menuItem: document.querySelector("[data-menu-item]"),
		menuItem1: document.querySelector("[data-menu-item-1]"),
		menuItem2: document.querySelector("[data-menu-item-2]"),
		menuItem3: document.querySelector("[data-menu-item-3]"),
		menu: document.querySelector("[data-menu]"),
	};

	refs.openMenuBtn.addEventListener("click", toggleMenu);
	refs.closeMenuBtn.addEventListener("click", toggleMenu);
	refs.menuItem.addEventListener("click", toggleMenu);
	refs.menuItem1.addEventListener("click", toggleMenu);
	refs.menuItem2.addEventListener("click", toggleMenu);
	refs.menuItem3.addEventListener("click", toggleMenu);

	function toggleMenu() {
		refs.menu.classList.toggle("is-open");
	}
})();