import { lazy, Suspense } from "react";

const TerritoryMap = lazy(
	() => import("../../territory/components/TerritoryMap"),
);

export default function DashboardPage() {
	return (
		<div className="h-[calc(100vh-128px)] overflow-hidden rounded-xl border border-slate-200 bg-white">
			<Suspense
				fallback={
					<div className="flex h-full w-full items-center justify-center bg-slate-50">
						<div className="relative h-full w-full overflow-hidden -mt-60">
							{/* Map Skeleton */}
							<div className="absolute inset-0 animate-pulse bg-slate-100" />

							{/* Fake map shapes */}
							<div className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-slate-200/60" />

							<div className="absolute bottom-1/3 right-1/4 h-40 w-40 rounded-full bg-slate-200/60" />

							{/* Center Loading Indicator */}
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="flex flex-col items-center gap-3">
									<div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-slate-600" />

									<p className="text-sm font-medium text-slate-500">
										Loading territory map...
									</p>
								</div>
							</div>
						</div>
					</div>
				}
			>
				<TerritoryMap />
			</Suspense>
		</div>
	);
}
