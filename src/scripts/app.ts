import { displayMenuList } from './menu.js';
import { displayMenuListType } from '../types/menuTypes.js';

const buttons = document.querySelectorAll('button');
let currentActiveMenu = document.getElementById('All') as HTMLElement | null;

if (currentActiveMenu) {
	const currentActive: displayMenuListType =
		currentActiveMenu.id as displayMenuListType;

	currentActiveMenu.classList.add('active');
	displayMenuList(currentActive);
}

function handleMenuChange(event: Event) {
	if (currentActiveMenu) {
		currentActiveMenu.classList.remove('active');
	}

	currentActiveMenu = event.target as HTMLElement;
	currentActiveMenu.classList.add('active');

	const currentActive: displayMenuListType =
		currentActiveMenu.id as displayMenuListType;
	displayMenuList(currentActive);
}

buttons.forEach((button) => {
	button.addEventListener('click', handleMenuChange);
});
