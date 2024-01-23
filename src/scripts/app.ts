function loadPage(page: string) {
	const container = document.getElementById('app');
	if (!container) {
		return;
	}

	fetch(`pages/${page}.html`)
		.then((res) => res.text())
		.then((html) => {
			container.innerHTML = html;
		})
		.catch((err) => console.error('Error loading pagge', err));
}

document.addEventListener('DOMContentLoaded', () => {
	loadPage('home');
});

document.querySelectorAll('nav a').forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault();
		const page = link.getAttribute('href')?.replace('.html', '');
		if (page) {
			loadPage(page);
		}
	});
});
