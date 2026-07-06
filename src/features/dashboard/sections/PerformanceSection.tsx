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
} from "recharts";

const orderTrend = [
	{ day: "Mon", orders: 210 },
	{ day: "Tue", orders: 240 },
	{ day: "Wed", orders: 195 },
	{ day: "Thu", orders: 280 },
	{ day: "Fri", orders: 310 },
	{ day: "Sat", orders: 290 },
	{ day: "Sun", orders: 340 },
];

const medicineShare = [
	{ name: "Napa", value: 42 },
	{ name: "Seclo", value: 28 },
	{ name: "Monas", value: 18 },
	{ name: "Others", value: 12 },
];

const COLORS = ["#6366F1", "#8B5CF6", "#06B6D4", "#CBD5E1"];

export default function PerformanceSection() {
	return (
		<div className="rounded-xl border border-slate-200 bg-white p-3">
			<SectionTitle title="Performance Insights" />

			<div className="mt-3 divide-y divide-slate-200">
				{/* Order Trend */}
				<div className="pb-3">
					<div className="mb-2 flex items-center justify-between">
						<div>
							<h4 className="text-xs font-semibold text-slate-900">
								Order Trend
							</h4>
							<p className="text-[10px] text-slate-500">
								Last 7 Days
							</p>
						</div>

						<span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
							+12.4%
						</span>
					</div>

					<div className="h-24">
						<ResponsiveContainer>
							<LineChart data={orderTrend}>
								<XAxis
									dataKey="day"
									fontSize={8}
									tickLine={false}
									axisLine={false}
								/>
								<YAxis hide />
								<Tooltip />
								<Line
									type="monotone"
									dataKey="orders"
									stroke="#6366F1"
									strokeWidth={2}
									dot={false}
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
							Top 4
						</span>
					</div>

					<div className="flex items-center gap-4">
						{/* Pie */}
						<div className="h-32 w-24 shrink-0">
							<ResponsiveContainer>
								<PieChart>
									<Pie
										data={medicineShare}
										dataKey="value"
										innerRadius={22}
										outerRadius={34}
										paddingAngle={2}
									>
										{medicineShare.map((item, index) => (
											<Cell
												key={item.name}
												fill={COLORS[index]}
											/>
										))}
									</Pie>
								</PieChart>
							</ResponsiveContainer>
						</div>

						{/* Custom Legend */}
						<div className="flex-1 space-y-2">
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
