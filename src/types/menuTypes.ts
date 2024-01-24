type BreakfastItem = 'Base' | 'Egg Toast' | 'Pancakes';
type DrinksItem = 'Choco Smoothie' | 'Mango Shake' | 'Strawberry Milkshake';
type LunchItem = 'Burger' | 'Chicken' | 'Spaghetti';
type SidesItem = 'Chicken Tenders' | 'Fish and Chips' | 'Fries';

export interface MenuInterface {
	breakfast: BreakfastItem[];
	drinks: DrinksItem[];
	lunch: LunchItem[];
	sides: SidesItem[];
}

export type displayMenuListType = keyof MenuInterface | 'All';
