import TerritoryMap from "../../territory/components/TerritoryMap";

export default function DashboardPage() {
	return (
		<div className="h-[calc(100vh-128px)] rounded-xl border border-slate-200 bg-white overflow-hidden">
			<TerritoryMap />
		</div>
	);
}
