import { ArrowUpRight } from "lucide-react";

interface KpiCardProps {
	label: string;
	value: string;
	icon: React.ReactNode;
	change: string;
}

export default function KpiCard({ label, value, icon, change }: KpiCardProps) {
	return (
		<div className="rounded-xl border border-slate-200 bg-white p-3">
			<div className="flex items-center gap-3">
				{/* Icon */}
				<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
					{icon}
				</div>

				{/* Content */}
				<div className="min-w-0 flex-1">
					<p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
						{label}
					</p>

					<div className="mt-0.5 flex items-end justify-between">
						<h2 className="text-2xl font-bold text-slate-900">
							{value}
						</h2>

						<div className="flex items-center gap-1 text-[11px]">
							<div className="flex items-center gap-0.5 font-semibold text-emerald-600">
								<ArrowUpRight size={13} />
								<span>{change}</span>
							</div>

							<span className="text-slate-400">vs Last 30d</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
