import {
	LayoutDashboard,
	Map,
	Pill,
	ChartColumn,
	TrendingUp,
	TrendingDown,
} from "lucide-react";

const navigation = [
	{
		label: "Dashboard",
		icon: LayoutDashboard,
		active: true,
	},
	{
		label: "Territory",
		icon: Map,
	},
	{
		label: "Medicines",
		icon: Pill,
	},
	{
		label: "Analytics",
		icon: ChartColumn,
	},
];

const stats = [
	{
		label: "Total Orders",
		value: "1,284",
		change: "18%",
		up: true,
	},
	{
		label: "Total Quantity",
		value: "8,960",
		change: "12%",
		up: true,
	},
	{
		label: "Total Amount",
		value: "৳12.8L",
		change: "9%",
		up: true,
	},
	{
		label: "Pending Orders",
		value: "42",
		change: "4%",
		up: false,
	},
];

export default function AppSidebar() {
	return (
		<aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
			{/* Navigation */}
			<nav className="flex-1 px-4 pt-6">
				<p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
					Navigation
				</p>

				<ul className="space-y-1">
					{navigation.map((item) => {
						const Icon = item.icon;

						return (
							<li key={item.label}>
								<button
									className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
										item.active
											? "bg-slate-50 text-slate-900"
											: "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
									}`}
								>
									{item.active && (
										<div className="absolute left-0 h-6 w-1 rounded-r-full bg-blue-600" />
									)}

									<Icon
										size={18}
										className={
											item.active
												? "text-blue-600"
												: "text-slate-400 transition-colors group-hover:text-slate-600"
										}
									/>

									<span>{item.label}</span>
								</button>
							</li>
						);
					})}
				</ul>

				{/* Divider */}
				<div className="my-6 border-t border-slate-200" />

				{/* Today at a glance */}
				<div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/60 p-4 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
					{/* Decorative background */}
					<div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-400/10 blur-3xl" />
					<div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-indigo-400/10 blur-3xl" />

					<div className="relative z-10">
						<div className="mb-5 flex items-start justify-between">
							<div>
								<h3 className="text-sm font-semibold text-slate-900">
									Today at a glance
								</h3>

								<p className="mt-1 text-xs text-slate-500">
									Live business overview
								</p>
							</div>

							<div className="rounded-full border border-white/70 bg-white/70 px-2.5 py-1 text-[10px] font-semibold text-slate-500 backdrop-blur-md">
								Today
							</div>
						</div>

						<div className="space-y-2">
							{stats.map((item) => (
								<div
									key={item.label}
									className="group rounded-2xl border border-white/60 bg-white/40 p-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/70 hover:shadow-sm"
								>
									<div className="flex items-center justify-between">
										<p className="text-xl font-bold tracking-tight text-slate-900">
											{item.value}
										</p>

										<div
											className={`flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold ${
												item.up
													? "bg-emerald-50 text-emerald-600"
													: "bg-red-50 text-red-600"
											}`}
										>
											{item.up ? (
												<TrendingUp size={13} />
											) : (
												<TrendingDown size={13} />
											)}

											<span>{item.change}</span>
										</div>
									</div>

									<p className="mt-1 text-[11px] tracking-wide text-slate-500">
										{item.label}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</nav>{" "}
		</aside>
	);
}
