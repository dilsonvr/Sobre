const menuButton = document.querySelector('[data-collapse-toggle="main-menu"]');
const menu = document.getElementById('main-menu');

if (menuButton && menu) {
	menuButton.addEventListener('click', () => {
		const isOpen = menu.classList.toggle('is-open');
		menuButton.setAttribute('aria-expanded', String(isOpen));
	});

	menu.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			menu.classList.remove('is-open');
			menuButton.setAttribute('aria-expanded', 'false');
		});
	});
}
