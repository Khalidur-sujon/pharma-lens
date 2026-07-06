function PerformanceItem({ label, value }: any) {
	return (
		<div className="flex items-center justify-between text-sm">
			<span className="text-slate-600">{label}</span>
			<span className="font-medium text-emerald-600">{value}</span>
		</div>
	);
}

export default PerformanceItem;
