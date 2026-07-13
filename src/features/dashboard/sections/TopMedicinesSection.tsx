import { TrendingDown, TrendingUp } from "lucide-react";
import { useDateFilterStore } from "../../../shared/store/dateFilterStore";

const medicineData = {
	"3d": [
		{ name: "Napa (Paracetamol)", orders: 132, progress: 92, growth: 6 },
		{ name: "Monas (Montelukast)", orders: 124, progress: 87, growth: 5 },
		{ name: "Seclo (Omeprazole)", orders: 118, progress: 81, growth: 4 },
		{ name: "Maxpro (Esomeprazole)", orders: 110, progress: 75, growth: 3 },
		{ name: "Ace (Paracetamol)", orders: 103, progress: 69, growth: 2 },
		{
			name: "Napa Extend (Paracetamol)",
			orders: 96,
			progress: 63,
			growth: -1,
		},
		{ name: "Losectil (Omeprazole)", orders: 90, progress: 58, growth: -2 },
		{ name: "Bizoran (Losartan)", orders: 82, progress: 52, growth: -3 },
	],

	"15d": [
		{ name: "Seclo (Omeprazole)", orders: 612, progress: 94, growth: 14 },
		{ name: "Napa (Paracetamol)", orders: 589, progress: 89, growth: 12 },
		{
			name: "Maxpro (Esomeprazole)",
			orders: 548,
			progress: 82,
			growth: 10,
		},
		{ name: "Monas (Montelukast)", orders: 516, progress: 76, growth: 7 },
		{ name: "Bizoran (Losartan)", orders: 482, progress: 69, growth: 5 },
		{ name: "Ace (Paracetamol)", orders: 451, progress: 63, growth: 2 },
		{
			name: "Losectil (Omeprazole)",
			orders: 420,
			progress: 58,
			growth: -2,
		},
		{
			name: "Napa Extend (Paracetamol)",
			orders: 389,
			progress: 53,
			growth: -4,
		},
	],

	"30d": [
		{ name: "Napa (Paracetamol)", orders: 1234, progress: 96, growth: 28 },
		{ name: "Seclo (Omeprazole)", orders: 1180, progress: 91, growth: 21 },
		{ name: "Bizoran (Losartan)", orders: 1092, progress: 84, growth: 18 },
		{ name: "Monas (Montelukast)", orders: 1014, progress: 78, growth: 12 },
		{ name: "Maxpro (Esomeprazole)", orders: 965, progress: 72, growth: 9 },
		{ name: "Ace (Paracetamol)", orders: 912, progress: 66, growth: 6 },
		{
			name: "Losectil (Omeprazole)",
			orders: 861,
			progress: 60,
			growth: -2,
		},
		{
			name: "Napa Extend (Paracetamol)",
			orders: 814,
			progress: 55,
			growth: -5,
		},
	],

	"3m": [
		{
			name: "Maxpro (Esomeprazole)",
			orders: 3820,
			progress: 97,
			growth: 35,
		},
		{ name: "Napa (Paracetamol)", orders: 3655, progress: 93, growth: 31 },
		{ name: "Seclo (Omeprazole)", orders: 3412, progress: 88, growth: 27 },
		{ name: "Ace (Paracetamol)", orders: 3180, progress: 82, growth: 18 },
		{ name: "Monas (Montelukast)", orders: 2965, progress: 76, growth: 13 },
		{ name: "Bizoran (Losartan)", orders: 2810, progress: 69, growth: 10 },
		{
			name: "Napa Extend (Paracetamol)",
			orders: 2542,
			progress: 63,
			growth: 4,
		},
		{
			name: "Losectil (Omeprazole)",
			orders: 2368,
			progress: 57,
			growth: -3,
		},
	],

	"6m": [
		{ name: "Ace (Paracetamol)", orders: 7420, progress: 98, growth: 43 },
		{ name: "Napa (Paracetamol)", orders: 7185, progress: 94, growth: 38 },
		{
			name: "Maxpro (Esomeprazole)",
			orders: 6924,
			progress: 90,
			growth: 32,
		},
		{ name: "Bizoran (Losartan)", orders: 6512, progress: 84, growth: 26 },
		{ name: "Seclo (Omeprazole)", orders: 6248, progress: 78, growth: 22 },
		{ name: "Monas (Montelukast)", orders: 5980, progress: 72, growth: 15 },
		{
			name: "Losectil (Omeprazole)",
			orders: 5644,
			progress: 66,
			growth: 7,
		},
		{
			name: "Napa Extend (Paracetamol)",
			orders: 5318,
			progress: 60,
			growth: 2,
		},
	],

	"1y": [
		{ name: "Bizoran (Losartan)", orders: 15182, progress: 99, growth: 58 },
		{ name: "Napa (Paracetamol)", orders: 14874, progress: 95, growth: 52 },
		{ name: "Ace (Paracetamol)", orders: 14220, progress: 91, growth: 46 },
		{
			name: "Maxpro (Esomeprazole)",
			orders: 13742,
			progress: 86,
			growth: 39,
		},
		{ name: "Seclo (Omeprazole)", orders: 13284, progress: 81, growth: 34 },
		{
			name: "Monas (Montelukast)",
			orders: 12695,
			progress: 75,
			growth: 22,
		},
		{
			name: "Losectil (Omeprazole)",
			orders: 11980,
			progress: 69,
			growth: 11,
		},
		{
			name: "Napa Extend (Paracetamol)",
			orders: 11342,
			progress: 63,
			growth: 5,
		},
	],
} as const;

export default function TopMedicinesSection() {
	const selectedPeriod = useDateFilterStore((state) => state.activeFilter);

	const medicines = medicineData[selectedPeriod];
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
			<div
				className="max-h-24 min-[1024px]:max-h-28 overflow-y-auto pr-3"
				style={{
					scrollbarGutter: "stable",
				}}
			>
				<div className="divide-y divide-slate-100">
					{medicines.map((medicine) => (
						<div
							key={medicine.name}
							className="grid grid-cols-[2.2fr_1fr_1.5fr_1fr] items-center gap-2 py-3 "
						>
							{/* Medicine */}
							<p className="truncate text-xs font-medium">
								<span className="text-slate-800">
									{medicine.name.split(" (")[0]}
								</span>

								{medicine.name.includes(" (") && (
									<span className="font-light text-slate-400">
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
		</div>
	);
}
