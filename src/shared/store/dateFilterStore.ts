import { create } from "zustand";

export const DATE_FILTERS = [
	{ label: "3D", value: "3d" },
	{ label: "15D", value: "15d" },
	{ label: "30D", value: "30d" },
	{ label: "3M", value: "3m" },
	{ label: "6M", value: "6m" },
	{ label: "1Y", value: "1y" },
] as const;

export type DateFilterValue = (typeof DATE_FILTERS)[number]["value"];

interface DateFilterStore {
	activeFilter: DateFilterValue;
	setActiveFilter: (filter: DateFilterValue) => void;
}

export const useDateFilterStore = create<DateFilterStore>((set) => ({
	activeFilter: "30d",
	setActiveFilter: (filter) =>
		set({
			activeFilter: filter,
		}),
}));
