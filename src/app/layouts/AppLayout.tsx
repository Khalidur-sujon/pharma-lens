import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";
import MainContent from "./components/MainContent";

export default function AppLayout() {
	return (
		<div className="flex h-screen flex-col bg-slate-50 overflow-hidden">
			<AppHeader />

			<div className="flex flex-1 min-h-0 overflow-hidden">
				<AppSidebar />

				{/* MAIN AREA */}
				<div className="flex flex-1 flex-col min-h-0 overflow-y-auto p-4 md:p-6 gap-4 md:gap-6">
					{/* KPI ROW */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
						<KpiCard label="Total Orders" value="1,284" />
						<KpiCard label="Total Amount" value="৳12.8L" />
						<KpiCard label="Total Medicines" value="320" />
					</div>

					{/* MAIN GRID */}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 min-h-0">
						{/* LEFT - ZONES */}
						<div className="lg:col-span-3 flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-4 min-h-62.5">
							<SectionTitle title="All Zones" />
							<div className="mt-4 flex-1 overflow-y-auto space-y-2 pr-1">
								<ZoneItem name="Dhaka North" />
								<ZoneItem name="Dhaka South" />
								<ZoneItem name="Chattogram" />
								<ZoneItem name="Rajshahi" />
								<ZoneItem name="Sylhet" />
								<ZoneItem name="Khulna" />
							</div>
						</div>

						{/* CENTER */}
						<div className="lg:col-span-6 flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white min-h-75">
							<MainContent />
						</div>

						{/* RIGHT */}
						<div className="lg:col-span-3 flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-4 min-h-62.5">
							<SectionTitle title="High Performance" />
							<div className="mt-4 flex-1 space-y-3">
								<PerformanceItem
									label="Zone Growth"
									value="+18%"
								/>
								<PerformanceItem
									label="Order Rate"
									value="+12%"
								/>
								<PerformanceItem
									label="Delivery Speed"
									value="+9%"
								/>
								<PerformanceItem
									label="Efficiency"
									value="+14%"
								/>
							</div>
						</div>
					</div>

					{/* BOTTOM GRID */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
						<div className="rounded-xl border border-slate-200 bg-white p-4">
							<SectionTitle title="Top Medicines" />
							<div className="mt-4 space-y-2">
								<MedicineItem name="Napa" count="1200 orders" />
								<MedicineItem name="Seclo" count="980 orders" />
								<MedicineItem name="Monas" count="860 orders" />
							</div>
						</div>

						<div className="rounded-xl border border-slate-200 bg-white p-4">
							<SectionTitle title="Zone Performance" />
							<div className="mt-4 space-y-2">
								<ZonePerf name="Dhaka North" value="320" />
								<ZonePerf name="Chattogram" value="280" />
								<ZonePerf name="Rajshahi" value="190" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

/* ---------------- UI COMPONENTS ---------------- */

function KpiCard({ label, value }: any) {
	return (
		<div className="rounded-xl border border-slate-200 bg-white p-4">
			<p className="text-xs text-slate-500">{label}</p>
			<p className="mt-2 text-xl font-semibold text-slate-900">{value}</p>
		</div>
	);
}

function SectionTitle({ title }: any) {
	return <h3 className="text-sm font-semibold text-slate-900">{title}</h3>;
}

function ZoneItem({ name }: any) {
	return (
		<div className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
			{name}
		</div>
	);
}

function PerformanceItem({ label, value }: any) {
	return (
		<div className="flex items-center justify-between text-sm">
			<span className="text-slate-600">{label}</span>
			<span className="font-medium text-emerald-600">{value}</span>
		</div>
	);
}

function MedicineItem({ name, count }: any) {
	return (
		<div className="flex items-center justify-between text-sm">
			<span className="text-slate-700">{name}</span>
			<span className="text-slate-500">{count}</span>
		</div>
	);
}

function ZonePerf({ name, value }: any) {
	return (
		<div className="flex items-center justify-between text-sm">
			<span className="text-slate-600">{name}</span>
			<span className="font-medium text-slate-900">{value}</span>
		</div>
	);
}
