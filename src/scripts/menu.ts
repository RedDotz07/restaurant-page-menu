import { MenuInterface, displayMenuListType } from '../types/menuTypes';

const menuList = document.querySelector('#menu-list');

export const menu: MenuInterface = {
	breakfast: ['Base', 'Egg Toast', 'Pancakes'],
	drinks: ['Choco Smoothie', 'Mango Shake', 'Strawberry Milkshake'],
	lunch: ['Burger', 'Chicken', 'Spaghetti'],
	sides: ['Chicken Tenders', 'Fish and Chips', 'Fries'],
};

export function createMenu(title: string, description?: string) {
	if (menuList) {
		const heading = document.createElement('h1');
		const titleNode = document.createTextNode(title);
		heading.appendChild(titleNode);
		menuList.appendChild(heading);
	}
}
export function displayMenuList(selectedMenu: displayMenuListType = 'All') {
	if (menuList) {
		menuList.innerHTML = '';
		if (selectedMenu !== 'All') {
			const renderMenu = menu[selectedMenu];
			renderMenu.map((index) => createMenu(index));
		} else {
			Object.entries(menu).forEach(([_category, items]) => {
				items.map((index: string) => createMenu(index));
			});
		}
	}
}
