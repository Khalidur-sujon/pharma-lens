import { TrendingDown, TrendingUp } from "lucide-react";
import SectionTitle from "../../../shared/components/SectionTitle";
import { useDateFilterStore } from "../../../shared/store/dateFilterStore";

const zoneData = {
	"3d": [
		{ name: "Tangail Sadar", orders: 82, growth: 4, active: true },
		{ name: "Ghatail", orders: 75, growth: 3, active: true },
		{ name: "Kalihati", orders: 69, growth: 2, active: true },
		{ name: "Delduar", orders: 63, growth: -2, active: false },
		{ name: "Mirzapur", orders: 58, growth: 2, active: true },
		{ name: "Nagarpur", orders: 54, growth: -1, active: false },
		{ name: "Madhupur", orders: 50, growth: 3, active: true },
		{ name: "Sakhipur", orders: 47, growth: 1, active: true },
		{ name: "Basail", orders: 44, growth: -2, active: false },
		{ name: "Gopalpur", orders: 40, growth: 4, active: true },
		{ name: "Bhuapur", orders: 36, growth: 1, active: true },
		{ name: "Dhanbari", orders: 32, growth: -3, active: false },
	],

	"15d": [
		{ name: "Tangail Sadar", orders: 325, growth: 8, active: true },
		{ name: "Ghatail", orders: 296, growth: 6, active: true },
		{ name: "Kalihati", orders: 274, growth: 5, active: true },
		{ name: "Delduar", orders: 248, growth: -4, active: false },
		{ name: "Mirzapur", orders: 230, growth: 4, active: true },
		{ name: "Nagarpur", orders: 212, growth: -2, active: false },
		{ name: "Madhupur", orders: 198, growth: 6, active: true },
		{ name: "Sakhipur", orders: 184, growth: 3, active: true },
		{ name: "Basail", orders: 169, growth: -2, active: false },
		{ name: "Gopalpur", orders: 154, growth: 7, active: true },
		{ name: "Bhuapur", orders: 141, growth: 2, active: true },
		{ name: "Dhanbari", orders: 126, growth: -5, active: false },
	],

	"30d": [
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
	],

	"3m": [
		{ name: "Tangail Sadar", orders: 1845, growth: 18, active: true },
		{ name: "Ghatail", orders: 1720, growth: 15, active: true },
		{ name: "Kalihati", orders: 1608, growth: 12, active: true },
		{ name: "Delduar", orders: 1482, growth: -5, active: false },
		{ name: "Mirzapur", orders: 1375, growth: 10, active: true },
		{ name: "Nagarpur", orders: 1256, growth: -3, active: false },
		{ name: "Madhupur", orders: 1188, growth: 11, active: true },
		{ name: "Sakhipur", orders: 1094, growth: 7, active: true },
		{ name: "Basail", orders: 1021, growth: -2, active: false },
		{ name: "Gopalpur", orders: 956, growth: 13, active: true },
		{ name: "Bhuapur", orders: 884, growth: 6, active: true },
		{ name: "Dhanbari", orders: 816, growth: -7, active: false },
	],

	"6m": [
		{ name: "Tangail Sadar", orders: 3610, growth: 22, active: true },
		{ name: "Ghatail", orders: 3388, growth: 18, active: true },
		{ name: "Kalihati", orders: 3195, growth: 16, active: true },
		{ name: "Delduar", orders: 2942, growth: -4, active: false },
		{ name: "Mirzapur", orders: 2784, growth: 13, active: true },
		{ name: "Nagarpur", orders: 2526, growth: -2, active: false },
		{ name: "Madhupur", orders: 2388, growth: 14, active: true },
		{ name: "Sakhipur", orders: 2234, growth: 10, active: true },
		{ name: "Basail", orders: 2098, growth: -1, active: false },
		{ name: "Gopalpur", orders: 1960, growth: 17, active: true },
		{ name: "Bhuapur", orders: 1825, growth: 8, active: true },
		{ name: "Dhanbari", orders: 1704, growth: -5, active: false },
	],

	"1y": [
		{ name: "Tangail Sadar", orders: 7425, growth: 31, active: true },
		{ name: "Ghatail", orders: 6938, growth: 28, active: true },
		{ name: "Kalihati", orders: 6542, growth: 24, active: true },
		{ name: "Delduar", orders: 5984, growth: -3, active: false },
		{ name: "Mirzapur", orders: 5636, growth: 20, active: true },
		{ name: "Nagarpur", orders: 5208, growth: -2, active: false },
		{ name: "Madhupur", orders: 4915, growth: 21, active: true },
		{ name: "Sakhipur", orders: 4582, growth: 16, active: true },
		{ name: "Basail", orders: 4306, growth: -1, active: false },
		{ name: "Gopalpur", orders: 4024, growth: 23, active: true },
		{ name: "Bhuapur", orders: 3818, growth: 12, active: true },
		{ name: "Dhanbari", orders: 3495, growth: -4, active: false },
	],
} as const;

export default function AllZoneSection() {
	const selectedPeriod = useDateFilterStore((state) => state.activeFilter);

	const zones = zoneData[selectedPeriod];
	return (
		<div className="flex h-full w-full min-h-96  flex-col rounded-xl border border-slate-200 bg-white p-4">
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
