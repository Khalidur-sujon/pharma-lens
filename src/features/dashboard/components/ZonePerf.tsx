function ZonePerf({ name, value }: any) {
	return (
		<div className="flex items-center justify-between text-sm">
			<span className="text-slate-600">{name}</span>
			<span className="font-medium text-slate-900">{value}</span>
		</div>
	);
}

export default ZonePerf;
