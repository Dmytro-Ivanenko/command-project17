// Модальне меню навігації
(() => {
	const mobileMenu = document.querySelector(".js-menu-container");
	const openMenuBtn = document.querySelector(".js-open-menu");
	const closeMenuBtn = document.querySelector(".js-close-menu");

	// Navigation for mobilee const
	const closeByHome = document.querySelector(".js-closeByHome");
	const closeByAboutAs = document.querySelector(".js-closeByAboutAs");
	const closeByHowItMade = document.querySelector(".js-closeByHowItMade");
	const closeByProducts = document.querySelector(".js-closeByProducts");
	const closeByContact = document.querySelector(".js-closeByContact");

	const toggleMenu = () => {
		const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true" || false;
		openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
		mobileMenu.classList.toggle("is-open");

		const scrollLockMethod = !isMenuOpen ? "disableBodyScroll" : "enableBodyScroll";
		bodyScrollLock[scrollLockMethod](document.body);
	};

	openMenuBtn.addEventListener("click", toggleMenu);
	closeMenuBtn.addEventListener("click", toggleMenu);
	closeByHome.addEventListener("click", toggleMenu);
	closeByAboutAs.addEventListener("click", toggleMenu);
	closeByHowItMade.addEventListener("click", toggleMenu);
	closeByProducts.addEventListener("click", toggleMenu);
	closeByContact.addEventListener("click", toggleMenu);

	// Close the mobile menu on wider screens if the device orientation changes
	window.matchMedia("(min-width: 1200px)").addEventListener("change", e => {
		if (!e.matches) return;
		mobileMenu.classList.remove("is-open");
		openMenuBtn.setAttribute("aria-expanded", false);
		bodyScrollLock.enableBodyScroll(document.body);
	});
})();
