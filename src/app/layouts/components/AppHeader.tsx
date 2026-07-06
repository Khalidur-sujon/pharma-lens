import { useState } from "react";
import { Menu, Search, CircleUserRound, CalendarDays } from "lucide-react";

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

export default function AppHeader() {
	const [activeFilter, setActiveFilter] = useState("30d");

	const activeIndex =
		activeIndexMap[activeFilter as keyof typeof activeIndexMap];

	return (
		<header className="sticky top-0 z-50 h-16 border-b border-slate-200 bg-white/90 backdrop-blur">
			<div className="flex h-full items-center justify-between px-4 md:px-6">
				{/* Left */}
				<div className="flex items-center gap-3">
					<button
						className="rounded-lg p-2 transition-colors hover:bg-slate-100 lg:hidden"
						aria-label="Open menu"
					>
						<Menu size={20} />
					</button>

					<div>
						<h1 className="text-lg font-bold tracking-tight text-slate-900">
							Pharma Lens
						</h1>

						<p className="hidden text-xs text-slate-500 md:block">
							Operational Intelligence
						</p>
					</div>
				</div>

				{/* Center */}
				<div className="hidden w-full max-w-3xl items-center gap-4 lg:flex">
					{/* Search */}
					<div className="relative flex-1">
						<Search
							size={18}
							className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
						/>

						<input
							type="text"
							placeholder="Search medicine..."
							className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
						/>
					</div>

					{/* Date Filter */}
					<div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1 shadow-sm">
						<div className="px-3 text-slate-500">
							<CalendarDays size={17} />
						</div>

						<div className="relative flex">
							{/* Sliding Active Background */}
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
										onClick={() =>
											setActiveFilter(filter.value)
										}
										className={`relative z-10 flex h-8 w-13 items-center justify-center rounded-lg text-sm font-medium transition-colors duration-300 hover:cursor-pointer active:scale-95 ${
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
				</div>

				{/* Right */}
				<div className="flex items-center">
					<button
						className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-slate-100"
						aria-label="Profile"
					>
						<div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-indigo-600 text-white shadow">
							<CircleUserRound size={22} />
						</div>

						<div className="hidden text-left lg:block">
							<p className="text-sm font-semibold text-slate-900">
								Admin
							</p>

							<p className="text-xs text-slate-500">
								Business Owner
							</p>
						</div>
					</button>
				</div>
			</div>
		</header>
	);
}
