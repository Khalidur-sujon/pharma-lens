import SectionTitle from "../../../shared/components/SectionTitle";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	PieChart,
	Pie,
	Cell,
	CartesianGrid,
} from "recharts";
import { useDateFilterStore } from "../../../shared/store/dateFilterStore";
import { formatPeriod } from "../../../shared/utils/formatPeriod";

const performanceData = {
	"3d": {
		orderTrend: [
			{ label: "Day 1", orders: 124 },
			{ label: "Day 2", orders: 168 },
			{ label: "Day 3", orders: 142 },
		],
		medicineShare: [
			{ name: "Napa", value: 34 },
			{ name: "Monas", value: 28 },
			{ name: "Seclo", value: 22 },
			{ name: "Others", value: 16 },
		],
		growth: "+4.2%",
	},

	"15d": {
		orderTrend: [
			{ label: "1", orders: 352 },
			{ label: "2", orders: 401 },
			{ label: "3", orders: 428 },
			{ label: "4", orders: 395 },
			{ label: "5", orders: 462 },
			{ label: "6", orders: 520 },
			{ label: "7", orders: 478 },
			{ label: "8", orders: 431 },
			{ label: "9", orders: 496 },
			{ label: "10", orders: 534 },
			{ label: "11", orders: 488 },
			{ label: "12", orders: 512 },
			{ label: "13", orders: 470 },
			{ label: "14", orders: 530 },
			{ label: "15", orders: 486 },
		],
		medicineShare: [
			{ name: "Seclo", value: 33 },
			{ name: "Napa", value: 27 },
			{ name: "Maxpro", value: 23 },
			{ name: "Others", value: 17 },
		],
		growth: "+8.7%",
	},

	"30d": {
		orderTrend: [
			{ label: "1", orders: 280 },
			{ label: "2", orders: 520 },
			{ label: "3", orders: 540 },
			{ label: "4", orders: 710 },
			{ label: "5", orders: 620 },
			{ label: "6", orders: 520 },
			{ label: "7", orders: 410 },
			{ label: "8", orders: 580 },
			{ label: "9", orders: 640 },
			{ label: "10", orders: 570 },
			{ label: "11", orders: 480 },
			{ label: "12", orders: 520 },
			{ label: "13", orders: 500 },
			{ label: "14", orders: 530 },
			{ label: "15", orders: 610 },
			{ label: "16", orders: 590 },
			{ label: "17", orders: 470 },
			{ label: "18", orders: 690 },
			{ label: "19", orders: 520 },
			{ label: "20", orders: 410 },
			{ label: "21", orders: 480 },
			{ label: "22", orders: 390 },
			{ label: "23", orders: 570 },
			{ label: "24", orders: 620 },
			{ label: "25", orders: 390 },
			{ label: "26", orders: 420 },
			{ label: "27", orders: 380 },
			{ label: "28", orders: 460 },
			{ label: "29", orders: 490 },
			{ label: "30", orders: 530 },
		],
		medicineShare: [
			{ name: "Bizoran", value: 31 },
			{ name: "Napa", value: 29 },
			{ name: "Seclo", value: 24 },
			{ name: "Others", value: 16 },
		],
		growth: "+12.4%",
	},

	"3m": {
		orderTrend: [
			{ label: "W1", orders: 3420 },
			{ label: "W2", orders: 2980 },
			{ label: "W3", orders: 3150 },
			{ label: "W4", orders: 2740 },
			{ label: "W5", orders: 3560 },
			{ label: "W6", orders: 3890 },
			{ label: "W7", orders: 3320 },
			{ label: "W8", orders: 4180 },
			{ label: "W9", orders: 3950 },
			{ label: "W10", orders: 4520 },
			{ label: "W11", orders: 4210 },
			{ label: "W12", orders: 4870 },
		],

		medicineShare: [
			{ name: "Maxpro", value: 34 },
			{ name: "Ace", value: 28 },
			{ name: "Napa", value: 21 },
			{ name: "Others", value: 17 },
		],

		growth: "+14.6%",
	},

	"6m": {
		orderTrend: [
			{ label: "1", orders: 6820 },
			{ label: "1", orders: 6240 },
			{ label: "1", orders: 5780 },
			{ label: "1", orders: 6450 },

			{ label: "2", orders: 7120 },
			{ label: "2", orders: 6890 },
			{ label: "2", orders: 7540 },
			{ label: "2", orders: 6980 },

			{ label: "3", orders: 7820 },
			{ label: "3", orders: 8350 },
			{ label: "3", orders: 7680 },
			{ label: "3", orders: 8120 },

			{ label: "4", orders: 7460 },
			{ label: "4", orders: 6920 },
			{ label: "4", orders: 7310 },
			{ label: "4", orders: 8460 },

			{ label: "5", orders: 8890 },
			{ label: "5", orders: 8210 },
			{ label: "5", orders: 7740 },
			{ label: "5", orders: 9180 },

			{ label: "6", orders: 8650 },
			{ label: "6", orders: 7920 },
			{ label: "6", orders: 9540 },
			{ label: "6", orders: 10120 },
		],

		medicineShare: [
			{ name: "Ace", value: 32 },
			{ name: "Bizoran", value: 29 },
			{ name: "Maxpro", value: 24 },
			{ name: "Others", value: 15 },
		],

		growth: "+21.4%",
	},

	"1y": {
		orderTrend: [
			{ label: "Jan", orders: 11800 },
			{ label: "Feb", orders: 10250 },
			{ label: "Mar", orders: 12740 },
			{ label: "Apr", orders: 11320 },
			{ label: "May", orders: 13680 },
			{ label: "Jun", orders: 12940 },
			{ label: "Jul", orders: 14820 },
			{ label: "Aug", orders: 13950 },
			{ label: "Sep", orders: 16240 },
			{ label: "Oct", orders: 15480 },
			{ label: "Nov", orders: 17620 },
			{ label: "Dec", orders: 19150 },
		],

		medicineShare: [
			{ name: "Bizoran", value: 31 },
			{ name: "Ace", value: 27 },
			{ name: "Maxpro", value: 23 },
			{ name: "Others", value: 19 },
		],

		growth: "+28.7%",
	},
};

