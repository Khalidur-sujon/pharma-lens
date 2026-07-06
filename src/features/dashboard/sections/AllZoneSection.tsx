import { TrendingDown, TrendingUp } from "lucide-react";
import SectionTitle from "../../../shared/components/SectionTitle";

const zones = [
	{ name: "Tangail Sadar", orders: 642, growth: 12, active: true },
	{ name: "Ghatail", orders: 584, growth: 9, active: true },
	{ name: "Kalihati", orders: 530, growth: 7, active: true },
	{ name: "Delduar", orders: 481, growth: -6, active: false },
	{ name: "Mirzapur", orders: 438, growth: 5, active: true },
	{ name: "Nagarpur", orders: 392, growth: -4, active: false },
	{ name: "Madhupur", orders: 366, growth: 8, active: true },
	{ name: "Sakhipur", orders: 344, growth: 4, active: true },
	{ name: "Basail", orders: 318, growth: -3, active: false },
	{ name: "Gopalpur", orders: 296, growth: 10, active: true },
	{ name: "Bhuapur", orders: 275, growth: 2, active: true },
	{ name: "Dhanbari", orders: 241, growth: -8, active: false },
];

export default function AllZoneSection() {
	return (
		<div className="flex h-full w-full min-h-96 flex-col rounded-xl border border-slate-200 bg-white p-4">
			<SectionTitle title={`All Zones (${zones.length})`} />

			<div className="mt-4 flex-1 space-y-2 overflow-y-auto pr-1">
				{zones.map((zone) => (
					<div
						key={zone.name}
						className="flex items-center justify-between rounded-lg px-2 py-2 transition-colors hover:bg-slate-50"
					>
						{/* Left */}
						<div className="flex items-start gap-3">
							<div
								className={`mt-1 h-2.5 w-2.5 rounded-full ${
									zone.active
										? "bg-emerald-500"
										: "bg-red-500"
								}`}
							/>

							<div>
								<p className="text-sm font-medium text-slate-800">
									{zone.name}
								</p>

								<p className="text-xs text-slate-500">
									{zone.orders.toLocaleString()} orders
								</p>
							</div>
						</div>

						{/* Right */}
						<div
							className={`flex items-center gap-1 text-sm font-semibold ${
								zone.growth >= 0
									? "text-emerald-600"
									: "text-red-600"
							}`}
						>
							{zone.growth >= 0 ? (
								<TrendingUp size={15} />
							) : (
								<TrendingDown size={15} />
							)}

							<span>{Math.abs(zone.growth)}%</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
