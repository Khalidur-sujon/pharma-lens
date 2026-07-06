import { TrendingDown, TrendingUp } from "lucide-react";

const medicines = [
	{
		name: "Napa (Paracetamol)",
		orders: 1234,
		progress: 85,
		growth: 28,
	},
	{
		name: "Seclo (Omeprazole)",
		orders: 1080,
		progress: 72,
		growth: 18,
	},
	{
		name: "Monas (Montelukast)",
		orders: 920,
		progress: 58,
		growth: -8,
	},
];

export default function TopMedicinesSection() {
	return (
		<div className="w-full rounded-xl border border-slate-200 bg-white p-3">
			{/* Header */}
			<div className="mb-2">
				<h3 className="text-sm font-semibold text-slate-900">
					Top Medicines (All Zones)
				</h3>
			</div>

			{/* Table Header */}
			<div className="grid grid-cols-[2.2fr_1fr_1.5fr_1fr] gap-2 border-b border-slate-200 pb-1.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
				<span>Medicine</span>
				<span>Orders</span>
				<span></span>
				<span className="text-right">Growth</span>
			</div>

			{/* Rows */}
			<div className="divide-y divide-slate-100">
				{medicines.map((medicine) => (
					<div
						key={medicine.name}
						className="grid grid-cols-[2.2fr_1fr_1.5fr_1fr] items-center gap-2 py-2"
					>
						{/* Medicine */}
						<p className="truncate text-xs font-medium">
							<span className="text-slate-800">
								{medicine.name.split(" (")[0]}
							</span>

							{medicine.name.includes(" (") && (
								<span className="text-slate-400 font-light">
									{" ("}
									{medicine.name.split(" (")[1]}
								</span>
							)}
						</p>

						{/* Orders */}
						<p className="text-xs font-semibold text-slate-700">
							{medicine.orders.toLocaleString()}
						</p>

						{/* Progress */}
						<div className="h-1 overflow-hidden rounded-full bg-slate-100">
							<div
								className="h-full rounded-full bg-violet-500 transition-all duration-300"
								style={{
									width: `${medicine.progress}%`,
								}}
							/>
						</div>

						{/* Growth */}
						<div className="flex items-center justify-end gap-1">
							{medicine.growth >= 0 ? (
								<>
									<TrendingUp
										size={12}
										className="text-emerald-500"
									/>
									<span className="text-xs font-semibold text-emerald-600">
										{medicine.growth}%
									</span>
								</>
							) : (
								<>
									<TrendingDown
										size={12}
										className="text-red-500"
									/>
									<span className="text-xs font-semibold text-red-600">
										{medicine.growth}%
									</span>
								</>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
