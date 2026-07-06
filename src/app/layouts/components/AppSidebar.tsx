import { AlertTriangle, TrendingDown, TrendingUp } from "lucide-react";

const summary = [
	{
		label: "Orders",
		value: "1,284",
		change: "+18%",
		positive: true,
	},

	{
		label: "Coverage",
		value: "94%",
		change: "+3%",
		positive: true,
	},
	{
		label: "Active Zones",
		value: "12/12",
		change: "100%",
		positive: true,
	},
	{
		label: "Growth",
		value: "+11.4%",
		change: "+2%",
		positive: true,
	},
	{
		label: "Pending Orders",
		value: "42",
		change: "-4%",
		positive: false,
	},
	{
		label: "Low Stock",
		value: "7",
		change: "+2",
		positive: false,
	},
];
export default function AppSidebar() {
	return (
		<aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-slate-50 lg:flex lg:flex-col">
			<div className="flex-1 overflow-y-auto p-4 space-y-4">
				{/* ================= Summary ================= */}
				<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
					<div className="mb-4 flex items-center justify-between">
						<div>
							<h3 className="text-sm font-semibold text-slate-900">
								Today's Summary
							</h3>
							<p className="text-xs text-slate-500">
								Live business snapshot
							</p>
						</div>

						<div className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-500">
							Today
						</div>
					</div>

					<div className="max-h-72 space-y-3 overflow-y-auto pr-1">
						{summary.map((item) => (
							<div
								key={item.label}
								className="flex items-center justify-between rounded-xl bg-slate-50 p-3"
							>
								<div>
									<p className="text-xs text-slate-500">
										{item.label}
									</p>

									<p className="mt-1 text-lg font-bold text-slate-900">
										{item.value}
									</p>
								</div>

								<div
									className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
										item.positive
											? "bg-emerald-50 text-emerald-600"
											: "bg-red-50 text-red-600"
									}`}
								>
									{item.positive ? (
										<TrendingUp size={14} />
									) : (
										<TrendingDown size={14} />
									)}

									{item.change}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* ================= Needs Attention ================= */}

				<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
					<div className="flex items-center gap-2">
						<AlertTriangle size={18} className="text-amber-500" />

						<h3 className="font-semibold text-slate-900">
							Needs Attention
						</h3>
					</div>

					<div className="mt-4 space-y-3">
						<div className="rounded-xl bg-amber-50 p-3">
							<p className="font-medium text-slate-900">
								Tangail
							</p>

							<p className="text-sm text-amber-700">
								Order volume dropped by 12%
							</p>
						</div>

						<div className="rounded-xl bg-red-50 p-3">
							<p className="font-medium text-slate-900">
								Ghatail
							</p>

							<p className="text-sm text-red-600">
								Low stock alert
							</p>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
}
