import KpiSection from "../../features/dashboard/sections/KpiSection";
import PerformanceSection from "../../features/dashboard/sections/PerformanceSection";
import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";
import MainContent from "./components/MainContent";
import TopMedicinesSection from "../../features/dashboard/sections/TopMedicinesSection";
import AllZoneSection from "../../features/dashboard/sections/AllZoneSection";

export default function AppLayout() {
	return (
		<div className="flex h-screen flex-col bg-slate-50 overflow-hidden">
			<AppHeader />

			<div className="flex flex-1 min-h-0 overflow-hidden">
				<AppSidebar />

				<div className="flex flex-1 flex-col min-h-0 overflow-y-auto p-4 md:p-6 gap-4 md:gap-6">
					<KpiSection />

					<div className="grid flex-1 min-h-0 grid-cols-1 gap-4 md:gap-6 lg:grid-cols-12">
						<div className="lg:col-span-3 min-h-0">
							<AllZoneSection />
						</div>

						<div className="lg:col-span-6 flex min-h-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
							<MainContent />
						</div>

						<div className="lg:col-span-3 min-h-0">
							<PerformanceSection />
						</div>
					</div>

					<TopMedicinesSection />
				</div>
			</div>
		</div>
	);
}
