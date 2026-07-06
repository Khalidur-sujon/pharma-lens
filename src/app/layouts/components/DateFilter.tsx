import { useState } from "react";
import { CalendarDays } from "lucide-react";

const dateFilters = [
	{ label: "3D", value: "3d" },
	{ label: "15D", value: "15d" },
	{ label: "30D", value: "30d" },
	{ label: "3M", value: "3m" },
	{ label: "6M", value: "6m" },
	{ label: "1Y", value: "1y" },
];

const activeIndexMap = {
	"3d": 0,
	"15d": 1,
	"30d": 2,
	"3m": 3,
	"6m": 4,
	"1y": 5,
};

export default function DateFilter() {
	const [activeFilter, setActiveFilter] = useState("30d");

	const activeIndex =
		activeIndexMap[activeFilter as keyof typeof activeIndexMap];

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

				{dateFilters.map((filter) => {
					const active = activeFilter === filter.value;

					return (
						<button
							key={filter.value}
							onClick={() => setActiveFilter(filter.value)}
							className={`relative z-10 flex h-8 w-13 items-center justify-center rounded-lg text-sm font-medium transition-colors duration-300 active:scale-95 ${
								active
									? "text-blue-600"
									: "text-slate-500 hover:text-slate-900"
							}`}
						>
							{filter.label}
						</button>
					);
				})}
			</div>
		</div>
	);
}
