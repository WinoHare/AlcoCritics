import { Alcohol } from '@prisma/client';

enum SortType {
	RateUp,
	RateDown,
	PriceUp,
	PriceDown,
}

enum LoadingStatus {
	None,
	Loading,
	Idle,
	Failed,
}

const AlcoholType = {
	ALL: 'ALL',
	BEER: 'BEER',
	WHISKEY: 'WHISKEY',
	WINO: 'WINO',
	GIN: 'GIN',
	COCKTAIL: 'COCKTAIL',
	VODKA: 'VODKA',
	LIQUOR: 'LIQUOR',
};

enum ModalType {
	None,
	Create,
	Update,
	Delete,
}

export interface Drink {
	id: string;
	title: string;
	author_id: string;
	taste: string;
	type: string;
	price: number;
	image_path: string;
	description: string;
	rate: number;
}
export interface DrinkWithAuthor extends Drink {
	author_email: string;
	author_name: string;
	author_image: string;
	user_rate: number | null;
}

export { SortType, AlcoholType, LoadingStatus, ModalType };
