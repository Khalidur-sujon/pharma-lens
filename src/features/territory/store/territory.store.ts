import { create } from "zustand";

export interface UpazilaInfo {
	name: string;
	orders: number;
	revenue: number;
	topMedicines: string[];
}

interface TerritoryStore {
	selected: UpazilaInfo | null;
	isOpen: boolean;

	open: (data: UpazilaInfo) => void;
	close: () => void;
}

export const useTerritoryStore = create<TerritoryStore>((set) => ({
	selected: null,
	isOpen: false,

	open: (data) =>
		set({
			selected: data,
			isOpen: true,
		}),

	close: () =>
		set({
			isOpen: false,
		}),
}));
