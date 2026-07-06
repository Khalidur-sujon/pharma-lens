import KpiSection from "../../features/dashboard/sections/KpiSection";
import PerformanceSection from "../../features/dashboard/sections/PerformanceSection";
import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";
import MainContent from "./components/MainContent";
import TopMedicinesSection from "../../features/dashboard/sections/TopMedicinesSection";
import AllZoneSection from "../../features/dashboard/sections/AllZoneSection";

export default function AppLayout() {
	return (
		<div className="flex h-screen flex-col overflow-hidden bg-slate-50">
			<AppHeader />

			<div className="flex flex-1 min-h-0 overflow-hidden">
				<AppSidebar />

				<div className="flex flex-1 min-h-0 flex-col overflow-y-auto p-3 sm:p-4 md:p-5 lg:p-6 gap-4 md:gap-6">
					<KpiSection />

					<div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-12">
						{/* Map first on mobile */}
						<div className="order-2 lg:order-1 lg:col-span-3 max-h-32">
							<AllZoneSection />
						</div>

						<div className="order-1 lg:order-2 lg:col-span-6 ">
							<div className="overflow-hidden rounded-xl border border-slate-200 bg-white max-h-96 ">
								<MainContent />
							</div>
						</div>

						<div className="order-3 lg:col-span-3">
							<PerformanceSection />
						</div>
					</div>

					<TopMedicinesSection />
				</div>
			</div>
		</div>
	);
}
