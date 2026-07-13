import KpiSection from "../../features/dashboard/sections/KpiSection";
import PerformanceSection from "../../features/dashboard/sections/PerformanceSection";
import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";
import MainContent from "./components/MainContent";
import TopMedicinesSection from "../../features/dashboard/sections/TopMedicinesSection";
import AllZoneSection from "../../features/dashboard/sections/AllZoneSection";

export default function AppLayout() {
	return (
		<div className="h-screen overflow-hidden bg-slate-100">
			<div className="mx-auto flex h-full max-w-[1920px] flex-col bg-white">
				<AppHeader />

				<div className="flex min-h-0 flex-1 overflow-hidden">
					<AppSidebar />

					<div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-3 sm:p-4 md:gap-6 md:p-5 lg:p-6">
						<KpiSection />

						<div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-12">
							<div className="hidden max-h-32 lg:col-span-3 lg:block">
								<AllZoneSection />
							</div>

							<div className="lg:col-span-6">
								<div className="max-h-96 overflow-hidden rounded-xl border border-slate-200 bg-white ">
									<MainContent />
								</div>
							</div>

							<div className="lg:col-span-3">
								<PerformanceSection />
							</div>
						</div>

						<TopMedicinesSection />
					</div>
				</div>
			</div>
		</div>
	);
}
