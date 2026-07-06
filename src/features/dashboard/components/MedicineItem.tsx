function MedicineItem({ name, count }: any) {
	return (
		<div className="flex items-center justify-between text-sm">
			<span className="text-slate-700">{name}</span>
			<span className="text-slate-500">{count}</span>
		</div>
	);
}

export default MedicineItem;
