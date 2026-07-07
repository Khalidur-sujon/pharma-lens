import { CalendarDays } from "lucide-react";
import {
	DATE_FILTERS,
	useDateFilterStore,
} from "../../../shared/store/dateFilterStore";

export default function DateFilter() {
	const { activeFilter, setActiveFilter } = useDateFilterStore();

	const activeIndex = DATE_FILTERS.findIndex(
		(filter) => filter.value === activeFilter,
	);

	return (
		<div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1 shadow-sm">
			<div className="px-3 text-slate-500">
				<CalendarDays size={17} />
			</div>

			<div className="relative flex">
				<div
					className="absolute top-0 bottom-0 rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 ease-out"
					style={{
						width: "52px",
						transform: `translateX(${activeIndex * 52}px)`,
					}}
				/>

				{DATE_FILTERS.map((filter) => (
					<button
						key={filter.value}
						onClick={() => setActiveFilter(filter.value)}
						className={`relative z-10 flex h-8 w-13 items-center justify-center rounded-lg text-sm font-medium transition-colors duration-300 active:scale-95 hover:cursor-pointer ${
							activeFilter === filter.value
								? "text-blue-600"
								: "text-slate-500 hover:text-slate-900"
						}`}
					>
						{filter.label}
					</button>
				))}
			</div>
		</div>
	);
}