const COLORS = ["#6366F1", "#8B5CF6", "#06B6D4", "#CBD5E1"];

export default function PerformanceSection() {
	const selectedPeriod = useDateFilterStore((state) => state.activeFilter);

	const { orderTrend, medicineShare, growth } =
		performanceData[selectedPeriod];

	return (
		<div className="rounded-xl border border-slate-200 bg-white p-3">
			<div className="flex items-start justify-between">
				<div className="flex items-center gap-1">
					<SectionTitle title="Order Trend" />

					<span className="text-[10px] text-slate-400 font-medium">
						(Last {formatPeriod(selectedPeriod)})
					</span>
				</div>

				<span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
					{growth}
				</span>
			</div>

			<div className="mt-2 divide-y divide-slate-200">
				{/* Order Trend */}
				<div className="pb-1">
					<div className="h-40">
						<ResponsiveContainer width="100%" height="100%">
							<LineChart
								data={orderTrend}
								margin={{
									top: 10,
									right: 20,
									left: 0,
									bottom: 0,
								}}
							>
								<CartesianGrid
									stroke="#E2E8F0"
									strokeDasharray="3 3"
								/>

								<XAxis
									dataKey="label"
									axisLine={false}
									tickLine={false}
									minTickGap={24}
									tick={{
										fontSize: 10,
										fill: "#94A3B8",
									}}
								/>

								<YAxis
									axisLine={false}
									tickLine={false}
									width={42}
									tickFormatter={(value) =>
										value.toLocaleString()
									}
									tick={{
										fontSize: 10,
										fill: "#94A3B8",
									}}
								/>

								<Tooltip
									cursor={{
										stroke: "#C7D2FE",
										strokeWidth: 1,
									}}
									contentStyle={{
										borderRadius: 12,
										border: "1px solid #E2E8F0",
										boxShadow:
											"0 8px 24px rgba(15,23,42,.08)",
									}}
									labelStyle={{
										color: "#334155",
										fontWeight: 600,
									}}
									formatter={(value) => [
										value
											? Number(value).toLocaleString()
											: "0",
										"Orders",
									]}
								/>

								<Line
									type="monotone"
									dataKey="orders"
									stroke="#6366F1"
									strokeWidth={2.5}
									dot={false}
									activeDot={{
										r: 5,
										fill: "#6366F1",
										stroke: "#fff",
										strokeWidth: 2,
									}}
								/>
							</LineChart>
						</ResponsiveContainer>
					</div>
				</div>

				{/* Medicine Share */}
				<div className="pt-3">
					<div className="mb-2 flex items-center justify-between">
						<div>
							<h4 className="text-xs font-semibold text-slate-900">
								Medicine Share
							</h4>

							<p className="text-[10px] text-slate-500">
								Top Selling Medicines
							</p>
						</div>

						<span className="text-[10px] text-slate-500">
							Top {medicineShare.length}
						</span>
					</div>

					<div className="flex items-center gap-5">
						<div className="h-28 w-28 shrink-0">
							<div className="h-28 w-24 shrink-0 [&_*:focus]:outline-none">
								<ResponsiveContainer width="100%" height="100%">
									<PieChart>
										<Pie
											data={medicineShare}
											dataKey="value"
											innerRadius={24}
											outerRadius={40}
											paddingAngle={2}
											stroke="none"
											isAnimationActive={false}
										>
											{medicineShare.map(
												(item, index) => (
													<Cell
														key={item.name}
														fill={COLORS[index]}
														stroke="none"
													/>
												),
											)}
										</Pie>
									</PieChart>
								</ResponsiveContainer>
							</div>
						</div>

						<div className="flex-1 space-y-2.5">
							{medicineShare.map((item, index) => (
								<div
									key={item.name}
									className="flex items-center justify-between"
								>
									<div className="flex items-center gap-2">
										<div
											className="h-2.5 w-2.5 rounded-full"
											style={{
												backgroundColor: COLORS[index],
											}}
										/>

										<span className="text-xs text-slate-700">
											{item.name}
										</span>
									</div>

									<span className="text-xs font-semibold text-slate-900">
										{item.value}%
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
