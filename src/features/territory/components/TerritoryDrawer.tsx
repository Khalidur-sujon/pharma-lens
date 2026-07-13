import { X } from "lucide-react";
import { useTerritoryStore } from "../store/territory.store";

export default function TerritoryDrawer() {
	const { selected, isOpen, close } = useTerritoryStore();

	return (
		<>
			{/* Overlay */}
			<div
				onClick={close}
				className={`
					fixed inset-0 z-999
					bg-black/30 backdrop-blur-sm
					transition-opacity duration-300

					${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
				`}
			/>

			{/* Drawer */}
			<aside
				className={`
					fixed z-1000
					flex flex-col
					bg-white
					shadow-[0_24px_80px_rgba(0,0,0,.18)]

					/* Mobile */
					left-0
					right-0
					bottom-0
					w-full
					h-[88dvh]
					rounded-t-[28px]

					/* Desktop */
					md:left-auto
					md:right-0
					md:top-0
					md:bottom-auto
					md:h-screen
					md:w-105
					lg:w-115
					md:rounded-none
					md:rounded-l-3xl

					transform-gpu
					will-change-transform
					transition-transform
					duration-500
					ease-[cubic-bezier(.22,1,.36,1)]

					${
						isOpen
							? "translate-y-0 md:translate-x-0"
							: "translate-y-full md:translate-y-0 md:translate-x-full"
					}
				`}
			>
				{/* Header */}
				<div className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur-md">
					<div className="flex items-center justify-between px-5 py-4 md:px-6 md:py-5">
						<div>
							<p className="text-xs text-slate-500 md:text-sm">
								Selected Upazila
							</p>

							<h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
								{selected?.name ?? ""}
							</h2>
						</div>

						<button
							onClick={close}
							className="rounded-xl p-2 transition-all duration-200 hover:bg-slate-100 active:scale-95 hover:cursor-pointer"
						>
							<X size={20} />
						</button>
					</div>
				</div>

				{/* Body */}
				<div className="flex-1 space-y-4 overflow-y-auto p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] md:space-y-5 md:p-6">
					{/* Orders */}
					<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
						<p className="text-sm text-slate-500">Orders</p>

						<h3 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
							{selected?.orders?.toLocaleString() ?? "0"}
						</h3>
					</div>

					{/* Revenue */}
					<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
						<p className="text-sm text-slate-500">Revenue</p>

						<h3 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
							৳ {selected?.revenue?.toLocaleString() ?? "0"}
						</h3>
					</div>

					{/* Top Medicines */}
					<div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
						<h3 className="mb-4 text-lg font-semibold">
							Top Medicines
						</h3>

						<div className="space-y-3">
							{selected?.topMedicines?.map((medicine, index) => (
								<div
									key={medicine}
									className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 transition hover:bg-slate-100"
								>
									<div className="flex items-center gap-3">
										<div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
											{index + 1}
										</div>

										<span className="font-medium text-slate-800">
											{medicine}
										</span>
									</div>

									<span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
										Top Seller
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Product Roadmap */}
					<div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 md:p-5">
						<h3 className="font-semibold text-slate-900">
							Product Roadmap
						</h3>

						<p className="mt-1 text-sm text-slate-500">
							Upcoming capabilities planned for future releases.
						</p>

						<div className="mt-5 space-y-3">
							<div className="flex items-start justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
								<div className="min-w-0 flex-1">
									<p className="font-medium text-slate-900">
										Sales Trend Analytics
									</p>

									<p className="mt-1 text-xs leading-5 text-slate-500">
										Track daily, weekly and monthly sales
										performance.
									</p>
								</div>

								<span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700">
									In Progress
								</span>
							</div>

							<div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
								<div>
									<p className="font-medium text-slate-900">
										Territory Growth Insights
									</p>

									<p className="text-xs text-slate-500">
										Compare regional growth and performance.
									</p>
								</div>

								<span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
									Planned
								</span>
							</div>

							<div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
								<div>
									<p className="font-medium text-slate-900">
										Inventory Health
									</p>

									<p className="text-xs text-slate-500">
										Low stock, reorder suggestions and
										expiry alerts.
									</p>
								</div>

								<span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
									Planned
								</span>
							</div>

							<div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
								<div>
									<p className="font-medium text-slate-900">
										AI Demand Forecast
									</p>

									<p className="text-xs text-slate-500">
										Predict demand and identify sales
										opportunities.
									</p>
								</div>

								<span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-medium text-violet-700">
									Vision
								</span>
							</div>
						</div>
					</div>
				</div>
			</aside>
		</>
	);
}
